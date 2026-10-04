/* AFO — Módulo 05: Ciclo orçamentário */
window.MOD = window.MOD || {};
window.MOD.m05 = (function(){
"use strict";

var CARDS = [
  ["O que é o ciclo orçamentário?","Um <b>processo constituído por uma série de passos que se repetem em períodos prefixados</b>. Chama-se “ciclo” porque se repete anualmente."],
  ["Quais são as quatro etapas do ciclo orçamentário da LOA?","<b>1)</b> Elaboração da proposta — <b>Executivo</b>; <b>2)</b> apreciação, discussão, adequação e autorização — <b>Legislativo</b>; <b>3)</b> execução dos orçamentos aprovados — <b>Executivo</b>; <b>4)</b> controle e avaliação da execução (julgamento das contas) — <b>Legislativo</b>."],
  ["Resumo de quem faz o quê no ciclo","O orçamento é <b>elaborado</b> pelo Executivo, <b>votado</b> pelo Legislativo, <b>executado</b> pelo Executivo e <b>avaliado</b> pelo Legislativo."],
  ["O que é o ciclo orçamentário ampliado?","O ciclo, <b>em conjunto</b>, do <b>PPA, da LDO e da LOA</b> — com <b>8 etapas</b>."],
  ["Quais são as 8 etapas do ciclo ampliado?","<b>1)</b> Formulação do planejamento plurianual (Executivo); <b>2)</b> apreciação e adequação do plano (Legislativo); <b>3)</b> proposição de metas e prioridades (Executivo); <b>4)</b> apreciação e adequação da LDO (Legislativo); <b>5)</b> elaboração da proposta de orçamento (Executivo); <b>6)</b> apreciação, adequação e autorização legislativa; <b>7)</b> execução dos orçamentos aprovados; <b>8)</b> controle e avaliação da execução."],
  ["Como se dividem as 8 etapas do ciclo ampliado entre os instrumentos?","Etapas <b>1 e 2 → PPA</b>; etapas <b>3 e 4 → LDO</b>; o <b>restante (5 a 8) → LOA</b>."],
  ["O ciclo orçamentário é intermitente?","<b>Não.</b> É um processo <b>contínuo, dinâmico e flexível</b>. Trocar “contínuo” por “intermitente” é a pegadinha clássica."],
  ["Por quem são feitas as alterações orçamentárias no nível federal?","Por meio de <b>atos legais elaborados pela SOF</b> — Secretaria de Orçamento Federal."],
  ["Onde devem constar a programação financeira e o cronograma de desembolso?","<b>Não</b> na LOA, mas em <b>decreto executivo</b>, <b>até 30 dias após a publicação</b> da LOA (art. 8º da LRF)."],
  ["O que ocorre na 1ª etapa (elaboração da proposta)?","Realizam-se <b>estudos preliminares</b>, definem-se <b>prioridades</b>, fixam-se <b>objetivos</b> e estimam-se os <b>recursos financeiros</b> necessários às políticas públicas, sob a forma de <b>programa</b>."],
  ["Qual órgão federal elabora os instrumentos de planejamento?","O <b>Ministério da Economia</b>. Nos Estados, DF e municípios, em regra, uma <b>Secretaria</b> do Poder Executivo do ente."],
  ["Quem elabora as propostas orçamentárias do Legislativo, do Judiciário, do MP e da DP?","Cada um elabora sua <b>proposta orçamentária parcial</b> e a encaminha ao <b>Poder Executivo</b>, constitucionalmente responsável pelo envio da <b>proposta consolidada</b> ao Legislativo."],
  ["O que ocorre na 2ª etapa?","<b>Apreciação, discussão, adequação e autorização</b> pelo Legislativo. A discussão é o <b>debate entre os parlamentares</b> sobre a proposta."],
  ["Que projetos são apreciados pelas duas Casas do Congresso Nacional?","Os projetos de lei relativos ao <b>PPA, à LDO, à LOA e aos créditos adicionais</b>."],
  ["Por qual comissão transitam esses projetos no âmbito federal?","Por uma <b>comissão mista permanente</b> de senadores e deputados — a <b>Comissão Mista de Planos, Orçamentos Públicos e Fiscalização</b> (CMO)."],
  ["E nos Estados e municípios?","Por uma <b>comissão permanente comum</b> (há apenas uma casa legislativa), composta por <b>deputados</b> (Estados e DF) ou <b>vereadores</b> (municípios)."],
  ["O que cabe à comissão mista permanente (CF, art. 166, § 1º)?","<b>I</b> examinar e emitir parecer sobre os projetos do artigo e sobre as <b>contas apresentadas anualmente pelo Presidente da República</b>; <b>II</b> examinar e emitir parecer sobre os <b>planos e programas nacionais, regionais e setoriais</b> e exercer o <b>acompanhamento e a fiscalização orçamentária</b>."],
  ["Até quando o Presidente pode propor modificação nos projetos (CF, art. 166, § 5º)?","Poderá enviar <b>mensagem</b> ao Congresso Nacional <b>enquanto não iniciada a votação, na comissão mista</b>, da parte cuja alteração é proposta — <b>não é no Plenário</b>."],
  ["Como tramitam as emendas parlamentares?","São <b>apresentadas na Comissão Mista</b>, que emitirá seu parecer, e <b>apreciadas, na forma regimental, pelo Plenário das duas Casas</b> do Congresso Nacional."],
  ["Quais os três requisitos para aprovação de emenda ao PLOA (CF, art. 166, § 3º)?","<b>I</b> sejam <b>compatíveis com o PPA e a LDO</b>; <b>II</b> <b>indiquem os recursos necessários</b>, admitidos apenas os provenientes de <b>anulação de despesa</b>; <b>III</b> sejam relacionadas com a <b>correção de erros ou omissões</b> ou com os <b>dispositivos do texto</b> do projeto de lei."],
  ["Sobre quais despesas a anulação para emenda NÃO pode incidir?","<b>a)</b> dotações para <b>pessoal e seus encargos</b>; <b>b)</b> <b>serviço da dívida</b>; <b>c)</b> <b>transferências tributárias constitucionais</b> para Estados, Municípios e DF."],
  ["O que é o serviço da dívida?","Os <b>encargos, juros, correção monetária e a parte da amortização do principal</b> da dívida."],
  ["Qual o quórum de aprovação do PPA, da LDO, da LOA e dos créditos adicionais?","<b>Maioria simples</b>, em cada uma das Casas, pois são <b>leis ordinárias</b>."],
  ["O que é a sanção? E o veto?","<b>Sanção</b> é a aquiescência do Chefe do Executivo ao projeto aprovado. <b>Veto</b> é a discordância do Executivo com o projeto aprovado."],
  ["Quais as espécies e os motivos do veto?","Pode ser <b>parcial</b> (parte do texto) ou <b>total</b> (todo o projeto), e ocorre quando o titular do Executivo considera o projeto <b>inconstitucional</b> ou <b>contrário ao interesse público</b>."],
  ["O que acontece com o veto depois de aposto?","Deve ser <b>apreciado pelo Parlamento</b>, podendo ser <b>confirmado ou rejeitado</b>."],
  ["Qual a regra de 1/12 prevista nas LDOs?","Se o <b>PLOA não for sancionado até 31 de dezembro</b>, parte da programação poderá ser executada até o limite de <b>1/12 do total de cada ação</b> prevista no projeto, <b>multiplicado pelo número de meses decorridos</b> até a sanção da respectiva lei."],
  ["PLOA não sancionado até o fim de abril — quanto pode ser executado?","<b>4/12</b> do valor original das despesas consideradas inadiáveis (quatro meses decorridos)."],
  ["Em que consiste a 3ª etapa (execução)?","Na <b>arrecadação das receitas</b> e na <b>realização das despesas</b>. Nela ocorrem a execução <b>orçamentária</b> e a <b>financeira</b>."],
  ["Execução orçamentária × execução financeira","<b>Orçamentária</b> = utilização das <b>dotações dos créditos orçamentários</b> consignados na LOA. <b>Financeira</b> = utilização de <b>recursos financeiros</b> para realizar o que foi colocado no orçamento."],
  ["Crédito × recurso","<b>Crédito</b> designa o lado <b>orçamentário</b> — dotação, reserva autorizada de gasto. <b>Recurso</b> designa o lado <b>financeiro</b> — dinheiro, saldo de disponibilidade bancária. São duas faces da mesma moeda."],
  ["O que é o controle (4ª etapa)?","Forma de <b>assegurar ao Executivo e ao Legislativo que os recursos serão aplicados conforme previsto nas normas</b>."],
  ["O que é a avaliação orçamentária?","A parte do controle orçamentário que <b>analisa a eficácia e a eficiência</b> dos cursos de ação cumpridos."],
  ["Controle × avaliação — o quadro que cai","<b>Controle:</b> verificação da <b>conformidade</b>, propõe <b>ações corretivas</b>, foco <b>retrospectivo</b>. <b>Avaliação:</b> visa ao <b>aperfeiçoamento da gestão</b>, <b>avalia resultados</b>, foco <b>prospectivo</b>."],
  ["Em que etapa se avalia o cumprimento do programa de trabalho?","Na <b>4ª etapa</b> — controle e avaliação."],
  ["O que dispõe o art. 21, IX, da CF?","Compete à União <b>elaborar e executar planos nacionais e regionais de ordenação do território e de desenvolvimento econômico e social</b> — além do PPA, da LDO e da LOA."],
  ["O que não pode ser objeto de delegação legislativa (CF, art. 68, § 1º)?","Atos de competência <b>exclusiva do CN</b>, atos de competência <b>privativa da Câmara ou do Senado</b>, matéria reservada à <b>lei complementar</b> e a legislação sobre <b>planos plurianuais, diretrizes orçamentárias e orçamentos</b>."],
  ["Qual a forma da delegação ao Presidente da República (art. 68, § 2º)?","<b>Resolução do Congresso Nacional</b>, que especificará seu conteúdo e os termos de seu exercício — <b>não</b> decreto legislativo."],
  ["Limite das emendas individuais ao PLOA (art. 166, § 9º)","<b>2% da Receita Corrente Líquida do exercício anterior</b> ao do encaminhamento do projeto, sendo <b>metade</b> destinada a <b>ações e serviços públicos de saúde</b>."],
  ["Qual EC deu traços impositivos ao orçamento?","A <b>EC nº 86/2015</b>, que incluiu os <b>§§ 9º, 10 e 11 do art. 166</b>. O orçamento brasileiro continua, em regra, <b>autorizativo</b>."],
  ["Divisão do limite entre Deputados e Senadores (§ 9º-A)","<b>1,55%</b> às emendas de <b>Deputados</b> e <b>0,45%</b> às de <b>Senadores</b>."],
  ["O que diz o art. 166, § 10, da CF?","A execução do montante destinado a ações e serviços públicos de saúde do § 9º, <b>inclusive custeio</b>, será <b>computada para fins do art. 198, § 2º, I</b> (mínimo de 15% da RCL da União), <b>vedada a destinação para pagamento de pessoal ou encargos sociais</b>."],
  ["O que garantem os §§ 11 e 12 do art. 166?","<b>§ 11</b> — execução obrigatória das emendas <b>individuais</b>, no limite do § 9º. <b>§ 12</b> — a mesma garantia às emendas de <b>bancada</b> de Estado ou do DF, até <b>1% da RCL realizada no exercício anterior</b>."],
  ["Quando a execução das emendas deixa de ser obrigatória (§ 13)?","Nos casos de <b>impedimentos de ordem técnica</b>."],
  ["O que assegura o art. 166, § 16?","A transferência obrigatória da União a Estados, DF e Municípios <b>independe da adimplência</b> do destinatário e <b>não integra a base de cálculo da RCL</b> para os limites de despesa de pessoal do art. 169."],
  ["O que dispõe o art. 168 da CF?","Os recursos correspondentes às dotações orçamentárias, <b>compreendidos os créditos suplementares e especiais</b>, destinados ao <b>Legislativo, ao Judiciário, ao MP e à DP</b>, ser-lhes-ão entregues <b>até o dia 20 de cada mês, em duodécimos</b>."],
  ["O que é o duodécimo do art. 168?","Repasse <b>mensal</b> devido pelo Executivo (arrecadador dos tributos) aos demais Poderes e a órgãos constitucionais, correspondente a <b>1/12 da receita líquida prevista</b> para o ano."],
  ["O que veda o art. 168, § 1º?","É <b>vedada a transferência a fundos</b> de recursos financeiros oriundos de <b>repasses duodecimais</b>."],
  ["O que se faz com o saldo financeiro dos duodécimos (art. 168, § 2º)?","Deve ser <b>restituído ao caixa único do Tesouro</b> do ente federativo, ou terá seu valor <b>deduzido das primeiras parcelas duodecimais do exercício seguinte</b>."]
];

var QS = [
  ["O ciclo orçamentário é um processo constituído por uma série de passos que se repetem em períodos prefixados.","C","CESPE","Daí o nome “ciclo”: repete-se anualmente."],
  ["O ciclo orçamentário é um processo intermitente, dinâmico e flexível.","E","FGV","É um processo <b>contínuo</b>, dinâmico e flexível. A troca de “contínuo” por “intermitente” é a pegadinha clássica do tema."],
  ["No ciclo orçamentário, o orçamento é elaborado pelo Poder Executivo, votado pelo Legislativo, executado pelo Executivo e avaliado pelo Legislativo.","C","FCC","Resume as quatro etapas e seus responsáveis."],
  ["A primeira etapa do ciclo orçamentário da LOA é a apreciação e discussão da proposta pelo Poder Legislativo.","E","CESPE","A primeira etapa é a <b>elaboração da proposta</b>, a cargo do Executivo."],
  ["A execução dos orçamentos aprovados corresponde à terceira etapa do ciclo orçamentário e cabe ao Poder Executivo.","C","VUNESP","A quarta é o controle e a avaliação, a cargo do Legislativo."],
  ["O controle e a avaliação da execução, com o julgamento das contas, integram a quarta etapa do ciclo orçamentário.","C","FGV","Etapa a cargo do Poder Legislativo."],
  ["O ciclo orçamentário ampliado, com oito etapas, designa o ciclo conjunto do PPA, da LDO e da LOA.","C","FCC","As etapas 1 e 2 referem-se ao PPA, as 3 e 4 à LDO e as demais à LOA."],
  ["No ciclo orçamentário ampliado, as etapas de proposição de metas e prioridades e de apreciação e adequação referem-se ao plano plurianual.","E","CESPE","Referem-se à <b>LDO</b>. As duas primeiras é que dizem respeito ao PPA."],
  ["Após serem elaborados, no Distrito Federal, os projetos de lei orçamentária devem ser enviados à Câmara Legislativa, iniciando-se a fase de apreciação legislativa do ciclo orçamentário.","C","CESPE","Encerrada a elaboração pelo Executivo, abre-se a segunda etapa."],
  ["As alterações orçamentárias, no âmbito federal, são feitas por meio de atos legais elaborados pela Secretaria de Orçamento Federal.","C","FCC","A SOF é o órgão responsável por esses atos."],
  ["A programação financeira e o cronograma de execução mensal de desembolso devem constar da própria lei orçamentária anual.","E","FGV","Devem constar de <b>decreto executivo</b>, em até <b>30 dias</b> após a publicação da LOA (art. 8º da LRF)."],
  ["Na etapa de elaboração da proposta são realizados estudos preliminares, definidas prioridades, fixados objetivos e estimados os recursos financeiros necessários.","C","VUNESP","As políticas públicas são inseridas no orçamento sob a forma de programa."],
  ["No nível federal, o Ministério da Economia é o órgão do Poder Executivo responsável pela elaboração do PPA, da LDO, da LOA e dos créditos adicionais.","C","CESPE","Nos demais entes, em regra, uma Secretaria do Executivo local."],
  ["O Poder Judiciário e o Ministério Público encaminham suas propostas orçamentárias parciais diretamente ao Poder Legislativo.","E","FCC","Encaminham ao <b>Poder Executivo</b>, constitucionalmente responsável pelo envio da proposta <b>consolidada</b> ao Legislativo."],
  ["Serão apreciados pelas duas Casas do Congresso Nacional os projetos de lei relativos ao plano plurianual, às diretrizes orçamentárias, ao orçamento anual e aos créditos adicionais.","C","FGV","Art. 166, caput, da Constituição Federal."],
  ["No Poder Legislativo federal, os projetos dos instrumentos de planejamento transitam por uma comissão mista permanente composta por senadores e deputados.","C","CESPE","A Comissão Mista de Planos, Orçamentos Públicos e Fiscalização."],
  ["Nos Estados e municípios, os projetos dos instrumentos de planejamento transitam por comissão mista de deputados e vereadores.","E","FCC","Transitam por uma <b>comissão permanente comum</b>, pois esses entes possuem <b>apenas uma casa legislativa</b>."],
  ["Cabe à comissão mista permanente examinar e emitir parecer sobre as contas apresentadas anualmente pelo Presidente da República.","C","VUNESP","Art. 166, § 1º, I."],
  ["Cabe à comissão mista permanente exercer o acompanhamento e a fiscalização orçamentária, sem prejuízo da atuação das demais comissões do Congresso Nacional.","C","CESPE","Art. 166, § 1º, II."],
  ["O Presidente da República poderá enviar mensagem ao Congresso Nacional para propor modificação nos projetos orçamentários enquanto não iniciada a votação, no Plenário, da parte cuja alteração é proposta.","E","FGV","É enquanto não iniciada a votação <b>na comissão mista</b>, e não no Plenário (art. 166, § 5º)."],
  ["As emendas parlamentares são apresentadas na Comissão Mista, que emitirá parecer, e apreciadas, na forma regimental, pelo Plenário das duas Casas do Congresso Nacional.","C","FCC","Art. 166, § 2º."],
  ["As emendas ao projeto de lei do orçamento anual somente podem ser aprovadas caso sejam compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias.","C","CESPE","Art. 166, § 3º, I."],
  ["As emendas ao projeto de lei orçamentária podem indicar como fonte de recursos o excesso de arrecadação previsto para o exercício.","E","FGV","Admitem-se <b>apenas</b> os recursos provenientes de <b>anulação de despesa</b> (art. 166, § 3º, II)."],
  ["É vedado indicar, como fonte de recursos para emenda ao PLOA, a anulação de dotações para pessoal e seus encargos.","C","VUNESP","Assim como o serviço da dívida e as transferências tributárias constitucionais."],
  ["A anulação de despesa relativa a transferências tributárias constitucionais para Estados, Municípios e Distrito Federal pode servir de fonte para emenda ao PLOA.","E","CESPE","É uma das três exclusões do art. 166, § 3º, II."],
  ["São admissíveis emendas ao projeto de lei orçamentária relacionadas com a correção de erros ou omissões ou com os dispositivos do texto do projeto de lei.","C","FCC","Art. 166, § 3º, III, alíneas a e b."],
  ["O serviço da dívida compreende os encargos, os juros, a correção monetária e a parte da amortização do principal da dívida.","C","FGV","Conceito cobrado em conjunto com as vedações do art. 166, § 3º."],
  ["A aprovação do plano plurianual, da lei de diretrizes orçamentárias e da lei orçamentária anual exige maioria absoluta em cada uma das Casas do Poder Legislativo.","E","CESPE","Exige <b>maioria simples</b>: são <b>leis ordinárias</b>."],
  ["A sanção é a aquiescência do Chefe do Poder Executivo ao projeto de lei aprovado no Legislativo.","C","VUNESP","O veto, por sua vez, é a discordância."],
  ["O veto ao projeto de lei orçamentária somente pode ser total.","E","FCC","Pode ser <b>parcial</b> (parte do texto) ou <b>total</b> (todo o projeto)."],
  ["O veto pode ocorrer caso o titular do Executivo considere o projeto inconstitucional ou contrário ao interesse público.","C","CESPE","São os dois fundamentos do veto."],
  ["Aposto o veto, ele deve ser apreciado pelo Parlamento, podendo ser confirmado ou rejeitado.","C","FGV","O Legislativo tem a palavra final."],
  ["Caso o projeto de lei orçamentária anual não seja sancionado até 31 de dezembro, nenhuma despesa poderá ser executada no exercício seguinte até a sanção.","E","CESPE","As LDOs autorizam a execução de parte da programação até o limite de <b>1/12 por mês decorrido</b> até a sanção."],
  ["Não sancionado o PLOA até o fim de abril, as despesas consideradas inadiáveis poderão ser executadas em até 4/12 do valor original.","C","FCC","Um doze avos multiplicado pelo número de meses decorridos."],
  ["A terceira etapa do ciclo orçamentário consiste na arrecadação das receitas e na realização das despesas.","C","VUNESP","Nela ocorrem a execução orçamentária e a financeira."],
  ["A execução orçamentária é a utilização de recursos financeiros para realizar aquilo que foi colocado no orçamento.","E","FGV","Essa é a execução <b>financeira</b>. A orçamentária é a utilização das <b>dotações dos créditos orçamentários</b> consignados na LOA."],
  ["O termo crédito designa o lado orçamentário e o termo recurso designa o lado financeiro.","C","CESPE","Crédito é dotação; recurso é dinheiro. Duas faces da mesma moeda."],
  ["O controle orçamentário consiste na verificação da conformidade e possui foco prospectivo.","E","FCC","O controle tem foco <b>retrospectivo</b>. Quem tem foco prospectivo é a <b>avaliação</b>."],
  ["A avaliação orçamentária visa ao aperfeiçoamento da gestão e avalia resultados, com foco prospectivo.","C","FGV","Já o controle verifica a conformidade e propõe ações corretivas."],
  ["A avaliação do cumprimento do programa de trabalho é feita na etapa de execução do ciclo orçamentário.","E","CESPE","É feita na <b>quarta</b> etapa — controle e avaliação."],
  ["Compete à União elaborar e executar planos nacionais e regionais de ordenação do território e de desenvolvimento econômico e social.","C","VUNESP","Art. 21, IX, da Constituição Federal."],
  ["A legislação sobre planos plurianuais, diretrizes orçamentárias e orçamentos pode ser objeto de delegação legislativa ao Presidente da República.","E","CESPE","Art. 68, § 1º, III: <b>não</b> serão objeto de delegação."],
  ["A delegação ao Presidente da República terá a forma de resolução do Congresso Nacional, que especificará seu conteúdo e os termos de seu exercício.","C","FCC","Art. 68, § 2º — não é decreto legislativo."],
  ["As emendas individuais ao projeto de lei orçamentária serão aprovadas no limite de 2% da receita corrente líquida do exercício anterior ao do encaminhamento do projeto.","C","FGV","Metade desse percentual vai para ações e serviços públicos de saúde."],
  ["O orçamento público brasileiro ganhou traços de orçamento impositivo a partir da Emenda Constitucional nº 86/2015.","C","CESPE","Que incluiu os §§ 9º, 10 e 11 do art. 166. Em regra, porém, o orçamento continua autorizativo."],
  ["A execução do montante destinado a ações e serviços públicos de saúde previsto no art. 166, § 9º, pode ser destinada ao pagamento de pessoal e encargos sociais.","E","FCC","Art. 166, § 10: <b>vedada</b> a destinação para pagamento de pessoal ou encargos sociais."],
  ["A garantia de execução obrigatória aplica-se às emendas de iniciativa de bancada de parlamentares de Estado ou do Distrito Federal, até 1% da receita corrente líquida realizada no exercício anterior.","C","VUNESP","Art. 166, § 12."],
  ["Os recursos correspondentes às dotações orçamentárias destinados ao Legislativo, ao Judiciário, ao Ministério Público e à Defensoria Pública ser-lhes-ão entregues até o dia 20 de cada mês, em duodécimos.","C","CESPE","Art. 168, caput — compreendidos os créditos suplementares e especiais."],
  ["É permitida a transferência a fundos de recursos financeiros oriundos de repasses duodecimais.","E","FGV","Art. 168, § 1º: é <b>vedada</b>."],
  ["O saldo financeiro decorrente dos recursos entregues em duodécimos deve ser restituído ao caixa único do Tesouro do ente federativo ou deduzido das primeiras parcelas duodecimais do exercício seguinte.","C","FCC","Art. 168, § 2º."]
];

var FEY = {
  t1:{ask:"Explique o ciclo orçamentário: conceito, as quatro etapas da LOA e o ciclo ampliado.",
    hint:"Diga quem faz cada etapa. Depois explique por que existe um ciclo “ampliado” e como suas 8 etapas se repartem entre PPA, LDO e LOA.",
    ref:"O ciclo orçamentário pode ser definido como um processo constituído por uma série de passos que se repetem em períodos prefixados, sendo um processo contínuo, dinâmico e flexível. Nele, o orçamento é elaborado pelo Poder Executivo, votado pelo Poder Legislativo, executado pelo Poder Executivo e avaliado pelo Poder Legislativo. São quatro as etapas do ciclo da lei orçamentária anual: a elaboração da proposta de orçamento, a cargo do Executivo; a apreciação, discussão, adequação e autorização, a cargo do Legislativo; a execução dos orçamentos aprovados, novamente a cargo do Executivo; e o controle e a avaliação da execução, com o julgamento das contas, a cargo do Legislativo. Fala-se também em ciclo orçamentário ampliado, com oito etapas, que designa o ciclo conjunto do plano plurianual, da lei de diretrizes orçamentárias e da lei orçamentária anual: a formulação do planejamento plurianual e sua apreciação e adequação referem-se ao PPA; a proposição de metas e prioridades e sua apreciação e adequação referem-se à LDO; e as demais quatro etapas correspondem à LOA."},
  t2:{ask:"Explique a 1ª e a 2ª etapas do ciclo: elaboração e apreciação legislativa.",
    hint:"Na elaboração, diga quem elabora e o que fazem os demais Poderes. Na apreciação, fale da comissão mista, da mensagem modificativa e do quórum.",
    ref:"A elaboração da proposta de orçamento é a fase em que são realizados estudos preliminares, definidas prioridades, fixados os objetivos e estimados os recursos financeiros necessários à realização das políticas públicas inseridas no orçamento sob a forma de programa. No nível federal, o Ministério da Economia é o órgão do Poder Executivo responsável pela elaboração do PPA, da LDO, da LOA e dos créditos adicionais; nos Estados, no Distrito Federal e nos municípios, em regra, há uma Secretaria do Poder Executivo com essa atribuição. Os Poderes Legislativo e Judiciário, bem como o Ministério Público e a Defensoria Pública, elaboram suas propostas orçamentárias parciais e as encaminham ao Poder Executivo, constitucionalmente responsável pelo envio da proposta consolidada ao Legislativo. Na segunda etapa, os projetos relativos ao PPA, à LDO, à LOA e aos créditos adicionais são apreciados pelas duas Casas do Congresso Nacional e transitam por uma comissão mista permanente de senadores e deputados, a Comissão Mista de Planos, Orçamentos Públicos e Fiscalização; nos demais entes, que possuem casa legislativa única, por uma comissão permanente comum. O Presidente da República poderá enviar mensagem ao Congresso Nacional propondo modificação nos projetos enquanto não iniciada a votação, na comissão mista, da parte cuja alteração é proposta. A aprovação se dá por maioria simples, porque se trata de leis ordinárias."},
  t3:{ask:"Explique o regime das emendas parlamentares ao projeto de lei orçamentária.",
    hint:"Tramitação, os três requisitos do § 3º e as três despesas que não podem ser anuladas. Termine com os limites dos §§ 9º e seguintes.",
    ref:"Cada parlamentar poderá apresentar emendas para aperfeiçoar as propostas enviadas pelo Executivo. As emendas são apresentadas na Comissão Mista, que emitirá seu parecer, e apreciadas, na forma regimental, pelo Plenário das duas Casas do Congresso Nacional. Nos termos do art. 166, § 3º, da Constituição, as emendas ao projeto de lei do orçamento anual ou aos projetos que o modifiquem somente podem ser aprovadas caso sejam compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias; indiquem os recursos necessários, admitidos apenas os provenientes de anulação de despesa, excluídas as que incidam sobre dotações para pessoal e seus encargos, sobre o serviço da dívida e sobre transferências tributárias constitucionais para Estados, Municípios e Distrito Federal; ou sejam relacionadas com a correção de erros ou omissões ou com os dispositivos do texto do projeto de lei. As emendas individuais serão aprovadas no limite de dois por cento da receita corrente líquida do exercício anterior ao do encaminhamento do projeto, observado que metade desse percentual será destinada a ações e serviços públicos de saúde, cabendo 1,55% às emendas de Deputados e 0,45% às de Senadores, e sua execução é obrigatória, assim como a das emendas de bancada de Estado ou do Distrito Federal, até um por cento da receita corrente líquida realizada no exercício anterior, salvo impedimentos de ordem técnica."},
  t4:{ask:"Explique a 3ª e a 4ª etapas do ciclo, distinguindo execução orçamentária de financeira e controle de avaliação.",
    hint:"Use os dois quadros de “não confunda”: crédito × recurso e controle × avaliação.",
    ref:"A terceira etapa do ciclo orçamentário consiste na arrecadação das receitas e na realização das despesas, nela ocorrendo a execução orçamentária e a execução financeira. A execução orçamentária é a utilização das dotações dos créditos orçamentários consignados na lei orçamentária anual; a execução financeira é a utilização de recursos financeiros com o objetivo de realizar aquilo que foi colocado no orçamento. Daí a distinção entre crédito e recurso: o termo crédito designa o lado orçamentário, isto é, a dotação, reserva autorizada de gasto, enquanto o termo recurso designa o lado financeiro, isto é, o dinheiro, o saldo de disponibilidade bancária; são duas faces de uma mesma moeda. A quarta etapa compreende o controle e a avaliação da execução. O controle é a forma de assegurar ao Executivo e ao Legislativo que os recursos serão aplicados conforme previsto nas normas, consistindo na verificação da conformidade, propondo ações corretivas e tendo foco retrospectivo. A avaliação orçamentária, por sua vez, é a parte do controle que analisa a eficácia e a eficiência dos cursos de ação cumpridos, visando ao aperfeiçoamento da gestão, avaliando resultados e tendo foco prospectivo. É também nessa etapa que se faz a avaliação do cumprimento do programa de trabalho."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  z1:[
    sl("O ciclo orçamentário",
      '<p>Processo constituído por uma <span class="key">série de passos que se repetem em períodos prefixados</span>. Chama-se “ciclo” porque se repete anualmente.</p>'+
      '<div class="box"><span class="bl">Quem faz o quê</span>'+
      '<ul><li><b>Elaborado</b> pelo Poder Executivo;</li><li><b>Votado</b> pelo Poder Legislativo;</li>'+
      '<li><b>Executado</b> pelo Poder Executivo;</li><li><b>Avaliado</b> pelo Poder Legislativo.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A pegadinha do adjetivo</span>'+
      '<p>“O ciclo orçamentário é um processo <b>intermitente</b>, dinâmico e flexível” → <b>ERRADO</b>. É processo <b>contínuo</b>, dinâmico e flexível.</p></div>'),
    sl("As quatro etapas da LOA",
      '<div class="box"><span class="bl">1ª etapa · Poder Executivo</span><p><b>Elaboração da proposta de orçamento.</b></p></div>'+
      '<div class="box"><span class="bl">2ª etapa · Poder Legislativo</span><p><b>Apreciação, discussão, adequação e autorização.</b></p></div>'+
      '<div class="box"><span class="bl">3ª etapa · Poder Executivo</span><p><b>Execução dos orçamentos aprovados.</b></p></div>'+
      '<div class="box"><span class="bl">4ª etapa · Poder Legislativo</span><p><b>Controle e avaliação da execução</b> (julgamento das contas).</p></div>'+
      '<div class="box tip"><span class="bl">O que mais cai</span><p>São <b>as 4 etapas da LOA</b>. Decore a alternância <b>E–L–E–L</b>.</p></div>'),
    sl("O ciclo orçamentário ampliado — 8 etapas",
      '<p>Designa o ciclo, <span class="key">em conjunto</span>, do <b>PPA, da LDO e da LOA</b>.</p>'+
      '<div class="box"><span class="bl">As oito etapas</span>'+
      '<ul><li><b>1)</b> Formulação do planejamento plurianual, pelo Executivo;</li>'+
      '<li><b>2)</b> Apreciação e adequação do plano, pelo Legislativo;</li>'+
      '<li><b>3)</b> Proposição de metas e prioridades para a administração, pelo Executivo;</li>'+
      '<li><b>4)</b> Apreciação e adequação da LDO, pelo Legislativo;</li>'+
      '<li><b>5)</b> Elaboração da proposta de orçamento, pelo Executivo;</li>'+
      '<li><b>6)</b> Apreciação, adequação e autorização legislativa;</li>'+
      '<li><b>7)</b> Execução dos orçamentos aprovados;</li>'+
      '<li><b>8)</b> Controle e avaliação da execução.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Etapas 1 e 2</span><span class="cd"><b>PPA</b></span></div>'+
      '<div class="chip"><span class="cn">Etapas 3 e 4</span><span class="cd"><b>LDO</b></span></div>'+
      '<div class="chip"><span class="cn">Etapas 5 a 8</span><span class="cd"><b>LOA</b></span></div></div>'),
    sl("Duas observações que caem soltas",
      '<div class="box"><span class="bl">Observação 01</span><p>As <b>alterações orçamentárias</b> são feitas por meio de <b>atos legais elaborados pela SOF</b> — Secretaria de Orçamento Federal.</p></div>'+
      '<div class="box trap"><span class="bl">Observação 02</span><p>Tanto a <b>programação financeira</b> quanto o <b>cronograma de desembolso</b> <b>não</b> devem estar contidos na LOA, mas em <b>decreto executivo</b>, <b>até 30 dias após a publicação</b> da LOA (art. 8º da LRF).</p></div>')
  ],
  z2:[
    sl("1ª etapa — Elaboração da proposta",
      '<p>Fase em que são realizados <span class="key">estudos preliminares, definidas prioridades, fixados os objetivos e estimados os recursos financeiros</span> necessários à realização das políticas públicas inseridas no orçamento, sob a forma de <b>programa</b>.</p>'+
      '<div class="box"><span class="bl">Quem elabora</span>'+
      '<ul><li><b>União:</b> o <b>Ministério da Economia</b> elabora PPA, LDO, LOA e créditos adicionais;</li>'+
      '<li><b>Estados, DF e municípios:</b> em regra, uma <b>Secretaria</b> do Poder Executivo do ente.</li></ul></div>'+
      '<div class="box trap"><span class="bl">O detalhe que a banca inverte</span><p>Legislativo, Judiciário, <b>MP</b> e <b>DP</b> elaboram suas <b>propostas parciais</b> e as encaminham ao <b>Poder Executivo</b> — nunca diretamente ao Legislativo. O Executivo é o responsável constitucional pelo envio da <b>proposta consolidada</b>.</p></div>'),
    sl("2ª etapa — Apreciação legislativa",
      '<p>A fase de discussão corresponde ao <b>debate entre os parlamentares</b> sobre a proposta. Serão apreciados <b>pelas duas Casas do Congresso Nacional</b> os projetos relativos ao <b>PPA, LDO, LOA e créditos adicionais</b>.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">União</span><span class="cd"><b>Comissão mista permanente</b> de senadores e deputados — a <b>CMO</b> (Comissão Mista de Planos, Orçamentos Públicos e Fiscalização).</span></div>'+
      '<div class="chip"><span class="cn">Estados e municípios</span><span class="cd"><b>Comissão permanente comum</b> — há apenas uma casa legislativa: deputados (Estados/DF) ou vereadores (municípios).</span></div></div>'+
      '<div class="box"><span class="bl">CF, art. 166, § 1º — o que cabe à comissão mista</span>'+
      '<ul><li><b>I</b> — examinar e emitir parecer sobre os <b>projetos</b> do artigo e sobre as <b>contas apresentadas anualmente pelo Presidente da República</b>;</li>'+
      '<li><b>II</b> — examinar e emitir parecer sobre os <b>planos e programas nacionais, regionais e setoriais</b> e exercer o <b>acompanhamento e a fiscalização orçamentária</b>, sem prejuízo das demais comissões.</li></ul></div>'+
      '<div class="box trap"><span class="bl">§ 5º — mensagem modificativa</span><p>O Presidente pode propor modificação nos projetos <b>enquanto não iniciada a votação, na comissão mista</b>, da parte cuja alteração é proposta. <b>Não é no Plenário</b> — e é exatamente aí que a banca erra o enunciado de propósito.</p></div>')
  ],
  z3:[
    sl("Emendas parlamentares — tramitação",
      '<p>Cada parlamentar poderá apresentar emendas para <b>aperfeiçoar</b> as propostas enviadas pelo Executivo. As emendas serão:</p>'+
      '<ul><li><b>Apresentadas na Comissão Mista</b>, que emitirá seu parecer; e</li>'+
      '<li><b>Apreciadas, na forma regimental, pelo Plenário das duas Casas</b> do Congresso Nacional.</li></ul>'+
      '<div class="box tip"><span class="bl">Cai assim</span><p>“A apreciação de emendas ao PLOA prevê a solicitação de informações a especialistas, a participação em <b>audiências públicas</b>, discussões e consultas.” → <b>CERTO</b>.</p></div>'),
    sl("CF, art. 166, § 3º — os três requisitos",
      '<div class="box"><span class="bl">As emendas ao PLOA só podem ser aprovadas caso</span>'+
      '<ul><li><b>I</b> — sejam <b>compatíveis com o PPA e com a LDO</b>;</li>'+
      '<li><b>II</b> — <b>indiquem os recursos necessários</b>, admitidos apenas os provenientes de <b>anulação de despesa</b>;</li>'+
      '<li><b>III</b> — sejam relacionadas com a <b>correção de erros ou omissões</b> ou com os <b>dispositivos do texto</b> do projeto de lei.</li></ul></div>'+
      '<div class="box trap"><span class="bl">As três anulações proibidas</span>'+
      '<ul><li><b>a)</b> dotações para <b>pessoal e seus encargos</b>;</li>'+
      '<li><b>b)</b> <b>serviço da dívida</b>;</li>'+
      '<li><b>c)</b> <b>transferências tributárias constitucionais</b> para Estados, Municípios e DF.</li></ul></div>'+
      '<div class="box"><span class="bl">Serviço da dívida</span><p>São os <b>encargos, juros, correção monetária e a parte da amortização do principal</b> da dívida.</p></div>'),
    sl("Aprovação, sanção e veto",
      '<div class="box"><span class="bl">Quórum</span><p>Em cada Casa, a aprovação do PPA, da LDO, da LOA e dos créditos adicionais dá-se por <b>maioria simples</b>, pois são <b>leis ordinárias</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Sanção</span><span class="cd"><b>Aquiescência</b> do Chefe do Executivo ao projeto aprovado.</span></div>'+
      '<div class="chip"><span class="cn">Veto</span><span class="cd"><b>Discordância</b> do Executivo com o projeto aprovado.</span></div></div>'+
      '<div class="box"><span class="bl">O veto pode</span>'+
      '<ul><li>Ser de <b>uma parte</b> do texto (veto <b>parcial</b>) ou de <b>todo</b> o projeto (veto <b>total</b>);</li>'+
      '<li>Ocorrer se o titular do Executivo considerar o projeto <b>inconstitucional</b> ou <b>contrário ao interesse público</b>;</li>'+
      '<li>Ser <b>confirmado ou rejeitado</b> pelo Parlamento, que deve apreciá-lo.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A regra de 1/12 das LDOs</span>'+
      '<p>Se o <b>PLOA não for sancionado até 31 de dezembro</b>, parte da programação poderá ser executada até o limite de <b>1/12 do total de cada ação</b> prevista no projeto, <b>multiplicado pelo número de meses decorridos</b> até a sanção.</p>'+
      '<p><b>Exemplo:</b> não sancionado até o fim de abril (quatro meses), despesas inadiáveis podem ser executadas em <b>4/12</b> do valor original.</p></div>')
  ],
  z4:[
    sl("3ª etapa — Execução",
      '<p>Consiste na <span class="key">arrecadação das receitas e na realização das despesas</span>. Nela ocorrem duas execuções simultâneas.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Execução orçamentária</span><span class="cd">Utilização das <b>dotações dos créditos orçamentários</b> consignados na LOA.</span></div>'+
      '<div class="chip"><span class="cn">Execução financeira</span><span class="cd">Utilização de <b>recursos financeiros</b> para realizar o que foi colocado no orçamento.</span></div></div>'+
      '<div class="box trap"><span class="bl">Não confunda — crédito × recurso</span>'+
      '<ul><li><b>Crédito</b> designa o lado <b>ORÇAMENTÁRIO</b>: dotação, <b>reserva autorizada de gasto</b>.</li>'+
      '<li><b>Recurso</b> designa o lado <b>FINANCEIRO</b>: dinheiro, <b>saldo de disponibilidade bancária</b>.</li></ul>'+
      '<p>São <b>duas faces de uma mesma moeda</b>.</p></div>'),
    sl("4ª etapa — Controle e avaliação",
      '<div class="box"><span class="bl">Controle</span><p>Forma de <b>assegurar ao Executivo e ao Legislativo que os recursos serão aplicados conforme previsto nas normas</b>.</p></div>'+
      '<div class="box"><span class="bl">Avaliação orçamentária</span><p>Parte do controle orçamentário que <b>analisa a eficácia e a eficiência</b> dos cursos de ação cumpridos.</p></div>'+
      '<div class="box trap"><span class="bl">Não confunda — o quadro que decide a questão</span>'+
      '<ul><li><b>Controle:</b> verificação da <b>conformidade</b> · propõe <b>ações corretivas</b> · foco <b>RETROSPECTIVO</b>.</li>'+
      '<li><b>Avaliação:</b> visa ao <b>aperfeiçoamento da gestão</b> · <b>avalia resultados</b> · foco <b>PROSPECTIVO</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Cai assim</span><p>“Momento do processo orçamentário em que é feita a <b>avaliação do cumprimento do programa de trabalho</b>” → <b>controle e avaliação</b>, a <b>4ª etapa</b>.</p></div>')
  ],
  z5:[
    sl("CF — competência da União e delegação legislativa",
      '<div class="box"><span class="bl">Art. 21, IX</span><p>Compete à União <b>elaborar e executar planos nacionais e regionais de ordenação do território e de desenvolvimento econômico e social</b>.</p>'+
      '<p>Ou seja: além do PPA, da LDO e da LOA, também lhe compete elaborar e executar <b>planos de desenvolvimento econômico e social</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 68, § 1º — o que não se delega</span>'+
      '<ul><li>Atos de competência <b>exclusiva do Congresso Nacional</b>;</li>'+
      '<li>Atos de competência <b>privativa da Câmara ou do Senado</b>;</li>'+
      '<li>Matéria reservada à <b>lei complementar</b>;</li>'+
      '<li>Legislação sobre <b>planos plurianuais, diretrizes orçamentárias e orçamentos</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Art. 68, § 2º — a forma</span><p>A delegação ao Presidente terá a forma de <b>resolução do Congresso Nacional</b>, que especificará seu conteúdo e os termos de seu exercício. <b>Não</b> é decreto legislativo — e a banca costuma plantar exatamente esse erro.</p></div>'),
    sl("CF, art. 166 — emendas e execução obrigatória",
      '<div class="box"><span class="bl">§ 9º</span><p>Emendas individuais aprovadas no limite de <b>2% da RCL do exercício anterior</b> ao do encaminhamento do projeto, sendo <b>metade</b> destinada a <b>ações e serviços públicos de saúde</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 9º-A</span><p><b>1,55%</b> às emendas de <b>Deputados</b> · <b>0,45%</b> às de <b>Senadores</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 10</span><p>A execução do montante destinado à saúde, <b>inclusive custeio</b>, será <b>computada</b> para fins do art. 198, § 2º, I (mínimo de 15% da RCL), <b>vedada a destinação para pagamento de pessoal ou encargos sociais</b>. Ou seja: <b>não</b> há aumento do piso da saúde.</p></div>'+
      '<div class="box"><span class="bl">§§ 11, 12, 13 e 16</span>'+
      '<ul><li><b>§ 11</b> — execução <b>obrigatória</b> das emendas <b>individuais</b>, no limite do § 9º;</li>'+
      '<li><b>§ 12</b> — mesma garantia às emendas de <b>bancada</b> de Estado ou do DF, até <b>1% da RCL realizada no exercício anterior</b>;</li>'+
      '<li><b>§ 13</b> — <b>não</b> obrigatórias nos casos de <b>impedimentos de ordem técnica</b>;</li>'+
      '<li><b>§ 16</b> — a transferência obrigatória <b>independe da adimplência</b> do ente e <b>não integra a base da RCL</b> para os limites de despesa de pessoal (art. 169).</li></ul></div>'+
      '<div class="box tip"><span class="bl">Autorizativo ou impositivo?</span><p>O orçamento brasileiro é, em regra, <b>autorizativo</b>, mas ganhou <b>traços impositivos</b> com a <b>EC nº 86/2015</b>, que incluiu os §§ 9º, 10 e 11 do art. 166.</p></div>'),
    sl("CF, art. 168 — os duodécimos",
      '<div class="box"><span class="bl">Caput</span><p>Os recursos correspondentes às dotações orçamentárias, <b>compreendidos os créditos suplementares e especiais</b>, destinados aos órgãos dos Poderes <b>Legislativo e Judiciário</b>, do <b>Ministério Público</b> e da <b>Defensoria Pública</b>, ser-lhes-ão entregues <b>até o dia 20 de cada mês, em duodécimos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O que é o duodécimo</span><p>Repasse <b>mensal</b> devido pelo Executivo (arrecadador dos tributos) aos demais Poderes e a órgãos constitucionais, correspondente a <b>1/12 da receita líquida prevista</b> para o ano.</p></div>'+
      '<div class="box"><span class="bl">§ 1º</span><p>É <b>vedada a transferência a fundos</b> de recursos financeiros oriundos de <b>repasses duodecimais</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 2º</span><p>O <b>saldo financeiro</b> decorrente dos recursos entregues deve ser <b>restituído ao caixa único do Tesouro</b> do ente, ou terá seu valor <b>deduzido das primeiras parcelas duodecimais do exercício seguinte</b>.</p></div>')
  ]
};

var EX = {
x1:{t:"order", instr:"Ordene as quatro etapas do ciclo orçamentário da LOA",
  items:["Elaboração da proposta de orçamento",
         "Apreciação, discussão, adequação e autorização",
         "Execução dos orçamentos aprovados",
         "Controle e avaliação da execução"],
  why:"A alternância é <b>Executivo – Legislativo – Executivo – Legislativo</b>."},

x2:{t:"match", instr:"Correlacione a etapa ao Poder responsável",
  pairs:[["1ª — Elaboração da proposta","Poder Executivo"],
         ["2ª — Apreciação e autorização","Poder Legislativo"],
         ["3ª — Execução dos orçamentos","Poder Executivo"],
         ["4ª — Controle e avaliação","Poder Legislativo"]]},

x3:{t:"gap", instr:"Complete a frase",
  before:"O ciclo orçamentário é um processo ", after:", dinâmico e flexível.",
  options:["contínuo","intermitente","descontínuo"], answer:0,
  why:"A troca por “intermitente” é a pegadinha mais repetida do módulo."},

x4:{t:"wordbank", instr:"Monte a definição do ciclo orçamentário",
  target:["série","de","passos","que","se","repetem","em","períodos","prefixados"],
  extra:["intermitentes","aleatórios","únicos"],
  why:"Daí o nome “ciclo”: repete-se anualmente."},

x5:{t:"sort", instr:"No ciclo ampliado, cada etapa pertence a qual instrumento?",
  buckets:["PPA","LDO","LOA"],
  items:[["Formulação do planejamento plurianual",0],
         ["Apreciação e adequação do plano",0],
         ["Proposição de metas e prioridades",1],
         ["Apreciação e adequação das diretrizes",1],
         ["Elaboração da proposta de orçamento",2],
         ["Apreciação, adequação e autorização legislativa",2],
         ["Execução dos orçamentos aprovados",2],
         ["Controle e avaliação da execução",2]],
  why:"Etapas 1 e 2 → PPA · 3 e 4 → LDO · 5 a 8 → LOA."},

x6:{t:"mc", instr:"O ciclo orçamentário ampliado possui quantas etapas?",
  options:["Oito","Quatro","Seis","Doze"], answer:0,
  why:"Designa o ciclo conjunto do PPA, da LDO e da LOA."},

x7:{t:"multi", instr:"Marque o que é verdadeiro sobre o ciclo orçamentário",
  options:["O orçamento é elaborado pelo Executivo",
           "É votado pelo Legislativo",
           "É executado pelo Executivo",
           "É avaliado pelo Legislativo",
           "É elaborado e votado pelo mesmo Poder",
           "É um processo intermitente"],
  answers:[0,1,2,3],
  why:"As duas últimas contrariam a alternância E–L–E–L e a característica da continuidade."},

x8:{t:"gap", instr:"Complete a frase",
  before:"A programação financeira e o cronograma de desembolso devem constar de ",
  after:", em até 30 dias após a publicação da LOA.",
  options:["decreto executivo","anexo da própria LOA","resolução do Congresso Nacional"],
  answer:0,
  why:"Art. 8º da LRF. Nunca da própria LOA."},

x9:{t:"mc", instr:"No âmbito federal, as alterações orçamentárias são feitas por atos legais elaborados pela:",
  options:["Secretaria de Orçamento Federal (SOF)","Comissão Mista de Orçamento",
           "Secretaria do Tesouro Nacional","Controladoria-Geral da União"],
  answer:0,
  why:"A SOF é o órgão responsável por esses atos."},

x10:{t:"multi", instr:"Marque o que ocorre na 1ª etapa do ciclo",
  options:["Realizam-se estudos preliminares","Definem-se prioridades",
           "Fixam-se os objetivos","Estimam-se os recursos financeiros necessários",
           "Vota-se o projeto no Plenário","Julgam-se as contas do exercício"],
  answers:[0,1,2,3],
  why:"As políticas públicas são inseridas no orçamento sob a forma de <b>programa</b>."},

x11:{t:"mc", instr:"No nível federal, qual órgão elabora PPA, LDO, LOA e créditos adicionais?",
  options:["Ministério da Economia","Congresso Nacional",
           "Tribunal de Contas da União","Casa Civil"],
  answer:0,
  why:"Nos Estados, DF e municípios, em regra, uma Secretaria do Executivo local."},

x12:{t:"gap", instr:"Complete a frase",
  before:"O Judiciário, o MP e a DP elaboram suas propostas orçamentárias parciais e as encaminham ao ",
  after:", responsável constitucionalmente pelo envio da proposta consolidada ao Legislativo.",
  options:["Poder Executivo","Poder Legislativo","Tribunal de Contas"],
  answer:0,
  why:"A consolidação é atribuição exclusiva do Executivo."},

x13:{t:"match", instr:"Correlacione o ente à comissão por que tramitam os projetos",
  pairs:[["União","Comissão mista permanente de senadores e deputados"],
         ["Estados e municípios","Comissão permanente comum (casa legislativa única)"]]},

x14:{t:"multi", instr:"Marque o que cabe à comissão mista permanente (art. 166, § 1º)",
  options:["Examinar e emitir parecer sobre os projetos de PPA, LDO, LOA e créditos adicionais",
           "Examinar e emitir parecer sobre as contas apresentadas anualmente pelo Presidente da República",
           "Examinar e emitir parecer sobre planos e programas nacionais, regionais e setoriais",
           "Exercer o acompanhamento e a fiscalização orçamentária",
           "Sancionar a lei orçamentária anual",
           "Julgar as contas dos ordenadores de despesa"],
  answers:[0,1,2,3],
  why:"A atuação da comissão não prejudica a das demais comissões do Congresso Nacional."},

x15:{t:"gap", instr:"Complete a frase",
  before:"O Presidente da República poderá propor modificação nos projetos orçamentários enquanto não iniciada a votação, ",
  after:", da parte cuja alteração é proposta.",
  options:["na comissão mista","no Plenário da Câmara","no Plenário do Senado"],
  answer:0,
  why:"Art. 166, § 5º. O erro plantado é trocar a comissão mista pelo Plenário."},

x16:{t:"order", instr:"Ordene a tramitação de uma emenda parlamentar ao PLOA",
  items:["Apresentação na Comissão Mista",
         "Parecer da Comissão Mista",
         "Apreciação pelo Plenário das duas Casas do Congresso Nacional"],
  why:"Art. 166, § 2º."},

x17:{t:"multi", instr:"Marque os requisitos de aprovação das emendas ao PLOA (art. 166, § 3º)",
  options:["Compatibilidade com o plano plurianual e com a lei de diretrizes orçamentárias",
           "Indicação dos recursos necessários, provenientes de anulação de despesa",
           "Relação com a correção de erros ou omissões",
           "Relação com os dispositivos do texto do projeto de lei",
           "Autorização prévia do Tribunal de Contas",
           "Indicação de excesso de arrecadação como fonte"],
  answers:[0,1,2,3],
  why:"A única fonte admitida é a <b>anulação de despesa</b>."},

x18:{t:"sort", instr:"Essa despesa pode ser anulada para financiar emenda ao PLOA?",
  buckets:["Pode ser anulada","Não pode ser anulada"],
  items:[["Dotação de custeio de um programa de turismo",0],
         ["Dotação de investimento em obra não prioritária",0],
         ["Dotações para pessoal e seus encargos",1],
         ["Serviço da dívida",1],
         ["Transferências tributárias constitucionais a Estados, Municípios e DF",1]],
  why:"São exatamente três as exclusões do art. 166, § 3º, II."},

x19:{t:"wordbank", instr:"Monte o conceito de serviço da dívida",
  target:["encargos",",","juros",",","correção","monetária","e","amortização","do","principal"],
  extra:["dotação","transferências","tributárias"],
  why:"Conceito cobrado junto com as vedações do art. 166, § 3º, II."},

x20:{t:"mc", instr:"Qual o quórum de aprovação do PPA, da LDO e da LOA em cada Casa?",
  options:["Maioria simples","Maioria absoluta","Dois terços","Três quintos"],
  answer:0,
  why:"São <b>leis ordinárias</b> — não exigem quórum qualificado."},

x21:{t:"match", instr:"Correlacione o ato ao seu significado",
  pairs:[["Sanção","Aquiescência do Chefe do Executivo ao projeto aprovado"],
         ["Veto","Discordância do Executivo com o projeto aprovado"]]},

x22:{t:"multi", instr:"Marque o que é verdadeiro sobre o veto",
  options:["Pode ser parcial, de uma parte do texto",
           "Pode ser total, de todo o projeto",
           "Cabe se o projeto for considerado inconstitucional",
           "Cabe se o projeto for considerado contrário ao interesse público",
           "É definitivo e não se submete ao Parlamento",
           "Somente pode ser total"],
  answers:[0,1,2,3],
  why:"Aposto o veto, ele deve ser apreciado pelo Parlamento, que pode confirmá-lo ou rejeitá-lo."},

x23:{t:"mc", instr:"PLOA não sancionado até o fim de abril. Quanto das despesas inadiáveis pode ser executado?",
  options:["4/12 do valor original","1/12 do valor original",
           "8/12 do valor original","Nada, até a sanção"],
  answer:0,
  why:"1/12 do total de cada ação <b>multiplicado pelo número de meses decorridos</b> até a sanção."},

x24:{t:"gap", instr:"Complete a frase",
  before:"Não sancionado o PLOA até 31 de dezembro, parte da programação poderá ser executada até o limite de ",
  after:" do total de cada ação, multiplicado pelo número de meses decorridos até a sanção.",
  options:["1/12","1/4","1/6"], answer:0,
  why:"É a regra do duodécimo prevista a cada ano nas LDOs."},

x25:{t:"match", instr:"Correlacione a execução ao seu objeto",
  pairs:[["Execução orçamentária","Utilização das dotações dos créditos consignados na LOA"],
         ["Execução financeira","Utilização de recursos financeiros para realizar o planejado"]]},

x26:{t:"sort", instr:"O termo designa o lado orçamentário ou o financeiro?",
  buckets:["Orçamentário (crédito)","Financeiro (recurso)"],
  items:[["Dotação",0],["Reserva autorizada de gasto",0],
         ["Dinheiro",1],["Saldo de disponibilidade bancária",1]],
  why:"Crédito e recurso são duas faces de uma mesma moeda."},

x27:{t:"sort", instr:"A característica é do controle ou da avaliação?",
  buckets:["Controle","Avaliação"],
  items:[["Verificação da conformidade",0],["Propõe ações corretivas",0],
         ["Foco retrospectivo",0],["Visa ao aperfeiçoamento da gestão",1],
         ["Avalia resultados",1],["Foco prospectivo",1]],
  why:"O quadro “não confunda” que decide a questão de múltipla escolha do tema."},

x28:{t:"mc", instr:"Em que etapa se faz a avaliação do cumprimento do programa de trabalho?",
  options:["Controle e avaliação (4ª etapa)","Execução (3ª etapa)",
           "Elaboração da proposta (1ª etapa)","Apreciação legislativa (2ª etapa)"],
  answer:0,
  why:"É a etapa em que se analisam a eficácia e a eficiência dos cursos de ação cumpridos."},

x29:{t:"gap", instr:"Complete a frase",
  before:"A avaliação orçamentária é a parte do controle que analisa a ",
  after:" dos cursos de ação cumpridos.",
  options:["eficácia e a eficiência","legalidade e a legitimidade","economicidade e a moralidade"],
  answer:0,
  why:"Já o controle, propriamente, verifica a conformidade e propõe ações corretivas."},

x30:{t:"multi", instr:"Marque o que NÃO pode ser objeto de delegação legislativa (art. 68, § 1º)",
  options:["Atos de competência exclusiva do Congresso Nacional",
           "Atos de competência privativa da Câmara ou do Senado",
           "Matéria reservada à lei complementar",
           "Legislação sobre planos plurianuais, diretrizes orçamentárias e orçamentos",
           "Legislação sobre política agrícola",
           "Legislação sobre organização administrativa federal"],
  answers:[0,1,2,3],
  why:"Os incisos I a III do § 1º, somados às competências exclusivas e privativas."},

x31:{t:"mc", instr:"A delegação ao Presidente da República terá a forma de:",
  options:["Resolução do Congresso Nacional","Decreto legislativo",
           "Medida provisória","Emenda constitucional"],
  answer:0,
  why:"Art. 68, § 2º — a resolução especificará seu conteúdo e os termos de seu exercício."},

x32:{t:"gap", instr:"Complete a frase",
  before:"Compete à União elaborar e executar planos nacionais e regionais de ordenação do território e de ",
  after:".",
  options:["desenvolvimento econômico e social","arrecadação tributária","reforma administrativa"],
  answer:0,
  why:"Art. 21, IX — além do PPA, da LDO e da LOA."},

x33:{t:"multi", instr:"Marque o que a Constituição estabelece sobre as emendas individuais",
  options:["Limite de 2% da RCL do exercício anterior ao do encaminhamento do projeto",
           "Metade do percentual destinada a ações e serviços públicos de saúde",
           "1,55% às emendas de Deputados e 0,45% às de Senadores",
           "Execução orçamentária e financeira obrigatória",
           "Podem ser destinadas ao pagamento de pessoal e encargos sociais na área da saúde",
           "Limite de 1% da RCL para as emendas individuais"],
  answers:[0,1,2,3],
  why:"O § 10 veda a destinação para pessoal e encargos; o limite de 1% é o das emendas de <b>bancada</b>."},

x34:{t:"mc", instr:"A EC que deu traços impositivos ao orçamento, incluindo os §§ 9º, 10 e 11 do art. 166, foi a:",
  options:["EC nº 86/2015","EC nº 100/2019","EC nº 126/2022","EC nº 95/2016"],
  answer:0,
  why:"O orçamento brasileiro, em regra, permanece <b>autorizativo</b>."},

x35:{t:"gap", instr:"Complete a frase",
  before:"Os recursos das dotações destinados ao Legislativo, ao Judiciário, ao MP e à DP ser-lhes-ão entregues até o dia ",
  after:" de cada mês, em duodécimos.",
  options:["20","10","30"], answer:0,
  why:"Art. 168, caput — compreendidos os créditos suplementares e especiais."},

x36:{t:"multi", instr:"Marque o que dispõe o art. 168 da Constituição Federal",
  options:["Os recursos compreendem os créditos suplementares e especiais",
           "A entrega se dá até o dia 20 de cada mês, em duodécimos",
           "É vedada a transferência a fundos de recursos oriundos de repasses duodecimais",
           "O saldo financeiro deve ser restituído ao caixa único do Tesouro ou deduzido das primeiras parcelas do exercício seguinte",
           "O repasse depende de convênio com o Poder Executivo",
           "O saldo financeiro pode ser retido pelo órgão recebedor"],
  answers:[0,1,2,3],
  why:"Caput e §§ 1º e 2º do art. 168."},

x37:{t:"order", instr:"Ordene a trajetória de uma proposta orçamentária no ente federal",
  items:["Propostas parciais dos demais Poderes, do MP e da DP",
         "Consolidação e envio pelo Poder Executivo",
         "Exame e parecer da comissão mista permanente",
         "Apreciação pelo Plenário das duas Casas",
         "Sanção ou veto do Chefe do Executivo"],
  why:"É o caminho da 1ª à 2ª etapa do ciclo, até a sanção."},

x38:{t:"mc", instr:"O duodécimo do art. 168 corresponde a:",
  options:["1/12 do valor da receita líquida prevista para o ano",
           "1/12 da despesa efetivamente realizada no mês anterior",
           "2% da receita corrente líquida",
           "1/12 do superávit financeiro apurado"],
  answer:0,
  why:"É um repasse mensal do Executivo, arrecadador dos tributos, aos demais Poderes e órgãos."}
};

for(var i=0;i<QS.length;i++) EX["y"+i]={t:"ce", qi:i};

var KIT = {
  t1:{tema:"Ciclo orçamentário — conceito e etapas",
    bases:["CF/1988, arts. 165 a 169 — processo legislativo orçamentário",
           "LC nº 101/2000, art. 8º — programação financeira e cronograma de desembolso",
           "Lei nº 4.320/1964, arts. 2º e 22 — proposta orçamentária",
           "Doutrina — ciclo orçamentário ampliado (PPA, LDO e LOA)"],
    ouro:["série de passos que se repetem em períodos prefixados","processo contínuo, dinâmico e flexível",
          "elaborado pelo Executivo","votado pelo Legislativo","executado pelo Executivo",
          "avaliado pelo Legislativo","ciclo orçamentário ampliado","oito etapas",
          "decreto executivo","trinta dias após a publicação da LOA"],
    abertura:"O ciclo orçamentário pode ser definido como o processo constituído por uma série de passos que se repetem em períodos prefixados, de natureza contínua, dinâmica e flexível, no qual o orçamento é elaborado pelo Poder Executivo, votado pelo Poder Legislativo, executado pelo Poder Executivo e avaliado pelo Poder Legislativo.",
    evite:"Não descreva o ciclo como processo <b>intermitente</b>. É <b>contínuo</b> — e essa única palavra costuma decidir o item."},
  t2:{tema:"Elaboração e apreciação legislativa",
    bases:["CF/1988, art. 165, § 9º — leis orçamentárias e sua tramitação",
           "CF/1988, art. 166, caput e § 1º — comissão mista permanente",
           "CF/1988, art. 166, § 5º — mensagem modificativa",
           "CF/1988, art. 99 e art. 127, § 3º — autonomia financeira do Judiciário e do MP"],
    ouro:["estudos preliminares","prioridades, objetivos e recursos financeiros","sob a forma de programa",
          "propostas orçamentárias parciais","proposta consolidada",
          "comissão mista permanente de Senadores e Deputados",
          "acompanhamento e a fiscalização orçamentária",
          "enquanto não iniciada a votação, na comissão mista","maioria simples","leis ordinárias"],
    abertura:"A elaboração da proposta orçamentária é a etapa em que se realizam estudos preliminares, definem-se prioridades, fixam-se objetivos e estimam-se os recursos financeiros necessários à realização das políticas públicas, cabendo aos demais Poderes e ao Ministério Público encaminhar suas propostas parciais ao Poder Executivo, constitucionalmente responsável pelo envio da proposta consolidada ao Legislativo.",
    evite:"Não afirme que o Judiciário ou o Ministério Público encaminham a proposta <b>diretamente ao Legislativo</b>, nem que a mensagem modificativa é cabível até o início da votação <b>no Plenário</b>."},
  t3:{tema:"Emendas parlamentares ao PLOA",
    bases:["CF/1988, art. 166, §§ 2º e 3º — tramitação e requisitos das emendas",
           "CF/1988, art. 166, §§ 9º, 9º-A, 10, 11, 12 e 13 — limites e execução obrigatória",
           "CF/1988, art. 166, § 16 — transferências obrigatórias",
           "EC nº 86/2015 e EC nº 126/2022"],
    ouro:["apresentadas na Comissão Mista","apreciadas pelo Plenário das duas Casas",
          "compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias",
          "admitidos apenas os provenientes de anulação de despesa",
          "dotações para pessoal e seus encargos","serviço da dívida",
          "transferências tributárias constitucionais","correção de erros ou omissões",
          "2% da receita corrente líquida","execução obrigatória","impedimentos de ordem técnica"],
    abertura:"Nos termos do art. 166, § 3º, da Constituição Federal, as emendas ao projeto de lei do orçamento anual somente podem ser aprovadas caso sejam compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias, indiquem os recursos necessários — admitidos apenas os provenientes de anulação de despesa — ou sejam relacionadas com a correção de erros ou omissões ou com os dispositivos do texto do projeto de lei.",
    evite:"Não admita o excesso de arrecadação ou o superávit financeiro como fonte de emenda ao PLOA. A única fonte é a <b>anulação de despesa</b>, com as três exclusões constitucionais."},
  t4:{tema:"Execução, controle e avaliação",
    bases:["CF/1988, arts. 70 a 75 — fiscalização contábil, financeira e orçamentária",
           "CF/1988, art. 168 e §§ — duodécimos",
           "Lei nº 4.320/1964, arts. 75 a 82 — controle da execução orçamentária",
           "LC nº 101/2000, arts. 8º e 9º — programação financeira e limitação de empenho"],
    ouro:["arrecadação das receitas e realização das despesas","execução orçamentária e financeira",
          "dotações dos créditos orçamentários consignados na LOA","recursos financeiros",
          "crédito é orçamentário","recurso é financeiro","verificação da conformidade",
          "ações corretivas","foco retrospectivo","aperfeiçoamento da gestão",
          "avalia resultados","foco prospectivo","até o dia 20 de cada mês, em duodécimos"],
    abertura:"A terceira etapa do ciclo orçamentário consiste na arrecadação das receitas e na realização das despesas, nela ocorrendo tanto a execução orçamentária, que é a utilização das dotações dos créditos consignados na lei orçamentária anual, quanto a execução financeira, que é a utilização dos recursos financeiros necessários à realização do que foi planejado.",
    evite:"Não atribua ao <b>controle</b> o foco prospectivo. Controle é conformidade e foco retrospectivo; avaliação é resultado e foco prospectivo."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de estrutura: a banca premia quem organiza as etapas e nomeia os Poderes com precisão.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre o ciclo orçamentário, disserte necessariamente sobre:</p>'+
  '<ol><li>o conceito de ciclo orçamentário, suas quatro etapas e os Poderes responsáveis por cada uma;</li>'+
  '<li>o regime constitucional das emendas parlamentares ao projeto de lei orçamentária anual;</li>'+
  '<li>a distinção entre execução orçamentária e execução financeira e entre controle e avaliação.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O ciclo orçamentário pode ser definido como o <b>processo constituído por uma série de passos que se repetem em períodos prefixados</b>, tratando-se de processo <b>contínuo, dinâmico e flexível</b>. Compreende quatro etapas, com alternância entre os Poderes. A primeira é a <b>elaboração da proposta de orçamento</b>, a cargo do <b>Poder Executivo</b>, em que se realizam estudos preliminares, definem-se prioridades, fixam-se objetivos e estimam-se os recursos financeiros necessários às políticas públicas, inseridas no orçamento sob a forma de programa; nela, o Legislativo, o Judiciário, o Ministério Público e a Defensoria Pública elaboram suas <b>propostas parciais</b> e as encaminham ao Executivo, constitucionalmente responsável pelo envio da <b>proposta consolidada</b>. A segunda é a <b>apreciação, discussão, adequação e autorização</b>, a cargo do <b>Poder Legislativo</b>, em que os projetos relativos ao PPA, à LDO, à LOA e aos créditos adicionais são apreciados pelas duas Casas do Congresso Nacional e transitam pela <b>comissão mista permanente</b> de senadores e deputados, à qual incumbe, na forma do art. 166, § 1º, da Constituição, examinar e emitir parecer sobre esses projetos e sobre as contas anualmente apresentadas pelo Presidente da República, bem como exercer o acompanhamento e a fiscalização orçamentária. A terceira é a <b>execução dos orçamentos aprovados</b>, novamente a cargo do <b>Executivo</b>, e a quarta é o <b>controle e a avaliação da execução</b>, com o julgamento das contas, a cargo do <b>Legislativo</b>. Fala-se, ainda, em <b>ciclo ampliado</b>, de oito etapas, que abrange conjuntamente o PPA, a LDO e a LOA.</p>'+
  '<p>Quanto às <b>emendas parlamentares</b>, são elas apresentadas na Comissão Mista, que emite parecer, e apreciadas, na forma regimental, pelo Plenário das duas Casas do Congresso Nacional. Nos termos do <b>art. 166, § 3º</b>, da Constituição, as emendas ao projeto de lei do orçamento anual somente podem ser aprovadas caso sejam <b>compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias</b>; <b>indiquem os recursos necessários</b>, admitidos apenas os provenientes de <b>anulação de despesa</b>, excluídas as que incidam sobre dotações para pessoal e seus encargos, sobre o serviço da dívida e sobre transferências tributárias constitucionais para Estados, Municípios e Distrito Federal; ou sejam relacionadas com a <b>correção de erros ou omissões</b> ou com os <b>dispositivos do texto</b> do projeto de lei. As emendas individuais são aprovadas no limite de <b>2% da receita corrente líquida do exercício anterior</b>, metade destinada a ações e serviços públicos de saúde, cabendo 1,55% às de Deputados e 0,45% às de Senadores, e sua <b>execução é obrigatória</b>, o mesmo valendo para as emendas de bancada até 1% da receita corrente líquida realizada no exercício anterior, ressalvados os <b>impedimentos de ordem técnica</b>. Registre-se que o orçamento brasileiro permanece, em regra, <b>autorizativo</b>, tendo ganhado traços impositivos com a Emenda Constitucional nº 86/2015.</p>'+
  '<p>Na etapa de execução convivem duas dimensões. A <b>execução orçamentária</b> é a utilização das <b>dotações dos créditos orçamentários</b> consignados na lei orçamentária anual; a <b>execução financeira</b> é a utilização dos <b>recursos financeiros</b> com o objetivo de realizar o que foi planejado. Daí a distinção entre <b>crédito</b>, que designa o lado orçamentário — a dotação, reserva autorizada de gasto —, e <b>recurso</b>, que designa o lado financeiro — o dinheiro, o saldo de disponibilidade bancária —, duas faces de uma mesma moeda. Já na quarta etapa, o <b>controle</b> assegura ao Executivo e ao Legislativo que os recursos serão aplicados conforme previsto nas normas, consistindo na <b>verificação da conformidade</b>, propondo <b>ações corretivas</b> e possuindo <b>foco retrospectivo</b>; a <b>avaliação</b>, parte do controle orçamentário, analisa a <b>eficácia e a eficiência</b> dos cursos de ação cumpridos, visa ao <b>aperfeiçoamento da gestão</b>, <b>avalia resultados</b> e possui <b>foco prospectivo</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> conceito literal, as quatro etapas na ordem com o Poder de cada uma, a comissão mista com os dois incisos do § 1º e menção ao ciclo ampliado.</li>'+
  '<li><b>Item 2:</b> a tramitação (Comissão Mista → Plenário das duas Casas), os três incisos do § 3º e, sobretudo, as <b>três exclusões</b> da anulação de despesa.</li>'+
  '<li><b>Item 3:</b> os dois pares de distinção, com crédito × recurso e o eixo retrospectivo × prospectivo.</li>'+
  '<li><b>Fecho:</b> dizer que o orçamento é autorizativo com traços impositivos vale ponto e demonstra domínio da EC 86/2015.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o dispositivo entre parênteses em vez de parágrafo explicativo.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Durante a tramitação do projeto de lei orçamentária anual de determinado ente, verificaram-se os seguintes fatos:</p>'+
  '<ol><li>o Tribunal de Justiça encaminhou sua proposta orçamentária parcial diretamente à Assembleia Legislativa;</li>'+
  '<li>um parlamentar apresentou emenda indicando, como fonte de recursos, a anulação de dotação destinada ao serviço da dívida;</li>'+
  '<li>o Chefe do Executivo, já iniciada a votação na comissão, enviou mensagem propondo modificação na parte em votação;</li>'+
  '<li>encerrado o exercício sem sanção do PLOA, o ente executou, até o fim de março, 3/12 de cada ação prevista no projeto;</li>'+
  '<li>o Tribunal de Justiça, ao fim do exercício, manteve em conta própria o saldo não utilizado dos duodécimos recebidos.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie a regularidade de cada fato, com fundamento constitucional.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Proposta parcial enviada ao Legislativo.</b> <b>Irregular.</b> Os demais Poderes, o Ministério Público e a Defensoria Pública elaboram suas <b>propostas orçamentárias parciais</b> e as encaminham ao <b>Poder Executivo</b>, a quem compete constitucionalmente o envio da <b>proposta consolidada</b> ao Legislativo. O envio direto rompe a unidade da proposta.</p>'+
  '<p><b>2. Emenda custeada por anulação do serviço da dívida.</b> <b>Irregular.</b> Embora a <b>anulação de despesa</b> seja a única fonte admitida para emendas ao PLOA, o art. 166, § 3º, II, <b>exclui</b> expressamente as anulações que incidam sobre dotações para <b>pessoal e seus encargos</b>, sobre o <b>serviço da dívida</b> e sobre <b>transferências tributárias constitucionais</b> para Estados, Municípios e Distrito Federal. A emenda não pode ser aprovada.</p>'+
  '<p><b>3. Mensagem modificativa após iniciada a votação.</b> <b>Irregular.</b> O art. 166, § 5º, autoriza o envio de mensagem propondo modificação <b>enquanto não iniciada a votação, na comissão mista</b>, da parte cuja alteração é proposta. Iniciada a votação daquela parte, a via está preclusa.</p>'+
  '<p><b>4. Execução de 3/12 até o fim de março.</b> <b>Regular.</b> As leis de diretrizes orçamentárias determinam, a cada ano, que, não sancionado o PLOA até 31 de dezembro, parte da programação poderá ser executada até o limite de <b>1/12 do total de cada ação</b>, <b>multiplicado pelo número de meses decorridos</b> até a sanção — três meses, três doze avos.</p>'+
  '<p><b>5. Retenção do saldo dos duodécimos.</b> <b>Irregular.</b> Nos termos do art. 168, § 2º, da Constituição, o <b>saldo financeiro</b> decorrente dos recursos entregues em duodécimos deve ser <b>restituído ao caixa único do Tesouro</b> do ente federativo, ou terá seu valor <b>deduzido das primeiras parcelas duodecimais do exercício seguinte</b>. Registre-se, ainda, que o § 1º veda a <b>transferência a fundos</b> de recursos oriundos de repasses duodecimais.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Validar o <b>1</b> invocando a autonomia financeira do Judiciário. A autonomia existe, mas o envio é sempre consolidado pelo Executivo.</li>'+
  '<li>Aprovar a emenda do <b>2</b> porque “veio de anulação de despesa”. A fonte é correta; a <b>despesa</b> anulada é que está excluída.</li>'+
  '<li>Aceitar a mensagem do <b>3</b> por ainda não ter havido votação em Plenário. O marco é a votação <b>na comissão mista</b>.</li>'+
  '<li>Reprovar o <b>4</b> por “executar sem lei”. A própria LDO autoriza a execução proporcional.</li></ul></div>';

var TEC = [["CESPE","Q3bsin"],["FCC","Q3bsj7"],["FGV","Q3bsjc"],["VUNESP","Q3bsjm"]];

var UNITS = [
  {n:1, title:"O ciclo orçamentário", cvar:"u1", lessons:[
    {id:"c1", type:"teoria", title:"Conceito, etapas e ciclo ampliado",  xp:10, data:"z1"},
    {id:"c2", type:"drill",  title:"Praticar · conceito",                xp:20, data:["x3","x4","y0","y1","y2"]},
    {id:"c3", type:"drill",  title:"Praticar · as quatro etapas",        xp:20, data:["x1","x2","x7","y3","y4","y5","y8"]},
    {id:"c4", type:"drill",  title:"Praticar · ciclo ampliado",          xp:25, data:["x5","x6","y6","y7"]},
    {id:"c5", type:"drill",  title:"Praticar · SOF e programação",       xp:20, data:["x8","x9","y9","y10"]},
    {id:"c6", type:"flash",  title:"Flashcards · ciclo e etapas",        xp:15, data:[0,1,2,3,4,5,6,7,8]},
    {id:"c7", type:"feynman",title:"Explique o ciclo orçamentário",      xp:30, data:"t1"}
  ]},
  {n:2, title:"Elaboração e apreciação legislativa", cvar:"u2", lessons:[
    {id:"c9", type:"teoria", title:"1ª e 2ª etapas",                     xp:10, data:"z2"},
    {id:"c10",type:"drill",  title:"Praticar · elaboração",              xp:20, data:["x10","x11","x12","y11","y12","y13"]},
    {id:"c11",type:"drill",  title:"Praticar · comissões",               xp:20, data:["x13","x14","y14","y15","y16","y17","y18"]},
    {id:"c12",type:"drill",  title:"Praticar · mensagem modificativa",   xp:25, data:["x15","x37","y19"]},
    {id:"c13",type:"flash",  title:"Flashcards · elaboração e apreciação", xp:15, data:[9,10,11,12,13,14,15,16,17]},
    {id:"c14",type:"feynman",title:"Explique a elaboração e a apreciação", xp:30, data:"t2"}
  ]},
  {n:3, title:"Emendas, sanção e veto", cvar:"u3", lessons:[
    {id:"c16",type:"teoria", title:"Emendas parlamentares",              xp:10, data:"z3"},
    {id:"c17",type:"drill",  title:"Praticar · tramitação das emendas",  xp:20, data:["x16","x17","y20","y21"]},
    {id:"c18",type:"drill",  title:"Praticar · fontes vedadas",          xp:25, data:["x18","x19","y22","y23","y24","y25","y26"]},
    {id:"c19",type:"drill",  title:"Praticar · quórum, sanção e veto",   xp:20, data:["x20","x21","x22","y27","y28","y29","y30","y31"]},
    {id:"c20",type:"drill",  title:"Praticar · a regra de 1/12",         xp:25, data:["x23","x24","y32","y33"]},
    {id:"c21",type:"flash",  title:"Flashcards · emendas e veto",        xp:15, data:[18,19,20,21,22,23,24,25,26,27]},
    {id:"c22",type:"feynman",title:"Explique as emendas parlamentares",  xp:30, data:"t3"}
  ]},
  {n:4, title:"Execução, controle e Constituição", cvar:"u4", lessons:[
    {id:"c24",type:"teoria", title:"3ª e 4ª etapas",                     xp:10, data:"z4"},
    {id:"c25",type:"drill",  title:"Praticar · execução",                xp:20, data:["x25","x26","y34","y35","y36"]},
    {id:"c26",type:"drill",  title:"Praticar · controle × avaliação",    xp:25, data:["x27","x28","x29","y37","y38","y39"]},
    {id:"c27",type:"teoria", title:"Dispositivos da Constituição",       xp:10, data:"z5"},
    {id:"c28",type:"drill",  title:"Praticar · competência e delegação", xp:20, data:["x30","x31","x32","y40","y41","y42"]},
    {id:"c29",type:"drill",  title:"Praticar · emendas na Constituição", xp:25, data:["x33","x34","y43","y44","y45","y46"]},
    {id:"c30",type:"drill",  title:"Praticar · duodécimos do art. 168",  xp:25, data:["x35","x36","x38","y47","y48","y49"]},
    {id:"c31",type:"flash",  title:"Flashcards · execução e Constituição", xp:15, data:[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]},
    {id:"c32",type:"feynman",title:"Explique execução, controle e avaliação", xp:30, data:"t4"}
  ]},
  {n:5, title:"Aplicação e prova", cvar:"u1", lessons:[
    {id:"c34",type:"leitura",title:"Discursiva resolvida",               xp:25, data:"disc"},
    {id:"c35",type:"leitura",title:"Estudo de caso resolvido",           xp:25, data:"caso"},
    {id:"crev",type:"review",title:"Revisão geral das unidades",         xp:60, data:null},
    {id:"c36",type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"c37",type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a definição do Resumo: o ciclo orçamentário é um processo constituído por uma <b>série de passos que se repetem em períodos prefixados</b>.</p><p>O material explica o nome: usa-se \"ciclo\" porque é algo que <b>se repete anualmente</b> — é um ciclo mesmo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário</i></p>",
1:"<p>Errado — é a <b>QUESTÃO-PEGADINHA</b> do Resumo, com estas mesmas palavras, marcada ERRADO.</p><p>O comentário do material corrige: o ciclo orçamentário é um processo <b>contínuo</b>, dinâmico e flexível. \"Intermitente\" é a palavra plantada; se ele se repete ano após ano, não para.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário — QUESTÃO-PEGADINHA</i></p>",
2:"<p>Certo. Literal do Resumo: o orçamento é (1) <b>elaborado pelo Executivo</b>; (2) <b>votado pelo Legislativo</b>; (3) <b>executado pelo Executivo</b>; e (4) <b>avaliado pelo Legislativo</b>.</p><p>Repare na alternância: Executivo, Legislativo, Executivo, Legislativo. É a mesma lógica do modelo misto do Resumo 02.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário</i></p>",
3:"<p>Errado — pulou uma etapa. Na figura do Resumo, a <b>1ª etapa</b> é a <b>elaboração da proposta de orçamento</b>, pelo <b>Poder Executivo</b>.</p><p>Apreciação, discussão, adequação e autorização é a <b>2ª etapa</b>, do Legislativo. Depois vêm execução (3ª, Executivo) e controle e avaliação (4ª, Legislativo).</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Etapas do Ciclo Orçamentário da LOA</i></p>",
4:"<p>Certo. Na figura do Resumo, a <b>3ª etapa</b> é a <b>execução dos orçamentos aprovados</b>, a cargo do <b>Poder Executivo</b>.</p><p>O material define: essa fase consiste na arrecadação das receitas e na realização das despesas; nela ocorre a execução orçamentária e financeira.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Execução do Orçamento (3ª Etapa)</i></p>",
5:"<p>Certo. Na figura do Resumo, a <b>4ª etapa</b> é o <b>controle e avaliação da execução (julgamento das contas)</b>, pelo <b>Poder Legislativo</b>.</p><p>Uma das QUESTÕES-EXEMPLO do material confirma: a avaliação do cumprimento do programa de trabalho é feita na 4ª etapa (gabarito: controle).</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Controle e Avaliação (4ª Etapa)</i></p>",
6:"<p>Certo. ATENÇÃO do Resumo: existe o <b>ciclo orçamentário ampliado (com 8 etapas)</b>, que designa o ciclo, em conjunto, do <b>PPA, da LDO e da LOA</b>.</p><p>Divisão do material: etapas 1 e 2 = PPA; 3 e 4 = LDO; 5 a 8 = LOA. O que mais cai em prova, segundo o Resumo, são as 4 etapas da LOA.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário Ampliado — ATENÇÃO</i></p>",
7:"<p>Errado — trocou a lei. No ciclo ampliado do Resumo, a <b>proposição de metas e prioridades</b> (3ª etapa) e a <b>apreciação e adequação da LDO</b> (4ª etapa) fazem parte da <b>LDO</b>.</p><p>Ao PPA pertencem a 1ª (formulação do planejamento plurianual) e a 2ª (apreciação e adequação do plano). Metas e prioridades casam com a LDO do Resumo 04.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário Ampliado — ATENÇÃO</i></p>",
8:"<p>Certo — é a QUESTÃO-EXEMPLO do Resumo, marcada CERTO.</p><p>Elaborados os projetos pelo Executivo (1ª etapa), o envio à <b>Câmara Legislativa do DF</b> inaugura a <b>apreciação legislativa</b> (2ª etapa). Lembre que Estados, DF e municípios têm apenas uma casa legislativa.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário — QUESTÃO-EXEMPLO</i></p>",
9:"<p>Certo. OBSERVAÇÃO 01 do Resumo: <b>alterações orçamentárias</b> são feitas por meio de atos legais elaborados pela <b>SOF (Secretaria de Orçamento Federal)</b>.</p><p>Guarde a sigla: SOF = Secretaria de Orçamento Federal.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário — OBSERVAÇÃO 01</i></p>",
10:"<p>Errado. OBSERVAÇÃO 02 do Resumo: a programação financeira e o cronograma de desembolso <b>não devem estar contidos na LOA</b>, mas sim em <b>decreto executivo</b> após <b>30 dias</b> da publicação da LOA (art. 8º da LRF).</p><p>Guarde: LOA → publicada; até 30 dias depois → decreto com programação financeira e cronograma.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Ciclo Orçamentário — OBSERVAÇÃO 02</i></p>",
11:"<p>Certo. Definição da 1ª etapa no Resumo: é a fase em que são realizados <b>estudos preliminares</b>, definidas <b>prioridades</b>, fixados os <b>objetivos</b> e estimados os <b>recursos financeiros necessários</b> à realização das políticas públicas, sob a forma de programa.</p><p>Quem faz: o Poder Executivo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Elaboração da Proposta de Orçamento (1ª Etapa)</i></p>",
12:"<p>Certo. Segundo o Resumo, no nível federal o <b>Ministério da Economia</b> é o órgão do Executivo responsável pela elaboração dos instrumentos de planejamento e orçamento: <b>PPA, LDO, LOA e Créditos Adicionais</b>.</p><p>Nos Estados, DF e municípios, em regra, é uma <b>Secretaria</b> do Executivo do ente.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Elaboração da Proposta de Orçamento (1ª Etapa)</i></p>",
13:"<p>Errado no destinatário. O Resumo diz que Legislativo, Judiciário, MP e Defensoria elaboram suas <b>propostas parciais</b> e as encaminham ao <b>Poder Executivo</b>.</p><p>É o Executivo o responsável constitucionalmente pelo envio da <b>proposta consolidada</b> ao Legislativo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Elaboração da Proposta de Orçamento (1ª Etapa)</i></p>",
14:"<p>Certo. Literal do Resumo: serão apreciados <b>pelas duas Casas do Congresso Nacional</b> os projetos de lei relativos ao <b>PPA, à LDO, à LOA e aos créditos adicionais</b>.</p><p>A fase de discussão corresponde ao debate entre os parlamentares sobre a proposta (2ª etapa).</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Apreciação, Discussão, Adequação e Autorização (2ª Etapa)</i></p>",
15:"<p>Certo. Segundo o Resumo, no Legislativo federal os projetos (PPA, LDO, LOA) e os créditos adicionais transitam por uma <b>comissão mista permanente</b> de <b>senadores e deputados</b>: a Comissão Mista de Planos, Orçamentos Públicos e Fiscalização.</p><p>Mista porque reúne as duas Casas do Congresso.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Apreciação, Discussão, Adequação e Autorização (2ª Etapa)</i></p>",
16:"<p>Errado. Nos Estados e municípios, os projetos transitam por uma <b>comissão permanente comum</b>, porque esses entes possuem <b>apenas uma casa legislativa</b>.</p><p>Ela é composta por <b>deputados</b> (nos Estados e no DF) ou por <b>vereadores</b> (nos municípios), nunca pelos dois. Comissão mista só existe no âmbito federal.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Apreciação, Discussão, Adequação e Autorização (2ª Etapa)</i></p>",
17:"<p>Certo. É o art. 166, § 1º, I, da CF, no Resumo: caberá à comissão mista permanente examinar e emitir parecer sobre os projetos e <b>sobre as contas apresentadas anualmente pelo Presidente da República</b>.</p><p>No esquema do material, ela examina e emite parecer sobre: projetos de PPA, LDO, LOA e créditos adicionais; contas do Presidente; planos e programas nacionais, regionais e setoriais.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>CF, art. 166, § 1º</i></p>",
18:"<p>Certo. É o art. 166, § 1º, II, da CF, no Resumo: cabe à comissão mista <b>exercer o acompanhamento e a fiscalização orçamentária</b>, <b>sem prejuízo da atuação das demais comissões</b> do Congresso Nacional e de suas Casas.</p><p>No mesmo inciso: examinar e emitir parecer sobre os planos e programas nacionais, regionais e setoriais.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>CF, art. 166, § 1º</i></p>",
19:"<p>Errado por uma palavra. O ATENÇÃO do Resumo grifa: a mensagem pode ser enviada enquanto não iniciada a votação <b>na comissão mista</b> — e o material acrescenta: <b>(não é no Plenário)</b>.</p><p>É o art. 166, § 5º: o Presidente pode propor modificação nos projetos de PPA, LDO, LOA e créditos adicionais até esse marco.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>CF, art. 166, § 5º — ATENÇÃO</i></p>",
20:"<p>Certo. Segundo o Resumo, as emendas serão <b>apresentadas na Comissão Mista</b>, que emitirá seu parecer, e <b>apreciadas, na forma regimental, pelo Plenário das duas casas</b> do Congresso Nacional.</p><p>Cada parlamentar pode apresentar emendas para aperfeiçoar as propostas enviadas pelo Executivo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Emendas Parlamentares</i></p>",
21:"<p>Certo. É o art. 166, § 3º, I, da CF, no Resumo: as emendas ao projeto de LOA somente podem ser aprovadas caso <b>sejam compatíveis com o PPA e com a LDO</b>.</p><p>Os outros requisitos: indicar os recursos necessários (só de anulação de despesa) ou estar relacionadas à correção de erros ou omissões ou aos dispositivos do texto.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Emendas — CF, art. 166, § 3º</i></p>",
22:"<p>Errado. O ATENÇÃO do Resumo é taxativo: a fonte de recursos para as emendas ao PLOA é <b>apenas</b> a proveniente de <b>anulação de despesa</b>.</p><p>Nenhuma outra fonte é admitida. E mesmo a anulação tem exclusões: pessoal e encargos, serviço da dívida e transferências tributárias constitucionais para Estados, Municípios e DF.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Emendas — ATENÇÃO: fonte de recursos</i></p>",
23:"<p>Certo. Pelo art. 166, § 3º, II, \"a\", da CF, no Resumo, ficam excluídas as anulações de despesa que incidam sobre <b>dotações para pessoal e seus encargos</b>.</p><p>A lista de exclusões do ATENÇÃO: pessoal e encargos; serviço da dívida; transferências tributárias constitucionais para Estados, Municípios e DF.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Emendas — ATENÇÃO: fonte de recursos</i></p>",
24:"<p>Errado. As <b>transferências tributárias constitucionais para Estados, Municípios e DF</b> estão entre as despesas cuja anulação é <b>excluída</b> como fonte para emendas (CF, art. 166, § 3º, II, \"c\").</p><p>As outras duas exclusões do Resumo: pessoal e seus encargos e serviço da dívida.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Emendas — ATENÇÃO: fonte de recursos</i></p>",
25:"<p>Certo. É o art. 166, § 3º, III, da CF, no Resumo: as emendas podem estar relacionadas <b>com a correção de erros ou omissões</b> ou <b>com os dispositivos do texto do projeto de lei</b>.</p><p>O esquema do material explica este último: emendas para <b>tornar o texto mais claro</b>.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Emendas — CF, art. 166, § 3º</i></p>",
26:"<p>Certo. É a definição do quadro do Resumo: serviço da dívida são <b>os encargos, juros, correção monetária e a parte da amortização do principal da dívida</b>.</p><p>Por isso sua anulação não pode servir de fonte para emendas ao PLOA.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Serviço da Dívida</i></p>",
27:"<p>Errado no quórum. Segundo o Resumo, a aprovação de PPA, LDO, LOA e créditos adicionais se dá por <b>maioria simples</b> em cada Casa, <b>pois são leis ordinárias</b>.</p><p>Coerente com o esquema do Resumo 04: o orçamento público é lei ORDINÁRIA — aprovação por maioria simples.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Aprovação dos Instrumentos de Planejamento</i></p>",
28:"<p>Certo. Definição do Resumo: a sanção é a <b>aquiescência do Chefe do Poder Executivo</b> ao projeto de lei aprovado no Legislativo.</p><p>O veto é o contrário: a <b>discordância</b> do Executivo com o projeto aprovado.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Sanção/Veto dos Projetos</i></p>",
29:"<p>Errado. O Resumo diz que o veto pode ser de <b>uma parte do texto (veto parcial)</b> ou de <b>todo o projeto (veto total)</b>.</p><p>Os motivos do material: o titular do Executivo considerar o projeto inconstitucional ou contrário ao interesse público.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Sanção/Veto dos Projetos</i></p>",
30:"<p>Certo. Segundo o Resumo, o veto pode ocorrer caso o titular do Executivo considere o projeto <b>inconstitucional</b> ou <b>contrário ao interesse público</b>.</p><p>E pode ser parcial (parte do texto) ou total (todo o projeto).</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Sanção/Veto dos Projetos</i></p>",
31:"<p>Certo. OBS. do Resumo: ocorrendo o veto, ele <b>deve ser apreciado pelo Parlamento</b>, podendo ser <b>confirmado ou rejeitado</b>.</p><p>A palavra final, portanto, volta ao Legislativo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Sanção/Veto — OBS.</i></p>",
32:"<p>Errado. O ATENÇÃO do Resumo diz que, a cada ano, as LDOs determinam: não sancionado o PLOA até 31 de dezembro, parte da programação <b>poderá ser executada</b> até o limite de <b>1/12 do total de cada ação</b>, multiplicado pelo número de meses decorridos até a sanção.</p><p>Exemplo do material: sem sanção até o fim de abril, despesas inadiáveis podem ser executadas em 4/12 do valor original.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Sanção/Veto — ATENÇÃO</i></p>",
33:"<p>Certo — é o EXEMPLO do Resumo: se o PLOA não for sancionado até o <b>fim de abril (quatro meses)</b>, algumas despesas consideradas <b>inadiáveis</b> poderão ser executadas em <b>4/12</b> do valor original.</p><p>A regra, prevista a cada ano nas LDOs: 1/12 de cada ação vezes o número de meses decorridos até a sanção.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Sanção/Veto — ATENÇÃO / EXEMPLO</i></p>",
34:"<p>Certo. Definição do Resumo: a 3ª etapa <b>consiste na arrecadação das receitas e na realização das despesas</b>.</p><p>Nela ocorre a execução <b>orçamentária</b> (utilização das dotações dos créditos da LOA) e a <b>financeira</b> (utilização de recursos financeiros).</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Execução do Orçamento (3ª Etapa)</i></p>",
35:"<p>Errado — trocou os conceitos. Pelo esquema do Resumo, a utilização de <b>recursos financeiros</b> para realizar o que foi colocado no orçamento é a execução <b>financeira</b>.</p><p>A execução <b>orçamentária</b> é a utilização das <b>dotações dos créditos orçamentários</b> consignados na LOA. Combine com o NÃO CONFUNDA: crédito = orçamentário; recurso = financeiro.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Execução do Orçamento — esquema</i></p>",
36:"<p>Certo. NÃO CONFUNDA do Resumo: <b>CRÉDITO</b> designa o lado <b>ORÇAMENTÁRIO</b>, possuidor de uma dotação (reserva autorizada de gasto); <b>RECURSO</b> designa o lado <b>FINANCEIRO</b>, ou seja, dinheiro (saldo de disponibilidade bancária).</p><p>E o fecho do quadro: crédito e recurso são <b>duas faces de uma mesma moeda</b>.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>NÃO CONFUNDA — Crédito x Recurso</i></p>",
37:"<p>Errado na segunda parte. Verificação da conformidade é, sim, do controle, mas o controle tem <b>foco retrospectivo</b>.</p><p>No NÃO CONFUNDA do Resumo: <b>controle</b> = verificação da conformidade, propõe ações corretivas, foco retrospectivo; <b>avaliação</b> = aperfeiçoamento da gestão, avalia resultados, foco <b>prospectivo</b>.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>NÃO CONFUNDA — Controle x Avaliação</i></p>",
38:"<p>Certo — é a alternativa-gabarito da QUESTÃO-EXEMPLO do Resumo: a avaliação <b>visa ao aperfeiçoamento da gestão</b> e <b>avalia os resultados</b>, com <b>foco prospectivo</b>.</p><p>No NÃO CONFUNDA, o controle fica do outro lado: conformidade, ações corretivas, foco retrospectivo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Controle e Avaliação — QUESTÃO-EXEMPLO</i></p>",
39:"<p>Errado na etapa. Na QUESTÃO-EXEMPLO do Resumo, a avaliação do cumprimento do programa de trabalho é feita na <b>4ª etapa</b> do ciclo (gabarito: <b>controle</b>), e não na execução.</p><p>A execução (3ª etapa) é a arrecadação de receitas e a realização de despesas; o controle e a avaliação vêm depois.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Controle e Avaliação — QUESTÃO-EXEMPLO</i></p>",
40:"<p>Certo. É o art. 21, IX, da CF, transcrito no Resumo: compete à União <b>elaborar e executar planos nacionais e regionais de ordenação do território e de desenvolvimento econômico e social</b>.</p><p>O ATENÇÃO do material: além do PPA, da LDO e da LOA, também compete à União elaborar e executar planos de desenvolvimento econômico e social.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 21, IX</i></p>",
41:"<p>Errado. É o art. 68, § 1º, III, da CF, no Resumo: <b>não serão objeto de delegação</b> a legislação sobre <b>planos plurianuais, diretrizes orçamentárias e orçamentos</b>.</p><p>Na QUESTÃO-EXEMPLO do material, a delegação da LOA ao Presidente por decreto legislativo é irregular duas vezes: a forma seria resolução, e o orçamento não pode ser objeto de delegação.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 68, § 1º</i></p>",
42:"<p>Certo. Literal do art. 68, § 2º, da CF, no Resumo: a delegação ao Presidente da República terá a forma de <b>resolução do Congresso Nacional</b>, que especificará seu conteúdo e os termos de seu exercício.</p><p>A QUESTÃO-EXEMPLO do material explora a troca: <b>não</b> terá a forma de decreto legislativo.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 68, § 2º</i></p>",
43:"<p>Certo. É o art. 166, § 9º, da CF, no Resumo: emendas individuais aprovadas no limite de <b>2% da RCL do exercício anterior</b> ao do encaminhamento, sendo <b>metade</b> para ações e serviços públicos de saúde.</p><p>Pelo § 9º-A: 1,55% para Deputados e 0,45% para Senadores. EXEMPLO do material com RCL de R$ 1 bilhão: R$ 15,5 milhões e R$ 4,5 milhões.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 166, §§ 9º e 9º-A</i></p>",
44:"<p>Certo. Comentário do Resumo ao § 9º: o orçamento brasileiro é <b>autorizativo</b>, mas ganhou <b>traços de orçamento impositivo</b> a partir da <b>EC 86/2015</b>, que incluiu os §§ 9º, 10 e 11 do art. 166 na CF.</p><p>O § 11 trata das chamadas \"Emendas Impositivas\": execução obrigatória das emendas individuais até o limite do § 9º.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 166, § 9º</i></p>",
45:"<p>Errado. O art. 166, § 10, da CF, no Resumo, diz que a execução desse montante será computada para o mínimo de saúde, <b>vedada a destinação para pagamento de pessoal ou encargos sociais</b>.</p><p>O comentário do material: o § 10 significa que não haverá aumento do limite mínimo (<b>15% da RCL</b>) a ser aplicado pela União em saúde.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 166, § 10</i></p>",
46:"<p>Certo. É o art. 166, § 12, da CF, no Resumo: a garantia de execução do § 11 aplica-se também às emendas de iniciativa de <b>bancada</b> de parlamentares de Estado ou do DF, no montante de <b>até 1% da RCL realizada no exercício anterior</b>.</p><p>O § 13 ressalva os <b>impedimentos de ordem técnica</b>.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 166, §§ 12 e 13</i></p>",
47:"<p>Certo. Literal do art. 168 da CF, no Resumo: os recursos, compreendidos os créditos suplementares e especiais, destinados ao Legislativo, Judiciário, MP e Defensoria ser-lhes-ão entregues <b>até o dia 20 de cada mês, em duodécimos</b>.</p><p>O comentário do material: o duodécimo é o repasse mensal do Executivo, correspondente a <b>1/12</b> da receita líquida prevista no ano.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 168</i></p>",
48:"<p>Errado — é o contrário. Art. 168, § 1º, da CF, no Resumo: <b>é vedada</b> a transferência a fundos de recursos financeiros oriundos de repasses duodecimais.</p><p>E se sobrar saldo, o § 2º manda restituí-lo ao caixa único do Tesouro ou deduzi-lo das primeiras parcelas do exercício seguinte.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 168, § 1º</i></p>",
49:"<p>Certo. Literal do art. 168, § 2º, da CF, no Resumo: o saldo financeiro deve ser <b>restituído ao caixa único do Tesouro</b> do ente, ou terá seu valor <b>deduzido das primeiras parcelas duodecimais do exercício seguinte</b>.</p><p>O comentário do material resume: se sobrar recursos, o recebedor devolve ou tem o valor abatido.</p><p class='fb-fonte'>AFO — Resumo 05 · <i>Dispositivos da CF — art. 168, § 2º</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"Ciclo orçamentário", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
