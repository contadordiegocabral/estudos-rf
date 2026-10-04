/* LRF — Módulo 06: Gestão patrimonial, transparência, controle e fiscalização (arts. 43 a 75) */
window.MOD = window.MOD || {};
window.MOD.lrf06 = (function(){
"use strict";

var CARDS = [
  ["Art. 43 — onde ficam as disponibilidades de caixa da União?","No <b>Banco Central do Brasil</b>. <span class=\"lawref\">CF, art. 164, § 3º</span>"],
  ["E as disponibilidades dos Estados, DF, Municípios e empresas controladas?","Em <b>instituições financeiras oficiais</b>, <b>ressalvados os casos previstos em lei</b>."],
  ["Art. 43, § 1º — e as da previdência?","As disponibilidades dos regimes de previdência <b>geral e próprio</b> ficam em <b>conta separada</b> das demais do ente e são <b>aplicadas nas condições de mercado</b>."],
  ["Art. 44 — a regra da preservação do patrimônio","É <b>vedada</b> a aplicação da <b>receita de capital derivada da alienação de bens e direitos</b> do patrimônio público para o financiamento de <b>despesa corrente</b>."],
  ["Qual a única exceção do art. 44?","Se a receita for <b>destinada por lei aos regimes de previdência social</b>, geral e próprio dos servidores públicos."],
  ["Art. 45 — projetos novos × projetos em andamento","A LOA e os créditos adicionais <b>só incluirão novos projetos</b> após <b>adequadamente atendidos os em andamento</b> e <b>contempladas as despesas de conservação</b> do patrimônio público."],
  ["Art. 46 — desapropriação de imóvel urbano","É <b>nulo de pleno direito</b> o ato de desapropriação expedido sem o atendimento do art. 182, § 3º, da Constituição ou <b>prévio depósito judicial</b> do valor da indenização."],
  ["Art. 47 — contrato de gestão da empresa controlada","A empresa controlada que firmar <b>contrato de gestão</b> com objetivos e metas de desempenho disporá de <b>autonomia gerencial, orçamentária e financeira</b>."],
  ["Art. 47, parágrafo único — a nota explicativa","A empresa controlada incluirá em seus <b>balanços trimestrais</b> nota explicativa informando: <b>recursos recebidos do controlador</b>; <b>fornecimento de bens e serviços ao controlador</b>; e <b>vendas, serviços, empréstimos e financiamentos com condições diferentes das de mercado</b>."],
  ["Balanços trimestrais ou anuais?","<b>Trimestrais.</b> É a troca preferida da banca no art. 47."],
  ["Art. 48 — os instrumentos de transparência","<b>Planos, orçamentos e LDO</b> · <b>prestações de contas e parecer prévio</b> · <b>RREO</b> · <b>RGF</b> · <b>versões simplificadas</b> desses documentos — com ampla divulgação, inclusive eletrônica."],
  ["Art. 48, § 1º — as três formas de assegurar a transparência","<b>I</b> — participação popular e <b>audiências públicas</b> na elaboração e discussão dos planos, LDO e orçamentos. <b>II</b> — informações da execução orçamentária e financeira <b>em tempo real</b>. <b>III</b> — <b>sistema integrado</b> de administração financeira e controle."],
  ["Art. 48-A — o que se divulga sobre a DESPESA","<b>Todos os atos</b> das unidades gestoras <b>no momento de sua realização</b>, com: <b>número do processo</b>, <b>bem fornecido ou serviço prestado</b>, <b>pessoa física ou jurídica beneficiária</b> e, quando for o caso, o <b>procedimento licitatório</b>."],
  ["Art. 48-A — o que se divulga sobre a RECEITA","O <b>lançamento e o recebimento</b> de <b>toda a receita</b> das unidades gestoras, <b>inclusive</b> a referente a <b>recursos extraordinários</b>."],
  ["Art. 49 — por quanto tempo as contas ficam disponíveis?","<b>Durante todo o exercício</b>, no respectivo <b>Poder Legislativo</b> e no <b>órgão técnico</b> responsável pela elaboração, para consulta e apreciação dos cidadãos e instituições da sociedade."],
  ["Art. 50, I — o registro da disponibilidade de caixa","Constará de <b>registro próprio</b>, de modo que os recursos <b>vinculados</b> a órgão, fundo ou despesa obrigatória fiquem <b>identificados e escriturados de forma individualizada</b>."],
  ["Art. 50, II — qual o regime da despesa?","A <b>despesa e a assunção de compromisso</b> são registradas pelo <b>regime de competência</b>, apurando-se <b>em caráter complementar</b> o resultado dos fluxos financeiros pelo <b>regime de caixa</b>."],
  ["Art. 50, V — as operações de crédito e os restos a pagar","Escrituradas de modo a <b>evidenciar o montante e a variação da dívida pública</b> no período, detalhando ao menos a <b>natureza e o tipo de credor</b>."],
  ["Art. 50, VI — as variações patrimoniais","Darão <b>destaque à origem e ao destino dos recursos provenientes da alienação de ativos</b>."],
  ["Art. 51 — quem consolida as contas e até quando?","O <b>Poder Executivo da União</b>, até <b>30 de junho</b>, promove a consolidação <b>nacional e por esfera de governo</b> das contas do exercício anterior."],
  ["Art. 51, § 1º — os prazos de envio","<b>Municípios</b> até <b>30 de abril</b> (com cópia ao Executivo do Estado) · <b>Estados</b> até <b>31 de maio</b>."],
  ["Qual a sanção por descumprir os prazos de contas e relatórios?","Até regularizar, o Poder ou órgão fica impedido de <b>receber transferências voluntárias</b> e de <b>contratar operações de crédito</b> — exceto as destinadas ao <b>pagamento da dívida mobiliária</b>."],
  ["Art. 52 — o que é o RREO e qual a periodicidade","<b>Relatório Resumido da Execução Orçamentária</b>: abrange <b>todos os Poderes e o Ministério Público</b> e é publicado até <b>30 dias após o encerramento de cada bimestre</b>."],
  ["Do que o RREO é composto?","<b>Balanço orçamentário</b> e <b>demonstrativos da execução das receitas e das despesas</b>."],
  ["O balanço orçamentário do RREO detalha o quê?","Por <b>categoria econômica</b>: as <b>receitas por fonte</b> (realizadas, a realizar e previsão atualizada) e as <b>despesas por grupo de natureza</b> (dotação, despesa liquidada e saldo)."],
  ["Os demonstrativos de execução do RREO trazem o quê?","<b>Receitas</b> por categoria econômica e fonte · <b>despesas</b> por categoria econômica e grupo de natureza · <b>despesas por função e subfunção</b>."],
  ["Quantos RREO existem por ente?","<b>Um só</b>, consolidado e publicado pelo <b>Chefe do Poder Executivo</b>, abrangendo <b>todos</b> os Poderes e o Ministério Público."],
  ["Art. 53 — os cinco demonstrativos que acompanham o RREO","<b>RCL</b> · <b>receitas e despesas previdenciárias</b> · <b>resultados nominal e primário</b> · <b>despesas com juros</b> · <b>Restos a Pagar</b> (por Poder e órgão: inscritos, pagos e a pagar)."],
  ["Art. 53, § 1º — o que só vem no ÚLTIMO bimestre","<b>Regra de ouro</b> (operações de crédito não excederam as despesas de capital) · <b>projeções atuariais</b> dos regimes de previdência · <b>variação patrimonial</b>, com a alienação de ativos e a aplicação dos recursos."],
  ["Art. 53, § 2º — quando há justificativas?","Quando for o caso, justificam-se a <b>limitação de empenho</b> e a <b>frustração de receitas</b>, especificando as medidas de combate à sonegação e à evasão e as ações de fiscalização e cobrança."],
  ["Art. 54 — o que é o RGF e quando é emitido","<b>Relatório de Gestão Fiscal</b>, emitido pelos titulares dos Poderes e órgãos ao final de <b>cada quadrimestre</b>."],
  ["Quem assina o RGF?","<b>Chefe do Executivo</b> · <b>Presidente e demais membros da Mesa Diretora</b> do Legislativo · <b>Presidente de Tribunal e membros de Conselho de Administração</b> do Judiciário · <b>Chefe do Ministério Público</b> · e as <b>autoridades da administração financeira e do controle interno</b>."],
  ["Art. 55, § 2º — prazo de publicação do RGF","Até <b>30 dias após o encerramento do período</b> a que corresponder, com amplo acesso ao público, inclusive eletrônico."],
  ["Art. 55, I — o comparativo do RGF","Limites da <b>despesa total com pessoal</b> (distinguindo inativos e pensionistas), das <b>dívidas consolidada e mobiliária</b>, das <b>concessões de garantias</b> e das <b>operações de crédito, inclusive por ARO</b>."],
  ["Art. 55, II — o que mais o RGF traz","<b>Indicação das medidas corretivas</b> adotadas ou a adotar, se ultrapassado qualquer dos limites."],
  ["Art. 55, § 1º — o RGF reduzido","O relatório do <b>Legislativo, do Judiciário e do Ministério Público</b> <b>não</b> traz o comparativo com os limites de <b>dívidas</b>, <b>garantias</b> e <b>operações de crédito</b> — só o de <b>pessoal</b>, mais as medidas corretivas e os demonstrativos do último quadrimestre."],
  ["Art. 55, III — os demonstrativos do último quadrimestre do RGF","<b>Disponibilidades de caixa em 31 de dezembro</b> · <b>inscrição em Restos a Pagar</b> · <b>cumprimento das regras da ARO</b> (liquidada até 10/12 e não realizada no último ano de mandato)."],
  ["RREO × RGF — o quadro","<b>RREO:</b> bimestral, único por ente, sobre <b>receitas e despesas</b>. <b>RGF:</b> quadrimestral, <b>um por Poder e órgão</b>, sobre <b>limites</b>. Ambos publicados em até <b>30 dias</b>."],
  ["Art. 55, § 4º — a padronização","Os relatórios dos arts. 52 e 55 são elaborados de <b>forma padronizada</b>, segundo modelos que podem ser atualizados pelo <b>conselho de gestão fiscal</b> do art. 67."],
  ["Art. 63 — a faculdade dos Municípios pequenos","Municípios com <b>menos de 50 mil habitantes</b> podem divulgar <b>semestralmente</b> o <b>RGF</b> e os demonstrativos do art. 53, e aplicar ao <b>final do semestre</b> o art. 22, parágrafo único, e o art. 30, § 4º."],
  ["O Município pequeno fica dispensado do RREO bimestral?","<b>Não.</b> A alínea que permitia isso foi <b>revogada</b> pela LC 131/2009 — o <b>RREO continua bimestral</b> para todos."],
  ["Art. 56 — o que as contas do Chefe do Executivo incluem","Além das suas próprias, as dos <b>Presidentes dos órgãos do Legislativo e do Judiciário</b> e do <b>Chefe do Ministério Público</b>, que recebem <b>parecer prévio separado</b> do respectivo Tribunal de Contas."],
  ["Art. 57 — prazo do parecer prévio","<b>60 dias</b> do recebimento, se outro não estiver estabelecido nas constituições estaduais ou leis orgânicas municipais."],
  ["Art. 57, § 1º — a exceção dos 180 dias","Municípios que <b>não sejam capitais</b> e tenham <b>menos de 200 mil habitantes</b>: prazo de <b>180 dias</b>."],
  ["Art. 57, § 2º — o recesso dos Tribunais de Contas","<b>Não entrarão em recesso</b> enquanto existirem contas de Poder ou órgão do art. 20 <b>pendentes de parecer prévio</b>."],
  ["Art. 58 — o que a prestação de contas evidencia","O <b>desempenho da arrecadação em relação à previsão</b>, com as providências de <b>fiscalização das receitas e combate à sonegação</b>, as <b>ações de recuperação de créditos</b> e as demais medidas de incremento das receitas."],
  ["Art. 59 — quem fiscaliza o cumprimento da LRF","O <b>Poder Legislativo</b>, diretamente ou com auxílio dos <b>Tribunais de Contas</b>, e o <b>sistema de controle interno</b> de cada Poder e do Ministério Público."],
  ["Art. 59, § 1º — o alerta dos Tribunais de Contas","Quando a <b>despesa com pessoal</b> ultrapassar <b>90%</b> do limite; quando <b>dívidas, operações de crédito e garantias</b> passarem de <b>90%</b>; quando os gastos com <b>inativos e pensionistas</b> excederem o limite legal; e diante de <b>riscos às metas</b> ou <b>indícios de irregularidade</b>."],
  ["Art. 67 — o Conselho de Gestão Fiscal","Acompanha e avalia, de forma <b>permanente</b>, a política e a operacionalidade da gestão fiscal. Composto por representantes de <b>todos os Poderes e esferas</b>, do <b>Ministério Público</b> e de <b>entidades técnicas representativas da sociedade</b>."],
  ["Art. 73-A — quem pode denunciar","<b>Qualquer cidadão, partido político, associação ou sindicato</b> é parte legítima para denunciar ao <b>Tribunal de Contas</b> e ao <b>Ministério Público</b> o descumprimento da LRF."]
];

var QS = [
  ["As disponibilidades de caixa da União serão depositadas no Banco Central do Brasil.","C","CESPE","Art. 43 da LRF, remetendo ao art. 164, § 3º, da Constituição."],
  ["As disponibilidades de caixa dos Estados, do Distrito Federal, dos Municípios e das empresas por eles controladas serão depositadas em instituições financeiras oficiais, ressalvados os casos previstos em lei.","C","FCC","Art. 164, § 3º, da Constituição — a ressalva legal é parte do texto."],
  ["As disponibilidades de caixa dos regimes de previdência social, geral e próprio dos servidores públicos, ficarão depositadas em conta separada das demais disponibilidades de cada ente e aplicadas nas condições de mercado.","C","FGV","Art. 43, § 1º."],
  ["As disponibilidades de caixa dos Municípios podem ser depositadas em qualquer instituição financeira, oficial ou privada, a critério do gestor.","E","CESPE","Devem ir a <b>instituições financeiras oficiais</b>, salvo os casos previstos em lei."],
  ["É vedada a aplicação da receita de capital derivada da alienação de bens e direitos que integram o patrimônio público para o financiamento de despesa corrente.","C","FCC","Art. 44 — preservação do patrimônio público."],
  ["A vedação à aplicação da receita da alienação de bens no financiamento de despesa corrente não comporta exceção.","E","VUNESP","Comporta: a receita <b>destinada por lei aos regimes de previdência</b>, geral e próprio dos servidores."],
  ["A lei orçamentária e as de créditos adicionais só incluirão novos projetos após adequadamente atendidos os em andamento e contempladas as despesas de conservação do patrimônio público.","C","CESPE","Art. 45."],
  ["Os novos projetos têm precedência sobre os projetos em andamento, desde que estejam previstos no plano plurianual.","E","FGV","O art. 45 inverte: primeiro os <b>em andamento</b> e a <b>conservação</b>; só depois os novos."],
  ["É nulo de pleno direito o ato de desapropriação de imóvel urbano expedido sem o atendimento do disposto no § 3º do art. 182 da Constituição ou prévio depósito judicial do valor da indenização.","C","FCC","Art. 46."],
  ["A empresa controlada que firmar contrato de gestão em que se estabeleçam objetivos e metas de desempenho disporá de autonomia gerencial, orçamentária e financeira.","C","CESPE","Art. 47, caput."],
  ["A empresa controlada incluirá em seus balanços trimestrais nota explicativa em que informará os recursos recebidos do controlador e o fornecimento de bens e serviços ao controlador.","C","VUNESP","Art. 47, parágrafo único — também as vendas e empréstimos em condições diferentes das de mercado."],
  ["A nota explicativa da empresa controlada é exigida apenas nos balanços anuais.","E","FGV","O art. 47, parágrafo único, fala em balanços <b>trimestrais</b>."],
  ["São instrumentos de transparência da gestão fiscal os planos, orçamentos e leis de diretrizes orçamentárias, as prestações de contas e o respectivo parecer prévio, o RREO, o RGF e as versões simplificadas desses documentos.","C","CESPE","Art. 48, caput."],
  ["A transparência será assegurada também mediante incentivo à participação popular e realização de audiências públicas durante os processos de elaboração e discussão dos planos, da lei de diretrizes orçamentárias e dos orçamentos.","C","FCC","Art. 48, § 1º, I."],
  ["A liberação ao pleno conhecimento e acompanhamento da sociedade de informações pormenorizadas sobre a execução orçamentária e financeira deve ocorrer em tempo real, em meios eletrônicos de acesso público.","C","FGV","Art. 48, § 1º, II — inovação da LC 131/2009."],
  ["A adoção de sistema integrado de administração financeira e controle deve atender a padrão mínimo de qualidade estabelecido pelo Poder Executivo da União.","C","CESPE","Art. 48, § 1º, III."],
  ["Quanto à despesa, serão disponibilizados todos os atos praticados pelas unidades gestoras no decorrer da execução, no momento de sua realização, com informação do número do processo, do bem fornecido ou serviço prestado, do beneficiário do pagamento e, quando for o caso, do procedimento licitatório.","C","FCC","Art. 48-A, I."],
  ["Quanto à receita, serão disponibilizados o lançamento e o recebimento de toda a receita das unidades gestoras, inclusive a referente a recursos extraordinários.","C","VUNESP","Art. 48-A, II."],
  ["As contas apresentadas pelo Chefe do Poder Executivo ficarão disponíveis, durante todo o exercício, no respectivo Poder Legislativo e no órgão técnico responsável pela sua elaboração, para consulta e apreciação pelos cidadãos e instituições da sociedade.","C","CESPE","Art. 49."],
  ["As contas apresentadas pelo Chefe do Poder Executivo ficam disponíveis para consulta pública pelo prazo de sessenta dias.","E","FGV","O prazo é <b>todo o exercício</b> (art. 49)."],
  ["A disponibilidade de caixa constará de registro próprio, de modo que os recursos vinculados a órgão, fundo ou despesa obrigatória fiquem identificados e escriturados de forma individualizada.","C","FCC","Art. 50, I."],
  ["A despesa e a assunção de compromisso serão registradas segundo o regime de competência, apurando-se, em caráter complementar, o resultado dos fluxos financeiros pelo regime de caixa.","C","CESPE","Art. 50, II."],
  ["A Lei de Responsabilidade Fiscal determina que a despesa seja registrada pelo regime de caixa, apurando-se em caráter complementar o resultado pelo regime de competência.","E","VUNESP","Está invertido: a despesa segue o regime de <b>competência</b>."],
  ["As operações de crédito, as inscrições em Restos a Pagar e as demais formas de assunção de compromissos junto a terceiros deverão ser escrituradas de modo a evidenciar o montante e a variação da dívida pública no período.","C","FGV","Art. 50, V — detalhando ao menos a natureza e o tipo de credor."],
  ["A demonstração das variações patrimoniais dará destaque à origem e ao destino dos recursos provenientes da alienação de ativos.","C","FCC","Art. 50, VI — dialoga diretamente com o art. 44."],
  ["O Poder Executivo da União promoverá, até o dia trinta de junho, a consolidação, nacional e por esfera de governo, das contas dos entes da Federação relativas ao exercício anterior.","C","CESPE","Art. 51, caput."],
  ["Os Municípios encaminharão suas contas ao Poder Executivo da União até trinta de abril e os Estados até trinta e um de maio.","C","FGV","Art. 51, § 1º, I e II — os Municípios enviam cópia ao Executivo do respectivo Estado."],
  ["O Relatório Resumido da Execução Orçamentária abrangerá todos os Poderes e o Ministério Público e será publicado até trinta dias após o encerramento de cada bimestre.","C","CESPE","Art. 52, caput."],
  ["O Relatório Resumido da Execução Orçamentária será publicado até trinta dias após o encerramento de cada quadrimestre.","E","FCC","Quadrimestral é o <b>RGF</b>. O RREO é <b>bimestral</b>."],
  ["O Relatório Resumido da Execução Orçamentária é composto do balanço orçamentário e dos demonstrativos da execução das receitas e das despesas.","C","VUNESP","Art. 52, I e II."],
  ["O balanço orçamentário do RREO especificará, por categoria econômica, as receitas por fonte, informando as realizadas e a realizar, bem como a previsão atualizada.","C","FGV","Art. 52, I, a."],
  ["Os demonstrativos da execução que integram o RREO apresentam as despesas por função e subfunção.","C","CESPE","Art. 52, II, c."],
  ["A responsabilidade pela emissão do RREO é de cada Poder e órgão, que publicam relatórios próprios e independentes.","E","FCC","Existe <b>um único</b> RREO por ente, consolidado e publicado pelo <b>Chefe do Executivo</b>, abrangendo todos os Poderes e o MP. Quem é por Poder e órgão é o <b>RGF</b>."],
  ["Acompanharão o RREO demonstrativos relativos à apuração da receita corrente líquida, às receitas e despesas previdenciárias, aos resultados nominal e primário, às despesas com juros e aos Restos a Pagar.","C","CESPE","Art. 53, I a V."],
  ["O demonstrativo dos Restos a Pagar que acompanha o RREO detalha, por Poder e órgão, os valores inscritos, os pagamentos realizados e o montante a pagar.","C","VUNESP","Art. 53, V."],
  ["O RREO referente ao último bimestre será acompanhado também de demonstrativos do atendimento à regra de ouro, das projeções atuariais dos regimes de previdência e da variação patrimonial.","C","FGV","Art. 53, § 1º, I a III."],
  ["O demonstrativo das projeções atuariais dos regimes de previdência acompanha o RREO de todos os bimestres do exercício.","E","CESPE","Só o do <b>último bimestre</b> (art. 53, § 1º, II)."],
  ["Quando for o caso, o RREO será acompanhado de justificativas da limitação de empenho e da frustração de receitas.","C","FCC","Art. 53, § 2º, I e II."],
  ["Ao final de cada quadrimestre será emitido pelos titulares dos Poderes e órgãos o Relatório de Gestão Fiscal.","C","CESPE","Art. 54, caput."],
  ["O Relatório de Gestão Fiscal será emitido ao final de cada bimestre.","E","FGV","Bimestral é o <b>RREO</b>. O RGF é <b>quadrimestral</b>."],
  ["No Poder Legislativo, o Relatório de Gestão Fiscal será assinado pelo Presidente e demais membros da Mesa Diretora.","C","FCC","Art. 54, II."],
  ["O Relatório de Gestão Fiscal também será assinado pelas autoridades responsáveis pela administração financeira e pelo controle interno.","C","VUNESP","Art. 54, parágrafo único."],
  ["O Relatório de Gestão Fiscal será publicado até trinta dias após o encerramento do período a que corresponder, com amplo acesso ao público, inclusive por meio eletrônico.","C","CESPE","Art. 55, § 2º."],
  ["O descumprimento do prazo de publicação do Relatório de Gestão Fiscal impede o Poder ou órgão de receber transferências voluntárias e de contratar operações de crédito, exceto as destinadas ao pagamento da dívida mobiliária.","C","FGV","Art. 55, § 3º — a mesma sanção dos arts. 51, § 2º, e 52, § 2º."],
  ["O Relatório de Gestão Fiscal conterá o comparativo com os limites da despesa total com pessoal, distinguindo a com inativos e pensionistas, das dívidas consolidada e mobiliária, das concessões de garantias e das operações de crédito, inclusive por antecipação de receita.","C","FCC","Art. 55, I."],
  ["O Relatório de Gestão Fiscal indicará as medidas corretivas adotadas ou a adotar, se ultrapassado qualquer dos limites.","C","CESPE","Art. 55, II."],
  ["O relatório do Poder Legislativo, do Poder Judiciário e do Ministério Público não conterá o comparativo com os limites das dívidas consolidada e mobiliária, das concessões de garantias e das operações de crédito.","C","VUNESP","Art. 55, § 1º — esses órgãos comparam apenas o limite de <b>despesa com pessoal</b>."],
  ["No último quadrimestre, o Relatório de Gestão Fiscal trará demonstrativos do montante das disponibilidades de caixa em trinta e um de dezembro, da inscrição em Restos a Pagar e do cumprimento das regras da operação por antecipação de receita.","C","FGV","Art. 55, III, a, b e c."],
  ["Os relatórios de que tratam os arts. 52 e 55 deverão ser elaborados de forma padronizada, segundo modelos que poderão ser atualizados pelo conselho de gestão fiscal.","C","FCC","Art. 55, § 4º."],
  ["É facultado aos Municípios com população inferior a cinquenta mil habitantes divulgar semestralmente o Relatório de Gestão Fiscal e os demonstrativos do art. 53.","C","CESPE","Art. 63, II."],
  ["O Município com menos de cinquenta mil habitantes que optar pela divulgação semestral fica dispensado de publicar o Relatório Resumido da Execução Orçamentária a cada bimestre.","E","FGV","A alínea que permitia o RREO semestral foi <b>revogada</b> pela LC 131/2009 — o RREO segue bimestral para todos."],
  ["As contas prestadas pelos Chefes do Poder Executivo incluirão, além das suas próprias, as dos Presidentes dos órgãos dos Poderes Legislativo e Judiciário e do Chefe do Ministério Público, as quais receberão parecer prévio, separadamente, do respectivo Tribunal de Contas.","C","CESPE","Art. 56, caput."],
  ["Os Tribunais de Contas emitirão parecer prévio conclusivo sobre as contas no prazo de sessenta dias do recebimento, se outro não estiver estabelecido nas constituições estaduais ou nas leis orgânicas municipais.","C","FCC","Art. 57, caput."],
  ["No caso de Municípios que não sejam capitais e que tenham menos de duzentos mil habitantes, o prazo para o parecer prévio será de cento e oitenta dias.","C","VUNESP","Art. 57, § 1º — duas condições cumulativas."],
  ["Os Tribunais de Contas não entrarão em recesso enquanto existirem contas de Poder, ou órgão referido no art. 20, pendentes de parecer prévio.","C","FGV","Art. 57, § 2º."],
  ["A prestação de contas evidenciará o desempenho da arrecadação em relação à previsão, destacando as providências adotadas no âmbito da fiscalização das receitas e do combate à sonegação.","C","CESPE","Art. 58 — também as ações de recuperação de créditos."],
  ["O Poder Legislativo, diretamente ou com o auxílio dos Tribunais de Contas, e o sistema de controle interno de cada Poder e do Ministério Público fiscalizarão o cumprimento das normas da Lei de Responsabilidade Fiscal.","C","FCC","Art. 59, caput."],
  ["Os Tribunais de Contas alertarão os Poderes ou órgãos quando constatarem que o montante da despesa total com pessoal ultrapassou noventa por cento do limite.","C","CESPE","Art. 59, § 1º, II — é o alerta, distinto da vedação do art. 22, parágrafo único, que também usa 95%."],
  ["O alerta dos Tribunais de Contas quanto às dívidas consolidada e mobiliária, às operações de crédito e à concessão de garantia é emitido quando os montantes ultrapassam noventa e cinco por cento dos respectivos limites.","E","FGV","O alerta do art. 59, § 1º, III, é aos <b>90%</b>."],
  ["O acompanhamento e a avaliação, de forma permanente, da política e da operacionalidade da gestão fiscal serão realizados por conselho de gestão fiscal, constituído por representantes de todos os Poderes e esferas de Governo, do Ministério Público e de entidades técnicas representativas da sociedade.","C","VUNESP","Art. 67, caput."],
  ["Qualquer cidadão, partido político, associação ou sindicato é parte legítima para denunciar ao respectivo Tribunal de Contas e ao órgão competente do Ministério Público o descumprimento das prescrições da Lei de Responsabilidade Fiscal.","C","CESPE","Art. 73-A."]
];

var FEY = {
  U1:{ask:"Explique a gestão patrimonial na LRF: disponibilidades de caixa, preservação do patrimônio e empresas controladas.",
    hint:"Art. 43 com a regra da previdência; art. 44 e sua única exceção; arts. 45 e 46; art. 47 com a nota explicativa trimestral.",
    ref:"O art. 43 da Lei de Responsabilidade Fiscal determina que as disponibilidades de caixa dos entes da Federação sejam depositadas conforme o art. 164, § 3º, da Constituição, ou seja, as da União no Banco Central do Brasil e as dos Estados, do Distrito Federal, dos Municípios, dos órgãos ou entidades do Poder Público e das empresas por ele controladas em instituições financeiras oficiais, ressalvados os casos previstos em lei; as disponibilidades dos regimes de previdência social, geral e próprio dos servidores públicos, por sua vez, ficam depositadas em conta separada das demais disponibilidades de cada ente e aplicadas nas condições de mercado. Quanto à preservação do patrimônio público, o art. 44 veda a aplicação da receita de capital derivada da alienação de bens e direitos que integram o patrimônio público para o financiamento de despesa corrente, salvo se destinada por lei aos regimes de previdência social, geral e próprio dos servidores públicos. O art. 45 estabelece que a lei orçamentária e as de créditos adicionais só incluirão novos projetos após adequadamente atendidos os em andamento e contempladas as despesas de conservação do patrimônio público, nos termos em que dispuser a lei de diretrizes orçamentárias, e o art. 46 declara nulo de pleno direito o ato de desapropriação de imóvel urbano expedido sem o atendimento do art. 182, § 3º, da Constituição ou prévio depósito judicial do valor da indenização. Por fim, o art. 47 confere autonomia gerencial, orçamentária e financeira à empresa controlada que firmar contrato de gestão com objetivos e metas de desempenho, exigindo, em seu parágrafo único, que ela inclua em seus balanços trimestrais nota explicativa sobre os recursos recebidos do controlador, o fornecimento de bens e serviços a ele e as operações realizadas em condições diferentes das vigentes no mercado."},
  U2:{ask:"Explique os instrumentos de transparência da gestão fiscal e as regras de escrituração e consolidação das contas.",
    hint:"O rol do art. 48 e os três incisos do § 1º; o art. 48-A com despesa e receita; o art. 49; os incisos do art. 50; e os prazos do art. 51 com sua sanção.",
    ref:"Nos termos do art. 48 da Lei de Responsabilidade Fiscal, são instrumentos de transparência da gestão fiscal, aos quais será dada ampla divulgação, inclusive em meios eletrônicos de acesso público, os planos, orçamentos e leis de diretrizes orçamentárias, as prestações de contas e o respectivo parecer prévio, o Relatório Resumido da Execução Orçamentária, o Relatório de Gestão Fiscal e as versões simplificadas desses documentos. A transparência é assegurada também mediante o incentivo à participação popular e a realização de audiências públicas durante a elaboração e a discussão dos planos, da lei de diretrizes e dos orçamentos; a liberação ao pleno conhecimento e acompanhamento da sociedade, em tempo real, de informações pormenorizadas sobre a execução orçamentária e financeira; e a adoção de sistema integrado de administração financeira e controle que atenda a padrão mínimo de qualidade estabelecido pelo Poder Executivo da União. O art. 48-A detalha esse dever, exigindo, quanto à despesa, a divulgação de todos os atos praticados pelas unidades gestoras no momento de sua realização, com o número do processo, o bem fornecido ou serviço prestado, a pessoa beneficiária do pagamento e, quando for o caso, o procedimento licitatório realizado; e, quanto à receita, o lançamento e o recebimento de toda a receita das unidades gestoras, inclusive a referente a recursos extraordinários. O art. 49 mantém as contas do Chefe do Poder Executivo disponíveis durante todo o exercício no Poder Legislativo e no órgão técnico responsável pela elaboração. Em matéria de escrituração, o art. 50 determina o registro individualizado dos recursos vinculados, o registro da despesa e da assunção de compromisso pelo regime de competência com apuração complementar dos fluxos financeiros pelo regime de caixa, demonstrações contábeis isoladas e conjuntas de cada órgão, fundo ou entidade, demonstrativos específicos de receitas e despesas previdenciárias, a escrituração das operações de crédito e dos Restos a Pagar de modo a evidenciar o montante e a variação da dívida pública, e o destaque, nas variações patrimoniais, da origem e do destino dos recursos da alienação de ativos. Por fim, o art. 51 atribui ao Poder Executivo da União a consolidação nacional e por esfera de governo das contas do exercício anterior até trinta de junho, devendo os Municípios encaminhar suas contas até trinta de abril e os Estados até trinta e um de maio, sob pena de, até a regularização, ficarem impedidos de receber transferências voluntárias e de contratar operações de crédito, exceto as destinadas ao pagamento da dívida mobiliária."},
  U3:{ask:"Explique o Relatório Resumido da Execução Orçamentária: periodicidade, composição e demonstrativos.",
    hint:"Abrangência e prazo; as duas partes do art. 52; os cinco demonstrativos do art. 53 e os três exclusivos do último bimestre; e as justificativas do § 2º.",
    ref:"O Relatório Resumido da Execução Orçamentária, disciplinado no art. 52 da Lei de Responsabilidade Fiscal, abrange todos os Poderes e o Ministério Público, é publicado até trinta dias após o encerramento de cada bimestre e compõe-se do balanço orçamentário, que especifica por categoria econômica as receitas por fonte — informando as realizadas, as a realizar e a previsão atualizada — e as despesas por grupo de natureza, discriminando a dotação para o exercício, a despesa liquidada e o saldo; e dos demonstrativos da execução das receitas, por categoria econômica e fonte, das despesas, por categoria econômica e grupo de natureza, e das despesas por função e subfunção. Trata-se de relatório único por ente, consolidado e publicado pelo Chefe do Poder Executivo, o que o distingue do Relatório de Gestão Fiscal, emitido por cada Poder e órgão. O art. 53 determina que o acompanhem demonstrativos relativos à apuração da receita corrente líquida, às receitas e despesas previdenciárias, aos resultados nominal e primário, às despesas com juros e aos Restos a Pagar, estes detalhando, por Poder e órgão, os valores inscritos, os pagamentos realizados e o montante a pagar. O relatório referente ao último bimestre do exercício é acompanhado ainda de demonstrativos do atendimento à regra de ouro, isto é, de que a realização de operações de crédito não excedeu o montante das despesas de capital, das projeções atuariais dos regimes de previdência social e da variação patrimonial, evidenciando a alienação de ativos e a aplicação dos recursos dela decorrentes. Quando for o caso, serão apresentadas justificativas da limitação de empenho e da frustração de receitas, especificando as medidas de combate à sonegação e à evasão fiscal adotadas e a adotar e as ações de fiscalização e cobrança. O descumprimento do prazo de publicação impede o ente, até a regularização, de receber transferências voluntárias e de contratar operações de crédito, exceto as destinadas ao pagamento da dívida mobiliária."},
  U4:{ask:"Explique o Relatório de Gestão Fiscal: quem emite, o que contém e o que muda nos demais Poderes.",
    hint:"Periodicidade e signatários do art. 54; os incisos do art. 55; o RGF reduzido do § 1º; o prazo e a sanção dos §§ 2º e 3º; e a faculdade do art. 63.",
    ref:"Segundo o art. 54 da Lei de Responsabilidade Fiscal, ao final de cada quadrimestre será emitido pelos titulares dos Poderes e órgãos referidos no art. 20 o Relatório de Gestão Fiscal, assinado pelo Chefe do Poder Executivo; pelo Presidente e demais membros da Mesa Diretora ou órgão decisório equivalente do Poder Legislativo; pelo Presidente de Tribunal e demais membros de Conselho de Administração ou órgão decisório equivalente do Poder Judiciário; pelo Chefe do Ministério Público da União e dos Estados; e ainda pelas autoridades responsáveis pela administração financeira e pelo controle interno. O art. 55 estabelece que o relatório conterá o comparativo com os limites da despesa total com pessoal, distinguindo a relativa a inativos e pensionistas, das dívidas consolidada e mobiliária, das concessões de garantias e das operações de crédito, inclusive por antecipação de receita; a indicação das medidas corretivas adotadas ou a adotar, se ultrapassado qualquer dos limites; e, no último quadrimestre, demonstrativos do montante das disponibilidades de caixa em trinta e um de dezembro, da inscrição em Restos a Pagar e do cumprimento das regras da operação de crédito por antecipação de receita — liquidação até dez de dezembro e não realização no último ano de mandato do Chefe do Executivo. O § 1º prevê um relatório reduzido para o Legislativo, o Judiciário e o Ministério Público, que não trazem o comparativo com os limites de dívidas, garantias e operações de crédito, restringindo-se ao de despesa com pessoal, além dos documentos dos incisos II e III. O relatório é publicado em até trinta dias após o encerramento do período, com amplo acesso ao público, inclusive eletrônico, e o descumprimento desse prazo impede o Poder ou órgão de receber transferências voluntárias e de contratar operações de crédito, exceto as destinadas ao pagamento da dívida mobiliária. Os modelos são padronizados e podem ser atualizados pelo conselho de gestão fiscal. Por fim, o art. 63 faculta aos Municípios com população inferior a cinquenta mil habitantes divulgar semestralmente o Relatório de Gestão Fiscal e os demonstrativos do art. 53, mantido, porém, o Relatório Resumido da Execução Orçamentária em periodicidade bimestral."},
  U5:{ask:"Explique a prestação de contas, a fiscalização da gestão fiscal e o conselho de gestão fiscal.",
    hint:"Art. 56 com o parecer prévio separado; os prazos do art. 57; o conteúdo do art. 58; os seis incisos e os alertas do art. 59; e os arts. 67 e 73-A.",
    ref:"O art. 56 da Lei de Responsabilidade Fiscal determina que as contas prestadas pelos Chefes do Poder Executivo incluam, além das suas próprias, as dos Presidentes dos órgãos dos Poderes Legislativo e Judiciário e as do Chefe do Ministério Público, as quais receberão parecer prévio, separadamente, do respectivo Tribunal de Contas, dando-se ampla divulgação aos resultados da apreciação. O art. 57 fixa em sessenta dias do recebimento o prazo para o parecer prévio conclusivo, se outro não estiver estabelecido nas constituições estaduais ou nas leis orgânicas municipais, elevando-o a cento e oitenta dias no caso de Municípios que não sejam capitais e tenham menos de duzentos mil habitantes, e veda o recesso dos Tribunais de Contas enquanto existirem contas pendentes de parecer prévio. O art. 58 exige que a prestação de contas evidencie o desempenho da arrecadação em relação à previsão, destacando as providências adotadas no âmbito da fiscalização das receitas e do combate à sonegação, as ações de recuperação de créditos nas instâncias administrativa e judicial e as demais medidas de incremento das receitas tributárias e de contribuições. Quanto à fiscalização, o art. 59 atribui ao Poder Legislativo, diretamente ou com o auxílio dos Tribunais de Contas, e ao sistema de controle interno de cada Poder e do Ministério Público o acompanhamento do cumprimento da lei, com ênfase no atingimento das metas da lei de diretrizes orçamentárias, nos limites e condições das operações de crédito e da inscrição em Restos a Pagar, nas medidas de retorno da despesa com pessoal e das dívidas aos respectivos limites, na destinação dos recursos obtidos com a alienação de ativos e no limite de gastos dos legislativos municipais. Os Tribunais de Contas emitem alerta quando identificam risco às metas fiscais, quando a despesa total com pessoal ultrapassa noventa por cento do limite, quando as dívidas, as operações de crédito e as garantias superam noventa por cento dos seus limites, quando os gastos com inativos e pensionistas excedem o limite legal e diante de fatos que comprometam custos ou resultados de programas ou indiquem irregularidades. Por fim, o art. 67 cria o conselho de gestão fiscal, incumbido do acompanhamento e da avaliação permanentes da política e da operacionalidade da gestão fiscal, composto por representantes de todos os Poderes e esferas de governo, do Ministério Público e de entidades técnicas representativas da sociedade, e o art. 73-A confere a qualquer cidadão, partido político, associação ou sindicato legitimidade para denunciar ao Tribunal de Contas e ao Ministério Público o descumprimento da lei."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Art. 43 — onde o dinheiro público dorme",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">União</span><span class="cd">Disponibilidades depositadas no <b>Banco Central do Brasil</b>.</span></div>'+
      '<div class="chip"><span class="cn">Estados, DF, Municípios e estatais</span><span class="cd">Em <b>instituições financeiras oficiais</b> — <b>ressalvados os casos previstos em lei</b>.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">§ 1º — o caixa da previdência</span><p>As disponibilidades dos regimes <b>geral e próprio</b> ficam em <b>conta separada</b> das demais do ente e são <b>aplicadas nas condições de mercado</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Não apague a ressalva</span><p>O texto constitucional diz “<b>ressalvados os casos previstos em lei</b>”. Item que afirme depósito obrigatório em banco oficial <b>sem exceção</b> é falso.</p></div>'),
    sl("Arts. 44 a 46 — preservar o patrimônio",
      '<div class="box"><span class="bl">Art. 44 — a regra</span><p>É <b>vedada</b> a aplicação da <b>receita de capital derivada da alienação de bens e direitos</b> do patrimônio público para o financiamento de <b>despesa corrente</b>.</p><p><b>Única exceção:</b> se a receita for <b>destinada por lei aos regimes de previdência</b>, geral e próprio dos servidores.</p></div>'+
      '<div class="box tip"><span class="bl">A lógica</span><p>Vender patrimônio para pagar folha é consumir capital. A LRF só abre a porta quando o dinheiro vai para a previdência — que é, ela própria, um passivo de longo prazo.</p></div>'+
      '<div class="tl"><div class="tl-w">Art. 45</div><div class="tl-t">A LOA e os créditos adicionais só incluem <b>novos projetos</b> após atendidos os <b>em andamento</b> e contempladas as <b>despesas de conservação</b> do patrimônio público.</div></div>'+
      '<div class="tl"><div class="tl-w">Art. 46</div><div class="tl-t"><b>Nulo de pleno direito</b> o ato de desapropriação de imóvel urbano sem o art. 182, § 3º, da Constituição ou <b>prévio depósito judicial</b> da indenização.</div></div>'),
    sl("Art. 47 — a empresa controlada",
      '<div class="box"><span class="bl">Caput</span><p>A empresa controlada que firmar <b>contrato de gestão</b> com objetivos e metas de desempenho disporá de <b>autonomia gerencial, orçamentária e financeira</b>.</p></div>'+
      '<div class="box"><span class="bl">Parágrafo único — a nota explicativa nos balanços <b>trimestrais</b></span>'+
      '<ul><li><b>Recursos recebidos do controlador</b>, a qualquer título, especificando valor, fonte e destinação.</li>'+
      '<li><b>Fornecimento de bens e serviços ao controlador</b>, com preços e condições.</li>'+
      '<li><b>Vendas, prestações de serviços, empréstimos e financiamentos</b> com <b>condições diferentes das vigentes no mercado</b> — preços, taxas, prazos e garantias.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Trimestrais, não anuais</span><p>É a troca mais repetida do artigo. Guarde: <b>balanços trimestrais</b>.</p></div>')
  ],
  V2:[
    sl("Art. 48 — os cinco instrumentos de transparência",
      '<div class="tree">'+
      '<div class="tree-root">Instrumentos de transparência da gestão fiscal</div>'+
      '<div class="leaf"><b>Planos, orçamentos e LDO</b> — PPA, LOA e LDO.</div>'+
      '<div class="leaf"><b>Prestações de contas</b> e o respectivo <b>parecer prévio</b>.</div>'+
      '<div class="leaf"><b>Relatório Resumido da Execução Orçamentária (RREO)</b>.</div>'+
      '<div class="leaf"><b>Relatório de Gestão Fiscal (RGF)</b>.</div>'+
      '<div class="leaf"><b>Versões simplificadas</b> desses documentos.</div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">§ 1º — as três formas de assegurar</span><ul>'+
      '<li><b>I</b> — participação popular e <b>audiências públicas</b> na elaboração e discussão dos planos, LDO e orçamentos.</li>'+
      '<li><b>II</b> — informações pormenorizadas da execução orçamentária e financeira <b>em tempo real</b>, em meio eletrônico.</li>'+
      '<li><b>III</b> — <b>sistema integrado</b> de administração financeira e controle, com padrão mínimo definido pelo <b>Executivo da União</b>.</li></ul></div>'),
    sl("Art. 48-A — despesa e receita, item a item",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Sobre a DESPESA</span><span class="cd">Todos os atos das unidades gestoras <b>no momento de sua realização</b>: <b>número do processo</b> · <b>bem fornecido ou serviço prestado</b> · <b>beneficiário do pagamento</b> · <b>procedimento licitatório</b>, quando houver.</span></div>'+
      '<div class="chip"><span class="cn">Sobre a RECEITA</span><span class="cd"><b>Lançamento e recebimento</b> de <b>toda</b> a receita das unidades gestoras, <b>inclusive</b> a referente a <b>recursos extraordinários</b>.</span></div>'+
      '</div>'+
      '<div class="box"><span class="bl">Art. 49</span><p>As contas apresentadas pelo Chefe do Executivo ficam disponíveis <b>durante todo o exercício</b>, no <b>Poder Legislativo</b> e no <b>órgão técnico</b> responsável pela elaboração, para consulta dos cidadãos e instituições da sociedade.</p></div>'),
    sl("Art. 50 — como se escritura",
      '<div class="tl"><div class="tl-w">Inciso I</div><div class="tl-t"><b>Disponibilidade de caixa</b> em registro próprio, com os recursos <b>vinculados</b> identificados e escriturados <b>individualizadamente</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Inciso II</div><div class="tl-t">Despesa e assunção de compromisso pelo <b>regime de competência</b>; os fluxos financeiros, <b>em caráter complementar</b>, pelo <b>regime de caixa</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Inciso III</div><div class="tl-t">Demonstrações contábeis <b>isolada e conjuntamente</b> de cada órgão, fundo ou entidade — inclusive <b>estatal dependente</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Inciso IV</div><div class="tl-t">Receitas e despesas <b>previdenciárias</b> em demonstrativos <b>específicos</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Inciso V</div><div class="tl-t">Operações de crédito e <b>Restos a Pagar</b> escriturados de modo a evidenciar o <b>montante e a variação da dívida</b>, com <b>natureza e tipo de credor</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Inciso VI</div><div class="tl-t">Variações patrimoniais com <b>destaque à origem e ao destino</b> dos recursos da <b>alienação de ativos</b>.</div></div>'+
      '<div class="box trap"><span class="bl">O inciso II é campeão de pegadinha</span><p>Despesa: <b>competência</b>. Fluxos financeiros: <b>caixa</b>, e só <b>em caráter complementar</b>. Qualquer inversão é falsa.</p></div>'),
    sl("Art. 51 — consolidar as contas do país",
      '<div class="tl"><div class="tl-w">Até 30/abr</div><div class="tl-t">Os <b>Municípios</b> encaminham suas contas ao Executivo da União, com <b>cópia ao Executivo do Estado</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Até 31/mai</div><div class="tl-t">Os <b>Estados</b> encaminham as suas.</div></div>'+
      '<div class="tl"><div class="tl-w">Até 30/jun</div><div class="tl-t">O <b>Poder Executivo da União</b> promove a <b>consolidação nacional e por esfera de governo</b> das contas do exercício anterior, divulgando-a inclusive em meio eletrônico.</div></div>'+
      '<div class="box trap"><span class="bl">A sanção que se repete três vezes na lei</span><p>Descumprir os prazos do art. 51 (contas), do art. 52 (RREO) ou do art. 55 (RGF) impede, até regularizar, <b>receber transferências voluntárias</b> e <b>contratar operações de crédito</b> — <b>exceto as destinadas ao pagamento da dívida mobiliária</b>.</p></div>')
  ],
  V3:[
    sl("Art. 52 — o RREO em uma tela",
      '<div class="box"><span class="bl">Quem, quando e o quê</span><p>Abrange <b>todos os Poderes e o Ministério Público</b>; publicado até <b>30 dias após o encerramento de cada bimestre</b>; <b>um único</b> por ente, consolidado pelo <b>Chefe do Executivo</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Balanço orçamentário</span><span class="cd">Por <b>categoria econômica</b>: <b>receitas por fonte</b> (realizadas, a realizar, previsão atualizada) e <b>despesas por grupo de natureza</b> (dotação, liquidada, saldo).</span></div>'+
      '<div class="chip"><span class="cn">Demonstrativos de execução</span><span class="cd"><b>Receitas</b> por categoria econômica e fonte · <b>despesas</b> por categoria econômica e grupo de natureza · <b>despesas por função e subfunção</b>.</span></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">Bimestral × quadrimestral</span><p><b>RREO</b> é <b>bimestral</b>. <b>RGF</b> é <b>quadrimestral</b>. Ambos publicados em <b>até 30 dias</b> depois do período.</p></div>'),
    sl("Art. 53 — o que acompanha o RREO",
      '<div class="box tip"><span class="bl">Em todo bimestre — os cinco</span><ul>'+
      '<li><b>Apuração da receita corrente líquida</b> (RCL)</li>'+
      '<li><b>Receitas e despesas previdenciárias</b></li>'+
      '<li><b>Resultados nominal e primário</b></li>'+
      '<li><b>Despesas com juros</b></li>'+
      '<li><b>Restos a Pagar</b>, por Poder e órgão: <b>inscritos</b>, <b>pagos</b> e <b>a pagar</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">Só no ÚLTIMO bimestre — os três</span><ul>'+
      '<li><b>Regra de ouro</b>: as operações de crédito <b>não excederam</b> as despesas de capital.</li>'+
      '<li><b>Projeções atuariais</b> dos regimes de previdência.</li>'+
      '<li><b>Variação patrimonial</b>, evidenciando a <b>alienação de ativos</b> e a aplicação dos recursos.</li></ul></div>'+
      '<div class="box"><span class="bl">§ 2º — quando há explicação a dar</span><p>Justificam-se, quando for o caso, a <b>limitação de empenho</b> e a <b>frustração de receitas</b> — nesta, especificando as medidas de combate à sonegação e à evasão e as ações de fiscalização e cobrança.</p></div>'),
    sl("O RREO em oito linhas — para revisar",
      '<div class="tl"><div class="tl-w">01</div><div class="tl-t">Publicado até <b>30 dias</b> após o encerramento de cada <b>bimestre</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">02</div><div class="tl-t">Trata de <b>receitas e despesas</b> — execução orçamentária.</div></div>'+
      '<div class="tl"><div class="tl-w">03</div><div class="tl-t">Composto de <b>balanço orçamentário</b> e <b>demonstrativos da execução</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">04</div><div class="tl-t">Acompanhado dos demonstrativos de <b>RCL</b>, <b>previdência</b>, <b>resultados</b>, <b>Restos a Pagar</b> e <b>juros</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">05</div><div class="tl-t">No <b>último bimestre</b>, mais <b>regra de ouro</b>, <b>projeções atuariais</b> e <b>variação patrimonial</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">06</div><div class="tl-t">Abrange <b>todos os Poderes e o Ministério Público</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">07</div><div class="tl-t">Existe <b>um único</b> RREO por ente da Federação.</div></div>'+
      '<div class="tl"><div class="tl-w">08</div><div class="tl-t">A responsabilidade pela emissão é do <b>Chefe do Executivo</b>.</div></div>')
  ],
  V4:[
    sl("Art. 54 — quem emite e quem assina o RGF",
      '<div class="box"><span class="bl">Caput</span><p>Ao final de <b>cada quadrimestre</b>, os titulares dos Poderes e órgãos do art. 20 emitem o <b>Relatório de Gestão Fiscal</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Os signatários</span><ul>'+
      '<li><b>Chefe do Poder Executivo</b></li>'+
      '<li><b>Presidente e demais membros da Mesa Diretora</b> (Legislativo)</li>'+
      '<li><b>Presidente de Tribunal e membros de Conselho de Administração</b> (Judiciário)</li>'+
      '<li><b>Chefe do Ministério Público</b>, da União e dos Estados</li>'+
      '<li><b>Autoridades da administração financeira e do controle interno</b> (parágrafo único)</li></ul></div>'+
      '<div class="box"><span class="bl">Art. 55, § 2º e § 3º</span><p>Publicação em até <b>30 dias</b> após o encerramento do período, com amplo acesso público. Descumprir o prazo impede <b>transferências voluntárias</b> e <b>operações de crédito</b>, exceto as da dívida mobiliária.</p></div>'),
    sl("Art. 55 — o conteúdo do RGF",
      '<div class="box"><span class="bl">Inciso I — comparativo com os limites</span><ul>'+
      '<li><b>Despesa total com pessoal</b>, distinguindo a de <b>inativos e pensionistas</b></li>'+
      '<li><b>Dívidas consolidada e mobiliária</b></li>'+
      '<li><b>Concessões de garantias</b></li>'+
      '<li><b>Operações de crédito, inclusive por ARO</b></li></ul></div>'+
      '<div class="box"><span class="bl">Inciso II</span><p><b>Medidas corretivas</b> adotadas ou a adotar, se ultrapassado <b>qualquer</b> dos limites.</p></div>'+
      '<div class="box"><span class="bl">Inciso III — só no último quadrimestre</span><ul>'+
      '<li><b>Disponibilidades de caixa em 31 de dezembro</b></li>'+
      '<li><b>Inscrição em Restos a Pagar</b></li>'+
      '<li>Comprovação de que a <b>ARO</b> foi liquidada até <b>10 de dezembro</b> e não foi realizada no <b>último ano de mandato</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">§ 1º — o RGF reduzido</span><p>No <b>Legislativo</b>, no <b>Judiciário</b> e no <b>Ministério Público</b> o relatório <b>não</b> traz o comparativo de <b>dívidas</b>, <b>garantias</b> e <b>operações de crédito</b> — apenas o de <b>pessoal</b>, mais as medidas corretivas e os demonstrativos do último quadrimestre. Faz sentido: quem contrai dívida é o <b>Executivo</b>.</p></div>'),
    sl("RREO × RGF e a regra dos Municípios pequenos",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">RREO</span><span class="cd"><b>Bimestral</b> · <b>um por ente</b> · sobre <b>receitas e despesas</b> · emitido pelo <b>Chefe do Executivo</b>.</span></div>'+
      '<div class="chip"><span class="cn">RGF</span><span class="cd"><b>Quadrimestral</b> · <b>um por Poder e órgão</b> · sobre <b>limites</b> · emitido pelos <b>titulares</b>.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Art. 63 — Municípios com menos de 50 mil habitantes</span><p>Podem optar por:</p><ul>'+
      '<li>aplicar o <b>art. 22, parágrafo único</b> (vedações dos 95%) e o <b>art. 30, § 4º</b> (apuração da dívida) ao final do <b>semestre</b>;</li>'+
      '<li>divulgar <b>semestralmente</b> o <b>RGF</b> e os demonstrativos do <b>art. 53</b>, em até <b>30 dias</b> após o encerramento do semestre.</li></ul></div>'+
      '<div class="box trap"><span class="bl">O que a LC 131/2009 tirou dessa lista</span><p>A possibilidade de divulgar o <b>RREO</b> semestralmente foi <b>revogada</b>. Município pequeno publica <b>RGF semestral</b>, mas <b>RREO continua bimestral</b>.</p></div>')
  ],
  V5:[
    sl("Arts. 56 a 58 — prestação de contas",
      '<div class="box"><span class="bl">Art. 56</span><p>As contas do <b>Chefe do Executivo</b> incluem, além das próprias, as dos <b>Presidentes dos órgãos do Legislativo e do Judiciário</b> e do <b>Chefe do Ministério Público</b>, que recebem <b>parecer prévio separado</b> do respectivo Tribunal de Contas.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Regra — 60 dias</span><span class="cd">Prazo do <b>parecer prévio conclusivo</b>, contado do recebimento, se outro não vier da constituição estadual ou da lei orgânica municipal.</span></div>'+
      '<div class="chip"><span class="cn">Exceção — 180 dias</span><span class="cd">Municípios que <b>não sejam capitais</b> <u>e</u> tenham <b>menos de 200 mil habitantes</b> — as duas condições, juntas.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Art. 57, § 2º</span><p>Os Tribunais de Contas <b>não entram em recesso</b> enquanto houver contas de Poder ou órgão do art. 20 <b>pendentes de parecer prévio</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 58 — o olho na arrecadação</span><p>A prestação de contas evidenciará o <b>desempenho da arrecadação em relação à previsão</b>, com as providências de <b>fiscalização das receitas e combate à sonegação</b>, as <b>ações de recuperação de créditos</b> nas instâncias administrativa e judicial e as demais medidas de incremento das receitas.</p></div>'),
    sl("Art. 59 — a fiscalização e os alertas",
      '<div class="box"><span class="bl">Quem fiscaliza</span><p>O <b>Poder Legislativo</b>, diretamente ou com auxílio dos <b>Tribunais de Contas</b>, e o <b>sistema de controle interno</b> de cada Poder e do Ministério Público.</p></div>'+
      '<div class="box"><span class="bl">Com ênfase em (incisos I a VI)</span><ul>'+
      '<li><b>Metas</b> da LDO</li><li><b>Limites e condições</b> das operações de crédito e da inscrição em <b>Restos a Pagar</b></li>'+
      '<li>Medidas de <b>retorno da despesa com pessoal</b> ao limite</li><li>Providências do <b>art. 31</b> para recondução das <b>dívidas</b></li>'+
      '<li>Destinação dos recursos da <b>alienação de ativos</b></li><li><b>Gastos totais dos legislativos municipais</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">§ 1º — os alertas, todos aos 90%</span><ul>'+
      '<li>Risco de ocorrência das situações do art. 4º, II, e do art. 9º</li>'+
      '<li><b>Despesa com pessoal</b> acima de <b>90%</b> do limite</li>'+
      '<li><b>Dívidas, operações de crédito e garantias</b> acima de <b>90%</b> dos limites</li>'+
      '<li><b>Inativos e pensionistas</b> acima do limite legal</li>'+
      '<li>Fatos que comprometam custos ou resultados, ou <b>indícios de irregularidades</b></li></ul>'+
      '<p>Não confunda com os <b>95%</b> do art. 22, parágrafo único — ali são <b>vedações</b>, aqui é <b>alerta</b>.</p></div>'),
    sl("Arts. 67 e 73-A — conselho e denúncia",
      '<div class="box"><span class="bl">Art. 67 — Conselho de Gestão Fiscal</span><p>Faz o <b>acompanhamento e a avaliação permanentes</b> da política e da operacionalidade da gestão fiscal. Composto por representantes de <b>todos os Poderes e esferas de Governo</b>, do <b>Ministério Público</b> e de <b>entidades técnicas representativas da sociedade</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Para quê</span><ul>'+
      '<li><b>Harmonização e coordenação</b> entre os entes</li>'+
      '<li><b>Disseminação de práticas</b> de eficiência no gasto, na arrecadação, no controle do endividamento e na transparência</li>'+
      '<li><b>Normas de consolidação</b> das contas e <b>padronização</b> das prestações de contas e relatórios — com padrões mais simples para pequenos Municípios</li>'+
      '<li><b>Divulgação</b> de análises, estudos e diagnósticos</li></ul></div>'+
      '<div class="box"><span class="bl">Art. 73-A — controle social</span><p><b>Qualquer cidadão, partido político, associação ou sindicato</b> é parte legítima para <b>denunciar</b> ao respectivo <b>Tribunal de Contas</b> e ao <b>Ministério Público</b> o descumprimento da LRF.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 73 — as sanções não estão na LRF</span><p>As infrações são punidas pelo <b>Código Penal</b>, pela <b>Lei 1.079/50</b> (crimes de responsabilidade), pelo <b>Decreto-Lei 201/67</b> (prefeitos) e pela <b>Lei 8.429/92</b> (improbidade). A LRF <b>remete</b>, não tipifica.</p></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada caixa ao seu depositário",
  pairs:[["Disponibilidades da União","Banco Central do Brasil"],
         ["Disponibilidades de Estados e Municípios","Instituições financeiras oficiais"],
         ["Disponibilidades dos regimes de previdência","Conta separada, aplicada nas condições de mercado"]],
  why:"Art. 43 e § 1º, com o art. 164, § 3º, da Constituição."},

S2:{t:"gap", instr:"Complete o art. 44",
  before:"É vedada a aplicação da receita de capital derivada da alienação de bens e direitos que integram o patrimônio público para o financiamento de ",
  after:".",
  options:["despesa corrente","despesa de capital","investimento"], answer:0,
  why:"Vender ativo para pagar custeio é consumir patrimônio."},

S3:{t:"mc", instr:"Qual a única exceção à vedação do art. 44?",
  options:["Receita destinada por lei aos regimes de previdência social",
           "Receita destinada à saúde e à educação",
           "Receita destinada ao pagamento de precatórios",
           "Não há exceção"],
  answer:0,
  why:"Geral e próprio dos servidores públicos — e por <b>lei</b>."},

S4:{t:"order", instr:"Ordene a precedência do art. 45",
  items:["Atender adequadamente os projetos em andamento",
         "Contemplar as despesas de conservação do patrimônio público",
         "Só então incluir novos projetos na LOA ou em créditos adicionais"],
  why:"Primeiro terminar e conservar; depois começar."},

S5:{t:"multi", instr:"O que a empresa controlada informa na nota explicativa dos balanços trimestrais?",
  options:["Recursos recebidos do controlador, com valor, fonte e destinação",
           "Fornecimento de bens e serviços ao controlador, com preços e condições",
           "Operações com condições diferentes das vigentes no mercado",
           "A folha de pagamento de todos os empregados",
           "O parecer prévio do Tribunal de Contas"],
  answers:[0,1,2],
  why:"Art. 47, parágrafo único — e são balanços <b>trimestrais</b>."},

S6:{t:"gap", instr:"Complete o art. 47, parágrafo único",
  before:"A empresa controlada incluirá em seus balanços ",
  after:" nota explicativa em que informará os recursos recebidos do controlador.",
  options:["trimestrais","anuais","mensais"], answer:0,
  why:"Trimestrais — a troca por “anuais” é a pegadinha padrão."},

S7:{t:"multi", instr:"Marque os instrumentos de transparência da gestão fiscal (art. 48)",
  options:["Planos, orçamentos e leis de diretrizes orçamentárias",
           "Prestações de contas e o respectivo parecer prévio",
           "Relatório Resumido da Execução Orçamentária",
           "Relatório de Gestão Fiscal",
           "Versões simplificadas desses documentos",
           "Balanço patrimonial das empresas estatais independentes",
           "Atas das sessões do Tribunal de Contas"],
  answers:[0,1,2,3,4],
  why:"São cinco itens — nem um a mais."},

S8:{t:"wordbank", instr:"Monte a exigência do art. 48, § 1º, II",
  target:["em","tempo","real"],
  extra:["a cada bimestre","ao final do exercício","em até 30 dias"],
  why:"A informação sobre a execução orçamentária e financeira é liberada <b>em tempo real</b>."},

S9:{t:"sort", instr:"O art. 48-A exige a divulgação de quê?",
  buckets:["Sobre a DESPESA","Sobre a RECEITA"],
  items:[["Número do correspondente processo",0],["Bem fornecido ou serviço prestado",0],
         ["Pessoa beneficiária do pagamento",0],["Procedimento licitatório realizado",0],
         ["Lançamento de toda a receita das unidades gestoras",1],
         ["Recebimento, inclusive de recursos extraordinários",1]],
  why:"Despesa: quatro dados, no momento da realização. Receita: lançamento e recebimento de tudo."},

S10:{t:"mc", instr:"Por quanto tempo as contas do Chefe do Executivo ficam disponíveis para consulta?",
  options:["Durante todo o exercício","Por sessenta dias","Por trinta dias","Até o julgamento pelo Tribunal de Contas"],
  answer:0,
  why:"Art. 49 — no Legislativo e no órgão técnico responsável pela elaboração."},

S11:{t:"gap", instr:"Complete o art. 50, II",
  before:"A despesa e a assunção de compromisso serão registradas segundo o regime de ",
  after:", apurando-se, em caráter complementar, o resultado dos fluxos financeiros pelo regime de caixa.",
  options:["competência","caixa","misto"], answer:0,
  why:"Despesa por competência; caixa só em caráter complementar."},

S12:{t:"order", instr:"Ordene o calendário da consolidação das contas (art. 51)",
  items:["30 de abril — Municípios encaminham suas contas, com cópia ao Estado",
         "31 de maio — Estados encaminham as suas",
         "30 de junho — Executivo da União consolida nacionalmente e por esfera"],
  why:"Abril, maio, junho — na ordem do tamanho do ente."},

S13:{t:"multi", instr:"Qual a sanção por descumprir os prazos de contas e relatórios?",
  options:["Impedimento de receber transferências voluntárias",
           "Impedimento de contratar operações de crédito",
           "Ressalva da operação destinada ao pagamento da dívida mobiliária",
           "Suspensão do repasse do FPM e do FPE",
           "Nulidade do orçamento do exercício seguinte"],
  answers:[0,1,2],
  why:"É a mesma sanção nos arts. 51, § 2º, 52, § 2º, e 55, § 3º. As transferências constitucionais nunca são retidas (CF, art. 160)."},

S14:{t:"mc", instr:"O Relatório Resumido da Execução Orçamentária é publicado:",
  options:["Até 30 dias após o encerramento de cada bimestre",
           "Até 30 dias após o encerramento de cada quadrimestre",
           "Até 60 dias após o encerramento de cada bimestre",
           "Até o final do exercício"],
  answer:0,
  why:"Bimestral — quadrimestral é o RGF."},

S15:{t:"multi", instr:"O RREO é composto de:",
  options:["Balanço orçamentário","Demonstrativos da execução das receitas","Demonstrativos da execução das despesas",
           "Balanço patrimonial","Demonstração das variações patrimoniais"],
  answers:[0,1,2],
  why:"Art. 52, I e II — o balanço patrimonial é peça da prestação de contas, não do RREO."},

S16:{t:"multi", instr:"Quais demonstrativos acompanham o RREO de TODO bimestre (art. 53)?",
  options:["Apuração da receita corrente líquida","Receitas e despesas previdenciárias",
           "Resultados nominal e primário","Despesas com juros","Restos a Pagar",
           "Projeções atuariais dos regimes de previdência","Variação patrimonial"],
  answers:[0,1,2,3,4],
  why:"As duas últimas só acompanham o RREO do <b>último</b> bimestre."},

S17:{t:"sort", instr:"Todo bimestre ou só o último?",
  buckets:["Todo bimestre","Só o último bimestre"],
  items:[["Receita corrente líquida",0],["Restos a Pagar",0],["Despesas com juros",0],
         ["Atendimento à regra de ouro",1],["Projeções atuariais",1],["Variação patrimonial",1]],
  why:"Art. 53, caput × art. 53, § 1º."},

S18:{t:"gap", instr:"Complete o demonstrativo da regra de ouro (art. 53, § 1º, I)",
  before:"Demonstrativo de que a realização das operações de crédito não excedeu o montante das ",
  after:".",
  options:["despesas de capital","despesas correntes","receitas correntes"], answer:0,
  why:"É a regra de ouro do art. 167, III, da Constituição."},

S19:{t:"mc", instr:"Quantos RREO existem por ente da Federação?",
  options:["Um só, consolidado pelo Chefe do Executivo",
           "Um por Poder e órgão","Um por unidade gestora","Dois: um do Executivo e um do Legislativo"],
  answer:0,
  why:"Quem é por Poder e órgão é o <b>RGF</b>."},

S20:{t:"mc", instr:"O Relatório de Gestão Fiscal é emitido:",
  options:["Ao final de cada quadrimestre","Ao final de cada bimestre",
           "Ao final de cada semestre","Ao final do exercício"],
  answer:0,
  why:"Art. 54 — e publicado em até 30 dias."},

S21:{t:"match", instr:"Quem assina o RGF em cada Poder?",
  pairs:[["Executivo","Chefe do Poder Executivo"],
         ["Legislativo","Presidente e demais membros da Mesa Diretora"],
         ["Judiciário","Presidente de Tribunal e membros de Conselho de Administração"],
         ["Ministério Público","Chefe do Ministério Público"]],
  why:"Art. 54, I a IV — mais as autoridades da administração financeira e do controle interno."},

S22:{t:"multi", instr:"O comparativo do RGF (art. 55, I) alcança os limites de:",
  options:["Despesa total com pessoal, distinguindo inativos e pensionistas",
           "Dívidas consolidada e mobiliária","Concessões de garantias",
           "Operações de crédito, inclusive por ARO",
           "Renúncia de receita","Transferências voluntárias recebidas"],
  answers:[0,1,2,3],
  why:"São os quatro grupos do inciso I."},

S23:{t:"multi", instr:"O RGF do Legislativo, do Judiciário e do MP NÃO traz o comparativo de:",
  options:["Dívidas consolidada e mobiliária","Concessões de garantias",
           "Operações de crédito, inclusive por ARO",
           "Despesa total com pessoal","Medidas corretivas adotadas"],
  answers:[0,1,2],
  why:"Art. 55, § 1º — quem contrai dívida e concede garantia é o Executivo."},

S24:{t:"multi", instr:"O que o RGF do ÚLTIMO quadrimestre acrescenta?",
  options:["Montante das disponibilidades de caixa em 31 de dezembro",
           "Inscrição em Restos a Pagar",
           "Comprovação de que a ARO foi liquidada até 10 de dezembro e não foi feita no último ano de mandato",
           "Projeções atuariais dos regimes de previdência",
           "Balanço orçamentário"],
  answers:[0,1,2],
  why:"As projeções atuariais e o balanço orçamentário pertencem ao <b>RREO</b>."},

S25:{t:"sort", instr:"RREO ou RGF?",
  buckets:["RREO","RGF"],
  items:[["Bimestral",0],["Um único por ente",0],["Balanço orçamentário",0],["Demonstrativo dos resultados nominal e primário",0],
         ["Quadrimestral",1],["Um por Poder e órgão",1],["Comparativo com os limites",1],["Medidas corretivas",1]],
  why:"RREO fala de <b>execução</b>; RGF fala de <b>limites</b>."},

S26:{t:"mc", instr:"O Município com menos de 50 mil habitantes que opta pela divulgação semestral:",
  options:["Continua obrigado a publicar o RREO bimestralmente",
           "Fica dispensado do RREO","Publica o RREO anualmente","Fica dispensado do RGF"],
  answer:0,
  why:"A alínea que permitia o RREO semestral foi revogada pela LC 131/2009."},

S27:{t:"mc", instr:"O prazo do parecer prévio conclusivo dos Tribunais de Contas é, em regra, de:",
  options:["Sessenta dias do recebimento","Trinta dias do recebimento",
           "Cento e oitenta dias do recebimento","Um exercício financeiro"],
  answer:0,
  why:"Art. 57 — salvo prazo diverso na constituição estadual ou lei orgânica municipal."},

S28:{t:"multi", instr:"Quando o prazo do parecer prévio é de 180 dias?",
  options:["Quando o Município não for capital","Quando o Município tiver menos de 200 mil habitantes",
           "Quando o Município tiver menos de 50 mil habitantes",
           "Quando o Tribunal de Contas estiver em recesso"],
  answers:[0,1],
  why:"Art. 57, § 1º — as duas condições são cumulativas."},

S29:{t:"gap", instr:"Complete o art. 57, § 2º",
  before:"Os Tribunais de Contas não entrarão em ",
  after:" enquanto existirem contas de Poder, ou órgão referido no art. 20, pendentes de parecer prévio.",
  options:["recesso","sessão extraordinária","diligência"], answer:0,
  why:"É a regra que impede a paralisia da apreciação das contas."},

S30:{t:"multi", instr:"Os Tribunais de Contas alertarão os Poderes ou órgãos quando constatarem:",
  options:["Despesa total com pessoal acima de 90% do limite",
           "Dívidas, operações de crédito e garantias acima de 90% dos limites",
           "Gastos com inativos e pensionistas acima do limite legal",
           "Risco de ocorrência das situações dos arts. 4º, II, e 9º",
           "Indícios de irregularidades na gestão orçamentária",
           "Despesa com pessoal acima de 95% do limite"],
  answers:[0,1,2,3,4],
  why:"O alerta é aos <b>90%</b>; os <b>95%</b> do art. 22, parágrafo único, disparam <b>vedações</b>, não alerta."},

S31:{t:"multi", instr:"O conselho de gestão fiscal (art. 67) é composto por representantes de:",
  options:["Todos os Poderes","Todas as esferas de Governo","Ministério Público",
           "Entidades técnicas representativas da sociedade",
           "Instituições financeiras oficiais","Organismos financeiros internacionais"],
  answers:[0,1,2,3],
  why:"Composição ampla, com participação da sociedade técnica."},

S32:{t:"multi", instr:"Quem é parte legítima para denunciar o descumprimento da LRF (art. 73-A)?",
  options:["Qualquer cidadão","Partido político","Associação","Sindicato","Apenas o Ministério Público"],
  answers:[0,1,2,3],
  why:"A denúncia vai ao <b>Tribunal de Contas</b> e ao <b>Ministério Público</b>."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var KIT = {
  U1:{tema:"Gestão patrimonial e preservação do patrimônio público",
    bases:["LC nº 101/2000, arts. 43 a 47",
           "CF/1988, art. 164, § 3º — depósito das disponibilidades",
           "CF/1988, art. 182, § 3º — desapropriação de imóvel urbano",
           "CF/1988, art. 165, § 5º, II — orçamento de investimento",
           "Lei nº 4.320/1964, art. 11, § 2º — receitas de capital"],
    ouro:["disponibilidades de caixa dos entes da Federação","instituições financeiras oficiais",
          "conta separada das demais disponibilidades","aplicadas nas condições de mercado",
          "receita de capital derivada da alienação de bens e direitos","financiamento de despesa corrente",
          "destinada por lei aos regimes de previdência social","só incluirão novos projetos",
          "adequadamente atendidos os em andamento","despesas de conservação do patrimônio público",
          "nulo de pleno direito","prévio depósito judicial do valor da indenização",
          "autonomia gerencial, orçamentária e financeira","balanços trimestrais","nota explicativa"],
    abertura:"A gestão patrimonial na Lei de Responsabilidade Fiscal começa pelo art. 43, que remete o depósito das disponibilidades de caixa ao art. 164, § 3º, da Constituição, e culmina no art. 44, que veda a aplicação da receita de capital derivada da alienação de bens e direitos do patrimônio público no financiamento de despesa corrente, salvo destinação legal aos regimes de previdência.",
    evite:"Não apague a ressalva “ressalvados os casos previstos em lei” do art. 164, § 3º, nem troque os balanços <b>trimestrais</b> do art. 47 por anuais."},
  U2:{tema:"Transparência, escrituração e consolidação das contas",
    bases:["LC nº 101/2000, arts. 48, 48-A, 49, 50 e 51",
           "LC nº 131/2009 — transparência em tempo real",
           "Lei nº 12.527/2011 — Lei de Acesso à Informação",
           "Lei nº 4.320/1964, arts. 83 a 89 — escrituração",
           "NBC TSP e MCASP — regime de competência"],
    ouro:["instrumentos de transparência da gestão fiscal","ampla divulgação, inclusive em meios eletrônicos",
          "incentivo à participação popular","audiências públicas","em tempo real",
          "sistema integrado de administração financeira e controle","no momento de sua realização",
          "número do correspondente processo","pessoa física ou jurídica beneficiária do pagamento",
          "inclusive referente a recursos extraordinários","durante todo o exercício",
          "regime de competência","em caráter complementar","montante e a variação da dívida pública",
          "origem e o destino dos recursos provenientes da alienação de ativos",
          "consolidação, nacional e por esfera de governo"],
    abertura:"São instrumentos de transparência da gestão fiscal, nos termos do art. 48 da Lei de Responsabilidade Fiscal, os planos, orçamentos e leis de diretrizes orçamentárias, as prestações de contas e o respectivo parecer prévio, o Relatório Resumido da Execução Orçamentária, o Relatório de Gestão Fiscal e as versões simplificadas desses documentos, aos quais será dada ampla divulgação, inclusive em meios eletrônicos de acesso público.",
    evite:"Não inverta o regime do art. 50, II: a <b>despesa</b> segue a <b>competência</b>, e o caixa entra apenas em caráter complementar."},
  U3:{tema:"Relatório Resumido da Execução Orçamentária",
    bases:["LC nº 101/2000, arts. 52 e 53",
           "CF/1988, art. 165, § 3º — publicação bimestral",
           "CF/1988, art. 167, III — regra de ouro",
           "Manual de Demonstrativos Fiscais (STN) — RREO"],
    ouro:["abrangerá todos os Poderes e o Ministério Público",
          "até trinta dias após o encerramento de cada bimestre","balanço orçamentário",
          "por categoria econômica","receitas por fonte","despesas por grupo de natureza",
          "despesas por função e subfunção","apuração da receita corrente líquida",
          "resultados nominal e primário","Restos a Pagar, detalhando por Poder e órgão",
          "operações de crédito não excederam o montante das despesas de capital",
          "projeções atuariais","variação patrimonial","limitação de empenho","frustração de receitas"],
    abertura:"O Relatório Resumido da Execução Orçamentária, previsto no art. 165, § 3º, da Constituição e disciplinado pelo art. 52 da Lei de Responsabilidade Fiscal, abrange todos os Poderes e o Ministério Público e é publicado até trinta dias após o encerramento de cada bimestre, compondo-se do balanço orçamentário e dos demonstrativos da execução das receitas e das despesas.",
    evite:"Não distribua pelos demais bimestres os três demonstrativos exclusivos do § 1º, nem troque a periodicidade bimestral pela quadrimestral do RGF."},
  U4:{tema:"Relatório de Gestão Fiscal",
    bases:["LC nº 101/2000, arts. 54, 55 e 63",
           "LC nº 101/2000, art. 20 — Poderes e órgãos",
           "LC nº 101/2000, art. 38, II e IV, b — ARO",
           "LC nº 131/2009 — revogação do RREO semestral",
           "Manual de Demonstrativos Fiscais (STN) — RGF"],
    ouro:["ao final de cada quadrimestre","titulares dos Poderes e órgãos",
          "Presidente e demais membros da Mesa Diretora","autoridades responsáveis pela administração financeira e pelo controle interno",
          "comparativo com os limites","distinguindo a com inativos e pensionistas",
          "concessões de garantias","operações de crédito, inclusive por antecipação de receita",
          "medidas corretivas adotadas ou a adotar","disponibilidades de caixa em trinta e um de dezembro",
          "inscrição em Restos a Pagar","até trinta dias após o encerramento do período",
          "forma padronizada","população inferior a cinquenta mil habitantes"],
    abertura:"Ao final de cada quadrimestre, os titulares dos Poderes e órgãos referidos no art. 20 emitem o Relatório de Gestão Fiscal, que, na forma do art. 55 da Lei de Responsabilidade Fiscal, traz o comparativo com os limites da despesa total com pessoal, das dívidas consolidada e mobiliária, das concessões de garantias e das operações de crédito, além das medidas corretivas e, no último quadrimestre, dos demonstrativos de caixa, Restos a Pagar e ARO.",
    evite:"Não estenda ao Legislativo, ao Judiciário e ao Ministério Público o comparativo de dívidas, garantias e operações de crédito — o § 1º os dispensa."},
  U5:{tema:"Prestação de contas, fiscalização e controle social",
    bases:["LC nº 101/2000, arts. 56 a 59, 67, 73 e 73-A",
           "CF/1988, arts. 70 e 71 — fiscalização contábil e financeira",
           "CF/1988, art. 31, § 2º — parecer prévio nos Municípios",
           "Lei nº 1.079/1950 e Decreto-Lei nº 201/1967 — crimes de responsabilidade",
           "Lei nº 8.429/1992 — improbidade administrativa"],
    ouro:["parecer prévio, separadamente, do respectivo Tribunal de Contas",
          "no prazo de sessenta dias do recebimento","Municípios que não sejam capitais",
          "menos de duzentos mil habitantes","não entrarão em recesso",
          "desempenho da arrecadação em relação à previsão","combate à sonegação",
          "ações de recuperação de créditos","com o auxílio dos Tribunais de Contas",
          "sistema de controle interno","alertarão os Poderes ou órgãos",
          "ultrapassou noventa por cento do limite","conselho de gestão fiscal",
          "entidades técnicas representativas da sociedade",
          "qualquer cidadão, partido político, associação ou sindicato"],
    abertura:"As contas prestadas pelos Chefes do Poder Executivo incluem, além das suas próprias, as dos Presidentes dos órgãos dos Poderes Legislativo e Judiciário e do Chefe do Ministério Público, as quais recebem parecer prévio separado do respectivo Tribunal de Contas, no prazo de sessenta dias do recebimento, nos termos dos arts. 56 e 57 da Lei de Responsabilidade Fiscal.",
    evite:"Não troque os <b>90%</b> do alerta do art. 59, § 1º, pelos <b>95%</b> das vedações do art. 22, parágrafo único, e lembre que as sanções do art. 73 estão em <b>outras leis</b>."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de instrumentos e prazos: o espelho busca cada relatório, cada periodicidade e cada sanção.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a transparência, o controle e a fiscalização na Lei Complementar nº 101/2000, disserte necessariamente sobre:</p>'+
  '<ol><li>os instrumentos de transparência da gestão fiscal e as formas de assegurá-la;</li>'+
  '<li>o Relatório Resumido da Execução Orçamentária e o Relatório de Gestão Fiscal, com suas periodicidades, conteúdos e sanções pelo descumprimento;</li>'+
  '<li>a prestação de contas e a fiscalização do cumprimento da lei, inclusive os alertas dos Tribunais de Contas.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>Nos termos do <b>art. 48</b> da Lei de Responsabilidade Fiscal, são instrumentos de transparência da gestão fiscal, aos quais será dada <b>ampla divulgação, inclusive em meios eletrônicos de acesso público</b>, os <b>planos, orçamentos e leis de diretrizes orçamentárias</b>, as <b>prestações de contas e o respectivo parecer prévio</b>, o <b>Relatório Resumido da Execução Orçamentária</b>, o <b>Relatório de Gestão Fiscal</b> e as <b>versões simplificadas</b> desses documentos. A transparência é assegurada também mediante o <b>incentivo à participação popular</b> e a realização de <b>audiências públicas</b> durante a elaboração e a discussão dos planos, da lei de diretrizes e dos orçamentos; a liberação ao pleno conhecimento da sociedade, <b>em tempo real</b>, de informações pormenorizadas sobre a execução orçamentária e financeira; e a adoção de <b>sistema integrado</b> de administração financeira e controle, com padrão mínimo de qualidade estabelecido pelo Executivo da União. O <b>art. 48-A</b> concretiza esse dever, exigindo, quanto à <b>despesa</b>, a divulgação de todos os atos das unidades gestoras <b>no momento de sua realização</b>, com o número do processo, o bem ou serviço, o beneficiário do pagamento e o procedimento licitatório; e, quanto à <b>receita</b>, o <b>lançamento e o recebimento</b> de toda a receita, <b>inclusive de recursos extraordinários</b>. O <b>art. 49</b>, por sua vez, mantém as contas do Chefe do Executivo disponíveis <b>durante todo o exercício</b> no Legislativo e no órgão técnico responsável pela elaboração.</p>'+
  '<p>O <b>RREO</b>, previsto no art. 165, § 3º, da Constituição e disciplinado pelo <b>art. 52</b>, abrange <b>todos os Poderes e o Ministério Público</b>, é publicado até <b>trinta dias após o encerramento de cada bimestre</b> e compõe-se do <b>balanço orçamentário</b> — com as receitas por fonte e as despesas por grupo de natureza, por categoria econômica — e dos <b>demonstrativos da execução</b> das receitas, das despesas e das despesas por <b>função e subfunção</b>. Trata-se de relatório <b>único por ente</b>, consolidado pelo <b>Chefe do Executivo</b>. Acompanham-no, pelo <b>art. 53</b>, os demonstrativos da <b>receita corrente líquida</b>, das <b>receitas e despesas previdenciárias</b>, dos <b>resultados nominal e primário</b>, das <b>despesas com juros</b> e dos <b>Restos a Pagar</b>; e, apenas no <b>último bimestre</b>, os do atendimento à <b>regra de ouro</b>, das <b>projeções atuariais</b> e da <b>variação patrimonial</b>. Já o <b>RGF</b>, do <b>art. 54</b>, é emitido ao final de <b>cada quadrimestre</b> pelos <b>titulares dos Poderes e órgãos</b> do art. 20 e assinado também pelas autoridades da administração financeira e do controle interno; contém, pelo <b>art. 55</b>, o <b>comparativo com os limites</b> da despesa total com pessoal — distinguindo inativos e pensionistas —, das <b>dívidas consolidada e mobiliária</b>, das <b>concessões de garantias</b> e das <b>operações de crédito, inclusive por ARO</b>; as <b>medidas corretivas</b> se ultrapassado qualquer limite; e, no último quadrimestre, os demonstrativos das <b>disponibilidades de caixa em 31 de dezembro</b>, da <b>inscrição em Restos a Pagar</b> e do cumprimento das regras da ARO. No <b>Legislativo, no Judiciário e no Ministério Público</b> o relatório é <b>reduzido</b>, sem o comparativo de dívidas, garantias e operações de crédito. Ambos os relatórios se publicam em até <b>trinta dias</b> e, descumprido o prazo — como também o do <b>art. 51</b> para o envio das contas —, o Poder ou órgão fica impedido, até regularizar, de <b>receber transferências voluntárias</b> e de <b>contratar operações de crédito</b>, exceto as destinadas ao <b>pagamento da dívida mobiliária</b>.</p>'+
  '<p>Quanto à <b>prestação de contas</b>, o <b>art. 56</b> determina que as contas do Chefe do Executivo incluam as dos Presidentes dos órgãos do Legislativo e do Judiciário e as do Chefe do Ministério Público, com <b>parecer prévio separado</b> do respectivo Tribunal de Contas, emitido em <b>sessenta dias</b> do recebimento — ou <b>cento e oitenta dias</b> nos Municípios que não sejam capitais e tenham menos de <b>duzentos mil habitantes</b> —, vedado o <b>recesso</b> enquanto houver contas pendentes de parecer. O <b>art. 58</b> exige que a prestação de contas evidencie o <b>desempenho da arrecadação em relação à previsão</b>, com as providências de fiscalização e <b>combate à sonegação</b> e as <b>ações de recuperação de créditos</b>. A fiscalização cabe, pelo <b>art. 59</b>, ao <b>Poder Legislativo</b>, diretamente ou com auxílio dos <b>Tribunais de Contas</b>, e ao <b>controle interno</b> de cada Poder e do Ministério Público, com ênfase nas <b>metas da LDO</b>, nos limites das <b>operações de crédito</b> e dos <b>Restos a Pagar</b>, nas medidas de retorno da <b>despesa com pessoal</b> e das <b>dívidas</b> aos limites, na destinação dos recursos da <b>alienação de ativos</b> e nos <b>gastos dos legislativos municipais</b>. Os Tribunais de Contas <b>alertam</b> os Poderes ou órgãos quando a despesa com pessoal ultrapassa <b>noventa por cento</b> do limite, quando dívidas, operações de crédito e garantias superam <b>noventa por cento</b> dos seus, quando os gastos com inativos excedem o limite legal e diante de riscos às metas ou indícios de irregularidade. Completam o sistema o <b>conselho de gestão fiscal</b> do <b>art. 67</b>, de composição plural, e o <b>art. 73-A</b>, que legitima <b>qualquer cidadão, partido político, associação ou sindicato</b> a denunciar o descumprimento da lei ao Tribunal de Contas e ao Ministério Público.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> os cinco instrumentos do art. 48, os três incisos do § 1º e o desdobramento do art. 48-A em despesa e receita.</li>'+
  '<li><b>Item 2:</b> bimestral × quadrimestral; único por ente × um por Poder; os três demonstrativos exclusivos do último bimestre; o RGF reduzido do § 1º; e a sanção comum aos arts. 51, 52 e 55.</li>'+
  '<li><b>Item 3:</b> o parecer prévio separado, os prazos de 60 e 180 dias, a vedação ao recesso e os alertas aos 90%.</li>'+
  '<li><b>Fecho:</b> citar o art. 73-A mostra a dimensão de <b>controle social</b> da lei.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>O Município de Palmeira, com 32 mil habitantes, adotou no exercício as seguintes práticas:</p>'+
  '<ol><li>optou por divulgar semestralmente o RGF e, na mesma decisão, deixou de publicar o RREO do segundo e do quarto bimestres;</li>'+
  '<li>vendeu um terreno da municipalidade e usou o produto da venda para pagar a folha da Secretaria de Educação;</li>'+
  '<li>depositou as disponibilidades do regime próprio de previdência na mesma conta das demais disponibilidades do Tesouro municipal;</li>'+
  '<li>publicou o RGF do segundo quadrimestre 45 dias após o encerramento do período;</li>'+
  '<li>a empresa municipal de transportes, controlada pelo Município, deixou de incluir nota explicativa em seus balanços trimestrais sobre os empréstimos concedidos ao controlador em condições inferiores às de mercado.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada prática com fundamento na Lei Complementar nº 101/2000.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Divulgação semestral e supressão do RREO.</b> <b>Parcialmente regular.</b> Municípios com população inferior a <b>cinquenta mil habitantes</b> podem, pelo <b>art. 63, II</b>, divulgar <b>semestralmente</b> o <b>RGF</b> e os demonstrativos do art. 53 — até aqui, correto. Já a supressão do <b>RREO</b> é <b>irregular</b>: a alínea que permitia sua divulgação semestral foi <b>revogada pela LC nº 131/2009</b>, de modo que o relatório permanece <b>bimestral</b> para todos os entes (art. 52). A omissão sujeita o Município ao impedimento de receber transferências voluntárias e de contratar operações de crédito, exceto para pagamento da dívida mobiliária (art. 52, § 2º).</p>'+
  '<p><b>2. Produto da alienação de terreno na folha de pessoal.</b> <b>Vedado.</b> O <b>art. 44</b> proíbe a aplicação da receita de capital derivada da alienação de bens e direitos do patrimônio público no financiamento de <b>despesa corrente</b>, e folha de pagamento é despesa corrente. A única exceção — destinação <b>por lei</b> aos regimes de previdência — não se verifica, e o fato de a despesa ser da educação é irrelevante para o art. 44.</p>'+
  '<p><b>3. Caixa da previdência na conta do Tesouro.</b> <b>Irregular.</b> O <b>art. 43, § 1º</b> exige que as disponibilidades dos regimes de previdência, geral e próprio, fiquem em <b>conta separada</b> das demais disponibilidades de cada ente e sejam <b>aplicadas nas condições de mercado</b>, justamente para impedir o uso do caixa previdenciário no custeio ordinário.</p>'+
  '<p><b>4. RGF publicado com 45 dias.</b> <b>Irregular.</b> O <b>art. 55, § 2º</b> fixa a publicação em até <b>trinta dias</b> após o encerramento do quadrimestre. O descumprimento impede o Poder ou órgão, até a regularização, de <b>receber transferências voluntárias</b> e de <b>contratar operações de crédito</b>, exceto as destinadas ao pagamento da dívida mobiliária (art. 55, § 3º).</p>'+
  '<p><b>5. Empresa controlada sem nota explicativa.</b> <b>Irregular.</b> O <b>art. 47, parágrafo único</b>, obriga a empresa controlada a incluir em seus <b>balanços trimestrais</b> nota explicativa informando os recursos recebidos do controlador, o fornecimento de bens e serviços a ele e — exatamente o caso — as <b>operações realizadas em condições diferentes das vigentes no mercado</b>, com preços, taxas, prazos e garantias.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>No <b>1</b>, estender ao RREO a faculdade que o art. 63 dá apenas ao RGF.</li>'+
  '<li>No <b>2</b>, salvar a operação porque a despesa é de educação — o art. 44 não faz essa distinção.</li>'+
  '<li>No <b>4</b>, contar os 30 dias do início do quadrimestre em vez do seu encerramento.</li>'+
  '<li>No <b>5</b>, exigir a nota apenas no balanço anual.</li></ul></div>';

var TEC = [["Caderno completo — Conhecimentos Específicos TJPR 2026","https://www.tecconcursos.com.br/questoes/cadernos/103216249","103216249"]];
var TECNOTA = "Use o seu caderno do TJPR e filtre por <b>Da Transparência, Controle e Fiscalização (arts. 48 a 59)</b> e <b>Da Gestão Patrimonial (arts. 43 a 47)</b> — são 37 questões catalogadas somadas. O RREO e o RGF costumam aparecer também nos filtros de Contabilidade Pública.";

var UNITS = [
  {n:1, title:"Gestão patrimonial", cvar:"u1", lessons:[
    {id:"G1", type:"teoria", title:"Arts. 43 a 47",                       xp:10, data:"V1"},
    {id:"G2", type:"drill",  title:"Praticar · disponibilidades de caixa", xp:25, data:["S1","T0","T1","T2","T3"]},
    {id:"G3", type:"drill",  title:"Praticar · preservação do patrimônio", xp:25, data:["S2","S3","S4","T4","T5","T6","T7","T8"]},
    {id:"G4", type:"drill",  title:"Praticar · a empresa controlada",     xp:25, data:["S5","S6","T9","T10","T11"]},
    {id:"G5", type:"flash",  title:"Flashcards · gestão patrimonial",     xp:15, data:[0,1,2,3,4,5,6,7,8,9]},
    {id:"G6", type:"feynman",title:"Explique a gestão patrimonial",       xp:30, data:"U1"}
  ]},
  {n:2, title:"Transparência e escrituração", cvar:"u2", lessons:[
    {id:"G8", type:"teoria", title:"Arts. 48 a 51",                       xp:10, data:"V2"},
    {id:"G9", type:"drill",  title:"Praticar · instrumentos de transparência", xp:25, data:["S7","S8","T12","T13","T14","T15"]},
    {id:"G10",type:"drill",  title:"Praticar · o art. 48-A e as contas",  xp:25, data:["S9","S10","T16","T17","T18","T19"]},
    {id:"G11",type:"drill",  title:"Praticar · escrituração do art. 50",  xp:25, data:["S11","T20","T21","T22","T23","T24"]},
    {id:"G12",type:"drill",  title:"Praticar · consolidação e sanção",    xp:25, data:["S12","S13","T25","T26"]},
    {id:"G13",type:"flash",  title:"Flashcards · transparência",          xp:15, data:[10,11,12,13,14,15,16,17,18,19,20,21]},
    {id:"G14",type:"feynman",title:"Explique a transparência e a escrituração", xp:30, data:"U2"}
  ]},
  {n:3, title:"Relatório Resumido da Execução Orçamentária", cvar:"u3", lessons:[
    {id:"G16",type:"teoria", title:"Arts. 52 e 53",                       xp:10, data:"V3"},
    {id:"G17",type:"drill",  title:"Praticar · periodicidade e composição", xp:25, data:["S14","S15","S19","T27","T28","T29","T30","T31","T32"]},
    {id:"G18",type:"drill",  title:"Praticar · os demonstrativos do art. 53", xp:25, data:["S16","S17","T33","T34","T37"]},
    {id:"G19",type:"drill",  title:"Praticar · o último bimestre",        xp:25, data:["S18","T35","T36"]},
    {id:"G20",type:"flash",  title:"Flashcards · RREO",                   xp:15, data:[22,23,24,25,26,27,28,29,30]},
    {id:"G21",type:"feynman",title:"Explique o RREO",                     xp:30, data:"U3"}
  ]},
  {n:4, title:"Relatório de Gestão Fiscal", cvar:"u4", lessons:[
    {id:"G23",type:"teoria", title:"Arts. 54, 55 e 63",                   xp:10, data:"V4"},
    {id:"G24",type:"drill",  title:"Praticar · emissão e assinatura",     xp:25, data:["S20","S21","T38","T39","T40","T41"]},
    {id:"G25",type:"drill",  title:"Praticar · o conteúdo do RGF",        xp:25, data:["S22","S24","T42","T43","T44","T45","T47"]},
    {id:"G26",type:"drill",  title:"Praticar · o RGF reduzido",           xp:25, data:["S23","T46","T48"]},
    {id:"G27",type:"drill",  title:"Praticar · RREO × RGF e o art. 63",   xp:25, data:["S25","S26","T49","T50"]},
    {id:"G28",type:"flash",  title:"Flashcards · RGF",                    xp:15, data:[31,32,33,34,35,36,37,38,39,40]},
    {id:"G29",type:"feynman",title:"Explique o RGF",                      xp:30, data:"U4"}
  ]},
  {n:5, title:"Prestação de contas e fiscalização", cvar:"u2", lessons:[
    {id:"G31",type:"teoria", title:"Arts. 56 a 59, 67 e 73-A",            xp:10, data:"V5"},
    {id:"G32",type:"drill",  title:"Praticar · contas e parecer prévio",  xp:25, data:["S27","S28","S29","T51","T52","T53","T54","T55"]},
    {id:"G33",type:"drill",  title:"Praticar · fiscalização e alertas",   xp:25, data:["S30","T56","T57","T58"]},
    {id:"G34",type:"drill",  title:"Praticar · conselho e controle social", xp:25, data:["S31","S32","T59","T60"]},
    {id:"G35",type:"flash",  title:"Flashcards · controle e fiscalização", xp:15, data:[41,42,43,44,45,46,47,48,49]},
    {id:"G36",type:"feynman",title:"Explique a prestação de contas e a fiscalização", xp:30, data:"U5"}
  ]},
  {n:6, title:"Aplicação e prova", cvar:"u1", lessons:[
    {id:"G38",type:"leitura",title:"Discursiva resolvida",                xp:25, data:"disc"},
    {id:"G39",type:"leitura",title:"Estudo de caso resolvido",            xp:25, data:"caso"},
    {id:"Grev",type:"review",title:"Revisão geral das unidades",          xp:60, data:null},
    {id:"G40",type:"missao", title:"Missão TEC Concursos",                xp:15, data:null},
    {id:"G41",type:"prova",  title:"Simulado cronometrado",               xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. O art. 43 manda depositar as disponibilidades de caixa conforme o § 3º do art. 164 da Constituição, e o COMENTÁRIO do Resumo abre a regra: as da <b>União</b> vão para o <b>Banco Central</b>.</p><p>O esquema do material parte em dois: disponibilidades da União, no BACEN; disponibilidades dos Estados, Municípios e empresas controladas pelo Poder Público, em <b>instituições financeiras oficiais</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da gestão patrimonial — das disponibilidades de caixa</i></p>",
1:"<p>Certo. É a segunda metade do esquema do art. 43: Estados, Distrito Federal, Municípios, órgãos e entidades do Poder Público e <b>empresas por ele controladas</b> depositam em <b>instituições financeiras oficiais</b>, ressalvados os casos previstos em lei.</p><p>Repare nas duas palavras que a banca mexe: instituição <b>oficial</b> (não qualquer instituição) e a ressalva final dos <b>casos previstos em lei</b>, que impede tratar a regra como absoluta.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da gestão patrimonial — das disponibilidades de caixa</i></p>",
2:"<p>Certo. É literalmente o quadro ATENÇÃO do Resumo, do art. 43, § 1º: as disponibilidades dos regimes de previdência, <b>geral e próprio</b> dos servidores públicos, ficam em <b>conta separada</b> das demais disponibilidades do ente e são <b>aplicadas nas condições de mercado</b>.</p><p>Dois comandos num só parágrafo, e a banca costuma derrubar um deles: a separação da conta e a aplicação em condições de mercado. Dinheiro previdenciário não se mistura com o caixa geral.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da gestão patrimonial — das disponibilidades de caixa</i></p>",
3:"<p>Errado. Não é critério do gestor: pelo art. 43 c/c art. 164, § 3º, da Constituição, os Municípios depositam suas disponibilidades de caixa em <b>instituições financeiras oficiais</b>, ressalvados os casos previstos em lei.</p><p>No esquema do Resumo só a União vai para o BACEN; Estados, Municípios e empresas controladas vão para instituição oficial. A exceção é de <b>lei</b>, nunca de conveniência administrativa.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da gestão patrimonial — das disponibilidades de caixa</i></p>",
4:"<p>Certo. É o caput do art. 44: vedada a aplicação da <b>receita de capital derivada da alienação de bens e direitos</b> do patrimônio público no financiamento de <b>despesa corrente</b>.</p><p>O COMENTÁRIO do Resumo dá o motivo: evita que o dinheiro da venda de ativos pague o dia a dia do governo, como salários e custeio. Vender o patrimônio para pagar conta de rotina é consumir o estoque para cobrir o fluxo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da preservação do patrimônio público</i></p>",
5:"<p>Errado: a vedação do art. 44 tem exceção expressa — <b>salvo se destinada por lei aos regimes de previdência social, geral e próprio dos servidores públicos</b>.</p><p>O EXEMPLO do Resumo é o terreno do governo vendido: usar o valor para pagar salários viola a LRF; mas se houver lei destinando esses recursos ao fundo previdenciário para garantir as aposentadorias dos servidores, a aplicação é permitida.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da preservação do patrimônio público</i></p>",
6:"<p>Certo. É o art. 45: a LOA e as leis de créditos adicionais só incluirão <b>novos projetos</b> depois de <b>adequadamente atendidos os em andamento</b> e contempladas as <b>despesas de conservação do patrimônio público</b>.</p><p>A ideia conversa com o capítulo da preservação do patrimônio que o Resumo desenvolve no art. 44: primeiro termina e conserva o que já existe, depois começa obra nova.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 45 da LC 101/2000. O material trata da preservação do patrimônio apenas pelo art. 44.</p>",
7:"<p>Errado — a ordem de precedência é a inversa. Pelo art. 45, os <b>projetos em andamento</b> e as despesas de <b>conservação do patrimônio</b> vêm primeiro; só depois entram novos projetos.</p><p>Estar previsto no plano plurianual é requisito do art. 5º, § 5º, para investimento com duração superior a um exercício, mas não cria preferência sobre obra já iniciada.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 45 da LC 101/2000. O material não traz a regra de precedência dos projetos em andamento.</p>",
8:"<p>Certo. É o art. 46: é <b>nulo de pleno direito</b> o ato de desapropriação de imóvel urbano expedido sem o atendimento do § 3º do art. 182 da Constituição (justa e prévia indenização em dinheiro) <b>ou</b> sem prévio depósito judicial do valor da indenização.</p><p>A sanção aqui é forte: não é irregularidade, é nulidade de pleno direito. A lógica do capítulo é a mesma do art. 44 — proteger o patrimônio e o caixa do ente contra obrigação sem lastro.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 46 da LC 101/2000. O material não cobre a desapropriação de imóvel urbano.</p>",
9:"<p>Certo. É o caput do art. 47: a empresa controlada que firmar <b>contrato de gestão</b> com objetivos e metas de desempenho, na forma da lei, disporá de <b>autonomia gerencial, orçamentária e financeira</b>.</p><p>O Resumo só desenvolve o <b>parágrafo único</b> desse artigo, o da nota explicativa nos balanços trimestrais. São comandos diferentes: o caput dá autonomia mediante contrato de gestão; o parágrafo único cria o dever de transparência nas relações com o controlador.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 47, caput, da LC 101/2000. O material reproduz apenas o parágrafo único do artigo.</p>",
10:"<p>Certo. É o esquema do Resumo sobre o art. 47, parágrafo único: a empresa controlada inclui em seus <b>balanços trimestrais</b> nota explicativa informando os <b>recursos recebidos do controlador</b> e o <b>fornecimento de bens e serviços ao controlador</b>.</p><p>O esquema tem um terceiro item, que é o mais cobrado: venda de bens, prestação de serviços ou concessão de empréstimos e financiamentos com <b>condições diferentes das vigentes no mercado</b> — preços, taxas e prazos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das empresas controladas pelo setor público</i></p>",
11:"<p>Errado na periodicidade: a nota explicativa do art. 47, parágrafo único, entra nos <b>balanços trimestrais</b>, e não apenas nos anuais.</p><p>O esquema do Resumo começa exatamente por aí — a empresa controlada incluirá em seus <b>balanços trimestrais</b> nota explicativa. Anote o trimestre junto dos outros prazos da LRF: RREO bimestral, RGF quadrimestral, nota explicativa da controlada trimestral.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das empresas controladas pelo setor público</i></p>",
12:"<p>Certo. É o rol do art. 48, com os cinco itens do COMENTÁRIO do Resumo: os <b>planos (PPA), orçamentos (LOA) e leis de diretrizes orçamentárias (LDO)</b>; as <b>prestações de contas e o respectivo parecer prévio</b>; o <b>RREO</b>; o <b>RGF</b>; e as <b>versões simplificadas</b> desses documentos.</p><p>A todos se dá <b>ampla divulgação, inclusive em meios eletrônicos de acesso público</b>. Guarde as versões simplificadas: é o item que a banca corta para tentar derrubar a assertiva.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da transparência da gestão fiscal</i></p>",
13:"<p>Certo. É o inciso I do art. 48, § 1º: <b>incentivo à participação popular</b> e realização de <b>audiências públicas</b> durante os processos de elaboração e discussão dos planos, da LDO e dos orçamentos.</p><p>O § 1º tem três incisos no Resumo, e vale lê-los como uma escada: participação popular (I), informação em <b>tempo real</b> (II) e <b>sistema integrado</b> de administração financeira e controle (III).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da transparência da gestão fiscal</i></p>",
14:"<p>Certo. Literalidade do art. 48, § 1º, II: liberação ao pleno conhecimento e acompanhamento da sociedade, <b>em tempo real</b>, de informações <b>pormenorizadas</b> sobre a execução orçamentária e financeira, em <b>meios eletrônicos de acesso público</b>.</p><p>Duas expressões que a banca adora adulterar: tempo real (não periódico, não mensal) e informações pormenorizadas (não consolidadas).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da transparência da gestão fiscal</i></p>",
15:"<p>Certo. É o inciso III do art. 48, § 1º: adoção de <b>sistema integrado de administração financeira e controle</b>, que atenda a <b>padrão mínimo de qualidade estabelecido pelo Poder Executivo da União</b> e ao disposto no art. 48-A.</p><p>Repare em quem fixa o padrão: o <b>Poder Executivo da União</b>, mesmo para Estados e Municípios. É a mesma lógica da consolidação nacional das contas do art. 51 — padronizar para poder comparar.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da transparência da gestão fiscal</i></p>",
16:"<p>Certo. É o lado da <b>despesa</b> no esquema do art. 48-A: todos os atos praticados pelas unidades gestoras <b>no decorrer da execução</b>, <b>no momento de sua realização</b>, com o número do correspondente processo, o bem fornecido ou serviço prestado, a pessoa física ou jurídica beneficiária do pagamento e, quando for o caso, o procedimento licitatório realizado.</p><p>A expressão que decide a questão é <b>no momento de sua realização</b>: casa com o tempo real do art. 48, § 1º, II.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da disponibilização de informações</i></p>",
17:"<p>Certo. É o lado da <b>receita</b> no esquema do art. 48-A: o <b>lançamento e o recebimento</b> de toda a receita das unidades gestoras, <b>inclusive a referente a recursos extraordinários</b>.</p><p>O Resumo monta o artigo em dois blocos, e é assim que a banca cobra: sobre a despesa, todos os atos no momento da realização; sobre a receita, lançamento e recebimento de <b>toda</b> a receita, sem excluir os recursos extraordinários.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da disponibilização de informações</i></p>",
18:"<p>Certo. É o art. 49: as contas apresentadas pelo Chefe do Poder Executivo ficam disponíveis <b>durante todo o exercício</b>, no respectivo Poder Legislativo e no órgão técnico responsável pela sua elaboração, para consulta e apreciação pelos <b>cidadãos e instituições da sociedade</b>.</p><p>É a mesma lógica dos instrumentos de transparência do art. 48, que o Resumo desenvolve: a prestação de contas não se esgota no julgamento pelo Legislativo, ela fica aberta ao cidadão.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 49 da LC 101/2000. O material trata da transparência pelos arts. 48 e 48-A.</p>",
19:"<p>Errado no prazo: pelo art. 49 as contas ficam disponíveis <b>durante todo o exercício</b>, e não por sessenta dias.</p><p>Sessenta dias é o prazo do parecer prévio do Tribunal de Contas (art. 57), outro dispositivo. A disponibilidade das contas para consulta pelo cidadão dura o exercício inteiro.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 49 da LC 101/2000. O material não traz o prazo de disponibilidade das contas.</p>",
20:"<p>Certo. É o art. 50, I: a <b>disponibilidade de caixa</b> constará de registro próprio, de modo que os recursos vinculados a <b>órgão, fundo ou despesa obrigatória</b> fiquem identificados e escriturados de forma <b>individualizada</b>.</p><p>Conversa com o art. 8º, parágrafo único, e com o art. 43, § 1º, que o Resumo traz: recurso vinculado só se usa na sua finalidade, e o previdenciário fica em conta separada. Para controlar a vinculação, é preciso escriturá-la separadamente.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 50 da LC 101/2000. O material passa do art. 48-A direto para a consolidação das contas do art. 51.</p>",
21:"<p>Certo. É o art. 50, II: a despesa e a assunção de compromisso são registradas segundo o <b>regime de competência</b>, apurando-se, <b>em caráter complementar</b>, o resultado dos fluxos financeiros pelo <b>regime de caixa</b>.</p><p>Combina com o art. 18, § 2º, que o Resumo traz: a despesa total com pessoal é apurada pelo <b>regime de competência, independentemente de empenho</b>. A LRF é competência na regra e caixa no complemento.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 50 da LC 101/2000. O regime de competência aparece no material apenas na apuração da despesa com pessoal (art. 18, § 2º).</p>",
22:"<p>Errado: os regimes estão <b>invertidos</b>. Pelo art. 50, II, a regra é o <b>regime de competência</b>; o <b>regime de caixa</b> é que entra em caráter complementar, para apurar o resultado dos fluxos financeiros.</p><p>O reforço está no art. 18, § 2º, do Resumo: a despesa total com pessoal é apurada pelo regime de competência, independentemente de empenho. Competência primeiro, caixa depois.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 50 da LC 101/2000. O material só menciona o regime de competência no art. 18, § 2º.</p>",
23:"<p>Certo. É o art. 50, III: as <b>operações de crédito</b>, as <b>inscrições em Restos a Pagar</b> e as demais formas de assunção de compromissos junto a terceiros são escrituradas de modo a evidenciar o <b>montante e a variação da dívida pública no período</b>.</p><p>Note que os Restos a Pagar entram aqui como compromisso perante terceiro, na mesma linha do controle que a LRF faz deles no RREO (art. 53) e no RGF do último quadrimestre (art. 55).</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 50 da LC 101/2000. O material não reproduz as regras de escrituração.</p>",
24:"<p>Certo. É o art. 50, VI: a demonstração das <b>variações patrimoniais</b> dará destaque à <b>origem e ao destino dos recursos provenientes da alienação de ativos</b>.</p><p>É a mesma preocupação que o Resumo mostra em dois pontos do material: o art. 44, que proíbe usar receita de alienação em despesa corrente, e o demonstrativo da variação patrimonial que acompanha o RREO do <b>último bimestre</b>, evidenciando a alienação de ativos e a aplicação dos recursos dela decorrentes.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 50 da LC 101/2000. O destaque à alienação de ativos aparece no material no art. 44 e no art. 53, § 1º.</p>",
25:"<p>Certo. É o caput do art. 51: o Poder Executivo da União promove, <b>até o dia trinta de junho</b>, a consolidação <b>nacional e por esfera de governo</b> das contas dos entes da Federação relativas ao <b>exercício anterior</b>, divulgando-a inclusive por meio eletrônico.</p><p>O COMENTÁRIO do Resumo acrescenta a sanção do § 2º: descumprido o prazo, o Poder ou órgão fica impedido de <b>receber transferências voluntárias</b> e de <b>contratar operações de crédito</b>, exceto as destinadas ao pagamento da dívida mobiliária.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da escrituração e consolidação das contas</i></p>",
26:"<p>Certo pela letra do art. 51, § 1º: os <b>Municípios</b> encaminham suas contas ao Poder Executivo da União até <b>30 de abril</b> e os <b>Estados</b>, até <b>31 de maio</b>. Depois vem a consolidação nacional, até 30 de junho.</p><p>Atenção redobrada aqui: o COMENTÁRIO do Resumo simplifica e diz que Estados e Municípios encaminham até 30 de abril. Na prova, vale a lei — o prazo dos Estados é 31 de maio, e a cadeia é abril (Municípios), maio (Estados), junho (consolidação).</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 51, § 1º, da LC 101/2000. O material atribui 30 de abril a Estados e Municípios; a lei dá 31 de maio aos Estados.</p>",
27:"<p>Certo. É o caput do art. 52: o RREO abrange <b>todos os Poderes e o Ministério Público</b> e é publicado até <b>trinta dias após o encerramento de cada bimestre</b>.</p><p>O quadro-resumo do material acrescenta o resto da regra: existe <b>apenas 1 RREO por ente</b> da Federação, consolidado pelo chefe do Executivo, e a responsabilidade pela emissão é <b>apenas do chefe do Executivo</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
28:"<p>Errado no período: o RREO é <b>bimestral</b> (art. 52), publicado até trinta dias após o encerramento de cada <b>bimestre</b>.</p><p>É o par que a banca embaralha o tempo todo, e o Resumo separa bem: <b>RREO — bimestre</b>; <b>RGF — quadrimestre</b>. Os trinta dias de prazo de publicação são iguais nos dois, e a sanção pelo atraso também: sem transferências voluntárias e sem operações de crédito, salvo as da dívida mobiliária.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
29:"<p>Certo. É o item 03 do quadro-resumo do RREO: ele será composto do <b>balanço orçamentário</b> e dos <b>demonstrativos da execução das receitas e despesas</b> (art. 52, I e II).</p><p>Só duas peças compõem o RREO. Os demais demonstrativos do art. 53 — RCL, previdência, resultados nominal e primário, juros e Restos a Pagar — <b>acompanham</b> o relatório, mas não o compõem.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
30:"<p>Certo. É o art. 52, I, <i>a</i>: o balanço orçamentário especificará, por <b>categoria econômica</b>, as <b>receitas por fonte</b>, informando as <b>realizadas e a realizar</b>, bem como a <b>previsão atualizada</b>.</p><p>Do outro lado do mesmo balanço estão as <b>despesas por grupo de natureza</b>, discriminando a dotação para o exercício, a despesa liquidada e o saldo. Receita por fonte, despesa por grupo de natureza.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
31:"<p>Certo. É a alínea <i>c</i> do art. 52, II: entre os demonstrativos da execução está o das <b>despesas por função e subfunção</b>.</p><p>O inciso II tem três alíneas: receitas por categoria econômica e fonte (previsão inicial, previsão atualizada, realizada no bimestre, realizada no exercício e a realizar); despesas por categoria econômica e grupo de natureza; e despesas por <b>função e subfunção</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
32:"<p>Errado, e o Resumo responde em dois itens do quadro do RREO: existe <b>apenas 1 RREO por ente</b> da Federação e a responsabilidade pela emissão é <b>apenas do chefe do Poder Executivo</b>.</p><p>O RREO <b>abrange</b> todos os Poderes e o Ministério Público, mas quem publica é o Executivo, de forma consolidada. Relatório próprio por Poder é o <b>RGF</b> (art. 54), que cada titular emite e assina — não confunda os dois.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
33:"<p>Certo. São os cinco demonstrativos do art. 53 que o Resumo lista: apuração da <b>receita corrente líquida</b>; <b>receitas e despesas previdenciárias</b>; <b>resultados nominal e primário</b>; <b>despesas com juros</b>; e <b>Restos a Pagar</b>.</p><p>Eles <b>acompanham</b> o RREO em todos os bimestres. Não confunda com os três do § 1º, exclusivos do <b>último</b> bimestre: regra de ouro, projeções atuariais e variação patrimonial.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
34:"<p>Certo. É o último item da lista do art. 53 no Resumo: Restos a Pagar, <b>detalhando, por Poder e órgão, os valores inscritos, os pagamentos realizados e o montante a pagar</b>.</p><p>Os Restos a Pagar aparecem duas vezes no controle periódico: nesse demonstrativo do RREO, a cada bimestre, e no RGF do <b>último quadrimestre</b>, com o montante das disponibilidades de caixa em 31 de dezembro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
35:"<p>Certo. São os três demonstrativos do art. 53, § 1º, exclusivos do <b>último bimestre</b>: <b>regra de ouro</b> (as operações de crédito não excederam o montante das despesas de capital), <b>projeções atuariais</b> dos regimes de previdência e <b>variação patrimonial</b>, evidenciando a alienação de ativos e a aplicação dos recursos dela decorrentes.</p><p>O quadro-resumo do material separa exatamente assim: cinco demonstrativos em todo bimestre, mais três no fechamento do exercício.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
36:"<p>Errado. As projeções atuariais estão entre os demonstrativos do art. 53, § 1º, que acompanham apenas o RREO do <b>último bimestre</b> do exercício.</p><p>Separe as duas listas do Resumo. Todo bimestre: RCL, receitas e despesas previdenciárias, resultados nominal e primário, juros e Restos a Pagar. Só no último bimestre: regra de ouro, <b>projeções atuariais</b> e variação patrimonial.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório Resumido da Execução Orçamentária (RREO)</i></p>",
37:"<p>Certo. É o art. 53, § 2º: quando for o caso, o RREO será acompanhado de <b>justificativas</b> da <b>limitação de empenho</b> e da <b>frustração de receitas</b>, especificando as medidas de combate à sonegação e à evasão fiscal adotadas ou a adotar e as ações de fiscalização e cobrança.</p><p>A ligação é com o art. 9º, esse no Resumo: verificado ao final do bimestre que a receita não comporta as metas, vem a limitação de empenho. O RREO do bimestre é onde essa limitação tem de ser justificada.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 53, § 2º, da LC 101/2000. O material lista apenas os demonstrativos do caput e do § 1º.</p>",
38:"<p>Certo. É o art. 54: ao final de <b>cada quadrimestre</b> será emitido pelos <b>titulares dos Poderes e órgãos</b> o Relatório de Gestão Fiscal.</p><p>O esquema do Resumo lista quem assina: Chefe do Executivo; Presidente e demais membros da <b>Mesa Diretora</b> do Legislativo; Presidente de Tribunal e demais membros de <b>Conselho de Administração</b> do Judiciário; Chefe do Ministério Público da União e dos Estados; e a autoridade responsável pela administração financeira e pelo controle interno.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório de Gestão Fiscal (RGF)</i></p>",
39:"<p>Errado no período: o RGF é emitido ao final de cada <b>quadrimestre</b>, e não de cada bimestre. É a OBSERVAÇÃO 1 do Resumo sobre o art. 54.</p><p>O par que a banca inverte: <b>RREO — bimestral</b>, trata de receitas e despesas; <b>RGF — quadrimestral</b>, trata de limites. Os trinta dias para publicar valem para os dois.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório de Gestão Fiscal (RGF)</i></p>",
40:"<p>Certo. Está no esquema de assinaturas do art. 54: no Poder Legislativo, o RGF é assinado pelo <b>Presidente e demais membros da Mesa Diretora</b>.</p><p>Compare com o Judiciário no mesmo esquema: lá são o <b>Presidente de Tribunal e demais membros do Conselho de Administração</b>. A banca troca Mesa Diretora por Conselho de Administração para ver se o candidato decorou o quadro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório de Gestão Fiscal (RGF)</i></p>",
41:"<p>Certo. É o último item do esquema do art. 54: o RGF também é assinado pela <b>autoridade responsável pela administração financeira</b> e pelo <b>controle interno</b>.</p><p>Repare que essa assinatura se soma à do titular do Poder ou órgão — ela não substitui nenhuma das outras. O RGF sai com a firma de quem manda e de quem controla.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório de Gestão Fiscal (RGF)</i></p>",
42:"<p>Certo. É a OBSERVAÇÃO 2 do Resumo, do art. 55, § 2º: o RGF será publicado até <b>trinta dias após o encerramento do período</b> a que corresponder, com <b>amplo acesso ao público, inclusive por meio eletrônico</b>.</p><p>O período é o quadrimestre (art. 54). Junte os dois números: emissão ao final de cada quadrimestre; publicação em até 30 dias depois.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório de Gestão Fiscal (RGF)</i></p>",
43:"<p>Certo. É a OBSERVAÇÃO 3 do Resumo, do art. 55, § 3º: descumprido o prazo de trinta dias, o Poder ou órgão fica impedido, até regularizar, de <b>receber transferências voluntárias</b> e de <b>contratar operações de crédito</b>, <b>exceto as destinadas ao pagamento da dívida mobiliária</b>.</p><p>Essa dupla de sanções é a mesma do atraso no RREO (art. 52, § 2º) e no envio das contas para a consolidação (art. 51, § 2º). O material repete o quadro nas três passagens — é um só bloco a memorizar.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do Relatório de Gestão Fiscal (RGF)</i></p>",
44:"<p>Certo. É o esquema DO CONTEÚDO DO RGF (art. 55, I e II): comparativo com os limites de <b>despesa total com pessoal, distinguindo a com inativos e pensionistas</b>, <b>dívidas consolidada e mobiliária</b>, <b>concessões de garantias</b> e <b>operações de crédito, inclusive por ARO</b>.</p><p>São quatro limites em comparativo. Guarde o detalhe que a banca corta: na despesa com pessoal é preciso <b>distinguir</b> a parcela de inativos e pensionistas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do conteúdo do RGF</i></p>",
45:"<p>Certo. É o segundo bloco do esquema do art. 55: o RGF indica as <b>medidas corretivas adotadas ou a adotar, se ultrapassado qualquer dos limites</b>.</p><p>Repare no gatilho: <b>qualquer</b> um dos quatro limites comparados — pessoal, dívidas, garantias ou operações de crédito. Ultrapassado um só, o relatório já tem de trazer o plano de correção.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do conteúdo do RGF</i></p>",
46:"<p>Certo, e é exatamente o quadro ATENÇÃO do Resumo sobre o art. 55, § 1º: o RGF do <b>Legislativo, do Judiciário e do Ministério Público</b> não conterá o comparativo com os limites das <b>dívidas consolidada e mobiliária</b>, das <b>concessões de garantias</b> e das <b>operações de crédito, inclusive por ARO</b>.</p><p>Sobra o quê? O comparativo com o limite de <b>despesa total com pessoal</b>, que é o limite que esses Poderes e órgãos efetivamente têm. Endividamento é matéria do ente, conduzida pelo Executivo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do conteúdo do RGF</i></p>",
47:"<p>Certo. São os demonstrativos do <b>último quadrimestre</b> no esquema do art. 55: montante das <b>disponibilidades de caixa em 31 de dezembro</b>, <b>inscrição em Restos a Pagar</b> e cumprimento das regras da operação de crédito por <b>ARO</b>.</p><p>O Resumo detalha a terceira: demonstrar que a ARO foi <b>liquidada até o dia 10 de dezembro</b> e que não foi realizada no <b>último ano de mandato</b> do Chefe do Executivo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do conteúdo do RGF</i></p>",
48:"<p>Certo. É o art. 55, § 4º: os relatórios dos arts. 52 (RREO) e 55 (RGF) deverão ser elaborados de <b>forma padronizada</b>, segundo modelos que poderão ser <b>atualizados pelo conselho de gestão fiscal</b> a que se refere o art. 67.</p><p>A padronização é o que torna possível a consolidação nacional das contas do art. 51, que o material desenvolve: só se consolida o que vem no mesmo formato.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 55, § 4º, da LC 101/2000. O material não menciona o conselho de gestão fiscal.</p>",
49:"<p>Certo. É o art. 63, II: é <b>facultado</b> aos Municípios com população <b>inferior a cinquenta mil habitantes</b> optar por divulgar <b>semestralmente</b> o <b>Relatório de Gestão Fiscal</b> e os <b>demonstrativos do art. 53</b>.</p><p>A divulgação semestral deve ocorrer em até trinta dias após o encerramento do semestre. É faculdade, não dever — o Município pode manter a periodicidade comum.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 63 da LC 101/2000. O material trata o RGF apenas pela regra geral quadrimestral dos arts. 54 e 55.</p>",
50:"<p>Errado. A faculdade do art. 63, II, alcança o <b>RGF</b> e os <b>demonstrativos do art. 53</b> — não o <b>RREO</b> em si, que continua <b>bimestral</b>.</p><p>A publicação bimestral do RREO tem raiz constitucional (art. 165, § 3º), e o art. 52 do Resumo a repete sem ressalva de porte do Município. Optar pelo regime do art. 63 não dispensa o relatório de cada bimestre.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 63 da LC 101/2000. O material não traz a faculdade dos Municípios de pequeno porte.</p>",
51:"<p>Certo. É o art. 56: as contas prestadas pelos Chefes do Poder Executivo incluem, além das próprias, as dos <b>Presidentes dos órgãos dos Poderes Legislativo e Judiciário</b> e as do <b>Chefe do Ministério Público</b>, que receberão <b>parecer prévio separadamente</b> do respectivo Tribunal de Contas.</p><p>O detalhe cobrado é o separadamente: as contas vêm juntas na prestação, mas o parecer prévio de cada uma é autônomo.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 56 da LC 101/2000. O material encerra a transparência no conteúdo do RGF (art. 55).</p>",
52:"<p>Certo. É o art. 57: os Tribunais de Contas emitirão <b>parecer prévio conclusivo</b> sobre as contas no prazo de <b>sessenta dias</b> do recebimento, se outro não estiver estabelecido nas constituições estaduais ou nas leis orgânicas municipais.</p><p>Guarde o prazo com a ressalva: sessenta dias é regra supletiva — constituição estadual ou lei orgânica podem fixar prazo diverso.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 57 da LC 101/2000. O material não trata do parecer prévio dos Tribunais de Contas.</p>",
53:"<p>Certo. É o art. 57, § 1º: no caso de Municípios que <b>não sejam capitais</b> e que tenham <b>menos de duzentos mil habitantes</b>, o prazo para o parecer prévio sobe para <b>cento e oitenta dias</b>.</p><p>Os dois requisitos são cumulativos: não ser capital <b>e</b> ter menos de duzentos mil habitantes. Capital, ainda que pequena, segue os sessenta dias.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 57, § 1º, da LC 101/2000. O material não cobre os prazos do parecer prévio.</p>",
54:"<p>Certo. É o art. 57, § 2º: os Tribunais de Contas <b>não entrarão em recesso</b> enquanto existirem contas de Poder, ou órgão referido no art. 20, pendentes de <b>parecer prévio</b>.</p><p>É a sanção institucional que garante o prazo dos sessenta ou cento e oitenta dias: a corte de contas não para enquanto houver conta pendente de parecer.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 57, § 2º, da LC 101/2000. O material não trata da prestação de contas do Capítulo IX.</p>",
55:"<p>Certo. É o art. 58: a prestação de contas evidenciará o <b>desempenho da arrecadação em relação à previsão</b>, destacando as providências adotadas no âmbito da <b>fiscalização das receitas</b> e do <b>combate à sonegação</b>.</p><p>O artigo acrescenta ainda as ações de <b>recuperação de créditos</b> nas instâncias administrativa e judicial e as demais medidas para incremento das receitas tributárias e de contribuições. É o fecho do ciclo aberto pelo art. 11, que o material desenvolve: quem tem o dever de arrecadar presta contas do que arrecadou.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 58 da LC 101/2000. O material não cobre a prestação de contas.</p>",
56:"<p>Certo. É o caput do art. 59: fiscalizarão o cumprimento das normas da LRF o <b>Poder Legislativo</b>, diretamente ou com o auxílio dos <b>Tribunais de Contas</b>, e o <b>sistema de controle interno</b> de cada Poder e do Ministério Público.</p><p>É o desenho clássico: controle externo a cargo do Legislativo com auxílio da corte de contas, somado ao controle interno de cada Poder. Do mesmo artigo sai o § 1º, que o material traz como <b>limite de alerta</b>.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 59, caput, da LC 101/2000. O material reproduz desse artigo apenas o § 1º, no limite de alerta.</p>",
57:"<p>Certo. É o art. 59, § 1º, II, no quadro DO LIMITE DE ALERTA do Resumo: os Tribunais de Contas alertarão os Poderes ou órgãos referidos no art. 20 quando o montante da despesa total com pessoal ultrapassar <b>90% do limite</b>.</p><p>O EXEMPLO do material fecha a conta: se o limite global é 60% da RCL, o alerta soa a 90% de 60%, ou seja, <b>54% da RCL</b>. E o quadro ATENÇÃO avisa: no limite de alerta <b>não há sanções</b>, é só um alerta.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite de alerta</i></p>",
58:"<p>Errado no percentual: o alerta do art. 59, § 1º, III, também é a <b>90%</b> dos respectivos limites, e não a 95%.</p><p>O quadro NÃO CONFUNDA do Resumo é justamente esse: <b>limite de alerta</b>, quando ultrapassar <b>90%</b> do limite (art. 59, § 1º); <b>limite prudencial</b>, quando ultrapassar <b>95%</b> do limite (art. 22, parágrafo único). 90 avisa, 95 proíbe.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite de alerta</i></p>",
59:"<p>Certo. É o art. 67: o acompanhamento e a avaliação, de forma <b>permanente</b>, da política e da operacionalidade da gestão fiscal cabem a <b>conselho de gestão fiscal</b>, constituído por representantes de todos os Poderes e esferas de Governo, do Ministério Público e de entidades técnicas representativas da sociedade.</p><p>É esse mesmo conselho que pode atualizar os modelos padronizados do RREO e do RGF (art. 55, § 4º).</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 67 da LC 101/2000. O material não chega ao capítulo das disposições finais.</p>",
60:"<p>Certo. É o art. 73-A: <b>qualquer cidadão, partido político, associação ou sindicato</b> é parte legítima para denunciar ao respectivo <b>Tribunal de Contas</b> e ao <b>órgão competente do Ministério Público</b> o descumprimento das prescrições da LRF.</p><p>Fecha o sistema de transparência que o material desenvolve nos arts. 48 e 48-A: a informação é aberta ao cidadão justamente para que ele possa provocar o controle.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 73-A da LC 101/2000. O material não alcança as disposições finais e transitórias.</p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"Gestão patrimonial, transparência e controle", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
