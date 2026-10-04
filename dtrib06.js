/* Direito Tributário — Módulo 06: Obrigação tributária — fato gerador e sujeitos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib06 = (function(){
"use strict";

var CARDS = [
  ["Que parte do CTN trata da obrigação tributária?","O <b>Título II do Livro Segundo</b>, <b>arts. 113 a 138</b>: disposições gerais (113) · fato gerador (114-118) · sujeito ativo (119-120) · sujeito passivo (121-127) · <b>responsabilidade tributária (128-138)</b>, esta no próximo módulo."],
  ["O que é obrigação tributária?","O <b>vínculo</b> que une <b>credor e devedor</b>, e que surge quando se <b>consuma um fato previsto na legislação tributária</b>."],
  ["Quais são as duas espécies de obrigação? (art. 113)","<b>PRINCIPAL</b> e <b>ACESSÓRIA</b>."],
  ["O que caracteriza a obrigação PRINCIPAL?","<b>Surge com a ocorrência do FATO GERADOR</b>, tem por objeto o <b>pagamento de tributo OU PENALIDADE PECUNIÁRIA</b> e <b>extingue-se junto com o crédito</b> dela decorrente. É de conteúdo <b>PATRIMONIAL</b> — entregar dinheiro ao Fisco."],
  ["O que caracteriza a obrigação ACESSÓRIA?","<b>Decorre da LEGISLAÇÃO tributária</b> e tem por objeto <b>prestações positivas ou negativas</b> no interesse da arrecadação e da fiscalização. É de conteúdo <b>NÃO patrimonial</b>."],
  ["Quais as três formas da obrigação acessória?","<b>Fazer</b> (escriturar livros fiscais) · <b>não fazer</b> (não receber mercadoria sem documento fiscal) · <b>tolerar que se faça</b> (não impedir o acesso da fiscalização)."],
  ["Principal nasce de quê e acessória de quê?","<b>Principal → da LEI</b> (surge com o fato gerador). <b>Acessória → da LEGISLAÇÃO tributária</b> — pode vir de decreto ou instrução normativa."],
  ["O que acontece quando a obrigação acessória é descumprida?","<b>Pelo simples fato da inobservância, converte-se em obrigação PRINCIPAL relativamente à PENALIDADE PECUNIÁRIA</b> (multa). Ex.: não entregar a declaração do IR gera multa — e a multa é obrigação principal."],
  ["A obrigação acessória existe sem a principal?","<b>SIM.</b> O isento ou imune não paga o tributo, mas <b>continua obrigado</b> à escrituração fiscal. A acessória é autônoma."],
  ["Por que a multa é obrigação principal?","Porque o art. 113, § 1º, define o objeto da principal como “pagamento de <b>tributo OU penalidade pecuniária</b>”. Multa <b>não é tributo</b>, mas é obrigação principal."],

  ["Hipótese de incidência × fato gerador","<b>Hipótese de incidência:</b> a <b>previsão legal abstrata</b> de uma situação. <b>Fato gerador:</b> o <b>acontecimento no mundo real</b> que realiza a previsão. O fato gerador é a hipótese que saiu do papel."],
  ["Qual o fato gerador da obrigação PRINCIPAL? (art. 114)","A <b>situação definida em LEI</b> como <b>necessária e suficiente</b> à sua ocorrência."],
  ["Qual o fato gerador da obrigação ACESSÓRIA? (art. 115)","<b>Qualquer situação que, na forma da LEGISLAÇÃO aplicável</b>, imponha a <b>prática ou a abstenção de ato</b> que não configure obrigação principal."],
  ["Compare os arts. 114 e 115","<b>114 — principal:</b> situação definida em <b>LEI</b>, <b>necessária e suficiente</b>. <b>115 — acessória:</b> qualquer situação da <b>LEGISLAÇÃO</b> aplicável. Trocar “lei” por “legislação” entre os dois é pegadinha."],
  ["O que é fato gerador CONTINUADO?","Aquele que <b>leva um período para se completar</b>, em geral um ano: <b>IPVA, IPTU e ITR</b>."],
  ["E o fato gerador do IR?","É <b>complexivo</b> (por período), <b>não continuado</b> — forma-se pela soma dos fatos ao longo do exercício."],
  ["Quando se considera ocorrido o fato gerador? (art. 116)","<b>Situação de FATO</b> → desde o momento em que se verifiquem as <b>circunstâncias materiais</b>.<br><b>Situação JURÍDICA</b> → desde o momento em que esteja <b>definitivamente constituída</b>.<br><b>Salvo disposição de lei em contrário.</b>"],
  ["O que é situação DE FATO?","A definida em lei como fato gerador e que <b>não foi definida em outro ramo do direito</b> como capaz de gerar efeitos jurídicos — <b>produz só efeitos econômicos</b>. Ex.: o <b>ISS</b> na composição gráfica ocorre quando o serviço é materialmente executado."],
  ["O que é situação JURÍDICA?","A que <b>já estava prevista em outro ramo do direito</b> (civil, empresarial), com consequências predeterminadas. Ex.: o <b>ITBI</b> — o Código Civil (art. 1.245) diz que a transmissão se dá com o <b>registro do título no Registro de Imóveis</b>."],
  ["O que permite o art. 116, parágrafo único?","Que a <b>autoridade administrativa DESCONSIDERE</b> atos ou negócios jurídicos praticados com a finalidade de <b>DISSIMULAR</b> a <b>ocorrência do fato gerador</b> ou a <b>natureza dos elementos constitutivos</b> da obrigação."],
  ["O que é ELISÃO fiscal?","Conduta <b>LÍCITA</b> — o <b>planejamento tributário</b>, que busca reduzir ou eliminar o tributo devido por meios legais."],
  ["O que é ELUSÃO fiscal?","Conduta <b>ILÍCITA</b>: o contribuinte <b>simula o negócio jurídico</b>, dissimulando o fato gerador. Oculta-se a <b>essência</b> alterando a <b>forma</b> — daí “<b>abuso de forma jurídica</b>”."],
  ["O que é EVASÃO fiscal?","Conduta <b>ILÍCITA</b> praticada para <b>ludibriar a fiscalização</b>, <b>ocultando parcial ou totalmente</b> a ocorrência do fato gerador."],
  ["Exemplo de elusão no ITBI","Imóveis incorporados ao patrimônio de pessoas jurídicas <b>para uso próprio de particulares</b>, com o fim de dissimular o fato gerador. A autoridade pode <b>desconsiderar o negócio</b> e cobrar o tributo."],
  ["Negócio sob condição SUSPENSIVA: quando ocorre o fato gerador? (art. 117, I)","<b>Desde o momento do IMPLEMENTO da condição.</b> Ex.: doação de carro <b>se</b> André passar no concurso → o ITCMD só incide quando ele passar."],
  ["Negócio sob condição RESOLUTÓRIA: quando ocorre? (art. 117, II)","<b>Desde o momento da PRÁTICA do ato ou da CELEBRAÇÃO do negócio.</b> Ex.: doação com a condição de não se separar → o ITCMD incide já na doação; a separação futura não importa."],
  ["A que situação se aplica o art. 117?","Apenas às <b>situações JURÍDICAS</b> — “para os efeitos do inciso II do artigo anterior”."],
  ["O que diz o art. 118 do CTN?","A definição legal do fato gerador é interpretada <b>abstraindo-se</b>: <b>I)</b> da <b>validade jurídica</b> dos atos efetivamente praticados por contribuintes, responsáveis ou terceiros; <b>II)</b> dos <b>efeitos dos fatos</b> efetivamente ocorridos."],
  ["O que é o PECUNIA NON OLET?","“<b>Dinheiro não cheira</b>” — ao Fisco não importa se a atividade é <b>lícita ou ilícita</b>. Quem aufere renda é sujeito passivo do IR, venha ela de onde vier."],
  ["Exemplo do art. 118 no ICMS","O fato gerador do ICMS na telefonia é a <b>disponibilização da linha</b>. Mesmo havendo <b>furto de sinal por clonagem</b>, o fato gerador ocorre — abstrai-se a validade jurídica dos atos."],

  ["Quem é o SUJEITO ATIVO? (art. 119)","A <b>pessoa jurídica de DIREITO PÚBLICO titular da competência para EXIGIR</b> o cumprimento da obrigação. Em regra, o ente instituidor do tributo."],
  ["Quem é o SUJEITO PASSIVO da obrigação principal? (art. 121)","A pessoa <b>obrigada ao pagamento de tributo ou penalidade pecuniária</b>."],
  ["Quem é o sujeito passivo da obrigação ACESSÓRIA? (art. 122)","A pessoa <b>obrigada às prestações que constituam o seu objeto</b>."],
  ["Contribuinte × responsável (art. 121, p.ú.)","<b>CONTRIBUINTE:</b> tem <b>relação pessoal e direta</b> com a situação que constitua o fato gerador.<br><b>RESPONSÁVEL:</b> <b>sem revestir a condição de contribuinte</b>, sua obrigação decorre de <b>disposição expressa de LEI</b>."],
  ["O que diz o art. 123 sobre convenções particulares?","As convenções particulares relativas à <b>responsabilidade pelo pagamento de tributos</b> <b>NÃO podem ser opostas à Fazenda Pública</b> para modificar a definição legal do sujeito passivo — <b>salvo disposição de lei em contrário</b>."],
  ["Exemplo clássico do art. 123","André empresta o carro a Bruno com contrato em que Bruno paga o IPVA. Bruno não paga. O contrato <b>vale entre as partes</b>, mas <b>não produz efeito contra o Fisco</b>: <b>André responde sozinho</b>."],
  ["Qual a ressalva do art. 123 que já caiu em prova?","O “<b>salvo disposição de lei em contrário</b>”: se <b>lei estadual</b> admitir que as partes indiquem o sujeito passivo do IPVA no contrato, a convenção particular <b>será válida naquele Estado</b>."],

  ["Quem é solidariamente obrigado? (art. 124)","<b>I)</b> as pessoas com <b>INTERESSE COMUM</b> na situação que constitua o fato gerador da obrigação principal; <b>II)</b> as pessoas <b>expressamente designadas por LEI</b>."],
  ["A solidariedade tributária comporta benefício de ordem?","<b>NÃO</b> (art. 124, parágrafo único). O Fisco cobra de qualquer um, pelo todo, sem ordem de preferência."],
  ["Quais os três efeitos da solidariedade? (art. 125)","<b>I)</b> o <b>pagamento</b> por um <b>aproveita aos demais</b>; <b>II)</b> a <b>isenção ou remissão exonera todos</b>, <b>salvo se outorgada pessoalmente</b> a um deles — caso em que subsiste a solidariedade quanto ao <b>saldo</b>; <b>III)</b> a <b>interrupção da prescrição</b>, a favor ou contra um, <b>favorece ou prejudica os demais</b>. Tudo <b>salvo disposição de lei em contrário</b>."],
  ["Exemplo do art. 125, II","André e Bruno são solidários. Lei isenta os <b>ex-combatentes</b>, condição <b>pessoal só de André</b>. Bruno <b>não é exonerado</b>: continua obrigado pelo <b>saldo</b>, descontada a parcela isenta."],
  ["De que a capacidade tributária PASSIVA independe? (art. 126)","<b>I)</b> da <b>capacidade civil</b> das pessoas naturais; <b>II)</b> de estar a pessoa natural sujeita a <b>medidas que privem ou limitem</b> o exercício de atividades civis, comerciais ou profissionais, ou a administração de seus bens; <b>III)</b> de estar a pessoa jurídica <b>regularmente constituída</b> — basta que configure uma <b>unidade econômica ou profissional</b>."],
  ["Exemplo do art. 126, I","Criança de 7 anos que recebe receita de publicidade acima do limite de isenção do IR é <b>contribuinte</b> — a capacidade tributária <b>independe da capacidade civil</b>."],
  ["Menor é contribuinte, mas quem responde?","Nos casos de <b>impossibilidade de exigência do contribuinte</b>, os <b>pais respondem</b> pelos tributos devidos pelos filhos menores (art. 134)."],
  ["Exemplo do art. 126, II","Médico <b>suspenso</b> pelo Conselho continua atendendo. A autuação de <b>ISS com multa e juros está correta</b>: a capacidade tributária passiva independe de estar a pessoa autorizada ao exercício profissional."],
  ["Exemplo do art. 126, III","Empresa <b>irregular, sem registro</b>, que funciona como <b>unidade econômica</b>, é sujeito passivo normalmente. A informalidade não afasta a tributação."],

  ["Quem escolhe o domicílio tributário?","<b>Em regra, o próprio contribuinte ou responsável</b> — a <b>eleição</b> é a regra; os incisos do art. 127 só valem <b>NA FALTA de eleição</b>."],
  ["Qual o domicílio das PESSOAS NATURAIS, na falta de eleição? (art. 127, I)","Sua <b>residência habitual</b> ou, sendo esta <b>incerta ou desconhecida</b>, o <b>centro habitual de sua atividade</b>."],
  ["E das PESSOAS JURÍDICAS DE DIREITO PRIVADO? (art. 127, II)","O <b>lugar da sua SEDE</b> ou, em relação aos atos ou fatos que derem origem à obrigação, o de <b>cada estabelecimento</b>."],
  ["E das PESSOAS JURÍDICAS DE DIREITO PÚBLICO? (art. 127, III)","<b>Qualquer de suas repartições</b> no território da entidade tributante."],
  ["O que diz o art. 127, § 1º?","Não cabendo a aplicação de nenhum dos incisos, o domicílio será o <b>lugar da situação dos BENS</b> ou da <b>ocorrência dos atos ou fatos</b> que deram origem à obrigação."],
  ["Exemplo do § 1º","Andarilho civilmente capaz, sem domicílio civil, sem residência fixa e sem endereço certo de atividade: o domicílio é o <b>lugar dos seus bens ou da ocorrência do fato gerador</b>."],
  ["O que diz o art. 127, § 2º?","A autoridade administrativa <b>pode RECUSAR o domicílio eleito</b> quando ele <b>impossibilite ou dificulte a arrecadação ou a fiscalização</b> — aplicando-se então a regra do § 1º."],
  ["Exemplo da recusa do domicílio (§ 2º)","Empresa elege como domicílio um estabelecimento fabril <b>distante do centro de distribuição</b>, dificultando a fiscalização. A autoridade pode <b>rejeitar</b> e fixar o <b>centro de distribuição</b>, lugar da situação dos bens."],
  ["Segundo exemplo da recusa","Sociedade muda a sede para cidade <b>a que só se chega de barco</b>, com mais de um dia de viagem, mantendo filiais na capital. <b>Não assiste razão</b> à empresa que impugna autuações nas filiais: o domicílio eleito pode ser recusado."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023</b> <b>não alterou os arts. 113 a 127</b> do CTN — a teoria da obrigação tributária segue intacta. O que muda é o entorno (IBS, CBS e Imposto Seletivo terão suas próprias leis complementares, com regras próprias de sujeição passiva)."]
];

var QS = [
  ["A obrigação tributária é principal ou acessória.","C","CTN art. 113","São as duas únicas espécies."],
  ["A obrigação principal surge com a ocorrência do fato gerador e tem por objeto o pagamento de tributo ou penalidade pecuniária.","C","CTN art. 113 § 1º","Extingue-se junto com o crédito dela decorrente."],
  ["A obrigação principal tem por objeto exclusivamente o pagamento de tributo.","E","CEBRASPE","Alcança também a <b>penalidade pecuniária</b> — a multa é obrigação principal."],
  ["A obrigação acessória decorre da legislação tributária e tem por objeto prestações positivas ou negativas no interesse da arrecadação e da fiscalização.","C","CTN art. 113 § 2º","Por isso pode ser instituída por decreto."],
  ["A obrigação acessória somente pode ser instituída por lei em sentido estrito.","E","FGV","Decorre da <b>legislação</b> tributária, conceito amplo do art. 96."],
  ["A obrigação acessória, pelo simples fato da sua inobservância, converte-se em obrigação principal relativamente à penalidade pecuniária.","C","CTN art. 113 § 3º","A multa nasce como obrigação principal."],
  ["A existência de obrigação acessória pressupõe necessariamente a existência de obrigação principal.","E","FCC","O isento e o imune não pagam tributo, mas continuam obrigados à escrituração."],
  ["A obrigação acessória caracteriza-se por conteúdo não patrimonial, consubstanciado em obrigações de fazer e não fazer.","C","CEBRASPE","A principal é a de conteúdo patrimonial."],
  ["Não impedir o acesso da fiscalização ao estabelecimento é exemplo de obrigação acessória.","C","FGV","É a modalidade de tolerar que se faça."],
  ["Fato gerador da obrigação principal é a situação definida em lei como necessária e suficiente à sua ocorrência.","C","CTN art. 114","Note: em LEI, e necessária E suficiente."],
  ["Fato gerador da obrigação acessória é qualquer situação que, na forma da lei, imponha a prática ou a abstenção de ato.","E","CEBRASPE","Na forma da <b>LEGISLAÇÃO</b> aplicável, e não da lei."],
  ["A hipótese de incidência é a previsão legal abstrata, ao passo que o fato gerador é o acontecimento verificado no mundo real.","C","FCC","O fato gerador realiza a hipótese."],
  ["O IPVA, o IPTU e o ITR possuem fato gerador continuado.","C","FGV","Levam um período, em geral um ano, para se completar."],
  ["O imposto de renda possui fato gerador continuado.","E","FCC","O IR tem fato gerador <b>complexivo</b>, formado pela soma dos fatos do período."],
  ["Salvo disposição de lei em contrário, considera-se ocorrido o fato gerador, tratando-se de situação de fato, desde o momento em que se verifiquem as circunstâncias materiais.","C","CTN art. 116 I","E, na situação jurídica, desde que esteja definitivamente constituída."],
  ["Tratando-se de situação jurídica, considera-se ocorrido o fato gerador desde o momento em que se verifiquem as circunstâncias materiais necessárias à produção de seus efeitos.","E","CEBRASPE","Isso é a situação <b>de fato</b>; a jurídica exige estar definitivamente constituída."],
  ["No ITBI, a transmissão do bem imóvel se dá com o registro do título translativo no Registro de Imóveis, por se tratar de situação jurídica.","C","FGV","O conceito vem do art. 1.245 do Código Civil."],
  ["A autoridade administrativa poderá desconsiderar atos ou negócios jurídicos praticados com a finalidade de dissimular a ocorrência do fato gerador do tributo.","C","CTN art. 116 p.ú.","Também alcança a dissimulação da natureza dos elementos constitutivos da obrigação."],
  ["A elisão fiscal é conduta ilícita que oculta a ocorrência do fato gerador.","E","FCC","Elisão é <b>lícita</b> — é o planejamento tributário. Quem oculta o fato gerador é a evasão."],
  ["A elusão fiscal caracteriza-se pela simulação do negócio jurídico, sendo também denominada abuso de forma jurídica.","C","CEBRASPE","Altera-se a forma para ocultar a essência."],
  ["A evasão fiscal é conduta lícita de planejamento tributário.","E","FGV","É conduta <b>ilícita</b>, praticada para ludibriar a fiscalização."],
  ["Incorporar imóveis ao patrimônio de pessoa jurídica para uso próprio de particulares, dissimulando o fato gerador do ITBI, configura elusão fiscal e autoriza a desconsideração do negócio.","C","FGV","Aplicação do parágrafo único do art. 116."],
  ["Sendo suspensiva a condição, os atos ou negócios jurídicos condicionais reputam-se perfeitos e acabados desde o momento de seu implemento.","C","CTN art. 117 I","Doação condicionada à aprovação em concurso: o ITCMD incide na aprovação."],
  ["Sendo resolutória a condição, o negócio reputa-se perfeito e acabado desde o momento do implemento da condição.","E","CEBRASPE","Na resolutória, desde a <b>prática do ato ou celebração do negócio</b>."],
  ["A definição legal do fato gerador é interpretada abstraindo-se da validade jurídica dos atos efetivamente praticados pelos contribuintes, responsáveis ou terceiros.","C","CTN art. 118 I","É o fundamento do pecunia non olet."],
  ["Pelo princípio do pecunia non olet, rendimentos de atividade ilícita não são tributáveis.","E","FCC","São tributáveis — ao Fisco não importa a licitude da atividade."],
  ["Ocorre o fato gerador do ICMS na disponibilização da linha telefônica, ainda que haja furto de sinal por clonagem.","C","FGV","Abstrai-se a validade jurídica dos atos praticados."],
  ["Sujeito ativo da obrigação tributária é a pessoa jurídica de direito público titular da competência para exigir o seu cumprimento.","C","CTN art. 119","Em regra, o ente instituidor do tributo."],
  ["Sujeito passivo da obrigação principal é a pessoa obrigada ao pagamento de tributo ou penalidade pecuniária.","C","CTN art. 121","E o da acessória é o obrigado às prestações que constituam o seu objeto."],
  ["Contribuinte é aquele que, sem revestir a condição de responsável, tem obrigação decorrente de disposição expressa de lei.","E","CEBRASPE","Inverteu: <b>contribuinte</b> tem relação pessoal e direta; <b>responsável</b> é que decorre de lei."],
  ["Responsável é aquele que, sem revestir a condição de contribuinte, tem sua obrigação decorrente de disposição expressa de lei.","C","CTN art. 121 p.ú. II","Sem relação pessoal e direta com o fato gerador."],
  ["As convenções particulares relativas à responsabilidade pelo pagamento de tributos não podem ser opostas à Fazenda Pública, salvo disposição de lei em contrário.","C","CTN art. 123","A ressalva final é cobrada com frequência."],
  ["Contrato de empréstimo de veículo em que o comodatário assume o IPVA é nulo entre as partes e ineficaz perante o Fisco.","E","FGV","O contrato é <b>válido entre as partes</b>; apenas não é oponível à Fazenda."],
  ["Se lei estadual admitir a indicação do sujeito passivo do IPVA pelas partes no contrato, será válida naquele Estado a convenção particular que os indique.","C","FCC","É exatamente a ressalva “salvo disposição de lei em contrário”."],
  ["São solidariamente obrigadas as pessoas que tenham interesse comum na situação que constitua o fato gerador da obrigação principal e as expressamente designadas por lei.","C","CTN art. 124","São os dois incisos do artigo."],
  ["A solidariedade tributária comporta benefício de ordem.","E","CTN art. 124 p.ú.","Não comporta — o Fisco cobra de qualquer devedor, pelo todo."],
  ["Salvo disposição de lei em contrário, o pagamento efetuado por um dos obrigados aproveita aos demais.","C","CTN art. 125 I","Primeiro efeito da solidariedade."],
  ["A isenção ou remissão de crédito exonera todos os obrigados, ainda quando outorgada pessoalmente a um deles.","E","CEBRASPE","Se for pessoal, <b>subsiste a solidariedade</b> quanto ao saldo para os demais."],
  ["A interrupção da prescrição, em favor ou contra um dos obrigados, favorece ou prejudica aos demais.","C","CTN art. 125 III","Terceiro efeito, cobrado com frequência."],
  ["Se lei isenta os ex-combatentes e apenas um dos codevedores solidários ostenta essa condição, o outro fica integralmente exonerado.","E","FGV","Permanece obrigado pelo <b>saldo</b>, descontada a parcela isenta."],
  ["A capacidade tributária passiva independe da capacidade civil das pessoas naturais.","C","CTN art. 126 I","Menor de idade pode ser contribuinte."],
  ["A capacidade tributária passiva depende de achar-se a pessoa natural regularmente autorizada ao exercício de atividades profissionais.","E","CEBRASPE","Independe — médico suspenso que segue atendendo deve o ISS."],
  ["A capacidade tributária passiva da pessoa jurídica depende de sua regular constituição.","E","FCC","Basta que configure uma <b>unidade econômica ou profissional</b>."],
  ["Criança que aufere rendimentos superiores ao limite de isenção pode ser considerada contribuinte do imposto de renda.","C","FGV","Aplicação direta do art. 126, I."],
  ["Em regra, o domicílio tributário é eleito pelo próprio contribuinte ou responsável.","C","CTN art. 127","Os incisos só se aplicam na falta de eleição."],
  ["Na falta de eleição, o domicílio tributário da pessoa natural é sua residência habitual ou, sendo incerta ou desconhecida, o centro habitual de sua atividade.","C","CTN art. 127 I","Ordem sucessiva dentro do próprio inciso."],
  ["Na falta de eleição, o domicílio tributário da pessoa jurídica de direito privado é o lugar de sua sede ou, quanto aos atos que derem origem à obrigação, o de cada estabelecimento.","C","CTN art. 127 II","Regra do estabelecimento autônomo."],
  ["Na falta de eleição, o domicílio das pessoas jurídicas de direito público é a sede do respectivo órgão central.","E","FGV","É <b>qualquer de suas repartições</b> no território da entidade tributante."],
  ["Não cabendo a aplicação das regras dos incisos do art. 127, considera-se domicílio o lugar da situação dos bens ou da ocorrência dos atos ou fatos que deram origem à obrigação.","C","CTN art. 127 § 1º","Regra de fechamento do sistema."],
  ["A autoridade administrativa pode recusar o domicílio eleito quando ele impossibilite ou dificulte a arrecadação ou a fiscalização do tributo.","C","CTN art. 127 § 2º","Aplica-se então a regra do § 1º."],
  ["A autoridade administrativa pode recusar o domicílio eleito por mera conveniência da fiscalização, independentemente de qualquer dificuldade concreta.","E","CEBRASPE","Exige-se que o domicílio <b>impossibilite ou dificulte</b> a arrecadação ou a fiscalização."],
  ["Sociedade que transfere a sede para localidade de acesso extremamente difícil, mantendo filiais na capital, pode ter o domicílio eleito recusado pela autoridade administrativa.","C","FGV","Caso típico de aplicação do § 2º."],
  ["O sujeito ativo da obrigação tributária pode ser pessoa jurídica de direito privado delegatária da capacidade tributária ativa.","C","STJ Súmula 396","Regra do art. 119 fala em direito público, mas o STJ admitiu a exceção da CNA."],
  ["A obrigação acessória tem por sujeito passivo a pessoa obrigada às prestações que constituam o seu objeto.","C","CTN art. 122","Pode não coincidir com o sujeito passivo da principal."]
];

var EX = {
S1:{t:"sort", instr:"Obrigação principal ou acessória?",
  buckets:["Principal","Acessória"],
  items:[["Pagar o tributo",0],["Pagar a multa",0],
         ["Escriturar livros fiscais",1],["Emitir nota fiscal",1],
         ["Não impedir o acesso da fiscalização",1]],
  why:"Principal é a de conteúdo patrimonial — entregar dinheiro ao Fisco."},

S2:{t:"match", instr:"De onde nasce cada obrigação?",
  pairs:[["Principal","Da LEI — surge com o fato gerador"],
         ["Acessória","Da LEGISLAÇÃO tributária — pode vir de decreto"]],
  why:"Por isso a nota fiscal pode ser exigida por instrução normativa."},

S3:{t:"gap", instr:"Complete o art. 113, § 3º",
  before:"A obrigação acessória, pelo simples fato da sua inobservância, converte-se em obrigação principal relativamente à ",
  after:".",
  options:["penalidade pecuniária","obrigação de fazer","exigência do tributo"], answer:0,
  why:"A multa nasce como obrigação principal — por isso o art. 113, § 1º, fala em tributo OU penalidade."},

S4:{t:"mc", instr:"Contribuinte isento continua obrigado a escriturar livros fiscais. Por quê?",
  options:["A obrigação acessória é autônoma e existe sem a principal",
           "A isenção suspende apenas o prazo de pagamento",
           "Porque a isenção converte a principal em acessória",
           "Porque toda isenção é condicional"],
  answer:0,
  why:"Vale igualmente para o imune."},

S5:{t:"match", instr:"Ligue cada conceito à sua definição",
  pairs:[["Hipótese de incidência","Previsão legal abstrata da situação"],
         ["Fato gerador","O acontecimento verificado no mundo real"]],
  why:"O fato gerador é a hipótese que saiu do papel."},

S6:{t:"sort", instr:"Fato gerador do art. 114 ou do art. 115?",
  buckets:["Principal (art. 114)","Acessória (art. 115)"],
  items:[["Situação definida em LEI",0],["Necessária e suficiente à ocorrência",0],
         ["Qualquer situação da LEGISLAÇÃO aplicável",1],
         ["Impõe a prática ou a abstenção de ato",1]],
  why:"Trocar lei por legislação entre os dois artigos é pegadinha frequente."},

S7:{t:"sort", instr:"Como é o fato gerador de cada tributo?",
  buckets:["Continuado","Complexivo"],
  items:[["IPVA",0],["IPTU",0],["ITR",0],["Imposto de Renda",1]],
  why:"O IR se forma pela soma dos fatos ao longo do período."},

S8:{t:"sort", instr:"Situação de fato ou situação jurídica?",
  buckets:["Situação DE FATO","Situação JURÍDICA"],
  items:[["Produz apenas efeitos econômicos",0],
         ["ISS na execução material do serviço",0],
         ["Já prevista em outro ramo do direito",1],
         ["ITBI — registro do título no Registro de Imóveis",1]],
  why:"Na de fato, contam as circunstâncias materiais; na jurídica, estar definitivamente constituída."},

S9:{t:"match", instr:"Ligue cada conduta à sua natureza",
  pairs:[["Elisão","Lícita — planejamento tributário"],
         ["Elusão","Ilícita — simulação, abuso de forma jurídica"],
         ["Evasão","Ilícita — oculta a ocorrência do fato gerador"]],
  why:"Só a elisão é lícita; as outras duas são ilícitas por caminhos diferentes."},

S10:{t:"multi", instr:"O art. 116, parágrafo único, permite desconsiderar atos praticados para dissimular:",
  options:["A ocorrência do fato gerador do tributo",
           "A natureza dos elementos constitutivos da obrigação tributária",
           "O domicílio tributário eleito",
           "A capacidade civil do contribuinte"],
  answers:[0,1],
  why:"São as duas hipóteses do dispositivo — e nada mais."},

S11:{t:"sort", instr:"Quando o negócio condicional se reputa perfeito e acabado?",
  buckets:["Condição SUSPENSIVA","Condição RESOLUTÓRIA"],
  items:[["Desde o momento do implemento da condição",0],
         ["Doação de carro SE for aprovado no concurso",0],
         ["Desde a prática do ato ou a celebração do negócio",1],
         ["Doação com a condição de não se separar",1]],
  why:"O art. 117 só se aplica às situações jurídicas."},

S12:{t:"mc", instr:"Pai doa carro ao filho sob condição de que ele passe no concurso. Quando incide o ITCMD?",
  options:["Quando o filho for aprovado — implemento da condição suspensiva",
           "Na data da celebração do negócio",
           "Na data da tradição do veículo",
           "Nunca — a doação condicional não é fato gerador"],
  answer:0,
  why:"Na condição resolutória seria o contrário: incide já na celebração."},

S13:{t:"wordbank", instr:"Monte o art. 118 do CTN",
  target:["a","definição","legal","do","fato","gerador","é","interpretada","abstraindo-se","da","validade","jurídica","dos","atos"],
  extra:["considerando a licitude","desde que válido o negócio","salvo atividade criminosa"],
  why:"É o fundamento do pecunia non olet."},

S14:{t:"mc", instr:"Rendimentos obtidos com atividade ilícita:",
  options:["São tributáveis — pecunia non olet",
           "São isentos, por ausência de causa lícita",
           "São imunes, por vedação ao confisco",
           "Só são tributáveis após condenação penal"],
  answer:0,
  why:"Abstrai-se a validade jurídica dos atos e os efeitos dos fatos ocorridos."},

S15:{t:"match", instr:"Quem é quem na obrigação tributária?",
  pairs:[["Sujeito ativo","Pessoa jurídica de direito público titular da competência para exigir"],
         ["Contribuinte","Tem relação pessoal e direta com o fato gerador"],
         ["Responsável","Sem ser contribuinte, obriga-se por disposição expressa de lei"]],
  why:"Inverter contribuinte e responsável é a troca mais cobrada do capítulo."},

S16:{t:"mc", instr:"André empresta o carro a Bruno, que por contrato assume o IPVA e não paga. O Fisco cobra de quem?",
  options:["De André — o contrato vale entre as partes, mas não é oponível ao Fisco",
           "De Bruno, porque assumiu a obrigação por contrato",
           "De ambos, solidariamente",
           "De ninguém — o contrato exclui a responsabilidade"],
  answer:0,
  why:"Salvo se lei estadual admitir a indicação do sujeito passivo pelas partes."},

S17:{t:"gap", instr:"Complete a ressalva do art. 123",
  before:"As convenções particulares não podem ser opostas à Fazenda Pública para modificar a definição legal do sujeito passivo, ",
  after:".",
  options:["salvo disposição de lei em contrário","em nenhuma hipótese","salvo anuência do Fisco"], answer:0,
  why:"É essa ressalva que valida a convenção quando a lei estadual a admite."},

S18:{t:"multi", instr:"Marque quem é solidariamente obrigado (art. 124)",
  options:["As pessoas com interesse comum na situação que constitua o fato gerador",
           "As pessoas expressamente designadas por lei",
           "Os sócios, em qualquer hipótese",
           "Quem figurar em convenção particular como responsável"],
  answers:[0,1],
  why:"E essa solidariedade não comporta benefício de ordem."},

S19:{t:"multi", instr:"Marque os efeitos da solidariedade (art. 125)",
  options:["O pagamento por um aproveita aos demais",
           "A isenção ou remissão exonera todos, salvo se pessoal",
           "A interrupção da prescrição favorece ou prejudica os demais",
           "A confissão de dívida por um vincula os demais"],
  answers:[0,1,2],
  why:"São três efeitos, todos salvo disposição de lei em contrário."},

S20:{t:"mc", instr:"André e Bruno são solidários. Lei isenta ex-combatentes, condição só de André. E Bruno?",
  options:["Continua obrigado pelo saldo, descontada a parcela isenta",
           "Fica integralmente exonerado",
           "Passa a responder em dobro",
           "A solidariedade se extingue para ambos"],
  answer:0,
  why:"Isenção pessoal não aproveita ao codevedor — subsiste a solidariedade quanto ao saldo."},

S21:{t:"multi", instr:"A capacidade tributária passiva INDEPENDE de quê? (art. 126)",
  options:["Da capacidade civil das pessoas naturais",
           "De estar a pessoa sujeita a medidas que limitem o exercício profissional",
           "De estar a pessoa jurídica regularmente constituída",
           "Da existência de domicílio tributário eleito"],
  answers:[0,1,2],
  why:"Para a pessoa jurídica basta configurar uma unidade econômica ou profissional."},

S22:{t:"mc", instr:"Médico suspenso pelo Conselho continua atendendo. O Município pode cobrar o ISS?",
  options:["Sim — a capacidade tributária passiva independe da autorização profissional",
           "Não, por ausência de capacidade tributária",
           "Não, porque o serviço é juridicamente inválido",
           "Só após o fim da suspensão"],
  answer:0,
  why:"Art. 126, II — e o art. 118 reforça: abstrai-se a validade dos atos."},

S23:{t:"sort", instr:"Qual o domicílio tributário NA FALTA de eleição?",
  buckets:["Pessoa natural","PJ de direito privado","PJ de direito público"],
  items:[["Residência habitual ou centro habitual da atividade",0],
         ["Sede, ou cada estabelecimento quanto aos atos que geram a obrigação",1],
         ["Qualquer de suas repartições no território da entidade tributante",2]],
  why:"Lembre: a regra geral é a ELEIÇÃO pelo próprio sujeito passivo."},

S24:{t:"order", instr:"Ordene a aplicação das regras de domicílio tributário",
  items:["O contribuinte elege seu domicílio tributário",
         "Não havendo eleição, aplicam-se os incisos do art. 127",
         "Não cabendo os incisos, vale o lugar dos bens ou da ocorrência dos fatos (§ 1º)",
         "Se o eleito dificultar a fiscalização, a autoridade recusa e aplica o § 1º"],
  why:"O § 2º é o que permite recusar — mas só diante de dificuldade concreta."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Obrigação principal e acessória",
      '<div class="box"><span class="bl">Art. 113 — duas espécies</span>'+
      '<p><b>PRINCIPAL:</b> surge com a <b>ocorrência do FATO GERADOR</b>, tem por objeto o pagamento de <b>tributo OU PENALIDADE PECUNIÁRIA</b> e extingue-se junto com o crédito dela decorrente. Conteúdo <b>PATRIMONIAL</b>.</p>'+
      '<p><b>ACESSÓRIA:</b> decorre da <b>LEGISLAÇÃO</b> tributária e tem por objeto <b>prestações positivas ou negativas</b>, no interesse da arrecadação e da fiscalização. Conteúdo <b>NÃO patrimonial</b>.</p></div>'+
      '<div class="box tip"><span class="bl">As três formas da acessória</span>'+
      '<p><b>Fazer</b> — escriturar livros fiscais.<br>'+
      '<b>Não fazer</b> — não receber mercadoria sem documento fiscal.<br>'+
      '<b>Tolerar que se faça</b> — não impedir o acesso da fiscalização.</p></div>'+
      '<div class="box trap"><span class="bl">Três detalhes que decidem questão</span>'+
      '<p><b>1)</b> A <b>MULTA é obrigação PRINCIPAL.</b> O § 1º diz “tributo <b>ou penalidade pecuniária</b>” — e multa não é tributo.</p>'+
      '<p><b>2)</b> A acessória <b>descumprida converte-se em principal</b> quanto à penalidade pecuniária (§ 3º). Não entregou a declaração do IR? A multa é obrigação principal.</p>'+
      '<p><b>3)</b> A acessória é <b>AUTÔNOMA</b>: existe sem a principal. O <b>isento e o imune</b> não pagam tributo, mas continuam escriturando.</p>'+
      '<p class="mn"><em>Principal nasce da <b>LEI</b>; acessória, da <b>LEGISLAÇÃO</b> — por isso a nota fiscal pode vir por instrução normativa.</em></p></div>'),
    sl("Fato gerador: quando ocorre e como se interpreta",
      '<div class="box"><span class="bl">Hipótese de incidência × fato gerador</span>'+
      '<p><b>Hipótese de incidência</b> é a <b>previsão legal abstrata</b>; <b>fato gerador</b> é o <b>acontecimento no mundo real</b>. Se o produto estrangeiro não entra no território, não há fato gerador do II.</p>'+
      '<p><b>Art. 114 — principal:</b> situação definida em <b>LEI</b> como <b>necessária e suficiente</b> à sua ocorrência.<br>'+
      '<b>Art. 115 — acessória:</b> qualquer situação que, na forma da <b>LEGISLAÇÃO</b> aplicável, imponha a prática ou a abstenção de ato.</p>'+
      '<p class="mn"><em><b>Continuado</b> (leva um período): IPVA, IPTU, ITR. O <b>IR</b> é <b>complexivo</b>, não continuado.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 116 — quando se considera ocorrido</span>'+
      '<p><b>Situação DE FATO</b> → desde que se verifiquem as <b>circunstâncias materiais</b>. É a definida em lei que <b>não foi tratada por outro ramo do direito</b> — produz só efeitos econômicos. <em>Ex.: ISS na execução material da composição gráfica.</em></p>'+
      '<p><b>Situação JURÍDICA</b> → desde que esteja <b>definitivamente constituída</b>. É a que <b>já existia em outro ramo</b>. <em>Ex.: ITBI — o Código Civil (art. 1.245) exige o registro do título no Registro de Imóveis.</em></p>'+
      '<p class="mn"><em>Tudo <b>salvo disposição de lei em contrário</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">Parágrafo único do art. 116 — a norma antielusiva</span>'+
      '<p>A autoridade pode <b>DESCONSIDERAR</b> atos ou negócios praticados para <b>DISSIMULAR</b>: a <b>ocorrência do fato gerador</b> ou a <b>natureza dos elementos constitutivos</b> da obrigação.</p>'+
      '<p><b>ELISÃO — LÍCITA:</b> planejamento tributário.<br>'+
      '<b>ELUSÃO — ILÍCITA:</b> simula o negócio, dissimula o fato gerador. “<b>Abuso de forma jurídica</b>”: muda a forma para ocultar a essência.<br>'+
      '<b>EVASÃO — ILÍCITA:</b> ludibria a fiscalização, <b>ocultando</b> a ocorrência do fato gerador.</p>'+
      '<p><em>Caso típico: imóveis incorporados a pessoa jurídica <b>para uso próprio de particulares</b>, dissimulando o ITBI → elusão, e o negócio pode ser desconsiderado.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 117 — negócios condicionais (só nas situações JURÍDICAS)</span>'+
      '<p><b>SUSPENSIVA</b> → perfeito desde o <b>IMPLEMENTO</b> da condição. <em>Doação de carro <b>se</b> André passar no concurso: o ITCMD incide na aprovação.</em></p>'+
      '<p><b>RESOLUTÓRIA</b> → perfeito desde a <b>PRÁTICA do ato ou CELEBRAÇÃO</b> do negócio. <em>Doação com a condição de não se separar: incide já na doação; a separação futura não desfaz o fato gerador.</em></p></div>'+
      '<div class="box tip"><span class="bl">Art. 118 — pecunia non olet</span>'+
      '<p>A definição legal do fato gerador é interpretada <b>abstraindo-se</b>: <b>I)</b> da <b>validade jurídica</b> dos atos praticados por contribuintes, responsáveis ou terceiros; <b>II)</b> dos <b>efeitos dos fatos</b> efetivamente ocorridos.</p>'+
      '<p>“<b>Dinheiro não cheira</b>”: quem aufere renda é sujeito passivo, lícita ou ilícita a atividade. <em>Mesmo com furto de sinal por clonagem, ocorre o fato gerador do ICMS na telefonia.</em></p></div>')
  ],
  V2:[
    sl("Sujeitos, convenções particulares e solidariedade",
      '<div class="box"><span class="bl">Os sujeitos</span>'+
      '<p><b>ATIVO (art. 119):</b> pessoa jurídica de <b>direito público</b> titular da competência para <b>EXIGIR</b> o cumprimento.</p>'+
      '<p><b>PASSIVO da principal (art. 121):</b> obrigado ao pagamento de <b>tributo ou penalidade pecuniária</b>.<br>'+
      '<b>PASSIVO da acessória (art. 122):</b> obrigado às <b>prestações que constituam o seu objeto</b> — pode não ser o mesmo da principal.</p></div>'+
      '<div class="box trap"><span class="bl">Contribuinte × responsável</span>'+
      '<p><b>CONTRIBUINTE:</b> tem <b>relação pessoal e direta</b> com a situação que constitua o fato gerador.<br>'+
      '<b>RESPONSÁVEL:</b> <b>sem revestir a condição de contribuinte</b>, sua obrigação decorre de <b>disposição expressa de LEI</b>.</p>'+
      '<p class="mn"><em>Inverter os dois na assertiva é a troca mais cobrada do capítulo.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 123 — convenções particulares</span>'+
      '<p>Não podem ser <b>opostas à Fazenda Pública</b> para modificar a definição legal do sujeito passivo — <b>SALVO DISPOSIÇÃO DE LEI EM CONTRÁRIO</b>.</p>'+
      '<p><em>André empresta o carro a Bruno, que por contrato assume o IPVA e não paga: o contrato é <b>válido entre as partes</b>, mas <b>André responde sozinho</b> perante o Fisco.</em></p>'+
      '<p class="mn"><em>Mas se <b>lei estadual</b> admitir que as partes indiquem o sujeito passivo do IPVA, a convenção <b>vale</b> naquele Estado. A ressalva final do artigo já caiu em prova.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 124 — quem é solidário</span>'+
      '<p><b>I)</b> pessoas com <b>INTERESSE COMUM</b> na situação que constitua o fato gerador da principal;<br>'+
      '<b>II)</b> pessoas <b>expressamente designadas por LEI</b>.</p>'+
      '<p><b>Parágrafo único: NÃO comporta benefício de ordem.</b> O Fisco cobra de qualquer um, pelo todo.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 125 — os três efeitos</span>'+
      '<p><b>I)</b> o <b>pagamento</b> por um <b>aproveita aos demais</b>;<br>'+
      '<b>II)</b> a <b>isenção ou remissão exonera todos</b>, <b>salvo se outorgada PESSOALMENTE</b> a um deles — subsistindo a solidariedade quanto ao <b>SALDO</b>;<br>'+
      '<b>III)</b> a <b>interrupção da prescrição</b>, a favor ou contra um, <b>favorece ou prejudica os demais</b>.</p>'+
      '<p><em>André e Bruno solidários; lei isenta ex-combatentes, condição só de André → <b>Bruno paga o saldo</b>, descontada a parcela isenta.</em></p>'+
      '<p class="mn"><em>Tudo <b>salvo disposição de lei em contrário</b>.</em></p></div>'),
    sl("Capacidade tributária passiva e domicílio",
      '<div class="box"><span class="bl">Art. 126 — a capacidade passiva INDEPENDE de</span>'+
      '<p><b>I)</b> da <b>capacidade civil</b> das pessoas naturais;<br>'+
      '<b>II)</b> de estar a pessoa natural sujeita a <b>medidas que privem ou limitem</b> o exercício de atividades civis, comerciais ou profissionais, ou a administração de seus bens;<br>'+
      '<b>III)</b> de estar a pessoa jurídica <b>regularmente constituída</b> — basta configurar uma <b>unidade econômica ou profissional</b>.</p>'+
      '<p><em><b>I:</b> criança de 7 anos com receita de publicidade acima do limite é <b>contribuinte</b> do IR — embora, sendo impossível exigir dela, os <b>pais respondam</b> pelo art. 134.<br>'+
      '<b>II:</b> médico <b>suspenso</b> que segue atendendo <b>deve o ISS</b>, com multa e juros.<br>'+
      '<b>III:</b> empresa sem registro, mas em funcionamento, é sujeito passivo normalmente.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 127 — domicílio tributário</span>'+
      '<p class="mn"><em>A regra é a <b>ELEIÇÃO</b> pelo contribuinte ou responsável. Os incisos só valem <b>NA FALTA</b> de eleição.</em></p>'+
      '<p><b>I — pessoas naturais:</b> <b>residência habitual</b> ou, sendo incerta ou desconhecida, o <b>centro habitual de sua atividade</b>.<br>'+
      '<b>II — PJ de direito privado:</b> o lugar da <b>SEDE</b> ou, quanto aos atos que derem origem à obrigação, o de <b>cada estabelecimento</b>.<br>'+
      '<b>III — PJ de direito público:</b> <b>qualquer de suas repartições</b> no território da entidade tributante.</p></div>'+
      '<div class="box trap"><span class="bl">Os dois parágrafos que fecham o sistema</span>'+
      '<p><b>§ 1º —</b> não cabendo nenhum inciso, o domicílio é o <b>lugar da situação dos BENS</b> ou da <b>ocorrência dos atos ou fatos</b> que deram origem à obrigação. <em>É o caso do andarilho sem residência fixa nem endereço de atividade.</em></p>'+
      '<p><b>§ 2º —</b> a autoridade <b>pode RECUSAR o domicílio eleito</b> quando ele <b>impossibilite ou dificulte</b> a arrecadação ou a fiscalização, aplicando-se então o § 1º.</p>'+
      '<p><em>Empresa que elege fábrica distante do centro de distribuição, ou muda a sede para cidade a que só se chega de barco: <b>o Fisco pode recusar</b>. Mas exige-se <b>dificuldade concreta</b> — não basta conveniência.</em></p></div>'+
      '<div class="box tip"><span class="bl">Reforma tributária</span>'+
      '<p>A <b>EC 132/2023 não alterou os arts. 113 a 127</b> do CTN. A teoria da obrigação tributária deste módulo está atualizada; o que muda é o entorno — IBS, CBS e Imposto Seletivo terão leis complementares próprias, com suas regras de sujeição passiva.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 06","https://www.tecconcursos.com.br/s/Q2g8ll","Q2g8ll"],
  ["Caderno FCC — Direito Tributário 06","https://www.tecconcursos.com.br/s/Q2g8m9","Q2g8m9"],
  ["Caderno FGV — Direito Tributário 06","https://www.tecconcursos.com.br/s/Q2g8mV","Q2g8mV"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Desta vez o resumo trouxe só três cadernos (sem VUNESP). Este módulo cobre os arts. 113 a 127 do CTN e é o alicerce do próximo, sobre responsabilidade tributária: se contribuinte × responsável não estiver automático aqui, o módulo 07 fica ilegível. As pegadinhas campeãs são a multa como obrigação principal, a troca entre lei (art. 114) e legislação (art. 115), a inversão entre condição suspensiva e resolutória, e a ressalva final do art. 123 sobre convenções particulares. Boa notícia quanto à atualização: a EC 132/2023 não tocou nesses artigos.";

var UNITS = [
  {n:1, title:"Obrigação principal e acessória", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 113 e o fato gerador nos arts. 114 a 118", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · principal × acessória",      xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · conversão e autonomia",      xp:25, data:["S3","S4","T5","T6","T7","T8"]},
    {id:"K4", type:"flash",  title:"Flashcards · obrigação tributária",     xp:15, data:[0,1,2,3,4,5,6,7,8,9]}
  ]},
  {n:2, title:"Fato gerador", cvar:"u2", lessons:[
    {id:"K5", type:"drill",  title:"Praticar · hipótese, fato gerador e tipos", xp:25, data:["S5","S6","S7","T9","T10","T11","T12","T13"]},
    {id:"K6", type:"drill",  title:"Praticar · situação de fato × jurídica", xp:25, data:["S8","T14","T15","T16"]},
    {id:"K7", type:"drill",  title:"Praticar · elisão, elusão e evasão",    xp:25, data:["S9","S10","T17","T18","T19","T20","T21"]},
    {id:"K8", type:"drill",  title:"Praticar · condicionais e pecunia non olet", xp:25, data:["S11","S12","S13","S14","T22","T23","T24","T25","T26"]},
    {id:"K9", type:"flash",  title:"Flashcards · fato gerador",            xp:15, data:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]}
  ]},
  {n:3, title:"Sujeitos da obrigação", cvar:"u3", lessons:[
    {id:"K10",type:"teoria", title:"Sujeitos, solidariedade, capacidade e domicílio", xp:10, data:"V2"},
    {id:"K11",type:"drill",  title:"Praticar · sujeito ativo e passivo",    xp:25, data:["S15","T27","T28","T29","T30","T52"]},
    {id:"K12",type:"drill",  title:"Praticar · convenções particulares",    xp:25, data:["S16","S17","T31","T32","T33"]},
    {id:"K13",type:"flash",  title:"Flashcards · sujeitos e convenções",    xp:15, data:[30,31,32,33,34,35,36]}
  ]},
  {n:4, title:"Solidariedade e capacidade passiva", cvar:"u4", lessons:[
    {id:"K14",type:"drill",  title:"Praticar · solidariedade e seus efeitos", xp:25, data:["S18","S19","S20","T34","T35","T36","T37","T38","T39"]},
    {id:"K15",type:"drill",  title:"Praticar · capacidade tributária passiva", xp:25, data:["S21","S22","T40","T41","T42","T43"]},
    {id:"K16",type:"flash",  title:"Flashcards · solidariedade e capacidade", xp:15, data:[37,38,39,40,41,42,43,44,45]}
  ]},
  {n:5, title:"Domicílio tributário", cvar:"u5", lessons:[
    {id:"K17",type:"drill",  title:"Praticar · eleição e regras supletivas", xp:25, data:["S23","T44","T45","T46","T47","T48","T53"]},
    {id:"K18",type:"drill",  title:"Praticar · recusa do domicílio eleito", xp:25, data:["S24","T49","T50","T51"]},
    {id:"K19",type:"flash",  title:"Flashcards · domicílio tributário",     xp:15, data:[46,47,48,49,50,51,52,53,54,55]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K20", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K21", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 06 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p><b>CTN, art. 113</b>, transcrito no resumo: <b>“a obrigação tributária é principal ou acessória”</b>.</p><p>O comentário dele define as duas: <b>principal</b> = dever de <b>entregar dinheiro ao Fisco</b>, pagando tributos ou multas; <b>acessória</b> = obrigações de <b>fazer</b> ou <b>deixar de fazer</b>, para auxiliar arrecadação e fiscalização.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária — art. 113</i></p>",
1:"<p>Observação 1 do resumo: a obrigação principal <b>surge com a ocorrência do fato gerador</b>, tem por objeto <b>o pagamento de tributo ou penalidade pecuniária</b> e <b>extingue-se juntamente com o crédito dela decorrente</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária — Observação 1</i></p>",
2:"<p>Pelo art. 113, §1º, a obrigação principal tem por objeto o pagamento de <b>tributo OU penalidade pecuniária</b>. No esquema do resumo: <b>“entregar dinheiro ao Fisco, pagando tributos OU MULTAS”</b>.</p><p>Multa é obrigação <b>principal</b>, embora não seja tributo.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária</i></p>",
3:"<p>Observação 2 do resumo: <b>“a obrigação acessória decorre da LEGISLAÇÃO tributária e tem por objeto as prestações, positivas ou negativas”</b>.</p><p>“Legislação” é o conceito amplo do art. 96 — leis, tratados, decretos e normas complementares.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária — Observação 2</i></p>",
4:"<p>A palavra do art. 113, §2º, é <b>legislação</b>, não <b>lei</b>. Por isso a obrigação acessória pode vir de <b>decreto</b> ou <b>instrução normativa</b>.</p><p>Compare com o quadro do art. 97 (Resumo 05): lá, <b>o fato gerador da obrigação PRINCIPAL</b> é que exige lei.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária — Observação 2</i></p>",
5:"<p>Observação 3 do resumo: <b>“a obrigação acessória, pelo simples fato da sua inobservância, converte-se em obrigação principal relativamente à penalidade pecuniária (multa)”</b>.</p><p>O exemplo dele: não entregar a declaração do IR converte a acessória em principal quanto à multa.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária — Observação 3</i></p>",
6:"<p>Observação 1 do tópico de fato gerador: <b>“a obrigação tributária acessória PODE EXISTIR SEM que exista obrigação tributária principal”</b>.</p><p>O exemplo do resumo: por <b>isenção ou imunidade</b> o contribuinte não paga o tributo, <b>mas continuará obrigado a fazer sua escrituração fiscal</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fato Gerador — Observação 1</i></p>",
7:"<p>Observação 4: a obrigação de <b>conteúdo patrimonial</b> é a <b>principal</b>; a <b>acessória</b> caracteriza-se pela prestação de <b>conteúdo NÃO patrimonial (não envolve dinheiro)</b>, consubstanciada em obrigações de <b>fazer e não fazer</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária — Observação 4</i></p>",
8:"<p>É o exemplo do próprio esquema do resumo para a terceira modalidade da acessória — <b>tolerar que se faça algo</b>: <b>“não impedir o acesso da fiscalização a sua empresa”</b>.</p><p>As outras duas: <b>fazer</b> (escriturar livros) e <b>não fazer</b> (não receber mercadoria sem documento fiscal).</p><p class='fb-fonte'>Resumo 06 · <i>Obrigação Tributária</i></p>",
9:"<p>Quadro do <b>art. 114</b>: fato gerador da obrigação <b>principal</b> é <b>“a situação definida em LEI como necessária e suficiente à sua ocorrência”</b>.</p><p>Três palavras para guardar: <b>lei</b> · <b>necessária</b> · <b>suficiente</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fato Gerador — art. 114</i></p>",
10:"<p>Quadro do <b>art. 115</b>: fato gerador da <b>acessória</b> é qualquer situação que, <b>na forma da LEGISLAÇÃO aplicável</b>, impõe a prática ou a abstenção de ato.</p><p>Principal → <b>lei</b>. Acessória → <b>legislação</b>. A troca dessa palavra é a questão inteira.</p><p class='fb-fonte'>Resumo 06 · <i>Fato Gerador — art. 115</i></p>",
11:"<p>Do resumo: a <b>hipótese de incidência</b> é <b>“a previsão legal de uma situação”</b>; o <b>fato gerador</b> é <b>“o acontecimento previsto na lei que se verifica no mundo real”</b> — “é uma evolução da hipótese de incidência, pois ocorre no mundo dos fatos”.</p><p>Exemplo dele: se o produto estrangeiro <b>não entrar</b> no território, não há fato gerador do II.</p><p class='fb-fonte'>Resumo 06 · <i>Fato Gerador</i></p>",
12:"<p>Do resumo: <b>“o fato gerador continuado é aquele que leva um período para se completar, geralmente um ano (ex.: IPVA, IPTU, ITR)”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fato Gerador</i></p>",
13:"<p>A frase seguinte do resumo é exatamente o contraponto: <b>“o IR possui fato gerador COMPLEXO (não é continuado)”</b>.</p><p>Continuado se prolonga no tempo; complexo (ou complexivo) se forma pela <b>soma</b> dos fatos do período.</p><p class='fb-fonte'>Resumo 06 · <i>Fato Gerador</i></p>",
14:"<p>Quadro do <b>art. 116</b>, sob a ressalva <b>“salvo disposição de lei em contrário”</b>: tratando-se de situação <b>de FATO</b>, desde o momento em que <b>se verifiquem as circunstâncias materiais</b>; de situação <b>JURÍDICA</b>, desde que esteja <b>definitivamente constituída</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Ocorrência do Fato Gerador — art. 116</i></p>",
15:"<p>Trocou os incisos. <b>Circunstâncias materiais</b> é o inciso I — situação <b>de fato</b>. A situação <b>jurídica</b> (inciso II) exige estar <b>definitivamente constituída</b>.</p><p>O resumo explica a diferença: a <b>de fato</b> só produz efeitos econômicos; a <b>jurídica</b> já foi prevista em outro ramo do direito.</p><p class='fb-fonte'>Resumo 06 · <i>Ocorrência do Fato Gerador — art. 116</i></p>",
16:"<p>É o exemplo de <b>situação jurídica</b> do resumo: <b>“quando o art. 35 do CTN se refere ao imposto sobre transmissão de bens imóveis (ITBI), devemos buscar no Código Civil, no art. 1.245, o conceito legal de transmissão, que se dá com o REGISTRO do título translativo no Registro de Imóveis”</b>.</p><p>Compare com o exemplo de <b>situação de fato</b> dele: o ISS na composição gráfica, quando o serviço é <b>materialmente executado</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Situação Jurídica — exemplo</i></p>",
17:"<p>Quadro do <b>art. 116, parágrafo único</b>: a autoridade administrativa poderá <b>desconsiderar atos ou negócios jurídicos praticados com a finalidade de DISSIMULAR</b> — <b>a ocorrência do fato gerador</b> <b>OU</b> <b>a natureza dos elementos constitutivos da obrigação tributária</b>.</p><p>São duas hipóteses, ligadas por “ou”.</p><p class='fb-fonte'>Resumo 06 · <i>Desconsideração de Negócios Jurídicos</i></p>",
18:"<p>Do bloco <b>CONCEITOS PERTINENTES</b>: <b>“elisão fiscal é uma conduta LÍCITA, sendo denominada PLANEJAMENTO TRIBUTÁRIO, que visa reduzir ou eliminar o valor do tributo devido”</b>.</p><p>Quem oculta o fato gerador é a <b>evasão</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Conceitos Pertinentes</i></p>",
19:"<p>Do mesmo bloco: <b>“elusão fiscal é uma conduta ILÍCITA. Aqui, o contribuinte SIMULA o negócio jurídico, dissimulando o fato gerador. O que se quer ocultar é a essência do negócio, alterando a sua forma. Os autores costumam denominá-la ABUSO DE FORMA JURÍDICA”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Conceitos Pertinentes</i></p>",
20:"<p>Do resumo: <b>“evasão fiscal é uma conduta ILÍCITA, praticada com o intento de LUDIBRIAR A FISCALIZAÇÃO, ocultando parcial ou totalmente a ocorrência do fato gerador”</b>.</p><p>Trio para fixar: <b>elisão</b> lícita · <b>elusão</b> ilícita por simulação · <b>evasão</b> ilícita por ocultação.</p><p class='fb-fonte'>Resumo 06 · <i>Conceitos Pertinentes</i></p>",
21:"<p>É o <b>EXEMPLO</b> do resumo, idêntico: imóveis incorporados ao patrimônio de pessoas jurídicas <b>mas para uso próprio de particulares</b>, dissimulando o fato gerador do ITBI. A conclusão dele: <b>“estamos diante de uma ELUSÃO FISCAL e a autoridade administrativa poderá desconsiderar o referido negócio jurídico e realizar a cobrança”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Desconsideração — exemplo</i></p>",
22:"<p>Quadro do <b>art. 117</b>: sendo <b>SUSPENSIVA</b> a condição, <b>desde o momento de seu implemento</b>.</p><p>Exemplo do resumo: <b>“se André for aprovado no concurso, receberá de seu pai uma doação de um carro”</b> — o ITCMD só incide <b>com a aprovação</b>, e não na celebração.</p><p class='fb-fonte'>Resumo 06 · <i>Atos Jurídicos Condicionais — art. 117</i></p>",
23:"<p>É o inverso. Sendo <b>RESOLUTÓRIA</b> a condição, reputa-se perfeito <b>desde o momento da prática do ato ou da celebração do negócio</b>.</p><p>Exemplo do resumo: doação do carro com a condição de <b>não se separar</b> da esposa — o fato gerador <b>não depende da separação</b>, resolve-se com a celebração.</p><p class='fb-fonte'>Resumo 06 · <i>Atos Jurídicos Condicionais — art. 117</i></p>",
24:"<p>Quadro do <b>art. 118</b>: a definição legal do fato gerador é interpretada <b>abstraindo-se da validade jurídica dos atos efetivamente praticados</b> pelos contribuintes, responsáveis ou terceiros, e <b>dos efeitos dos fatos efetivamente ocorridos</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Pecunia non olet — art. 118</i></p>",
25:"<p>Comentário do resumo: o art. 118 ampara o <b>PECUNIA NON OLET (dinheiro não cheira)</b> — <b>“se a pessoa auferiu rendimentos, torna-se sujeito passivo, devendo arcar com o imposto de renda, INDEPENDENTEMENTE se a atividade realizada por ela é lícita ou ilícita”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Pecunia non olet — comentário</i></p>",
26:"<p>É o exemplo do resumo: <b>“o fato gerador do ICMS na telefonia é a disponibilização da linha em favor do usuário. Mesmo havendo FURTO DE SINAL, por clonagem, o fato gerador ocorre”</b> — a situação deve ser interpretada abstraindo-se da validade jurídica dos atos.</p><p class='fb-fonte'>Resumo 06 · <i>Pecunia non olet — exemplo</i></p>",
27:"<p>Quadro do <b>art. 119</b>: sujeito ativo é <b>“a pessoa jurídica de direito público, titular da competência para exigir o seu cumprimento”</b>.</p><p>O resumo acrescenta que, <b>em regra, é o ente instituidor do tributo</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Sujeito Ativo × Sujeito Passivo</i></p>",
28:"<p>Quadro do <b>art. 121</b>: sujeito passivo é <b>“a pessoa obrigada ao pagamento de tributo ou multa (penalidade pecuniária)”</b>.</p><p>E a <b>OBS</b> do resumo: sujeito passivo da <b>acessória</b> é a pessoa obrigada às prestações que constituam o seu objeto (art. 122).</p><p class='fb-fonte'>Resumo 06 · <i>Sujeito Ativo × Sujeito Passivo</i></p>",
29:"<p>Inverteu os dois incisos do art. 121, parágrafo único. No quadro do resumo: <b>CONTRIBUINTE</b> = quando tenha <b>relação pessoal e direta</b> com a situação que constitua o fato gerador.</p><p>O que <b>decorre de disposição expressa de lei</b> é o <b>RESPONSÁVEL</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Contribuinte × Responsável</i></p>",
30:"<p>Inciso II do quadro: <b>RESPONSÁVEL</b> = <b>“quando, sem revestir a condição de contribuinte, sua obrigação decorra de disposição expressa de lei”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Contribuinte × Responsável</i></p>",
31:"<p>Quadro do <b>art. 123</b>: as convenções particulares relativas à responsabilidade pelo pagamento de tributos <b>não podem ser opostas à Fazenda Pública</b> para modificar a definição legal do sujeito passivo — <b>“salvo disposição de lei em contrário”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Convenções Particulares — art. 123</i></p>",
32:"<p>É o <b>EXEMPLO</b> do resumo, do André e do Bruno: o contrato em que o comodatário assume o IPVA. A conclusão dele: <b>“o contrato é VÁLIDO entre as partes, porém não produzirá efeito contra a Fazenda Pública”</b> — André responde sozinho perante o Fisco.</p><p>Válido entre as partes, <b>inoponível</b> ao Fisco. São coisas diferentes.</p><p class='fb-fonte'>Resumo 06 · <i>Convenções Particulares — exemplo</i></p>",
33:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“se uma lei estadual admitir a indicação do sujeito passivo do IPVA pelas partes no contrato, então será válida, neste Estado, qualquer convenção particular que indique os sujeitos passivos”</b>.</p><p>Ele registra: <b>isso já caiu em provas</b> e decorre do trecho “salvo disposição de lei em contrário”.</p><p class='fb-fonte'>Resumo 06 · <i>Convenções Particulares — Atenção!</i></p>",
34:"<p>Quadro do <b>art. 124</b>: são solidariamente obrigadas <b>as pessoas que tenham INTERESSE COMUM</b> na situação que constitua o fato gerador da obrigação principal (inciso I) e <b>as pessoas expressamente designadas por lei</b> (inciso II).</p><p class='fb-fonte'>Resumo 06 · <i>Da Solidariedade — art. 124</i></p>",
35:"<p><b>OBS</b> do resumo, no parágrafo único do art. 124: <b>“a solidariedade referida neste artigo NÃO comporta benefício de ordem”</b>.</p><p>O Fisco escolhe de quem cobrar, e cobra o todo.</p><p class='fb-fonte'>Resumo 06 · <i>Da Solidariedade — OBS</i></p>",
36:"<p>Primeiro dos três efeitos do <b>art. 125</b>, sob a ressalva “salvo disposição de lei em contrário”: <b>“o pagamento efetuado por um dos obrigados aproveita aos demais”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Efeitos da Solidariedade — art. 125</i></p>",
37:"<p>Segundo efeito, com a ressalva que derruba o item: a isenção ou remissão exonera todos, <b>“SALVO se outorgada PESSOALMENTE a um deles, subsistindo, nesse caso, a solidariedade quanto aos demais PELO SALDO”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Efeitos da Solidariedade — art. 125</i></p>",
38:"<p>Terceiro efeito: <b>“a interrupção da prescrição, em favor ou contra um dos obrigados, favorece ou prejudica aos demais”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Efeitos da Solidariedade — art. 125</i></p>",
39:"<p>É o <b>EXEMPLO</b> do resumo: André e Bruno solidários, lei isenta os <b>ex-combatentes</b>, condição pessoal <b>só de André</b>. Conclusão dele: <b>“sendo um caso de isenção PESSOAL, o art. 125, II, NÃO exonera Bruno, que permanece obrigado a pagar o saldo remanescente, descontada a parcela isenta em favor de André”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Efeitos da Solidariedade — exemplo</i></p>",
40:"<p><b>Art. 126, I</b>, transcrito no resumo: a capacidade tributária passiva <b>independe da capacidade civil das pessoas naturais</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Capacidade Tributária — art. 126</i></p>",
41:"<p><b>Art. 126, II</b>: independe <b>“de achar-se a pessoa natural sujeita a medidas que importem privação ou limitação do exercício de atividades civis, comerciais ou profissionais”</b>.</p><p>É o <b>EXEMPLO 02</b> do resumo: o médico <b>suspenso por 30 dias</b> pelo CRM que continua atendendo — a autuação do ISS <b>está correta</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Capacidade Tributária — exemplo 02</i></p>",
42:"<p><b>Art. 126, III</b>: independe <b>“de estar a pessoa jurídica regularmente constituída, bastando que configure uma UNIDADE ECONÔMICA OU PROFISSIONAL”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Capacidade Tributária — art. 126</i></p>",
43:"<p>É o <b>EXEMPLO 01</b> do resumo: <b>Luiza, com 07 anos</b>, recebendo propaganda no canal do YouTube acima do limite de isenção. Conclusão: <b>“a capacidade tributária de Luiza INDEPENDE da sua capacidade civil, ou seja, ela possui total capacidade tributária passiva. Por auferir renda, ela pode ser considerada contribuinte”</b>.</p><p>A <b>OBS</b> completa: na impossibilidade de exigir do contribuinte, <b>os pais respondem</b> pelos tributos dos filhos menores (art. 134).</p><p class='fb-fonte'>Resumo 06 · <i>Capacidade Tributária — exemplo 01</i></p>",
44:"<p><b>OBS</b> do resumo no quadro do art. 127: <b>“note que, em regra, o contribuinte ESCOLHE (elege) o domicílio tributário”</b> — os incisos só valem <b>na falta de eleição</b>.</p><p>O exemplo dele é o do aposentado que divide o ano entre Teresina e Guapimirim: <b>pode ser qualquer um dos dois</b>, por livre escolha.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — art. 127</i></p>",
45:"<p>Inciso I do quadro: das <b>pessoas naturais</b>, <b>“a sua residência habitual, ou, sendo esta incerta ou desconhecida, o centro habitual de sua atividade”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — art. 127</i></p>",
46:"<p>Inciso II: das <b>pessoas jurídicas de direito privado</b>, <b>“o lugar da sua sede, ou, em relação aos atos ou fatos que derem origem à obrigação, o de CADA ESTABELECIMENTO”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — art. 127</i></p>",
47:"<p>Inciso III do quadro: das <b>pessoas jurídicas de direito público</b>, <b>“QUALQUER de suas repartições no território da entidade tributante”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — art. 127</i></p>",
48:"<p><b>Art. 127, §1º</b>, transcrito: não cabendo a aplicação das regras dos incisos, considera-se domicílio <b>“o lugar da situação dos bens ou da ocorrência dos atos ou fatos que deram origem à obrigação”</b>.</p><p>Exemplo do resumo: <b>Romualdo, o andarilho</b> sem domicílio civil nem residência fixa.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — §1º</i></p>",
49:"<p><b>Art. 127, §2º</b>: a autoridade administrativa <b>pode recusar o domicílio eleito quando IMPOSSIBILITE OU DIFICULTE a arrecadação ou a fiscalização</b>, aplicando-se então a regra do §1º.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — §2º</i></p>",
50:"<p>O §2º condiciona: só cabe recusa quando o domicílio <b>impossibilite ou dificulte</b> a arrecadação ou a fiscalização. Não é recusa livre.</p><p>É o que os dois exemplos do resumo demonstram — em ambos há uma <b>dificuldade concreta</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — §2º</i></p>",
51:"<p>É o <b>EXEMPLO 02</b> do resumo: a sociedade ABC que mudou a sede para <b>cidade a que só se chega de barco, gastando mais de um dia de viagem</b>, mantendo filiais na capital. Conclusão dele: <b>“não assiste razão à sociedade empresária”</b> — a autoridade pode recusar o domicílio eleito.</p><p class='fb-fonte'>Resumo 06 · <i>Domicílio Tributário — exemplo 02</i></p>",
52:"<p>O art. 119, no quadro do resumo, fala em <b>pessoa jurídica de direito público</b>. A abertura para o direito privado vem da <b>Súmula 396 do STJ</b> (Resumo 01 e 03): a CNA, pessoa jurídica de direito <b>privado</b>, pode receber a delegação da capacidade tributária ativa.</p><p class='fb-fonte'>Resumo 06 · <i>art. 119</i> + <i>Resumo 03 · Súmula 396</i></p>",
53:"<p><b>OBS</b> do resumo no quadro dos sujeitos: <b>“sujeito passivo da obrigação ACESSÓRIA é a pessoa obrigada às prestações que constituam o seu objeto” (art. 122)</b>.</p><p>Pode não coincidir com o da principal — é o caso do imune, que não paga mas escritura.</p><p class='fb-fonte'>Resumo 06 · <i>Sujeito Passivo — art. 122</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"Obrigação tributária — fato gerador e sujeitos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
