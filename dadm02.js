/* Direito Administrativo — Módulo 02: Regime jurídico administrativo e princípios da Administração Pública (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm02 = (function(){
"use strict";

var CARDS = [
  ["O que é o regime jurídico administrativo?","O conjunto de <b>prerrogativas (privilégios)</b> e <b>restrições (sujeições)</b> a que está sujeita a Administração — conjunto que <b>não está presente nas relações entre particulares</b> e que a eleva a uma <b>posição vertical</b> (de superioridade) nas relações com o particular."],
  ["O que é juridicidade administrativa?","O administrador público pode usar o <b>ordenamento jurídico</b> e principalmente a <b>Constituição Federal e seus princípios</b> para <b>preencher lacunas</b> do dia a dia da Administração. Cabe sempre que a Constituição ou a lei <b>não houver esgotado</b> os juízos possíveis de ponderação entre interesses públicos e privados."],
  ["O que é deslegalização?","A <b>permissão do Poder Legislativo ao Poder Executivo</b> de editar <b>normas de caráter técnico</b>, de maneira <b>inovadora</b>."],
  ["Civil law × common law — qual a fonte imediata de cada regime?","<b>Romano-germânico (civil law)</b>, de onde se origina o regime brasileiro: a <b>lei</b> é a fonte imediata (primária). <b>Anglo-saxão (common law)</b>: os <b>costumes e precedentes judiciais</b> são a fonte imediata; esse regime postula que a <b>descentralização das entidades locais é essencial</b>, absorvendo elas a maioria dos poderes da administração central."],
  ["Para que servem os princípios?","Determinam o <b>alcance e o sentido das regras</b> e servem de parâmetro para a própria produção normativa. <b>Não fornecem solução única</b>: consagram valores e propiciam um <b>elenco de alternativas</b>, exigindo que se escolha uma dentre diversas soluções."],
  ["Princípios expressos × implícitos","<b>Expressos:</b> previstos na CF ou em alguma lei. <b>Implícitos:</b> não estão previstos formalmente em norma alguma, mas são <b>reconhecidos pela doutrina</b> e pela jurisprudência — e possuem a <b>mesma relevância</b> dos expressos."],
  ["Quais os princípios expressos no art. 37 da CF?","<b>LIMPE</b>: <b>L</b>egalidade · <b>I</b>mpessoalidade · <b>M</b>oralidade · <b>P</b>ublicidade · <b>E</b>ficiência. O <b>contraditório e a ampla defesa</b> não estão no art. 37: têm previsão no <b>art. 5º, LV</b>."],
  ["Princípio da legalidade — conceito","Toda e qualquer atividade da Administração deve ser <b>autorizada por lei</b>. A Administração só pode agir <b>segundo a lei (secundum legem)</b>, e não <b>contra a lei (contra legem)</b> nem <b>além da lei (praeter legem)</b>."],
  ["Legalidade para a Administração e para o particular","Para a Administração → <b>restrição de vontade</b>. Para os particulares → <b>autonomia de vontade</b>."],
  ["Legalidade × legitimidade, e as restrições à legalidade","<b>Legalidade</b> = agir conforme a lei. <b>Legitimidade</b> = <b>lei + moralidade</b>. Restrições à legalidade: <b>Estado de Defesa</b>, <b>Estado de Sítio</b> e <b>Medidas Provisórias</b>."],
  ["Atos inominados e atos nominados","A legalidade <b>veda à Administração</b> a prática de <b>atos inominados</b> (sem previsão em lei), embora estes sejam <b>permitidos aos particulares</b>. <b>Ato nominado</b> é o que possui previsão em lei — ex.: para punir um servidor, a legislação nomina o ato de <b>demissão</b>."],
  ["Princípio da juridicidade","Decorre de uma <b>ampliação do conceito de legalidade</b>: o controle judicial vai além do mero controle de legalidade e abrange <b>todo o ordenamento jurídico</b> (leis, atos normativos, princípios). Consequência: a margem de liberdade da Administração fica <b>mais restrita</b>."],
  ["Princípio da impessoalidade — conceito","Os atos administrativos devem ser praticados tendo em vista o <b>interesse público</b>, e <b>não os interesses pessoais do agente ou de terceiros</b>. Exemplos de aplicabilidade: <b>concurso público</b> e <b>licitação</b>."],
  ["Quais os três enfoques da impessoalidade?","<b>Dever de isonomia</b> · <b>dever de conformidade aos interesses públicos</b> · <b>vedação à promoção pessoal dos agentes públicos</b>."],
  ["Três observações do resumo sobre a impessoalidade","<b>1)</b> Não é ela que exige atuação conforme preceitos éticos — isso é a <b>moralidade</b>. <b>2)</b> Proíbe <b>nome, símbolos ou imagens</b> que caracterizem promoção pessoal, <b>inclusive do partido</b>. <b>3)</b> Permite que se reconheça a <b>validade de atos praticados por agente de fato</b>."],
  ["Princípio da moralidade — conceito","Impõe a <b>atuação ética</b> dos agentes públicos, traduzida na capacidade de distinguir <b>o que é honesto do que é desonesto</b>. Liga-se à ideia de <b>probidade</b> e de <b>boa-fé</b>."],
  ["Demora excessiva e injustificada para responder uma petição — que princípios viola?","É omissão violadora do princípio da <b>eficiência</b> e, segundo o <b>STJ</b>, atenta <b>também contra a moralidade</b>, por colocar em xeque a legítima confiança que o cidadão comum deposita na administração. <b>Não</b> atenta contra a <b>continuidade do serviço público</b>."],
  ["Nepotismo — que princípios são ofendidos?","Para o <b>STF</b> (<b>súmula vinculante 13</b>), a prática do nepotismo ofende os princípios da <b>moralidade</b>, da <b>impessoalidade</b> e da <b>eficiência</b>."],
  ["Qual o alcance da súmula vinculante 13?","Cônjuge, companheiro ou parente <b>em linha reta, colateral ou por afinidade até o TERCEIRO grau</b>, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de <b>direção, chefia ou assessoramento</b>, para <b>cargo em comissão, de confiança ou função gratificada</b> — compreendido o ajuste mediante <b>designações recíprocas</b>."],
  ["No exemplo do governador, quais nomeações respeitaram a moralidade?","Somente as de <b>Ana</b> (prima — <b>parente de 4º grau</b>) e de <b>Tatiana</b> (filha, mas <b>aprovada em concurso público</b>). A de <b>Lúcio</b>, tio, para cargo em comissão no gabinete, contraria a vedação ao nepotismo."],
  ["Princípio da publicidade — conceito e limites","Dever de dar <b>transparência</b> aos atos, tornando-os públicos, do conhecimento de todos. <b>Não é absoluto</b>: é restringido quando <b>imprescindível à segurança da sociedade e do Estado</b> ou quando <b>afrontar os direitos fundamentais à intimidade e à privacidade</b>."],
  ["Publicidade: elemento de formação ou requisito de eficácia?","<b>Requisito de eficácia</b> — <b>não</b> é elemento de formação do ato administrativo. Por isso o <b>ato não publicado permanece válido</b>, mas <b>sem produzir efeitos perante terceiros</b>."],
  ["Princípio da eficiência — conceito e exemplos","Exige atividade administrativa com <b>presteza, perfeição e rendimento funcional</b>, buscando <b>maior produtividade</b> e <b>redução dos desperdícios de dinheiro público</b>. Exemplos: <b>avaliação de desempenho</b>; <b>contratos de gestão com fixação de metas</b>; <b>celeridade</b> na tramitação dos processos administrativos e judiciais."],
  ["Três observações do resumo sobre a eficiência","<b>1)</b> Foi introduzida na CF/88 como parte do esforço para a <b>reforma gerencial</b> da administração pública. <b>2)</b> <b>Não pode se sobrepor</b> ao princípio da <b>legalidade</b>. <b>3)</b> Deve ser buscada com observância aos <b>parâmetros e procedimentos previstos na lei</b>."],
  ["Contraditório e ampla defesa — onde está e onde se aplica","<b>Art. 5º, LV</b>, da CF: aos <b>litigantes, em processo judicial ou administrativo</b>, e aos <b>acusados em geral</b>, com os meios e recursos a ela inerentes. Exemplos: o <b>desfazimento da nomeação</b> de um agente administrativo e a <b>inabilitação de empresa em licitação</b> só podem ocorrer após assegurada a garantia."],
  ["Cite princípios implícitos na Constituição","<b>Supremacia</b> e <b>indisponibilidade do interesse público</b> · <b>razoabilidade e proporcionalidade</b> · <b>motivação</b> · <b>autotutela</b> · <b>segurança jurídica</b> · <b>continuidade</b> · <b>especialidade</b> · <b>sindicabilidade</b>, entre outros. Possuem a <b>mesma relevância</b> dos expressos."],
  ["Supremacia do interesse público — conceito e exemplos","Havendo <b>conflito entre o interesse público e o privado</b>, prevalece o <b>interesse público</b>, tutelado pelo Estado. Exemplos: <b>desapropriação</b> (suplanta o do proprietário); <b>poder de polícia</b> (restringe atividades individuais); <b>cláusulas exorbitantes</b> (modificar ou rescindir unilateralmente o contrato)."],
  ["O que o quadro do resumo diz da supremacia?","<b>Não é absoluta</b> — os direitos e garantias individuais devem ser <b>sempre respeitados</b>. <b>Fundamenta as prerrogativas</b> da Administração; está presente de <b>forma direta</b> nas relações jurídicas <b>verticais</b> (administração × administrado) e de <b>forma indireta</b> nas <b>atividades-meio</b> e quando o Estado atua como <b>agente econômico</b>."],
  ["Indisponibilidade do interesse público — conceito e quadro","A Administração <b>não é “dona”</b> dos bens e interesses públicos: cabe-lhe apenas <b>geri-los e conservá-los</b> em prol do verdadeiro titular, <b>o povo</b>. <b>Fundamenta as restrições</b>, está <b>ligada à legalidade</b> e presente de <b>forma direta em toda e qualquer atividade administrativa</b>."],
  ["Interesses públicos primários × secundários","<b>Primários:</b> interesses <b>diretos do povo</b>. <b>Secundários:</b> interesses do Estado de <b>caráter patrimonial</b> (aumentar receitas ou diminuir gastos) e os <b>atos internos de gestão administrativa</b>. O secundário <b>só é legítimo quando não é contrário ao primário</b>."],
  ["Razoabilidade × proporcionalidade","<b>Razoabilidade:</b> <b>compatibilidade entre os meios empregados e os fins almejados</b>, evitando restrições <b>inadequadas, desnecessárias, arbitrárias ou abusivas</b>. <b>Proporcionalidade:</b> <b>conter o excesso de poder</b> — ex.: sanções proporcionais às faltas. Para a doutrina, a proporcionalidade é <b>um dos aspectos da razoabilidade</b>."],
  ["O teste do “homem médio”","A razoabilidade verifica se as decisões são <b>aceitáveis do ponto de vista do homem médio</b> — ex.: é aceitável instituir <b>idade máxima</b> para concurso de policial militar? O ato <b>desarrazoado</b> (não aceitável) é <b>viciado</b>, ou seja, <b>ilegal</b>, e deve ser <b>anulado</b>."],
  ["Razoabilidade e o Poder Judiciário","Permite ao Judiciário analisar os <b>atos discricionários</b> para verificar se não houve exageros. Ao considerar o ato desarrazoado, ele <b>não invade o mérito</b>: verifica a <b>legalidade</b>, pois restrição desarrazoada é praticada com <b>abuso</b>. A razoabilidade <b>não</b> fundamenta a atuação judicial quanto ao <b>mérito administrativo</b>."],
  ["Princípio da motivação","Dever de <b>justificar os atos</b>, sejam eles <b>vinculados ou discricionários</b>, explicitando as <b>razões</b> da decisão, os <b>fins</b> buscados e a <b>fundamentação legal</b>. Exige indicar os <b>pressupostos de fato e de direito</b>, permite o controle da <b>legalidade e da moralidade</b> e assegura o <b>contraditório e a ampla defesa</b>."],
  ["Três observações do resumo sobre a motivação","<b>1)</b> A <b>exoneração de ocupante de cargo em comissão dispensa motivação</b>. <b>2)</b> O Judiciário <b>pode</b> apreciar os <b>motivos</b> (ausência ou falsidade) da elaboração do ato. <b>3)</b> O Judiciário <b>não pode</b> apreciar o <b>mérito</b> (conveniência ou oportunidade)."],
  ["Princípio da autotutela","A Administração controla os próprios atos sob dois aspectos: <b>legalidade</b> → pode <b>anular</b> seus atos ilegais; <b>mérito</b> → pode <b>revogar</b> por motivo de <b>conveniência ou oportunidade</b> (<b>STF, súmula 473</b>, respeitados os direitos adquiridos e ressalvada a apreciação judicial). Os atos <b>não podem ser revistos após o prazo decadencial, salvo comprovada má-fé</b>."],
  ["Segurança jurídica — aspecto objetivo e subjetivo","<b>Objetivo (segurança jurídica):</b> <b>estabilidade</b> das relações jurídicas constituídas. <b>Subjetivo (proteção à confiança):</b> a <b>crença</b> do indivíduo de que os atos da Administração são <b>legais</b>. Ela <b>veda a aplicação retroativa de nova interpretação</b> e <b>limita a autotutela e a legalidade</b> — ex.: decadência e prescrição."],
  ["Art. 54 da Lei 9.784/99 e o caso da liminar","O direito da Administração de <b>anular</b> atos de que decorram <b>efeitos favoráveis</b> para os destinatários <b>decai em cinco anos</b>, contados da data em que foram praticados, <b>salvo comprovada má-fé</b>. Mas a <b>confiança legítima não autoriza</b> manter em cargo público servidor empossado por <b>decisão judicial provisória</b> depois revista, <b>ainda que decorridos mais de cinco anos</b> — o provimento era precário."],
  ["Continuidade, especialidade e sindicabilidade","<b>Continuidade:</b> a prestação de serviços públicos <b>não pode parar</b> — o direito de greve <b>não é absoluto</b>; admite-se parar para <b>reparos técnicos ou obras de expansão</b> e no <b>inadimplemento da tarifa</b> (serviço restabelecido tão logo quitado o débito). <b>Especialidade:</b> ligado à <b>descentralização</b>; a atividade deve constar da <b>lei de criação</b> da entidade. <b>Sindicabilidade:</b> <b>todo ato administrativo</b> pode se submeter a <b>algum tipo de controle</b>."],
  ["Presunção de legitimidade e intranscendência subjetiva das sanções","A <b>presunção de legitimidade/veracidade</b> (ou de legalidade) abrange dois aspectos: a <b>presunção da verdade</b>, quanto à certeza sobre os fatos, e a <b>presunção da legalidade</b> — até prova em contrário, os atos são praticados com observância das normas legais. Pela <b>intranscendência subjetiva das sanções</b>, irregularidades dos Poderes <b>Legislativo e Judiciário</b> não impõem sanções ao <b>Executivo</b>."]
];

var QS = [
  ["O regime jurídico administrativo é o conjunto de prerrogativas e restrições a que está sujeita a Administração, conjunto que não está presente nas relações entre particulares.","C","CEBRASPE","Conceito."],
  ["O regime jurídico administrativo eleva a Administração Pública a uma posição vertical nas relações entabuladas com particulares.","C","FCC","Posição de superioridade."],
  ["A juridicidade administrativa significa que o administrador público poderá utilizar o ordenamento jurídico e principalmente a Constituição Federal e seus princípios para preencher lacunas do exercício da Administração Pública.","C","VUNESP","Observação 02 do resumo."],
  ["A deslegalização consiste na permissão do Poder Executivo ao Poder Legislativo para editar normas de caráter técnico, de maneira inovadora.","E","AOCP","Inverteu: é a permissão do <b>Legislativo ao Executivo</b>."],
  ["O regime jurídico administrativo brasileiro origina-se do sistema romano-germânico (civil law), que tem a lei como fonte imediata.","C","IBFC","Fonte primária é a lei."],
  ["No regime jurídico-administrativo anglo-saxão (common law), a lei é a fonte imediata, e os costumes e os precedentes judiciais são fontes apenas mediatas.","E","FUNDATEC","No common law a fonte imediata são os <b>costumes e precedentes judiciais</b>."],
  ["O regime anglo-saxão postula que a descentralização das entidades locais é essencial, absorvendo tais entidades a grande maioria dos poderes cometidos à administração central.","C","CEBRASPE","Observação 05 do resumo."],
  ["Os princípios fixam limites e fornecem solução única e exata para o caso concreto.","E","FCC","Não fornecem solução única: propiciam um <b>elenco de alternativas</b>."],
  ["Princípios implícitos não estão previstos formalmente em norma alguma, mas são reconhecidos pela doutrina.","C","FGV","Definição do resumo."],
  ["Legalidade, impessoalidade, moralidade, publicidade e eficiência são os princípios a que obedece a administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios.","C","CF, art. 37","Mnemônico LIMPE."],
  ["O princípio do contraditório e da ampla defesa está expresso no art. 37 da Constituição Federal, que trata da Administração Pública.","E","VUNESP","Não está no art. 37: sua previsão é o <b>art. 5º, LV</b>."],
  ["Pelo princípio da legalidade, a Administração só pode agir segundo a lei, e não contra a lei ou além da lei.","C","AOCP","Secundum legem, não contra legem nem praeter legem."],
  ["Para a Administração, a legalidade significa autonomia de vontade; para os particulares, restrição de vontade.","E","IBFC","Inverteu: <b>restrição</b> para a Administração, <b>autonomia</b> para o particular."],
  ["Legalidade e legitimidade se equivalem, pois ambas significam apenas agir conforme a lei.","E","FUNDATEC","Legitimidade é <b>lei + moralidade</b>."],
  ["Estado de defesa, estado de sítio e medidas provisórias são apontados como restrições ao princípio da legalidade.","C","CEBRASPE","Quadro da legalidade."],
  ["O princípio da legalidade veda aos particulares a prática de atos inominados, embora estes sejam permitidos à Administração.","E","FCC","Inverteu: são <b>vedados à Administração</b> e permitidos aos particulares."],
  ["O princípio da impessoalidade estabelece que os atos administrativos devem ser praticados tendo em vista o interesse público, e não os interesses pessoais do agente ou de terceiros.","C","VUNESP","Conceito."],
  ["Concurso público e licitação são exemplos de aplicabilidade do princípio da impessoalidade.","C","AOCP","Exemplos do resumo."],
  ["O princípio da impessoalidade está diretamente relacionado à obrigação de que a autoridade pública não dispense os preceitos éticos.","E","IBFC","Quem exige atuação conforme preceitos éticos é a <b>moralidade</b>."],
  ["O princípio da impessoalidade proíbe nome, símbolos ou imagens que caracterizem promoção pessoal, inclusive do partido.","C","FUNDATEC","Observação 02 do resumo."],
  ["O princípio da impessoalidade permite que se reconheça a validade de atos praticados por agente de fato.","C","CEBRASPE","Observação 03 do resumo."],
  ["Os três enfoques do princípio da impessoalidade são o dever de isonomia, o dever de conformidade aos interesses públicos e a vedação à prática de atos inominados.","E","FCC","O terceiro enfoque é a <b>vedação à promoção pessoal dos agentes públicos</b>."],
  ["O princípio da moralidade impõe atuação ética dos agentes públicos, traduzida na capacidade de distinguir entre o que é honesto e o que é desonesto.","C","FGV","Liga-se à probidade e à boa-fé."],
  ["A demora excessiva e injustificada da administração para apresentar resposta a uma petição é omissão violadora do princípio da publicidade.","E","VUNESP","É violação da <b>eficiência</b> e, para o STJ, também da moralidade."],
  ["A demora excessiva da administração para apresentar resposta a uma petição atenta contra o princípio da continuidade do serviço público.","E","AOCP","O resumo diz expressamente que <b>não</b> atenta contra a continuidade."],
  ["O STF entende que a prática do nepotismo ofende os princípios da moralidade, da impessoalidade e da eficiência.","C","IBFC","Súmula vinculante 13."],
  ["A súmula vinculante 13 veda a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade até o quarto grau da autoridade nomeante.","E","FUNDATEC","O limite é o <b>terceiro grau</b>."],
  ["A súmula vinculante 13 compreende o ajuste mediante designações recíprocas.","C","STF, SV 13","Literalidade da súmula."],
  ["Governador que nomeou o tio Lúcio para cargo em comissão no gabinete, a prima Ana para chefe de gabinete e a filha Tatiana, aprovada em concurso, para auditor fiscal respeitou a moralidade somente nas nomeações de Ana e Tatiana.","C","CEBRASPE","Ana é parente de 4º grau; Tatiana foi aprovada em concurso."],
  ["O princípio da publicidade impõe à Administração o dever de dar transparência a seus atos, tornando-os públicos, do conhecimento de todos.","C","FCC","Conceito."],
  ["O princípio da publicidade é absoluto e não admite restrição pelo ordenamento jurídico.","E","FGV","É restringido quando imprescindível à <b>segurança da sociedade e do Estado</b> ou quando afrontar <b>intimidade e privacidade</b>."],
  ["A publicidade é considerada elemento de formação do ato administrativo.","E","VUNESP","É <b>requisito de eficácia</b>, não elemento de formação."],
  ["O ato não publicado permanece válido, mas sem produzir efeitos perante terceiros.","C","AOCP","Observação 03 do resumo."],
  ["O princípio da eficiência, por buscar maior produtividade, pode se sobrepor ao princípio da legalidade.","E","IBFC","O resumo é expresso: a eficiência <b>não pode</b> se sobrepor à legalidade."],
  ["Aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e a ampla defesa, com os meios e recursos a ela inerentes.","C","CF, art. 5º, LV","Literalidade do dispositivo."],
  ["Os princípios implícitos, por não estarem previstos formalmente em norma alguma, possuem relevância inferior à dos princípios expressos.","E","FCC","Possuem a <b>mesma relevância</b> dos expressos."],
  ["Pelo princípio da supremacia do interesse público, havendo conflito entre o interesse público e o privado, há de prevalecer o interesse público, tutelado pelo Estado.","C","FGV","Conceito."],
  ["Desapropriação, poder de polícia e cláusulas exorbitantes nos contratos administrativos são exemplos de aplicação do princípio da supremacia do interesse público.","C","VUNESP","Os três exemplos do resumo."],
  ["O princípio da supremacia do interesse público é absoluto.","E","AOCP","Caixa ATENÇÃO: os direitos e garantias individuais devem ser <b>sempre respeitados</b>."],
  ["A supremacia do interesse público fundamenta as prerrogativas da Administração e está presente de forma direta nas relações jurídicas verticais.","C","IBFC","Quadro comparativo do resumo."],
  ["O princípio da indisponibilidade do interesse público fundamenta as prerrogativas da Administração.","E","FUNDATEC","Fundamenta as <b>restrições</b>; as prerrogativas vêm da supremacia."],
  ["O interesse público secundário só é legítimo quando não é contrário ao interesse público primário.","C","CEBRASPE","Literalidade do resumo."],
  ["São interesses públicos primários os interesses do Estado de caráter patrimonial, como aumentar receitas ou diminuir gastos.","E","FCC","Esses são os <b>secundários</b>; primários são os interesses diretos do povo."],
  ["O princípio da razoabilidade se destina a aferir a compatibilidade entre os meios empregados e os fins almejados, de modo a evitar restrições inadequadas, desnecessárias, arbitrárias ou abusivas.","C","FGV","Conceito."],
  ["O princípio da proporcionalidade se destina a aferir a compatibilidade entre meios e fins, enquanto a razoabilidade se destina a conter o excesso de poder.","E","VUNESP","Inverteu os dois conceitos."],
  ["Para a doutrina, a proporcionalidade constitui um dos aspectos da razoabilidade.","C","AOCP","Nota do resumo."],
  ["O ato que se mostrar desarrazoado, ainda que inconveniente, permanece válido e não pode ser anulado.","E","IBFC","O ato desarrazoado é <b>viciado, ilegal, devendo ser anulado</b>."],
  ["Ao considerar desarrazoado um ato administrativo discricionário, o Poder Judiciário não estará invadindo o mérito do ato, mas verificando a sua legalidade.","C","FUNDATEC","Observação 04 do resumo."],
  ["A exoneração de ocupante de cargo em comissão exige motivação.","E","CEBRASPE","O resumo diz que <b>dispensa</b> motivação."],
  ["A Administração pode anular seus próprios atos quando eivados de vícios que os tornam ilegais, ou revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.","C","STF, Súmula 473","Princípio da autotutela."],
  ["Pelo princípio da segurança jurídica, admite-se a aplicação retroativa de nova interpretação administrativa.","E","FGV","A segurança jurídica <b>veda</b> a aplicação retroativa de nova interpretação."],
  ["O direito de greve na Administração Pública é absoluto, por decorrência do princípio da continuidade do serviço público.","E","VUNESP","O direito de greve <b>não é absoluto</b>: exercido nos termos e limites de lei específica."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Regime jurídico administrativo, princípios e legalidade",
      '<div class="box"><span class="bl">O regime jurídico administrativo</span>'+
      '<p>É o conjunto de <b>prerrogativas (privilégios)</b> e <b>restrições (sujeições)</b> a que está sujeita a Administração — conjunto que <b>não está presente nas relações entre particulares</b>.</p>'+
      '<p>São <b>regras e princípios</b> que instituem prerrogativas e sujeições à Administração, elevando-a a uma <b>posição vertical</b> (de superioridade) nas relações entabuladas com particulares.</p></div>'+
      '<div class="box"><span class="bl">As observações do resumo</span>'+
      '<ul><li>Sempre que a Constituição ou a lei <b>não houver esgotado</b> os juízos possíveis de ponderação entre interesses públicos e privados, cabe à Administração usar a <b>juridicidade administrativa</b> para ponderar.</li>'+
      '<li><b>Juridicidade administrativa:</b> o administrador pode usar o <b>ordenamento jurídico</b> e principalmente a <b>CF e seus princípios</b> para <b>preencher lacunas</b>.</li>'+
      '<li><b>Deslegalização:</b> permissão do <b>Poder Legislativo ao Poder Executivo</b> de editar <b>normas de caráter técnico</b>, de maneira inovadora.</li>'+
      '<li><b>Brasil = romano-germânico (civil law)</b> → a <b>lei</b> é fonte imediata (primária).</li>'+
      '<li><b>Anglo-saxão (common law)</b> → <b>costumes e precedentes judiciais</b> são fonte imediata; a <b>descentralização das entidades locais é essencial</b>, absorvendo elas a maioria dos poderes da administração central.</li></ul></div>'+
      '<div class="box"><span class="bl">Para que servem os princípios</span>'+
      '<p>Determinam o <b>alcance e o sentido das regras</b> e servem de parâmetro para a produção normativa. <b>Não fornecem solução única</b>: consagram valores e propiciam um <b>elenco de alternativas</b>.</p>'+
      '<p><b>Expressos</b> → previstos na CF ou em alguma lei. <b>Implícitos</b> → não previstos formalmente, mas reconhecidos pela <b>doutrina</b> e pela jurisprudência.</p></div>'+
      '<div class="box tip"><span class="bl">Mnemônico LIMPE — art. 37 da CF</span>'+
      '<div class="chips"><span class="chip">L — Legalidade</span><span class="chip">I — Impessoalidade</span><span class="chip">M — Moralidade</span><span class="chip">P — Publicidade</span><span class="chip">E — Eficiência</span></div>'+
      '<p>O <b>contraditório e a ampla defesa</b> não estão no art. 37: têm previsão no <b>art. 5º, LV</b>.</p></div>'+
      '<div class="box"><span class="bl">Princípio da legalidade</span>'+
      '<p>Toda atividade da Administração deve ser <b>autorizada por lei</b>: ela só pode agir <b>segundo a lei (secundum legem)</b>, e não <b>contra a lei (contra legem)</b> ou <b>além da lei (praeter legem)</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> Pablo, da área de compras e contratações de entidade da administração indireta, deve sempre agir de acordo com <b>aquilo que a lei permite</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O quadro que a banca explora</span>'+
      '<p><b>Administração</b> → restrição de vontade · <b>Particulares</b> → autonomia de vontade.</p>'+
      '<p><b>Legalidade</b> = agir conforme a lei · <b>Legitimidade</b> = <b>lei + moralidade</b>.</p>'+
      '<p><b>Restrições à legalidade:</b> Estado de Defesa, Estado de Sítio e Medidas Provisórias.</p>'+
      '<p><b>Atos inominados</b> (sem previsão em lei) são <b>vedados à Administração</b> e <b>permitidos aos particulares</b>. <b>Nominado</b> é o previsto em lei — ex.: a <b>demissão</b> para punir servidor.</p>'+
      '<p><b>Juridicidade:</b> ampliação do conceito de legalidade — o controle judicial abrange <b>todo o ordenamento</b>, e a margem de liberdade da Administração fica <b>mais restrita</b>.</p></div>')
  ],
  V2:[
    sl("Impessoalidade, moralidade, publicidade, eficiência e ampla defesa",
      '<div class="box"><span class="bl">Impessoalidade</span>'+
      '<p>Os atos devem ser praticados tendo em vista o <b>interesse público</b>, e não os <b>interesses pessoais do agente ou de terceiros</b>. Aplicabilidade: <b>concurso público</b> e <b>licitação</b>.</p>'+
      '<div class="tree"><div class="leaf">Dever de <b>isonomia</b></div><div class="leaf">Dever de conformidade aos <b>interesses públicos</b></div><div class="leaf">Vedação à <b>promoção pessoal</b> dos agentes públicos</div></div>'+
      '<p><b>Observações:</b> não é ela que exige preceitos éticos (isso é a <b>moralidade</b>) · proíbe nome, símbolos ou imagens de promoção pessoal, <b>inclusive do partido</b> · permite reconhecer a <b>validade de atos de agente de fato</b>.</p></div>'+
      '<div class="box"><span class="bl">Moralidade</span>'+
      '<p>Impõe <b>atuação ética</b>, traduzida na capacidade de distinguir <b>o honesto do desonesto</b>. Liga-se à <b>probidade</b> e à <b>boa-fé</b>.</p>'+
      '<p><b>Demora excessiva e injustificada</b> para responder a uma petição: viola a <b>eficiência</b> e, segundo o <b>STJ</b>, atenta <b>também contra a moralidade</b>, por colocar em xeque a legítima confiança do cidadão comum. <b>Não</b> atenta contra a <b>continuidade</b>.</p>'+
      '<p>Para o <b>STF</b>, o <b>nepotismo (SV 13)</b> ofende <b>moralidade, impessoalidade e eficiência</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Súmula vinculante 13 e o exemplo do governador</span>'+
      '<p>A SV 13 veda nomear cônjuge, companheiro ou parente <b>em linha reta, colateral ou por afinidade até o TERCEIRO grau</b>, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de <b>direção, chefia ou assessoramento</b>, para <b>cargo em comissão, de confiança ou função gratificada</b> — compreendido o ajuste mediante <b>designações recíprocas</b>.</p>'+
      '<p><b>Exemplo:</b> governador nomeia <b>Lúcio</b> (tio) para cargo em comissão; <b>Ana</b> (prima) para chefe de gabinete; <b>Tatiana</b> (filha, aprovada em concurso) para auditor fiscal. A moralidade foi respeitada <b>somente em Ana</b> (parente de <b>4º grau</b>) <b>e em Tatiana</b> (concurso público).</p></div>'+
      '<div class="box"><span class="bl">Publicidade</span>'+
      '<p>Dever de dar <b>transparência</b> aos atos, do conhecimento de todos. <b>Não é absoluto</b> — é restringido quando <b>imprescindível à segurança da sociedade e do Estado</b> ou quando <b>afrontar a intimidade e a privacidade</b>.</p>'+
      '<p>A publicidade <b>não é elemento de formação</b> do ato: é <b>requisito de eficácia</b>. Logo, o <b>ato não publicado permanece válido</b>, mas <b>sem efeitos perante terceiros</b>.</p></div>'+
      '<div class="box"><span class="bl">Eficiência</span>'+
      '<p>Atividade exercida com <b>presteza, perfeição e rendimento funcional</b>, buscando <b>maior produtividade</b> e <b>redução dos desperdícios de dinheiro público</b>. Exemplos: <b>avaliação de desempenho</b>; <b>contratos de gestão com fixação de metas</b>; <b>celeridade</b> na tramitação dos processos.</p>'+
      '<p>Foi introduzida na CF/88 no esforço da <b>reforma gerencial</b> · <b>não pode se sobrepor à legalidade</b> · deve observar os <b>parâmetros e procedimentos previstos na lei</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Contraditório e ampla defesa — art. 5º, LV</span>'+
      '<p>Assegurados aos <b>litigantes, em processo judicial ou administrativo</b>, e aos <b>acusados em geral</b>, com os meios e recursos a ela inerentes.</p>'+
      '<p><b>Aplicabilidade:</b> o <b>desfazimento da nomeação</b> de agente administrativo e a <b>inabilitação de empresa em licitação</b> só podem ocorrer depois de assegurada a garantia.</p></div>')
  ],
  V3:[
    sl("Princípios implícitos e conceitos importantes",
      '<div class="box"><span class="bl">Os implícitos</span>'+
      '<p>Não estão previstos formalmente em norma alguma, mas são reconhecidos pela <b>doutrina e pela jurisprudência</b> por decorrerem logicamente da Carta Magna — possuem, assim, a <b>mesma relevância</b> dos expressos.</p>'+
      '<div class="chips"><span class="chip">Supremacia</span><span class="chip">Indisponibilidade</span><span class="chip">Razoabilidade e proporcionalidade</span><span class="chip">Motivação</span><span class="chip">Autotutela</span><span class="chip">Segurança jurídica</span><span class="chip">Continuidade</span><span class="chip">Especialidade</span><span class="chip">Sindicabilidade</span></div></div>'+
      '<div class="box trap"><span class="bl">Supremacia × indisponibilidade</span>'+
      '<p><b>Supremacia:</b> havendo conflito entre o interesse público e o privado, prevalece o <b>público</b>. Exemplos: <b>desapropriação</b>, <b>poder de polícia</b>, <b>cláusulas exorbitantes</b>. <b>Fundamenta as prerrogativas</b>; presente de <b>forma direta</b> nas relações <b>verticais</b> e de <b>forma indireta</b> nas atividades-meio e quando o Estado atua como <b>agente econômico</b>. <b>Não é absoluta</b>: direitos e garantias individuais devem ser sempre respeitados.</p>'+
      '<p><b>Indisponibilidade:</b> a Administração <b>não é “dona”</b> dos bens e interesses públicos — apenas os <b>gere e conserva</b> em prol do povo. <b>Fundamenta as restrições</b>; está <b>ligada à legalidade</b>; presente de <b>forma direta em toda e qualquer atividade administrativa</b>.</p>'+
      '<p><b>Primários</b> → interesses <b>diretos do povo</b>. <b>Secundários</b> → interesses <b>patrimoniais</b> do Estado (aumentar receitas, diminuir gastos) e <b>atos internos de gestão</b>. O secundário só é legítimo <b>se não contrariar o primário</b>.</p></div>'+
      '<div class="box"><span class="bl">Razoabilidade e proporcionalidade</span>'+
      '<div class="fn3"><div class="fn"><b>Razoabilidade</b><br>compatibilidade entre os <b>meios</b> empregados e os <b>fins</b> almejados</div><div class="fn"><b>Proporcionalidade</b><br>impedir o <b>abuso de poder</b> (sanções proporcionais às faltas)</div><div class="fn"><b>Doutrina</b><br>a proporcionalidade é <b>um dos aspectos</b> da razoabilidade</div></div>'+
      '<p>A razoabilidade afere o que é aceitável para o <b>homem médio</b> — ex.: <b>idade máxima</b> em concurso de policial militar. O ato <b>desarrazoado</b> é <b>viciado, ilegal, devendo ser anulado</b>.</p>'+
      '<p>Ela <b>não</b> fundamenta a atuação do Judiciário quanto ao <b>mérito administrativo</b>, mas quanto à <b>legalidade</b>: ao julgar desarrazoado um ato discricionário, o juiz <b>não invade o mérito</b>, apenas verifica a legalidade, pois restrição desarrazoada é praticada com <b>abuso</b>.</p></div>'+
      '<div class="box"><span class="bl">Motivação e autotutela</span>'+
      '<p><b>Motivação:</b> dever de <b>justificar</b> os atos, <b>vinculados ou discricionários</b>, com as <b>razões</b>, os <b>fins</b> e a <b>fundamentação legal</b>; exige indicar os <b>pressupostos de fato e de direito</b>, permite o controle da <b>legalidade e da moralidade</b> e assegura o <b>contraditório e a ampla defesa</b>. A <b>exoneração de cargo em comissão dispensa motivação</b>. O Judiciário <b>pode</b> apreciar os <b>motivos</b> (ausência ou falsidade), mas <b>não</b> o <b>mérito</b> (conveniência ou oportunidade).</p>'+
      '<p><b>Autotutela:</b> <b>legalidade</b> → a Administração <b>anula</b> seus atos ilegais; <b>mérito</b> → <b>revoga</b> por conveniência ou oportunidade (<b>Súmula 473 do STF</b>, respeitados os direitos adquiridos e ressalvada a apreciação judicial). Os atos <b>não podem ser revistos após o prazo decadencial, salvo comprovada má-fé</b>.</p></div>'+
      '<div class="box"><span class="bl">Segurança jurídica e proteção à confiança</span>'+
      '<p><b>Aspecto objetivo</b> (segurança jurídica) → <b>estabilidade das relações</b>. <b>Aspecto subjetivo</b> (proteção à confiança) → <b>crença</b> de que os atos da Administração são <b>legais</b>. Ela <b>veda a aplicação retroativa de nova interpretação</b> e <b>limita a autotutela e a legalidade</b> (ex.: decadência e prescrição).</p>'+
      '<p><b>Lei 9.784/99, art. 54:</b> o direito de <b>anular</b> atos de que decorram <b>efeitos favoráveis</b> aos destinatários <b>decai em cinco anos</b> da data em que praticados, <b>salvo comprovada má-fé</b>.</p>'+
      '<p><b>Pegadinha:</b> a <b>confiança legítima não autoriza</b> manter no cargo servidor empossado por <b>decisão judicial provisória</b> depois revista, <b>ainda que passados mais de cinco anos</b> — o provimento era precário e não se alega fato consumado.</p>'+
      '<p>A proteção à confiança impede posturas <b>contraditórias</b> e admite, verificada legítima expectativa, a <b>manutenção de atos administrativos antijurídicos</b>.</p></div>'+
      '<div class="box"><span class="bl">Continuidade, especialidade, sindicabilidade e o TOME NOTA</span>'+
      '<p><b>Continuidade:</b> o serviço público <b>não pode parar</b>; o <b>direito de greve não é absoluto</b> (lei específica). Admite-se parar para <b>reparos técnicos ou obras de expansão</b> e no <b>inadimplemento da tarifa</b> (energia, telefonia), com restabelecimento <b>tão logo quitado o débito</b>. O <b>delegatário particular</b> não pode interromper a prestação.</p>'+
      '<p><b>Especialidade:</b> ligado à <b>descentralização</b> — a atividade a ser exercida de modo descentralizado deve constar da <b>lei de criação</b> da entidade. <b>Sindicabilidade:</b> <b>todo ato administrativo</b> pode se submeter a <b>algum tipo de controle</b> (inafastabilidade da tutela jurisdicional — CF, art. 5º, XXXV).</p>'+
      '<p><b>TOME NOTA:</b> a <b>intranscendência subjetiva das sanções</b> impede que irregularidades do <b>Legislativo e do Judiciário</b> imponham sanções ao <b>Executivo</b> · é <b>violação</b> limitar idade <b>por ato administrativo</b> para inscrição em concurso, ainda que fundada na natureza das atribuições · o <b>STF</b> permite divulgar <b>nome, cargo e remuneração</b>, mas <b>não CPF, identidade e endereço</b> · a <b>presunção de legitimidade</b> abrange a <b>presunção da verdade</b> (fatos) e a <b>presunção da legalidade</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"O regime jurídico administrativo é o conjunto de:",
  options:["prerrogativas (privilégios) e restrições (sujeições) a que está sujeita a Administração",
           "apenas prerrogativas, pois a Administração está em posição de superioridade",
           "apenas restrições, pois a Administração não é dona do interesse público",
           "regras aplicáveis igualmente à Administração e aos particulares"],
  answer:0,
  why:"Esse conjunto não está presente nas relações entre particulares e eleva a Administração a uma posição vertical."},

S2:{t:"sort", instr:"Qual a fonte imediata (primária) de cada regime?",
  buckets:["Romano-germânico (civil law)","Anglo-saxão (common law)"],
  items:[["A lei",0],["Regime de onde se origina o brasileiro",0],
         ["Os costumes",1],["Os precedentes judiciais",1],
         ["Postula que a descentralização das entidades locais é essencial",1]],
  why:"O resumo é expresso: o regime brasileiro tem a lei como fonte imediata."},

S3:{t:"wordbank", instr:"Monte a definição de deslegalização",
  target:["permissão","do","Poder","Legislativo","ao","Poder","Executivo","de","editar","normas","de","caráter","técnico"],
  extra:["Judiciário","revogar","de maneira vinculada"],
  why:"É o Legislativo que permite ao Executivo editar normas técnicas, de maneira inovadora — nunca o contrário."},

S4:{t:"multi", instr:"Marque os princípios EXPRESSOS no art. 37 da Constituição Federal",
  options:["Legalidade","Impessoalidade","Moralidade","Publicidade","Eficiência",
           "Razoabilidade","Motivação","Autotutela","Contraditório e ampla defesa"],
  answers:[0,1,2,3,4],
  why:"LIMPE. Razoabilidade, motivação e autotutela são implícitos; o contraditório está no art. 5º, LV."},

S5:{t:"gap", instr:"Complete o limite da atuação administrativa",
  before:"Pelo princípio da legalidade, a Administração só pode agir ",
  after:" legem, e não contra legem ou praeter legem.",
  options:["secundum","contra","praeter"], answer:0,
  why:"Segundo a lei: toda e qualquer atividade da Administração deve ser autorizada por lei."},

S6:{t:"match", instr:"Correlacione cada ideia do quadro da legalidade",
  pairs:[["Legalidade","Agir conforme a lei"],
         ["Legitimidade","Lei + moralidade"],
         ["Juridicidade","Ampliação da legalidade: o controle judicial abrange todo o ordenamento"],
         ["Atos inominados","Vedados à Administração, permitidos aos particulares"],
         ["Restrições à legalidade","Estado de defesa, estado de sítio e medidas provisórias"]],
  why:"A juridicidade deixa a margem de liberdade da Administração mais restrita."},

S7:{t:"multi", instr:"Marque os TRÊS enfoques do princípio da impessoalidade",
  options:["Dever de isonomia","Dever de conformidade aos interesses públicos",
           "Vedação à promoção pessoal dos agentes públicos",
           "Dever de atuação conforme preceitos éticos","Vedação à prática de atos inominados",
           "Dever de justificar os atos praticados"],
  answers:[0,1,2],
  why:"Atuação conforme preceitos éticos é moralidade; justificar os atos é motivação."},

S8:{t:"mc", instr:"Qual princípio exige que a autoridade pública não dispense os preceitos éticos?",
  options:["Moralidade","Impessoalidade","Publicidade","Sindicabilidade"],
  answer:0,
  why:"O resumo afasta expressamente a impessoalidade dessa exigência."},

S9:{t:"sort", instr:"No exemplo do governador, cada nomeação contraria a vedação ao nepotismo?",
  buckets:["Contraria (viola a moralidade)","Não contraria"],
  items:[["Lúcio, seu tio, para cargo em comissão no gabinete",0],
         ["Ana, sua prima, para chefe de gabinete",1],
         ["Tatiana, sua filha, aprovada em concurso, para Auditor Fiscal",1]],
  why:"Ana é parente de 4º grau e Tatiana foi aprovada em concurso público; a SV 13 alcança até o 3º grau."},

S10:{t:"mc", instr:"A demora excessiva e injustificada da administração para responder uma petição viola:",
  options:["a eficiência e, segundo o STJ, também a moralidade",
           "apenas a publicidade","a continuidade do serviço público",
           "apenas a moralidade, jamais a eficiência"],
  answer:0,
  why:"O resumo é expresso: essa mora NÃO atenta contra a continuidade do serviço público."},

S11:{t:"gap", instr:"Complete a natureza da publicidade",
  before:"A publicidade não é considerada elemento de formação do ato administrativo, mas sim requisito de ",
  after:".",
  options:["eficácia","validade","existência"], answer:0,
  why:"Por isso o ato não publicado permanece válido, mas sem produzir efeitos perante terceiros."},

S12:{t:"match", instr:"Ligue cada exemplo do resumo ao princípio que ele aplica",
  pairs:[["Concurso público e licitação","Impessoalidade"],
         ["Avaliação de desempenho e contratos de gestão com metas","Eficiência"],
         ["Inabilitação de empresa em licitação somente após defesa","Contraditório e ampla defesa"],
         ["Dever de dar transparência aos atos, tornando-os públicos","Publicidade"],
         ["Distinguir o honesto do desonesto; probidade e boa-fé","Moralidade"]],
  why:"A eficiência exige presteza, perfeição e rendimento funcional, com redução de desperdícios."},

S13:{t:"sort", instr:"Cada característica é da supremacia ou da indisponibilidade do interesse público?",
  buckets:["Supremacia","Indisponibilidade"],
  items:[["Fundamenta as prerrogativas da Administração",0],
         ["Presente de forma direta nas relações jurídicas verticais",0],
         ["Presente de forma indireta nas atividades-meio e quando atua como agente econômico",0],
         ["Fundamenta as restrições da Administração",1],
         ["Está ligado ao princípio da legalidade",1],
         ["Presente de forma direta em toda e qualquer atividade administrativa",1]],
  why:"Supremacia gera prerrogativa; indisponibilidade gera restrição."},

S14:{t:"multi", instr:"Marque os exemplos de aplicação do princípio da supremacia do interesse público",
  options:["Desapropriação","Poder de polícia do Estado",
           "Cláusulas exorbitantes nos contratos administrativos",
           "Exoneração de cargo em comissão sem motivação",
           "Decadência do direito de anular em cinco anos"],
  answers:[0,1,2],
  why:"Os três primeiros são os exemplos do resumo; ainda assim, a supremacia não é absoluta."},

S15:{t:"mc", instr:"Qual destes é interesse público SECUNDÁRIO?",
  options:["Interesse do Estado de aumentar receitas ou diminuir gastos",
           "Interesse direto do povo",
           "A prevalência do interesse público sobre o privado",
           "O dever de dar transparência aos atos"],
  answer:0,
  why:"Secundários são os interesses patrimoniais e os atos internos de gestão — e só são legítimos se não contrariarem o primário."},

S16:{t:"match", instr:"Correlacione cada princípio implícito à sua ideia central",
  pairs:[["Razoabilidade","Compatibilidade entre os meios empregados e os fins almejados"],
         ["Proporcionalidade","Conter o excesso de poder: sanções proporcionais às faltas"],
         ["Motivação","Dever de justificar os atos, vinculados ou discricionários"],
         ["Autotutela","Anular os atos ilegais e revogar por conveniência ou oportunidade"],
         ["Segurança jurídica","Estabilidade das relações e vedação à retroatividade de nova interpretação"],
         ["Sindicabilidade","Todo ato administrativo pode se submeter a algum tipo de controle"]],
  why:"Para a doutrina, a proporcionalidade é um dos aspectos da razoabilidade."},

S17:{t:"gap", instr:"Complete o aspecto de mérito da autotutela",
  before:"Pela autotutela, a Administração anula seus atos ilegais e ",
  after:" seus atos por motivo de conveniência ou oportunidade.",
  options:["revoga","convalida","suspende"], answer:0,
  why:"Súmula 473 do STF, respeitados os direitos adquiridos e ressalvada a apreciação judicial."},

S18:{t:"sort", instr:"Cada afirmação pertence a qual princípio implícito?",
  buckets:["Continuidade","Especialidade","Sindicabilidade"],
  items:[["O direito de greve na Administração não é absoluto",0],
         ["O delegatário particular não pode interromper a prestação do serviço",0],
         ["A atividade descentralizada deve constar da lei de criação da entidade",1],
         ["Ligado à ideia de descentralização administrativa",1],
         ["Todo ato administrativo pode se submeter a algum tipo de controle",2],
         ["O ajuizamento de ação judicial para conter abusos da administração",2]],
  why:"A sindicabilidade se apoia na inafastabilidade da tutela jurisdicional (CF, art. 5º, XXXV)."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q1TQyd","Q1TQyd"],
  ["Caderno FCC — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q1u7WO","Q1u7WO"],
  ["Caderno FGV — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q1u7Wt","Q1u7Wt"],
  ["Caderno VUNESP — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q1u7X0","Q1u7X0"],
  ["Caderno AOCP — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q22ZdK","Q22ZdK"],
  ["Caderno IBFC — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q27OtJ","Q27OtJ"],
  ["Caderno FUNDATEC — Direito Administrativo 02","https://www.tecconcursos.com.br/s/Q27XQ7","Q27XQ7"]
];
var TECNOTA = "Assunto de redação quase decorada, e a banca ganha dinheiro em três fronteiras. A primeira é o par supremacia × indisponibilidade: a supremacia fundamenta as PRERROGATIVAS e aparece de forma direta nas relações verticais; a indisponibilidade fundamenta as RESTRIÇÕES, liga-se à legalidade e está direta em toda e qualquer atividade administrativa — trocar as duas colunas é o erro mais comum. A segunda é a publicidade: ela não é elemento de formação do ato, é requisito de EFICÁCIA, e o ato não publicado permanece válido, só não produz efeitos perante terceiros. A terceira são os números e as inversões: SV 13 até o TERCEIRO grau (a prima, de 4º grau, escapa), cinco anos do art. 54 da Lei 9.784/99 salvo má-fé, razoabilidade = meios e fins × proporcionalidade = excesso de poder, e deslegalização é permissão do Legislativo AO Executivo. Guarde também que a demora injustificada em responder petição viola eficiência e moralidade, mas não a continuidade.";

var UNITS = [
  {n:1, title:"Regime jurídico e legalidade", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Prerrogativas, sujeições e o LIMPE",        xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · regime jurídico administrativo", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · princípios e o art. 37",         xp:25, data:["S3","S4","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"drill",  title:"Praticar · legalidade e juridicidade",      xp:25, data:["S5","S6","T11","T12","T13","T14","T15"]},
    {id:"K5", type:"flash",  title:"Flashcards · regime e legalidade",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Os demais princípios expressos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Impessoalidade, moralidade, publicidade e eficiência", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · impessoalidade",                 xp:25, data:["S7","S8","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · moralidade e nepotismo",         xp:25, data:["S9","S10","T23","T24","T25","T26","T27","T28"]},
    {id:"K9", type:"drill",  title:"Praticar · publicidade, eficiência e ampla defesa", xp:25, data:["S11","S12","T29","T30","T31","T32","T33","T34"]},
    {id:"K10",type:"flash",  title:"Flashcards · LIMPE e ampla defesa",         xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24]}
  ]},
  {n:3, title:"Princípios implícitos", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Da supremacia à sindicabilidade",           xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · supremacia e indisponibilidade", xp:25, data:["S13","S14","T35","T36","T37","T38","T39","T40"]},
    {id:"K13",type:"drill",  title:"Praticar · razoabilidade e motivação",      xp:25, data:["S15","S16","T41","T42","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · autotutela e segurança jurídica",xp:25, data:["S17","S18","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · princípios implícitos",        xp:15, data:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                   xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                     xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                    xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 02 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a abertura do resumo: o regime jurídico administrativo é <b>“o conjunto de prerrogativas (privilégios) e restrições (sujeições) a que está sujeita a Administração, conjunto esse que não está presente nas relações entre particulares”</b>.</p><p>Guarde o par: <b>prerrogativa</b> é o privilégio; <b>sujeição</b> é a amarra. Uma banca que fale só de privilégios, ou só de restrições, está cortando metade da definição.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo</i></p>",
1:"<p>Certo pela literalidade do resumo: são regras e princípios que instituem prerrogativas e sujeições à Administração, <b>“elevando-a a uma posição vertical (posição de superioridade) nas relações entabuladas com particulares”</b>.</p><p>É daqui que sairá, mais adiante, a supremacia do interesse público: ela é o princípio que <b>fundamenta essas prerrogativas</b> e aparece justamente nas <b>relações jurídicas verticais</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo</i></p>",
2:"<p>Certo. É a <b>observação 02</b> do resumo: juridicidade administrativa significa que o administrador <b>“poderá utilizar o ordenamento jurídico e principalmente a Constituição Federal e seus princípios para preencher as lacunas existentes no dia a dia do exercício da Administração Pública”</b>.</p><p>Ela se conecta com a observação 01: enquanto a CF ou a lei <b>não houver esgotado</b> os juízos possíveis de ponderação entre interesses públicos e privados, é a <b>administração</b> que pondera os interesses em conflito.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo — Observações</i></p>",
3:"<p>Errado porque inverteu os Poderes. A <b>observação 03</b> define deslegalização como <b>“a permissão do Poder Legislativo ao Poder Executivo de editar normas de caráter técnico, de maneira inovadora”</b>.</p><p>Leia sempre na ordem: quem <b>permite</b> é o <b>Legislativo</b> (dono da lei); quem <b>passa a editar</b> a norma técnica é o <b>Executivo</b>. Trocar a direção da seta é a pegadinha padrão.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo — Observações</i></p>",
4:"<p>Certo. Observação 04 do resumo: <b>“o regime jurídico administrativo brasileiro é originado do sistema romano-germânico (civil law), ou seja, é um regime jurídico que tem a lei como fonte imediata (primária)”</b>.</p><p>Fixe o par de palavras: <b>civil law → lei → fonte imediata</b>. É esse vínculo que explica por que, entre nós, a legalidade abre o LIMPE.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo — Observações</i></p>",
5:"<p>Errado — a assertiva inverteu as fontes. Pela observação 05, o regime <b>anglo-saxão (common law)</b> é o que <b>“tem os costumes e precedentes judiciais como fonte imediata (primária)”</b>.</p><p>Lei como fonte imediata é o outro regime, o <b>romano-germânico (civil law)</b>, de onde vem o brasileiro. Sempre que a questão citar common law, procure <b>costumes e precedentes</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo — Observações</i></p>",
6:"<p>Certo, é o fecho da observação 05: o regime anglo-saxão <b>“postula que a descentralização das entidades locais é essencial, absorvendo tais entidades a grande maioria dos poderes cometidos à administração central”</b>.</p><p>Repare no detalhe que a banca cobra: quem absorve a maioria dos poderes são as <b>entidades locais</b>, não a administração central.</p><p class='fb-fonte'>Resumo 02 · <i>Regime Jurídico Administrativo — Observações</i></p>",
7:"<p>Errado justamente na palavra <b>única</b>. O resumo diz que os princípios <b>“não se restringem a fixar limites ou a fornecer soluções exatas”</b> e que <b>“não fornecem solução única, mas propiciam um elenco de alternativas, exigindo, por ocasião de sua aplicação, que se escolha por uma dentre diversas soluções”</b>.</p><p>O que eles fazem é determinar o <b>alcance e o sentido das regras</b> e consagrar <b>valores</b> a serem atingidos.</p><p class='fb-fonte'>Resumo 02 · <i>Princípios Básicos da Administração Pública</i></p>",
8:"<p>Certo. É a definição do resumo: princípios implícitos <b>“não estão previstos formalmente em norma alguma, mas são reconhecidos pela doutrina”</b>.</p><p>O contraste com o outro lado do par fecha a questão: <b>expressos</b> são <b>“aqueles previstos na CF ou em alguma lei”</b>. E, mais adiante, o resumo acrescenta que os implícitos possuem <b>a mesma relevância</b> dos expressos.</p><p class='fb-fonte'>Resumo 02 · <i>Princípios Básicos da Administração Pública</i></p>",
9:"<p>Certo pela letra do <b>art. 37</b> transcrito no resumo: a administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios obedecerá aos princípios de <b>legalidade, impessoalidade, moralidade, publicidade e eficiência</b>.</p><p>É o mnemônico <b>LIMPE</b>. Nenhum outro princípio entra nessa lista do art. 37 — razoabilidade, motivação e autotutela são <b>implícitos</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípios Expressos na Constituição Federal</i></p>",
10:"<p>Errado no endereço do dispositivo. A observação do resumo é literal: o contraditório e a ampla defesa, <b>“embora não esteja expresso no artigo 37, que trata da Administração Pública, possui previsão no artigo 5º, LV, da Constituição Federal”</b>.</p><p>Guarde: <b>LIMPE = art. 37</b>; <b>contraditório e ampla defesa = art. 5º, LV</b>. A banca troca o artigo e muita gente marca certo pelo hábito.</p><p class='fb-fonte'>Resumo 02 · <i>Princípios Expressos na Constituição Federal</i></p>",
11:"<p>Certo. O resumo põe os três latinismos na mesma frase: a Administração <b>“só pode agir segundo a lei (secundum legem), e não contra a lei (contra legem) ou além da lei (praeter legem)”</b>.</p><p>É o exemplo do <b>Pablo</b>, da área de compras e contratações de entidade da administração indireta: nos processos de contratação pública ele deve agir sempre <b>de acordo com aquilo que a lei permite</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade</i></p>",
12:"<p>Errado — as duas colunas do quadro estão trocadas. No resumo: <b>“para a Administração => restrição de vontade”</b> e <b>“para os particulares => autonomia de vontade”</b>.</p><p>A lógica é simples: o particular pode tudo o que a lei não proíbe; a Administração só pode o que a lei autoriza. Daí a vedação, a ela, dos <b>atos inominados</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade</i></p>",
13:"<p>Errado. O quadro do resumo separa as duas ideias em linhas distintas: <b>“Legalidade => Agir conforme a lei”</b> e <b>“Legitimidade => Lei + Moralidade”</b>.</p><p>Ou seja, a legitimidade é <b>mais exigente</b>: além da conformidade com a lei, pede a <b>moralidade</b>. Ato legal pode não ser legítimo.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade</i></p>",
14:"<p>Certo, e é a última linha do quadro da legalidade: <b>“Restrições à legalidade: Estado de Defesa, Estado de Sítio e Medidas Provisórias”</b>.</p><p>São três, e o resumo não cita outras. Se a questão acrescentar ou trocar um item da lista, marque errado.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade</i></p>",
15:"<p>Errado porque inverteu os destinatários. A <b>observação 01</b> da legalidade: o princípio <b>“veda à administração a prática de atos inominados (sem previsão em lei), embora estes sejam permitidos aos particulares”</b>.</p><p>E o resumo define o oposto na observação 02: <b>ato nominado</b> é o que possui previsão em lei e está apto a alcançar determinado fim — <b>“para punir um servidor, a legislação nomina, entre outros, o ato de demissão”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade — Observações</i></p>",
16:"<p>Certo, é o conceito do resumo: os atos administrativos <b>“devem ser praticados tendo em vista o interesse público, e não os interesses pessoais do agente ou de terceiros”</b>.</p><p>Repare no alcance: não basta que o agente não se beneficie; o ato também não pode ser praticado para beneficiar <b>terceiros</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Impessoalidade</i></p>",
17:"<p>Certo. São exatamente os dois exemplos de aplicabilidade que o resumo cita para a impessoalidade: <b>concurso público</b> e <b>licitação</b>.</p><p>A razão é o primeiro dos três enfoques do princípio: o <b>dever de isonomia</b> — tratar todos os candidatos e licitantes da mesma forma.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Impessoalidade</i></p>",
18:"<p>Errado, e essa troca é cobrada de propósito. A <b>observação 01</b> do resumo diz que a impessoalidade <b>“não está diretamente relacionada à obrigação de que a autoridade pública não dispense os preceitos éticos”</b>, porque <b>“o princípio que exige atuação conforme preceitos éticos é o da moralidade”</b>.</p><p>Palavra-chave <b>ética</b> na assertiva? Pense em <b>moralidade</b>, não em impessoalidade.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Impessoalidade</i></p>",
19:"<p>Certo pela <b>observação 02</b>: a impessoalidade <b>“proíbe nome, símbolos ou imagens que caracterizem promoção pessoal, inclusive do partido”</b>.</p><p>O <b>inclusive do partido</b> é o detalhe que a banca corta ou nega. É o terceiro enfoque do princípio: <b>vedação à promoção pessoal dos agentes públicos</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Impessoalidade</i></p>",
20:"<p>Certo. Observação 03 do resumo, literal: a impessoalidade <b>“permite que se reconheça a validade de atos praticados por agente de fato”</b>.</p><p>Faz sentido pelo próprio princípio: o ato é praticado em nome do <b>órgão</b>, e não da pessoa do agente — por isso o vício na investidura não contamina automaticamente o ato.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Impessoalidade</i></p>",
21:"<p>Errado no terceiro item. Os <b>3 enfoques</b> do quadro do resumo são: <b>dever de isonomia</b>, <b>dever de conformidade aos interesses públicos</b> e <b>vedação à promoção pessoal dos agentes públicos</b>.</p><p>Atos inominados nada têm a ver com impessoalidade: são tema da <b>legalidade</b> — vedados à Administração e permitidos aos particulares.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Impessoalidade</i></p>",
22:"<p>Certo, é o conceito do resumo: a moralidade <b>“impõe a necessidade de atuação ética dos agentes públicos, traduzida na capacidade de distinguir entre o que é honesto e o que é desonesto”</b>.</p><p>E ele completa: <b>“liga-se à ideia de probidade e de boa-fé”</b>. Guarde essas duas palavras — elas costumam ser o gatilho da moralidade nas assertivas.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Moralidade</i></p>",
23:"<p>Errado no princípio apontado. A <b>observação 01</b> da moralidade é expressa: <b>“a demora excessiva e injustificada da administração para apresentar resposta a uma petição é omissão violadora do princípio da eficiência”</b>.</p><p>O resumo acrescenta que, <b>segundo o STJ</b>, por colocar em xeque a legítima confiança que o cidadão comum deposita na administração, essa mora atenta <b>também contra a moralidade</b>. Publicidade não entra na conta.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Moralidade</i></p>",
24:"<p>Errado, e o resumo nega isso em uma frase inteira, a <b>observação 02</b>: <b>“a demora excessiva da administração para apresentar resposta a uma petição NÃO atenta contra o princípio da continuidade do serviço público”</b>.</p><p>Ordene as três palavras: <b>eficiência</b> (sempre), <b>moralidade</b> (pelo STJ), <b>continuidade</b> (nunca).</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Moralidade</i></p>",
25:"<p>Certo. Observação 03: <b>“o STF entende que a prática do nepotismo (súmula vinculante 13) ofende os princípios da moralidade, impessoalidade e da eficiência”</b>.</p><p>São <b>três</b> princípios, e a eficiência é o que costuma ser esquecido — a lógica é que o parente nomeado sem mérito compromete o rendimento funcional.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Moralidade</i></p>",
26:"<p>Errado no grau. A <b>súmula vinculante 13</b>, transcrita no resumo, alcança cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade <b>“até o terceiro grau, inclusive”</b> — não até o quarto.</p><p>É por isso que, no exemplo do resumo, a nomeação de <b>Ana</b>, prima do governador, não viola a súmula: prima é parente de <b>4º grau</b>.</p><p class='fb-fonte'>Resumo 02 · <i>STF. Súmula Vinculante 13</i></p>",
27:"<p>Certo pela literalidade da súmula transcrita no resumo, que fecha alcançando <b>“o ajuste mediante designações recíprocas”</b>.</p><p>É o nepotismo cruzado: duas autoridades nomeiam os parentes uma da outra. Sem essa cláusula, a vedação seria facilmente contornada.</p><p class='fb-fonte'>Resumo 02 · <i>STF. Súmula Vinculante 13</i></p>",
28:"<p>Certo, é o exemplo do resumo com os mesmos nomes: <b>“foi respeitado o princípio da moralidade administrativa, por não se ter contrariado a vedação ao nepotismo, somente na nomeação de Ana (parente de 4º grau) e Tatiana”</b>.</p><p>As razões são diferentes: <b>Ana</b> escapa pelo <b>grau de parentesco</b> (4º, fora do alcance da SV 13); <b>Tatiana</b> escapa porque foi <b>aprovada em concurso público</b>, e a súmula trata de cargo em comissão, de confiança ou função gratificada. Quem viola é <b>Lúcio</b>, tio, em cargo em comissão.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Moralidade — exemplo</i></p>",
29:"<p>Certo, é o conceito do resumo: a publicidade <b>“impõe à Administração Pública o dever de dar transparência a seus atos, tornando-os públicos, do conhecimento de todos”</b>.</p><p>No tópico de conceitos importantes o resumo ainda vincula esse dever à improbidade: a desobediência ao dever de <b>publicação de atos oficiais</b> pode caracterizar ato de improbidade administrativa.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Publicidade</i></p>",
30:"<p>Errado na palavra <b>absoluto</b>. A <b>observação 01</b> diz que a publicidade <b>“não é absoluto, sendo restringido pelo ordenamento jurídico”</b> em duas hipóteses: quando <b>imprescindível à segurança da sociedade e do Estado</b>; ou quando <b>afrontar os direitos fundamentais à intimidade e à privacidade</b>.</p><p>O resumo dá o exemplo prático nos conceitos importantes: o <b>STF</b> permite divulgar <b>nome, cargo e remuneração</b> dos servidores, mas <b>não CPF, identidade e endereço</b>, como medida de segurança.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Publicidade</i></p>",
31:"<p>Errado por uma palavra. A <b>observação 02</b> é direta: <b>“a Publicidade não é considerada elemento de formação do ato administrativo, mas sim requisito de eficácia”</b>.</p><p>A consequência está na observação seguinte, e é ela que fecha o raciocínio: o ato não publicado <b>permanece válido</b>, apenas não produz efeitos perante terceiros. Se fosse elemento de formação, o ato seria inválido.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Publicidade</i></p>",
32:"<p>Certo pela literalidade da <b>observação 03</b>: <b>“o ato não publicado permanece válido, mas sem produzir efeitos perante terceiros”</b>.</p><p>Separe os planos: <b>validade</b> (o ato existe e é regular) e <b>eficácia</b> (o ato produz efeitos). A publicidade mexe no segundo, não no primeiro.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Publicidade</i></p>",
33:"<p>Errado. A <b>observação 02</b> da eficiência não deixa margem: <b>“o princípio da eficiência não pode se sobrepor ao princípio da legalidade”</b>.</p><p>E a observação 03 completa: a eficiência <b>“deve ser buscada com observância aos parâmetros e procedimentos previstos na lei”</b>. Nenhum resultado, por bom que seja, autoriza atalho fora da lei.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Eficiência</i></p>",
34:"<p>Certo, é a transcrição do <b>art. 5º, LV</b>, feita pelo resumo: <b>“aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes”</b>.</p><p>Os dois exemplos de aplicabilidade do resumo: o <b>desfazimento da nomeação</b> de um agente administrativo e a <b>inabilitação de empresa em licitação</b> só podem ocorrer depois de assegurada a garantia.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio do Contraditório e Ampla Defesa</i></p>",
35:"<p>Errado. O resumo afirma o contrário: os princípios implícitos são reconhecidos pela doutrina e pela jurisprudência por serem decorrência lógica dos ditames da Carta Magna, <b>“possuindo, assim, a mesma relevância que os princípios expressos”</b>.</p><p>Não há hierarquia entre implícito e expresso. A única diferença é a <b>previsão formal</b> em norma.</p><p class='fb-fonte'>Resumo 02 · <i>Princípios Implícitos na Constituição Federal</i></p>",
36:"<p>Certo, é o conceito do resumo: havendo conflito entre o interesse público e o privado, <b>“há de prevalecer o interesse público, tutelado (protegido) pelo Estado”</b>.</p><p>A justificativa que ele dá: as atividades administrativas são desenvolvidas para <b>benefício da coletividade</b>, e o indivíduo, parte da sociedade, não tem interesses que se equiparem, em regra, aos direitos do todo.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Supremacia do Interesse Público</i></p>",
37:"<p>Certo — são os três exemplos que o resumo lista, com a explicação de cada um: <b>desapropriação</b> (o interesse público suplanta o do proprietário); <b>poder de polícia</b> (estabelece restrições às atividades individuais); <b>cláusulas exorbitantes</b> (possibilitam modificar ou rescindir unilateralmente o contrato).</p><p>Todos os três são <b>prerrogativas</b> — e é justamente isso que a supremacia fundamenta.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Supremacia do Interesse Público</i></p>",
38:"<p>Errado. É o caixa <b>ATENÇÃO!</b> do resumo: <b>“o princípio da supremacia do interesse público não é absoluto, pois os direitos e garantias individuais devem ser sempre respeitados”</b>.</p><p>No tópico de conceitos importantes ele reforça a ideia: a emergência de um <b>modelo de ponderação</b> como critério de racionalidade do direito serve para demonstrar a <b>inconsistência da supremacia abstrata</b> do público sobre o privado.</p><p class='fb-fonte'>Resumo 02 · <i>Supremacia do Interesse Público — Atenção!</i></p>",
39:"<p>Certo, são duas linhas do quadro da supremacia: ela <b>“fundamenta as prerrogativas da Administração”</b> e <b>“está presente de forma direta nas relações jurídicas verticais (administração x administrado)”</b>.</p><p>Complete o quadro: de <b>forma indireta</b>, ela aparece nas <b>atividades-meio</b> e quando o Estado atua como <b>agente econômico</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Supremacia do Interesse Público</i></p>",
40:"<p>Errado, e essa é a troca de colunas que o resumo praticamente antecipa ao colocar os dois quadros lado a lado. A indisponibilidade <b>“fundamenta as restrições da Administração”</b>; quem fundamenta as <b>prerrogativas</b> é a <b>supremacia</b>.</p><p>Memorize o par: <b>supremacia → prerrogativa</b>; <b>indisponibilidade → restrição</b>. E a indisponibilidade ainda <b>está ligada ao princípio da legalidade</b> e presente de <b>forma direta em toda e qualquer atividade administrativa</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Indisponibilidade do Interesse Público</i></p>",
41:"<p>Certo pela frase literal do resumo: <b>“o interesse público secundário só é legítimo quando não é contrário ao interesse público primário”</b>.</p><p>A razão é a base do princípio: a Administração não é <b>“dona”</b> dos bens e interesses públicos, cabendo-lhe apenas <b>geri-los e conservá-los</b> em prol do verdadeiro titular, <b>o povo</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Indisponibilidade do Interesse Público</i></p>",
42:"<p>Errado — a assertiva descreve os <b>secundários</b>. No resumo: <b>“interesses públicos primários => interesses diretos do povo”</b>; e os <b>secundários</b> são <b>“interesses do Estado de caráter patrimonial (aumentar receitas ou diminuir gastos)”</b> e <b>“os atos internos de gestão administrativa”</b>.</p><p>Atalho para a prova: se a assertiva falar de <b>dinheiro do Estado</b> ou de <b>gestão interna</b>, é interesse <b>secundário</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Indisponibilidade do Interesse Público</i></p>",
43:"<p>Certo, é o conceito do resumo: a razoabilidade <b>“se destina a aferir a compatibilidade entre os meios empregados e os fins almejados na prática de um ato administrativo, de modo a evitar restrições aos administrados que sejam inadequadas, desnecessárias, arbitrárias ou abusivas”</b>.</p><p>São quatro adjetivos, e o resumo os traz em bloco — cortar um deles não torna a assertiva errada, mas trocar a definição pela da proporcionalidade, sim.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Razoabilidade e Proporcionalidade</i></p>",
44:"<p>Errado: os conceitos estão invertidos. No quadro do resumo, <b>RAZOABILIDADE</b> = <b>“compatibilidade entre os meios empregados e os fins almejados”</b>; <b>PROPORCIONALIDADE</b> = <b>“impedir o abuso de poder (ex.: sanções proporcionais às faltas)”</b>.</p><p>Guarde pelo exemplo: quando a assertiva falar em <b>sanção proporcional à falta</b>, o princípio é a <b>proporcionalidade</b>, que se destina a <b>conter o excesso de poder</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Razoabilidade e Proporcionalidade</i></p>",
45:"<p>Certo pela nota do resumo, logo abaixo do quadro: <b>“Doutrina => A proporcionalidade constitui um dos aspectos da razoabilidade”</b>.</p><p>Ou seja, a relação não é de igualdade nem de oposição: a proporcionalidade está <b>dentro</b> da razoabilidade. Assertiva que inverta a continência está errada.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Razoabilidade e Proporcionalidade</i></p>",
46:"<p>Errado. A <b>observação 01</b> do princípio fecha a questão: <b>“o ato que se mostrar desarrazoado (não aceitável) será um ato viciado, ou seja, será ilegal, devendo ser anulado”</b>.</p><p>É o teste do <b>homem médio</b> do resumo: é aceitável instituir idade máxima para um concurso de policial militar? Se a resposta é positiva, a restrição é razoável; se não, o ato é viciado. E a observação 02 confirma: a inobservância da razoabilidade <b>resulta em vício do ato</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Razoabilidade — Observações</i></p>",
47:"<p>Certo pela <b>observação 04</b>: a razoabilidade permite ao Judiciário analisar os atos discricionários para verificar se não houve exageros, <b>“porém, ao considerar o ato desarrazoado, o Judiciário não estará invadindo o mérito do ato, mas sim verificando a sua legalidade”</b>.</p><p>A razão dada pelo resumo: uma sanção ou restrição desarrazoada é praticada com <b>abuso</b>, o que <b>configura uma ilegalidade</b>. Por isso a observação 03 diz que a razoabilidade não fundamenta a atuação judicial quanto ao <b>mérito administrativo</b>, mas quanto à <b>legalidade</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Razoabilidade — Observações</i></p>",
48:"<p>Errado. A <b>observação 01</b> da motivação é de uma linha: <b>“a exoneração de ocupante de cargo em comissão dispensa motivação”</b>.</p><p>Não confunda com a regra geral do princípio, que impõe justificar os atos <b>vinculados ou discricionários</b>. As outras duas observações completam o bloco: o Judiciário <b>pode</b> apreciar os <b>motivos</b> (ausência ou falsidade) e <b>não pode</b> apreciar o <b>mérito</b> (conveniência ou oportunidade).</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Motivação</i></p>",
49:"<p>Certo, é a <b>Súmula 473 do STF</b> transcrita no resumo: a Administração pode <b>anular</b> seus próprios atos quando eivados de vícios que os tornam ilegais, <b>“porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial”</b>.</p><p>É a autotutela nos seus dois aspectos: <b>legalidade → anular</b>; <b>mérito → revogar</b>. E o caixa ATENÇÃO avisa: os atos <b>não podem ser revistos após o prazo decadencial, salvo comprovada má-fé</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Autotutela</i></p>",
50:"<p>Errado no verbo. O quadro do resumo diz que a segurança jurídica <b>“veda a aplicação retroativa de nova interpretação”</b> — o oposto de admitir.</p><p>A finalidade do princípio explica: as situações jurídicas devem ser estáveis para que o administrado <b>“não seja surpreendido ou agravado pela mudança inesperada de comportamento da Administração”</b>. E o quadro completa: a segurança jurídica <b>limita a autotutela e a legalidade</b> — ex.: decadência e prescrição.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Segurança Jurídica</i></p>",
51:"<p>Errado na palavra <b>absoluto</b>. O resumo usa a greve exatamente como exemplo do limite: <b>“o direito de greve na Administração Pública não é absoluto, devendo ser exercido nos termos e limites definidos em lei específica”</b>.</p><p>O princípio admite outras exceções: <b>reparos técnicos</b> ou <b>obras para a melhoria da expansão</b> dos serviços e o <b>inadimplemento da tarifa</b> (energia elétrica, telefonia), caso em que o serviço deve ser restabelecido <b>tão logo seja quitado o débito</b>. E o caixa ATENÇÃO lembra que o <b>delegatário particular</b> não pode interromper a prestação.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Continuidade do Serviço Público</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Regime jurídico administrativo e princípios", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
