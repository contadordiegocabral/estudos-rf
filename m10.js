/* AFO — Módulo 10: Restos a Pagar */
window.MOD = window.MOD || {};
window.MOD.m10 = (function(){
"use strict";

var CARDS = [
  ["O que são Restos a Pagar?","Todas as despesas <b>regularmente empenhadas</b>, do exercício atual <b>ou anterior</b>, mas <b>não pagas até 31 de dezembro</b> do exercício financeiro vigente."],
  ["Quais são os dois tipos de Restos a Pagar?","<b>Processados</b> (despesas já liquidadas) e <b>não processados</b> (despesas <b>a liquidar</b> ou <b>em liquidação</b>)."],
  ["A inscrição em Restos a Pagar é o quê, sob o ponto de vista orçamentário?","<b>Receita extraorçamentária.</b>"],
  ["O pagamento de Restos a Pagar é o quê?","<b>Despesa extraorçamentária</b> — o empenho correu à custa do orçamento de ano anterior."],
  ["Restos a Pagar integram qual espécie de dívida pública?","<b>Dívida pública flutuante</b> — <b>não</b> é dívida consolidada/fundada."],
  ["O que são Restos a Pagar Processados (RPP)?","Despesas <b>empenhadas e liquidadas</b>, mas não pagas: o serviço foi prestado pelo fornecedor e <b>aceito</b> pelo contratante, nos termos do <b>art. 63 da Lei 4.320/64</b>."],
  ["Os RPP podem ser cancelados?","<b>Não</b>, salvo motivo previsto na legislação pertinente. O fornecedor cumpriu a obrigação de fazer e a Administração conferiu — não se pode deixar de pagar."],
  ["Precatórios inscritos ao fim do exercício são RPP ou RPNP?","<b>RPP.</b> Sendo pagamentos devidos por sentença judicial, já passaram obrigatoriamente pela <b>liquidação</b> (verificação do direito adquirido pelo credor)."],
  ["O que são Restos a Pagar Não Processados (RPNP)?","Despesas <b>empenhadas e não liquidadas</b>, em duas condições: <b>em liquidação</b> ou <b>a liquidar</b>."],
  ["RPNP <b>em liquidação</b> — defina.","O serviço foi prestado (o <b>fato gerador ocorreu</b>), mas em 31 de dezembro a despesa está <b>em fase de verificação do direito adquirido pelo credor</b>."],
  ["RPNP <b>a liquidar</b> — defina.","O <b>prazo para cumprimento da obrigação assumida pelo credor ainda está vigente</b>. Ou seja, <b>ainda não houve o fato gerador</b> da obrigação."],
  ["A pegadinha clássica dos RPNP a liquidar","“Ocorre quando tiver ocorrido o <b>fato gerador</b> da obrigação, antes do término do exercício, sem que se tenha procedido a liquidação” → <b>ERRADO</b>. Isso descreve o RPNP <b>em liquidação</b>."],
  ["Os RPNP podem ser cancelados?","<b>Sim.</b> Por isso se afirma que <b>nem todos os Restos a Pagar geram obrigações financeiras</b> para o Estado."],
  ["Empenhado R$ 900, liquidado R$ 700 e nada pago. Como fica a inscrição?","RP total de <b>R$ 900</b>: <b>R$ 700 de RPP</b> e <b>R$ 200 de RPNP</b> (900 − 700)."],
  ["O que diz o art. 42 da LRF?","É vedado ao titular de Poder ou órgão, nos <b>últimos dois quadrimestres do mandato</b>, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a pagar no exercício seguinte <b>sem suficiente disponibilidade de caixa</b>."],
  ["O que se considera na determinação da disponibilidade de caixa (art. 42, § único, LRF)?","Os <b>encargos e despesas compromissadas a pagar até o final do exercício</b>."],
  ["A LRF disciplina o mérito do que pode ser inscrito em RP?","<b>Não.</b> Ela não aborda o mérito — apenas <b>veda contrair obrigação</b> no último ano do mandato sem a respectiva <b>cobertura financeira</b>, eliminando heranças fiscais onerosas."],
  ["Último ano de mandato: disponibilidade R$ 2.000.000 e despesas empenhadas não pagas R$ 3.200.000. Quanto se inscreve em RP?","<b>R$ 2.000.000</b> — no último ano de mandato o valor inscrito fica <b>limitado à disponibilidade de caixa</b>."],
  ["O que é a rolagem da dívida?","A <b>substituição de dívidas anteriormente emitidas por dívidas novas</b> — pagar uma dívida assumindo outra. São as <b>despesas de refinanciamento</b> da dívida pública."],
  ["O que é a “rolagem orçamentária” e por que ela é criticada?","Se as inscrições de RP superam os pagamentos, o <b>estoque</b> de RP cresce e passa a <b>concorrer com o orçamento do ano seguinte</b>, contribuindo para a <b>descaracterização do orçamento aprovado pelo Legislativo</b>."],
  ["Qual a regra geral do art. 35 do Decreto 93.872/86?","O empenho de despesa <b>não liquidada</b> será considerado <b>anulado em 31 de dezembro</b>, para todos os fins."],
  ["Quais as quatro exceções à anulação do empenho não liquidado?","<b>1)</b> Vigente o prazo para cumprimento da obrigação pelo credor; <b>2)</b> destinar-se a transferências a instituições públicas ou privadas; <b>3)</b> corresponder a compromissos assumidos no exterior; <b>4)</b> vencido o prazo, mas em curso a liquidação ou sendo de interesse da Administração exigir o cumprimento."],
  ["O que acontece nas quatro exceções do art. 35?","Os empenhos <b>poderão ser inscritos em RPNP</b> em vez de anulados."],
  ["Empenhos com vigência plurianual não liquidados — quando viram RP?","Só são computados como Restos a Pagar <b>no último ano de vigência do crédito</b> (art. 36, parágrafo único, da Lei 4.320/64)."],
  ["E os empenhos plurianuais já liquidados?","Serão inscritos em Restos a Pagar <b>em cada ano</b>."],
  ["O que são Despesas de Exercícios Anteriores (DEA)?","Despesas cujos <b>fatos geradores ocorreram em exercícios anteriores</b>, mas que só foram <b>empenhadas, liquidadas e pagas no exercício seguinte</b>."],
  ["Quais as três espécies de DEA do art. 37 da Lei 4.320/64?","<b>1)</b> Despesas de exercícios encerrados que não se tenham processado na época própria; <b>2)</b> <b>Restos a Pagar com prescrição interrompida</b>; <b>3)</b> compromissos reconhecidos após o encerramento do exercício."],
  ["Como as DEA são pagas (art. 37)?","À conta de <b>dotação específica consignada no orçamento</b>, <b>discriminada por elementos</b>, obedecida, sempre que possível, a <b>ordem cronológica</b>."],
  ["O que são “despesas que não se tenham processado na época própria”?","As que tinham <b>dotação em exercício já encerrado</b>, mas não foram empenhadas na época própria, ou cujo empenho foi <b>anulado por insubsistência</b>, tendo o credor cumprido sua obrigação dentro do prazo."],
  ["O que são Restos a Pagar com prescrição interrompida?","RP que foram <b>cancelados</b>, mas em que <b>permanece o direito do credor</b>, porque o fornecedor já havia entregue o bem ou prestado o serviço."],
  ["O que são compromissos reconhecidos após o encerramento do exercício?","Obrigação de pagamento <b>criada em virtude de lei</b>, cujo <b>direito do reclamante só foi reconhecido após o encerramento</b> do exercício correspondente."],
  ["DEA × RP — a distinção que mais cai","Pagamento de <b>DEA</b> = despesa <b>orçamentária</b>, empenho à custa do <b>orçamento vigente</b>. Pagamento de <b>RP</b> = despesa <b>extraorçamentária</b>, empenho à custa do orçamento de <b>ano anterior</b>."],
  ["O que diz o art. 165, § 10, da CF?","A administração tem o <b>dever de executar as programações orçamentárias</b>, adotando os meios e medidas necessários, para garantir a <b>efetiva entrega de bens e serviços à sociedade</b>. Incluído pela <b>EC 100/2019</b>."],
  ["Os três incisos do art. 165, § 11, da CF","<b>I</b> subordina-se a metas fiscais/limites de despesa e <b>não impede o cancelamento</b> necessário à abertura de créditos adicionais; <b>II</b> <b>não se aplica</b> a impedimentos de ordem técnica devidamente justificados; <b>III</b> aplica-se <b>exclusivamente às despesas primárias discricionárias</b>."],
  ["Limite das emendas individuais (CF, art. 166, § 9º)","<b>2% da Receita Corrente Líquida do exercício anterior</b> ao do encaminhamento do projeto, sendo <b>metade desse percentual</b> (1% da RCL) destinada a <b>ações e serviços públicos de saúde</b>."],
  ["Divisão do limite entre Deputados e Senadores (§ 9º-A)","<b>1,55%</b> às emendas de <b>Deputados</b> e <b>0,45%</b> às de <b>Senadores</b>. Incluído pela <b>EC 126/2022</b>."],
  ["O que diz o art. 166, § 11, da CF?","É <b>obrigatória a execução</b> orçamentária e financeira das programações oriundas de <b>emendas individuais</b>, no montante do limite do § 9º, observado o § 9º-A — as chamadas <b>emendas impositivas</b>."],
  ["Emendas de bancada (§ 12)","A garantia de execução aplica-se também às emendas de <b>bancada</b> de parlamentares de Estado ou do DF, no montante de <b>até 1% da RCL realizada no exercício anterior</b>."],
  ["Quando a execução das emendas deixa de ser obrigatória (§ 13)?","Nos casos de <b>impedimentos de ordem técnica</b>."],
  ["O que garante o art. 166, § 16, da CF?","A transferência obrigatória da União a Estados, DF e Municípios <b>independe da adimplência</b> do destinatário e <b>não integra a base de cálculo da RCL</b> para os limites de despesa de pessoal do art. 169."],
  ["As duas modalidades do art. 166-A da CF","<b>I</b> transferência <b>especial</b> (recursos livres, sem finalidade pré-definida) e <b>II</b> transferência <b>com finalidade definida</b>."],
  ["Regra dos 70% da transferência especial","Pelo menos <b>70%</b> das transferências especiais deverão ser aplicadas em <b>despesas de capital</b> (art. 166-A, § 5º)."],
  ["Vedações de aplicação dos recursos do art. 166-A (§ 1º)","Vedada a aplicação no pagamento de <b>despesas com pessoal e encargos sociais</b> (ativos, inativos e pensionistas) e de <b>encargos referentes ao serviço da dívida</b>."],
  ["Como se dá o repasse na transferência especial (§ 2º)?","<b>Diretamente</b> ao ente beneficiado, <b>independentemente de convênio</b>; os recursos <b>pertencem ao ente no ato da efetiva transferência financeira</b>; e serão aplicados em <b>programações finalísticas</b> das áreas de competência do Poder Executivo do ente."]
];

var QS = [
  ["Restos a Pagar são as despesas regularmente empenhadas, do exercício atual ou anterior, mas não pagas até 31 de dezembro do exercício financeiro vigente.","C","CESPE","Conceito integral — atenção ao “ou anterior”, frequentemente suprimido para tornar o item falso."],
  ["Somente podem ser inscritas em Restos a Pagar as despesas empenhadas no próprio exercício financeiro em que se dá a inscrição.","E","FGV","O conceito alcança despesas do exercício atual <b>ou de exercícios anteriores</b>, desde que regularmente empenhadas e não pagas."],
  ["A inscrição de despesas em Restos a Pagar constitui receita extraorçamentária.","C","FCC","E o respectivo pagamento, no exercício seguinte, é despesa extraorçamentária."],
  ["O pagamento de Restos a Pagar é classificado como despesa orçamentária do exercício em que ocorre.","E","CESPE","É despesa <b>extraorçamentária</b>: o empenho já correu à conta do orçamento de exercício anterior."],
  ["Os Restos a Pagar integram a dívida pública consolidada do ente federativo.","E","VUNESP","Integram a dívida pública <b>flutuante</b>, e não a consolidada ou fundada."],
  ["Serão inscritas em Restos a Pagar processados as despesas liquidadas e não pagas no exercício financeiro.","C","FCC","Objeto prestado pelo fornecedor e aceito pela Administração, nos termos do art. 63 da Lei 4.320/64."],
  ["Os Restos a Pagar processados podem ser livremente cancelados pela Administração no exercício seguinte.","E","CESPE","<b>Não podem</b> ser cancelados, salvo motivo previsto na legislação pertinente — o credor já satisfez a obrigação de fazer."],
  ["Precatórios emitidos em maio de determinado exercício e pagos em janeiro do exercício seguinte são inscritos como Restos a Pagar processados.","C","FGV","Pagamentos devidos por sentença judicial passaram obrigatoriamente pela liquidação."],
  ["Serão inscritas em Restos a Pagar não processados as despesas empenhadas e não liquidadas.","C","CESPE","Nas duas espécies: em liquidação e a liquidar."],
  ["Considera-se despesa em liquidação aquela cujo prazo para cumprimento da obrigação assumida pelo credor ainda está vigente.","E","FCC","Essa é a despesa <b>a liquidar</b>. Em liquidação pressupõe que o fato gerador já ocorreu."],
  ["A inscrição de restos a pagar não processados a liquidar ocorre quando tiver ocorrido o fato gerador da obrigação, antes do término do exercício, sem que se tenha procedido o estágio da liquidação.","E","CESPE","A pegadinha literal do tema: com fato gerador ocorrido, a hipótese é de RPNP <b>em liquidação</b>."],
  ["Na despesa em liquidação, o serviço contratado já foi prestado, encontrando-se, em 31 de dezembro, em fase de verificação do direito adquirido pelo credor.","C","FCC","Redação exata do MCASP."],
  ["Os Restos a Pagar não processados podem ser cancelados.","C","FGV","Daí a conclusão de que nem todos os Restos a Pagar geram obrigações financeiras para o Estado."],
  ["Todos os Restos a Pagar inscritos ao fim do exercício geram obrigação financeira para o Estado.","E","CESPE","Os não processados podem ser cancelados."],
  ["Despesa empenhada e não paga de R$ 900, com liquidação de R$ 700, gera inscrição de R$ 700 em Restos a Pagar processados e de R$ 200 em não processados.","C","VUNESP","Total inscrito de R$ 900. A diferença entre empenhado e liquidado é sempre o RPNP."],
  ["A Lei de Responsabilidade Fiscal disciplina o mérito das despesas que podem ser inscritas em Restos a Pagar.","E","FCC","A LRF <b>não aborda o mérito</b> da inscrição: veda contrair obrigação sem cobertura financeira ao final do mandato."],
  ["É vedado ao titular de Poder ou órgão, nos últimos dois quadrimestres do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele.","C","CESPE","Art. 42 da LRF, caput."],
  ["A vedação do art. 42 da LRF alcança o último quadrimestre do mandato do titular de Poder.","E","FGV","São os <b>últimos dois quadrimestres</b>, e não apenas o último."],
  ["Na determinação da disponibilidade de caixa de que trata o art. 42 da LRF serão considerados os encargos e despesas compromissadas a pagar até o final do exercício.","C","FCC","Parágrafo único do art. 42."],
  ["No último ano do mandato do governante, o valor a ser inscrito em Restos a Pagar fica limitado à disponibilidade de caixa.","C","CESPE","É o comando que resolve a questão numérica clássica do tema."],
  ["A rolagem da dívida consiste na substituição de dívidas anteriormente emitidas por dívidas novas, correspondendo às despesas de refinanciamento da dívida pública.","C","VUNESP","Pagar uma dívida assumindo outra."],
  ["A rolagem orçamentária contribui para a descaracterização do orçamento previamente aprovado pelo Poder Legislativo.","C","FGV","O estoque de RP passa a concorrer com o orçamento do ano seguinte."],
  ["Segundo o Decreto nº 93.872/1986, o empenho de despesa não liquidada será considerado anulado em 31 de dezembro, salvo exceções.","C","CESPE","Art. 35 — regra geral de anulação, com quatro ressalvas."],
  ["O empenho não liquidado será anulado em 31 de dezembro ainda que vigente o prazo para cumprimento da obrigação assumida pelo credor.","E","FCC","Essa é justamente a primeira das quatro exceções do art. 35."],
  ["Os empenhos destinados a atender transferências a instituições públicas ou privadas não se sujeitam à anulação automática em 31 de dezembro.","C","FGV","Segunda exceção do art. 35 do Decreto 93.872/86."],
  ["Os compromissos assumidos no exterior sujeitam-se à anulação obrigatória do empenho não liquidado em 31 de dezembro.","E","CESPE","Terceira exceção do art. 35 — não são anulados."],
  ["Vencido o prazo para cumprimento da obrigação, o empenho não será anulado se estiver em curso a liquidação da despesa ou se for de interesse da Administração exigir o cumprimento da obrigação.","C","VUNESP","Quarta exceção, com suas duas hipóteses."],
  ["Nas situações ressalvadas pelo art. 35 do Decreto nº 93.872/1986, os empenhos poderão ser inscritos em Restos a Pagar não processados.","C","FCC","É exatamente a consequência prática das quatro exceções."],
  ["Os empenhos que correm à conta de créditos com vigência plurianual, não liquidados, só serão computados como Restos a Pagar no último ano de vigência do crédito.","C","CESPE","Art. 36, parágrafo único, da Lei nº 4.320/1964."],
  ["Os empenhos plurianuais já liquidados só serão inscritos em Restos a Pagar no último ano de vigência do crédito.","E","FGV","Os <b>liquidados</b> são inscritos em cada ano. A regra do último ano vale para os <b>não liquidados</b>."],
  ["Despesas de Exercícios Anteriores são aquelas cujos fatos geradores ocorreram em exercícios anteriores, mas que só foram empenhadas, liquidadas e pagas no exercício seguinte.","C","FCC","Conceito central, muito cobrado em contraste com os Restos a Pagar."],
  ["São espécies de Despesas de Exercícios Anteriores as despesas de exercícios encerrados que não se tenham processado na época própria, os Restos a Pagar com prescrição interrompida e os compromissos reconhecidos após o encerramento do exercício.","C","CESPE","Os três incisos do art. 37 da Lei nº 4.320/1964."],
  ["As Despesas de Exercícios Anteriores poderão ser pagas à conta de dotação específica consignada no orçamento, discriminada por elementos, obedecida, sempre que possível, a ordem cronológica.","C","VUNESP","Literalidade do art. 37."],
  ["O pagamento de Despesas de Exercícios Anteriores constitui despesa extraorçamentária.","E","CESPE","É despesa <b>orçamentária</b>: o empenho corre à custa do <b>orçamento vigente</b>. Extraorçamentário é o pagamento de RP."],
  ["Restos a Pagar com prescrição interrompida são aqueles que foram cancelados, mas em que permanece o direito do credor, por já ter havido entrega do bem ou prestação do serviço.","C","FGV","Reconhecido o direito, a despesa é reempenhada no exercício em curso como DEA."],
  ["Compromissos reconhecidos após o encerramento do exercício são obrigações de pagamento criadas em virtude de lei, cujo direito do reclamante só foi reconhecido após o encerramento do exercício correspondente.","C","FCC","Terceira espécie de DEA."],
  ["Segundo a Constituição Federal, a administração tem o dever de executar as programações orçamentárias, com o propósito de garantir a efetiva entrega de bens e serviços à sociedade.","C","CESPE","Art. 165, § 10, incluído pela EC nº 100/2019."],
  ["O dever de executar as programações orçamentárias impede o cancelamento de despesas necessário à abertura de créditos adicionais.","E","FGV","Art. 165, § 11, I: <b>não impede</b> o cancelamento necessário à abertura de créditos adicionais."],
  ["O dever de executar as programações orçamentárias não se aplica nos casos de impedimentos de ordem técnica devidamente justificados.","C","FCC","Art. 165, § 11, II."],
  ["O dever de executar as programações orçamentárias aplica-se a todas as despesas, primárias e financeiras.","E","CESPE","Art. 165, § 11, III: aplica-se <b>exclusivamente às despesas primárias discricionárias</b>."],
  ["As emendas individuais ao projeto de lei orçamentária serão aprovadas no limite de 2% da Receita Corrente Líquida do exercício anterior ao do encaminhamento do projeto.","C","VUNESP","Art. 166, § 9º, com metade do percentual destinada a ações e serviços públicos de saúde."],
  ["Do limite das emendas individuais, 0,45% caberá às emendas de Deputados e 1,55% às de Senadores.","E","CESPE","Está invertido: <b>1,55% Deputados</b> e <b>0,45% Senadores</b> (art. 166, § 9º-A)."],
  ["As emendas de iniciativa de bancada de parlamentares de Estado ou do Distrito Federal têm execução garantida no montante de até 1% da receita corrente líquida realizada no exercício anterior.","C","FCC","Art. 166, § 12."],
  ["A execução das programações oriundas de emendas individuais e de bancada é obrigatória inclusive nos casos de impedimentos de ordem técnica.","E","FGV","Art. 166, § 13: nesses casos <b>não</b> são de execução obrigatória."],
  ["A transferência obrigatória da União destinada a Estados, ao Distrito Federal e a Municípios para a execução de emendas independerá da adimplência do ente destinatário.","C","CESPE","Art. 166, § 16 — e não integrará a base de cálculo da RCL para os limites de despesa de pessoal."],
  ["Na transferência especial de que trata o art. 166-A da Constituição Federal, pelo menos 70% dos recursos deverão ser aplicados em despesas de capital.","C","FCC","Art. 166-A, § 5º."],
  ["Na transferência especial, os recursos somente serão repassados ao ente federado beneficiado mediante celebração de convênio ou instrumento congênere.","E","VUNESP","Art. 166-A, § 2º, I: o repasse é <b>direto</b>, independentemente de convênio."],
  ["Os recursos transferidos na forma do art. 166-A não poderão ser aplicados no pagamento de despesas com pessoal e encargos sociais nem de encargos referentes ao serviço da dívida.","C","CESPE","Art. 166-A, § 1º, incisos I e II."]
];

var FEY = {
  s1:{ask:"Explique o que são Restos a Pagar, sua natureza orçamentária e as duas espécies.",
    hint:"Comece pelo conceito com a data-limite. Depois diga o que é a inscrição e o que é o pagamento, e classifique a dívida. Encerre separando RPP de RPNP.",
    ref:"Restos a Pagar são todas as despesas regularmente empenhadas, do exercício atual ou de exercícios anteriores, mas não pagas até 31 de dezembro do exercício financeiro vigente. A inscrição em Restos a Pagar constitui receita extraorçamentária, e o respectivo pagamento, no exercício seguinte, constitui despesa extraorçamentária, porque o empenho correu à conta do orçamento de exercício anterior. Os Restos a Pagar integram a dívida pública flutuante, e não a dívida consolidada ou fundada. Distinguem-se duas espécies. Os Restos a Pagar processados correspondem às despesas empenhadas e liquidadas, mas não pagas, isto é, aquelas em que o objeto foi prestado pelo fornecedor e aceito pela Administração, nos termos do art. 63 da Lei nº 4.320/1964; não podem ser cancelados, salvo motivo previsto na legislação pertinente. Os Restos a Pagar não processados correspondem às despesas empenhadas e não liquidadas, e podem ser cancelados, razão pela qual se afirma que nem todos os Restos a Pagar geram obrigação financeira para o Estado."},
  s2:{ask:"Explique as duas espécies de Restos a Pagar não processados e a pegadinha que as separa.",
    hint:"O divisor de águas é uma pergunta só: o fato gerador já ocorreu? Dê um exemplo de cada.",
    ref:"Os Restos a Pagar não processados dividem-se em despesas em liquidação e despesas a liquidar, e o critério que as separa é a ocorrência do fato gerador. Na despesa em liquidação, o serviço contratado já foi prestado ou o material já foi entregue — o fato gerador da obrigação ocorreu —, mas a despesa se encontra, em 31 de dezembro, em fase de verificação do direito adquirido pelo credor; é o caso da obra concluída ao final do ano cuja empresa ainda não apresentou toda a documentação necessária ao pagamento. Na despesa a liquidar, o prazo para cumprimento da obrigação assumida pelo credor ainda se encontra vigente, de modo que ainda não houve o fato gerador; é o caso da reforma contratada em outubro com prazo de seis meses, que em 31 de dezembro segue em andamento. Daí decorre a pegadinha mais cobrada do tema: é errado afirmar que a inscrição de restos a pagar não processados a liquidar ocorre quando tiver ocorrido o fato gerador da obrigação sem que se tenha procedido à liquidação, pois essa é precisamente a hipótese de despesa em liquidação."},
  s3:{ask:"Explique a vedação do art. 42 da LRF, a anulação do empenho não liquidado e a regra dos empenhos plurianuais.",
    hint:"Três blocos: o limite do fim de mandato, as quatro exceções do art. 35 do Decreto 93.872/86 e o art. 36, parágrafo único, da Lei 4.320.",
    ref:"Embora a Lei de Responsabilidade Fiscal não discipline o mérito do que pode ser inscrito em Restos a Pagar, seu art. 42 veda ao titular de Poder ou órgão, nos últimos dois quadrimestres do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte sem que haja suficiente disponibilidade de caixa para esse efeito, considerando-se na determinação dessa disponibilidade os encargos e despesas compromissadas a pagar até o final do exercício. Na prática, no último ano de mandato o valor inscrito em Restos a Pagar fica limitado à disponibilidade de caixa. Quanto à anulação, o art. 35 do Decreto nº 93.872/1986 dispõe que o empenho de despesa não liquidada será considerado anulado em 31 de dezembro, salvo quando vigente o prazo para cumprimento da obrigação assumida pelo credor, quando se destinar a atender transferências a instituições públicas ou privadas, quando corresponder a compromissos assumidos no exterior e quando, vencido o prazo, estiver em curso a liquidação da despesa ou for de interesse da Administração exigir o cumprimento da obrigação; nessas quatro hipóteses os empenhos poderão ser inscritos em Restos a Pagar não processados. Por fim, o art. 36, parágrafo único, da Lei nº 4.320/1964 determina que os empenhos que correm à conta de créditos com vigência plurianual, quando não liquidados, só serão computados como Restos a Pagar no último ano de vigência do crédito, ao passo que os liquidados são inscritos em cada ano."},
  s4:{ask:"Explique as Despesas de Exercícios Anteriores, suas três espécies e a distinção em relação aos Restos a Pagar.",
    hint:"Conceito, art. 37 com os três incisos e a forma de pagamento, e o quadro comparativo com RP.",
    ref:"Despesas de Exercícios Anteriores são aquelas cujos fatos geradores ocorreram em exercícios anteriores, mas que só foram empenhadas, liquidadas e pagas no exercício seguinte. Conforme o art. 37 da Lei nº 4.320/1964, compreendem três espécies: as despesas de exercícios encerrados para as quais o orçamento respectivo consignava crédito próprio com saldo suficiente e que não se tenham processado na época própria; os Restos a Pagar com prescrição interrompida, isto é, aqueles que foram cancelados, mas em que permanece o direito do credor porque o bem já fora entregue ou o serviço prestado; e os compromissos reconhecidos após o encerramento do exercício correspondente, obrigações criadas em virtude de lei cujo direito do reclamante só se reconheceu depois do encerramento. Todas poderão ser pagas à conta de dotação específica consignada no orçamento, discriminada por elementos, obedecida, sempre que possível, a ordem cronológica. A distinção em relação aos Restos a Pagar é essencial: o pagamento de Despesas de Exercícios Anteriores constitui despesa orçamentária, porque o empenho ocorre à custa do orçamento vigente; já o pagamento de Restos a Pagar constitui despesa extraorçamentária, porque o empenho ocorreu à custa do orçamento de exercício anterior."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  m1:[
    sl("Restos a Pagar — o conceito",
      '<p>São Restos a Pagar <span class="key">todas as despesas regularmente empenhadas, do exercício atual ou anterior, mas não pagas até 31 de dezembro</span> do exercício financeiro vigente.</p>'+
      '<div class="box trap"><span class="bl">Os três pedaços que a banca corta</span>'+
      '<ul><li><b>Regularmente empenhadas</b> — sem empenho não há RP.</li>'+
      '<li><b>Do exercício atual ou anterior</b> — a banca suprime o “ou anterior” para tornar o item falso.</li>'+
      '<li><b>Não pagas até 31 de dezembro</b> — a data é o corte.</li></ul></div>'+
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">I</span><span class="nm">Inscrição</span></div><div class="fn-b"><p><b>Receita extraorçamentária.</b></p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">P</span><span class="nm">Pagamento</span></div><div class="fn-b"><p><b>Despesa extraorçamentária.</b></p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">D</span><span class="nm">Dívida</span></div><div class="fn-b"><p><b>Flutuante</b> — não consolidada/fundada.</p></div></div></div>'),
    sl("A linha do tempo e as duas espécies",
      '<div class="box"><span class="bl">Onde a despesa parou em 31/12</span>'+
      '<p><b>Empenho → Liquidação → Pagamento</b></p>'+
      '<ul><li>Parou <b>antes</b> da liquidação → <b>RP não processados</b>.</li>'+
      '<li>Passou pela liquidação e parou <b>antes</b> do pagamento → <b>RP processados</b>.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Processados</span><span class="cd">Despesas <b>já liquidadas</b>.</span></div>'+
      '<div class="chip"><span class="cn">Não processados</span><span class="cd">Despesas <b>a liquidar</b> ou <b>em liquidação</b>.</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplo numérico — cai pronto</span>'+
      '<ul><li>Despesa empenhada e não paga: <b>R$ 900</b>;</li>'+
      '<li>Liquidação de despesa corrente: <b>R$ 700</b>;</li>'+
      '<li>Inscrição total em RP: <b>R$ 900</b>, sendo <b>R$ 700 de RPP</b> e <b>R$ 200 de RPNP</b> (900 − 700).</li></ul></div>')
  ],
  m2:[
    sl("Restos a Pagar processados (RPP)",
      '<p>São as despesas <span class="key">liquidadas e não pagas</span> no exercício financeiro — aquelas em que o serviço contratado foi prestado pelo fornecedor e <b>aceito pelo contratante</b>, nos termos do <b>art. 63 da Lei nº 4.320/1964</b>.</p>'+
      '<div class="box tip"><span class="bl">Exemplo 01</span><p>Vacinas: empenho em 09/12/2023, recebimento e verificação em 29/12/2023, pagamento em 19/01/2024. Em 31/12/2023 a despesa foi registrada como <b>RP processados</b>, porque já havia sido liquidada.</p></div>'+
      '<div class="box trap"><span class="bl">Não podem ser cancelados</span><p>O fornecedor satisfez a obrigação de fazer e a Administração conferiu. Não se pode deixar de exercer a obrigação de pagar, <b>salvo motivo previsto na legislação pertinente</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo 02 — precatórios</span><p>Precatórios emitidos em maio de 2023 e pagos em janeiro de 2024 são <b>RPP</b>: por serem pagamentos devidos por sentença judicial, já passaram obrigatoriamente pela <b>liquidação</b> (verificação do direito adquirido pelo credor).</p></div>'),
    sl("Restos a Pagar não processados (RPNP)",
      '<p>São as despesas <span class="key">não liquidadas</span>, em duas condições. A pergunta que decide é sempre a mesma: <b>o fato gerador já ocorreu?</b></p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Em liquidação</span><span class="cd">O serviço <b>foi prestado</b> (fato gerador ocorreu), mas em 31/12 está <b>em fase de verificação do direito do credor</b>.</span></div>'+
      '<div class="chip"><span class="cn">A liquidar</span><span class="cd">O <b>prazo para cumprimento da obrigação está vigente</b>. Ainda <b>não houve fato gerador</b>.</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplos</span>'+
      '<ul><li><b>Em liquidação:</b> município contrata obra; ao final do ano a obra está concluída, mas a empresa ainda não apresentou toda a documentação para receber.</li>'+
      '<li><b>A liquidar:</b> em outubro o município contrata reforma de escola com prazo de 6 meses; em 31/12 a obra ainda está em andamento.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A pegadinha literal do módulo</span>'+
      '<p>“A inscrição de restos a pagar não processados <b>a liquidar</b> ocorre quando tiver ocorrido o <b>fato gerador</b> da obrigação, antes do término do exercício, sem que se tenha procedido o estágio da liquidação.” → <b>ERRADO.</b> Com fato gerador ocorrido, é RPNP <b>em liquidação</b>.</p></div>'),
    sl("Não confunda — RPP × RPNP",
      '<div class="box"><span class="bl">Quadro comparativo</span>'+
      '<ul><li><b>RPP:</b> foram empenhados <b>e liquidados</b> · <b>não</b> podem ser cancelados.</li>'+
      '<li><b>RPNP:</b> foram <b>apenas empenhados</b> · <b>podem</b> ser cancelados.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A consequência que a banca cobra</span>'+
      '<p>Como os RPNP podem ser cancelados, <b>nem todos os Restos a Pagar geram obrigações financeiras para o Estado</b>. Item verdadeiro sempre que aparecer.</p></div>')
  ],
  m3:[
    sl("Último ano de mandato — art. 42 da LRF",
      '<p>A LRF <b>não aborda o mérito</b> do que pode ou não ser inscrito em Restos a Pagar. Ela <span class="key">veda contrair obrigação no último ano do mandato sem a respectiva cobertura financeira</span>, eliminando as heranças fiscais onerosas.</p>'+
      '<div class="box"><span class="bl">LRF, art. 42</span><p>É vedado ao titular de Poder ou órgão referido no art. 20, nos <b>últimos dois quadrimestres do seu mandato</b>, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte <b>sem que haja suficiente disponibilidade de caixa</b> para este efeito.</p>'+
      '<p><b>Parágrafo único.</b> Na determinação da disponibilidade de caixa serão considerados os <b>encargos e despesas compromissadas a pagar até o final do exercício</b>.</p></div>'+
      '<div class="box trap"><span class="bl">São dois quadrimestres, não um</span><p>A banca troca “últimos dois quadrimestres” por “último quadrimestre” ou “último ano”. Leia sempre essa parte duas vezes.</p></div>'),
    sl("A questão-pegadinha numérica",
      '<div class="prompt"><span class="vlab">Questão clássica</span>'+
      '<p>Estado cujo governador estava no <b>último ano</b> de mandato apresentava, ao final do exercício:</p>'+
      '<ul><li>Disponibilidade de caixa: <b>R$ 2.000.000</b>;</li>'+
      '<li>Despesas empenhadas, mas não pagas: <b>R$ 3.200.000</b>;</li>'+
      '<li>RP processados: R$ 1.500.000;</li><li>RP não processados: R$ 1.700.000.</li></ul>'+
      '<p>O valor inscrito como Restos a Pagar era de: <b>R$ 2.000.000</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O comando</span><p>No <b>último ano de mandato</b>, o valor a ser inscrito em RP fica <b>limitado à disponibilidade de caixa</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A armadilha</span><p>A alternativa de R$ 3.200.000 é a soma das despesas empenhadas e não pagas — o que se inscreveria em situação normal. No último ano de mandato, o teto é a disponibilidade de caixa.</p></div>'),
    sl("Rolagem da dívida e rolagem orçamentária",
      '<div class="box"><span class="bl">Rolagem da dívida</span><p>Processo rotineiro de gestão: <b>substituição de dívidas anteriormente emitidas por dívidas novas</b> — pagar uma dívida assumindo outra. São as <b>despesas de refinanciamento</b> da dívida pública.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Governo emite títulos de R$ 1 milhão com vencimento em um ano. Próximo do vencimento, em vez de pagar o total, emite <b>novos títulos</b> de R$ 1 milhão com novo prazo. A dívida foi “rolada para frente”.</p></div>'+
      '<div class="box trap"><span class="bl">Rolagem orçamentária</span><p>Se as inscrições de RP forem <b>superiores aos pagamentos</b>, o <b>estoque</b> de RP cresce e passa a <b>concorrer com o orçamento do ano seguinte</b>. Por isso se diz que a rolagem orçamentária contribui para a <b>descaracterização do orçamento previamente aprovado pelo Legislativo</b> e pode comprometer a capacidade de pagamento em exercícios futuros.</p></div>')
  ],
  m4:[
    sl("Anulação do empenho — art. 35 do Decreto 93.872/86",
      '<div class="box"><span class="bl">A regra</span><p>O empenho de despesa <b>não liquidada</b> será considerado <b>anulado em 31 de dezembro</b>, para todos os fins.</p></div>'+
      '<div class="box tip"><span class="bl">As quatro exceções</span>'+
      '<ul><li><b>Vigente o prazo</b> para cumprimento da obrigação assumida pelo credor;</li>'+
      '<li>Destinar-se a atender <b>transferências a instituições públicas ou privadas</b>;</li>'+
      '<li>Corresponder a <b>compromissos assumidos no exterior</b>;</li>'+
      '<li><b>Vencido o prazo</b>, mas: esteja <b>em curso a liquidação</b>; ou seja de <b>interesse da Administração</b> exigir o cumprimento da obrigação.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A consequência</span><p>A regra é anular todos os empenhos não liquidados. Nas <b>4 situações</b> acima, porém, os empenhos <b>poderão ser inscritos em RPNP</b>.</p></div>'),
    sl("Empenhos com vigência plurianual",
      '<div class="box"><span class="bl">Lei 4.320/64, art. 36, parágrafo único</span><p>Os empenhos que correm à conta de créditos com <b>vigência plurianual</b>, que <b>não tenham sido liquidados</b>, só serão computados como Restos a Pagar <b>no último ano de vigência do crédito</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Liquidado</span><span class="cd">Inscrito em RP <b>em cada ano</b>.</span></div>'+
      '<div class="chip"><span class="cn">Não liquidado</span><span class="cd">Inscrito em RP <b>no último ano de vigência do crédito</b>.</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Construção de prédio com execução de cinco anos. Os valores empenhados e <b>não liquidados</b> só serão considerados RP no <b>quinto ano</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Inversão frequente</span><p>A banca inverte: diz que os <b>liquidados</b> só entram no último ano. Errado — a regra do último ano é dos <b>não liquidados</b>.</p></div>')
  ],
  m5:[
    sl("Despesas de Exercícios Anteriores (DEA)",
      '<p>São despesas cujos <span class="key">fatos geradores ocorreram em exercícios anteriores</span>, mas que só foram <b>empenhadas, liquidadas e pagas no exercício seguinte</b>.</p>'+
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 37</span><p>As despesas de exercícios encerrados, para as quais o orçamento respectivo consignava crédito próprio, com saldo suficiente para atendê-las, que <b>não se tenham processado na época própria</b>, bem como os <b>Restos a Pagar com prescrição interrompida</b> e os <b>compromissos reconhecidos após o encerramento do exercício</b> correspondente poderão ser pagos à conta de <b>dotação específica consignada no orçamento, discriminada por elementos</b>, obedecida, sempre que possível, a <b>ordem cronológica</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Órgão compra e recebe material de escritório em novembro de 2023, mas só empenha em 2024. O fato gerador é de 2023; o empenho, a liquidação e o pagamento são de 2024 → <b>DEA</b>.</p></div>'),
    sl("As três espécies de DEA",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">1</span><span class="nm">Não processadas na época própria</span></div><div class="fn-b"><p>Tinham <b>dotação em exercício encerrado</b>, mas não foram empenhadas na época, ou o empenho foi considerado <b>insubsistente e anulado</b> — e o credor cumpriu a obrigação dentro do prazo.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">2</span><span class="nm">RP com prescrição interrompida</span></div><div class="fn-b"><p>RP que foram <b>cancelados</b>, mas em que <b>permanece o direito do credor</b>, porque o bem já fora entregue ou o serviço prestado.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">3</span><span class="nm">Compromissos reconhecidos após o encerramento</span></div><div class="fn-b"><p>Obrigação de pagamento <b>criada em virtude de lei</b>, cujo <b>direito do reclamante só foi reconhecido após o encerramento</b> do exercício.</p></div></div></div>'+
      '<div class="box tip"><span class="bl">Exemplos do resumo</span>'+
      '<ul><li><b>1ª espécie:</b> contrato de novembro/2023 com entrega até março/2024; o servidor anulou erroneamente o empenho em 31/12/2023. Entregues os computadores no prazo, a despesa é reempenhada, liquidada e paga em 2024 como DEA.</li>'+
      '<li><b>2ª espécie:</b> RP inscrito em 2022, cancelado erroneamente em 2023; em 2024 a Administração reconhece que o serviço fora prestado → reempenho em 2024 como DEA.</li>'+
      '<li><b>3ª espécie:</b> empenho em janeiro/2024 de merenda escolar entregue em dezembro/2023 → DEA de 2024.</li></ul></div>'),
    sl("Não confunda — DEA × RP",
      '<div class="box trap"><span class="bl">A distinção que decide a questão</span>'+
      '<ul><li>Pagamento de <b>DEA</b> = despesa <b>orçamentária</b>. Empenho à custa do <b>orçamento vigente</b>.</li>'+
      '<li>Pagamento de <b>RP</b> = despesa <b>extraorçamentária</b>. Empenho à custa do <b>orçamento do ano anterior</b> (ou de anos anteriores).</li></ul></div>'+
      '<div class="box tip"><span class="bl">O atalho</span><p>Pergunte onde está o <b>empenho</b>. Se o empenho é deste ano, o pagamento é orçamentário (DEA). Se o empenho é de ano passado, o pagamento é extraorçamentário (RP).</p></div>')
  ],
  m6:[
    sl("CF, art. 165, §§ 10 e 11 — o dever de executar",
      '<div class="box"><span class="bl">§ 10</span><p>A administração tem o <b>dever de executar as programações orçamentárias</b>, adotando os meios e as medidas necessários, com o propósito de garantir a <b>efetiva entrega de bens e serviços à sociedade</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Autorizativo ou impositivo?</span><p>O orçamento brasileiro é, em regra, <b>autorizativo</b>. Há corrente doutrinária no sentido de que o § 10, incluído pela <b>EC nº 100/2019</b>, teria transformado sua natureza em <b>impositiva</b> — tese já cobrada em prova.</p></div>'+
      '<div class="box"><span class="bl">§ 11 — as três condições</span>'+
      '<ul><li><b>I</b> — subordina-se ao cumprimento de dispositivos que estabeleçam <b>metas fiscais ou limites de despesas</b> e <b>não impede o cancelamento</b> necessário à abertura de créditos adicionais;</li>'+
      '<li><b>II</b> — <b>não se aplica</b> nos casos de <b>impedimentos de ordem técnica</b> devidamente justificados;</li>'+
      '<li><b>III</b> — aplica-se <b>exclusivamente às despesas primárias discricionárias</b>.</li></ul></div>'),
    sl("CF, art. 166 — emendas parlamentares",
      '<div class="box"><span class="bl">§ 9º — limite das individuais</span><p><b>2% da Receita Corrente Líquida do exercício anterior</b> ao do encaminhamento do projeto, observado que <b>metade desse percentual</b> (1% da RCL) será destinada a <b>ações e serviços públicos de saúde</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 9º-A — a divisão (EC 126/2022)</span><p><b>1,55%</b> às emendas de <b>Deputados</b> · <b>0,45%</b> às de <b>Senadores</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Os números invertidos</span><p>A banca troca 1,55% e 0,45% de lugar. Deputados são mais numerosos → percentual maior.</p></div>'+
      '<div class="box"><span class="bl">§§ 11, 12 e 13 — execução obrigatória</span>'+
      '<ul><li><b>§ 11</b> — é <b>obrigatória a execução</b> das programações oriundas de <b>emendas individuais</b>, no montante do § 9º;</li>'+
      '<li><b>§ 12</b> — a garantia aplica-se também às emendas de <b>bancada</b> de Estado ou do DF, até <b>1% da RCL realizada no exercício anterior</b>;</li>'+
      '<li><b>§ 13</b> — <b>não</b> são de execução obrigatória nos casos de <b>impedimentos de ordem técnica</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">§ 16 — transferências obrigatórias</span><p>Quando destinadas a Estados, DF e Municípios, <b>independem da adimplência</b> do destinatário e <b>não integram a base de cálculo da RCL</b> para os limites de despesa de pessoal do art. 169.</p></div>'),
    sl("CF, art. 166-A — transferências das emendas impositivas",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">I — Transferência especial</span><span class="cd">Recursos <b>livres</b>, sem finalidade pré-definida. Pelo menos <b>70% em despesas de capital</b> (§ 5º).</span></div>'+
      '<div class="chip"><span class="cn">II — Com finalidade definida</span><span class="cd">O parlamentar <b>indica o destino</b> — ação ou projeto específico a ser realizado pelo ente.</span></div></div>'+
      '<div class="box"><span class="bl">§ 1º — o que os recursos não fazem</span>'+
      '<p>Não integram a receita do ente para <b>repartição</b>, para os <b>limites de despesa com pessoal</b> e de <b>endividamento</b>. Vedada, em qualquer caso, a aplicação no pagamento de:</p>'+
      '<ul><li><b>I</b> — despesas com <b>pessoal e encargos sociais</b> (ativos, inativos e pensionistas);</li>'+
      '<li><b>II</b> — <b>encargos referentes ao serviço da dívida</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">§ 2º — como funciona a transferência especial</span>'+
      '<ul><li><b>I</b> — repassados <b>diretamente</b> ao ente, <b>independentemente de convênio</b> ou instrumento congênere;</li>'+
      '<li><b>II</b> — <b>pertencerão ao ente no ato da efetiva transferência financeira</b>;</li>'+
      '<li><b>III</b> — aplicados em <b>programações finalísticas</b> das áreas de competência do Poder Executivo do ente beneficiado.</li></ul></div>')
  ]
};

var EX = {
i1:{t:"gap", instr:"Complete a frase",
  before:"Restos a Pagar são as despesas regularmente empenhadas, do exercício atual ou anterior, mas não pagas até ",
  after:" do exercício financeiro vigente.",
  options:["31 de dezembro","30 de novembro","31 de janeiro seguinte"], answer:0,
  why:"A data de corte é sempre o encerramento do exercício."},

i2:{t:"match", instr:"Correlacione o evento à sua natureza",
  pairs:[["Inscrição em Restos a Pagar","Receita extraorçamentária"],
         ["Pagamento de Restos a Pagar","Despesa extraorçamentária"],
         ["Pagamento de DEA","Despesa orçamentária"]]},

i3:{t:"mc", instr:"Os Restos a Pagar integram qual espécie de dívida pública?",
  options:["Dívida flutuante","Dívida consolidada","Dívida fundada","Dívida mobiliária"], answer:0,
  why:"São dívida de curto prazo, não consolidada nem fundada."},

i4:{t:"sort", instr:"Classifique cada despesa em 31/12",
  buckets:["RP processados","RP não processados"],
  items:[["Despesa empenhada e liquidada, não paga",0],
         ["Precatório emitido em maio, a pagar em janeiro",0],
         ["Vacinas recebidas e verificadas em 29/12, pagamento em 19/01",0],
         ["Despesa empenhada com prazo do credor ainda vigente",1],
         ["Obra concluída, mas documentação do credor ainda em verificação",1],
         ["Despesa apenas empenhada, sem liquidação",1]],
  why:"O divisor é a <b>liquidação</b>: passou por ela, é processado."},

i5:{t:"wordbank", instr:"Monte o conceito de Restos a Pagar processados",
  target:["despesas","liquidadas","e","não","pagas","no","exercício","financeiro"],
  extra:["empenhadas","a","liquidar","canceladas"],
  why:"Liquidadas e não pagas — objeto prestado pelo fornecedor e aceito pela Administração (art. 63 da Lei 4.320/64)."},

i6:{t:"multi", instr:"Marque o que é verdadeiro sobre os RP processados",
  options:["São despesas empenhadas e liquidadas, mas não pagas",
           "Não podem ser cancelados, salvo motivo previsto na legislação",
           "Precatórios a pagar no exercício seguinte neles se enquadram",
           "O objeto já foi prestado pelo fornecedor e aceito pela Administração",
           "Podem ser cancelados livremente pela Administração",
           "Correspondem às despesas apenas empenhadas"],
  answers:[0,1,2,3],
  why:"As duas últimas descrevem os RP <b>não</b> processados."},

i7:{t:"mc", instr:"Por que os precatórios inscritos ao fim do exercício são RP processados?",
  options:["Porque, sendo pagamentos por sentença judicial, já passaram pela liquidação",
           "Porque possuem dotação específica no orçamento",
           "Porque são pagos em ordem cronológica",
           "Porque não podem ser cancelados"],
  answer:0,
  why:"A liquidação é a verificação do direito adquirido pelo credor — e a sentença já o reconheceu."},

i8:{t:"match", instr:"Correlacione a espécie de RPNP à sua definição",
  pairs:[["Em liquidação","Fato gerador ocorreu; direito do credor em verificação"],
         ["A liquidar","Prazo do credor vigente; fato gerador ainda não ocorreu"]]},

i9:{t:"gap", instr:"Complete a frase",
  before:"Na despesa a liquidar, o prazo para cumprimento da obrigação assumida pelo credor está vigente — ou seja, ",
  after:" da obrigação.",
  options:["ainda não houve o fato gerador","já ocorreu o fato gerador","já houve a liquidação"],
  answer:0,
  why:"É esse o ponto que a banca inverte na pegadinha mais cobrada do módulo."},

i10:{t:"mc", instr:"“A inscrição de RPNP a liquidar ocorre quando tiver ocorrido o fato gerador da obrigação, sem que se tenha procedido a liquidação.” Esse enunciado:",
  options:["Está errado — descreve o RPNP em liquidação",
           "Está certo — é a definição legal de despesa a liquidar",
           "Está errado — descreve o RP processado",
           "Está certo, desde que o prazo do credor esteja vencido"],
  answer:0,
  why:"Fato gerador ocorrido + liquidação pendente = <b>em liquidação</b>."},

i11:{t:"sort", instr:"Cada situação é despesa em liquidação ou a liquidar?",
  buckets:["Em liquidação","A liquidar"],
  items:[["Obra concluída ao fim do ano; empresa não entregou a documentação",0],
         ["Material entregue em 28/12, direito do credor ainda em verificação",0],
         ["Reforma contratada em outubro, prazo de 6 meses, obra em andamento",1],
         ["Contrato assinado em dezembro, entrega prevista para março",1]],
  why:"Pergunte apenas: o serviço já foi prestado? Se sim, em liquidação."},

i12:{t:"multi", instr:"Marque o que é verdadeiro sobre os RP não processados",
  options:["São despesas empenhadas e não liquidadas",
           "Podem ser cancelados",
           "Dividem-se em despesas em liquidação e a liquidar",
           "Nem todos geram obrigação financeira para o Estado",
           "Não podem ser cancelados em nenhuma hipótese",
           "Pressupõem que o objeto já foi aceito pela Administração"],
  answers:[0,1,2,3],
  why:"As duas últimas são características dos RP <b>processados</b>."},

i13:{t:"order", instr:"Ordene a sequência que define onde a despesa parou em 31/12",
  items:["Empenho","Liquidação","Pagamento"],
  why:"Parou antes da liquidação → RPNP. Passou por ela e não foi paga → RPP."},

i14:{t:"mc", instr:"Despesa empenhada e não paga de R$ 900, com liquidação de R$ 700. A inscrição em RP será de:",
  options:["R$ 900, sendo R$ 700 de RPP e R$ 200 de RPNP",
           "R$ 700, apenas de RPP",
           "R$ 200, apenas de RPNP",
           "R$ 1.600, somando os dois valores"],
  answer:0,
  why:"Inscreve-se tudo o que foi empenhado e não pago. A parte liquidada é RPP; o restante, RPNP."},

i15:{t:"gap", instr:"Complete a frase",
  before:"É vedado ao titular de Poder, nos ",
  after:" do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele.",
  options:["últimos dois quadrimestres","último quadrimestre","último exercício financeiro"],
  answer:0,
  why:"Art. 42 da LRF. A troca por “último quadrimestre” é o erro mais plantado."},

i16:{t:"mc", instr:"Disponibilidade de caixa de R$ 2.000.000 e despesas empenhadas não pagas de R$ 3.200.000, no último ano de mandato. O valor inscrito em RP é:",
  options:["R$ 2.000.000","R$ 3.200.000","R$ 1.700.000","R$ 1.500.000"],
  answer:0,
  why:"No último ano de mandato a inscrição fica <b>limitada à disponibilidade de caixa</b>. R$ 3.200.000 é a pegadinha."},

i17:{t:"multi", instr:"Marque o que se aplica ao art. 42 da LRF",
  options:["Alcança os últimos dois quadrimestres do mandato",
           "Veda contrair obrigação sem suficiente disponibilidade de caixa",
           "Na disponibilidade de caixa consideram-se os encargos e despesas compromissadas a pagar até o final do exercício",
           "A LRF não disciplina o mérito do que pode ser inscrito em RP",
           "Proíbe qualquer inscrição em Restos a Pagar no último ano de mandato",
           "Aplica-se somente ao Poder Executivo"],
  answers:[0,1,2,3],
  why:"Não há proibição total de inscrição, e a vedação alcança o titular de <b>qualquer</b> Poder ou órgão do art. 20."},

i18:{t:"wordbank", instr:"Monte o conceito de rolagem da dívida",
  target:["substituição","de","dívidas","anteriores","por","dívidas","novas"],
  extra:["cancelamento","prescrição","interrompida"],
  why:"Pagar uma dívida assumindo outra — são as despesas de refinanciamento da dívida pública."},

i19:{t:"mc", instr:"A rolagem orçamentária é criticada porque:",
  options:["O estoque de RP concorre com o orçamento do ano seguinte, descaracterizando o aprovado pelo Legislativo",
           "Aumenta a dívida consolidada do ente",
           "Impede a abertura de créditos adicionais",
           "Transforma despesa extraorçamentária em orçamentária"],
  answer:0,
  why:"O problema da indisposição financeira é passado (rolado) para frente."},

i20:{t:"gap", instr:"Complete a frase",
  before:"O empenho de despesa não liquidada será considerado ",
  after:", para todos os fins, salvo as exceções do art. 35 do Decreto nº 93.872/1986.",
  options:["anulado em 31 de dezembro","inscrito em RPP","prorrogado por um exercício"],
  answer:0,
  why:"A regra é a anulação; a inscrição em RPNP é a exceção."},

i21:{t:"multi", instr:"Marque as exceções à anulação do empenho não liquidado (art. 35)",
  options:["Vigente o prazo para cumprimento da obrigação assumida pelo credor",
           "Destinar-se a transferências a instituições públicas ou privadas",
           "Corresponder a compromissos assumidos no exterior",
           "Vencido o prazo, esteja em curso a liquidação ou seja de interesse da Administração exigir o cumprimento",
           "Tratar-se de despesa de capital",
           "Haver disponibilidade de caixa suficiente"],
  answers:[0,1,2,3],
  why:"São exatamente quatro. Nessas hipóteses os empenhos poderão ser inscritos em RPNP."},

i22:{t:"sort", instr:"Empenho plurianual: quando vira Restos a Pagar?",
  buckets:["Em cada ano","Só no último ano de vigência do crédito"],
  items:[["Empenho plurianual já liquidado",0],["Empenho plurianual não liquidado",1]],
  why:"Art. 36, parágrafo único, da Lei nº 4.320/1964. A banca inverte os dois."},

i23:{t:"gap", instr:"Complete a frase",
  before:"Os empenhos plurianuais não liquidados só serão computados como Restos a Pagar ",
  after:".",
  options:["no último ano de vigência do crédito","em cada exercício financeiro","no primeiro ano do crédito"],
  answer:0,
  why:"Os liquidados é que são inscritos em cada ano."},

i24:{t:"wordbank", instr:"Monte o conceito de Despesas de Exercícios Anteriores",
  target:["fatos","geradores","ocorreram","em","exercícios","anteriores"],
  extra:["empenho","extraorçamentária","flutuante"],
  why:"O empenho, a liquidação e o pagamento, porém, ocorrem no exercício seguinte."},

i25:{t:"multi", instr:"Marque as espécies de DEA do art. 37 da Lei nº 4.320/1964",
  options:["Despesas de exercícios encerrados que não se tenham processado na época própria",
           "Restos a Pagar com prescrição interrompida",
           "Compromissos reconhecidos após o encerramento do exercício",
           "Restos a Pagar processados não pagos",
           "Despesas empenhadas por estimativa"],
  answers:[0,1,2],
  why:"São três incisos, nada além."},

i26:{t:"gap", instr:"Complete a frase",
  before:"As DEA poderão ser pagas à conta de ",
  after:", discriminada por elementos, obedecida, sempre que possível, a ordem cronológica.",
  options:["dotação específica consignada no orçamento","crédito extraordinário","reserva de contingência"],
  answer:0,
  why:"Literalidade do art. 37."},

i27:{t:"match", instr:"Correlacione a espécie de DEA ao seu exemplo",
  pairs:[["Não processada na época própria","Empenho anulado erroneamente em 31/12; credor entrega no prazo"],
         ["RP com prescrição interrompida","RP cancelado, mas o serviço havia sido prestado"],
         ["Compromisso reconhecido após o encerramento","Merenda entregue em dezembro, empenhada em janeiro"]]},

i28:{t:"sort", instr:"O pagamento é orçamentário ou extraorçamentário?",
  buckets:["Despesa orçamentária","Despesa extraorçamentária"],
  items:[["Pagamento de DEA",0],["Pagamento de Restos a Pagar",1],
         ["Empenho à custa do orçamento vigente",0],["Empenho à custa do orçamento de ano anterior",1]],
  why:"Pergunte onde está o empenho: deste ano → orçamentária; de ano passado → extraorçamentária."},

i29:{t:"mc", instr:"RP que foram cancelados, mas em que permanece o direito do credor porque o bem já fora entregue, chamam-se:",
  options:["Restos a Pagar com prescrição interrompida","Restos a Pagar processados",
           "Despesas em liquidação","Compromissos reconhecidos após o encerramento"],
  answer:0,
  why:"São reempenhados no exercício em curso sob a classificação de DEA."},

i30:{t:"multi", instr:"Marque o que dispõe o art. 165, § 11, da Constituição Federal",
  options:["Subordina-se a dispositivos que estabeleçam metas fiscais ou limites de despesas",
           "Não impede o cancelamento necessário à abertura de créditos adicionais",
           "Não se aplica nos casos de impedimentos de ordem técnica devidamente justificados",
           "Aplica-se exclusivamente às despesas primárias discricionárias",
           "Aplica-se a todas as despesas, primárias e financeiras",
           "Impede qualquer cancelamento de dotação no exercício"],
  answers:[0,1,2,3],
  why:"Três incisos. As duas últimas alternativas contrariam os incisos III e I."},

i31:{t:"gap", instr:"Complete a frase",
  before:"As emendas individuais ao projeto de lei orçamentária serão aprovadas no limite de ",
  after:" da Receita Corrente Líquida do exercício anterior ao do encaminhamento do projeto.",
  options:["2%","1%","1,55%"], answer:0,
  why:"Metade desse percentual (1% da RCL) vai obrigatoriamente para ações e serviços públicos de saúde."},

i32:{t:"match", instr:"Correlacione o percentual ao seu destinatário ou finalidade",
  pairs:[["Emendas de Deputados","1,55% da RCL"],
         ["Emendas de Senadores","0,45% da RCL"],
         ["Emendas de bancada","Até 1% da RCL realizada no exercício anterior"],
         ["Saúde, dentro das emendas individuais","Metade do limite de 2%"]]},

i33:{t:"mc", instr:"A execução das emendas individuais e de bancada deixa de ser obrigatória:",
  options:["Nos casos de impedimentos de ordem técnica","Em ano eleitoral",
           "Quando houver déficit primário","Mediante autorização do Tribunal de Contas"],
  answer:0,
  why:"Art. 166, § 13."},

i34:{t:"multi", instr:"Marque o que a CF determina sobre a transferência especial (art. 166-A)",
  options:["Os recursos são livres, sem finalidade pré-definida",
           "Pelo menos 70% devem ser aplicados em despesas de capital",
           "O repasse é direto, independentemente de convênio",
           "Os recursos pertencem ao ente no ato da efetiva transferência financeira",
           "Exige-se celebração prévia de convênio com a União",
           "Os recursos podem ser aplicados no pagamento de pessoal e encargos"],
  answers:[0,1,2,3],
  why:"O § 2º dispensa o convênio e o § 1º veda a aplicação em pessoal e no serviço da dívida."},

i35:{t:"order", instr:"Ordene a trajetória de uma despesa que se torna DEA",
  items:["Fato gerador ocorre no exercício anterior",
         "Empenho no exercício seguinte, à custa do orçamento vigente",
         "Liquidação no exercício seguinte",
         "Pagamento como despesa orçamentária"],
  why:"É o que separa a DEA do RP: no RP o empenho já existia no exercício anterior."},

i36:{t:"gap", instr:"Complete a frase",
  before:"A transferência obrigatória da União para a execução de emendas destinada a Estados, DF e Municípios ",
  after:" do ente federativo destinatário.",
  options:["independerá da adimplência","dependerá da adimplência","exigirá certidão negativa"],
  answer:0,
  why:"Art. 166, § 16 — e tampouco integra a base de cálculo da RCL para os limites de despesa de pessoal."},

i37:{t:"mc", instr:"Qual afirmação sobre os Restos a Pagar é VERDADEIRA?",
  options:["Os não processados podem ser cancelados; os processados, em regra, não",
           "Ambos podem ser cancelados livremente",
           "Nenhum dos dois pode ser cancelado",
           "Os processados podem ser cancelados; os não processados, não"],
  answer:0,
  why:"Daí decorre que nem todos os RP geram obrigação financeira para o Estado."},

i38:{t:"wordbank", instr:"Monte a regra do art. 42 da LRF",
  target:["nos","últimos","dois","quadrimestres","do","seu","mandato"],
  extra:["primeiro","semestre","exercício"],
  why:"É a janela em que o titular de Poder não pode contrair obrigação sem disponibilidade de caixa."}
};

for(var i=0;i<QS.length;i++) EX["w"+i]={t:"ce", qi:i};

var KIT = {
  s1:{tema:"Restos a Pagar — conceito e espécies",
    bases:["Lei nº 4.320/1964, art. 36 — inscrição em Restos a Pagar",
           "Lei nº 4.320/1964, art. 63 — liquidação (critério dos processados)",
           "Decreto nº 93.872/1986, art. 35 — anulação do empenho não liquidado",
           "MCASP — despesas em liquidação e a liquidar"],
    ouro:["despesas regularmente empenhadas","não pagas até 31 de dezembro",
          "receita extraorçamentária","despesa extraorçamentária","dívida pública flutuante",
          "processados e não processados","despesas liquidadas e não pagas",
          "não podem ser cancelados, salvo motivo legal","podem ser cancelados"],
    abertura:"Restos a Pagar são todas as despesas regularmente empenhadas, do exercício atual ou de exercícios anteriores, mas não pagas até 31 de dezembro do exercício financeiro vigente, cuja inscrição constitui receita extraorçamentária e cujo pagamento, no exercício seguinte, constitui despesa extraorçamentária.",
    evite:"Não classifique os Restos a Pagar como dívida consolidada ou fundada. São dívida <b>flutuante</b> — e essa troca é frequente no enunciado."},
  s2:{tema:"RPNP — em liquidação e a liquidar",
    bases:["MCASP — Parte I, despesa em liquidação e despesa a liquidar",
           "Lei nº 4.320/1964, art. 63 — verificação do direito adquirido pelo credor",
           "Decreto nº 93.872/1986, art. 35 — hipóteses de inscrição em RPNP"],
    ouro:["fato gerador da obrigação","fase de verificação do direito adquirido pelo credor",
          "prazo para cumprimento da obrigação assumida pelo credor","vigente",
          "despesa em liquidação","despesa a liquidar","podem ser cancelados",
          "nem todos os Restos a Pagar geram obrigações financeiras"],
    abertura:"Os Restos a Pagar não processados compreendem as despesas empenhadas e não liquidadas, subdividindo-se em despesas em liquidação, quando o fato gerador já ocorreu e a despesa se encontra, em 31 de dezembro, em fase de verificação do direito adquirido pelo credor, e despesas a liquidar, quando o prazo para cumprimento da obrigação assumida pelo credor ainda se encontra vigente.",
    evite:"Não associe o fato gerador ocorrido à despesa <b>a liquidar</b>. É a inversão mais cobrada do tema — com fato gerador ocorrido, a hipótese é de despesa <b>em liquidação</b>."},
  s3:{tema:"Fim de mandato, anulação e empenhos plurianuais",
    bases:["LC nº 101/2000, art. 42 e parágrafo único — vedação no fim do mandato",
           "Decreto nº 93.872/1986, art. 35 — anulação do empenho não liquidado",
           "Lei nº 4.320/1964, art. 36, parágrafo único — créditos plurianuais",
           "LC nº 101/2000, art. 20 — titulares de Poder e órgão"],
    ouro:["últimos dois quadrimestres do seu mandato","suficiente disponibilidade de caixa",
          "encargos e despesas compromissadas a pagar até o final do exercício",
          "heranças fiscais onerosas","limitado à disponibilidade de caixa",
          "anulado em 31 de dezembro","compromissos assumidos no exterior",
          "último ano de vigência do crédito","despesas de refinanciamento"],
    abertura:"Embora a Lei de Responsabilidade Fiscal não discipline o mérito do que pode ser inscrito em Restos a Pagar, seu art. 42 veda ao titular de Poder ou órgão, nos últimos dois quadrimestres do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte sem suficiente disponibilidade de caixa.",
    evite:"Não escreva “último quadrimestre” nem “último ano” ao citar o art. 42. São os <b>últimos dois quadrimestres</b>, e o examinador confere essa expressão."},
  s4:{tema:"DEA e dispositivos constitucionais",
    bases:["Lei nº 4.320/1964, art. 37 — despesas de exercícios anteriores",
           "CF/1988, art. 165, §§ 10 e 11 — dever de executar as programações",
           "CF/1988, art. 166, §§ 9º, 9º-A, 11, 12, 13 e 16 — emendas parlamentares",
           "CF/1988, art. 166-A — transferência especial e com finalidade definida",
           "EC nº 100/2019 e EC nº 126/2022"],
    ouro:["fatos geradores ocorreram em exercícios anteriores",
          "dotação específica consignada no orçamento","discriminada por elementos",
          "ordem cronológica","prescrição interrompida","despesa orçamentária",
          "orçamento vigente","despesas primárias discricionárias",
          "impedimentos de ordem técnica devidamente justificados",
          "Receita Corrente Líquida do exercício anterior","execução obrigatória"],
    abertura:"Despesas de Exercícios Anteriores, na dicção do art. 37 da Lei nº 4.320/1964, são aquelas cujos fatos geradores ocorreram em exercícios anteriores, mas que somente foram empenhadas, liquidadas e pagas no exercício seguinte, podendo ser pagas à conta de dotação específica consignada no orçamento, discriminada por elementos, obedecida, sempre que possível, a ordem cronológica.",
    evite:"Não diga que o pagamento de DEA é despesa extraorçamentária. É <b>orçamentária</b> — o empenho corre à custa do orçamento vigente, e essa é a distinção que o espelho cobra."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de altíssima incidência: <b>49 questões</b> no caderno do TJPR. Cada distinção citada com o artigo correto é ponto.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre os Restos a Pagar e as Despesas de Exercícios Anteriores, disserte necessariamente sobre:</p>'+
  '<ol><li>o conceito de Restos a Pagar, sua natureza orçamentária e as duas espécies, com o critério que as distingue;</li>'+
  '<li>a possibilidade de cancelamento de cada espécie e a vedação do art. 42 da Lei de Responsabilidade Fiscal;</li>'+
  '<li>o conceito e as espécies de Despesas de Exercícios Anteriores e sua distinção em relação aos Restos a Pagar.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>Restos a Pagar são todas as <b>despesas regularmente empenhadas</b>, do exercício atual ou de exercícios anteriores, mas <b>não pagas até 31 de dezembro</b> do exercício financeiro vigente. Sua <b>inscrição constitui receita extraorçamentária</b> e o respectivo <b>pagamento, no exercício seguinte, despesa extraorçamentária</b>, porquanto o empenho correu à conta de orçamento pretérito. Integram, ademais, a <b>dívida pública flutuante</b>, e não a dívida consolidada ou fundada. Distinguem-se duas espécies segundo o estágio em que a despesa se encontrava em 31 de dezembro. Os <b>Restos a Pagar processados</b> correspondem às despesas empenhadas e <b>liquidadas</b> e não pagas, isto é, aquelas em que o objeto foi prestado pelo fornecedor e aceito pela Administração, na forma do art. 63 da Lei nº 4.320/1964. Os <b>Restos a Pagar não processados</b> correspondem às despesas empenhadas e <b>não liquidadas</b>, subdividindo-se em despesas <b>em liquidação</b>, quando o fato gerador já ocorreu e a despesa se encontra em fase de verificação do direito adquirido pelo credor, e despesas <b>a liquidar</b>, quando ainda vigente o prazo para cumprimento da obrigação assumida pelo credor e, portanto, ainda não ocorrido o fato gerador.</p>'+
  '<p>Quanto ao <b>cancelamento</b>, os Restos a Pagar processados <b>não podem ser cancelados</b>, salvo motivo previsto na legislação pertinente, uma vez que o credor satisfez a obrigação de fazer e a Administração a conferiu, não lhe sendo dado furtar-se à obrigação de pagar. Os não processados, ao revés, <b>podem ser cancelados</b>, razão pela qual se afirma que <b>nem todos os Restos a Pagar geram obrigação financeira para o Estado</b>. Sobre a matéria incide ainda o art. 35 do Decreto nº 93.872/1986, segundo o qual o empenho de despesa não liquidada é considerado anulado em 31 de dezembro, salvo quando vigente o prazo para cumprimento da obrigação, quando se destine a transferências a instituições públicas ou privadas, quando corresponda a compromissos assumidos no exterior e quando, vencido o prazo, esteja em curso a liquidação ou seja de interesse da Administração exigir o cumprimento — hipóteses em que os empenhos poderão ser inscritos em Restos a Pagar não processados. No plano fiscal, o <b>art. 42 da LRF</b> veda ao titular de Poder ou órgão, nos <b>últimos dois quadrimestres do seu mandato</b>, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a pagar no exercício seguinte sem <b>suficiente disponibilidade de caixa</b>, considerados, na determinação desta, os encargos e despesas compromissadas a pagar até o final do exercício. Daí decorre que, no último ano de mandato, a inscrição em Restos a Pagar fica <b>limitada à disponibilidade de caixa</b>, eliminando-se as heranças fiscais onerosas.</p>'+
  '<p>As <b>Despesas de Exercícios Anteriores</b>, por sua vez, são aquelas cujos <b>fatos geradores ocorreram em exercícios anteriores</b>, mas que só foram empenhadas, liquidadas e pagas no exercício seguinte. O art. 37 da Lei nº 4.320/1964 arrola três espécies: as despesas de exercícios encerrados que <b>não se tenham processado na época própria</b>, para as quais o orçamento respectivo consignava crédito próprio com saldo suficiente; os <b>Restos a Pagar com prescrição interrompida</b>, cancelados, mas em que subsiste o direito do credor por já haver entregue o bem ou prestado o serviço; e os <b>compromissos reconhecidos após o encerramento do exercício</b> correspondente. Todas poderão ser pagas à conta de <b>dotação específica consignada no orçamento, discriminada por elementos</b>, obedecida, sempre que possível, a <b>ordem cronológica</b>.</p>'+
  '<p>A distinção em relação aos Restos a Pagar é de natureza orçamentária e decide a questão: o pagamento de Despesas de Exercícios Anteriores é <b>despesa orçamentária</b>, pois o empenho ocorre à custa do <b>orçamento vigente</b>; o pagamento de Restos a Pagar é <b>despesa extraorçamentária</b>, pois o empenho ocorreu à custa do orçamento de exercício anterior.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> conceito completo (inclusive “ou anterior”), as duas naturezas extraorçamentárias, a dívida flutuante e o critério da liquidação, com as duas subespécies de RPNP.</li>'+
  '<li><b>Item 2:</b> o contraste de cancelamento, a conclusão sobre a obrigação financeira e a citação literal dos “últimos dois quadrimestres” com a disponibilidade de caixa.</li>'+
  '<li><b>Item 3:</b> os três incisos do art. 37 nomeados e a forma de pagamento (dotação específica, por elementos, ordem cronológica).</li>'+
  '<li><b>Fecho:</b> orçamentária × extraorçamentária, ancorada em <b>onde está o empenho</b>. Sem isso a resposta não fecha.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o artigo entre parênteses em vez de parágrafo explicativo.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Em 31 de dezembro, determinado tribunal apresentava a seguinte situação, no último ano do mandato do titular do Poder:</p>'+
  '<ol><li>despesas empenhadas e não pagas no total de R$ 5.000.000, das quais R$ 3.000.000 já liquidadas;</li>'+
  '<li>disponibilidade de caixa de R$ 4.200.000, já deduzidos os encargos e despesas compromissadas a pagar até o final do exercício;</li>'+
  '<li>empenho de R$ 400.000 relativo a contrato de fornecimento cujo prazo de entrega vence em março do exercício seguinte, que o setor competente pretende anular em 31 de dezembro;</li>'+
  '<li>material de expediente recebido em novembro do exercício anterior, jamais empenhado, cujo fornecedor agora cobra o pagamento.</li></ol>'+
  '<p><b>Pergunta-se:</b> classifique os Restos a Pagar do item 1, indique o limite de inscrição diante do item 2, avalie a providência do item 3 e classifique a despesa do item 4, com fundamento legal.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Classificação dos Restos a Pagar.</b> Do total de R$ 5.000.000 empenhados e não pagos, R$ 3.000.000 correspondem a <b>Restos a Pagar processados</b>, por já terem passado pela liquidação (art. 63 da Lei nº 4.320/1964), e R$ 2.000.000 a <b>Restos a Pagar não processados</b>, por diferença. Os processados <b>não podem ser cancelados</b>, salvo motivo previsto na legislação; os não processados <b>podem</b>.</p>'+
  '<p><b>2. Limite de inscrição.</b> Tratando-se do último ano de mandato, incide o <b>art. 42 da LRF</b>: a inscrição fica <b>limitada à disponibilidade de caixa</b>, de modo que o valor inscrito é de <b>R$ 4.200.000</b>, e não os R$ 5.000.000 empenhados e não pagos. Como os processados não podem ser cancelados, o ajuste de R$ 800.000 deve recair sobre os <b>não processados</b>, que se reduzem a R$ 1.200.000. Na determinação da disponibilidade de caixa já se consideraram os encargos e despesas compromissadas a pagar até o final do exercício (art. 42, parágrafo único).</p>'+
  '<p><b>3. Empenho com prazo de entrega vincendo.</b> A providência é <b>incabível</b>. Embora o art. 35 do Decreto nº 93.872/1986 determine a anulação, em 31 de dezembro, do empenho de despesa não liquidada, a primeira de suas quatro ressalvas é justamente estar <b>vigente o prazo para cumprimento da obrigação assumida pelo credor</b>. Logo, o empenho de R$ 400.000 <b>não deve ser anulado</b>, e sim <b>inscrito em Restos a Pagar não processados, na modalidade a liquidar</b>, pois ainda não ocorreu o fato gerador.</p>'+
  '<p><b>4. Material recebido e jamais empenhado.</b> Trata-se de <b>Despesa de Exercícios Anteriores</b>, na espécie <b>despesa que não se processou na época própria</b> (art. 37 da Lei nº 4.320/1964). Deverá ser <b>empenhada, liquidada e paga no exercício vigente</b>, à conta de <b>dotação específica consignada no orçamento, discriminada por elementos</b>, obedecida a ordem cronológica. Por consequência, seu pagamento é <b>despesa orçamentária</b>, e não extraorçamentária como o dos Restos a Pagar.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Inscrever os R$ 5.000.000 integrais no <b>1</b>/<b>2</b>. No último ano de mandato o teto é a disponibilidade de caixa.</li>'+
  '<li>Cortar os <b>processados</b> para ajustar ao caixa. Eles não podem ser cancelados — o corte recai nos não processados.</li>'+
  '<li>Validar a anulação do <b>3</b> pela regra geral, ignorando a primeira ressalva do art. 35.</li>'+
  '<li>Chamar o <b>4</b> de Restos a Pagar. Sem empenho anterior não há RP: é DEA, e o pagamento é orçamentário.</li></ul></div>';

var TEC = [["CESPE","Q3cQIO"],["FCC","Q3cQIj"],["FGV","Q3cQJG"],["VUNESP","Q3cQJW"]];

var UNITS = [
  {n:1, title:"Restos a Pagar — conceito e espécies", cvar:"u1", lessons:[
    {id:"p1", type:"teoria", title:"Conceito e natureza",              xp:10, data:"m1"},
    {id:"p2", type:"drill",  title:"Praticar · conceito",              xp:20, data:["i1","i3","w0","w1","w4"]},
    {id:"p3", type:"drill",  title:"Praticar · natureza orçamentária", xp:20, data:["i2","i13","w2","w3"]},
    {id:"p4", type:"teoria", title:"RPP, RPNP e o quadro comparativo", xp:10, data:"m2"},
    {id:"p5", type:"drill",  title:"Praticar · processados",           xp:20, data:["i4","i5","i6","i7","w5","w6","w7"]},
    {id:"p6", type:"drill",  title:"Praticar · não processados",       xp:25, data:["i8","i9","i11","i12","w8","w9","w11"]},
    {id:"p7", type:"drill",  title:"Praticar · a pegadinha do módulo", xp:25, data:["i10","i37","w10","w12","w13"]},
    {id:"p8", type:"drill",  title:"Praticar · exemplo numérico",      xp:20, data:["i14","w14"]},
    {id:"p9", type:"flash",  title:"Flashcards · conceito e espécies", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]},
    {id:"p10",type:"feynman",title:"Explique os Restos a Pagar",       xp:30, data:"s1"},
    {id:"p11",type:"feynman",title:"Explique RPNP em liquidação e a liquidar", xp:30, data:"s2"}
  ]},
  {n:2, title:"Fim de mandato, anulação e plurianual", cvar:"u2", lessons:[
    {id:"p13",type:"teoria", title:"Art. 42 da LRF e a questão numérica", xp:10, data:"m3"},
    {id:"p14",type:"drill",  title:"Praticar · art. 42 da LRF",        xp:20, data:["i15","i17","i38","w15","w16","w17","w18"]},
    {id:"p15",type:"drill",  title:"Praticar · limite de inscrição",   xp:25, data:["i16","w19"]},
    {id:"p16",type:"drill",  title:"Praticar · rolagem",               xp:20, data:["i18","i19","w20","w21"]},
    {id:"p17",type:"teoria", title:"Anulação do empenho e plurianual", xp:10, data:"m4"},
    {id:"p18",type:"drill",  title:"Praticar · anulação do empenho",   xp:25, data:["i20","i21","w22","w23","w24","w25","w26","w27"]},
    {id:"p19",type:"drill",  title:"Praticar · empenhos plurianuais",  xp:20, data:["i22","i23","w28","w29"]},
    {id:"p20",type:"flash",  title:"Flashcards · limites e anulação",  xp:15, data:[14,15,16,17,18,19,20,21,22,23,24]},
    {id:"p21",type:"feynman",title:"Explique o art. 42 e a anulação",  xp:30, data:"s3"}
  ]},
  {n:3, title:"DEA e dispositivos constitucionais", cvar:"u3", lessons:[
    {id:"p23",type:"teoria", title:"DEA — conceito e art. 37",         xp:10, data:"m5"},
    {id:"p24",type:"drill",  title:"Praticar · conceito de DEA",       xp:20, data:["i24","i25","i26","w30","w31","w32"]},
    {id:"p25",type:"drill",  title:"Praticar · espécies de DEA",       xp:25, data:["i27","i29","w34","w35"]},
    {id:"p26",type:"drill",  title:"Praticar · DEA × RP",              xp:25, data:["i28","i35","w33"]},
    {id:"p27",type:"teoria", title:"CF — arts. 165, 166 e 166-A",      xp:10, data:"m6"},
    {id:"p28",type:"drill",  title:"Praticar · dever de executar",     xp:20, data:["i30","w36","w37","w38","w39"]},
    {id:"p29",type:"drill",  title:"Praticar · emendas parlamentares", xp:25, data:["i31","i32","i33","w40","w41","w42","w43"]},
    {id:"p30",type:"drill",  title:"Praticar · transferências",        xp:25, data:["i34","i36","w44","w45","w46","w47"]},
    {id:"p31",type:"flash",  title:"Flashcards · DEA e Constituição",  xp:15, data:[25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]},
    {id:"p32",type:"feynman",title:"Explique as DEA",                  xp:30, data:"s4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"p34",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"p35",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"prev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"p36",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"p37",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a definição de abertura do Resumo: são Restos a Pagar todas as despesas <b>regularmente empenhadas</b>, do <b>exercício atual ou anterior</b>, mas <b>não pagas até 31 de dezembro</b> do exercício financeiro vigente.</p><p>Guarde já a divisão que vem logo em seguida: <b>processados</b> (despesas já liquidadas) e <b>não processados</b> (despesas a liquidar ou em liquidação).</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar (RP)</i></p>",
1:"<p>Errado — o conceito do Resumo é expresso ao dizer <b>do exercício atual ou anterior</b>.</p><p>Ou seja, o empenho não precisa ser do próprio exercício da inscrição; empenhos de exercícios anteriores ainda não pagos continuam em Restos a Pagar. O que define a inscrição é a despesa estar <b>regularmente empenhada e não paga até 31 de dezembro</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar (RP)</i></p>",
2:"<p>Certo. É o esquema do Resumo: a <b>inscrição</b> em Restos a Pagar é <b>receita extraorçamentária</b>.</p><p>Complete o par do mesmo quadro: o <b>pagamento</b> de Restos a Pagar é <b>despesa extraorçamentária</b>, e os RP são considerados <b>dívida pública flutuante</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar — esquema</i></p>",
3:"<p>Errado por uma palavra: o pagamento de Restos a Pagar é despesa <b>extraorçamentária</b>, não orçamentária.</p><p>A razão está no quadro <b>NÃO CONFUNDA</b> do Resumo: no RP, o empenho <b>já ocorreu à custa do orçamento do ano anterior</b>. Quem gera despesa <b>orçamentária</b> no pagamento é a <b>DEA</b>, cujo empenho corre à custa do orçamento vigente.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>NÃO CONFUNDA — DEA x Restos a Pagar</i></p>",
4:"<p>Errado. O esquema do Resumo classifica os Restos a Pagar como <b>dívida pública flutuante</b> — e acrescenta entre parênteses: <b>não é dívida consolidada/fundada</b>.</p><p>Faz sentido pelo prazo: RP é compromisso de curto prazo, a ser honrado no exercício seguinte, e não dívida de longo prazo.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar — esquema</i></p>",
5:"<p>Certo. Definição do Resumo: serão inscritas em <b>Restos a Pagar processados</b> as despesas <b>liquidadas e não pagas</b> no exercício financeiro.</p><p>Em outras palavras, são as despesas em que o serviço contratado <b>foi prestado pelo fornecedor e aceito pelo órgão público</b> (art. 63 da Lei nº 4.320/64) — o objeto já foi aceito, só falta pagar.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar Processados (RPP)</i></p>",
6:"<p>Errado. O quadro <b>ATENÇÃO!</b> do Resumo diz o contrário: os Restos a Pagar <b>processados NÃO podem ser cancelados</b>.</p><p>A justificativa do material: o fornecedor satisfez a obrigação de fazer e a Administração conferiu essa obrigação, logo não pode deixar de exercer a obrigação de pagar — <b>salvo motivo previsto na legislação pertinente</b>. Quem pode ser cancelado é o RPNP.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar Processados — ATENÇÃO</i></p>",
7:"<p>Certo — é o EXEMPLO 02 do Resumo, com estas mesmas datas: precatórios emitidos em <b>maio de 2023</b> e pagos em <b>janeiro de 2024</b>.</p><p>O raciocínio do material: como precatórios são pagamentos devidos pela fazenda pública em virtude de <b>sentença judicial</b>, a despesa <b>obrigatoriamente já passou pela liquidação</b> (verificação do direito adquirido pelo credor). Por isso, RP <b>processados</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar Processados — EXEMPLO 02</i></p>",
8:"<p>Certo. Definição do Resumo: serão inscritas em <b>Restos a Pagar não processados</b> as despesas <b>não liquidadas</b>.</p><p>E elas se dividem em duas: <b>em liquidação</b> (o serviço foi prestado e, em 31 de dezembro, está em fase de verificação do direito do credor) e <b>a liquidar</b> (o prazo para o credor cumprir a obrigação ainda está vigente).</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar Não Processados (RPNP)</i></p>",
9:"<p>Errado — <b>trocou as duas espécies</b>. Prazo do credor <b>ainda vigente</b> é despesa <b>a liquidar</b>.</p><p>No quadro do Resumo, <b>em liquidação</b> é o outro caso: o serviço contratado <b>já foi prestado</b> (o fato gerador ocorreu), mas se encontra, em 31 de dezembro, em <b>fase de verificação do direito adquirido pelo credor</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>RPNP — Em Liquidação x A Liquidar</i></p>",
10:"<p>Errado — é a <b>PEGADINHA</b> do Resumo, reproduzida com estas mesmas palavras e marcada ERRADO.</p><p>A descrição dada (fato gerador <b>já ocorrido</b> antes do término do exercício, sem que se tenha procedido à liquidação) é de RPNP <b>em liquidação</b>, não <b>a liquidar</b>. No <b>a liquidar</b>, o prazo do credor ainda está vigente e o fato gerador <b>ainda não ocorreu</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>RPNP — PEGADINHA</i></p>",
11:"<p>Certo — é a definição de <b>despesa em liquidação</b> no quadro do Resumo: serviço prestado (fato gerador ocorrido), mas em <b>31 de dezembro</b> ainda em <b>fase de verificação do direito adquirido pelo fornecedor</b>.</p><p>O exemplo do material: o Município contratou obra em uma rua; ao final do ano a obra está concluída, mas a empresa ainda não apresentou toda a documentação para receber. Vai para RPNP.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>RPNP — Em Liquidação</i></p>",
12:"<p>Certo. O quadro <b>ATENÇÃO!</b> do Resumo: os <b>RPNP podem ser cancelados</b> — e daí o material tira a conclusão que a banca adora: <b>nem todos os Restos a Pagar geram obrigações financeiras para o Estado</b>.</p><p>No <b>NÃO CONFUNDA</b>: processados foram empenhados e liquidados e <b>não</b> podem ser cancelados; não processados foram <b>apenas empenhados</b> e podem.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>RPNP — ATENÇÃO / NÃO CONFUNDA</i></p>",
13:"<p>Errado por causa do <b>todos</b>. O ATENÇÃO! do Resumo conclui exatamente o oposto: como os RPNP <b>podem ser cancelados</b>, <b>nem todos</b> os Restos a Pagar geram obrigações financeiras para o Estado.</p><p>Quem gera obrigação certa é o <b>processado</b>: já liquidado, objeto aceito, não pode ser cancelado.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>RPNP — ATENÇÃO</i></p>",
14:"<p>Certo — é o <b>EXEMPLO NUMÉRICO</b> do Resumo, com estes mesmos valores.</p><p>Despesa empenhada e não paga de <b>R$ 900</b>; liquidação de <b>R$ 700</b>. Logo, inscrevem-se <b>R$ 900</b> em Restos a Pagar, sendo <b>R$ 700</b> processados (parte liquidada) e <b>R$ 200</b> não processados (900 − 700).</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar — Exemplo Numérico</i></p>",
15:"<p>Errado. O Resumo é expresso: a <b>LRF não aborda o mérito</b> do que pode, ou não, ser inscrito em Restos a Pagar.</p><p>O que ela faz, no <b>art. 42</b>, é <b>vedar contrair obrigação no último ano do mandato</b> do governante sem a respectiva cobertura financeira, eliminando as <b>heranças fiscais onerosas</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Último Ano de Mandato do Governante</i></p>",
16:"<p>Certo pela literalidade do <b>art. 42 da LRF</b>, transcrito no Resumo: é vedado ao titular de Poder ou órgão, nos <b>últimos dois quadrimestres</b> do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele.</p><p>A segunda parte do artigo completa: nem que tenha parcelas a pagar no exercício seguinte <b>sem suficiente disponibilidade de caixa</b> para esse efeito.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>LRF, art. 42</i></p>",
17:"<p>Errado por <b>encurtar o prazo</b>. O art. 42 da LRF, no Resumo, fala em <b>últimos dois quadrimestres</b> do mandato, e não apenas no último.</p><p>Conte em meses para não errar: dois quadrimestres = <b>8 meses</b> finais. A banca costuma plantar aqui \"último quadrimestre\", \"último semestre\" ou \"último exercício\".</p><p class='fb-fonte'>AFO — Resumo 10 · <i>LRF, art. 42</i></p>",
18:"<p>Certo pelo <b>parágrafo único do art. 42 da LRF</b>, no Resumo: na determinação da disponibilidade de caixa serão considerados os <b>encargos e despesas compromissadas a pagar até o final do exercício</b>.</p><p>Ou seja, disponibilidade de caixa não é o saldo bruto da conta: já se descontam os compromissos assumidos.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>LRF, art. 42, parágrafo único</i></p>",
19:"<p>Certo — é o comentário da QUESTÃO-PEGADINHA do Resumo: no <b>último ano de mandato</b>, o valor a ser inscrito em Restos a Pagar fica <b>limitado à disponibilidade de caixa</b>.</p><p>Os números do material: disponibilidade de caixa R$ 2.000.000 e despesas empenhadas não pagas R$ 3.200.000 — gabarito <b>R$ 2.000.000</b>. A alternativa com R$ 3.200.000 é a pegadinha.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Último Ano de Mandato — QUESTÃO-PEGADINHA</i></p>",
20:"<p>Certo. Definição do Resumo: a rolagem da dívida é a <b>substituição de dívidas anteriormente emitidas por dívidas novas</b> — pagar uma dívida assumindo outra —, o que se conceitua como <b>despesas de refinanciamento da dívida pública</b>.</p><p>O exemplo do material: títulos de <b>R$ 1 milhão</b> com vencimento em um ano; no vencimento, o governo emite <b>novos títulos de R$ 1 milhão</b> com novo prazo. A dívida é rolada para frente.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Rolagem da Dívida</i></p>",
21:"<p>Certo. O Resumo aplica a mesma lógica aos RP: se as <b>inscrições superam os pagamentos</b>, o estoque de Restos a Pagar cresce e passa a <b>concorrer com o orçamento do ano seguinte</b>.</p><p>Por isso o material afirma que a <b>rolagem orçamentária contribui para a descaracterização do orçamento previamente aprovado pelo Legislativo</b>: o problema da indisposição financeira é rolado para frente e pode comprometer a capacidade de pagamento em exercícios futuros.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Rolagem da Dívida</i></p>",
22:"<p>Certo. É o <b>art. 35 do Decreto nº 93.872/86</b>, no Resumo: o empenho de despesa <b>não liquidada</b> será considerado <b>anulado em 31 de dezembro</b>, para todos os fins, <b>salvo</b> nas situações que o próprio artigo ressalva.</p><p>O ATENÇÃO! do material fixa a lógica: a <b>regra é anular</b>; nas <b>4 situações</b> do art. 35, os empenhos poderão ser inscritos em <b>RPNP</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Anulação do Empenho</i></p>",
23:"<p>Errado — essa é justamente a <b>primeira ressalva</b> do art. 35: não se anula o empenho quando estiver <b>vigente o prazo para cumprimento da obrigação assumida pelo credor</b>.</p><p>Nesse caso a despesa vai para <b>RPNP a liquidar</b>. É o erro do servidor Caio, no exemplo do Resumo: anulou o empenho em 31/12/2023 de contrato cujo prazo de entrega ia até março de 2024, e a despesa teve de virar DEA.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Anulação do Empenho — art. 35</i></p>",
24:"<p>Certo. É a segunda ressalva do <b>art. 35 do Decreto nº 93.872/86</b>, no Resumo: não se anula o empenho que se <b>destinar a atender transferências a instituições públicas ou privadas</b>.</p><p>Lista completa das ressalvas: prazo do credor vigente; transferências a instituições públicas ou privadas; compromissos assumidos no exterior; e, vencido o prazo, liquidação em curso ou interesse da Administração em exigir o cumprimento.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Anulação do Empenho — art. 35</i></p>",
25:"<p>Errado. Os <b>compromissos assumidos no exterior</b> são exatamente uma das <b>ressalvas</b> do art. 35 — logo, o empenho <b>não</b> é anulado automaticamente em 31 de dezembro.</p><p>Pelo ATENÇÃO! do Resumo, nas 4 situações do art. 35 os empenhos <b>poderão ser inscritos em RPNP</b> em vez de anulados.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Anulação do Empenho — art. 35</i></p>",
26:"<p>Certo — é a quarta ressalva do art. 35 no Resumo, com seus dois desdobramentos: <b>vencido</b> o prazo para cumprimento da obrigação, o empenho não será anulado se <b>estiver em curso a liquidação da despesa</b> ou se for <b>de interesse da Administração exigir o cumprimento da obrigação</b>.</p><p>Repare no contraste com a primeira ressalva: lá o prazo está <b>vigente</b>; aqui já <b>venceu</b>, e mesmo assim o empenho sobrevive nessas duas hipóteses.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Anulação do Empenho — art. 35</i></p>",
27:"<p>Certo — é a conclusão do quadro <b>ATENÇÃO!</b> do Resumo: a regra é anular todos os empenhos não liquidados, mas nas <b>4 situações</b> do art. 35 do Decreto nº 93.872/86 os empenhos <b>poderão ser inscritos em RPNP</b>.</p><p>Faz sentido: se o empenho não é anulado e a despesa não foi liquidada, o destino natural é o Restos a Pagar <b>não processado</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Anulação do Empenho — ATENÇÃO</i></p>",
28:"<p>Certo pelo <b>art. 36, parágrafo único, da Lei nº 4.320/64</b>, no Resumo: os empenhos que correm à conta de créditos com <b>vigência plurianual</b>, que <b>não tenham sido liquidados</b>, só serão computados como Restos a Pagar no <b>último ano de vigência do crédito</b>.</p><p>Exemplo do material: obra de um prédio com prazo de <b>cinco anos</b> — os valores empenhados e não liquidados só viram RP no <b>quinto ano</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Empenhos com Vigência Plurianual</i></p>",
29:"<p>Errado — a regra do último ano vale para os <b>NÃO liquidados</b>. Os empenhos plurianuais <b>já liquidados</b>, pelo esquema do Resumo, <b>serão inscritos em restos a pagar em cada ano</b>.</p><p>Monte o quadro do material: plurianual <b>liquidado</b> → RP em cada ano; plurianual <b>não liquidado</b> → RP somente no <b>último ano de vigência do crédito</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Empenhos com Vigência Plurianual — esquema</i></p>",
30:"<p>Certo — é a definição de <b>DEA</b> no Resumo: despesas cujos <b>fatos geradores ocorreram em exercícios anteriores</b>, mas que só foram <b>empenhadas, liquidadas e pagas no exercício seguinte</b>.</p><p>O exemplo do material: materiais de escritório comprados e recebidos em <b>novembro de 2023</b>, com empenho, liquidação e pagamento só em <b>2024</b> — classificação DEA.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Despesas de Exercícios Anteriores (DEA)</i></p>",
31:"<p>Certo. São as três espécies do <b>art. 37 da Lei nº 4.320/64</b>, no quadro do Resumo: despesas de exercícios encerrados que <b>não se tenham processado na época própria</b>; <b>Restos a Pagar com prescrição interrompida</b>; e <b>compromissos reconhecidos após o encerramento do exercício</b>.</p><p>Decore as três — o material dedica uma seção a cada uma, com exemplo próprio.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Lei nº 4.320/64, art. 37</i></p>",
32:"<p>Certo pela letra do <b>art. 37 da Lei nº 4.320/64</b>, no Resumo: essas despesas <b>poderão ser pagas à conta de dotação específica consignada no orçamento</b>, <b>discriminada por elementos</b>, obedecida, <b>sempre que possível</b>, a <b>ordem cronológica</b>.</p><p>Repare nas duas modulações do texto: \"poderão\" e \"sempre que possível\" — a banca troca por \"deverão\" e \"obrigatoriamente\".</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Lei nº 4.320/64, art. 37</i></p>",
33:"<p>Errado — é o outro lado do <b>NÃO CONFUNDA</b> do Resumo: o pagamento de <b>DEA</b> é <b>despesa orçamentária</b>.</p><p>Quem é <b>extraorçamentária</b> no pagamento é o <b>Restos a Pagar</b>. A chave está no empenho: na DEA ele ocorre <b>à custa do orçamento vigente</b>; no RP, à custa do orçamento do ano anterior.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>NÃO CONFUNDA — DEA x Restos a Pagar</i></p>",
34:"<p>Certo — é a definição do Resumo: Restos a Pagar com <b>prescrição interrompida</b> são os RP que foram <b>cancelados</b>, mas em que <b>permanece o direito do credor</b>, por o fornecedor já ter entregue o bem ou prestado o serviço.</p><p>O exemplo do material: inscrição em RP no fim de <b>2022</b>, cancelada erroneamente no fim de <b>2023</b>; em <b>2024</b> reconhece-se que o serviço fora prestado, e a despesa é reempenhada, liquidada e paga em 2024 como <b>DEA</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Restos a Pagar com Prescrição Interrompida</i></p>",
35:"<p>Certo — definição literal do Resumo: <b>compromissos reconhecidos após o encerramento do exercício</b> é a obrigação de pagamento <b>criada em virtude de lei</b>, mas cujo <b>direito do reclamante só foi reconhecido após o encerramento</b> do exercício correspondente.</p><p>O exemplo do material: empenho em <b>janeiro de 2024</b> referente à merenda escolar entregue em <b>dezembro de 2023</b> — a despesa pertence a 2024, como <b>DEA</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>Compromissos Reconhecidos após o Encerramento do Exercício</i></p>",
36:"<p>Certo pelo <b>art. 165, § 10, da CF</b>, transcrito no Resumo: a administração tem o <b>dever de executar as programações orçamentárias</b>, adotando os meios e as medidas necessários, com o propósito de <b>garantir a efetiva entrega de bens e serviços à sociedade</b>.</p><p>O comentário do material lembra que o orçamento brasileiro, <b>em regra, é autorizativo</b>, mas há corrente que vê nesse § 10 (EC nº 100/19) a virada para <b>impositivo</b> — e isso já caiu em prova.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 165, § 10</i></p>",
37:"<p>Errado. O <b>art. 165, § 11, I</b>, é expresso no sentido contrário: o dever de executar <b>não impede o cancelamento necessário à abertura de créditos adicionais</b>.</p><p>Exemplo do Resumo: a administração municipal deve entregar a escola prevista no orçamento, mas pode <b>cancelar despesa de menor prioridade</b> para abrir crédito adicional destinado à obra, desde que obedeça aos limites legais.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 165, § 11, I</i></p>",
38:"<p>Certo pelo <b>art. 165, § 11, II, da CF</b>, no Resumo: o dever de executar as programações <b>não se aplica nos casos de impedimentos de ordem técnica devidamente justificados</b>.</p><p>Note o adjetivo que a banca corta: <b>devidamente justificados</b>. O exemplo do material é a falha em equipamento necessário ao serviço, sem possibilidade de substituição ou conserto imediato.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 165, § 11, II</i></p>",
39:"<p>Errado. O <b>art. 165, § 11, III</b>, restringe: o dever de executar aplica-se <b>exclusivamente às despesas primárias discricionárias</b>.</p><p>O Resumo explica os dois termos: <b>primárias</b> são as ligadas à prestação dos serviços públicos essenciais; <b>discricionárias</b>, as que podem ser escolhidas pela administração. Despesas financeiras ficam de fora.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 165, § 11, III</i></p>",
40:"<p>Certo pelo <b>art. 166, § 9º, da CF</b>, no Resumo: as emendas individuais ao PLOA serão aprovadas no limite de <b>2% da Receita Corrente Líquida do exercício anterior</b> ao do encaminhamento do projeto.</p><p>A segunda metade do dispositivo é a que mais cai junto: <b>metade desse percentual</b> (1% da RCL) deve ir para <b>ações e serviços públicos de saúde</b>.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166, § 9º</i></p>",
41:"<p>Errado — <b>inverteu os percentuais</b>. Pelo <b>art. 166, § 9º-A</b>, no Resumo, <b>1,55% cabe às emendas de Deputados</b> e <b>0,45% às de Senadores</b>.</p><p>O exemplo numérico do material ajuda a fixar: com RCL de <b>R$ 1 bilhão</b>, Deputados propõem até <b>R$ 15,5 milhões</b> e Senadores até <b>R$ 4,5 milhões</b>. Associe o percentual maior à Casa mais numerosa.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166, § 9º-A</i></p>",
42:"<p>Certo pelo <b>art. 166, § 12, da CF</b>, no Resumo: a garantia de execução aplica-se também às emendas de <b>iniciativa de bancada</b> de parlamentares de <b>Estado ou do DF</b>, no montante de até <b>1% da receita corrente líquida realizada no exercício anterior</b>.</p><p>Não confunda os dois limites: individuais, <b>2%</b> da RCL do exercício anterior (§ 9º); de bancada, <b>1%</b> da RCL realizada no exercício anterior (§ 12).</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166, § 12</i></p>",
43:"<p>Errado. O <b>art. 166, § 13</b>, no Resumo, abre exatamente essa exceção: as programações dos §§ 11 e 12 <b>não serão de execução obrigatória nos casos de impedimentos de ordem técnica</b>.</p><p>Exemplo do material: falta de capacidade operacional, de recursos humanos qualificados ou de fornecedores para executar o projeto. Mesmo incluída no orçamento, a programação deixa de ser obrigatória.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166, § 13</i></p>",
44:"<p>Certo pelo <b>art. 166, § 16, da CF</b>, no Resumo: a transferência obrigatória da União destinada a Estados, DF e Municípios para execução das programações dos §§ 11 e 12 <b>independerá da adimplência</b> do ente destinatário.</p><p>O mesmo parágrafo acrescenta que ela <b>não integrará a base de cálculo da RCL</b> para fins dos limites de despesa de pessoal do art. 169. O exemplo do material é o Estado inadimplente que, ainda assim, recebe a transferência de emenda de bancada.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166, § 16</i></p>",
45:"<p>Certo pelo <b>art. 166-A, § 5º, da CF</b>, no Resumo: pelo menos <b>70%</b> das transferências especiais deverão ser aplicadas em <b>despesas de capital</b>.</p><p>Lembre do que caracteriza a transferência especial no material: recursos repassados <b>de forma livre</b>, sem finalidade específica pré-definida. O piso de 70% em capital é justamente o contrapeso dessa liberdade.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166-A, § 5º</i></p>",
46:"<p>Errado — é o oposto do <b>art. 166-A, § 2º, I</b>, no Resumo: na transferência especial os recursos serão repassados <b>diretamente ao ente federado beneficiado, independentemente de celebração de convênio ou instrumento congênere</b>.</p><p>Os outros dois incisos completam: os recursos <b>pertencem ao ente no ato da efetiva transferência financeira</b> e serão aplicados em <b>programações finalísticas</b> das áreas de competência do Executivo do ente.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166-A, § 2º</i></p>",
47:"<p>Certo pelo <b>art. 166-A, § 1º, da CF</b>, no Resumo: é <b>vedada, em qualquer caso</b>, a aplicação desses recursos no pagamento de <b>despesas com pessoal e encargos sociais</b> (ativos, inativos e pensionistas) e de <b>encargos referentes ao serviço da dívida</b>.</p><p>O mesmo parágrafo diz que os recursos <b>não integram a receita</b> do ente para fins de repartição, de limites de despesa com pessoal e de endividamento.</p><p class='fb-fonte'>AFO — Resumo 10 · <i>CF, art. 166-A, § 1º</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"10", nome:"Restos a Pagar", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
