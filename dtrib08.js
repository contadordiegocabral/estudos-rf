/* Direito Tributário — Módulo 08: Crédito tributário e lançamento (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib08 = (function(){
"use strict";

var CARDS = [
  ["Que parte do CTN trata do crédito tributário?","O <b>Título III do Livro Segundo</b>, <b>arts. 139 a 193</b>, em seis capítulos: disposições gerais (139-141) · <b>constituição (142-150)</b> · suspensão (151-155-A) · extinção (156-174) · exclusão (175-182) · garantias e privilégios (183-193)."],
  ["Qual a cadeia que leva ao crédito tributário?","<b>Hipótese de incidência</b> → <b>fato gerador</b> → <b>obrigação tributária</b> → <b>LANÇAMENTO</b> → <b>crédito tributário</b>."],
  ["Defina cada elo dessa cadeia","<b>Hipótese de incidência:</b> a previsão legal. <b>Fato gerador:</b> o acontecimento no mundo real. <b>Obrigação tributária:</b> surge com o fato gerador. <b>Lançamento:</b> o procedimento que formaliza. <b>Crédito tributário:</b> o direito já apurado da Fazenda."],
  ["O que diz o art. 139 do CTN?","O crédito tributário <b>decorre da obrigação principal</b> e <b>tem a mesma natureza desta</b>."],
  ["Por que o art. 139 importa na prática?","Porque a obrigação principal abrange <b>tributo OU penalidade pecuniária</b> — logo o crédito tributário pode ter <b>natureza de tributo ou de MULTA</b>. Crédito tributário não é só tributo."],
  ["O que diz o art. 140?","As circunstâncias que <b>modificam o crédito</b>, sua extensão, seus efeitos, suas garantias e privilégios, ou que <b>excluem sua exigibilidade</b>, <b>NÃO afetam a obrigação tributária</b> que lhe deu origem."],
  ["Crédito anulado por vício na notificação: a obrigação cai junto?","<b>NÃO.</b> A obrigação tributária <b>sobrevive</b> — o vício atinge o crédito, não a obrigação que lhe deu origem (art. 140). O Fisco pode lançar de novo."],
  ["A quem compete o lançamento? (art. 142)","<b>PRIVATIVAMENTE à AUTORIDADE ADMINISTRATIVA.</b>"],
  ["O que é o lançamento? (art. 142)","O <b>procedimento administrativo</b> tendente a <b>verificar a ocorrência do fato gerador</b>, <b>determinar a matéria tributável</b>, <b>calcular o montante devido</b>, <b>identificar o sujeito passivo</b> e, sendo o caso, <b>propor a aplicação da penalidade cabível</b>."],
  ["Qual o mnemônico do art. 142?","<b>VDCIP</b>: <b>V</b>erificar o fato gerador · <b>D</b>eterminar a matéria tributável · <b>C</b>alcular o montante · <b>I</b>dentificar o sujeito passivo · <b>P</b>ropor a penalidade."],
  ["Como é a atividade de lançamento?","<b>VINCULADA e OBRIGATÓRIA</b>, sob pena de <b>responsabilidade funcional</b> (art. 142, parágrafo único). Não há discricionariedade."],
  ["Qual a natureza jurídica do lançamento?","<b>MISTA</b>: <b>DECLARA</b> a obrigação tributária (que já existia desde o fato gerador) e <b>CONSTITUI</b> o crédito tributário, tornando-o exigível."],
  ["Qual a pegadinha clássica do art. 142?","Escrever que compete à autoridade constituir <b>“a obrigação tributária”</b> pelo lançamento. O correto é <b>constituir o CRÉDITO tributário</b> — a obrigação nasce com o fato gerador."],
  ["O que diz o art. 143?","Valor em <b>moeda estrangeira</b> converte-se em moeda nacional ao <b>câmbio do dia da OCORRÊNCIA DO FATO GERADOR</b> — salvo disposição de lei em contrário."],

  ["Qual a regra do art. 144, caput?","O lançamento <b>reporta-se à data da ocorrência do fato gerador</b> e <b>rege-se pela lei então vigente</b>, <b>ainda que posteriormente modificada ou revogada</b>."],
  ["Que efeito tem o lançamento?","<b>Retroativo — ex tunc.</b> Vale a lei do tempo do fato gerador, não a do tempo do lançamento."],
  ["FG em fevereiro com alíquota de 30%; em abril a alíquota cai para 10%; lançamento em setembro. Qual alíquota?","<b>30%</b> — a vigente na data do fato gerador. A lei nova, ainda que mais benéfica, <b>não retroage</b> quanto a alíquotas."],
  ["Lançamento retroage, mas a lei tributária retroage?","<b>O lançamento sim (ex tunc); a LEI em regra NÃO</b> — vale a irretroatividade. O § 1º do art. 144 abre a exceção quanto aos <b>aspectos FORMAIS</b>."],
  ["Que legislação POSTERIOR ao fato gerador se aplica ao lançamento? (art. 144, § 1º)","A que tenha <b>instituído novos critérios de apuração ou processos de fiscalização</b>, <b>ampliado os poderes de investigação</b> das autoridades, ou <b>outorgado ao crédito maiores garantias ou privilégios</b>."],
  ["Qual a exceção dentro do § 1º?","As <b>maiores garantias ou privilégios</b> não se aplicam retroativamente <b>para o efeito de atribuir RESPONSABILIDADE TRIBUTÁRIA A TERCEIROS</b>."],
  ["Como resumir o § 1º do art. 144?","<b>Aspectos FORMAIS (procedimento) retroagem; aspectos MATERIAIS (alíquota, base de cálculo) NÃO.</b>"],
  ["Lei de 2023 amplia poderes de investigação; fisco autua em 2023 fatos de 2020. Válido?","<b>SIM</b> — novos critérios de apuração e ampliação dos poderes de investigação <b>aplicam-se a lançamentos de fatos geradores anteriores</b> à sua vigência (art. 144, § 1º)."],
  ["O que diz o art. 144, § 2º?","O artigo <b>não se aplica</b> aos <b>impostos lançados por PERÍODOS CERTOS DE TEMPO</b>, desde que a lei <b>fixe expressamente a data</b> em que o fato gerador se considera ocorrido — ex.: <b>IPVA e IPTU</b>."],
  ["Se a lei diz que o FG do IPVA ocorre em 1º de janeiro, que legislação se aplica?","A que estiver <b>em vigor nessa data</b>. Na essência não é exceção, mas deve ser memorizado para prova."],
  ["Lembrete da retroatividade benéfica","Ela <b>não alcança ALÍQUOTAS</b>, apenas <b>MULTAS</b> menos severas, e só se o ato <b>não estiver definitivamente julgado</b> (art. 106, II, c)."],

  ["Quando o lançamento regularmente notificado pode ser alterado? (art. 145)","<b>I)</b> <b>impugnação</b> do sujeito passivo; <b>II)</b> <b>recurso de ofício</b>; <b>III)</b> <b>iniciativa de ofício</b> da autoridade, nos casos do art. 149."],
  ["O lançamento notificado pode ser alterado por livre iniciativa da autoridade?","<b>NÃO</b> — só nas <b>três hipóteses</b> do art. 145, e a de ofício apenas nos casos taxativos do art. 149."],
  ["O que é recurso de ofício?","O que ocorre quando a <b>decisão administrativa de 1ª instância foi DESFAVORÁVEL AO FISCO</b> — sobe obrigatoriamente para reexame."],
  ["O que diz o art. 146?","A modificação nos <b>critérios jurídicos</b> adotados pela autoridade no lançamento — de ofício ou por decisão administrativa ou judicial — só pode ser efetivada, quanto ao <b>mesmo sujeito passivo</b>, para <b>fato gerador ocorrido POSTERIORMENTE</b> à sua introdução."],
  ["O que é ERRO DE DIREITO?","A <b>mudança no modo de interpretar a norma</b> — a modificação dos critérios jurídicos do art. 146. <b>Não autoriza revisão</b> do lançamento já feito."],
  ["O que diz a Súmula 227 do STJ?","“A <b>mudança de critério jurídico</b> adotado pelo Fisco <b>NÃO autoriza a revisão do lançamento</b>.”"],
  ["Erro de direito × erro de fato","<b>Erro de DIREITO</b> (mudança de interpretação): efeitos <b>ex nunc</b>, só para o futuro — <b>não</b> revisa lançamento. <b>Erro de FATO</b> (fato não conhecido ou não provado): <b>autoriza</b> a revisão de ofício (art. 149, VIII)."],

  ["Quais são as três modalidades de lançamento?","<b>Por DECLARAÇÃO</b> (misto, art. 147) · <b>de OFÍCIO</b> (direto, art. 149) · <b>por HOMOLOGAÇÃO</b> (art. 150)."],
  ["Quem define a modalidade de lançamento?","A <b>LEI</b> do tributo. Mas as <b>normas gerais sobre lançamento</b> são matéria de <b>LEI COMPLEMENTAR</b> (art. 146, III, b, da CF)."],
  ["O que é lançamento POR DECLARAÇÃO? (art. 147)","Aquele efetuado <b>com base na declaração do sujeito passivo ou de terceiro</b>, que presta à autoridade <b>informações sobre matéria de FATO</b> indispensáveis à sua efetivação. Ex.: <b>ITBI, ITCMD</b>."],
  ["Como funciona o lançamento por declaração na prática?","O contribuinte <b>presta as informações e AGUARDA</b> o lançamento da autoridade, que então o <b>notifica para pagar</b>."],
  ["Quando o declarante pode retificar a declaração? (art. 147, § 1º)","Quando vise a <b>reduzir ou excluir tributo</b>, só <b>mediante comprovação do erro</b> em que se funde e <b>ANTES de notificado o lançamento</b>."],
  ["E se já houve a notificação?","Resta ao contribuinte a <b>IMPUGNAÇÃO</b> (art. 145, I)."],
  ["O que diz o art. 147, § 2º?","Os <b>erros contidos na declaração e apuráveis pelo seu exame</b> serão retificados <b>DE OFÍCIO</b> pela autoridade a que competir a revisão."],
  ["O que permite o art. 148?","O <b>ARBITRAMENTO</b>: quando o cálculo tome por base o valor de bens, direitos, serviços ou atos jurídicos, a autoridade, <b>mediante processo regular</b>, arbitrará esse valor sempre que as declarações ou documentos forem <b>omissos ou não mereçam fé</b>."],
  ["Qual a garantia do contribuinte no arbitramento?","Em caso de contestação, é <b>ressalvada a AVALIAÇÃO CONTRADITÓRIA</b>, administrativa ou judicial."],
  ["O arbitramento é uma quarta modalidade de lançamento?","<b>NÃO</b> — é <b>técnica de apuração da base de cálculo</b>, não modalidade autônoma."],
  ["Exemplo de arbitramento","Compra de imóvel por R$ 5 milhões declarada como R$ 2 milhões para reduzir o ITBI: o Fisco constata que a declaração <b>não merece fé</b> e <b>arbitra</b> o valor real."],
  ["O que é lançamento DE OFÍCIO? (art. 149)","Aquele em que <b>todo o VDCIP é feito pela autoridade administrativa</b>, <b>sem participação do sujeito passivo</b>. Ex.: <b>IPTU, IPVA, taxas e contribuições</b>."],
  ["Quais as principais hipóteses do art. 149?","Quando a <b>lei determinar</b>; <b>declaração fora do prazo</b>; <b>não atendimento a pedido de esclarecimento</b>; <b>falsidade, erro, inexatidão ou omissão</b>; <b>omissão ou inexatidão no lançamento por homologação</b>; ação ou omissão que gere <b>penalidade pecuniária</b>; <b>dolo, fraude ou simulação</b>; <b>fato não conhecido ou não provado</b>; <b>fraude ou falta funcional</b> da autoridade lançadora."],
  ["Todo lançamento pode ser revisto de ofício?","<b>SIM</b> — inclusive o originalmente feito por homologação. Mas a revisão <b>só pode ser INICIADA enquanto não extinto o direito da Fazenda</b> (art. 149, parágrafo único)."],
  ["O que é lançamento POR HOMOLOGAÇÃO? (art. 150)","Aquele dos tributos cuja legislação atribui ao sujeito passivo o dever de <b>ANTECIPAR o pagamento sem prévio exame</b> da autoridade, que depois, tomando conhecimento da atividade, <b>expressamente a homologa</b>. Ex.: <b>IPI, ICMS, ISS, IR</b>."],
  ["Por que o IRPF NÃO é lançamento por declaração?","Porque o contribuinte <b>antecipa o pagamento</b> sem prévio exame, e o Fisco apenas <b>confere depois</b>. No lançamento por declaração (ITBI), o contribuinte <b>informa e espera</b> o lançamento."],
  ["O que diz o art. 150, § 1º?","O <b>pagamento antecipado extingue o crédito SOB CONDIÇÃO RESOLUTÓRIA</b> da ulterior homologação."],
  ["O que dizem os §§ 2º e 3º do art. 150?","<b>§ 2º:</b> atos anteriores à homologação <b>não influem</b> sobre a obrigação tributária — se não validados, o Fisco cobra a diferença de ofício. <b>§ 3º:</b> mas esses atos <b>são considerados</b> na apuração do saldo devido e na imposição ou graduação da penalidade."],
  ["Qual o prazo do art. 150, § 4º?","<b>5 anos a contar da OCORRÊNCIA DO FATO GERADOR</b>. Expirado sem pronunciamento da Fazenda: <b>homologação tácita</b> e crédito <b>definitivamente extinto</b> — <b>salvo dolo, fraude ou simulação</b>."],

  ["Decadência × prescrição","<b>DECADÊNCIA:</b> prazo para o Fisco <b>efetuar o LANÇAMENTO</b>. <b>PRESCRIÇÃO:</b> prazo para o Fisco <b>ACIONAR o sujeito passivo na justiça</b> (execução fiscal)."],
  ["Qual a linha do tempo dos prazos?","<b>Fato gerador</b> → <b>5 anos de DECADÊNCIA</b> → <b>notificação do lançamento</b> → prazo para pagar ou impugnar (regra: 30 dias) → <b>definitividade do lançamento</b> → <b>5 anos de PRESCRIÇÃO</b> → <b>execução fiscal</b>."],
  ["Declarou e pagou: como conta a decadência?","Pelo <b>art. 150, § 4º</b>: <b>5 anos do FATO GERADOR</b>, para o Fisco lançar eventuais diferenças."],
  ["Não declarou: como conta a decadência?","Pelo <b>art. 173, I</b> (Súmula 555 do STJ): <b>5 anos do PRIMEIRO DIA DO EXERCÍCIO SEGUINTE</b> àquele em que o lançamento poderia ter sido efetuado."],
  ["Declarou e não pagou: o que acontece?","Pela <b>Súmula 436 do STJ</b>, a declaração <b>já constitui o crédito</b>: <b>cessa a decadência</b> e <b>começa a PRESCRIÇÃO</b>."],
  ["O que diz a Súmula 436 do STJ?","“A <b>entrega de declaração</b> pelo contribuinte <b>reconhecendo débito fiscal CONSTITUI O CRÉDITO TRIBUTÁRIO</b>, dispensada qualquer outra providência por parte do fisco.”"],
  ["O que diz a Súmula 555 do STJ?","Quando <b>NÃO houver declaração</b> do débito, o prazo decadencial quinquenal conta-se <b>exclusivamente na forma do art. 173, I</b>, nos casos em que a legislação atribui ao sujeito passivo o dever de antecipar o pagamento."],
  ["Resuma as três situações do prazo","<b>Declarou e pagou → art. 150, § 4º</b> (5 anos do FG). <b>Não declarou → art. 173, I</b> (Súmula 555). <b>Declarou e não pagou → Súmula 436</b> (crédito já constituído: corre prescrição)."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 139 a 150</b> do CTN. A teoria do lançamento segue intacta; o IBS e a CBS terão suas próprias regras de apuração na lei complementar."]
];

var QS = [
  ["O crédito tributário decorre da obrigação principal e tem a mesma natureza desta.","C","CTN art. 139","Por isso o crédito pode ter natureza de tributo ou de multa."],
  ["O crédito tributário refere-se unicamente a tributos, não abrangendo multas.","E","CEBRASPE","A obrigação principal abrange tributo <b>ou penalidade pecuniária</b>."],
  ["As circunstâncias que modificam o crédito tributário ou excluem sua exigibilidade não afetam a obrigação tributária que lhe deu origem.","C","CTN art. 140","Anulado o crédito, a obrigação sobrevive."],
  ["Anulado o crédito tributário por vício na notificação do lançamento, a obrigação tributária correspondente é automaticamente declarada nula.","E","FGV","O art. 140 dispõe exatamente em sentido contrário."],
  ["Compete privativamente à autoridade administrativa constituir o crédito tributário pelo lançamento.","C","CTN art. 142","Atividade privativa, vinculada e obrigatória."],
  ["Compete privativamente à autoridade administrativa constituir a obrigação tributária pelo lançamento.","E","CEBRASPE","O lançamento constitui o <b>crédito</b>; a obrigação nasce com o fato gerador."],
  ["O lançamento é o procedimento tendente a verificar a ocorrência do fato gerador, determinar a matéria tributável, calcular o montante devido, identificar o sujeito passivo e propor a penalidade cabível.","C","CTN art. 142","Mnemônico VDCIP."],
  ["A atividade administrativa de lançamento é discricionária, cabendo à autoridade avaliar a conveniência de efetuá-lo.","E","FCC","É <b>vinculada e obrigatória</b>, sob pena de responsabilidade funcional."],
  ["Segundo a doutrina, o lançamento tem natureza jurídica mista, pois declara a obrigação tributária e constitui o crédito tributário.","C","FGV","Declara o que já existia e constitui o que passa a ser exigível."],
  ["Salvo disposição de lei em contrário, o valor tributário expresso em moeda estrangeira converte-se ao câmbio do dia do lançamento.","E","CTN art. 143","Ao câmbio do dia da <b>ocorrência do fato gerador</b>."],
  ["O lançamento reporta-se à data da ocorrência do fato gerador e rege-se pela lei então vigente, ainda que posteriormente modificada ou revogada.","C","CTN art. 144","O lançamento tem efeitos ex tunc."],
  ["Ocorrido o fato gerador quando a alíquota era de 30% e reduzida a alíquota para 10% antes do lançamento, aplica-se a alíquota de 10%, por ser mais benéfica.","E","FGV","Aplica-se a de <b>30%</b> — a retroatividade benéfica não alcança alíquotas."],
  ["Aplica-se ao lançamento a legislação posterior ao fato gerador que tenha instituído novos critérios de apuração ou processos de fiscalização.","C","CTN art. 144 § 1º","São os aspectos formais, que retroagem."],
  ["A legislação posterior que outorga ao crédito maiores garantias pode ser aplicada retroativamente, inclusive para atribuir responsabilidade tributária a terceiros.","E","CEBRASPE","A atribuição de responsabilidade a terceiros é a <b>exceção expressa</b> do § 1º."],
  ["Lei municipal de 2023 que amplia poderes de investigação aplica-se ao lançamento de ISSQN relativo ao ano-calendário de 2020.","C","FGV","Aspecto formal — retroage por força do art. 144, § 1º."],
  ["O disposto no art. 144 não se aplica aos impostos lançados por períodos certos de tempo, desde que a lei fixe expressamente a data em que o fato gerador se considera ocorrido.","C","CTN art. 144 § 2º","Casos do IPVA e do IPTU."],
  ["O lançamento regularmente notificado ao sujeito passivo pode ser alterado por livre iniciativa da autoridade administrativa.","E","CTN art. 145","Só por impugnação, recurso de ofício ou iniciativa de ofício nos casos do art. 149."],
  ["São hipóteses de alteração do lançamento regularmente notificado a impugnação do sujeito passivo, o recurso de ofício e a iniciativa de ofício da autoridade nos casos previstos em lei.","C","CTN art. 145","São as três, e apenas elas."],
  ["O recurso de ofício ocorre quando a decisão administrativa de primeira instância é desfavorável ao Fisco.","C","FCC","Sobe obrigatoriamente para reexame."],
  ["A modificação nos critérios jurídicos adotados pela autoridade no lançamento pode ser aplicada a fatos geradores anteriores à sua introdução, em relação ao mesmo sujeito passivo.","E","CTN art. 146","Só quanto a fatos geradores <b>posteriores</b> à introdução."],
  ["A mudança de critério jurídico adotado pelo Fisco não autoriza a revisão do lançamento.","C","STJ Súmula 227","O erro de direito tem efeitos ex nunc."],
  ["O erro de fato, diferentemente do erro de direito, autoriza a revisão de ofício do lançamento.","C","FGV","Fato não conhecido ou não provado é hipótese do art. 149."],
  ["São três as modalidades de lançamento: por declaração, de ofício e por homologação.","C","FCC","O arbitramento não é modalidade autônoma."],
  ["Cabe à lei complementar estabelecer normas gerais sobre lançamento.","C","CF art. 146 III b","Mas a modalidade de cada tributo é definida pela lei que o institui."],
  ["No lançamento por declaração, o sujeito passivo ou terceiro presta à autoridade informações sobre matéria de fato indispensáveis à sua efetivação.","C","CTN art. 147","Exemplos clássicos: ITBI e ITCMD."],
  ["A retificação da declaração por iniciativa do declarante, quando vise a reduzir ou excluir tributo, é admissível a qualquer tempo, independentemente de comprovação do erro.","E","CTN art. 147 § 1º","Exige comprovação do erro e deve ocorrer <b>antes</b> de notificado o lançamento."],
  ["Os erros contidos na declaração e apuráveis pelo seu exame serão retificados de ofício pela autoridade administrativa a que competir a revisão.","C","CTN art. 147 § 2º","Independe de provocação do contribuinte."],
  ["Notificado o lançamento, resta ao contribuinte que identificou erro em sua declaração apresentar impugnação.","C","FGV","A retificação por iniciativa própria já não é possível."],
  ["A autoridade lançadora pode arbitrar o valor ou preço de bens quando as declarações do sujeito passivo forem omissas ou não merecerem fé, ressalvada avaliação contraditória.","C","CTN art. 148","O arbitramento exige processo regular."],
  ["O arbitramento previsto no art. 148 do CTN constitui quarta modalidade de lançamento.","E","CEBRASPE","É <b>técnica de apuração da base de cálculo</b>, não modalidade autônoma."],
  ["Contribuinte que declara por dois milhões a compra de imóvel realizada por cinco milhões sujeita-se ao arbitramento do valor pela autoridade fiscal.","C","FGV","A declaração não merece fé — hipótese típica do art. 148."],
  ["No lançamento de ofício, todo o procedimento é realizado pela autoridade administrativa, sem participação do sujeito passivo.","C","FCC","Exemplos: IPTU, IPVA, taxas e contribuições."],
  ["O IPTU e o IPVA são exemplos de tributos lançados por homologação.","E","CEBRASPE","São lançados <b>de ofício</b>."],
  ["Tributo originalmente lançado por homologação não pode ser revisto de ofício pela autoridade administrativa.","E","CTN art. 149","Todo e qualquer lançamento está sujeito à revisão de ofício."],
  ["A revisão de ofício do lançamento só pode ser iniciada enquanto não extinto o direito da Fazenda Pública.","C","CTN art. 149 p.ú.","Limite temporal da revisão."],
  ["São hipóteses de lançamento de ofício a falsidade, o erro ou a omissão na declaração e a ocorrência de dolo, fraude ou simulação.","C","CTN art. 149","Assim como o fato não conhecido ou não provado."],
  ["No lançamento por homologação, o sujeito passivo antecipa o pagamento sem prévio exame da autoridade administrativa.","C","CTN art. 150","Exemplos: IPI, ICMS, ISS e IR."],
  ["O imposto de renda das pessoas físicas é lançado por declaração, dada a obrigatoriedade de entrega da declaração anual.","E","FGV","É lançado por <b>homologação</b>: o contribuinte antecipa o pagamento e o Fisco confere depois."],
  ["O pagamento antecipado no lançamento por homologação extingue o crédito sob condição resolutória da ulterior homologação.","C","CTN art. 150 § 1º","Extinção condicionada, não definitiva."],
  ["Os atos praticados pelo sujeito passivo antes da homologação influem sobre a obrigação tributária, extinguindo-a de imediato.","E","CTN art. 150 § 2º","Não influem — o Fisco pode cobrar a diferença de ofício."],
  ["Os atos anteriores à homologação são considerados na apuração do saldo porventura devido e na imposição ou graduação de penalidade.","C","CTN art. 150 § 3º","Complementa a regra do § 2º."],
  ["Se a lei não fixar prazo à homologação, será ele de cinco anos a contar da ocorrência do fato gerador.","C","CTN art. 150 § 4º","Expirado o prazo, homologação tácita e extinção definitiva."],
  ["Expirado o prazo de homologação sem pronunciamento da Fazenda, considera-se homologado o lançamento e definitivamente extinto o crédito, ainda que comprovada a ocorrência de dolo, fraude ou simulação.","E","CEBRASPE","A ressalva final do § 4º afasta a homologação tácita nesses casos."],
  ["Prazo decadencial é o prazo para o Fisco efetuar o lançamento; prazo prescricional é o prazo para acionar o sujeito passivo na justiça.","C","FCC","Distinção que estrutura toda a contagem de prazos."],
  ["A entrega de declaração pelo contribuinte reconhecendo débito fiscal constitui o crédito tributário, dispensada qualquer outra providência por parte do fisco.","C","STJ Súmula 436","Cessa a decadência e passa a correr a prescrição."],
  ["Quando não houver declaração do débito, o prazo decadencial conta-se exclusivamente na forma do art. 173, I, do CTN.","C","STJ Súmula 555","Primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado."],
  ["Tendo o sujeito passivo declarado e pago antecipadamente o tributo, o prazo decadencial para o lançamento de diferenças conta-se do primeiro dia do exercício seguinte.","E","FGV","Conta-se da <b>ocorrência do fato gerador</b> (art. 150, § 4º)."],
  ["Declarado o débito e não efetuado o pagamento, já não corre prazo decadencial, mas sim prescricional.","C","STJ Súmula 436","A declaração constituiu o crédito."],
  ["O prazo para o sujeito passivo pagar ou impugnar o lançamento notificado é, em regra, de trinta dias.","C","FCC","Após a definitividade começa a correr a prescrição."],
  ["O lançamento declara a obrigação tributária e constitui o crédito tributário, tornando-o exigível.","C","FGV","Daí a natureza jurídica mista."],
  ["No lançamento por declaração, o contribuinte antecipa o pagamento e aguarda a homologação da autoridade.","E","CEBRASPE","Isso é o lançamento por <b>homologação</b>; no por declaração, o contribuinte informa e aguarda o lançamento."],
  ["A modificação dos critérios jurídicos adotados pela autoridade possui efeitos ex nunc.","C","STJ","Aplica-se apenas aos fatos geradores futuros."],
  ["É a lei que determina a modalidade de lançamento aplicável a cada tributo.","C","FCC","As normas gerais, porém, são matéria de lei complementar."],
  ["O lançamento possui efeitos retroativos, mas a legislação tributária, em regra, não.","C","FGV","A exceção quanto aos aspectos formais está no art. 144, § 1º."]
];

var EX = {
S1:{t:"order", instr:"Ordene a cadeia que leva ao crédito tributário",
  items:["Hipótese de incidência","Fato gerador","Obrigação tributária","Lançamento","Crédito tributário"],
  why:"A obrigação nasce com o fato gerador; o crédito, com o lançamento."},

S2:{t:"mc", instr:"O crédito tributário decorre da obrigação principal e tem a mesma natureza desta. Qual a consequência?",
  options:["O crédito pode ter natureza de tributo ou de multa",
           "O crédito refere-se apenas a tributos",
           "O crédito abrange também as obrigações acessórias",
           "O crédito independe da ocorrência do fato gerador"],
  answer:0,
  why:"A obrigação principal tem por objeto tributo OU penalidade pecuniária."},

S3:{t:"mc", instr:"Crédito tributário anulado por vício na notificação do lançamento. E a obrigação tributária?",
  options:["Permanece íntegra — o vício do crédito não a afeta",
           "É automaticamente declarada nula",
           "Converte-se em obrigação acessória",
           "Extingue-se pela decadência"],
  answer:0,
  why:"Art. 140 — e por isso o Fisco pode lançar novamente."},

S4:{t:"wordbank", instr:"Monte as etapas do lançamento (mnemônico VDCIP)",
  target:["Verificar","a","ocorrência","do","fato","gerador","Determinar","a","matéria","tributável","Calcular","o","montante","Identificar","o","sujeito","passivo","Propor","a","penalidade"],
  extra:["inscrever em dívida ativa","ajuizar a execução","homologar o pagamento"],
  why:"Inscrição em dívida ativa e execução vêm depois — não integram o lançamento."},

S5:{t:"multi", instr:"Marque o que é correto sobre a atividade de lançamento",
  options:["Compete privativamente à autoridade administrativa",
           "É vinculada e obrigatória, sob pena de responsabilidade funcional",
           "Tem natureza jurídica mista: declara a obrigação e constitui o crédito",
           "Constitui a obrigação tributária"],
  answers:[0,1,2],
  why:"A obrigação nasce com o fato gerador — o lançamento apenas a declara."},

S6:{t:"gap", instr:"Complete o art. 144, caput",
  before:"O lançamento reporta-se à data da ocorrência do fato gerador e rege-se pela ",
  after:", ainda que posteriormente modificada ou revogada.",
  options:["lei então vigente","lei vigente ao tempo do lançamento","lei mais favorável ao contribuinte"], answer:0,
  why:"O lançamento tem efeitos ex tunc."},

S7:{t:"mc", instr:"FG em fevereiro com alíquota de 30%; em abril a lei reduz para 10%; lançamento em setembro. Qual alíquota se aplica?",
  options:["30% — a vigente na data do fato gerador","10% — a lei mais benéfica retroage",
           "10% — vale a lei da data do lançamento","Média entre as duas"],
  answer:0,
  why:"A retroatividade benéfica do art. 106 alcança multas, nunca alíquotas."},

S8:{t:"sort", instr:"A legislação POSTERIOR ao fato gerador se aplica ao lançamento?",
  buckets:["Aplica-se (aspecto FORMAL)","Não se aplica (aspecto MATERIAL)"],
  items:[["Novos critérios de apuração",0],["Novos processos de fiscalização",0],
         ["Ampliação dos poderes de investigação",0],
         ["Nova alíquota",1],["Nova base de cálculo",1]],
  why:"Formal retroage; material não. É a chave do art. 144, § 1º."},

S9:{t:"mc", instr:"Qual a exceção dentro do art. 144, § 1º?",
  options:["Maiores garantias não retroagem para atribuir responsabilidade a terceiros",
           "Novos critérios de apuração nunca retroagem",
           "A ampliação de poderes de investigação exige lei complementar",
           "Nenhuma — o parágrafo não tem exceções"],
  answer:0,
  why:"É a única ressalva do dispositivo, e cai com frequência."},

S10:{t:"gap", instr:"Complete o art. 144, § 2º",
  before:"O disposto neste artigo não se aplica aos impostos lançados por ",
  after:", desde que a respectiva lei fixe expressamente a data em que o fato gerador se considera ocorrido.",
  options:["períodos certos de tempo","lançamento de ofício","arbitramento"], answer:0,
  why:"Casos do IPVA e do IPTU."},

S11:{t:"multi", instr:"Marque as hipóteses de alteração do lançamento regularmente notificado (art. 145)",
  options:["Impugnação do sujeito passivo","Recurso de ofício",
           "Iniciativa de ofício da autoridade, nos casos do art. 149",
           "Livre iniciativa da autoridade administrativa"],
  answers:[0,1,2],
  why:"Fora dessas três, o lançamento notificado é estável."},

S12:{t:"sort", instr:"Erro de direito ou erro de fato?",
  buckets:["Erro de DIREITO — não revisa","Erro de FATO — autoriza revisão"],
  items:[["Mudança no modo de interpretar a norma",0],
         ["Modificação dos critérios jurídicos adotados",0],
         ["Fato não conhecido ou não provado",1],
         ["Omissão ou inexatidão constatada depois",1]],
  why:"Súmula 227 do STJ: mudança de critério jurídico não autoriza revisão."},

S13:{t:"mc", instr:"Segundo a Súmula 227 do STJ, a mudança de critério jurídico adotado pelo Fisco:",
  options:["Não autoriza a revisão do lançamento",
           "Autoriza a revisão de todos os lançamentos do sujeito passivo",
           "Autoriza a revisão apenas com decisão judicial",
           "Suspende a exigibilidade do crédito"],
  answer:0,
  why:"Só vale para fatos geradores posteriores — efeitos ex nunc."},

S14:{t:"sort", instr:"Qual a modalidade de lançamento de cada tributo?",
  buckets:["Por declaração","De ofício","Por homologação"],
  items:[["ITBI",0],["ITCMD",0],
         ["IPTU",1],["IPVA",1],["Taxas",1],
         ["ICMS",2],["ISS",2],["IPI",2],["IR",2]],
  why:"IPTU e IPVA são de ofício — trocá-los por homologação é pegadinha frequente."},

S15:{t:"match", instr:"Ligue cada modalidade ao seu funcionamento",
  pairs:[["Por declaração","O contribuinte informa e AGUARDA o lançamento"],
         ["De ofício","A autoridade faz tudo, sem participação do contribuinte"],
         ["Por homologação","O contribuinte ANTECIPA o pagamento e o Fisco confere depois"]],
  why:"É por isso que o IRPF é por homologação, e não por declaração."},

S16:{t:"mc", instr:"Por que o IRPF NÃO é lançamento por declaração?",
  options:["Porque o contribuinte antecipa o pagamento sem prévio exame da autoridade",
           "Porque não há declaração a ser entregue",
           "Porque o IR é lançado de ofício",
           "Porque a Receita calcula o imposto antes do pagamento"],
  answer:0,
  why:"No por declaração o contribuinte informa e espera; no por homologação, paga e é conferido."},

S17:{t:"multi", instr:"Marque o que é correto sobre a retificação da declaração (art. 147)",
  options:["Para reduzir tributo, exige comprovação do erro",
           "Para reduzir tributo, deve ocorrer antes de notificado o lançamento",
           "Erros apuráveis pelo exame da declaração são retificados de ofício",
           "Após a notificação, o declarante ainda pode retificá-la livremente"],
  answers:[0,1,2],
  why:"Depois da notificação, o caminho é a impugnação do art. 145, I."},

S18:{t:"mc", instr:"Compra de imóvel de R$ 5 milhões declarada por R$ 2 milhões. O que faz a autoridade?",
  options:["Arbitra o valor, mediante processo regular, ressalvada avaliação contraditória",
           "Homologa a declaração e cobra multa",
           "Anula o negócio jurídico",
           "Nada — prevalece o valor declarado"],
  answer:0,
  why:"Art. 148 — declaração que não merece fé autoriza o arbitramento."},

S19:{t:"mc", instr:"O arbitramento do art. 148 é:",
  options:["Técnica de apuração da base de cálculo",
           "Quarta modalidade de lançamento",
           "Modalidade de lançamento por homologação",
           "Hipótese de exclusão do crédito"],
  answer:0,
  why:"As modalidades continuam sendo três."},

S20:{t:"multi", instr:"Marque hipóteses de lançamento de ofício (art. 149)",
  options:["Quando a lei assim determinar","Declaração entregue fora do prazo",
           "Falsidade, erro, inexatidão ou omissão","Dolo, fraude ou simulação",
           "Mudança de critério jurídico adotado pelo Fisco"],
  answers:[0,1,2,3],
  why:"Mudança de critério jurídico é erro de DIREITO — não autoriza revisão (Súmula 227)."},

S21:{t:"multi", instr:"Marque o que é correto sobre o lançamento por homologação (art. 150)",
  options:["O pagamento antecipado extingue o crédito sob condição resolutória",
           "Atos anteriores à homologação não influem sobre a obrigação tributária",
           "Esses atos são considerados na apuração do saldo e na graduação da penalidade",
           "A homologação tácita ocorre mesmo havendo dolo, fraude ou simulação"],
  answers:[0,1,2],
  why:"Dolo, fraude e simulação são a ressalva expressa do § 4º."},

S22:{t:"match", instr:"Ligue cada prazo à sua função",
  pairs:[["Decadência","Prazo para o Fisco efetuar o lançamento"],
         ["Prescrição","Prazo para o Fisco ajuizar a execução fiscal"]],
  why:"Ambos de cinco anos, mas com marcos iniciais diferentes."},

S23:{t:"sort", instr:"Como conta a decadência em cada situação?",
  buckets:["Art. 150, § 4º — do FATO GERADOR","Art. 173, I — do exercício seguinte","Já corre PRESCRIÇÃO"],
  items:[["Sujeito passivo declarou e pagou",0],
         ["Sujeito passivo não declarou (Súmula 555)",1],
         ["Sujeito passivo declarou e não pagou (Súmula 436)",2]],
  why:"Três situações, três regras — é o quadro mais cobrado do módulo."},

S24:{t:"order", instr:"Ordene a linha do tempo dos prazos",
  items:["Ocorrência do fato gerador","Prazo decadencial de 5 anos",
         "Notificação do lançamento","Prazo para pagar ou impugnar (regra: 30 dias)",
         "Definitividade do lançamento","Prazo prescricional de 5 anos","Execução fiscal"],
  why:"A decadência morre no lançamento; a prescrição nasce na definitividade."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Crédito tributário e o lançamento",
      '<div class="box"><span class="bl">A cadeia completa</span>'+
      '<p><b>Hipótese de incidência</b> (previsão legal) → <b>fato gerador</b> (acontece no mundo real) → <b>obrigação tributária</b> (nasce aqui) → <b>LANÇAMENTO</b> → <b>crédito tributário</b> (torna-se exigível).</p></div>'+
      '<div class="box"><span class="bl">Arts. 139 e 140</span>'+
      '<p><b>139:</b> o crédito <b>decorre da obrigação principal</b> e tem a <b>mesma natureza</b> dela — logo pode ser <b>tributo OU MULTA</b>.</p>'+
      '<p><b>140:</b> as circunstâncias que modificam o crédito, seus efeitos, garantias e privilégios, ou que <b>excluem sua exigibilidade</b>, <b>NÃO afetam a obrigação</b> que lhe deu origem.</p>'+
      '<p class="mn"><em>Crédito anulado por vício de notificação? A <b>obrigação sobrevive</b> — e o Fisco pode lançar de novo.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 142 — o lançamento</span>'+
      '<p>Compete <b>PRIVATIVAMENTE à autoridade administrativa</b> constituir o crédito pelo lançamento:</p>'+
      '<p><b>V</b>erificar a ocorrência do fato gerador · <b>D</b>eterminar a matéria tributável · <b>C</b>alcular o montante devido · <b>I</b>dentificar o sujeito passivo · <b>P</b>ropor a penalidade cabível → <b>VDCIP</b>.</p>'+
      '<p>A atividade é <b>VINCULADA e OBRIGATÓRIA</b>, sob pena de <b>responsabilidade funcional</b>.</p>'+
      '<p><b>Natureza MISTA:</b> <b>DECLARA</b> a obrigação (que já existia) e <b>CONSTITUI</b> o crédito.</p>'+
      '<p class="mn"><em><b>Pegadinha:</b> “constituir a <b>obrigação</b> tributária pelo lançamento” está <b>errado</b> — constitui o <b>CRÉDITO</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 143 — moeda estrangeira</span>'+
      '<p>Converte-se ao câmbio do dia da <b>OCORRÊNCIA DO FATO GERADOR</b> — não do lançamento.</p></div>'),
    sl("Legislação aplicável e alteração do lançamento",
      '<div class="box"><span class="bl">Art. 144 — a regra ex tunc</span>'+
      '<p>O lançamento <b>reporta-se à data do fato gerador</b> e rege-se pela <b>lei então vigente</b>, ainda que depois modificada ou revogada.</p>'+
      '<p><em>FG em fevereiro com alíquota de 30%; abril reduz para 10%; lançamento em setembro → aplica-se <b>30%</b>.</em></p>'+
      '<p class="mn"><em>O <b>lançamento</b> retroage; a <b>lei</b>, em regra, não.</em></p></div>'+
      '<div class="box trap"><span class="bl">§ 1º — o que retroage</span>'+
      '<p>Aplica-se ao lançamento a legislação <b>posterior</b> que tenha: <b>instituído novos critérios de apuração ou processos de fiscalização</b> · <b>ampliado os poderes de investigação</b> · <b>outorgado ao crédito maiores garantias ou privilégios</b>.</p>'+
      '<p><b>EXCEÇÃO:</b> as maiores garantias <b>não</b> retroagem para <b>atribuir responsabilidade tributária a TERCEIROS</b>.</p>'+
      '<p class="mn"><em>Resumo: <b>FORMAL retroage · MATERIAL não</b>. Alíquota e base de cálculo ficam sempre no tempo do fato gerador.</em></p></div>'+
      '<div class="box"><span class="bl">§ 2º — períodos certos de tempo</span>'+
      '<p>O artigo <b>não se aplica</b> aos impostos lançados por <b>períodos certos de tempo</b>, desde que a lei <b>fixe a data</b> do fato gerador — <b>IPVA e IPTU</b>. Se a lei diz que o FG do IPVA é 1º de janeiro, aplica-se a legislação em vigor <b>nessa data</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 145 — quando se altera o lançamento notificado</span>'+
      '<p><b>I)</b> <b>impugnação</b> do sujeito passivo · <b>II)</b> <b>recurso de ofício</b> (decisão de 1ª instância desfavorável ao Fisco) · <b>III)</b> <b>iniciativa de ofício</b>, nos casos do art. 149.</p>'+
      '<p class="mn"><em>Fora dessas três, o lançamento notificado é <b>estável</b> — não cabe livre iniciativa da autoridade.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 146 e a Súmula 227 — erro de direito</span>'+
      '<p>Mudar os <b>critérios jurídicos</b> (outro modo de entender a lei) só vale, para o <b>mesmo sujeito passivo</b>, quanto a <b>fatos geradores POSTERIORES</b> à mudança.</p>'+
      '<p><b>STJ, Súmula 227:</b> “A mudança de critério jurídico adotado pelo Fisco <b>não autoriza a revisão do lançamento</b>.”</p>'+
      '<p><b>Erro de DIREITO</b> (interpretação) → <b>ex nunc</b>, não revisa.<br>'+
      '<b>Erro de FATO</b> (fato não conhecido ou não provado) → <b>autoriza</b> a revisão de ofício.</p></div>')
  ],
  V2:[
    sl("As três modalidades de lançamento",
      '<div class="box"><span class="bl">Quem define a modalidade</span>'+
      '<p>A <b>lei</b> de cada tributo. Mas as <b>normas gerais sobre lançamento</b> são matéria de <b>LEI COMPLEMENTAR</b> (art. 146, III, b, da CF).</p></div>'+
      '<div class="box"><span class="bl">Por DECLARAÇÃO — art. 147 (misto)</span>'+
      '<p>Efetuado <b>com base na declaração do sujeito passivo ou de terceiro</b>, que presta informações sobre <b>matéria de FATO</b>. O contribuinte <b>informa e AGUARDA</b> o lançamento. <b>Ex.: ITBI, ITCMD.</b></p>'+
      '<p><b>§ 1º —</b> retificação por iniciativa do declarante que <b>reduza ou exclua tributo</b>: só com <b>comprovação do erro</b> e <b>antes de notificado o lançamento</b>. Depois disso, resta a <b>impugnação</b>.</p>'+
      '<p><b>§ 2º —</b> erros <b>apuráveis pelo exame</b> da declaração são retificados <b>DE OFÍCIO</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Art. 148 — arbitramento</span>'+
      '<p>Quando o cálculo tome por base o <b>valor de bens, direitos, serviços ou atos</b>, a autoridade, <b>mediante processo regular</b>, <b>ARBITRARÁ</b> esse valor sempre que declarações ou documentos sejam <b>omissos ou não mereçam fé</b> — <b>ressalvada avaliação contraditória</b>, administrativa ou judicial.</p>'+
      '<p class="mn"><em>Imóvel de R$ 5 milhões declarado por R$ 2 milhões: o Fisco arbitra. E atenção: arbitramento é <b>técnica de apuração da base</b>, <b>não</b> uma quarta modalidade.</em></p></div>'+
      '<div class="box"><span class="bl">DE OFÍCIO — art. 149 (direto)</span>'+
      '<p>Todo o <b>VDCIP</b> é feito pela autoridade, <b>sem participação do sujeito passivo</b>. <b>Ex.: IPTU, IPVA, taxas e contribuições.</b></p>'+
      '<p><b>Hipóteses:</b> quando a <b>lei determinar</b> · declaração <b>fora do prazo</b> · <b>não atendimento</b> a pedido de esclarecimento · <b>falsidade, erro, inexatidão ou omissão</b> · omissão ou inexatidão <b>no lançamento por homologação</b> · ato que resulte em <b>penalidade pecuniária</b> · <b>dolo, fraude ou simulação</b> · <b>fato não conhecido ou não provado</b> · <b>fraude ou falta funcional</b> da autoridade lançadora.</p>'+
      '<p class="mn"><em><b>Todo</b> lançamento pode ser revisto de ofício — inclusive o por homologação. Mas a revisão só se <b>INICIA enquanto não extinto o direito da Fazenda</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">POR HOMOLOGAÇÃO — art. 150</span>'+
      '<p>O sujeito passivo <b>ANTECIPA o pagamento sem prévio exame</b>; a autoridade, tomando conhecimento, <b>homologa</b>. <b>Ex.: IPI, ICMS, ISS, IR.</b></p>'+
      '<p><b>§ 1º —</b> o pagamento antecipado <b>extingue o crédito sob CONDIÇÃO RESOLUTÓRIA</b> da homologação.<br>'+
      '<b>§ 2º —</b> atos anteriores à homologação <b>não influem</b> sobre a obrigação: não validados, o Fisco cobra a diferença de ofício.<br>'+
      '<b>§ 3º —</b> mas esses atos <b>são considerados</b> na apuração do saldo e na graduação da penalidade.<br>'+
      '<b>§ 4º —</b> prazo de <b>5 anos do FATO GERADOR</b>; expirado sem pronunciamento: <b>homologação tácita</b> e extinção definitiva, <b>salvo dolo, fraude ou simulação</b>.</p>'+
      '<p class="mn"><em><b>O IRPF é por HOMOLOGAÇÃO</b>, não por declaração: o contribuinte paga antes e a Receita confere depois.</em></p></div>'),
    sl("Decadência e prescrição",
      '<div class="box"><span class="bl">Os dois prazos</span>'+
      '<p><b>DECADÊNCIA:</b> prazo para o Fisco <b>efetuar o LANÇAMENTO</b>.<br>'+
      '<b>PRESCRIÇÃO:</b> prazo para o Fisco <b>ACIONAR o sujeito passivo na justiça</b> (execução fiscal).</p>'+
      '<p>Ambos de <b>5 anos</b> — o que muda é o <b>marco inicial</b>.</p></div>'+
      '<div class="box"><span class="bl">A linha do tempo</span>'+
      '<p><b>Fato gerador</b> → <b>5 anos de DECADÊNCIA</b> → <b>notificação do lançamento</b> → prazo para pagar ou impugnar (regra: <b>30 dias</b>) → <b>definitividade do lançamento</b> → <b>5 anos de PRESCRIÇÃO</b> → <b>execução fiscal</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O quadro que decide as questões</span>'+
      '<p><b>DECLAROU E PAGOU</b> → art. 150, § 4º: <b>5 anos do FATO GERADOR</b>, para o Fisco lançar diferenças.</p>'+
      '<p><b>NÃO DECLAROU</b> → <b>Súmula 555 do STJ</b> e art. 173, I: <b>5 anos do PRIMEIRO DIA DO EXERCÍCIO SEGUINTE</b> àquele em que o lançamento poderia ter sido efetuado.</p>'+
      '<p><b>DECLAROU E NÃO PAGOU</b> → <b>Súmula 436 do STJ</b>: a declaração <b>já constituiu o crédito</b>; <b>cessa a decadência</b> e <b>começa a PRESCRIÇÃO</b>.</p></div>'+
      '<div class="box tip"><span class="bl">As duas súmulas na literalidade</span>'+
      '<p><b>Súmula 436:</b> “A <b>entrega de declaração</b> pelo contribuinte reconhecendo débito fiscal <b>constitui o crédito tributário</b>, dispensada qualquer outra providência por parte do fisco.”</p>'+
      '<p><b>Súmula 555:</b> “Quando <b>não houver declaração</b> do débito, o prazo decadencial quinquenal para o Fisco constituir o crédito conta-se <b>exclusivamente na forma do art. 173, I</b>, do CTN, nos casos em que a legislação atribui ao sujeito passivo o dever de antecipar o pagamento sem prévio exame da autoridade.”</p></div>'+
      '<div class="box"><span class="bl">Reforma tributária</span>'+
      '<p>A <b>EC 132/2023 não alterou os arts. 139 a 150</b> do CTN — a teoria do lançamento segue válida. IBS e CBS terão regras próprias de apuração em lei complementar.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 08","https://www.tecconcursos.com.br/s/Q2giQE","Q2giQE"],
  ["Caderno FCC — Direito Tributário 08","https://www.tecconcursos.com.br/s/Q2giQi","Q2giQi"],
  ["Caderno FGV — Direito Tributário 08","https://www.tecconcursos.com.br/s/Q2giQu","Q2giQu"],
  ["Caderno VUNESP — Direito Tributário 08","https://www.tecconcursos.com.br/s/Q2giRC","Q2giRC"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Dois blocos concentram quase todas as questões daqui: as MODALIDADES de lançamento (e a confusão proposital entre declaração e homologação, sobretudo com o IRPF) e o quadro dos PRAZOS — declarou e pagou, não declarou, declarou e não pagou. Decore as súmulas 227, 436 e 555 do STJ na literalidade; elas resolvem questão sozinhas. Guarde ainda a regra do art. 144: o lançamento retroage, a lei não, salvo nos aspectos formais. A EC 132/2023 não alterou os arts. 139 a 150, então o conteúdo está atualizado.";

var UNITS = [
  {n:1, title:"Crédito tributário e o ato de lançar", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Arts. 139 a 146 — crédito, lançamento e legislação", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · crédito e obrigação",        xp:25, data:["S1","S2","S3","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · o art. 142 e o VDCIP",       xp:25, data:["S4","S5","T4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"flash",  title:"Flashcards · crédito e lançamento",     xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Legislação aplicável ao lançamento", cvar:"u2", lessons:[
    {id:"K5", type:"drill",  title:"Praticar · efeitos ex tunc e o § 1º",   xp:25, data:["S6","S7","S8","S9","T10","T11","T12","T13","T14"]},
    {id:"K6", type:"drill",  title:"Praticar · períodos certos de tempo",   xp:25, data:["S10","T15"]},
    {id:"K7", type:"flash",  title:"Flashcards · legislação aplicável",     xp:15, data:[14,15,16,17,18,19,20,21,22,23,24]}
  ]},
  {n:3, title:"Alteração do lançamento e erro de direito", cvar:"u3", lessons:[
    {id:"K8", type:"drill",  title:"Praticar · art. 145 e recurso de ofício", xp:25, data:["S11","T16","T17","T18"]},
    {id:"K9", type:"drill",  title:"Praticar · erro de direito × erro de fato", xp:25, data:["S12","S13","T19","T20","T21"]},
    {id:"K10",type:"flash",  title:"Flashcards · alteração do lançamento",  xp:15, data:[25,26,27,28,29,30,31]}
  ]},
  {n:4, title:"As três modalidades", cvar:"u4", lessons:[
    {id:"K11",type:"teoria", title:"Declaração, ofício, homologação e prazos", xp:10, data:"V2"},
    {id:"K12",type:"drill",  title:"Praticar · qual modalidade de cada tributo", xp:25, data:["S14","S15","S16","T22","T23","T24"]},
    {id:"K13",type:"drill",  title:"Praticar · declaração e arbitramento",  xp:25, data:["S17","S18","S19","T25","T26","T27","T28","T29","T30"]},
    {id:"K14",type:"drill",  title:"Praticar · lançamento de ofício",       xp:25, data:["S20","T31","T32","T33","T34","T35"]},
    {id:"K15",type:"drill",  title:"Praticar · lançamento por homologação", xp:25, data:["S21","T36","T37","T38","T39","T40","T41","T42"]},
    {id:"K16",type:"flash",  title:"Flashcards · modalidades",             xp:15, data:[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]}
  ]},
  {n:5, title:"Decadência e prescrição", cvar:"u5", lessons:[
    {id:"K17",type:"drill",  title:"Praticar · os dois prazos e a linha do tempo", xp:25, data:["S22","S24","T43","T48","T53"]},
    {id:"K18",type:"drill",  title:"Praticar · as súmulas 436 e 555",       xp:25, data:["S23","T44","T45","T46","T47","T49","T50","T51","T52"]},
    {id:"K19",type:"flash",  title:"Flashcards · decadência e prescrição",  xp:15, data:[51,52,53,54,55,56,57,58,59]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K20", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K21", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>O art. 139 diz que o crédito tributário <b>decorre da obrigação principal e tem a mesma natureza desta</b>.</p><p>O Resumo explica o alcance disso: como a obrigação principal tem por objeto o pagamento de <b>tributo ou penalidade pecuniária</b>, o crédito tributário também poderá ter natureza de tributo <i>ou</i> de multa.</p><p class='fb-fonte'>Resumo 08 · <i>Código Tributário Nacional — art. 139</i></p>",
1:"<p>Errado. O comentário do Resumo ao art. 139 é direto: <b>o crédito tributário não se refere unicamente a tributo, mas também às dívidas decorrentes de multas tributárias</b>.</p><p>A razão é a natureza da obrigação principal, cujo objeto é o pagamento de tributo <i>ou</i> penalidade pecuniária. O crédito herda essa natureza.</p><p class='fb-fonte'>Resumo 08 · <i>Crédito Tributário — art. 139</i></p>",
2:"<p>Literalidade do art. 140: as circunstâncias que <b>modificam</b> o crédito tributário, sua extensão ou seus efeitos, as <b>garantias</b> ou os <b>privilégios</b> a ele atribuídos, ou que <b>excluem sua exigibilidade</b>, não afetam a obrigação tributária que lhe deu origem.</p><p>A lógica: o crédito é a formalização; a obrigação nasceu antes dele, com o fato gerador, e sobrevive aos vícios da formalização.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 140</i></p>",
3:"<p>Errado — e este é exatamente o exemplo do Resumo.</p><p>Anulado o crédito por vício da notificação de lançamento, <b>a obrigação tributária não é automaticamente declarada nula</b>, porque as circunstâncias que modificam o crédito tributário não afetam a obrigação que lhe deu origem (art. 140).</p><p>Na prática, o Fisco pode lançar de novo, sanando o vício, desde que ainda não extinto o seu direito.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 140, exemplo</i></p>",
4:"<p>Art. 142, caput: compete <b>privativamente à autoridade administrativa</b> constituir o crédito tributário pelo lançamento.</p><p>Guarde a palavra <b>privativamente</b> — ela é a chave de muitas assertivas, e o objeto correto é o <b>crédito tributário</b> (não a obrigação).</p><p class='fb-fonte'>Resumo 08 · <i>Lançamento — art. 142</i></p>",
5:"<p>Errado. O Resumo destaca esta troca como <b>PEGADINHA</b> clássica.</p><p>O correto é <b>constituir o crédito tributário</b> pelo lançamento. A obrigação tributária não se constitui por lançamento: ela <b>surge com a ocorrência do fato gerador</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Lançamento — PEGADINHA do art. 142</i></p>",
6:"<p>Certo — é a definição do art. 142, que o Resumo organiza no mnemônico <b>VDCIP</b>:</p><p><b>V</b>erificar a ocorrência do fato gerador · <b>D</b>eterminar a matéria tributável · <b>C</b>alcular o montante do tributo devido · <b>I</b>dentificar o sujeito passivo · <b>P</b>ropor a aplicação da penalidade cabível (se for o caso).</p><p class='fb-fonte'>Resumo 08 · <i>Mnemônico VDCIP — art. 142</i></p>",
7:"<p>Errado. O parágrafo único do art. 142 é categórico: a atividade administrativa de lançamento é <b>vinculada e obrigatória, sob pena de responsabilidade funcional</b>.</p><p>Não há juízo de conveniência e oportunidade: ocorrido o fato gerador, a autoridade deve lançar.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 142, parágrafo único</i></p>",
8:"<p>Certo. O Resumo traz isso no quadro ATENÇÃO: o lançamento <b>declara</b> a obrigação tributária (verifica a ocorrência do fato gerador) e <b>constitui</b> (formaliza) o crédito tributário para torná-lo exigível.</p><p>Por declarar e constituir ao mesmo tempo, a doutrina diz que o lançamento tem <b>natureza jurídica mista</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Natureza jurídica do lançamento</i></p>",
9:"<p>Errado no momento da conversão. O art. 143 manda converter ao câmbio do dia da <b>ocorrência do fato gerador</b> da obrigação — não do lançamento.</p><p>É coerente com o art. 144: o lançamento se reporta à data do fato gerador.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 143</i></p>",
10:"<p>Literalidade do art. 144. O Resumo resume o efeito: o lançamento tem <b>efeitos retroativos (ex tunc)</b>, reportando-se à data do fato gerador e regendo-se pela lei então vigente, ainda que depois modificada ou revogada.</p><p class='fb-fonte'>Resumo 08 · <i>Legislação aplicável — art. 144</i></p>",
11:"<p>Errado — é o exemplo numérico do Resumo, com estes mesmos percentuais.</p><p>Fato gerador em fevereiro com alíquota de 30%; lei de abril reduz para 10%; lançamento em setembro. Aplica-se <b>30%</b>, a alíquota vigente na data do fato gerador.</p><p>A observação do material fecha a questão: o lançamento retroage, <b>a lei tributária não</b> — a nova lei, ainda que mais benéfica, não alcança fatos geradores anteriores à sua vigência.</p><p class='fb-fonte'>Resumo 08 · <i>Art. 144 — exemplo da alíquota</i></p>",
12:"<p>Certo: é a exceção do art. 144, § 1º, que alcança os <b>aspectos formais</b> da lei (procedimentos).</p><p>Aplica-se ao lançamento a legislação posterior ao fato gerador que tenha: instituído <b>novos critérios de apuração ou processos de fiscalização</b>; <b>ampliado os poderes de investigação</b> das autoridades; ou <b>outorgado ao crédito maiores garantias ou privilégios</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 144, § 1º</i></p>",
13:"<p>Errado pela ressalva final do § 1º. As maiores garantias e privilégios retroagem, <b>exceto para o efeito de atribuir responsabilidade tributária a terceiros</b>.</p><p>O esquema do Resumo registra a exceção assim: \"só não pode atribuir responsabilidade tributária a terceiros\".</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 144, § 1º, parte final</i></p>",
14:"<p>Certo — é o exemplo do Resumo com o ISSQN.</p><p>Município publica lei em maio/2023 instituindo novos critérios de apuração e ampliando poderes de investigação; em outubro/2023 o fisco autua fatos do ano-calendário <b>2020</b>. A nova legislação <b>é aplicável</b>, pois trata de aspectos formais (art. 144, § 1º).</p><p class='fb-fonte'>Resumo 08 · <i>Art. 144, § 1º — exemplo do ISSQN</i></p>",
15:"<p>Certo, literal do § 2º. Os impostos lançados <b>por períodos certos de tempo</b> (o Resumo cita <b>IPVA e IPTU</b>) escapam da regra do caput, desde que a lei fixe expressamente a data em que o fato gerador se considera ocorrido.</p><p>Ex.: se a lei diz que o fato gerador do IPVA ocorre em 1º de janeiro, aplica-se a legislação vigente nessa data. O material adverte que, na essência, não é bem uma exceção — mas deve ser memorizada para prova.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 144, § 2º</i></p>",
16:"<p>Errado. O art. 145 lista taxativamente as três hipóteses, e o Resumo frisa: o lançamento notificado <b>não pode ser alterado por livre iniciativa</b> da autoridade.</p><p>A alteração de ofício só cabe <b>nos casos previstos no art. 149</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 145</i></p>",
17:"<p>Certo — as três hipóteses do art. 145:</p><p>I — <b>impugnação</b> (contestação) do sujeito passivo;<br>II — <b>recurso de ofício</b>;<br>III — <b>iniciativa de ofício</b> da autoridade, nos casos do art. 149.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 145, I a III</i></p>",
18:"<p>Certo. O Resumo define: o recurso de ofício ocorre quando uma <b>decisão administrativa de 1ª instância foi desfavorável ao Fisco</b>.</p><p>É o chamado \"reexame necessário\" administrativo — sobe para a instância superior mesmo sem recurso da Fazenda.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 145, II</i></p>",
19:"<p>Errado. O art. 146 diz o oposto: a modificação dos critérios jurídicos só pode ser efetivada, quanto ao <b>mesmo sujeito passivo</b>, em relação a fato gerador ocorrido <b>posteriormente</b> à sua introdução.</p><p>É o <b>erro de direito</b> — outro modo de entender a lei tributária — que <b>não</b> autoriza rever o passado.</p><p class='fb-fonte'>Resumo 08 · <i>Erro de direito — art. 146</i></p>",
20:"<p>Certo, é a <b>Súmula 227 do STJ</b>, transcrita no Resumo: \"A mudança de critério jurídico adotado pelo Fisco não autoriza a revisão do lançamento.\"</p><p>Conclusão do material: não se admite revisão de lançamento motivada por <b>erro de direito</b>, pois a mudança de critérios jurídicos tem efeitos <b>ex nunc</b>.</p><p class='fb-fonte'>Resumo 08 · <i>STJ Súmula 227</i></p>",
21:"<p>Certo. O erro de <b>direito</b> (mudança de critério jurídico) não autoriza revisão — art. 146 e Súmula 227 do STJ, ambos no Resumo.</p><p>Já as situações de <b>erro, falsidade, inexatidão ou omissão</b> de fato estão entre as hipóteses de lançamento efetuado e revisto <b>de ofício</b> no esquema do art. 149.</p><p class='fb-fonte'>Resumo 08 · <i>Arts. 146 e 149</i></p>",
22:"<p>Certo. O Resumo apresenta as <b>três</b> modalidades com seus artigos:</p><p><b>Por declaração</b> (art. 147) — ex.: ITBI, ITCMD<br><b>De ofício</b> (art. 149) — ex.: IPTU, IPVA, taxas, contribuições<br><b>Por homologação</b> (art. 150) — ex.: IPI, ICMS, ISS, IR</p><p class='fb-fonte'>Resumo 08 · <i>Modalidades de lançamento</i></p>",
23:"<p>Certo. O Resumo transcreve o art. 146, III, <i>b</i>, da CF/88: cabe à <b>lei complementar</b> estabelecer normas gerais sobre <b>obrigação, lançamento, crédito, prescrição e decadência</b> tributários.</p><p>Cuidado com a distinção do material: é a <b>lei</b> (ordinária de cada ente) que determina a modalidade de lançamento de cada tributo; as <b>normas gerais</b> é que são reservadas à lei complementar.</p><p class='fb-fonte'>Resumo 08 · <i>CF/88 — art. 146, III, b</i></p>",
24:"<p>Literal do art. 147: o lançamento é efetuado com base na declaração do <b>sujeito passivo ou de terceiro</b>, que presta à autoridade informações sobre <b>matéria de fato</b> indispensáveis à sua efetivação.</p><p>O Resumo completa o fluxo: com base nessas informações, a autoridade lança e notifica para pagamento. Exemplos: <b>ITBI, ITCMD</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Lançamento por declaração — art. 147</i></p>",
25:"<p>Errado nos dois requisitos. O § 1º exige, cumulativamente, para a retificação que vise <b>reduzir ou excluir tributo</b>:</p><p>1) <b>comprovação do erro</b> em que se funde; e<br>2) que seja feita <b>antes de notificado o lançamento</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 147, § 1º</i></p>",
26:"<p>Certo, literal do § 2º. Se a autoridade, ao analisar a declaração, detecta erros apuráveis pelo próprio exame dela, a <b>retificação ocorre de ofício</b>.</p><p>Repare no contraste com o § 1º: a retificação pelo declarante é restrita; a de ofício, pelo exame da declaração, não.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 147, § 2º</i></p>",
27:"<p>Certo. É a saída indicada pelo Resumo no comentário ao § 1º: se a declaração contém erros e o contribuinte já não pode retificá-la por ter sido notificado, resta-lhe apresentar <b>impugnação</b>, na forma do art. 145, I.</p><p class='fb-fonte'>Resumo 08 · <i>Art. 147, § 1º c/c art. 145, I</i></p>",
28:"<p>Certo, art. 148. Quando o cálculo do tributo toma por base o <b>valor ou preço</b> de bens, direitos, serviços ou atos jurídicos, a autoridade, <b>mediante processo regular</b>, arbitrará esse valor sempre que as declarações forem <b>omissas ou não merecerem fé</b>.</p><p>A ressalva final é cobrada: cabe <b>avaliação contraditória, administrativa ou judicial</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Arbitramento — art. 148</i></p>",
29:"<p>Errado. O Resumo lista apenas <b>três</b> modalidades de lançamento: por declaração, de ofício e por homologação.</p><p>O arbitramento do art. 148 é <b>técnica de apuração da base de cálculo</b> usada dentro de um lançamento (em regra, de ofício) — não uma quarta modalidade.</p><p class='fb-fonte'>Resumo 08 · <i>Modalidades de lançamento e art. 148</i></p>",
30:"<p>Certo — é o exemplo da Bruna, no Resumo, com estes mesmos valores.</p><p>Imóvel adquirido por R$ 5.000.000 e declarado por R$ 2.000.000 para reduzir o ITBI. Detectando que a declaração <b>não merece fé</b>, o fisco arbitrará o valor mais próximo da realidade, na forma do art. 148.</p><p class='fb-fonte'>Resumo 08 · <i>Art. 148 — exemplo do ITBI</i></p>",
31:"<p>Certo. No quadro comparativo do Resumo, o lançamento <b>de ofício (direto)</b> é aquele em que <b>todo o procedimento que compõe o lançamento (VDCIP)</b> é realizado pela autoridade administrativa, <b>sem a participação do sujeito passivo</b>.</p><p>Exemplos do material: <b>IPTU, IPVA, taxas e contribuições</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Lançamento de ofício — art. 149</i></p>",
32:"<p>Errado. No quadro do Resumo, <b>IPTU e IPVA</b> são exemplos de lançamento <b>de ofício</b>.</p><p>Os exemplos de lançamento por homologação são <b>IPI, ICMS, ISS e IR</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Modalidades — exemplos</i></p>",
33:"<p>Errado. O quadro ATENÇÃO do Resumo diz o contrário: <b>todo e qualquer lançamento está sujeito à revisão de ofício</b>.</p><p>Ainda que o tributo tenha sido originalmente lançado por homologação, é possível que seja revisto de ofício pela autoridade — inclusive por <b>omissão ou inexatidão</b> no lançamento por homologação, hipótese que consta do esquema do art. 149.</p><p class='fb-fonte'>Resumo 08 · <i>Revisão de ofício — art. 149</i></p>",
34:"<p>Certo, art. 149, parágrafo único: a revisão de ofício só pode ser iniciada <b>enquanto não extinto o direito da Fazenda Pública</b>.</p><p>Ou seja, a possibilidade de rever é ampla, mas tem prazo — o da <b>decadência</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 149, parágrafo único</i></p>",
35:"<p>Certo. O esquema do Resumo para o art. 149 reúne as hipóteses de lançamento efetuado e revisto de ofício: quando a lei determinar; declaração entregue fora do prazo; recusa a prestar esclarecimento; <b>falsidade, erro, inexatidão ou omissão</b>; omissão ou inexatidão no lançamento por homologação; ação ou omissão que resulte em penalidade pecuniária; <b>dolo, fraude ou simulação</b>; fato não conhecido ou não provado; fraude ou falta funcional da autoridade lançadora.</p><p class='fb-fonte'>Resumo 08 · <i>Esquema do art. 149</i></p>",
36:"<p>Certo, art. 150. No lançamento por homologação o sujeito passivo <b>antecipa o pagamento sem prévio exame</b> da autoridade, e esta, ao conferir a exatidão dos valores recolhidos, <b>homologa</b>.</p><p>Exemplos do Resumo: <b>IPI, ICMS, ISS, IR</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Lançamento por homologação — art. 150</i></p>",
37:"<p>Errado — e o Resumo abre um quadro ATENÇÃO exatamente para este equívoco.</p><p>A diferença: no lançamento <b>por declaração</b>, o contribuinte presta as informações e <b>aguarda</b> o lançamento da autoridade (ex.: ITBI). No <b>IRPF</b>, o contribuinte prepara a declaração, <b>antecipa o pagamento</b> sem prévio exame, e a autoridade apenas confere depois, <b>homologando</b>.</p><p>Logo, IRPF é lançado <b>por homologação</b>.</p><p class='fb-fonte'>Resumo 08 · <i>ATENÇÃO — IRPF não é por declaração</i></p>",
38:"<p>Certo, § 1º do art. 150: o pagamento antecipado <b>extingue o crédito sob condição resolutória</b> da ulterior homologação ao lançamento.</p><p>\"Condição resolutória\" significa: extingue desde já, mas o efeito se desfaz se a homologação não vier a confirmar o que foi feito.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 150, § 1º</i></p>",
39:"<p>Errado. O § 2º diz que <b>não influem</b> sobre a obrigação tributária quaisquer atos anteriores à homologação praticados pelo sujeito passivo ou por terceiro visando à extinção do crédito.</p><p>O comentário do Resumo: se esses atos não forem validados, o fisco pode cobrar a diferença de ofício (art. 149, V) — a obrigação que nasceu com o fato gerador <b>continua existindo</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 150, § 2º</i></p>",
40:"<p>Certo, § 3º. Embora não influam sobre a obrigação (§ 2º), esses atos <b>serão considerados</b> na apuração do saldo porventura devido e, sendo o caso, na <b>imposição de penalidade ou sua graduação</b>.</p><p>Isto é: o que foi pago não é ignorado — abate-se do saldo e pesa na dosimetria da multa.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 150, § 3º</i></p>",
41:"<p>Certo, § 4º: não fixando a lei prazo à homologação, ele é de <b>cinco anos a contar da ocorrência do fato gerador</b>.</p><p>O Resumo detalha: havendo pagamento antecipado, esse é o prazo <b>decadencial</b> para o fisco lançar eventuais diferenças.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 150, § 4º</i></p>",
42:"<p>Errado pela ressalva final. Expirado o prazo sem pronunciamento, considera-se homologado o lançamento e definitivamente extinto o crédito — <b>salvo se comprovada a ocorrência de dolo, fraude ou simulação</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CTN — art. 150, § 4º, parte final</i></p>",
43:"<p>Certo. O Resumo chama de \"diferença crucial\":</p><p>Prazo <b>DECADENCIAL</b> = prazo para o fisco <b>efetuar o lançamento</b>.<br>Prazo <b>PRESCRICIONAL</b> = prazo para o fisco <b>acionar o sujeito passivo na justiça</b> (execução fiscal).</p><p>Na linha do tempo do material: decadência vai do fato gerador até a notificação do lançamento; prescrição corre da definitividade do lançamento até a ação de execução fiscal.</p><p class='fb-fonte'>Resumo 08 · <i>Decadência x prescrição</i></p>",
44:"<p>Certo — <b>Súmula 436 do STJ</b>, transcrita no Resumo.</p><p>Consequência apontada pelo material: ao entregar a declaração reconhecendo o débito, o contribuinte <b>constitui o crédito</b>; com isso, <b>cessa a contagem do prazo decadencial e se inicia a do prescricional</b>.</p><p class='fb-fonte'>Resumo 08 · <i>STJ Súmula 436</i></p>",
45:"<p>Certo — <b>Súmula 555 do STJ</b>. Nos tributos sujeitos a lançamento por homologação, <b>não havendo declaração do débito</b>, a decadência conta-se exclusivamente na forma do art. 173, I: do <b>primeiro dia do exercício seguinte</b> àquele em que o lançamento poderia ter sido efetuado.</p><p class='fb-fonte'>Resumo 08 · <i>STJ Súmula 555</i></p>",
46:"<p>Errado — é justamente a hipótese da <b>primeira coluna</b> do quadro do Resumo.</p><p><b>Declarou e pagou</b> → art. 150, § 4º: cinco anos a contar do <b>fato gerador</b>.<br><b>Não declarou</b> → Súmula 555: cinco anos do primeiro dia do exercício seguinte (art. 173, I).<br><b>Declarou e não pagou</b> → Súmula 436: cessa a decadência, inicia a prescrição.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro do início da contagem do prazo decadencial</i></p>",
47:"<p>Certo. É a terceira coluna do quadro do Resumo, apoiada na <b>Súmula 436</b>: declarado o débito, o crédito já está constituído, então <b>cessa a contagem do prazo decadencial e se inicia a do prescricional</b>.</p><p>Não há o que lançar — há o que executar.</p><p class='fb-fonte'>Resumo 08 · <i>STJ Súmula 436 — declarou e não pagou</i></p>",
48:"<p>Certo. Na linha do tempo desenhada no Resumo, entre a <b>notificação do lançamento</b> e a <b>definitividade</b> corre o prazo para pagar ou impugnar, indicado como <b>regra: 30 dias</b>.</p><p>Findo esse intervalo sem pagamento nem impugnação, o lançamento torna-se definitivo e passa a correr a <b>prescrição</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Linha do tempo — art. 150, § 4º</i></p>",
49:"<p>Certo — natureza jurídica mista. O lançamento <b>declara</b> a obrigação tributária (verificando a ocorrência do fato gerador) e <b>constitui</b> (formaliza) o crédito tributário, tornando-o exigível.</p><p class='fb-fonte'>Resumo 08 · <i>ATENÇÃO — natureza do lançamento</i></p>",
50:"<p>Errado: a descrição é a do lançamento <b>por homologação</b>.</p><p>No lançamento <b>por declaração</b>, o sujeito passivo atua <b>declarando informações sobre matéria de fato</b> e aguarda o lançamento pela autoridade, que o notifica para pagamento (ex.: ITBI, ITCMD).</p><p class='fb-fonte'>Resumo 08 · <i>Quadro comparativo das modalidades</i></p>",
51:"<p>Certo. Conclusão expressa do Resumo após a Súmula 227 do STJ: a mudança nos critérios jurídicos adotados possui efeitos <b>ex nunc</b> — <b>aplica-se apenas aos fatos geradores futuros</b>.</p><p>Compare: o lançamento tem efeitos <b>ex tunc</b> (art. 144); a mudança de critério jurídico, <b>ex nunc</b> (art. 146).</p><p class='fb-fonte'>Resumo 08 · <i>Erro de direito — efeitos ex nunc</i></p>",
52:"<p>Certo. O Resumo afirma: \"<b>É a Lei que determina a modalidade de lançamento</b>\".</p><p>E completa com a ressalva: as <b>normas gerais</b> sobre lançamento devem ser estabelecidas por <b>lei complementar</b> (art. 146, III, <i>b</i>, CF/88).</p><p class='fb-fonte'>Resumo 08 · <i>Modalidades de lançamento</i></p>",
53:"<p>Certo — é a observação do Resumo ao exemplo da alíquota.</p><p>O <b>lançamento</b> possui efeitos retroativos (ex tunc): reporta-se à data do fato gerador. A <b>legislação tributária</b>, em regra, <b>não</b> retroage (princípio da irretroatividade) — só nos casos de aspectos formais do art. 144, § 1º, e na retroatividade benéfica de multas do art. 106, II, <i>c</i>, citada no material.</p><p class='fb-fonte'>Resumo 08 · <i>Art. 144 — OBS. do exemplo</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"08", nome:"Crédito tributário e lançamento", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
