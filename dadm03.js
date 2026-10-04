/* Direito Administrativo — Módulo 03: Atos administrativos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm03 = (function(){
"use strict";

var CARDS = [
  ["O que são os atos da Administração e quais espécies abrangem?","São <b>todos os atos praticados pela Administração Pública</b>. Abrangem os <b>atos políticos (de governo)</b>, os <b>atos privados</b> (ex.: locação, abertura de conta corrente), os <b>atos materiais / fatos administrativos</b> (ex.: demolição de prédio, limpeza de ruas) e os <b>atos administrativos</b> (ex.: nomeação de aprovados num concurso público)."],
  ["O que são atos materiais (fatos administrativos)?","É a <b>atividade material</b> no exercício da atividade administrativa, que <b>produz consequências jurídicas</b>. São produzidos <b>independentemente de manifestação de vontade</b>. Ex.: queda de uma ponte, colisão acidental entre veículo oficial e particular, queda de raio sobre repartição, enchente que danifica bens públicos, morte de servidor e o <b>silêncio administrativo</b>."],
  ["Os fatos da Administração produzem efeitos jurídicos?","<b>Não.</b> Exemplos do resumo: <b>servidor que se machuca sem gravidade</b> e <b>mudança de localização de um departamento</b> dentro de um órgão."],
  ["Conceito de ato administrativo","É a <b>declaração unilateral do Estado ou de quem o represente</b> que produz <b>efeitos jurídicos imediatos</b>. Ex.: nomeação de aprovados em concurso público, concessão de licença, aplicação de multa."],
  ["O silêncio (omissão) da Administração é ato administrativo?","<b>Não pode ser considerado ato administrativo</b>, ainda que possa gerar efeitos jurídicos — como na <b>decadência</b> e na <b>prescrição</b>. Ele figura entre os <b>fatos administrativos</b>."],
  ["Ato administrativo × ato jurídico","O ato administrativo é <b>espécie do gênero ato jurídico</b>, mas: 1) no administrativo a vontade <b>emana do Estado</b>, no jurídico em geral emana <b>entre particulares</b>; 2) o regime é de <b>direito público</b>, e não de <b>direito privado</b>. Exemplos de ato jurídico: notificação para constituir mora, reconhecimento de filho, ocupação, perdão, confissão, tradição."],
  ["Particulares podem praticar atos administrativos?","<b>Sim</b>, desde que <b>investidos de prerrogativas estatais</b> — agentes <b>honoríficos</b>, <b>delegados</b> e <b>credenciados</b>. Ex.: concessionária de transporte (agente delegado) que determina a <b>expulsão de passageiro</b> que não se comporta adequadamente."],
  ["Mnemônico dos elementos do ato administrativo","<b>COM-FI-FOR-M-OB</b> → <b>COM</b>petência · <b>FI</b>nalidade · <b>FOR</b>ma · <b>M</b>otivo · <b>OB</b>jeto. São as <b>partes que compõem</b> o ato, sua infraestrutura; também chamados de <b>requisitos</b> ou <b>pressupostos</b>."],
  ["Competência — conceito e características","É o <b>conjunto de atribuições</b> de um agente, órgão ou entidade pública. É elemento de exercício <b>obrigatório</b>, <b>irrenunciável</b>, <b>imprescritível</b>, <b>intransferível</b>, <b>improrrogável</b> e <b>imodificável pela vontade do agente</b>."],
  ["As três hipóteses de incompetência e seus efeitos","<b>Excesso de poder</b> → o ato <b>pode ser convalidado</b>, exceto em competência exclusiva. <b>Usurpação de função</b> → ato <b>inexistente</b>. <b>Função de fato</b> → ato <b>válido e eficaz</b>."],
  ["Incapacidade: impedimento × suspeição","<b>Impedimento</b> → situações <b>objetivas</b> (ex.: grau de parentesco). <b>Suspeição</b> → situações <b>subjetivas</b> (ex.: grau de amizade)."],
  ["Finalidade — conceito e vício","É o <b>resultado pretendido</b> pela Administração com a prática do ato. <b>Genérica</b> = satisfação do interesse público; <b>específica</b> = própria de cada ato (= objeto). Decorre do princípio da <b>impessoalidade</b>. O <b>desvio de finalidade</b> é vício <b>insanável</b> e o ato deve ser <b>anulado</b>."],
  ["Forma — conceito e a regra do formalismo moderado","É o <b>modo de exteriorização</b> do ato e os <b>procedimentos</b> para sua formação. A regra é a <b>forma escrita</b>, mas há atos em <b>ordens verbais</b>, <b>gestos</b>, <b>apitos</b>, <b>sinais sonoros e luminosos</b> (semáforos) e <b>placas</b>. Os atos <b>não dependem de forma determinada</b>, exceto quando a lei expressamente exigir — <b>formalismo moderado</b>."],
  ["Vício de forma e a PEGADINHA da motivação","Se a forma for <b>essencial</b>, o ato deve ser <b>anulado</b>; se <b>não</b> for essencial, o vício pode ser <b>convalidado</b>. A <b>falta de motivação</b>, quando obrigatória, é <b>vício de FORMA</b> e acarreta a nulidade. <b>PEGADINHA:</b> a banca vai dizer que é vício no elemento “motivo”."],
  ["Motivo × motivação","<b>Motivo</b> é o <b>fato concreto</b> — requisito de validade <b>sempre presente</b>. <b>Motivação</b> é a <b>justificativa</b> (exposição dos motivos), em regra presente, mas <b>dispensável em alguns casos</b>; deve ser <b>prévia ou concomitante</b>. É <b>obrigatória</b> se houver norma legal expressa (ex.: atos que <b>neguem, limitem ou afetem direitos</b> — art. 50 da Lei 9.784/99)."],
  ["Teoria dos motivos determinantes","O ato só é <b>válido se sua motivação for verdadeira</b>, <b>ainda que feita sem ser obrigatória</b>. Ex.: a exoneração de ocupante de <b>cargo em comissão</b> (<b>ad nutum</b>) <b>dispensa motivação</b>; motivada, a validade fica <b>adstrita à veracidade dos motivos</b>. O Judiciário pode apreciar os <b>motivos</b> (ausência ou falsidade), mas <b>não o mérito</b> (conveniência e oportunidade)."],
  ["Objeto — conceito, vícios e o limite da convalidação","É o <b>efeito jurídico imediato</b> do ato, seu <b>conteúdo</b> (a decisão): na demissão, o objeto é a própria <b>demissão</b>; no alvará, a própria <b>autorização para edificar</b>. Objeto <b>proibido, impossível, imoral ou incerto</b> → vício <b>insanável</b>, ato anulado. <b>ATENÇÃO:</b> apenas os vícios de <b>competência</b> e <b>forma</b> são passíveis de convalidação."],

  ["Mnemônico dos atributos do ato administrativo","<b>PATI</b> → <b>P</b>resunção de legitimidade · <b>A</b>utoexecutoriedade · <b>T</b>ipicidade · <b>I</b>mperatividade. São <b>características inerentes</b> aos atos, decorrentes do <b>regime de direito público</b>, que outorgam <b>prerrogativas</b> ao Poder Público."],
  ["Presunção de legitimidade × presunção de veracidade","<b>Legitimidade:</b> presume-se que o ato foi praticado <b>conforme a lei</b>. <b>Veracidade:</b> presume-se que os <b>fatos alegados</b> pela Administração são <b>verdadeiros</b>."],
  ["Os efeitos da presunção de legitimidade","Permite que os atos <b>produzam efeitos de imediato</b>, ainda que apresentem <b>vícios aparentes</b>; o administrado <b>submete-se ao ato até que seja invalidado</b>. É presunção <b>RELATIVA</b> (admite prova em contrário), <b>inverte o ônus da prova</b> e está presente em <b>TODOS</b> os atos administrativos."],
  ["Autoexecutoriedade — conceito e desdobramentos","É a prerrogativa de <b>executar o ato imediatamente</b>, <b>sem intervenção judicial</b>. Desdobra-se em <b>exigibilidade</b> (coerção <b>indireta</b> — ex.: aplicação de multas) e <b>executoriedade</b> (coerção <b>direta</b> — ex.: demolição de obra irregular)."],
  ["Quando a autoexecutoriedade está presente e quando não está","<b>Presente</b> apenas se <b>expressamente prevista em lei</b> (ex.: apreensão de mercadorias piratas, penalidades disciplinares) ou em caso de <b>medida urgente</b> (ex.: demolição de prédio que ameaça ruir). <b>Ausente</b> quando envolve o <b>patrimônio do particular</b>: cobrança de multa não paga, desconto de indenização ao erário nos vencimentos. A <b>multa de trânsito</b> tem <b>exigibilidade</b>, mas <b>não executoriedade</b>."],
  ["Tipicidade","Cada <b>espécie</b> de ato administrativo requer a devida <b>previsão legal</b>. Impede a prática de <b>atos inominados</b> (sem previsão legal). É <b>ausente nos atos bilaterais</b>."],
  ["Imperatividade","É a <b>imposição de restrições e obrigações</b> ao administrado <b>sem necessidade de sua concordância</b>. Decorre do <b>poder extroverso</b>. Está presente <b>apenas</b> nos atos que impõem obrigações ou restrições — <b>ausente</b> nos atos <b>enunciativos</b> (certidão, parecer) e <b>negociais</b> (licença, autorização de bem público)."],
  ["Quadro das ausências dos atributos","<b>Presunção de legitimidade</b> → presente em <b>TODOS</b> os atos. <b>Autoexecutoriedade</b> → ausente em atos <b>enunciativos</b>, <b>negociais</b> e nos que envolvem <b>patrimônio do particular</b>. <b>Tipicidade</b> → ausente em atos <b>bilaterais</b>. <b>Imperatividade</b> → ausente em atos <b>enunciativos</b> e <b>negociais</b>."],
  ["Quanto ao grau de liberdade: vinculados × discricionários","<b>Vinculados:</b> a lei fixa requisitos e condições; <b>não há liberdade de ação</b> e <b>todos</b> os elementos (COMFIFORMOB) são vinculados. <b>Discricionários:</b> há liberdade <b>dentro de parâmetros legais</b>; <b>competência, finalidade e forma são sempre vinculados</b> e só <b>motivo e objeto</b> são discricionários (<b>mérito administrativo</b>). <b>Não existe ato totalmente discricionário!</b>"],
  ["Quanto à formação de vontade: simples, complexos e compostos","<b>Simples:</b> manifestação de um <b>único órgão</b>, unipessoal ou colegiado (despacho de chefe de seção, decisão de conselho). <b>Complexos:</b> <b>um único ato</b> de <b>duas ou mais manifestações autônomas</b> de <b>órgãos diversos</b> (aposentadoria de servidor estatutário, portaria interministerial). <b>Compostos:</b> <b>dois ou mais atos</b>, em que a vontade de um é <b>instrumental</b> em relação à do outro (autorização que depende de visto)."],
  ["Quanto aos requisitos de validade","<b>Válido</b> → conforme a lei, sem vício. <b>Nulo</b> → vício <b>insanável</b> (motivo inexistente, objeto não previsto em lei, desvio de finalidade). <b>Anulável</b> → vício <b>sanável</b> (competência e forma, em regra). <b>Inexistente</b> → só tem <b>aparência</b> de ato, falta elemento essencial (usurpador de função)."],
  ["Quanto à exequibilidade — e a mistura que as bancas adoram","<b>Perfeito</b> → concluiu <b>todas as etapas de formação</b>. <b>Eficaz</b> → ato perfeito <b>apto a produzir efeitos</b>. <b>Pendente</b> → ato perfeito que <b>depende de evento posterior</b> (termo, condição, aprovação). <b>Consumado</b> → já produziu <b>todos</b> os efeitos. O filtro: de acordo com a lei? <b>VÁLIDO</b>. Concluiu o ciclo? <b>PERFEITO</b>. Apto a produzir efeitos? <b>EFICAZ</b>."],

  ["Mnemônico das espécies de atos administrativos","<b>NONEP</b> → <b>N</b>ormativo · <b>O</b>rdinatório · <b>N</b>egocial · <b>E</b>nunciativo · <b>P</b>unitivo."],
  ["Atos normativos","Possuem efeitos <b>gerais</b> (sem destinatários determinados) e <b>abstratos</b> (atingem todos em idêntica situação jurídica). <b>Não podem inovar o ordenamento jurídico</b> e são atos administrativos <b>apenas em sentido formal</b>. Exemplos pelo mnemônico <b>RE-DE-IN-RE-DE-RE</b>: <b>RE</b>gulamento, <b>DE</b>liberação, <b>IN</b>strução normativa, <b>RE</b>gimento, <b>DE</b>creto, <b>RE</b>solução."],
  ["Atos ordinatórios — e o par portaria × decreto","Atos de <b>efeitos internos</b>, endereçados aos <b>servidores</b>, que disciplinam o funcionamento da Administração. Fundamento no <b>poder hierárquico</b> e <b>inferiores em hierarquia aos normativos</b>. Mnemônico <b>C-O-P-A</b>: <b>C</b>ircular, <b>O</b>rdem de serviço, <b>P</b>ortaria, <b>A</b>viso. <b>ATENÇÃO:</b> instituir comissão para propor edital de concurso → <b>PORTARIA</b>; nomear servidor para cargo de confiança → <b>DECRETO</b> (ato normativo)."],
  ["Atos negociais","A vontade da Administração <b>coincide com o interesse do administrado</b> — é a <b>anuência prévia</b> para o particular realizar atividade ou exercer direito (<b>atos de consentimento</b>). <b>Não cabe falar em imperatividade, coercitividade ou autoexecutoriedade</b> nos atos negociais."],
  ["Licença × autorização × permissão","<b>Licença</b> → ato <b>vinculado</b> e <b>definitivo</b>; permite exercer <b>direitos subjetivos</b>. <b>Autorização</b> → <b>unilateral</b>, <b>discricionária</b> e <b>precária</b>, revogável a qualquer tempo, para serviços ou uso de bens públicos no <b>interesse do particular</b> (ex.: mesa de bar em calçada). <b>Permissão</b> → <b>discricionária</b> e <b>precária</b>; como ato administrativo refere-se <b>apenas ao uso de bem público</b>. <b>Permissão de serviço público = contrato administrativo de adesão</b>, precedido de licitação."],
  ["Atos enunciativos","<b>Certificam ou atestam situação preexistente</b>, ou <b>emitem opinião</b> para preparar ato decisório. A rigor <b>não são manifestação de vontade</b> — são <b>meros atos da Administração</b>, administrativos só em sentido <b>formal</b>. Mnemônico <b>CAPA</b>: <b>C</b>ertidão, <b>A</b>testado, <b>P</b>arecer, <b>A</b>postila (averbação para corrigir ou atualizar dados)."],
  ["Atos punitivos","São os que <b>impõem sanções administrativas</b>. Podem ser de ordem <b>interna</b> (penalidades disciplinares a servidores) ou <b>externa</b> (sanções a particulares; <b>destruição de coisas apreendidas</b>)."],
  ["As formas de extinção do ato administrativo","<b>Cumprimento de seus efeitos</b> (extinção natural — gozo de férias) · <b>desaparecimento do sujeito ou do objeto</b> · <b>revogação</b> (conveniência e oportunidade) · <b>anulação</b> (ilegalidade) · <b>cassação</b> · <b>caducidade</b> · <b>contraposição</b> · <b>renúncia</b>."],
  ["Cassação × caducidade × contraposição × renúncia","<b>Cassação:</b> o <b>beneficiário descumpre condição fundamental</b> para a manutenção do ato. <b>Caducidade:</b> <b>norma jurídica posterior</b> torna inviável a permanência da situação antes permitida. <b>Contraposição:</b> ato posterior com <b>efeitos contrapostos</b> ao anterior (exoneração × nomeação). <b>Renúncia:</b> o <b>próprio beneficiário abre mão</b> da vantagem (servidor inativo que reassume cargo)."],
  ["Quais atos não podem ser revogados — e os prazos","A revogação incide sobre atos <b>legais e eficazes</b>, por conveniência e oportunidade, mas <b>não se revogam</b>: atos <b>consumados e exauridos</b> (licença funcional já gozada), os geradores de <b>direitos adquiridos</b> (<b>Súmula 473 do STF</b>), os <b>meros atos administrativos</b> (certidão, atestado, parecer), os <b>complexos</b> e os <b>vinculados</b>. Depois de <b>5 anos</b>, a Administração <b>decai do direito de anular</b> seu próprio ato perante terceiros de boa-fé (art. 54 da Lei 9.784/99); gerados direitos adquiridos, o ato torna-se <b>irrevogável</b> (art. 53 da Lei 9.784/99)."],
  ["Convalidação — o FOCO e as três formas","É a <b>discricionariedade (faculdade)</b> de corrigir <b>vícios sanáveis</b>: <b>FOCO</b> = <b>FO</b>rma (exceto essencial à validade) e <b>CO</b>mpetência (exceto exclusiva e quanto à matéria). Vícios de <b>motivo, objeto e finalidade são insanáveis</b>. Formas: <b>ratificação</b> (corrige forma ou competência), <b>reforma</b> (retira o objeto inválido e mantém o válido — anulação parcial) e <b>conversão</b> (mantém a parte válida, retira a inválida e a <b>substitui</b> por nova parte válida)."]
];

var QS = [
  ["Os atos da Administração abrangem os atos políticos, os atos privados, os atos materiais e os atos administrativos.","C","CEBRASPE","São todos os atos praticados pela Administração Pública."],
  ["O TCE alugou salas de aula de uma escola privada para curso de formação de seus servidores; nessa situação, o ato de locação, ainda que regido pelo direito privado, é considerado ato administrativo.","E","CEBRASPE","É <b>ato privado</b> — ato da administração, e não ato administrativo."],
  ["Os atos materiais, também chamados fatos administrativos, produzem consequências jurídicas e são produzidos independentemente de manifestação de vontade.","C","FCC","Conceito do resumo."],
  ["O silêncio da Administração é considerado ato administrativo, pois gera efeitos jurídicos, como a decadência e a prescrição.","E","FGV","O silêncio <b>não pode ser considerado ato administrativo</b>, ainda que gere efeitos."],
  ["Ato administrativo é a declaração unilateral do Estado ou de quem o represente que produz efeitos jurídicos imediatos.","C","VUNESP","Conceito literal."],
  ["Nos atos administrativos, o regime jurídico é de direito privado e a declaração de vontade emana entre particulares.","E","AOCP","Inverteu: regime de <b>direito público</b> e vontade que <b>emana do Estado</b>."],
  ["Particulares podem praticar atos administrativos, desde que estejam investidos de prerrogativas estatais.","C","IBFC","Agentes honoríficos, delegados e credenciados."],
  ["Motivação, finalidade, competência, forma e objeto constituem elementos obrigatórios do ato administrativo, de modo que a ausência de qualquer um deles implica a nulidade do ato.","E","FUNDATEC","O elemento é o <b>motivo</b>; a motivação não é elemento de formação nem é sempre obrigatória."],
  ["A competência é elemento de exercício obrigatório, irrenunciável, imprescritível, intransferível, improrrogável e imodificável pela vontade do agente.","C","CEBRASPE","Características da competência."],
  ["Na usurpação de função, o ato é considerado válido e eficaz.","E","FCC","Na usurpação o ato é <b>inexistente</b>; válido e eficaz é a <b>função de fato</b>."],
  ["Na função de fato, o ato é considerado válido e eficaz.","C","FGV","Vício de competência por incompetência."],
  ["O impedimento decorre de situações subjetivas, como o grau de amizade.","E","VUNESP","Impedimento é <b>objetivo</b> (parentesco); suspeição é <b>subjetiva</b> (amizade)."],
  ["O desvio de finalidade é vício insanável e o ato deve ser anulado.","C","AOCP","Vício de finalidade."],
  ["Os atos administrativos dependem sempre de forma determinada em lei.","E","IBFC","<b>Não dependem</b> de forma determinada, exceto quando a lei expressamente exigir."],
  ["A falta de motivação, quando obrigatória, configura vício no elemento motivo.","E","FUNDATEC","É vício de <b>forma</b> — PEGADINHA expressa no resumo."],
  ["Motivo é o fato concreto, requisito de validade sempre presente; motivação é a justificativa, que pode ser dispensada em alguns casos.","C","CEBRASPE","Motivo diferente de motivação."],
  ["A motivação é obrigatória se houver norma legal expressa nesse sentido, como nos atos que neguem, limitem ou afetem direitos.","C","art. 50 da Lei 9.784/99","Regra citada no resumo."],
  ["Pela teoria dos motivos determinantes, a exoneração de ocupante de cargo em comissão dispensa motivação, mas, se motivada, a validade do ato fica adstrita à veracidade dos motivos apresentados.","C","FCC","Exemplo do próprio resumo."],
  ["O Poder Judiciário pode apreciar o mérito do ato administrativo, isto é, sua conveniência e oportunidade.","E","FGV","Pode apreciar os <b>motivos</b>, nunca o <b>mérito</b>."],
  ["O objeto é o efeito jurídico imediato do ato; no ato de demissão de servidor, o objeto é a própria demissão.","C","VUNESP","Objeto é o conteúdo, a decisão contida no ato."],
  ["Os vícios de objeto são sanáveis e admitem convalidação.","E","AOCP","Objeto proibido, impossível, imoral ou incerto é vício <b>insanável</b>."],
  ["Apenas os atos com vício de competência e de forma são passíveis de convalidação.","C","IBFC","Quadro ATENÇÃO! do resumo."],
  ["A presunção de legitimidade significa que se presume o ato praticado conforme a lei, e a presunção de veracidade, que se presumem verdadeiros os fatos alegados pela Administração.","C","FUNDATEC","Duas faces do mesmo atributo."],
  ["A presunção de legitimidade é absoluta e não admite prova em contrário.","E","CEBRASPE","É presunção <b>relativa</b>."],
  ["A presunção de legitimidade inverte o ônus da prova e está presente em todos os atos administrativos.","C","FCC","O administrado é que deve provar o erro da Administração."],
  ["A exigibilidade é a coerção indireta, como a aplicação de multas, e a executoriedade é a coerção direta, como a demolição de obra irregular.","C","FGV","Desdobramentos da autoexecutoriedade."],
  ["A cobrança de multa não paga é exemplo típico de ato dotado de autoexecutoriedade.","E","VUNESP","É exemplo típico de ato <b>sem</b> autoexecutoriedade: possui apenas exigibilidade."],
  ["A autoexecutoriedade está presente apenas quando expressamente prevista em lei ou quando se tratar de medida urgente.","C","AOCP","Ex.: apreensão de mercadorias piratas; demolição de prédio que ameaça ruir."],
  ["A tipicidade exige previsão legal para cada espécie de ato e impede a prática de atos inominados.","C","IBFC","Conceito do atributo."],
  ["A imperatividade é atributo indissociável dos atos administrativos.","E","FUNDATEC","O único atributo indissociável é a <b>presunção de legitimidade</b>."],
  ["A imperatividade decorre do poder extroverso e está ausente nos atos enunciativos e nos atos negociais.","C","CEBRASPE","Só está presente nos atos que impõem obrigações ou restrições."],
  ["Nos atos discricionários, todos os elementos do ato são discricionários.","E","FCC","Competência, finalidade e forma são <b>sempre vinculados</b>; só motivo e objeto são discricionários."],
  ["Nos atos complexos há um único ato que decorre de duas ou mais manifestações de vontade autônomas, provenientes de órgãos diversos, como a portaria interministerial.","C","FGV","Também a aposentadoria de servidor estatutário."],
  ["Nos atos compostos há um único ato que decorre de manifestações de órgãos diversos, em que a vontade de um é instrumental em relação à do outro.","E","VUNESP","Nos compostos há <b>dois ou mais atos</b>; o ato único é o <b>complexo</b>."],
  ["As bancas inclinam-se ao entendimento de que a nomeação dos ministros de tribunais superiores é ato administrativo complexo.","C","CF, art. 84, XIV","Depende da conjugação de vontades do Presidente da República e do Senado Federal."],
  ["Ato eficaz é aquele praticado em conformidade com a lei, sem nenhum vício.","E","AOCP","Esse é o ato <b>válido</b>; eficaz é o ato perfeito <b>apto a produzir efeitos</b>."],
  ["Ato pendente é o ato perfeito que ainda depende de algum evento posterior para produzir efeitos, como termo, condição ou aprovação.","C","IBFC","Classificação quanto à exequibilidade."],
  ["Os atos normativos possuem efeitos gerais e abstratos e não podem inovar o ordenamento jurídico.","C","FUNDATEC","São atos administrativos apenas em sentido formal."],
  ["Os atos ordinatórios são superiores em hierarquia aos atos normativos.","E","CEBRASPE","São <b>inferiores</b> em hierarquia aos atos normativos."],
  ["O ato administrativo adequado para instituir comissão encarregada de elaborar proposta de edital de concurso público é a portaria.","C","FCC","Ato ordinatório."],
  ["Governador que pretenda nomear servidor para ocupar cargo de confiança deverá fazê-lo por portaria.","E","FGV","Deve ser por <b>decreto</b>."],
  ["A licença é ato administrativo vinculado e definitivo, que permite ao particular exercer direitos subjetivos.","C","VUNESP","Espécie de ato negocial."],
  ["A autorização é ato unilateral, discricionário e precário, revogável a qualquer tempo pela Administração.","C","AOCP","Ex.: mesa de bar em calçada."],
  ["A permissão de serviço público constitui ato administrativo negocial.","E","IBFC","Deve ser formalizada por <b>contrato de adesão</b>, precedido de licitação."],
  ["Certidão, atestado, parecer e apostila são exemplos de atos enunciativos.","C","FUNDATEC","Mnemônico CAPA."],
  ["A revogação é o desfazimento do ato administrativo por razões de ilegalidade.","E","CEBRASPE","Revogação é por <b>conveniência e oportunidade</b>; por ilegalidade é a <b>anulação</b>."],
  ["Autorização de uso de bem público extinta porque lei municipal posterior alterou o plano diretor e proibiu aquela destinação caracteriza caducidade.","C","FGV","Norma posterior torna inviável a permanência da situação."],
  ["A cassação ocorre quando o destinatário descumpre condição fundamental para que continuasse a desfrutar da situação jurídica.","C","VUNESP","Forma de extinção por fato do beneficiário."],
  ["Na renúncia, a Administração abre mão dos efeitos do ato que havia praticado.","E","AOCP","Quem abre mão da vantagem é o <b>próprio beneficiário</b>."],
  ["Não podem ser revogados os atos consumados e exauridos, os geradores de direitos adquiridos, os meros atos administrativos, os atos complexos e os atos vinculados.","C","Súmula 473 do STF","Lista do resumo."],
  ["Os vícios de motivo, objeto e finalidade admitem convalidação.","E","IBFC","São <b>insanáveis</b>; sanáveis são forma e competência (FOCO)."],
  ["A ratificação é a forma de convalidação que corrige o vício de forma ou de competência.","C","FUNDATEC","Quadro das formas de convalidação."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Atos da Administração, ato administrativo e os cinco elementos",
      '<div class="box"><span class="bl">Atos da Administração × ato administrativo</span>'+
      '<p><b>Atos da Administração</b> são <b>todos</b> os atos praticados pela Administração Pública. Eles abrangem quatro espécies:</p>'+
      '<div class="chips"><span class="chip">Atos políticos (de governo)</span><span class="chip">Atos privados</span><span class="chip">Atos materiais (fatos administrativos)</span><span class="chip">Atos administrativos</span></div>'+
      '<p><b>Exemplos:</b> atos de direito privado (locação; abertura de conta corrente) · atos materiais (demolição de prédio; limpeza de ruas) · atos administrativos (nomeação de aprovados num concurso público).</p></div>'+
      '<div class="box trap"><span class="bl">QUESTÃO-PEGADINHA do resumo</span>'+
      '<p>O TCE alugou salas de uma escola privada para o curso de formação de seus servidores. O ato de locação <b>não</b> é ato administrativo: é <b>ato privado</b>, ou seja, <b>ato da administração</b>.</p></div>'+
      '<div class="box"><span class="bl">Fatos administrativos × fatos da Administração</span>'+
      '<p><b>Atos materiais (fatos administrativos):</b> atividade material que <b>produz consequências jurídicas</b>, <b>independentemente de manifestação de vontade</b>. Queda de uma ponte · colisão acidental entre veículo oficial e particular · queda de raio sobre repartição · enchente que danifica bens públicos · morte de servidor · <b>silêncio administrativo</b>.</p>'+
      '<p><b>Fatos da Administração NÃO produzem efeitos jurídicos:</b> servidor que se machuca sem gravidade · mudança de localização de um departamento dentro de um órgão.</p></div>'+
      '<div class="box"><span class="bl">Ato administrativo</span>'+
      '<p><b>Declaração unilateral do Estado ou de quem o represente</b> que produz <b>efeitos jurídicos imediatos</b>. É praticado por <b>todos os Poderes</b> quando exercem função administrativa, por agente público <b>inclusive particulares em colaboração</b>, é regido pelo <b>direito público</b> e está <b>sujeito ao controle judicial</b>.</p>'+
      '<p>É <b>espécie do gênero ato jurídico</b>, mas: a vontade <b>emana do Estado</b> (e não entre particulares) e o regime é <b>público</b> (e não privado).</p>'+
      '<p><b>ATENÇÃO:</b> particulares praticam atos administrativos se <b>investidos de prerrogativas estatais</b> — agentes honoríficos, delegados e credenciados. A concessionária de transporte pode determinar a <b>expulsão de passageiro</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Elementos — COM-FI-FOR-M-OB</span>'+
      '<div class="tree"><div class="leaf"><b>COMPETÊNCIA</b> — conjunto de atribuições. Obrigatória, irrenunciável, imprescritível, intransferível, improrrogável e imodificável pela vontade do agente. Vícios: <b>incompetência</b> (excesso de poder → convalidável, salvo competência exclusiva; usurpação de função → ato <b>inexistente</b>; função de fato → ato <b>válido e eficaz</b>) e <b>incapacidade</b> (impedimento, objetivo; suspeição, subjetiva).</div>'+
      '<div class="leaf"><b>FINALIDADE</b> — resultado pretendido. Genérica (interesse público) e específica (= objeto). Decorre da <b>impessoalidade</b>. Desvio de finalidade: vício <b>insanável</b>.</div>'+
      '<div class="leaf"><b>FORMA</b> — modo de exteriorização. Regra escrita, mas cabem ordens verbais, gestos, apitos, sinais sonoros e luminosos, placas (<b>formalismo moderado</b>). Forma essencial viciada → anulação; não essencial → convalidação.</div>'+
      '<div class="leaf"><b>MOTIVO</b> — fundamentos de fato e de direito. Falso, inexistente, ilegítimo ou juridicamente falho → <b>insanável</b>.</div>'+
      '<div class="leaf"><b>OBJETO</b> — efeito jurídico imediato, o conteúdo (a demissão; a autorização para edificar). Proibido, impossível, imoral ou incerto → <b>insanável</b>.</div></div></div>'+
      '<div class="box trap"><span class="bl">As duas pegadinhas dos elementos</span>'+
      '<p><b>1) Motivação não é elemento.</b> A banca lista “motivação, finalidade, competência, forma e objeto” — errado: o elemento é o <b>MOTIVO</b>. <b>Motivo</b> é o fato concreto, sempre presente; <b>motivação</b> é a justificativa, <b>prévia ou concomitante</b>, dispensável em alguns casos e obrigatória quando houver norma expressa (atos que <b>neguem, limitem ou afetem direitos</b> — art. 50 da Lei 9.784/99).</p>'+
      '<p><b>2) A falta de motivação obrigatória é vício de FORMA</b>, e a banca vai dizer que é vício no elemento “motivo”.</p>'+
      '<p><b>Teoria dos motivos determinantes:</b> o ato só é válido se a motivação for <b>verdadeira</b>, ainda que feita sem ser obrigatória — a exoneração de cargo em comissão (<b>ad nutum</b>) dispensa motivação, mas, motivada, fica <b>adstrita</b> à veracidade. O Judiciário aprecia os <b>motivos</b>, nunca o <b>mérito</b>.</p>'+
      '<p class="mn"><em>ATENÇÃO! Apenas os atos com vício de competência e de forma são passíveis de convalidação.</em></p></div>')
  ],
  V2:[
    sl("Atributos (PATI) e a classificação dos atos",
      '<div class="box"><span class="bl">Atributos — PATI</span>'+
      '<p>Características inerentes aos atos administrativos, decorrentes do <b>regime de direito público</b>, que outorgam <b>prerrogativas</b> ao Poder Público.</p>'+
      '<div class="chips"><span class="chip">P — Presunção de legitimidade</span><span class="chip">A — Autoexecutoriedade</span><span class="chip">T — Tipicidade</span><span class="chip">I — Imperatividade</span></div></div>'+
      '<div class="box"><span class="bl">Presunção de legitimidade e de veracidade</span>'+
      '<p><b>Legitimidade:</b> presume-se o ato praticado <b>conforme a lei</b>. <b>Veracidade:</b> presumem-se <b>verdadeiros os fatos alegados</b> pela Administração.</p>'+
      '<p>Permite que os atos produzam <b>efeitos de imediato</b>, ainda que com <b>vícios aparentes</b> — o administrado se submete ao ato <b>até que ele seja invalidado</b>. É presunção <b>RELATIVA</b>, <b>inverte o ônus da prova</b> e está presente em <b>TODOS</b> os atos.</p></div>'+
      '<div class="box"><span class="bl">Autoexecutoriedade, tipicidade e imperatividade</span>'+
      '<p><b>Autoexecutoriedade:</b> executar imediatamente, <b>sem intervenção judicial</b>. <b>Exigibilidade</b> = coerção <b>indireta</b> (multas) · <b>Executoriedade</b> = coerção <b>direta</b> (demolição de obra irregular). Presente <b>só</b> se prevista em lei (apreensão de mercadorias piratas, penalidades disciplinares) ou em <b>medida urgente</b> (prédio que ameaça ruir); <b>ausente</b> quando envolve o <b>patrimônio do particular</b>.</p>'+
      '<p><b>Tipicidade:</b> cada espécie de ato requer <b>previsão legal</b>; impede <b>atos inominados</b>.</p>'+
      '<p><b>Imperatividade:</b> impõe restrições e obrigações <b>sem concordância</b> do administrado; decorre do <b>poder extroverso</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O quadro das ausências — e a multa de trânsito</span>'+
      '<ul><li><b>Presunção de legitimidade:</b> presente em <b>TODOS</b> os atos.</li>'+
      '<li><b>Autoexecutoriedade:</b> ausente em atos <b>enunciativos</b> (parecer), <b>negociais</b> (licença) e nos que envolvem <b>patrimônio do particular</b>.</li>'+
      '<li><b>Tipicidade:</b> ausente em atos <b>bilaterais</b>.</li>'+
      '<li><b>Imperatividade:</b> ausente em atos <b>enunciativos</b> e <b>negociais</b>.</li></ul>'+
      '<p>A <b>multa de trânsito</b> tem <b>exigibilidade</b>, mas <b>não executoriedade</b> — a Administração precisa ir a juízo para cobrar. Logo, a <b>cobrança de multa</b> é o exemplo típico de ato <b>sem</b> autoexecutoriedade.</p>'+
      '<p class="mn"><em>A imperatividade NÃO é atributo indissociável. O único indissociável é a presunção de legitimidade.</em></p></div>'+
      '<div class="box"><span class="bl">Classificação — as quatro que caem</span>'+
      '<div class="tree"><div class="leaf"><b>Grau de liberdade:</b> <b>vinculados</b> (a lei fixa requisitos; todos os elementos vinculados) × <b>discricionários</b> (competência, finalidade e forma <b>sempre vinculados</b>; só <b>motivo e objeto</b> discricionários — mérito). <b>Não existe ato totalmente discricionário!</b></div>'+
      '<div class="leaf"><b>Formação de vontade:</b> <b>simples</b> (um único órgão) · <b>complexos</b> (<b>um</b> ato de duas ou mais manifestações autônomas de órgãos diversos — aposentadoria estatutária, portaria interministerial) · <b>compostos</b> (<b>dois ou mais</b> atos, a vontade de um é <b>instrumental</b> — autorização que depende de visto).</div>'+
      '<div class="leaf"><b>Requisitos de validade:</b> <b>válido</b> · <b>nulo</b> (vício insanável) · <b>anulável</b> (vício sanável — competência e forma) · <b>inexistente</b> (usurpador de função).</div>'+
      '<div class="leaf"><b>Exequibilidade:</b> <b>perfeito</b> · <b>eficaz</b> · <b>pendente</b> · <b>consumado</b>.</div></div></div>'+
      '<div class="box tip"><span class="bl">O filtro válido / perfeito / eficaz</span>'+
      '<p>As bancas adoram misturar os três. Pergunte nesta ordem:</p>'+
      '<ul><li>O ato está de acordo com as leis? <b>SIM = VÁLIDO</b></li>'+
      '<li>O ato concluiu seu ciclo ou etapas de formação? <b>SIM = PERFEITO</b></li>'+
      '<li>O ato está apto a produzir efeitos? <b>SIM = EFICAZ</b></li></ul>'+
      '<p>A jurisprudência do STJ citada no resumo fecha o ponto dos complexos: a <b>portaria interministerial</b> só se revoga com a manifestação de vontade de <b>ambos</b> os ministros, por simetria com a edição. E as bancas tratam a <b>nomeação de ministros de tribunais superiores</b> como ato <b>complexo</b> (CF, art. 84, XIV).</p></div>')
  ],
  V3:[
    sl("Espécies (NONEP), extinção e convalidação",
      '<div class="box"><span class="bl">Espécies — NONEP</span>'+
      '<div class="tree"><div class="leaf"><b>NORMATIVOS</b> — efeitos <b>gerais</b> e <b>abstratos</b>; <b>não inovam</b> o ordenamento; administrativos só em <b>sentido formal</b>. <b>RE-DE-IN-RE-DE-RE</b>: <b>RE</b>gulamento, <b>DE</b>liberação, <b>IN</b>strução normativa, <b>RE</b>gimento, <b>DE</b>creto, <b>RE</b>solução.</div>'+
      '<div class="leaf"><b>ORDINATÓRIOS</b> — efeitos <b>internos</b>, endereçados aos servidores; fundamento no <b>poder hierárquico</b>; <b>inferiores</b> aos normativos. <b>C-O-P-A</b>: <b>C</b>ircular, <b>O</b>rdem de serviço, <b>P</b>ortaria, <b>A</b>viso.</div>'+
      '<div class="leaf"><b>NEGOCIAIS</b> — a vontade da Administração <b>coincide</b> com o interesse do administrado (atos de consentimento). <b>Não cabe</b> imperatividade, coercitividade nem autoexecutoriedade.</div>'+
      '<div class="leaf"><b>ENUNCIATIVOS</b> — certificam situação preexistente ou emitem opinião; são <b>meros atos da Administração</b>. <b>CAPA</b>: <b>C</b>ertidão, <b>A</b>testado, <b>P</b>arecer, <b>A</b>postila.</div>'+
      '<div class="leaf"><b>PUNITIVOS</b> — impõem sanções, de ordem <b>interna</b> (penalidades disciplinares) ou <b>externa</b> (destruição de coisas apreendidas).</div></div>'+
      '<p class="mn"><em>Enunciativos / normativos / ordinatórios / negociais / punitivos = certidões / regulamentos / ordens de serviço / autorizações / destruições de coisas apreendidas.</em></p></div>'+
      '<div class="box trap"><span class="bl">Portaria × decreto, e a permissão</span>'+
      '<p>Instituir comissão encarregada de elaborar proposta de <b>edital de concurso</b> → <b>PORTARIA</b> (ato ordinatório). Nomear servidor para <b>cargo de confiança</b> → <b>DECRETO</b> (ato normativo). Ofício do chefe de setor com normas de organização aos subordinados → ato <b>ordinatório</b>.</p>'+
      '<p><b>Permissão de uso de bem público = ato administrativo.</b> <b>Permissão de serviço público = contrato administrativo (de adesão)</b>, precedido de licitação.</p></div>'+
      '<div class="box"><span class="bl">Licença, autorização e permissão</span>'+
      '<p><b>LICENÇA</b> — ato <b>vinculado</b> e <b>definitivo</b>; permite exercer <b>direitos subjetivos</b>.</p>'+
      '<p><b>AUTORIZAÇÃO</b> — <b>unilateral</b>, <b>discricionária</b> e <b>precária</b> (revogável a qualquer tempo), para serviços ou uso de bens públicos no interesse <b>predominante do particular</b>. Ex.: mesa de bar em calçada.</p>'+
      '<p><b>PERMISSÃO</b> — <b>discricionária</b> e <b>precária</b>; como ato administrativo, refere-se <b>apenas ao uso de bem público</b>.</p></div>'+
      '<div class="box"><span class="bl">Extinção do ato administrativo</span>'+
      '<ul><li><b>Cumprimento dos efeitos</b> (extinção natural) — gozo de férias do servidor.</li>'+
      '<li><b>Desaparecimento do sujeito ou do objeto</b> — falecimento do servidor que estava de licença.</li>'+
      '<li><b>Revogação</b> — desfazimento de atos <b>legais</b>, por <b>conveniência e oportunidade</b>.</li>'+
      '<li><b>Anulação</b> — desfazimento de atos <b>ilegais</b>.</li>'+
      '<li><b>Cassação</b> — o <b>beneficiário descumpre condição fundamental</b>.</li>'+
      '<li><b>Caducidade</b> — <b>lei posterior</b> torna inviável a permanência da situação antes permitida.</li>'+
      '<li><b>Contraposição</b> — ato cujos efeitos se <b>contrapõem</b> ao anterior: exoneração × nomeação.</li>'+
      '<li><b>Renúncia</b> — o <b>beneficiário abre mão</b> da vantagem: servidor inativo que reassume cargo.</li></ul>'+
      '<p><b>Não confunda:</b> a <b>caducidade dos contratos</b> é a extinção da concessão por <b>descumprimento de obrigações contratuais pelo concessionário</b> — não é a caducidade dos atos.</p></div>'+
      '<div class="box trap"><span class="bl">Quem não pode ser revogado — e os prazos</span>'+
      '<p>Não se revogam: atos <b>consumados e exauridos</b> (licença funcional já gozada) · geradores de <b>direitos adquiridos</b> (<b>Súmula 473 do STF</b>) · <b>meros atos administrativos</b> (certidões, atestados, parecer) · atos <b>complexos</b> · atos <b>vinculados</b>.</p>'+
      '<p>Anulação e revogação <b>não</b> podem ser feitas a qualquer tempo: depois de <b>5 anos</b> a Administração <b>decai do direito de anular</b> seu próprio ato perante terceiros de boa-fé (art. 54 da Lei 9.784/99); gerados direitos adquiridos, o ato torna-se <b>irrevogável</b> (art. 53 da Lei 9.784/99 + Súmula 473 do STF).</p></div>'+
      '<div class="box tip"><span class="bl">Convalidação — FOCO</span>'+
      '<p><b>Faculdade (discricionariedade)</b> de corrigir <b>vícios sanáveis</b>: <b>FOCO</b> = <b>FO</b>rma (exceto essencial à validade) + <b>CO</b>mpetência (exceto exclusiva e quanto à matéria). <b>Motivo, objeto e finalidade são insanáveis</b>.</p>'+
      '<p><b>Revogação</b> → atos <b>LEGAIS</b>, sem vício. <b>Anulação</b> → atos <b>ILEGAIS</b> com vícios <b>insanáveis</b>. <b>Convalidação</b> → atos <b>ILEGAIS</b> com vícios <b>sanáveis</b> (forma e competência).</p>'+
      '<p><b>Formas:</b> <b>ratificação</b> (corrige forma ou competência) · <b>reforma</b> (retira o objeto inválido e mantém o válido — anulação parcial) · <b>conversão</b> (mantém a parte válida, retira a inválida e a <b>substitui</b> por nova parte válida).</p></div>')
  ]
};

var EX = {
S1:{t:"sort", instr:"Ato administrativo ou outro ato da Administração?",
  buckets:["Ato administrativo","Outro ato da Administração"],
  items:[["Nomeação de aprovados num concurso público",0],
         ["Concessão de licença",0],
         ["Aplicação de multa",0],
         ["Locação de salas de uma escola privada",1],
         ["Abertura de conta corrente",1],
         ["Demolição de prédio",1],
         ["Limpeza de ruas",1]],
  why:"Os três últimos são ato privado ou ato material — atos da administração, e não atos administrativos."},

S2:{t:"multi", instr:"Marque os exemplos de atos materiais (fatos administrativos) do resumo",
  options:["Queda de uma ponte que gera obrigação de repará-la",
           "Colisão acidental entre veículo oficial e veículo particular",
           "Queda de um raio sobre uma repartição pública",
           "Enchente que cause danos a bens públicos",
           "Morte de um servidor",
           "Silêncio administrativo",
           "Servidor que se machuca sem gravidade",
           "Mudança de localização de um departamento dentro de um órgão"],
  answers:[0,1,2,3,4,5],
  why:"Os dois últimos são fatos da Administração — e estes NÃO produzem efeitos jurídicos."},

S3:{t:"wordbank", instr:"Monte o conceito de ato administrativo",
  target:["É","a","declaração","unilateral","do","Estado","ou","de","quem","o","represente","que","produz","efeitos","jurídicos","imediatos"],
  extra:["bilateral","mediatos","entre","particulares"],
  why:"Declaração unilateral do Estado, com efeitos jurídicos imediatos — por isso o silêncio não é ato administrativo."},

S4:{t:"gap", instr:"Complete o mnemônico dos elementos do ato administrativo",
  before:"Competência, finalidade, forma, motivo e objeto formam o mnemônico ",
  after:".",
  options:["COM-FI-FOR-M-OB","PATI","NONEP"], answer:0,
  why:"PATI são os atributos; NONEP são as espécies."},

S5:{t:"match", instr:"Correlacione o vício de competência ao seu efeito ou exemplo",
  pairs:[["Excesso de poder","O ato pode ser convalidado, exceto em competência exclusiva"],
         ["Usurpação de função","O ato é considerado inexistente"],
         ["Função de fato","O ato é considerado válido e eficaz"],
         ["Impedimento","Situação objetiva — ex.: grau de parentesco"],
         ["Suspeição","Situação subjetiva — ex.: grau de amizade"]],
  why:"Excesso de poder, usurpação e função de fato são incompetência; impedimento e suspeição, incapacidade."},

S6:{t:"mc", instr:"A falta de motivação, quando obrigatória, configura vício em qual elemento?",
  options:["Forma","Motivo","Objeto","Finalidade"],
  answer:0,
  why:"PEGADINHA do resumo: é vício de FORMA e acarreta nulidade — a banca vai dizer que é vício no motivo."},

S7:{t:"sort", instr:"O vício é sanável (convalidável) ou insanável?",
  buckets:["Sanável","Insanável"],
  items:[["Vício de competência, salvo a exclusiva",0],
         ["Vício de forma não essencial",0],
         ["Desvio de finalidade",1],
         ["Motivo falso ou inexistente",1],
         ["Objeto proibido, impossível, imoral ou incerto",1],
         ["Vício de forma essencial à validade do ato",1]],
  why:"FOCO: só FOrma e COmpetência admitem convalidação."},

S8:{t:"gap", instr:"Complete o mnemônico dos atributos do ato administrativo",
  before:"Presunção de legitimidade, autoexecutoriedade, tipicidade e imperatividade formam o mnemônico ",
  after:".",
  options:["PATI","COM-FI-FOR-M-OB","FOCO"], answer:0,
  why:"FOCO é o mnemônico dos vícios sanáveis (forma e competência)."},

S9:{t:"match", instr:"Correlacione cada atributo à sua definição",
  pairs:[["Presunção de legitimidade","Conformidade do ato com a ordem jurídica e veracidade dos fatos — sempre existe"],
         ["Autoexecutoriedade","Permite que a Administração atue independentemente de autorização judicial"],
         ["Tipicidade","Vem sempre definido em lei"],
         ["Imperatividade","O destinatário deve obediência ao ato, independentemente de concordância"]],
  why:"É o quadro comparativo do resumo: elementos são as partes do ato; atributos, suas características."},

S10:{t:"sort", instr:"Exigibilidade ou executoriedade?",
  buckets:["Exigibilidade (coerção indireta)","Executoriedade (coerção direta)"],
  items:[["Aplicação de multa",0],
         ["Multa de trânsito",0],
         ["Demolição de obra irregular",1],
         ["Demolição de prédio que ameaça ruir",1],
         ["Apreensão de mercadorias piratas",1]],
  why:"A multa de trânsito é dotada de exigibilidade, mas não de executoriedade."},

S11:{t:"mc", instr:"A cobrança de multa não paga é exemplo de ato com qual característica?",
  options:["Possui apenas exigibilidade, e não autoexecutoriedade",
           "Possui autoexecutoriedade plena",
           "Possui executoriedade, mas não exigibilidade",
           "Não possui presunção de legitimidade"],
  answer:0,
  why:"Envolve o patrimônio do particular — a Administração tem de ir a juízo para cobrar."},

S12:{t:"mc", instr:"Nos atos discricionários, quais elementos são discricionários?",
  options:["Apenas motivo e objeto","Todos os elementos",
           "Apenas competência e forma","Apenas finalidade e forma"],
  answer:0,
  why:"Competência, finalidade e forma são sempre vinculados — não existe ato totalmente discricionário."},

S13:{t:"match", instr:"Correlacione a classificação quanto à formação de vontade",
  pairs:[["Ato simples","Manifestação de um único órgão, unipessoal ou colegiado"],
         ["Ato complexo","Um único ato formado por duas ou mais manifestações autônomas de órgãos diversos"],
         ["Ato composto","Dois ou mais atos em que a vontade de um é instrumental em relação à do outro"]],
  why:"Portaria interministerial e aposentadoria estatutária são complexos; autorização que depende de visto é composto."},

S14:{t:"match", instr:"Correlacione a classificação quanto à exequibilidade e à validade",
  pairs:[["Ato válido","Praticado em conformidade com a lei, sem nenhum vício"],
         ["Ato perfeito","Já concluiu todas as etapas da sua formação"],
         ["Ato eficaz","Ato perfeito que já está apto a produzir efeitos"],
         ["Ato pendente","Ato perfeito que depende de evento posterior para produzir efeitos"],
         ["Ato consumado","Já produziu todos os efeitos que estava apto a produzir"]],
  why:"O resumo avisa: as bancas adoram misturar válidos, perfeitos e eficazes."},

S15:{t:"gap", instr:"Complete o mnemônico das espécies de atos administrativos",
  before:"Normativo, ordinatório, negocial, enunciativo e punitivo formam o mnemônico ",
  after:".",
  options:["NONEP","CAPA","COPA"], answer:0,
  why:"CAPA são os enunciativos; COPA, os ordinatórios."},

S16:{t:"match", instr:"Correlacione a espécie de ato ao exemplo do resumo",
  pairs:[["Enunciativo","Certidão"],
         ["Normativo","Regulamento"],
         ["Ordinatório","Ordem de serviço"],
         ["Negocial","Autorização"],
         ["Punitivo","Destruição de coisas apreendidas"]],
  why:"É exatamente a ordem da questão-exemplo do resumo."},

S17:{t:"mc", instr:"Circular, ordem de serviço, portaria e aviso são exemplos de:",
  options:["Atos ordinatórios","Atos normativos","Atos negociais","Atos enunciativos"],
  answer:0,
  why:"Mnemônico COPA — efeitos internos, com fundamento no poder hierárquico."},

S18:{t:"match", instr:"Correlacione cada forma de extinção do ato à sua descrição",
  pairs:[["Revogação","Desfazimento de atos legais, por conveniência e oportunidade"],
         ["Anulação","Desfazimento de atos ilegais"],
         ["Cassação","O beneficiário descumpre condição fundamental"],
         ["Caducidade","Lei posterior torna inviável a permanência da situação antes permitida"],
         ["Contraposição","Ato cujos efeitos se contrapõem ao anterior — exoneração e nomeação"],
         ["Renúncia","O beneficiário abre mão de vantagem de que desfrutava"]],
  why:"Some o cumprimento dos efeitos e o desaparecimento do sujeito ou do objeto e fecham as oito formas."},

S19:{t:"mc", instr:"Autorização de uso de praça pública por três meses; um mês depois, lei municipal altera o plano diretor e proíbe aquela destinação. O ato extingue-se por:",
  options:["Caducidade","Cassação","Revogação","Contraposição"],
  answer:0,
  why:"Ilegalidade superveniente causada pela alteração legislativa, sem culpa do beneficiário."},

S20:{t:"match", instr:"Correlacione cada forma de convalidação",
  pairs:[["Ratificação","Correção do vício de forma ou de competência"],
         ["Reforma","Retira o objeto inválido e mantém o válido — anulação parcial"],
         ["Conversão","Mantém a parte válida, retira a inválida e a substitui por nova parte válida"]],
  why:"Só vícios de forma e competência são sanáveis — FOCO."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q1TQzg","Q1TQzg"],
  ["Caderno FCC — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q1vOaP","Q1vOaP"],
  ["Caderno FGV — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q1vOaa","Q1vOaa"],
  ["Caderno VUNESP — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q1vOam","Q1vOam"],
  ["Caderno AOCP — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q22uOS","Q22uOS"],
  ["Caderno IBFC — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q27PaS","Q27PaS"],
  ["Caderno FUNDATEC — Direito Administrativo 03","https://www.tecconcursos.com.br/s/Q27XQA","Q27XQA"]
];
var TECNOTA = "Três fronteiras respondem pela maioria dos erros deste assunto. A primeira é a linha entre ato da administração e ato administrativo: locação e abertura de conta corrente são atos privados, e o silêncio administrativo não é ato administrativo, ainda que gere decadência e prescrição. A segunda é o par motivo/motivação: o elemento é o MOTIVO, a falta de motivação obrigatória é vício de FORMA, e só forma e competência admitem convalidação (FOCO) — motivo, objeto e finalidade são insanáveis. A terceira é o vocabulário dos atributos e das classificações: a presunção de legitimidade é o único atributo presente em todos os atos (a imperatividade falta nos enunciativos e negociais), a cobrança de multa tem exigibilidade mas não executoriedade, nos discricionários só motivo e objeto são discricionários, e válido, perfeito e eficaz respondem a três perguntas diferentes.";

var UNITS = [
  {n:1, title:"Ato administrativo e seus elementos", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Do ato da Administração ao COM-FI-FOR-M-OB", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · atos da Administração e conceito", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · competência e finalidade",         xp:25, data:["S4","S5","T7","T8","T9","T10","T11","T12","T13"]},
    {id:"K4", type:"drill",  title:"Praticar · forma, motivo e objeto",           xp:25, data:["S6","S7","T14","T15","T16","T17","T18","T19","T20","T21"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos e elementos",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
  ]},
  {n:2, title:"Atributos e classificação", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"PATI e as quatro classificações que caem",    xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · presunção de legitimidade",        xp:25, data:["S8","S9","T22","T23","T24"]},
    {id:"K8", type:"drill",  title:"Praticar · autoexecutoriedade e imperatividade", xp:25, data:["S10","S11","T25","T26","T27","T28","T29","T30"]},
    {id:"K9", type:"drill",  title:"Praticar · classificação dos atos",           xp:25, data:["S12","S13","S14","T31","T32","T33","T34","T35","T36"]},
    {id:"K10",type:"flash",  title:"Flashcards · atributos e classificação",      xp:15, data:[17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Espécies, extinção e convalidação", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"NONEP, as oito extinções e o FOCO",           xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · espécies de atos",                 xp:25, data:["S15","S16","T37","T38","T39","T40"]},
    {id:"K13",type:"drill",  title:"Praticar · negociais e enunciativos",         xp:25, data:["S17","T41","T42","T43","T44"]},
    {id:"K14",type:"drill",  title:"Praticar · extinção e convalidação",          xp:25, data:["S18","S19","S20","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · espécies, extinção e convalidação", xp:15, data:[29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                     xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                        xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                       xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 03 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo. É o esquema de abertura do resumo: os atos da Administração são <b>todos os atos praticados pela Administração Pública</b> e abrangem quatro espécies — <b>atos políticos (de governo)</b>, <b>atos privados</b>, <b>atos materiais (fatos administrativos)</b> e <b>atos administrativos</b>.</p><p>Guarde a hierarquia: o <b>ato administrativo é apenas uma das quatro espécies</b>, e não o gênero.</p><p class='fb-fonte'>Resumo 03 · <i>Atos da Administração</i></p>",
1:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado do TCE/PA. O comentário dele é direto: <b>o ato de locação é considerado um ato privado, ou seja, um ato da administração, e não um ato administrativo</b>.</p><p>Os exemplos de ato de direito privado que o material dá são exatamente estes: <b>locação</b> e <b>abertura de conta corrente</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atos da Administração — questão-pegadinha</i></p>",
2:"<p>Certo, nas duas partes. O resumo define os atos materiais como <b>a atividade material no exercício da atividade administrativa, que produz consequências jurídicas</b>, e acrescenta: <b>eles são produzidos independentemente de manifestação de vontade</b>.</p><p>Os exemplos dele: queda de uma ponte, colisão acidental entre veículo oficial e particular, queda de raio sobre repartição, enchente que danifica bens públicos, morte de servidor e o <b>silêncio administrativo</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atos Materiais (Fatos Administrativos)</i></p>",
3:"<p>Errado. O resumo é expresso: <b>o silêncio (omissão) da Administração NÃO pode ser considerado um ato administrativo, ainda que possa gerar efeitos jurídicos (como no caso da decadência e da prescrição)</b>.</p><p>O silêncio aparece na lista de <b>fatos administrativos</b> — justamente porque não há manifestação de vontade. A concessiva da assertiva está certa; a conclusão é que está trocada.</p><p class='fb-fonte'>Resumo 03 · <i>Ato Administrativo</i></p>",
4:"<p>Certo, é a definição literal do resumo: ato administrativo <b>é a declaração unilateral do Estado ou de quem o represente que produz efeitos jurídicos imediatos</b>.</p><p>Três palavras sustentam o conceito e são onde a banca mexe: <b>unilateral</b> (não bilateral), <b>do Estado ou de quem o represente</b> (daí os particulares em colaboração) e <b>imediatos</b> (não mediatos).</p><p class='fb-fonte'>Resumo 03 · <i>Ato Administrativo</i></p>",
5:"<p>Errado — a assertiva inverteu as duas distinções do resumo. Nele: <b>nos atos administrativos, a declaração de vontade emana do Estado; nos atos jurídicos em geral, emana entre particulares</b>; e <b>nos atos administrativos o regime jurídico é de direito público, e nos atos jurídicos em geral, de direito privado</b>.</p><p>O que é verdade é que os <b>atos administrativos constituem espécie do gênero ato jurídico</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Ato Administrativo x Ato Jurídico</i></p>",
6:"<p>Certo pelo quadro <b>ATENÇÃO</b> do resumo: <b>os particulares também podem praticar atos administrativos, desde que estejam investidos de prerrogativas estatais (ex.: agentes honoríficos, agentes delegados e agentes credenciados)</b>.</p><p>O exemplo é bom de lembrar: as <b>concessionárias de transporte</b> (agentes delegados) podem determinar a <b>expulsão de passageiros</b> que não se comportem adequadamente — sancionam administrativamente o cidadão.</p><p class='fb-fonte'>Resumo 03 · <i>Ato Administrativo — Atenção</i></p>",
7:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este enunciado do TCE/PA. O comentário dele resolve: <b>a motivação não é elemento de formação. A motivação nada mais é que a formalização dos motivos</b>.</p><p>O elemento é o <b>MOTIVO</b>, pelo mnemônico <b>COM-FI-FOR-M-OB</b>. E o resumo completa: a motivação <b>também não é obrigatória, exceto se houver norma legal expressa nesse sentido</b> (ex.: atos que neguem, limitem ou afetem direitos — art. 50 da Lei 9.784/99).</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Motivo (questão-pegadinha)</i></p>",
8:"<p>Certo, é a lista literal do quadro de <b>COMPETÊNCIA</b>: elemento de exercício <b>obrigatório, irrenunciável, imprescritível, intransferível, improrrogável e imodificável pela vontade do agente</b>.</p><p>Repare no fecho: a competência não pode ser modificada <b>pela vontade do agente</b> — quem a fixa é a lei.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Competência</i></p>",
9:"<p>Errado — trocou os efeitos das duas hipóteses. No resumo, dentro da <b>incompetência</b>: <b>usurpação de função (o ato é considerado inexistente)</b> e <b>função de fato (o ato é considerado válido e eficaz)</b>.</p><p>A terceira hipótese é o <b>excesso de poder</b>, em que o ato <b>pode ser convalidado, exceto quando se tratar de competência exclusiva</b>. O usurpador de função reaparece adiante como exemplo de <b>ato inexistente</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Competência (vícios)</i></p>",
10:"<p>Certo, é a literalidade do item 04 do quadro de competência: <b>função de fato (o ato é considerado válido e eficaz)</b>.</p><p>Fixe o trio da incompetência pelos efeitos: <b>excesso de poder</b> → convalidável (salvo competência exclusiva) · <b>usurpação de função</b> → inexistente · <b>função de fato</b> → válido e eficaz.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Competência (vícios)</i></p>",
11:"<p>Errado por uma troca de palavra. No resumo, dentro da <b>incapacidade</b>: <b>impedimento (situações objetivas => ex.: grau de parentesco)</b> e <b>suspeição (situações subjetivas => ex.: grau de amizade)</b>.</p><p>O grau de amizade é exemplo de <b>suspeição</b>. Um atalho: imPEdimento — PArentesco, objetivo; suspeição — amizade, subjetiva.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Competência (incapacidade)</i></p>",
12:"<p>Certo pela letra do quadro de <b>FINALIDADE</b>: <b>o desvio de finalidade é vício insanável e o ato deve ser anulado</b>.</p><p>O resumo acrescenta o resto do elemento: a finalidade é o <b>resultado pretendido</b> pela Administração, divide-se em <b>genérica</b> (satisfação do interesse público) e <b>específica</b> (própria de cada ato, que coincide com o objeto), e <b>decorre do princípio da impessoalidade</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Finalidade</i></p>",
13:"<p>Errado. O resumo diz o oposto: <b>os atos não dependem de forma determinada exceto quando a lei expressamente a exigir (formalismo moderado)</b>.</p><p>A regra é a <b>forma escrita</b>, mas ele lista atos produzidos por <b>ordens verbais, gestos, apitos, sinais sonoros e luminosos (semáforos de trânsito) e placas</b>. O advérbio <b>sempre</b> é o que derruba a assertiva.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Forma</i></p>",
14:"<p>Errado, e o resumo antecipa a armadilha. No quadro de <b>FORMA</b>: <b>a falta de motivação, quando obrigatória, é vício de forma, acarretando a nulidade do ato</b>. E logo abaixo: <b>PEGADINHA => a banca vai dizer que a falta de motivação é vício no elemento “motivo”</b>.</p><p>A lógica é a do item 07: a motivação é a <b>formalização</b> dos motivos, então o defeito está no <b>modo de exteriorização</b> — na forma.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Forma (pegadinha)</i></p>",
15:"<p>Certo, é o item 02 do quadro de <b>MOTIVO</b>, com a distinção que o material grafa como <b>Motivo ≠ Motivação</b>: <b>motivo é o fato concreto, requisito de validade, sempre presente</b>; <b>motivação é a justificativa, em regra presente, mas pode ser dispensada em alguns casos</b>.</p><p>Complemento útil na prova: a motivação é a <b>exposição dos motivos</b> e deve ser <b>prévia ou concomitante</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Motivo</i></p>",
16:"<p>Certo pelo item 05 do quadro: <b>a motivação é obrigatória se houver norma legal expressa nesse sentido (ex.: atos que neguem, limitem ou afetem direitos – art. 50 da lei 9.784/99)</b>.</p><p>Encaixe com a regra geral do item 04: <b>em regra, a Administração tem o dever de motivar seus atos, discricionários ou vinculados</b> — não só os discricionários.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Motivo (art. 50 da Lei 9.784/99)</i></p>",
17:"<p>Certo, e é o exemplo que o resumo usa para explicar a <b>teoria dos motivos determinantes</b>: os cargos em comissão são <b>exoneráveis ad nutum</b>, e <b>a autoridade que exonerar um servidor ocupante de cargo em comissão não precisa sequer motivar tal ato</b>.</p><p>O fecho é o que a banca cobra: <b>se realizada a motivação, a validade do ato fica adstrita (vinculada) à veracidade dos motivos apresentados</b>. A regra geral do item 06: o ato só é válido se a motivação for <b>verdadeira</b>, <b>ainda que feita sem ser obrigatória</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Motivo (teoria dos motivos determinantes)</i></p>",
18:"<p>Errado no verbo e no objeto do controle. O resumo, nas <b>OBSERVAÇÕES</b>: <b>o Poder Judiciário pode apreciar os motivos (ausência ou falsidade) da elaboração do ato, mas NÃO pode apreciar o mérito (conveniência ou oportunidade) do ato</b>.</p><p>Mérito administrativo é a zona de <b>motivo e objeto</b> dos atos discricionários — e é fechada ao Judiciário.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Motivo (observações)</i></p>",
19:"<p>Certo, com o exemplo do próprio resumo. Item 01 do quadro de <b>OBJETO</b>: <b>é o efeito jurídico imediato do ato administrativo</b>, e <b>no ato de demissão de servidor público, o objeto é a própria demissão</b>.</p><p>O outro exemplo dele: <b>no ato de concessão de alvará de construção, o objeto é a própria autorização para edificar</b>. Objeto é <b>conteúdo</b>, isto é, a decisão contida no ato.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Objeto</i></p>",
20:"<p>Errado. O item 03 do quadro de <b>OBJETO</b> é expresso: <b>quando o objeto é proibido, impossível, imoral e incerto, o vício é insanável e o ato deve ser anulado</b>.</p><p>Motivo, objeto e finalidade caminham juntos aqui: os três têm vício <b>insanável</b>. Sanáveis são apenas competência e forma.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Objeto (vícios)</i></p>",
21:"<p>Certo, é o quadro <b>ATENÇÃO!</b> que fecha os elementos: <b>apenas os atos com vício de competência e de forma são passíveis de convalidação</b>.</p><p>Na seção de convalidação o resumo dá o mnemônico: <b>vícios sanáveis => FOCO (FOrma e COmpetência)</b>, com as ressalvas da <b>competência exclusiva</b> e da <b>forma essencial à validade do ato</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Elementos — Objeto (Atenção!)</i></p>",
22:"<p>Certo nas duas definições, que o resumo separa em dois itens: <b>presunção de legitimidade => presume-se que o ato foi praticado conforme a lei</b>; <b>presunção de veracidade => presume-se que os fatos alegados pela Administração são verdadeiros</b>.</p><p>É o primeiro dos atributos do mnemônico <b>PATI</b>: Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Presunção de Legitimidade</i></p>",
23:"<p>Errado por uma palavra. O item 05 do quadro diz o contrário: <b>é uma presunção relativa (admite prova em contrário)</b>.</p><p>Os outros efeitos que o resumo lista: ela permite que os atos <b>produzam efeitos de imediato, ainda que apresentem vícios aparentes</b>, e <b>o administrado terá que se submeter ao ato até que ele seja invalidado</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Presunção de Legitimidade</i></p>",
24:"<p>Certo nas duas partes, itens 06 e 07 do quadro: <b>inverte o ônus da prova (o administrado é que deve provar o erro da Administração)</b> e está <b>presente em todos os atos administrativos</b>.</p><p>Essa segunda metade é a chave de várias questões: a presunção de legitimidade é o <b>único atributo indissociável</b> de todo ato administrativo.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Presunção de Legitimidade</i></p>",
25:"<p>Certo, com os mesmos exemplos do resumo. A autoexecutoriedade <b>desdobra-se em exigibilidade: coerção indireta (ex.: aplicação de multas)</b> e <b>executoriedade: coerção direta (ex.: demolição de obra irregular)</b>.</p><p>O atributo, em si, é a prerrogativa de que certos atos <b>podem ser executados imediatamente pela própria Administração, sem necessidade de intervenção judicial</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Autoexecutoriedade</i></p>",
26:"<p>Errado — é justamente o contra-exemplo do resumo. No quadro <b>ATENÇÃO!</b>: <b>a cobrança de multa é um exemplo típico de ato que NÃO possui autoexecutoriedade. Possui apenas exigibilidade</b>.</p><p>A explicação dele: as multas de trânsito são dotadas de exigibilidade, mas não de executoriedade, <b>já que a Administração não poderá compelir o particular a pagar o valor correspondente, devendo, para tanto, ir a juízo</b>. É o caso do item 04: o atributo não está presente quando envolve o <b>patrimônio do particular</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Autoexecutoriedade (Atenção!)</i></p>",
27:"<p>Certo pelo item 03 do quadro: a autoexecutoriedade <b>está presente apenas quando expressamente prevista em lei (ex.: apreensão de mercadorias piratas; aplicação de penalidades disciplinares)</b> ou quando <b>tratar-se de medida urgente (ex.: demolição de prédio que ameaça ruir)</b>.</p><p>Guarde os dois gatilhos — <b>lei</b> ou <b>urgência</b> — e a exclusão: não há autoexecutoriedade contra o <b>patrimônio do particular</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Autoexecutoriedade</i></p>",
28:"<p>Certo, é o quadro de <b>TIPICIDADE</b> inteiro: <b>cada espécie de ato administrativo requer a devida previsão legal</b> e o atributo <b>impede a prática de atos inominados (atos sem previsão legal)</b>.</p><p>Complemento do quadro de ausências: a tipicidade está <b>ausente em atos bilaterais</b> — e essa é a troca que a banca costuma fazer, dizendo que falta nos enunciativos ou negociais.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Tipicidade</i></p>",
29:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado do TCE/PA, e o comentário dele encerra: <b>nem todos os atos administrativos possuem o atributo da imperatividade (ex.: certidão, parecer, licença). O único atributo indissociável de todos os atos administrativos é o da “Presunção de Legitimidade”</b>.</p><p>Pelo quadro, a imperatividade <b>está presente apenas nos atos que impõem obrigações ou restrições</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Imperatividade (questão-pegadinha)</i></p>",
30:"<p>Certo nas duas afirmações. Itens 02 e 04 do quadro de <b>IMPERATIVIDADE</b>: <b>decorre do poder extroverso (poder de impor obrigações a terceiros, de modo unilateral)</b> e <b>não está presente nos atos enunciativos (ex.: certidão, parecer) e nos atos negociais (ex.: licença ou autorização de bem público)</b>.</p><p>A definição do atributo: <b>imposição de restrições e obrigações ao administrado sem necessidade de sua concordância</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Atributos — Imperatividade</i></p>",
31:"<p>Errado, e o resumo cuida disso em duas linhas. Nos atos discricionários, <b>os elementos competência, finalidade e forma são SEMPRE vinculados</b>, e <b>apenas os elementos motivo e objeto são discricionários (mérito administrativo)</b>.</p><p>Ele fecha a seção com um aviso em destaque: <b>não existe ato totalmente discricionário!</b> Nos atos vinculados, aí sim, <b>todos os elementos (COMFIFORMOB) são vinculados</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Classificação — Quanto ao Grau de Liberdade</i></p>",
32:"<p>Certo, é a definição literal: <b>atos complexos => há um único ato que decorre de duas ou mais manifestações de vontade autônomas, provenientes de órgãos diversos. Ex.: aposentadoria de servidor estatutário, portaria interministerial</b>.</p><p>A questão-exemplo do resumo usa exatamente a portaria interministerial: por ser ato <b>complexo</b>, <b>sua revogação demanda a manifestação de vontade de ambos os ministros, por simetria com a própria edição do ato</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Classificação — Quanto à Formação de Vontade</i></p>",
33:"<p>Errado no número de atos. No resumo: <b>atos compostos => há DOIS OU MAIS atos que resultam da manifestação de dois ou mais órgãos, em que a vontade de um é instrumental em relação à do outro. Ex.: autorização que depende de visto</b>.</p><p>O <b>único ato</b> formado por manifestações autônomas de órgãos diversos é o <b>complexo</b>. A parte final da assertiva (vontade instrumental) está certa — o erro é a fusão com o conceito de complexo.</p><p class='fb-fonte'>Resumo 03 · <i>Classificação — Quanto à Formação de Vontade</i></p>",
34:"<p>Certo, conforme o quadro <b>ATENÇÃO!</b> do resumo: <b>há divergência na doutrina sobre o assunto, mas as bancas inclinam-se ao entendimento de que a nomeação dos ministros de tribunais superiores é um ato administrativo complexo, uma vez que depende da conjugação de vontades do Presidente da República e do Senado Federal (CF, art. 84, XIV)</b>.</p><p>Duas vontades autônomas de órgãos diversos formando <b>um</b> ato: é a marca do complexo.</p><p class='fb-fonte'>Resumo 03 · <i>Classificação — Formação de Vontade (Atenção!)</i></p>",
35:"<p>Errado — essa é a definição de ato <b>válido</b>. O resumo separa: <b>ato válido => é aquele praticado em conformidade com a lei, sem nenhum vício</b>; <b>ato eficaz => é o ato perfeito que já está apto a produzir efeitos</b>.</p><p>O quadro <b>ATENÇÃO!</b> dá o roteiro de três perguntas: o ato está de acordo com as leis? SIM = <b>VÁLIDO</b>. Concluiu seu ciclo ou etapas de formação? SIM = <b>PERFEITO</b>. Está apto a produzir efeitos? SIM = <b>EFICAZ</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Classificação — Quanto à Exequibilidade (Atenção!)</i></p>",
36:"<p>Certo pela letra do item 03: <b>ato pendente => é o ato perfeito que ainda depende de algum evento posterior para produzir efeitos como termo, condição, aprovação, autorização, etc.</b></p><p>Complete a série: <b>perfeito</b> (concluiu todas as etapas da formação), <b>eficaz</b> (perfeito e apto a produzir efeitos) e <b>consumado</b> (já produziu todos os efeitos que estava apto a produzir).</p><p class='fb-fonte'>Resumo 03 · <i>Classificação — Quanto à Exequibilidade</i></p>",
37:"<p>Certo nas duas partes, itens 01 e 02 do quadro de <b>ATOS NORMATIVOS</b>: <b>possuem efeitos gerais (não têm destinatários determinados) e abstratos (atinge todos aqueles que se situam em idêntica situação jurídica)</b> e <b>não podem inovar o ordenamento jurídico</b>.</p><p>O resumo ainda registra que são atos administrativos <b>apenas em sentido formal</b> (e não material). Exemplos pelo mnemônico <b>RE-DE-IN-RE-DE-RE</b>: regulamento, deliberação, instrução normativa, regimento, decreto e resolução.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Normativos</i></p>",
38:"<p>Errado, inverteu a hierarquia. O item 03 do quadro de <b>ATOS ORDINATÓRIOS</b> diz: <b>são inferiores em hierarquia aos atos normativos</b>.</p><p>O resto do quadro: eles têm <b>efeitos internos, endereçados aos servidores públicos</b>, visam disciplinar o funcionamento da Administração e <b>possuem fundamento no poder hierárquico</b>. Exemplos pelo mnemônico <b>C-O-P-A</b>: circular, ordem de serviço, portaria e aviso.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Ordinatórios</i></p>",
39:"<p>Certo. É a questão-exemplo do resumo, com gabarito na letra <b>portaria</b>, e ele repete no quadro <b>ATENÇÃO!</b>: <b>instituir comissão encarregada de elaborar proposta de edital de concurso público => PORTARIA (ato ordinatório)</b>.</p><p>No mesmo quadro vem o par que a banca embaralha: <b>nomear servidor para cargo de confiança => DECRETO</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Ordinatórios (Atenção!)</i></p>",
40:"<p>Errado no instrumento. O resumo traz a questão-exemplo com gabarito <b>decreto</b> e consolida no quadro <b>ATENÇÃO!</b>: <b>nomear servidor para cargo de confiança => DECRETO (ato normativo)</b>.</p><p>A portaria é o ato usado para <b>instituir comissão</b> encarregada de elaborar proposta de edital de concurso público. São as duas linhas do mesmo quadro — memorize em par.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Ordinatórios (Atenção!)</i></p>",
41:"<p>Certo pela letra do item 03 dos <b>ATOS NEGOCIAIS</b>: <b>LICENÇA => é o ato administrativo vinculado e definitivo. Permite ao particular exercer direitos subjetivos</b>.</p><p>Contraste com as vizinhas, que são <b>discricionárias e precárias</b>: a <b>autorização</b> e a <b>permissão</b>. Licença é a única do trio que é vinculada e definitiva.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Negociais</i></p>",
42:"<p>Certo, é o item 04 do quadro: <b>AUTORIZAÇÃO => é o ato unilateral, discricionário e precário (revogável a qualquer tempo) expedido para a realização de serviços ou a utilização de bens públicos no interesse predominante do particular</b>.</p><p>O exemplo do resumo é a <b>mesa de bar em calçada</b> — e ele reforça: <b>pode ser revogada a qualquer tempo pela Administração</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Negociais</i></p>",
43:"<p>Errado. O quadro <b>ATENÇÃO</b> do resumo faz a separação: <b>permissão de uso de bem público = ato administrativo</b>; <b>permissão de serviço público = contrato administrativo (de adesão)</b>.</p><p>A razão está na linha anterior: <b>em caso de delegação de serviços públicos, a permissão deve ser formalizada mediante um “contrato de adesão”, precedido de licitação (ou seja, não constitui um ato administrativo)</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Negociais (Atenção)</i></p>",
44:"<p>Certo, é a lista do item 03 dos <b>ATOS ENUNCIATIVOS</b>, com o mnemônico <b>CAPA</b>: <b>C</b>ertidão (cópia de informações registradas em banco de dados) · <b>A</b>testado (declaração sobre algum fato) · <b>P</b>arecer (opinião técnica sobre determinada situação) · <b>A</b>postila (averbação para corrigir ou atualizar dados).</p><p>Guarde o regime deles: <b>a rigor, não constituem manifestação de vontade da Administração; por isso são considerados meros atos da Administração</b> — administrativos só em sentido formal.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies — Atos Enunciativos</i></p>",
45:"<p>Errado — trocou revogação por anulação. No quadro de formas de extinção: <b>revogação é o desfazimento de atos legais, por motivos de conveniência e oportunidade</b>; <b>anulação é o desfazimento de atos ilegais</b>.</p><p>Esse par volta no quadro final do resumo: revogação incide sobre atos <b>LEGAIS</b> (sem vício), anulação sobre atos <b>ILEGAIS</b> com vícios <b>insanáveis</b> e convalidação sobre atos <b>ILEGAIS</b> com vícios <b>sanáveis</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Extinção dos Atos Administrativos</i></p>",
46:"<p>Certo, e é a questão-exemplo do resumo com este mesmo enredo do parque de diversões: o gabarito é <b>caducidade, por força de ilegalidade superveniente causada pela alteração legislativa, sem culpa do beneficiário do ato</b>.</p><p>A definição que sustenta: <b>caducidade, porque uma norma jurídica posterior tornou inviável a permanência da situação antes permitida pelo ato</b>. O resumo repete o caso na questão sobre o prefeito e o plano diretor, também com gabarito caducidade.</p><p class='fb-fonte'>Resumo 03 · <i>Extinção — Caducidade</i></p>",
47:"<p>Certo. É a definição do resumo — <b>cassação, por descumprimento de condição fundamental para que o ato pudesse ser mantido</b> — e é o enunciado da questão-exemplo em que a Administração desfaz o ato porque o destinatário <b>descumpriu condições obrigatórias</b> para continuar a desfrutar da situação jurídica: gabarito <b>cassação</b>.</p><p>Distinga da caducidade: lá o que muda é a <b>lei</b>; aqui, o que falha é o <b>beneficiário</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Extinção — Cassação</i></p>",
48:"<p>Errado no sujeito. No resumo: <b>renúncia, pela qual se extinguem os efeitos do ato porque o PRÓPRIO BENEFICIÁRIO abriu mão de uma vantagem de que desfrutava</b>.</p><p>O exemplo dele é o <b>servidor inativo que abre mão da aposentadoria para reassumir cargo na Administração</b>. Quando é a Administração que desfaz o ato, estamos em revogação, anulação ou cassação — não em renúncia.</p><p class='fb-fonte'>Resumo 03 · <i>Extinção — Renúncia</i></p>",
49:"<p>Certo, é a lista literal das <b>OBSERVAÇÕES</b> do resumo sobre os atos que não podem ser revogados: <b>os atos consumados e exauridos</b> (ex.: concessão de licença funcional já gozada por servidor), <b>os geradores de direitos adquiridos (súmula 473 do STF)</b>, <b>os meros atos administrativos</b> (certidões, atestados, parecer), <b>os atos complexos</b> e <b>os atos vinculados</b>.</p><p>Antes dela vem a premissa: a revogação é o desfazimento de atos <b>legais e eficazes</b>, por conveniência e oportunidade.</p><p class='fb-fonte'>Resumo 03 · <i>Extinção — Observações (atos irrevogáveis)</i></p>",
50:"<p>Errado. O resumo é categórico: <b>já os vícios de motivo, objeto e finalidade são insanáveis, ou seja, NÃO admitem convalidação</b>.</p><p>Sanáveis são os dos elementos <b>competência</b> (exceto competência exclusiva e competência quanto à matéria) e <b>forma</b> (exceto forma essencial à validade do ato) — o mnemônico do material é <b>FOCO (FOrma e COmpetência)</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Convalidação dos Atos Administrativos</i></p>",
51:"<p>Certo pelo quadro de formas de convalidação: <b>ratificação — correção do vício de forma ou competência</b>.</p><p>É o caso da questão-exemplo em que a escrivã pratica ato de competência da chefe de departamento e esta, sem lesão ao interesse público nem prejuízo a terceiro, <b>pode convalidar o ato, por meio da ratificação, cujos efeitos retroagem à data da edição do ato originário</b>. As outras duas formas: <b>reforma</b> (retira o objeto inválido e mantém o válido — anulação parcial) e <b>conversão</b> (mantém a parte válida, retira a inválida e a substitui por uma nova parte válida).</p><p class='fb-fonte'>Resumo 03 · <i>Convalidação — formas</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"Atos administrativos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
