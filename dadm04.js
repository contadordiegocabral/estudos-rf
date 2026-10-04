/* Direito Administrativo — Módulo 04: Agentes públicos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm04 = (function(){
"use strict";

var CARDS = [
  ["Quem são os agentes públicos, para Hely Lopes Meirelles?","Todas as <b>pessoas físicas</b> incumbidas, <b>definitiva ou transitoriamente</b>, do exercício de <b>alguma função estatal</b> atribuída a órgão ou entidade da Administração Pública."],
  ["Quais as cinco espécies de agentes públicos na classificação de Hely Lopes Meirelles?","Agentes <b>políticos</b> · <b>administrativos</b> · <b>honoríficos</b> · <b>delegados</b> · <b>credenciados</b>."],
  ["O que caracteriza os AGENTES POLÍTICOS, e quais os exemplos do resumo?","<b>Elaboram políticas públicas</b> e <b>dirigem a Administração</b>, com <b>liberdade funcional</b>. Exemplos: <b>Chefes do Executivo</b>, <b>Ministros e Secretários</b>, <b>Membros do Legislativo</b>, <b>Juízes</b>, <b>Membros do MP e do TCU</b>."],
  ["O que caracteriza os AGENTES ADMINISTRATIVOS?","<b>Exercem atividades administrativas</b>. Exemplos: <b>servidores públicos</b>, <b>empregados públicos</b> e <b>agentes temporários</b>."],
  ["O que caracteriza os AGENTES HONORÍFICOS?","<b>Prestam serviços relevantes ao Estado</b> e, <b>em regra, não recebem remuneração</b>. Exemplos: <b>mesários</b> e <b>júri</b>."],
  ["Agentes DELEGADOS e agentes CREDENCIADOS — qual a diferença?","<b>Delegados:</b> <b>particulares em colaboração</b> com o Poder Público, <b>PJ ou PF</b> — concessionárias, <b>tabeliães</b>, <b>leiloeiros</b>. <b>Credenciados:</b> <b>representam a Administração em atividade específica</b> (ex.: pessoas de renome)."],
  ["Os contratos com agentes temporários se submetem à CLT?","<b>Não</b> se submetem aos termos da <b>CLT</b>, o que <b>não impede</b> a aplicação dos <b>direitos sociais do art. 7º da CF</b>, especialmente quando há <b>sucessivas prorrogações</b>."],
  ["Vínculo contratual e vínculo jurídico-administrativo correspondem a que regimes?","<b>Vínculo contratual = celetista</b> · <b>vínculo jurídico-administrativo = estatutário</b>. Os agentes com <b>vínculo contratual com entidades de direito público</b> são os <b>servidores celetistas</b>."],
  ["Quem são os AGENTES DE FATO?","Pessoas investidas na função pública de forma <b>emergencial</b> (agentes <b>necessários</b>) ou <b>irregular</b> (agentes <b>putativos</b>). Seus atos <b>devem ser convalidados</b> — <b>teoria da aparência</b>."],
  ["Exemplos de agentes de fato no resumo","Servidor <b>sem a formação universitária</b> exigida · servidor com <b>idade inferior ao mínimo legal</b> · servidor <b>suspenso</b> que continua exercendo · agente que atua <b>após vencido o prazo da contratação</b> · servidor em exercício <b>após a idade-limite da aposentadoria compulsória</b>."],
  ["O que é USURPAÇÃO DE FUNÇÃO, e qual o exemplo do resumo?","Alguém <b>se apodera das atribuições</b> de agente público <b>sem ter sido investido</b> em cargo, emprego ou função — é <b>crime de particular contra a Administração</b> no Código Penal. Ex.: <b>particular adquire farda de policial</b> e passa a <b>patrulhar, apreender mercadorias e aplicar multas</b>. <b>Não se confunde</b> com agente de fato."],
  ["O agente de fato precisa devolver o que recebeu?","<b>Não.</b> <b>STF, RMS 25.104/DF</b>: embora a investidura seja irregular, os agentes de fato <b>trabalharam em suas funções</b> e, por isso, <b>não há que falar em devolução</b> dos recursos recebidos como retribuição pecuniária."],
  ["O que é FUNÇÃO pública?","O <b>conjunto de atribuições exercidas pelo servidor sem que lhe corresponda um cargo ou emprego público</b>. Ex.: o <b>mesário</b> e o <b>membro do júri</b> exercem função pública, mas <b>não têm cargo</b>."],
  ["Cargo público × emprego público","<b>Cargo:</b> provimento <b>efetivo</b> (concurso) ou <b>em comissão</b> (livre nomeação e exoneração) · <b>servidores públicos</b> · regime <b>estatutário</b> (<b>RJU</b>) · entidades de <b>direito público</b> (adm. direta, autarquias, fundações públicas). <b>Emprego:</b> provimento <b>por concurso</b> · <b>empregados públicos</b> · regime <b>celetista</b> · entidades de <b>direito privado</b> (<b>EP</b>, <b>SEM</b>, fundações de direito privado)."],
  ["Cargo vago pode ser extinto como, e o que diz o art. 37, XII, da CF?","Cargo público <b>vago</b> no âmbito federal pode ser extinto por <b>decreto do Presidente da República</b> (art. 84, VI, “b”). E os <b>vencimentos dos cargos do Legislativo e do Judiciário</b> <b>não poderão ser superiores</b> aos pagos pelo <b>Executivo</b>."],
  ["Cargo em comissão × função de confiança","<b>Cargo em comissão:</b> <b>qualquer pessoa</b>, com <b>percentual mínimo de concursados previsto em lei</b>. <b>Função de confiança:</b> <b>somente servidores efetivos</b>. Ambos se destinam apenas a <b>direção, chefia e assessoramento</b> — por isso <b>não cabe</b> cargo em comissão de <b>professora</b>."],
  ["Concurso público: quem participa, formas, obrigatoriedade, validade e exceções","<b>Brasileiros e estrangeiros</b> (estes, <b>na forma da lei</b>) · de <b>provas</b> ou de <b>provas e títulos</b> · <b>obrigatório para cargos e empregos públicos</b> · validade de <b>até dois anos</b>, <b>prorrogável uma vez por igual período</b>. <b>Exceções</b> à exigência: <b>cargos em comissão</b>, <b>contratações temporárias</b> e <b>agentes comunitários de saúde</b>."],
  ["Reserva de vagas em concurso — os percentuais do resumo","Até <b>20% das vagas</b> para <b>portadores de deficiência</b> (<b>mínimo de 5%</b>) · <b>20% para negros</b> (caso haja <b>3 ou mais vagas</b>)."],
  ["Quando se verificam as restrições do edital (idade, altura, sexo)?","<b>Em regra, no ato da posse</b>. <b>Exceções:</b> os <b>3 anos de atividade jurídica</b> para juiz e MP e o <b>limite máximo de idade nas polícias</b> — nesses casos, <b>na inscrição</b> do concurso. Restrições <b>só por lei</b>, observada a <b>proporcionalidade</b> com as atribuições do cargo."],
  ["O que é a CLÁUSULA DE BARREIRA e ela é válida?","Dispositivo do edital pelo qual <b>apenas os concorrentes mais bem classificados</b> (vagas + cadastro de reserva) seguem, <b>limitando o número de candidatos nas fases subsequentes</b>. É <b>permitida</b> — <b>não viola</b> o princípio do concurso público."],
  ["O que decidiu o STF no RE 837.311 sobre novas vagas?","O <b>surgimento de novas vagas</b> ou a <b>abertura de novo concurso</b> durante a validade do certame <b>não gera automaticamente</b> direito à nomeação dos aprovados <b>fora das vagas</b> do edital — <b>ressalvada a preterição arbitrária e imotivada</b>, por comportamento <b>tácito ou expresso</b>, a ser <b>demonstrada de forma cabal pelo candidato</b>."],
  ["Tatuagem e exame psicotécnico em concurso","<b>STF, RE 898.450:</b> não havendo lei sobre o tema, os editais estão <b>impedidos de restringir</b> tatuagens, <b>exceto</b> as que <b>violem valores constitucionais</b>. <b>SV 44:</b> <b>só por lei</b> se pode sujeitar a <b>exame psicotécnico</b> a habilitação de candidato a cargo público."],
  ["Onde está o direito de greve do servidor, qual sua eficácia e como o STF supriu a omissão?","<b>Art. 37, VII, da CF</b> — norma de <b>eficácia limitada</b>, e a lei exigida <b>nunca foi editada</b>. Em <b>mandado de injunção</b>, o STF determinou a aplicação <b>temporária</b>, ao setor público, <b>no que couber</b>, da <b>lei de greve do setor privado (Lei 7.783/1989)</b>, até que o Congresso legisle."],
  ["Greve e carreiras de segurança pública, segundo o STF","É <b>ilícito</b> o exercício de greve pela <b>Polícia Civil</b> — prevalece o <b>interesse público e social</b> na manutenção da <b>segurança interna, da ordem pública e da paz social</b>. A vedação alcança <b>todos os servidores que atuem diretamente na área de segurança pública</b>."],
  ["Desconto dos dias parados na greve — o que é obrigatório, o que é facultativo e quando não cabe?","A Administração <b>DEVERÁ descontar</b> os dias parados (<b>obrigatório</b>) e <b>PODERÁ celebrar acordo</b> de compensação (<b>facultativo</b>). <b>STF, RE 693.456/RJ:</b> o desconto é <b>incabível</b> se a greve foi provocada por <b>conduta ilícita do próprio poder público</b>, a exemplo do <b>atraso nos pagamentos</b>."],
  ["Greve: militares, competência e efeito da deflagração","Ao <b>militar</b> são <b>proibidas a sindicalização e a greve</b> (art. 142, §3º, IV). <b>RE 846.854/SP:</b> a <b>justiça comum</b> julga a abusividade de greve dos <b>celetistas da adm. direta, autarquias e fundações públicas</b>; a <b>justiça do trabalho</b>, só os celetistas das <b>empresas estatais</b>. Pelo <b>STJ</b>, a deflagração <b>suspende o vínculo funcional</b> e <b>desobriga</b> o pagamento dos dias não trabalhados."],
  ["Contratação temporária: requisitos, forma e vínculo","Casos excepcionais <b>previstos em lei</b> · prazo <b>predeterminado</b> · necessidade <b>temporária</b> · interesse público <b>excepcional</b>. Feita <b>sem concurso</b>, por <b>processo seletivo simplificado</b>. O temporário <b>exerce função pública</b>, mas <b>não ocupa cargo nem emprego</b> — firma <b>contrato de direito público</b>."],
  ["Sistema remuneratório: vencimentos, salário e subsídio","<b>Vencimentos</b> (vencimento básico + vantagens) → <b>servidores públicos</b>. <b>Salário</b> → <b>empregados</b>. <b>Subsídio</b> (<b>parcela única</b>) → <b>agentes políticos, AGU, PGFN, defensores públicos, policiais e bombeiros</b>; <b>facultativo</b> para servidores <b>organizados em carreira</b>. Pelo <b>art. 37, X</b>, só se fixam ou alteram <b>por lei específica</b>, <b>assegurada revisão geral anual</b> (<b>aumento impróprio</b>), <b>na mesma data e sem distinção de índices</b>."],
  ["Os substitutos interinos das serventias extrajudiciais se submetem ao teto?","<b>Sim.</b> Segundo o STF, o <b>interino</b> (ex.: notário ou oficial de registro dos cartórios) <b>não atua como delegado</b> do serviço notarial e de registro, mas como <b>preposto do poder público</b>."],
  ["Qual o teto na esfera federal e quando EP e SEM se submetem a ele?","Na esfera federal, para os <b>três Poderes</b>: <b>subsídio dos Ministros do STF</b> (art. 37, XI). <b>EP, SEM e suas subsidiárias</b> se submetem <b>apenas se receberem recursos da fazenda pública</b> para <b>despesas de pessoal</b> ou de <b>custeio em geral</b>."],
  ["Teto na esfera estadual — os quatro casos","<b>Executivo:</b> subsídio do <b>Governador</b>. <b>Legislativo:</b> subsídio dos <b>Deputados Estaduais</b>. <b>Membros do Judiciário (juízes):</b> subsídio dos <b>Ministros do STF</b>. <b>Servidores do Judiciário, defensores, procuradores e membros do MP:</b> subsídio do <b>Desembargador do TJ</b>, limitado a <b>90,25%</b> do subsídio do STF."],
  ["Teto municipal e a faculdade do art. 37, §12, da CF","<b>Municipal:</b> <b>subsídio do Prefeito</b>, para <b>Executivo e Legislativo</b>. O <b>§12</b> faculta aos <b>Estados e ao DF</b> (<b>municípios não</b>) fixar, por <b>emenda</b>, o subsídio dos <b>Desembargadores do TJ</b> como <b>limite único</b>, até <b>90,25%</b> do STF — <b>não se aplicando</b> aos <b>Deputados Estaduais e Distritais e aos Vereadores</b>."],
  ["Quais as três hipóteses de acumulação na ATIVA, e até onde vai a proibição?","Sempre com <b>compatibilidade de horários</b>: <b>dois cargos de professor</b> · <b>um de professor com outro técnico ou científico</b> · <b>dois cargos ou empregos na área de saúde</b>. A proibição (art. 37, XVII) alcança <b>empregos e funções</b> e abrange <b>autarquias, fundações, EP, SEM, suas subsidiárias e sociedades controladas</b>, direta ou indiretamente."],
  ["Quem são os profissionais da saúde, e há limite de 60 horas?","Pela <b>Resolução 287/98 do CNS</b>: <b>assistentes sociais</b>, biólogos, biomédicos, profissionais de educação física, <b>enfermeiros</b>, farmacêuticos, fisioterapeutas, fonoaudiólogos, <b>médicos</b>, médicos veterinários, nutricionistas, odontólogos, psicólogos e terapeutas ocupacionais. <b>STF, RE 1.094.802:</b> a acumulação <b>não se sujeita ao limite de 60 horas semanais</b> de norma infraconstitucional."],
  ["Acumulação na APOSENTADORIA — as três exceções e os exemplos do resumo","Exceções: <b>cargos acumuláveis</b> · <b>cargos eletivos</b> · <b>cargos em comissão</b>. <b>Ex. 01:</b> aposentado como <b>Analista do MP-RJ</b> aprovado para <b>Oficial do MP</b> <b>não pode</b> a percepção simultânea. <b>Ex. 02:</b> aposentado <b>compulsoriamente aos 75</b> <b>pode</b> ser nomeado para <b>cargo em comissão</b>, ainda que nas mesmas funções de assessoramento."],
  ["Mandato eletivo — o quadro do art. 38 da CF","<b>Federal, estadual ou distrital:</b> <b>afastado</b> do cargo, emprego ou função, e recebe a <b>remuneração do cargo eletivo</b>. <b>Prefeito:</b> <b>afastado</b>, <b>facultado optar</b> pela remuneração. <b>Vereador:</b> havendo <b>compatibilidade de horários</b>, <b>acumula</b> as duas; não havendo, cai na regra do Prefeito. O tempo conta <b>para todos os efeitos</b>, <b>exceto promoção por merecimento</b>; segurado de <b>RPPS permanece filiado</b> no ente de origem."],
  ["Estabilidade: requisitos, alcance e hipóteses de perda do cargo","<b>Art. 41:</b> <b>investidura em cargo efetivo</b> por <b>concurso</b> · <b>três anos de efetivo exercício</b> · <b>avaliação especial de desempenho</b>. Só para <b>estatutários efetivos</b> (<b>não</b> empregados públicos). Perde o cargo por <b>sentença transitada em julgado</b>, <b>PAD</b> com ampla defesa, <b>avaliação periódica</b> na forma de <b>lei complementar</b>, ou <b>adequação dos gastos aos limites da LRF</b> (art. 169, §3º e §4º)."],
  ["Servidora gestante em cargo em comissão tem estabilidade?","<b>Sim.</b> <b>STF, RE 1.170.558/AM:</b> a servidora pública <b>gestante ocupante de cargo em comissão</b> tem direito à <b>estabilidade provisória</b> desde a <b>confirmação do estado gestacional</b> até <b>cinco meses após o parto</b>."],
  ["Como o teto se calcula na acumulação de cargos e na pensão?","<b>RE 612.975/MT:</b> na <b>acumulação</b>, o teto incide sobre a <b>remuneração isoladamente</b> considerada, <b>não</b> sobre o somatório. <b>RE 602.584/DF:</b> se a <b>morte do instituidor</b> da pensão foi <b>posterior à EC 19/1998</b>, o teto incide sobre o <b>somatório</b> de remuneração ou provento <b>e</b> pensão."],
  ["Três jurisprudências de concurso: OS, triênio e heteroidentificação","<b>ADI 1.923-DF:</b> a seleção pelas <b>OS</b> <b>não</b> se rege pelo concurso público, mas deve ser <b>pública, objetiva e impessoal</b> — o processo seletivo é <b>obrigatório</b>. <b>ADI 3460/DF:</b> sem data no edital, o <b>triênio de prática forense</b> se comprova na <b>inscrição definitiva</b> (pelo <b>STJ</b>, na <b>posse</b>). <b>STJ, RMS 62.040/MG:</b> a exclusão por <b>heteroidentificação</b> exige <b>contraditório e ampla defesa</b>."]
];

var QS = [
  ["Agentes públicos são todas as pessoas físicas incumbidas, definitiva ou transitoriamente, do exercício de alguma função estatal atribuída a órgão ou a entidade da Administração Pública.","C","CEBRASPE","Conceito de Hely Lopes Meirelles adotado pelo resumo."],
  ["Os agentes políticos elaboram políticas públicas e dirigem a Administração, atuando com liberdade funcional.","C","FGV","Caracterização do resumo."],
  ["Os membros do Ministério Público e do TCU são classificados como agentes administrativos.","E","VUNESP","O resumo os lista entre os <b>agentes políticos</b>."],
  ["Mesários e membros do júri são agentes honoríficos e, em regra, não recebem remuneração.","C","IBFC","Prestam serviços relevantes ao Estado."],
  ["Tabeliães e leiloeiros são agentes credenciados, pois representam a Administração em atividade específica.","E","FUNDATEC","São <b>agentes delegados</b> — particulares em colaboração com o Poder Público."],
  ["Os contratos firmados com agentes temporários submetem-se aos termos da Consolidação das Leis do Trabalho.","E","FCC","<b>Não</b> se submetem à CLT, o que não impede a aplicação dos direitos sociais do art. 7º da CF."],
  ["O vínculo jurídico-administrativo corresponde ao regime celetista.","E","VUNESP","Vínculo jurídico-administrativo = <b>estatutário</b>."],
  ["Agentes de fato são pessoas investidas na função pública de forma emergencial, chamados necessários, ou de forma irregular, chamados putativos.","C","AOCP","Seus atos devem ser convalidados — teoria da aparência."],
  ["O particular que adquire farda de policial e passa a aplicar multas de trânsito é agente de fato putativo.","E","CEBRASPE","É <b>usurpação de função</b> — crime de particular contra a Administração."],
  ["Embora a investidura seja irregular, os agentes de fato não precisam devolver os recursos recebidos como retribuição pecuniária.","C","STF, RMS 25.104/DF","Eles trabalharam em suas funções."],
  ["Função é o conjunto de atribuições exercidas pelo servidor, sem que lhe corresponda um cargo ou emprego público.","C","CEBRASPE","Questão-definição do resumo (CESPE – TCM BA 2018)."],
  ["Os empregos públicos são ocupados por servidores públicos sob regime estatutário, nos órgãos da administração direta.","E","FCC","Emprego público: <b>empregados públicos</b>, regime <b>celetista</b>, entidades de <b>direito privado</b> (EP, SEM e fundações de direito privado)."],
  ["Cargo público vago no âmbito federal pode ser extinto por decreto do Presidente da República.","C","CF, art. 84, VI, “b”","Observação do resumo."],
  ["A função de confiança pode ser exercida por qualquer pessoa, desde que observado o percentual mínimo de concursados previsto em lei.","E","VUNESP","Isso é o <b>cargo em comissão</b>; a função de confiança é <b>somente para servidores efetivos</b>."],
  ["A contratação temporária e os cargos em comissão são exceções à exigência de concurso público, ao lado dos agentes comunitários de saúde.","C","FUNDATEC","Ponto 04 do quadro."],
  ["A verificação das restrições previstas em lei ocorre, em regra, no ato da inscrição no concurso.","E","CEBRASPE","Em regra, no ato da <b>posse</b>; na inscrição só o triênio jurídico e o limite máximo de idade nas polícias."],
  ["Não viola o princípio do concurso público a cláusula de barreira que, constante do edital, seleciona apenas os concorrentes mais bem classificados nas fases iniciais.","C","CEBRASPE","Questão-exemplo do resumo (CESPE – DPE PE 2018)."],
  ["O surgimento de novas vagas durante o prazo de validade do certame gera automaticamente direito à nomeação dos candidatos aprovados fora das vagas previstas no edital.","E","STF, RE 837.311","<b>Não gera automaticamente</b> — só há direito na preterição arbitrária e imotivada, demonstrada de forma cabal pelo candidato."],
  ["O direito de greve do servidor público está previsto no art. 37, VII, da CF e é norma de eficácia limitada.","C","CF, art. 37, VII","Requer lei para produzir efeitos, lei que até hoje não foi editada."],
  ["Diante da inércia do legislador, o STF determinou, em mandado de injunção, a aplicação integral e definitiva da Lei 7.783/1989 ao setor público.","E","FGV","A aplicação é <b>temporária</b> e <b>no que couber</b>, até que o Congresso edite a norma regulamentadora."],
  ["Conforme o STF, o exercício do direito de greve é vedado aos policiais civis e a todos os servidores públicos que atuem diretamente na área de segurança pública.","C","CEBRASPE","Prevalece o interesse público na segurança interna, na ordem pública e na paz social."],
  ["Em caso de greve, a Administração poderá descontar os dias parados e deverá celebrar acordo de compensação.","E","FCC","Está invertido: <b>deverá descontar</b> (obrigatório) e <b>poderá celebrar</b> o acordo (facultativo)."],
  ["O desconto na folha de pagamento será incabível se ficar demonstrado que a greve foi provocada por conduta ilícita do próprio poder público, como o atraso nos pagamentos.","C","STF, RE 693.456/RJ","Observação 02 do tópico de greve."],
  ["Ao militar é vedada a greve, mas assegurada a sindicalização.","E","CF, art. 142, §3º, IV","São proibidas <b>as duas</b>: sindicalização e greve."],
  ["Compete à justiça do trabalho julgar a abusividade de greve de servidores públicos celetistas da administração direta, das autarquias e das fundações públicas.","E","STF, RE 846.854/SP","Compete à <b>justiça comum</b> federal ou estadual; a justiça do trabalho julga só os celetistas das <b>empresas estatais</b>."],
  ["O STF admitiu que o Governador edite decreto prevendo contratação temporária excepcional, limitada ao período de duração da greve, para garantir a continuidade de serviços públicos essenciais.","C","CEBRASPE","Questão-jurisprudência do resumo (CESPE – TCE PA 2019)."],
  ["Os agentes temporários ocupam emprego público e firmam contrato regido pelo direito privado.","E","AOCP","Exercem <b>função pública</b>, sem ocupar cargo nem emprego, e firmam <b>contrato de direito público</b>."],
  ["O subsídio é fixado em parcela única e aplica-se aos agentes políticos, à AGU, à PGFN, aos defensores públicos, aos policiais e aos bombeiros.","C","IBFC","Para servidores organizados em carreira é <b>facultativo</b>."],
  ["Segundo o STF, os substitutos interinos das serventias extrajudiciais não se submetem ao teto remuneratório, pois atuam como delegados do serviço notarial e de registro.","E","FUNDATEC","<b>Submetem-se</b> ao teto: o interino atua como <b>preposto do poder público</b>, e não como delegado."],
  ["Empresas públicas e sociedades de economia mista, bem como suas subsidiárias, submetem-se ao teto apenas se receberem recursos da fazenda pública para pagamento de despesas de pessoal ou de custeio em geral.","C","CF, art. 37, XI","Por isso a subsidiária que recebe dotação só para investimentos fica fora."],
  ["No âmbito estadual, o teto aplicável aos servidores do Judiciário, aos defensores, aos procuradores e aos membros do MP é o subsídio do Desembargador do TJ, limitado a 90,25% do subsídio do STF.","C","FGV","Linha da tabela do resumo."],
  ["No âmbito estadual, o teto dos membros do Judiciário é o subsídio do Governador.","E","VUNESP","É o subsídio dos <b>Ministros do STF</b>; o do Governador é o teto do <b>Executivo estadual</b>."],
  ["O art. 37, §12, da CF faculta a Estados, ao DF e aos Municípios fixar como limite único o subsídio dos Desembargadores do Tribunal de Justiça.","E","CF, art. 37, §12","A faculdade é só dos <b>Estados e do DF</b> — <b>municípios não</b>."],
  ["É vedada a acumulação remunerada de cargos públicos, salvo, havendo compatibilidade de horários, dois cargos de professor, um de professor com outro técnico ou científico, ou dois cargos ou empregos na área de saúde.","C","CF, art. 37, XVI","As três hipóteses do resumo."],
  ["A proibição de acumular alcança empregos e funções, mas não as subsidiárias das sociedades de economia mista.","E","CF, art. 37, XVII","Abrange também <b>subsidiárias</b> e sociedades controladas, direta ou indiretamente, pelo poder público."],
  ["Ocupante do cargo de assistente social que é aprovada para o emprego de enfermeira em sociedade de economia mista federal pode acumular, havendo compatibilidade de horários.","C","CEBRASPE","Assistente social é profissional da <b>área de saúde</b> (questão-exemplo do resumo)."],
  ["A acumulação de cargos de profissionais da área de saúde sujeita-se ao limite de 60 horas semanais previsto em norma infraconstitucional.","E","STF, RE 1.094.802","<b>Não se sujeita</b> — inexiste tal requisito na Constituição."],
  ["Na aposentadoria, a acumulação de cargos remunerados é proibida, ressalvados os cargos acumuláveis, os cargos eletivos e os cargos em comissão.","C","AOCP","As três exceções do resumo."],
  ["Servidor aposentado como Analista do Ministério Público que é aprovado em novo concurso para o cargo efetivo de Oficial do mesmo MP pode perceber simultaneamente os proventos e a nova remuneração.","E","IBFC","Exemplo 01 do resumo: <b>não pode</b>, pois o novo cargo não é acumulável, eletivo nem em comissão."],
  ["Servidor aposentado compulsoriamente aos 75 anos pode ser nomeado para cargo em comissão com as mesmas funções de assessoramento que exercia.","C","FUNDATEC","Exemplo 02 do resumo — cargo em comissão é exceção expressa."],
  ["Investido no mandato de Prefeito, o servidor será afastado do cargo, sendo-lhe facultado optar pela sua remuneração.","C","CF, art. 38, II","Literalidade do inciso."],
  ["Investido no mandato de Vereador, o servidor acumulará as remunerações independentemente da compatibilidade de horários.","E","CF, art. 38, III","Só acumula <b>havendo compatibilidade de horários</b>; não havendo, é afastado, podendo optar pela remuneração."],
  ["A estabilidade exige três anos de efetivo exercício no cargo e aprovação em avaliação especial de desempenho, e aplica-se também aos empregados públicos.","E","CF, art. 41","Aplica-se <b>somente aos servidores estatutários efetivos</b>."],
  ["A necessidade de adequar os gastos de pessoal aos limites da Lei de Responsabilidade Fiscal autoriza a perda do cargo do servidor estável.","C","CF, art. 169, §3º e §4º","Quarta hipótese do quadro do resumo."],
  ["Segundo o STF, a servidora pública gestante ocupante de cargo em comissão tem direito à estabilidade provisória desde a confirmação do estado gestacional até cinco meses após o parto.","C","STF, RE 1.170.558/AM","Também é a questão-jurisprudência do resumo (CESPE – TCE PA 2019)."],
  ["A seleção de pessoal pelas Organizações Sociais é regida pelo princípio do concurso público.","E","STF, ADI 1.923-DF","<b>Não</b> é regida pelo concurso público, mas a seleção deve ser <b>pública, objetiva e impessoal</b> — o processo seletivo é obrigatório."],
  ["Segundo o STF, o teto remuneratório, em caso de acumulação de cargos, incide sobre o somatório do que foi recebido.","E","STF, RE 612.975/MT","Incide sobre a <b>remuneração isoladamente</b> considerada."],
  ["Ocorrida a morte do instituidor da pensão após a EC 19/1998, o teto constitucional incide sobre o somatório de remuneração ou provento e pensão percebida pelo servidor.","C","STF, RE 602.584/DF","Aqui, ao contrário da acumulação de cargos, o teto alcança o <b>somatório</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Espécies de agentes, cargo, emprego, função e concurso público",
      '<div class="box"><span class="bl">Conceito e as cinco espécies</span>'+
      '<p><b>Hely Lopes Meirelles:</b> agentes públicos são todas as <b>pessoas físicas</b> incumbidas, <b>definitiva ou transitoriamente</b>, do exercício de <b>alguma função estatal</b> atribuída a órgão ou entidade da Administração Pública. A expressão é usada em <b>sentido amplo</b>.</p>'+
      '<div class="chips"><span class="chip">Políticos</span><span class="chip">Administrativos</span><span class="chip">Honoríficos</span><span class="chip">Delegados</span><span class="chip">Credenciados</span></div></div>'+
      '<div class="box"><span class="bl">Quem é quem</span>'+
      '<ul><li><b>Políticos</b> — elaboram políticas públicas e <b>dirigem a Administração</b>, com <b>liberdade funcional</b>: Chefes do Executivo, Ministros e Secretários, membros do Legislativo, <b>juízes</b>, membros do <b>MP</b> e do <b>TCU</b>.</li>'+
      '<li><b>Administrativos</b> — exercem atividades administrativas: servidores públicos, empregados públicos e <b>agentes temporários</b>.</li>'+
      '<li><b>Honoríficos</b> — serviços relevantes ao Estado, <b>em regra sem remuneração</b>: <b>mesários</b> e <b>júri</b>.</li>'+
      '<li><b>Delegados</b> — <b>particulares em colaboração</b>, PJ ou PF: concessionárias, <b>tabeliães</b>, <b>leiloeiros</b>.</li>'+
      '<li><b>Credenciados</b> — representam a Administração em <b>atividade específica</b> (pessoas de renome).</li></ul>'+
      '<p><b>Temporários:</b> os contratos <b>não</b> se submetem à <b>CLT</b>, o que <b>não impede</b> os direitos sociais do <b>art. 7º da CF</b>, especialmente com <b>sucessivas prorrogações</b>.</p>'+
      '<p class="mn"><em>Vínculo contratual = celetista · vínculo jurídico-administrativo = estatutário</em></p></div>'+
      '<div class="box trap"><span class="bl">Agente de fato × usurpação de função</span>'+
      '<p><b>Agente de fato:</b> investido de forma <b>emergencial</b> (<b>necessário</b>) ou <b>irregular</b> (<b>putativo</b>). Seus atos <b>devem ser convalidados</b> — <b>teoria da aparência</b>. Exemplos do resumo: servidor <b>sem formação universitária</b>; com <b>idade inferior ao mínimo legal</b>; <b>suspenso</b> e ainda em exercício; atuando <b>após vencido o prazo</b> da contratação; em exercício <b>após a idade-limite</b> da aposentadoria compulsória.</p>'+
      '<p><b>Usurpação:</b> alguém <b>se apodera das atribuições sem ter sido investido</b> em cargo, emprego ou função. Exemplo: <b>particular compra farda de policial</b> e passa a patrulhar, apreender mercadorias e aplicar multas. É <b>crime de particular contra a Administração</b> no Código Penal.</p>'+
      '<p><b>STF, RMS 25.104/DF:</b> a investidura é irregular, mas os agentes de fato <b>trabalharam</b> — <b>não há devolução</b> dos valores recebidos.</p></div>'+
      '<div class="box"><span class="bl">Cargo × emprego × função</span>'+
      '<p><b>CARGO:</b> provimento <b>efetivo</b> (concurso) ou <b>em comissão</b> (livre nomeação e exoneração) · ocupado por <b>servidores públicos</b> · regime <b>estatutário</b> (<b>RJU</b>) · órgãos e entidades de <b>direito público</b> (adm. direta, autarquias, fundações públicas).</p>'+
      '<p><b>EMPREGO:</b> provimento <b>mediante concurso</b> · ocupado por <b>empregados públicos</b> · regime <b>celetista</b> · entidades de <b>direito privado</b> (<b>EP</b>, <b>SEM</b>, fundações de direito privado).</p>'+
      '<p><b>FUNÇÃO</b> (questão-definição do resumo): conjunto de atribuições exercidas pelo servidor <b>sem que lhe corresponda cargo ou emprego</b> — o <b>mesário</b> e o <b>membro do júri</b> exercem função, mas não têm cargo.</p>'+
      '<p>Cargo <b>vago</b> no âmbito federal é extinto por <b>decreto do Presidente</b> (art. 84, VI, “b”). E os <b>vencimentos do Legislativo e do Judiciário não podem ser superiores</b> aos do <b>Executivo</b> (art. 37, XII).</p></div>'+
      '<div class="box trap"><span class="bl">Direção, chefia e assessoramento</span>'+
      '<p><b>Cargo em comissão:</b> <b>qualquer pessoa</b>, com <b>percentual mínimo de concursados previsto em lei</b>.</p>'+
      '<p><b>Função de confiança:</b> <b>somente servidores efetivos</b>. A banca troca justamente isto — Joana, diretora de RH, é <b>necessariamente ocupante de cargo efetivo</b>; e a nomeação de Antônio, que nunca passou em concurso, para função de confiança é <b>incorreta</b>.</p>'+
      '<p>Como ambos servem só a <b>direção, chefia e assessoramento</b>, <b>não se cria cargo em comissão de professora</b> (FGV – OAB 2020).</p></div>'+
      '<div class="box tip"><span class="bl">Concurso público — os dez pontos do resumo</span>'+
      '<ul><li><b>Brasileiros e estrangeiros</b> (estes, na forma da lei); <b>obrigatório</b> para cargos e empregos; de <b>provas</b> ou <b>provas e títulos</b>.</li>'+
      '<li><b>Exceções:</b> cargos em comissão · contratações temporárias · <b>agentes comunitários de saúde</b>.</li>'+
      '<li><b>Validade:</b> <b>até dois anos</b>, prorrogável <b>uma vez</b> por igual período.</li>'+
      '<li><b>Restrições só por lei</b> (idade, altura, sexo), com <b>proporcionalidade</b> em relação às atribuições.</li>'+
      '<li><b>Verificação no ato da POSSE</b>, exceto <b>3 anos de atividade jurídica</b> (juiz e MP) e <b>limite máximo de idade nas polícias</b> → <b>na inscrição</b>.</li>'+
      '<li><b>Até 20%</b> das vagas para <b>PcD</b> (<b>mínimo 5%</b>) · <b>20% para negros</b> (se houver <b>3 ou mais vagas</b>).</li>'+
      '<li>Aprovados <b>dentro das vagas</b> do edital têm <b>direito à nomeação</b>; a <b>cláusula de barreira</b> é <b>permitida</b>.</li></ul>'+
      '<p><b>STF, RE 837.311:</b> novas vagas ou novo concurso durante a validade <b>não geram automaticamente</b> direito à nomeação de quem ficou <b>fora das vagas</b> — só na <b>preterição arbitrária e imotivada</b>, tácita ou expressa, <b>demonstrada de forma cabal</b>. Foi o caso de <b>Maria, 5ª colocada para 4 vagas</b>, quando o Estado nomeou <b>três comissionados</b> para as mesmas funções <b>dentro</b> do prazo de validade. Se a nomeação fosse <b>após</b> o prazo, <b>não</b> haveria direito.</p>'+
      '<p><b>Tatuagem (RE 898.450):</b> sem lei, o edital <b>não pode restringir</b>, salvo se a tatuagem <b>violar valores constitucionais</b>. <b>SV 44:</b> <b>só por lei</b> se exige <b>psicotécnico</b>.</p></div>')
  ],
  V2:[
    sl("Greve, contratações temporárias, remuneração e teto",
      '<div class="box"><span class="bl">Direito de greve — art. 37, VII</span>'+
      '<p>Norma de <b>eficácia limitada</b>: exige lei para produzir efeitos, e essa lei <b>até hoje não foi editada</b>. Diante da inércia, o <b>STF</b>, em <b>mandado de injunção</b>, determinou a aplicação <b>temporária</b>, ao setor público, <b>no que couber</b>, da lei de greve do <b>setor privado (Lei 7.783/1989)</b>, até que o <b>Congresso</b> edite a norma regulamentadora.</p>'+
      '<p>Ao <b>militar</b> são proibidas a <b>sindicalização</b> e a <b>greve</b> (art. 142, §3º, IV).</p></div>'+
      '<div class="box trap"><span class="bl">A jurisprudência da greve</span>'+
      '<ul><li><b>Segurança pública:</b> a greve da <b>Polícia Civil é ilícita</b> — prevalece o <b>interesse público e social</b> na manutenção da <b>segurança interna, da ordem pública e da paz social</b>. A vedação alcança <b>todos</b> os servidores que atuem <b>diretamente</b> na área de segurança pública.</li>'+
      '<li><b>Desconto:</b> a Administração <b>DEVERÁ descontar</b> os dias parados (<b>obrigatório</b>) e <b>PODERÁ celebrar acordo</b> de compensação (<b>facultativo</b>).</li>'+
      '<li><b>RE 693.456/RJ:</b> o desconto é <b>incabível</b> se a greve foi provocada por <b>conduta ilícita do próprio poder público</b>, como o <b>atraso nos pagamentos</b>.</li>'+
      '<li><b>STJ:</b> a deflagração do movimento <b>suspende o vínculo funcional</b> e <b>desobriga</b> o pagamento dos dias não trabalhados, <b>podendo haver compensação</b>.</li>'+
      '<li><b>RE 846.854/SP:</b> a <b>justiça comum</b> (federal ou estadual) julga a abusividade de greve de <b>celetistas da adm. direta, autarquias e fundações públicas</b>. A <b>justiça do trabalho</b> julga <b>somente</b> os celetistas das <b>empresas estatais</b>.</li>'+
      '<li>O <b>Governador</b> pode editar decreto prevendo <b>contratação temporária excepcional</b>, <b>limitada à duração da greve</b>, para garantir a continuidade de <b>serviços essenciais</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Contratações temporárias</span>'+
      '<p><b>Requisitos:</b> casos excepcionais <b>previstos em lei</b> · prazo <b>predeterminado</b> · necessidade <b>temporária</b> · interesse público <b>excepcional</b>.</p>'+
      '<p>Feita <b>sem concurso</b>, mediante <b>processo seletivo simplificado</b>. O temporário <b>exerce função pública</b>, mas <b>não ocupa cargo nem emprego</b> — firma <b>contrato de direito público</b> com a Administração.</p></div>'+
      '<div class="box"><span class="bl">Sistema remuneratório</span>'+
      '<ul><li><b>Vencimentos</b> = vencimento básico + vantagens → <b>servidores públicos</b>.</li>'+
      '<li><b>Salário</b> → <b>empregados</b>.</li>'+
      '<li><b>Subsídio</b> (<b>parcela única</b>) → <b>agentes políticos, AGU, PGFN, defensores públicos, policiais e bombeiros</b>; <b>facultativo</b> para servidores <b>organizados em carreira</b>.</li></ul>'+
      '<p><b>Art. 37, X:</b> remuneração e subsídio só <b>por lei específica</b>, observada a <b>iniciativa privativa</b>, <b>assegurada revisão geral anual</b> (o <b>aumento impróprio</b>), <b>sempre na mesma data e sem distinção de índices</b>.</p>'+
      '<p><b>Interinos das serventias extrajudiciais</b> (notário, oficial de registro) <b>submetem-se ao teto</b>: o interino <b>não atua como delegado</b> do serviço notarial, mas como <b>preposto do poder público</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Teto remuneratório — art. 37, XI</span>'+
      '<div class="tree"><div class="leaf"><b>FEDERAL</b> — Executivo, Legislativo e Judiciário → <b>subsídio dos Ministros do STF</b></div>'+
      '<div class="leaf"><b>ESTADUAL · Executivo</b> → subsídio do <b>Governador</b></div>'+
      '<div class="leaf"><b>ESTADUAL · Legislativo</b> → subsídio dos <b>Deputados Estaduais</b></div>'+
      '<div class="leaf"><b>ESTADUAL · membros do Judiciário (juízes)</b> → subsídio dos <b>Ministros do STF</b></div>'+
      '<div class="leaf"><b>ESTADUAL · servidores do Judiciário, defensores, procuradores e membros do MP</b> → subsídio do <b>Desembargador do TJ</b>, limitado a <b>90,25%</b> do STF</div>'+
      '<div class="leaf"><b>MUNICIPAL</b> — Executivo e Legislativo → subsídio do <b>Prefeito</b></div></div>'+
      '<p><b>EP, SEM e subsidiárias</b> se submetem ao teto <b>apenas se receberem recursos da fazenda pública</b> para <b>despesas de pessoal</b> ou <b>custeio em geral</b>. Na questão da FGV, o teto alcançava <b>W</b> (custeio) e <b>Y</b> (pessoal), mas <b>não Z</b>, subsidiária que recebia dotações para <b>investimentos</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O §12 e o 90,25%</span>'+
      '<p>É <b>facultado aos Estados e ao DF</b> — <b>municípios não</b> — fixar, mediante <b>emenda</b> às respectivas Constituições e Lei Orgânica, como <b>limite único</b>, o subsídio mensal dos <b>Desembargadores do TJ</b>, limitado a <b>90,25%</b> do subsídio dos Ministros do STF.</p>'+
      '<p>E o limite único <b>não se aplica</b> aos subsídios dos <b>Deputados Estaduais e Distritais</b> e dos <b>Vereadores</b>.</p></div>')
  ],
  V3:[
    sl("Acumulação, mandato eletivo, estabilidade e jurisprudência",
      '<div class="box"><span class="bl">Acumulação na ATIVA</span>'+
      '<p><b>Em regra é proibido</b>, exceto, <b>havendo compatibilidade de horários</b>:</p>'+
      '<ul><li><b>dois cargos de professor</b>;</li><li><b>um cargo de professor com outro técnico ou científico</b>;</li><li><b>dois cargos ou empregos na área de saúde</b>.</li></ul>'+
      '<p><b>Art. 37, XVII:</b> a proibição <b>estende-se a empregos e funções</b> e abrange <b>autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias</b> e <b>sociedades controladas, direta ou indiretamente</b>, pelo poder público.</p></div>'+
      '<div class="box tip"><span class="bl">Quem é da área de saúde (Resolução 287/98 do CNS)</span>'+
      '<div class="chips"><span class="chip">Assistentes sociais</span><span class="chip">Biólogos</span><span class="chip">Biomédicos</span><span class="chip">Educação física</span><span class="chip">Enfermeiros</span><span class="chip">Farmacêuticos</span><span class="chip">Fisioterapeutas</span><span class="chip">Fonoaudiólogos</span><span class="chip">Médicos</span><span class="chip">Médicos veterinários</span><span class="chip">Nutricionistas</span><span class="chip">Odontólogos</span><span class="chip">Psicólogos</span><span class="chip">Terapeutas ocupacionais</span></div>'+
      '<p>Por isso <b>Maria</b>, assistente social do RS aprovada para o emprego de <b>enfermeira</b> em <b>SEM federal</b>, <b>pode acumular</b> — o cargo de assistente social <b>também é da área de saúde</b>.</p>'+
      '<p><b>STF, RE 1.094.802:</b> a acumulação na saúde <b>não se sujeita ao limite de 60 horas semanais</b> de norma <b>infraconstitucional</b>, pois <b>inexiste tal requisito na CF</b>.</p></div>'+
      '<div class="box"><span class="bl">Acumulação na APOSENTADORIA</span>'+
      '<p><b>Em regra é proibido</b>, exceto: <b>cargos acumuláveis</b> · <b>cargos eletivos</b> · <b>cargos em comissão</b>.</p>'+
      '<p><b>Exemplo 01:</b> João, aposentado como <b>Analista do MP do RJ</b>, é aprovado para o cargo efetivo de <b>Oficial do MP</b> na mesma instituição. <b>Não</b> poderá a percepção simultânea de proventos e remuneração.</p>'+
      '<p><b>Exemplo 02:</b> João, aposentado <b>compulsoriamente aos 75 anos</b>, é convidado para <b>cargo em comissão</b> com <b>exatamente as mesmas funções de assessoramento</b>. Nesse caso, <b>pode</b> ser nomeado.</p></div>'+
      '<div class="box"><span class="bl">Mandato eletivo — art. 38</span>'+
      '<div class="tree"><div class="leaf"><b>FEDERAL, ESTADUAL e DISTRITAL</b> → <b>afastado</b> do cargo, emprego ou função; recebe a <b>remuneração do cargo eletivo</b></div>'+
      '<div class="leaf"><b>PREFEITO</b> → <b>afastado</b>, sendo-lhe <b>facultado optar</b> pela sua remuneração</div>'+
      '<div class="leaf"><b>VEREADOR</b> → havendo <b>compatibilidade de horários</b>, <b>acumula</b> as vantagens do cargo <b>sem prejuízo</b> da remuneração do mandato; <b>não havendo</b>, cai na regra do Prefeito</div></div>'+
      '<p><b>IV:</b> em qualquer afastamento, o tempo de serviço é contado <b>para todos os efeitos legais</b>, <b>exceto para promoção por merecimento</b>. <b>V:</b> segurado de <b>RPPS permanece filiado</b> a esse regime, no <b>ente de origem</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Estabilidade — art. 41</span>'+
      '<p>Aplica-se <b>somente aos servidores estatutários efetivos</b> — <b>não</b> aos <b>empregados públicos</b>. Requisitos: <b>investidura em cargo efetivo</b> por <b>prévia aprovação em concurso</b> · <b>três anos de efetivo exercício</b> no cargo · <b>aprovação em avaliação especial de desempenho</b>.</p>'+
      '<p>O <b>estável só perde o cargo</b>: por <b>sentença judicial transitada em julgado</b>; por <b>processo administrativo</b> com ampla defesa; por <b>avaliação periódica de desempenho</b> na forma de <b>lei complementar</b>, com ampla defesa; ou para <b>adequar os gastos de pessoal aos limites da LRF</b> (art. 169, §3º e §4º).</p>'+
      '<p><b>STF, RE 1.170.558/AM:</b> a servidora <b>gestante ocupante de cargo em comissão</b> tem <b>estabilidade provisória</b> desde a <b>confirmação do estado gestacional</b> até <b>cinco meses após o parto</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Conceitos importantes e o compilado de jurisprudência</span>'+
      '<ul><li><b>Recondução:</b> se a lei do Estado é omissa, o <b>STJ</b> <b>não</b> admite a aplicação por <b>analogia</b> da lei federal.</li>'+
      '<li><b>PcD:</b> se o percentual mínimo resultar em <b>fração</b>, eleva-se ao <b>primeiro número inteiro subsequente</b>, respeitado o <b>limite máximo</b> do percentual legal.</li>'+
      '<li><b>Direitos políticos:</b> o <b>gozo</b> deles é <b>requisito básico</b> de investidura.</li>'+
      '<li><b>RPPS (art. 40):</b> <b>contributivo e solidário</b>, com contribuição do <b>ente</b>, dos <b>ativos</b>, dos <b>aposentados</b> e dos <b>pensionistas</b>, preservado o <b>equilíbrio financeiro e atuarial</b>. <b>Art. 149, §1º:</b> alíquotas podem ser <b>progressivas</b>. <b>Art. 40, §20:</b> <b>um único RPPS</b> e um único gestor por ente. <b>Art. 40, §13:</b> quem ocupa <b>exclusivamente cargo em comissão</b>, outro cargo temporário, mandato eletivo ou emprego público fica no <b>RGPS</b>.</li>'+
      '<li><b>Aposentadoria (art. 40, §1º):</b> por <b>incapacidade permanente</b> no cargo, quando insuscetível de readaptação; <b>compulsória</b> aos <b>70</b> ou <b>75 anos</b> (na forma de LC), com <b>proventos proporcionais</b>; e, na <b>União</b>, aos <b>62 anos (mulher)</b> e <b>65 (homem)</b>.</li>'+
      '<li><b>OS (ADI 1.923-DF):</b> a seleção <b>não</b> se rege pelo concurso público, mas deve ser <b>pública, objetiva e impessoal</b> — o processo seletivo é <b>obrigatório</b>.</li>'+
      '<li><b>Triênio de prática forense (ADI 3460/DF):</b> sem data no edital, comprova-se na <b>inscrição definitiva</b>; o <b>STJ</b>, porém, entende ser <b>na posse</b>.</li>'+
      '<li><b>Heteroidentificação (RMS 62.040/MG):</b> a exclusão exige <b>contraditório e ampla defesa</b>.</li>'+
      '<li><b>Pagamento indevido (REsp 1.769.306/AL):</b> <b>erro administrativo</b> operacional ou de cálculo → <b>devolve</b>, salvo <b>boa-fé objetiva</b> comprovada.</li>'+
      '<li><b>Salário mínimo (RE 449.427/PR):</b> conta a <b>remuneração total</b>; o <b>vencimento base</b> pode ser <b>inferior</b> ao mínimo.</li>'+
      '<li><b>Revisão anual (RE 565.089):</b> a omissão <b>não gera indenização</b>, mas o Executivo deve <b>pronunciar-se de forma fundamentada</b>.</li>'+
      '<li><b>Teto:</b> na <b>acumulação</b>, incide sobre a remuneração <b>isoladamente</b> (RE 612.975/MT); com <b>pensão</b> cujo instituidor morreu <b>após a EC 19/1998</b>, incide sobre o <b>somatório</b> (RE 602.584/DF).</li></ul></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada espécie de agente público ao exemplo do resumo",
  pairs:[["Agentes políticos","Juízes, membros do MP e do TCU"],
         ["Agentes administrativos","Servidores, empregados públicos e temporários"],
         ["Agentes honoríficos","Mesários e membros do júri"],
         ["Agentes delegados","Concessionárias, tabeliães e leiloeiros"],
         ["Agentes credenciados","Pessoas de renome que representam a Administração"]],
  why:"É a classificação de Hely Lopes Meirelles, com os exemplos do próprio resumo."},

S2:{t:"gap", instr:"Complete a equivalência dos vínculos",
  before:"Vínculo contratual corresponde ao regime ",
  after:", e vínculo jurídico-administrativo ao regime estatutário.",
  options:["celetista","estatutário","temporário"], answer:0,
  why:"Os agentes com vínculo contratual com entidades de direito público são os servidores celetistas."},

S3:{t:"multi", instr:"Marque os exemplos de AGENTE DE FATO listados no resumo",
  options:["Servidor sem a formação universitária exigida para a função",
           "Servidor com idade inferior ao mínimo legal",
           "Servidor suspenso do cargo que continua exercendo suas funções",
           "Agente que exerce funções após vencido o prazo de sua contratação",
           "Servidor em exercício após a idade-limite da aposentadoria compulsória",
           "Particular que compra farda de policial e aplica multas de trânsito"],
  answers:[0,1,2,3,4],
  why:"O último é usurpação de função — crime de particular contra a Administração, que não se confunde com agente de fato."},

S4:{t:"sort", instr:"Classifique cada característica",
  buckets:["Cargo público","Emprego público"],
  items:[["Provimento efetivo por concurso ou em comissão",0],
         ["Ocupado por servidores públicos",0],
         ["Regime jurídico estatutário (RJU)",0],
         ["Adm. direta, autarquias e fundações públicas",0],
         ["Ocupado por empregados públicos",1],
         ["Regime jurídico celetista",1],
         ["EP, SEM e fundações de direito privado",1]],
  why:"Quadro comparativo do resumo. O emprego público também exige concurso."},

S5:{t:"mc", instr:"Quem pode ocupar função de confiança e quem pode ocupar cargo em comissão?",
  options:["Função de confiança: somente servidores efetivos; cargo em comissão: qualquer pessoa, com percentual mínimo de concursados previsto em lei",
           "Função de confiança: qualquer pessoa; cargo em comissão: somente servidores efetivos",
           "Ambos: somente servidores efetivos",
           "Ambos: qualquer pessoa, sem restrição"],
  answer:0,
  why:"Por isso Joana, diretora de RH, é necessariamente ocupante de cargo efetivo, e a nomeação de Antônio para função de confiança é incorreta."},

S6:{t:"wordbank", instr:"Monte a regra do prazo de validade do concurso público",
  target:["até","dois","anos","prorrogável","uma","vez","por","igual","período"],
  extra:["três","automaticamente","duas","vezes"],
  why:"Ponto 05 do quadro de concurso público do resumo."},

S7:{t:"mc", instr:"O art. 37, VII, da CF é norma de eficácia limitada e a lei nunca foi editada. O que decidiu o STF?",
  options:["Determinou a aplicação temporária ao setor público, no que couber, da Lei 7.783/1989, até que o Congresso edite a norma",
           "Declarou que o servidor não tem direito de greve enquanto não houver lei",
           "Determinou a aplicação integral e definitiva da Lei 7.783/1989 ao setor público",
           "Editou súmula vinculante regulamentando a greve do servidor"],
  answer:0,
  why:"Foi em sede de mandado de injunção, diante da inércia do legislador."},

S8:{t:"gap", instr:"Complete a regra do desconto dos dias de greve",
  before:"A Administração Pública ",
  after:" descontar os dias parados e poderá celebrar acordo para a compensação.",
  options:["deverá","poderá","não poderá"], answer:0,
  why:"Descontar é obrigatório; o acordo de compensação é facultativo. E o desconto é incabível se a greve decorreu de conduta ilícita do próprio poder público (RE 693.456/RJ)."},

S9:{t:"sort", instr:"Quem julga a abusividade da greve?",
  buckets:["Justiça comum (federal ou estadual)","Justiça do trabalho"],
  items:[["Celetistas da administração direta",0],
         ["Celetistas de autarquias",0],
         ["Celetistas de fundações públicas",0],
         ["Celetistas das empresas estatais",1]],
  why:"STF, RE 846.854/SP. A justiça do trabalho julga somente os conflitos dos celetistas das empresas estatais."},

S10:{t:"multi", instr:"Marque os requisitos da CONTRATAÇÃO TEMPORÁRIA",
  options:["Casos excepcionais previstos em lei",
           "Prazo de contratação predeterminado",
           "Necessidade temporária",
           "Interesse público excepcional",
           "Aprovação em concurso público de provas e títulos",
           "Ocupação de emprego público regido pela CLT"],
  answers:[0,1,2,3],
  why:"Pode ser feita sem concurso, por processo seletivo simplificado. O temporário exerce função pública, sem cargo nem emprego, por contrato de direito público."},

S11:{t:"match", instr:"Ligue cada agente à sua espécie remuneratória",
  pairs:[["Servidores públicos","Vencimentos (vencimento básico + vantagens)"],
         ["Empregados","Salário"],
         ["Agentes políticos, AGU, PGFN, defensores, policiais e bombeiros","Subsídio em parcela única"]],
  why:"Para os servidores organizados em carreira o subsídio é facultativo. A revisão geral anual é assegurada."},

S12:{t:"match", instr:"Ligue cada situação ao seu teto remuneratório",
  pairs:[["Federal — os três Poderes","Subsídio dos Ministros do STF"],
         ["Estadual — Poder Executivo","Subsídio do Governador"],
         ["Estadual — Poder Legislativo","Subsídio dos Deputados Estaduais"],
         ["Estadual — membros do Judiciário (juízes)","Subsídio dos Ministros do STF"],
         ["Estadual — servidores do Judiciário, defensores, procuradores e MP","Subsídio do Desembargador do TJ, até 90,25% do STF"],
         ["Municipal — Executivo e Legislativo","Subsídio do Prefeito"]],
  why:"Tabela do resumo. EP e SEM só se submetem ao teto se receberem recursos públicos para pessoal ou custeio em geral."},

S13:{t:"mc", instr:"O art. 37, §12, da CF faculta fixar como limite único o subsídio dos Desembargadores do TJ. A quem?",
  options:["Aos Estados e ao Distrito Federal, mediante emenda, limitado a 90,25% do subsídio do STF",
           "Aos Estados, ao DF e aos Municípios, por lei ordinária",
           "Somente à União, por emenda constitucional",
           "A todos os entes, sem limite percentual"],
  answer:0,
  why:"Municípios não. E o limite único não se aplica aos subsídios dos Deputados Estaduais e Distritais nem dos Vereadores."},

S14:{t:"multi", instr:"Marque as hipóteses em que a acumulação remunerada na ATIVA é permitida (com compatibilidade de horários)",
  options:["Dois cargos de professor",
           "Um cargo de professor com outro técnico ou científico",
           "Dois cargos ou empregos na área de saúde",
           "Dois cargos técnicos ou científicos",
           "Um cargo efetivo com um emprego em empresa pública, fora das hipóteses acima"],
  answers:[0,1,2],
  why:"A proibição do art. 37, XVII, alcança empregos e funções e abrange autarquias, fundações, EP, SEM, suas subsidiárias e sociedades controladas."},

S15:{t:"sort", instr:"É profissional da área de saúde para fins de acumulação (Resolução 287/98 do CNS)?",
  buckets:["Sim","Não consta da lista"],
  items:[["Assistente social",0],["Enfermeiro",0],["Profissional de educação física",0],
         ["Médico veterinário",0],["Terapeuta ocupacional",0],
         ["Engenheiro civil",1],["Contador",1]],
  why:"Por isso Maria, assistente social, pode acumular com o emprego de enfermeira. E o STF (RE 1.094.802) afastou o limite de 60 horas semanais."},

S16:{t:"gap", instr:"Complete as exceções da acumulação na aposentadoria",
  before:"Na aposentadoria, a acumulação é proibida, ressalvados os cargos acumuláveis, os cargos ",
  after:" e os cargos em comissão.",
  options:["eletivos","técnicos","de professor"], answer:0,
  why:"Por isso João, aposentado compulsoriamente aos 75 anos, pode assumir cargo em comissão, mas o aposentado do MP não pode somar proventos com o cargo efetivo de Oficial."},

S17:{t:"match", instr:"Ligue cada mandato eletivo ao seu efeito (art. 38 da CF)",
  pairs:[["Mandato federal, estadual ou distrital","Afastado do cargo; recebe a remuneração do cargo eletivo"],
         ["Mandato de Prefeito","Afastado do cargo, sendo-lhe facultado optar pela sua remuneração"],
         ["Mandato de Vereador, com compatibilidade de horários","Acumula as vantagens do cargo e a remuneração do mandato"]],
  why:"Sem compatibilidade de horários, o Vereador cai na regra do Prefeito. O tempo conta para todos os efeitos, exceto promoção por merecimento."},

S18:{t:"multi", instr:"Marque as hipóteses em que o servidor ESTÁVEL perde o cargo",
  options:["Sentença judicial transitada em julgado",
           "Processo administrativo em que lhe seja assegurada ampla defesa",
           "Avaliação periódica de desempenho, na forma de lei complementar, com ampla defesa",
           "Necessidade de adequar os gastos de pessoal aos limites da LRF",
           "Mudança do chefe do Poder Executivo",
           "Reprovação em concurso de remoção"],
  answers:[0,1,2,3],
  why:"Quadro do art. 41 da CF, com o art. 169, §3º e §4º. A estabilidade só alcança os estatutários efetivos, não os empregados públicos."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q1TR05","Q1TR05"],
  ["Caderno FCC — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q1vPDv","Q1vPDv"],
  ["Caderno FGV — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q1vPE1","Q1vPE1"],
  ["Caderno VUNESP — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q1vPEE","Q1vPEE"],
  ["Caderno AOCP — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q232l7","Q232l7"],
  ["Caderno IBFC — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q27R3P","Q27R3P"],
  ["Caderno FUNDATEC — Direito Administrativo 04","https://www.tecconcursos.com.br/s/Q27XQC","Q27XQC"]
];
var TECNOTA = "Três fronteiras respondem pela maioria dos erros deste assunto. A primeira é quem pode ocupar o quê: cargo em comissão aceita qualquer pessoa, com percentual mínimo de concursados previsto em lei, enquanto a função de confiança é somente de servidor efetivo — e ambos servem apenas a direção, chefia e assessoramento. A segunda é a tabela do teto do art. 37, XI: juiz estadual tem por teto o subsídio dos Ministros do STF, mas servidor do Judiciário, defensor, procurador e membro do MP têm o subsídio do Desembargador do TJ, limitado a 90,25%, e a faculdade do §12 é só dos Estados e do DF, nunca dos Municípios. A terceira é a greve: descontar os dias parados é obrigatório e o acordo de compensação é facultativo, salvo se a paralisação decorreu de conduta ilícita do próprio poder público (RE 693.456/RJ); a competência é da justiça comum, menos para os celetistas das empresas estatais. Some a isso os dois números que a banca inverte: até 20% das vagas para PcD com mínimo de 5%, e a verificação das restrições no ato da posse, exceto o triênio jurídico e o limite máximo de idade nas polícias, que se apuram na inscrição.";

var UNITS = [
  {n:1, title:"Espécies de agentes, cargo e emprego, concurso", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"As cinco espécies, agente de fato e concurso público", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · espécies de agentes públicos", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · agente de fato e usurpação",   xp:25, data:["S3","S4","T7","T8","T9","T10","T11","T12"]},
    {id:"K4", type:"drill",  title:"Praticar · comissão, confiança e certame", xp:25, data:["S5","S6","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · agentes, cargos e concurso",  xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}
  ]},
  {n:2, title:"Greve, temporários e remuneração", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Greve, contratação temporária e teto remuneratório", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · direito de greve",             xp:25, data:["S7","S8","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · competência e temporários",    xp:25, data:["S9","S10","T23","T24","T25","T26"]},
    {id:"K9", type:"drill",  title:"Praticar · remuneração e teto",           xp:25, data:["S11","S12","T27","T28","T29","T30","T31","T32"]},
    {id:"K10",type:"flash",  title:"Flashcards · greve, temporários e teto",   xp:15, data:[22,23,24,25,26,27,28,29,30,31,32]}
  ]},
  {n:3, title:"Acumulação, mandato eletivo e estabilidade", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Acumulação, art. 38, estabilidade e jurisprudência", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · o §12 e a acumulação na ativa", xp:25, data:["S13","S14","T33","T34","T35","T36"]},
    {id:"K13",type:"drill",  title:"Praticar · saúde e aposentadoria",        xp:25, data:["S15","S16","T37","T38","T39","T40"]},
    {id:"K14",type:"drill",  title:"Praticar · mandato eletivo e estabilidade",xp:25, data:["S17","S18","T41","T42","T43","T44","T45","T46","T47"]},
    {id:"K15",type:"flash",  title:"Flashcards · acumulação e estabilidade",   xp:15, data:[33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 04 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo. É o conceito com que o resumo abre o assunto: <b>Hely Lopes Meirelles afirma que agentes públicos são todas as pessoas físicas incumbidas, definitiva ou transitoriamente, do exercício de alguma função estatal atribuída a órgão ou a entidade da Administração Pública</b>.</p><p>Guarde os três eixos que a banca desmonta: <b>pessoa física</b> (nunca jurídica), <b>definitiva ou transitoriamente</b> (o mesário de um dia também é agente público) e <b>função estatal</b>. O resumo lembra que a expressão é usada em <b>sentido amplo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Introdução — conceito de agente público</i></p>",
1:"<p>Certo, na letra do resumo. Os agentes políticos <b>elaboram políticas públicas e dirigem a Administração</b> e <b>atuam com liberdade funcional</b>.</p><p>Essa <b>liberdade funcional</b> é a marca que separa o agente político do agente administrativo: o administrativo apenas <b>exerce atividades administrativas</b>, sem a margem de decisão política.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes Políticos</i></p>",
2:"<p>Errado na categoria. O resumo lista expressamente <b>Membros do MP e do TCU</b> entre os <b>AGENTES POLÍTICOS</b>, ao lado dos <b>Chefes do Executivo, Ministros e Secretários, Membros do Legislativo</b> e <b>Juízes</b>.</p><p>Os <b>agentes administrativos</b> são outros: <b>servidores públicos, empregados públicos e agentes temporários</b>. Decore a lista de exemplos de cada categoria — é assim que a banca cobra.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes Políticos / Agentes Administrativos</i></p>",
3:"<p>Certo, com os dois exemplos do resumo. Os agentes honoríficos <b>prestam serviços relevantes ao Estado</b> e, <b>em regra, não recebem remuneração</b>. Exemplos: <b>mesários</b> e <b>júri</b>.</p><p>Repare no encaixe com outro ponto do material: o <b>mesário exerce uma função pública, mas não tem cargo</b>. Honorífico e função sem cargo andam juntos.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes Honoríficos</i></p>",
4:"<p>Errado — trocou a espécie. <b>Tabeliães</b> e <b>leiloeiros</b> são <b>AGENTES DELEGADOS</b>, junto com as <b>concessionárias de serviços públicos</b>: são <b>particulares que atuam em colaboração com o Poder Público</b>, podendo ser <b>pessoas jurídicas ou físicas</b>.</p><p>Os <b>agentes credenciados</b> são os que <b>representam a Administração em atividade específica</b> — o exemplo do resumo é o das <b>pessoas de renome</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes Delegados / Agentes Credenciados</i></p>",
5:"<p>Errado. A <b>Observação 01</b> do resumo diz o contrário: os contratos firmados com agentes temporários <b>não se submetem aos termos da Consolidação das Leis do Trabalho (CLT)</b>.</p><p>Mas cuidado com a segunda metade da frase, que é onde a banca constrói a assertiva certa: isso <b>não impede a aplicação dos direitos sociais previstos no art. 7º da Constituição Federal</b>, <b>especialmente quando há sucessivas prorrogações</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes Administrativos — Observações</i></p>",
6:"<p>Errado, e é uma inversão de duas linhas. A <b>Observação 03</b> do resumo é um par: <b>vínculo contratual = celetista</b> e <b>vínculo jurídico-administrativo = estatutário</b>.</p><p>Complete com a <b>Observação 02</b>: os agentes públicos que possuem <b>vínculo contratual com as entidades de direito público</b> são denominados <b>servidores celetistas</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes Administrativos — Observações</i></p>",
7:"<p>Certo, com os dois nomes do resumo. Os agentes de fato são <b>pessoas investidas na função pública de forma emergencial (necessários) ou irregular (putativos)</b>.</p><p>E a consequência vem na linha seguinte: <b>seus atos devem ser convalidados</b>, pela <b>teoria da aparência</b>. Não são atos nulos varridos do mundo jurídico — o terceiro de boa-fé é protegido.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes de Fato</i></p>",
8:"<p>Errado. Esse é justamente o exemplo que o resumo dá de <b>USURPAÇÃO DE FUNÇÃO</b>: <b>particular adquire uma farda de policial e passa a fazer patrulhas nas ruas, apreender mercadorias e aplicar multas de trânsito</b>.</p><p>A <b>Observação 01</b> avisa: <b>agente de fato não se confunde com usurpação de função</b>. A usurpação ocorre quando alguém <b>se apodera das atribuições sem ter sido investido</b> no cargo, emprego ou função, e é <b>capitulada no Código Penal como crime de particular contra a Administração</b>. O agente de fato <b>foi investido</b> — só que de forma emergencial ou irregular.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes de Fato — Observações</i></p>",
9:"<p>Certo pelo <b>STF, RMS 25.104/DF</b>, item 01 do compilado de jurisprudência: <b>embora a investidura seja irregular, os agentes de fato trabalharam em suas funções, e, por isso, não há que falar em devolução dos recursos que receberam como retribuição pecuniária</b>.</p><p>A lógica é a mesma da convalidação: houve <b>trabalho prestado</b>, e a irregularidade da investidura não apaga isso.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RMS 25.104/DF</i></p>",
10:"<p>Certo. É a <b>QUESTÃO-DEFINIÇÃO</b> que o resumo reproduz (CESPE – TCM BA 2018), com gabarito <b>CERTO</b>: <b>função é o conjunto de atribuições exercidas pelo servidor, sem que lhe corresponda um cargo ou emprego público</b>.</p><p>O comentário do material dá os dois exemplos que fixam a ideia: <b>o mesário exerce uma função pública, mas não tem cargo</b>; <b>o membro do júri exerce uma função pública, mas não tem cargo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Questão-definição — função pública</i></p>",
11:"<p>Errado em três palavras ao mesmo tempo. Pelo quadro do resumo, os <b>empregos públicos</b> são <b>ocupados por empregados públicos</b>, sob <b>regime jurídico celetista</b>, em <b>órgãos e entidades de direito privado (EP, SEM e fundações de direito privado)</b>.</p><p>O que a assertiva descreveu foi o <b>cargo público</b>: <b>servidores públicos</b>, <b>regime estatutário (RJU)</b>, <b>entidades de direito público</b> — adm. direta, autarquias e fundações públicas. O único ponto em que os dois coincidem é a exigência de <b>concurso</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Cargos Públicos × Empregos Públicos</i></p>",
12:"<p>Certo. É a <b>Observação 03</b> do resumo: <b>cargo público vago no âmbito federal pode ser extinto por decreto do presidente da República</b>, com base no <b>art. 84, VI, “b”, da CF</b>.</p><p>Guarde a palavra que sustenta a assertiva: o cargo tem de estar <b>VAGO</b>. Se estiver ocupado, a extinção por decreto não serve.</p><p class='fb-fonte'>Resumo 04 · <i>Agentes de Fato — Observações</i></p>",
13:"<p>Errado — a assertiva descreveu o <b>cargo em comissão</b> e colou o rótulo de <b>função de confiança</b>. O quadro do resumo sobre <b>DIREÇÃO, CHEFIA E ASSESSORAMENTO</b> é curto: <b>cargo em comissão → qualquer pessoa, com percentual mínimo de concursados previsto em lei</b>; <b>funções de confiança → somente servidores efetivos</b>.</p><p>São as duas questões-exemplo da FGV que o material traz: <b>Joana</b>, diretora de RH em função de confiança, é <b>necessariamente ocupante de cargo efetivo</b>; e a nomeação de <b>Antônio</b>, que nunca passou em concurso, para função de confiança está <b>incorreta</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Direção, Chefia e Assessoramento</i></p>",
14:"<p>Certo. O ponto <b>04</b> do quadro de concurso público lista três exceções, e a assertiva reproduz as três: <b>cargos em comissão; contratações temporárias; agentes comunitários de saúde</b>.</p><p>O <b>agente comunitário de saúde</b> é o item que costuma passar batido — memorize-o junto com os outros dois, porque a banca gosta de listar apenas dois e perguntar se a lista está completa.</p><p class='fb-fonte'>Resumo 04 · <i>Concurso Público</i></p>",
15:"<p>Errado no momento. O ponto <b>07</b> do resumo diz que <b>a verificação das restrições ocorre, em regra, no ato da POSSE</b>.</p><p>As <b>exceções</b> — e só elas ocorrem na <b>inscrição</b> — são duas: os <b>3 anos de atividade jurídica para juiz e MP</b> e o <b>limite máximo de idade nas polícias</b>. Lembre também do ponto 06: as restrições (idade, altura, sexo) <b>só por lei</b>, e desde que observem <b>proporcionalidade com as atribuições do cargo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Concurso Público</i></p>",
16:"<p>Certo. É a <b>QUESTÃO-EXEMPLO</b> que o resumo transcreve (CESPE – DPE PE 2018), com gabarito <b>CERTO</b>, e o ponto <b>10</b> do quadro afirma o mesmo: <b>a cláusula de barreira é permitida</b>.</p><p>A nota de rodapé do material define: é o dispositivo do edital estabelecendo que <b>apenas os concorrentes mais bem classificados (dentro das vagas + cadastro de reserva) serão selecionados</b>, <b>limitando o número de candidatos para as fases subsequentes do certame</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Concurso Público — cláusula de barreira</i></p>",
17:"<p>Errado em uma palavra: <b>automaticamente</b>. O <b>STF, RE 837.311</b> diz que o <b>surgimento de novas vagas ou a abertura de novo concurso</b> para o mesmo cargo, durante a validade do certame anterior, <b>não gera automaticamente</b> o direito à nomeação dos aprovados <b>fora das vagas previstas no edital</b>.</p><p>A ressalva é a chave: há direito na <b>preterição arbitrária e imotivada</b>, por comportamento <b>tácito ou expresso</b> capaz de revelar a <b>inequívoca necessidade de nomeação</b> durante a validade, <b>demonstrada de forma cabal pelo candidato</b>. Foi o caso de <b>Maria</b>, 5ª colocada para 4 vagas, quando o Estado nomeou <b>três comissionados</b> para as mesmas funções. O resumo ainda avisa: se a nomeação em comissão ocorresse <b>após</b> o prazo de validade, Maria <b>não</b> teria direito subjetivo.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RE 837.311</i></p>",
18:"<p>Certo. O resumo abre o tópico exatamente assim: o direito de greve <b>está previsto no art. 37, VII, da CF</b> e <b>é uma norma de eficácia limitada, ou seja, requer a edição de uma lei para que produza efeitos</b>.</p><p>E completa: <b>a lei requerida pela Constituição até hoje não foi editada</b>. Guarde o rótulo — <b>eficácia limitada</b>, e não contida nem plena.</p><p class='fb-fonte'>Resumo 04 · <i>Direito de Greve</i></p>",
19:"<p>Errado em duas palavras: <b>integral</b> e <b>definitiva</b>. O STF, em sede de <b>mandado de injunção</b>, determinou a aplicação <b>TEMPORÁRIA</b>, ao setor público, <b>NO QUE COUBER</b>, da <b>lei de greve vigente no setor privado (Lei 7.783/1989)</b>.</p><p>E há um prazo implícito: vale <b>até que o Congresso Nacional edite a mencionada norma regulamentadora</b>. Duas travas, portanto — temporária e no que couber.</p><p class='fb-fonte'>Resumo 04 · <i>Direito de Greve</i></p>",
20:"<p>Certo. É a questão-jurisprudência do resumo (CESPE – CAGE RS 2018), com gabarito <b>CERTO</b>: a vedação alcança <b>os policiais civis e todos os servidores públicos que atuem diretamente na área de segurança pública</b>.</p><p>A razão está na outra questão do material (FGV – PC RJ 2022): a greve da Polícia Civil é <b>ilícita</b>, pois há <b>prevalência do interesse público e social na manutenção da segurança interna, da ordem pública e da paz social sobre o interesse individual da categoria</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Direito de Greve — jurisprudência</i></p>",
21:"<p>Errado — a assertiva inverteu o obrigatório e o facultativo. A <b>Observação 01</b> do resumo marca os verbos: a Administração <b>DEVERÁ [é obrigatório] descontar os dias parados</b> e <b>PODERÁ [facultativo] celebrar um acordo para a compensação</b>.</p><p>Fixe pelo verbo: <b>descontar é dever</b>; <b>compensar é faculdade</b>. E some o dado do STJ que o material traz: a deflagração do movimento <b>suspende o vínculo funcional</b> e <b>desobriga</b> o poder público do pagamento dos dias não trabalhados.</p><p class='fb-fonte'>Resumo 04 · <i>Direito de Greve — Observações</i></p>",
22:"<p>Certo pelo <b>STF, RE 693.456/RJ</b>, que o resumo traz duas vezes — na Observação 02 do tópico de greve e no item 08 do compilado: <b>o desconto na folha de pagamento dos servidores será incabível se ficar demonstrado que a greve foi provocada por conduta ilícita do próprio poder público, a exemplo do atraso nos pagamentos</b>.</p><p>É a exceção ao dever de descontar: se o poder público criou a greve com a própria ilicitude, não pode cobrar a conta do servidor.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RE 693.456/RJ</i></p>",
23:"<p>Errado por metade. A <b>Observação 03</b> do resumo é categórica: <b>ao militar são proibidas a sindicalização e a greve</b> (<b>art. 142, §3º, IV, da CF</b>).</p><p>São <b>duas</b> proibições, não uma. A banca costuma manter a greve vedada e liberar a sindicalização, contando que o candidato leia rápido.</p><p class='fb-fonte'>Resumo 04 · <i>Direito de Greve — Observações</i></p>",
24:"<p>Errado na justiça competente. Pelo <b>STF, RE 846.854/SP</b>, <b>a justiça comum federal ou estadual é competente para julgar a abusividade de greve de servidores públicos celetistas da Administração pública direta, autarquias e fundações públicas</b>.</p><p>O comentário do resumo fecha a fronteira: <b>a justiça do trabalho julga somente os conflitos envolvendo os celetistas das EMPRESAS ESTATAIS</b>. Adm. direta, autarquia e fundação pública → justiça comum; empresa estatal → justiça do trabalho.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RE 846.854/SP</i></p>",
25:"<p>Certo. É a questão-jurisprudência que o resumo transcreve (CESPE – TCE PA 2019), com gabarito <b>CERTO</b>: o <b>Governador pode editar decreto prevendo hipótese de contratação temporária excepcional, limitada ao período de duração da greve dos servidores, para garantir a continuidade de serviços públicos essenciais</b>.</p><p>Repare nos dois limites que sustentam a validade: a contratação é <b>excepcional</b> e <b>limitada à duração da greve</b>, e a finalidade é a <b>continuidade dos serviços essenciais</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Direito de Greve — jurisprudência</i></p>",
26:"<p>Errado nos dois pontos. O item <b>03</b> do quadro de contratações temporárias diz que os agentes temporários <b>exercem função pública, mas não ocupam cargo, nem emprego público</b> — eles <b>firmam contrato de direito público com a Administração</b>.</p><p>É a mesma lógica da Observação 01 do resumo, que afasta a <b>CLT</b> desses contratos. Some os quatro requisitos: caso excepcional <b>previsto em lei</b>, prazo <b>predeterminado</b>, necessidade <b>temporária</b> e interesse público <b>excepcional</b>, com <b>processo seletivo simplificado</b> no lugar do concurso.</p><p class='fb-fonte'>Resumo 04 · <i>Contratações Temporárias</i></p>",
27:"<p>Certo, com a lista completa do resumo. O <b>subsídio</b> é pago em <b>parcela única</b> e aplica-se aos <b>agentes políticos, AGU, PGFN, defensores públicos, policiais e bombeiros</b>.</p><p>Guarde a palavra que falta na assertiva e que a banca acrescenta para derrubá-la: para os <b>servidores organizados em carreira</b> o subsídio é <b>FACULTATIVO</b>. E complete o trio: <b>vencimentos</b> (vencimento básico + vantagens) para os <b>servidores</b>; <b>salário</b> para os <b>empregados</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Sistema Remuneratório dos Agentes Públicos</i></p>",
28:"<p>Errado, e a justificativa da assertiva é exatamente o inverso da do STF. Segundo a <b>Observação 02</b> do resumo, os <b>substitutos interinos (provisórios) das serventias extrajudiciais</b> — notário ou oficial de registro dos cartórios — <b>deverão submeter-se ao teto remuneratório constitucional</b>.</p><p>E o motivo é o que a questão distorceu: <b>o interino não atua como delegado do serviço notarial e de registro, mas como preposto do poder público</b>. É por não ser delegado que ele cai no teto.</p><p class='fb-fonte'>Resumo 04 · <i>Sistema Remuneratório — Observações</i></p>",
29:"<p>Certo. O resumo é literal: <b>Empresa Pública (EP) e Sociedade de Economia Mista (SEM), bem como suas subsidiárias, submetem-se ao teto apenas se receberem recursos da fazenda pública para pagamento de despesas de pessoal ou de custeio em geral</b>.</p><p>A questão-exemplo (FGV – TCE PI 2021) mostra o corte: o teto alcança <b>W</b>, que recebia dotações para <b>custeio em geral</b>, e <b>Y</b>, que recebia para <b>pessoal</b>, mas <b>não Z</b>, subsidiária integral que recebia dotações <b>para fins de investimentos</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Teto Remuneratório</i></p>",
30:"<p>Certo pela linha mais cobrada da tabela do resumo. No âmbito estadual, para <b>servidores do Judiciário, defensores, procuradores e membros do MP</b>, o teto é o <b>subsídio do Desembargador do TJ</b>, <b>limitado, no entanto, a 90,25% do subsídio do STF</b>.</p><p>Fixe o número <b>90,25%</b>: ele aparece duas vezes no material — nessa linha da tabela e na faculdade do <b>§12</b>. Não confunda com a linha de cima, dos <b>membros do Judiciário (juízes)</b>, cujo teto é o <b>subsídio dos Ministros do STF</b>, sem redutor.</p><p class='fb-fonte'>Resumo 04 · <i>Teto Remuneratório</i></p>",
31:"<p>Errado — trocou de linha na tabela. O <b>subsídio do Governador</b> é o teto do <b>Poder Executivo estadual</b>. Para os <b>membros do Judiciário (juízes)</b>, o teto é o <b>subsídio dos Ministros do STF</b>.</p><p>A tabela estadual do resumo tem quatro linhas, e vale decorá-las juntas: <b>Executivo → Governador</b> · <b>Legislativo → Deputados Estaduais</b> · <b>juízes → Ministros do STF</b> · <b>servidores do Judiciário, defensores, procuradores e MP → Desembargador do TJ, até 90,25%</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Teto Remuneratório</i></p>",
32:"<p>Errado por um ente. O quadro <b>ATENÇÃO!</b> do resumo transcreve o <b>§12</b> com a ressalva entre colchetes: <b>fica facultado aos Estados e ao DF [municípios não] fixar, em seu âmbito, mediante emenda às respectivas Constituições e Lei Orgânica, como limite único, o subsídio mensal dos Desembargadores do respectivo Tribunal de Justiça, limitado a 90,25% do subsídio mensal dos Ministros do STF</b>.</p><p>Duas travas na assertiva, portanto: <b>municípios não</b>, e a via é <b>emenda</b>, não lei ordinária.</p><p class='fb-fonte'>Resumo 04 · <i>Teto Remuneratório — Atenção!</i></p>",
33:"<p>Certo, com as três hipóteses do resumo e a condição que as acompanha. A acumulação <b>em regra é proibida</b>, exceto, <b>se houver compatibilidade de horários</b>: <b>dois cargos de professor</b>; <b>um cargo de professor com outro técnico ou científico</b>; ou <b>dois cargos ou empregos na área de saúde</b>.</p><p>Note que <b>não existe</b> a hipótese de dois cargos técnicos ou científicos — é a extensão indevida preferida das bancas. E a <b>compatibilidade de horários</b> é requisito das três, nunca de apenas uma.</p><p class='fb-fonte'>Resumo 04 · <i>Acumulação de Cargos Remunerados na Ativa</i></p>",
34:"<p>Errado justamente no ponto que o quadro <b>ATENÇÃO!</b> do resumo destaca. Pelo <b>art. 37, XVII</b>, a proibição de acumular <b>estende-se a empregos e funções e abrange autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias, e sociedades controladas, direta ou indiretamente, pelo poder público</b>.</p><p>Ou seja: as <b>subsidiárias</b> estão dentro, e as <b>sociedades controladas</b> também — inclusive quando o controle é <b>indireto</b>. Não há brecha por interposta entidade.</p><p class='fb-fonte'>Resumo 04 · <i>Acumulação na Ativa — Atenção!</i></p>",
35:"<p>Certo. É a questão-exemplo do resumo (CESPE – CAGE RS 2018): <b>Maria pode acumular as duas funções, pois a situação está abarcada nas hipóteses excepcionais de acumulação remunerada de cargos e empregos públicos</b>.</p><p>O comentário do material explica o encaixe: <b>o cargo de assistente social também é considerado da área de saúde, motivo pelo qual, havendo compatibilidade de horários, poderá ser acumulado com o cargo de enfermeira</b>. O fato de um ser <b>cargo estadual</b> e o outro <b>emprego em SEM federal</b> não atrapalha — a hipótese fala em <b>cargos ou empregos</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Acumulação na Ativa — questão-exemplo</i></p>",
36:"<p>Errado. O <b>STF, RE 1.094.802</b>, item 15 do compilado, afasta esse limite: <b>a acumulação de cargos públicos de profissionais da área de saúde, prevista no art. 37, XVI, da CF/88, não se sujeita ao limite de 60 horas semanais previsto em norma infraconstitucional, pois inexiste tal requisito na Constituição Federal</b>.</p><p>O argumento é de hierarquia: o limite está em <b>norma infraconstitucional</b>, e a Constituição só exige <b>compatibilidade de horários</b>. Nenhuma carga horária fechada.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RE 1.094.802</i></p>",
37:"<p>Certo, com as três exceções do resumo. Na <b>aposentadoria</b> a acumulação <b>em regra é proibida</b>, exceto: <b>cargos acumuláveis</b>; <b>cargos eletivos</b>; ou <b>cargos em comissão</b>.</p><p>Compare as duas listas para não misturá-las: na <b>ativa</b>, as exceções são <b>professor + professor</b>, <b>professor + técnico ou científico</b> e <b>duas da saúde</b>; na <b>aposentadoria</b>, são <b>acumuláveis</b>, <b>eletivos</b> e <b>em comissão</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Acumulação de Cargos Remunerados na Aposentadoria</i></p>",
38:"<p>Errado — é o <b>Exemplo 01</b> do resumo, e o gabarito dele é o oposto. João, aposentado há dois anos no cargo de <b>Analista do MP do Estado do RJ</b>, aprovado em 2019 para o cargo efetivo de <b>Oficial do MP</b> na mesma instituição, <b>não poderá receber a percepção simultânea remuneratória pretendida</b>.</p><p>A frase do material termina com a chave: <b>ressalvados os cargos acumuláveis na forma da Constituição, os cargos eletivos e os cargos em comissão</b>. O cargo de Oficial do MP é <b>efetivo</b> e <b>não é acumulável</b> com o de Analista — logo, não entra em nenhuma das três exceções.</p><p class='fb-fonte'>Resumo 04 · <i>Acumulação na Aposentadoria — Exemplo 01</i></p>",
39:"<p>Certo — é o <b>Exemplo 02</b> do resumo. João, servidor estadual efetivo, <b>completou 75 anos e foi aposentado compulsoriamente</b>; no dia seguinte à publicação, foi convidado pelo Secretário Estadual para <b>cargo em comissão</b>, com <b>exatamente as mesmas funções de assessoramento</b> que exercia. Conclusão do material: <b>João pode ser nomeado para o cargo em comissão que lhe foi oferecido</b>.</p><p>O detalhe das <b>mesmas funções</b> é armadilha de aparência: ele não muda a resposta, porque <b>cargo em comissão</b> é uma das três exceções expressas.</p><p class='fb-fonte'>Resumo 04 · <i>Acumulação na Aposentadoria — Exemplo 02</i></p>",
40:"<p>Certo pela letra do <b>art. 38, II</b>, transcrito no resumo: <b>investido no mandato de Prefeito, será afastado do cargo, sendo-lhe facultado optar pela sua remuneração</b>.</p><p>O quadro do material resume: <b>PREFEITO → será afastado do cargo, mas pode optar pela remuneração</b>. Diferente do mandato <b>federal ou estadual</b>, em que ele é afastado e <b>recebe a remuneração do cargo eletivo</b>, sem opção.</p><p class='fb-fonte'>Resumo 04 · <i>Mandato Eletivo</i></p>",
41:"<p>Errado — faltou a condição. O <b>art. 38, III</b>, transcrito no resumo, só autoriza a acumulação <b>havendo compatibilidade de horários</b>: aí o Vereador <b>perceberá as vantagens de seu cargo, emprego ou função, sem prejuízo da remuneração do cargo eletivo</b>.</p><p>E o próprio inciso diz o que acontece sem ela: <b>não havendo compatibilidade, será aplicada a norma do inciso anterior</b> — ou seja, <b>será afastado do cargo, sendo-lhe facultado optar pela sua remuneração</b>, como o Prefeito.</p><p class='fb-fonte'>Resumo 04 · <i>Mandato Eletivo</i></p>",
42:"<p>Errado no alcance. O resumo é expresso ao listar os requisitos do <b>art. 41</b>: a estabilidade é <b>aplicável somente aos servidores estatutários efetivos</b> e <b>não se aplica aos empregados públicos</b>.</p><p>Os requisitos em si estão corretos na assertiva — <b>investidura em cargo efetivo mediante prévia aprovação em concurso público</b>, <b>três anos de efetivo exercício no cargo</b> e <b>aprovação em avaliação especial de desempenho</b>. O erro está na extensão aos celetistas.</p><p class='fb-fonte'>Resumo 04 · <i>Requisitos para a Estabilidade</i></p>",
43:"<p>Certo. É a quarta linha do quadro do resumo sobre as hipóteses em que <b>o servidor estável só perderá o cargo</b>: <b>se for necessário adequar os gastos de pessoal aos limites da LRF (art. 169, §3º e §4º, da CF)</b>.</p><p>As outras três: <b>sentença judicial transitada em julgado</b>; <b>processo administrativo em que lhe seja assegurada ampla defesa</b>; e <b>procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa</b>. São quatro — a banca costuma esconder justamente a da LRF.</p><p class='fb-fonte'>Resumo 04 · <i>Requisitos para a Estabilidade</i></p>",
44:"<p>Certo pelo <b>STF, RE 1.170.558/AM</b>, que o resumo traz no quadro <b>ATENÇÃO!</b> da estabilidade e no item 16 do compilado: <b>a servidora pública gestante ocupante de cargo em comissão tem direito à estabilidade provisória desde a confirmação do estado gestacional até cinco meses após o parto</b>.</p><p>O material ainda reproduz a questão do CESPE – TCE PA 2019 com o mesmo teor, gabarito <b>CERTO</b>. Guarde os dois marcos: início na <b>confirmação do estado gestacional</b>, fim <b>cinco meses após o parto</b> — e o fato de valer para <b>cargo em comissão</b>, que é de livre exoneração.</p><p class='fb-fonte'>Resumo 04 · <i>Estabilidade — Atenção! / Jurisprudência</i></p>",
45:"<p>Errado. Pelo <b>STF, ADI 1.923-DF</b>, item 02 do compilado: <b>a seleção de pessoal pelas OS (Organizações Sociais) não é regida pelo princípio do concurso público (inc. II do art. 37 da CF)</b>.</p><p>Mas não confunda isso com liberdade total — e é aqui que a banca inverte para o outro lado: <b>a seleção deve ser conduzida de forma pública, objetiva e impessoal</b>, e o comentário do resumo grifa que <b>é obrigatória a promoção de processo seletivo pelas OS</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, ADI 1.923-DF</i></p>",
46:"<p>Errado — inverteu a base de cálculo. Pelo <b>STF, RE 612.975/MT</b>: <b>o teto remuneratório, em caso de acumulação de cargos, é considerado em relação à remuneração isoladamente considerada, e não ao somatório do que foi recebido</b>.</p><p>Contraste com o item seguinte do compilado, que é onde o <b>somatório</b> aparece de verdade: no <b>RE 602.584/DF</b>, com <b>pensão</b> cujo instituidor morreu <b>após a EC 19/1998</b>. Acumulação de cargos → isoladamente; remuneração ou provento <b>mais pensão</b> → somatório.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RE 612.975/MT</i></p>",
47:"<p>Certo pelo <b>STF, RE 602.584/DF</b>: <b>ocorrida a morte do instituidor da pensão em momento posterior ao da Emenda Constitucional 19/1998, o teto constitucional previsto no inciso XI do art. 37 da Constituição Federal incide sobre o somatório de remuneração ou provento e pensão percebida por servidor</b>.</p><p>Repare no marco temporal, que é o que sustenta a assertiva: a <b>morte do instituidor</b> tem de ser <b>posterior à EC 19/1998</b>. E guarde o par com o <b>RE 612.975/MT</b>, em que a <b>acumulação de cargos</b> é aferida <b>isoladamente</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Jurisprudência — STF, RE 602.584/DF</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"Agentes públicos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
