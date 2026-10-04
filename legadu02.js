/* Legislação Aduaneira — Módulo 02: Imposto de Importação (modo direto) */
window.MOD = window.MOD || {};
window.MOD.legadu02 = (function(){
"use strict";

var CARDS = [
  ["Quais tributos incidem numa importação?","<b>I.I</b>, <b>IPI</b>, <b>PIS/PASEP-Importação</b>, <b>COFINS-Importação</b>, <b>ICMS</b> e <b>AFRMM</b>. Mais a <b>Taxa de Utilização do SISCOMEX</b> e, conforme o caso, <b>CIDE</b> (ex.: CIDE-Combustíveis)."],
  ["Quais tributos incidem numa exportação?","<b>Somente o Imposto de Exportação (I.E)</b>. Tudo o mais é imunidade constitucional."],
  ["Quais são as três imunidades da exportação na CF/88?","<b>i)</b> IPI (art. 153, § 3º, III); <b>ii)</b> ICMS (art. 155, § 2º, X, a); <b>iii)</b> contribuições sociais e CIDE (art. 149, § 2º, I)."],
  ["Imunidade é o quê, tecnicamente?","<b>Hipótese de não-incidência constitucionalmente qualificada</b>. Todas as não-incidências da CF/88 sobre exportação são imunidades."],
  ["O I.I obedece à legalidade, à anterioridade e à noventena?","<b>Nenhuma das três</b> quanto à alteração de alíquotas. Efeitos <b>imediatos</b>. Quem altera é a <b>CAMEX</b>, por <b>Resolução</b>."],
  ["E o I.E?","<b>Igual ao I.I</b> — exceção à legalidade, à anterioridade e à noventena. Alíquota também fixada pela <b>CAMEX</b>."],
  ["E o IPI? (pegadinha clássica)","Exceção à <b>legalidade</b> e à <b>anterioridade</b>, mas <b>OBEDECE à noventena</b> — é preciso esperar <b>90 dias</b>."],
  ["E o PIS/PASEP-Importação e a COFINS-Importação?","<b>OBEDECEM à legalidade</b>; não obedecem à anterioridade, mas <b>obedecem à noventena</b> (art. 195, § 6º, da CF/88)."],
  ["Qual a finalidade da tributação sobre o comércio exterior?","<b>Extrafiscal</b> — regulação econômica, não arrecadação. É por isso que os princípios são excepcionados."],
  ["Diferencie bem, produto e mercadoria","<b>Bem</b>: coisa com utilidade econômica, avaliável em dinheiro. <b>Produto</b>: conceito <b>mais amplo</b>, tudo que é extraído de outra coisa — abrange até o que não tem valor econômico. <b>Mercadoria</b>: bem móvel destinado a <b>operação mercantil</b>."],
  ["Toda mercadoria é bem? Todo bem é mercadoria?","<b>Toda mercadoria é bem</b>, mas <b>nem todo bem é mercadoria</b>. A bagagem do viajante é bem, não é mercadoria."],
  ["Sobre o que a CF/88 autorizou o I.I e o I.E a incidir?","Sobre <b>PRODUTOS</b> (art. 153, I e II) — estrangeiros na importação; nacionais ou nacionalizados na exportação."],
  ["E o que dizem os arts. 69 e 212 do Regulamento Aduaneiro?","Falam em <b>MERCADORIA</b>. Mas a interpretação sistemática mostra que o I.I e o I.E incidem sobre <b>bens</b> — há incidência sobre bagagem, aluguel, arrendamento e doação."],
  ["O que são produtos NACIONAIS?","Os <b>fabricados no Brasil</b> ou que sofreram <b>transformação substancial</b> em território nacional (observadas as regras de origem)."],
  ["O que são produtos NACIONALIZADOS?","Produto <b>estrangeiro importado com ânimo de definitividade</b>. Bem admitido em regime especial (ex.: admissão temporária) <b>não se nacionaliza</b> — seu retorno é a <b>reexportação</b>."],
  ["O que são produtos DESNACIONALIZADOS?","Produto nacional ou nacionalizado <b>exportado com ânimo de definitividade</b>. A <b>exportação temporária não desnacionaliza</b> — seu retorno é a <b>reimportação</b>."],

  ["Por que o I.I é extrafiscal?","Porque serve à <b>regulação econômica</b>: alíquota alta <b>protege a indústria nacional</b>; alíquota baixa <b>estimula</b> a entrada de bens estrangeiros."],
  ["Quem altera as alíquotas do I.I e com que limite?","A <b>CAMEX</b>, por Resolução, respeitados os <b>compromissos internacionais</b> — os <b>tetos tarifários da OMC</b> (Lista de Concessões) só podem ser ultrapassados com <b>renegociação multilateral</b>."],
  ["O que é a TEC e por que o MERCOSUL é união aduaneira imperfeita?","<b>Tarifa Externa Comum</b>, definida em conjunto pelos Estados-membros para importações de terceiros países. O bloco é <b>imperfeito</b> porque há <b>diversas exceções à TEC</b>."],
  ["Qual a modalidade de lançamento do I.I?","<b>Por homologação</b> (autolançamento). O importador registra a <b>DUIMP</b> e os tributos são debitados automaticamente; a RFB homologa <b>a posteriori</b>."],
  ["Qual o prazo de homologação e o que ocorre ao seu fim?","<b>5 anos da ocorrência do fato gerador</b> (art. 150, § 4º, do CTN). Findo o prazo sem pronunciamento: <b>homologação tácita</b> e <b>extinção definitiva</b> do crédito, <b>salvo dolo, fraude ou simulação</b>."],
  ["Qual a peculiaridade do prazo decadencial no lançamento por homologação?","É o <b>único caso</b> em que o prazo decadencial conta <b>exatamente da data do fato gerador</b> — e não do primeiro dia do exercício seguinte."],
  ["Cuidado com o art. 752, I, do R/A","Ele diz que o direito de exigir o tributo se extingue em 5 anos contados do <b>primeiro dia do exercício seguinte</b> — regra que <b>NÃO se aplica ao I.I</b>, sujeito a lançamento por homologação."],
  ["Qual a base de cálculo do I.I? (art. 75 do R/A)","<b>Alíquota ad valorem</b> → o <b>VALOR ADUANEIRO</b>, apurado pelo <b>art. VII do GATT 1994</b>. <b>Alíquota específica</b> → a <b>quantidade de mercadoria</b> na unidade de medida estabelecida."],
  ["Qual o status normativo do Acordo de Valoração Aduaneira no Brasil?","<b>Lei ordinária</b> — foi regularmente internalizado no ordenamento jurídico interno."],
  ["Qual alíquota se aplica e onde está fixada?","A vigente <b>na data da ocorrência do fato gerador</b>, fixada na <b>TEC</b> — salvo RTS (remessa postal), RTE (bagagem) e RTU (Paraguai, via terrestre)."],
  ["Qual taxa de câmbio se usa na conversão? (art. 97 do R/A)","A <b>vigente na data em que se considerar ocorrido o fato gerador</b>. Pela Decisão CMC nº 13/2007, a taxa é a <b>do fechamento do dia anterior</b> ao da numeração do despacho — ambas são aceitas em prova."],
  ["Quando o I.I é pago?","Na <b>data do registro da DUIMP</b>, com débito automático. O <b>Ministro da Economia</b> pode, em casos especiais, fixar <b>outros momentos</b>."],
  ["Onde se faz o depósito para garantia?","Na <b>Caixa Econômica Federal (CEF)</b>, na forma da legislação específica."],
  ["Quais são os três tipos de despacho aduaneiro?","<b>Para consumo</b> (importação definitiva / nacionalização); <b>para admissão</b> (regimes aduaneiros especiais); <b>para internação</b> (saída da ZFM ou ALC para o restante do território)."],

  ["Qual o fato gerador do I.I e qual seu elemento espacial?","A <b>entrada de mercadoria estrangeira no território aduaneiro</b> (art. 72 do R/A) — é o <b>elemento espacial (geográfico)</b> do fato gerador."],
  ["Como o STJ concilia entrada e registro? (REsp 362.910/PR)","O fato gerador <b>ocorre com a entrada</b>, mas só se <b>aperfeiçoa com o registro da declaração de importação</b> no regime comum."],
  ["Art. 73, I — quando se considera ocorrido o FG na regra geral?","Na <b>data do registro da declaração de importação de mercadoria submetida a despacho para consumo</b>. Vale inclusive para mercadoria sob regime suspensivo despachada para consumo."],
  ["Art. 73, II — quais as quatro hipóteses em que o FG ocorre no dia do LANÇAMENTO?","<b>a)</b> remessa postal internacional <b>não sujeita ao regime comum</b>; <b>b)</b> <b>bagagem</b>, acompanhada ou desacompanhada; <b>c)</b> mercadoria de manifesto cujo <b>extravio</b> tenha sido verificado; <b>d)</b> mercadoria sem DI que tenha sido <b>consumida, revendida ou não localizada</b>."],
  ["Por que nessas quatro hipóteses o FG é o lançamento?","Porque em nenhuma delas <b>há registro de DUIMP</b> — sem declaração, o marco temporal passa a ser o lançamento de ofício."],
  ["Art. 73, III — e o abandono?","O FG ocorre na <b>data do vencimento do prazo de permanência</b> da mercadoria em recinto alfandegado, <b>se o despacho for iniciado antes de aplicada a pena de perdimento</b>."],
  ["Art. 73, IV — e a admissão temporária para utilização econômica?","O FG ocorre na <b>data do registro da declaração de admissão</b> no regime — há <b>suspensão parcial</b>, logo há recolhimento e há fato gerador."],
  ["Remessa postal: regime simplificado × regime comum","<b>Simplificada (RTS)</b>: até <b>US$ 3.000</b>, alíquota <b>60%</b>, sem DUIMP → FG no <b>lançamento</b>. <b>Comum</b>: acima de US$ 3.000 ou bebida alcoólica/tabaco → <b>com DUIMP</b> → FG no <b>registro</b>."],
  ["Qual remessa postal é isenta?","A de valor <b>até US$ 50,00</b>, desde que transportada pelo <b>serviço postal</b> e que <b>remetente e destinatário sejam pessoas físicas</b>."],
  ["Bagagem acompanhada × desacompanhada","<b>Acompanhada</b>: bens que o viajante traz consigo no mesmo meio de transporte, <b>sem conhecimento de embarque</b>. <b>Desacompanhada</b>: chega em decorrência da viagem, <b>amparada por conhecimento de carga</b>."],
  ["Quais os quatro tratamentos possíveis para bens de viajante? (IN RFB nº 1.059/2010)","<b>i)</b> isenção; <b>ii)</b> regime de tributação especial; <b>iii)</b> regime de importação comum; <b>iv)</b> perdimento."],
  ["Que bens de bagagem acompanhada são isentos?","<b>Livros, folhetos e periódicos</b>; <b>bens de uso ou consumo pessoal</b>; e <b>outros bens até US$ 500,00</b>, qualquer que seja a via de ingresso."],
  ["Quais os limites quantitativos de isenção na bagagem?","<b>12 litros</b> de bebida alcoólica · <b>10 maços</b> de cigarros · <b>25 unidades</b> de charutos ou cigarrilhas · <b>250 gramas</b> de fumo."],
  ["O que está excluído do conceito de bagagem?","<b>Veículos automotores</b> em geral, motocicletas, motonetas, bicicletas com motor, <b>motores para embarcação</b>, motos aquáticas, <b>casas rodantes (motor homes)</b>, aeronaves e <b>embarcações de todo tipo</b>."],
  ["Extravio: quem paga e quem é restituído?","Paga o <b>RESPONSÁVEL</b> (transportador ou depositário). O <b>importador</b>, que já recolheu no registro da DUIMP, <b>faz jus à restituição</b>."],
  ["Qual a regra do extravio de mercadoria a granel?","Diferenças <b>inferiores a 1%</b> não são consideradas. Se o extravio for <b>superior a 1%</b>, o imposto é exigido sobre a <b>integralidade</b> do extraviado."],
  ["Por que o extravio é fato gerador presumido?","Porque o art. 72, § 1º, do R/A <b>considera entrada</b> no território aduaneiro a mercadoria que conste como importada e cujo <b>extravio tenha sido verificado</b> — presume-se a entrada."],
  ["Qual o efeito da AVARIA?","<b>Reduz a base de cálculo</b> proporcionalmente ao prejuízo. O importador é <b>restituído</b> do que pagou a maior; a RFB cobra do <b>responsável</b> o imposto sobre o prejuízo."],
  ["O que aconteceu com a vistoria aduaneira?","Foi <b>extinta</b> pela <b>Lei nº 12.350/2010</b>, confirmada pelo <b>Decreto nº 8.010/2013</b>. Hoje há <b>lançamento de ofício</b> por <b>auto de infração</b>."],
  ["Quando uma mercadoria é considerada abandonada? (art. 642 do R/A)","<b>90 dias</b> da descarga ou do aviso de chegada de remessa postal do regime comum; <b>45 dias</b> após o fim do entreposto, do recinto de zona secundária ou da chegada como bagagem; <b>60 dias</b> da notificação do art. 640."],
  ["Mercadoria abandonada: o importador ainda pode salvá-la?","<b>Sim</b> (art. 643) — <b>antes de aplicada a pena de perdimento</b>, iniciando o despacho e pagando tributos, <b>juros, multa de mora</b> e as despesas de permanência."],

  ["Quais as duas hipóteses de NÃO-OCORRÊNCIA do fato gerador? (art. 74)","<b>I)</b> <b>pescado capturado fora das águas territoriais</b> por empresa localizada no País, observadas as normas da atividade pesqueira; <b>II)</b> mercadoria em <b>exportação temporária</b> que retorna (reimportação), <b>ainda que descumprido o regime</b>."],
  ["Regra do art. 70: mercadoria exportada que retorna é o quê?","É considerada <b>ESTRANGEIRA</b> — foi desnacionalizada. Logo, <b>incide o I.I</b> no retorno."],
  ["Quais as cinco exceções do art. 70 (retorno sem ser estrangeira)?","<b>I)</b> enviada em <b>consignação</b> e não vendida no prazo; <b>II)</b> devolvida por <b>defeito técnico</b>, reparo ou substituição; <b>III)</b> <b>modificação na sistemática de importação</b> do país importador; <b>IV)</b> <b>guerra ou calamidade pública</b>; <b>V)</b> outros <b>fatores alheios à vontade do exportador</b>."],
  ["Art. 70, parágrafo único — máquinas de empresas de engenharia","Equipamentos, máquinas, veículos e peças <b>de fabricação nacional</b>, adquiridos no mercado interno por <b>empresas nacionais de engenharia</b> e exportados para obras no exterior, <b>SÃO considerados estrangeiros</b> no retorno."],
  ["Art. 71 — quais as sete hipóteses de NÃO-INCIDÊNCIA do I.I?","<b>I)</b> <b>erro de expedição</b>, redestinada ou devolvida; <b>II)</b> mercadoria de <b>reposição</b> de outra defeituosa/imprestável; <b>III)</b> objeto de <b>perdimento</b>; <b>IV)</b> <b>devolvida antes do registro</b> da DI; <b>V)</b> <b>embarcações</b> construídas no Brasil que retornam ao registro brasileiro; <b>VI)</b> <b>destruída sob controle aduaneiro</b> antes do desembaraço; <b>VII)</b> <b>trânsito de passagem acidentalmente destruída</b>."],
  ["Perdimento: incide ou não incide o I.I?","<b>NÃO incide</b> — exceto se a mercadoria <b>não for localizada, tiver sido consumida ou revendida</b>. Aí incide, e o FG é a data do <b>lançamento</b>."],
  ["Destruição sob controle aduaneiro: que requisitos?","Ser <b>sem ônus para a Fazenda Nacional</b> e <b>antes do desembaraço</b>. <b>Não</b> se exige avaria nem imprestabilidade. A autoridade <b>pode indeferir</b> o pleito de destruição."],
  ["Trânsito aduaneiro de passagem destruído: quem responde?","Se a destruição for <b>acidental</b>, <b>não incide</b> o I.I. Fora disso, o crédito tributário cabe ao <b>transportador</b>."],
  ["Quem é o sujeito ativo do I.I?","A <b>UNIÃO</b> (art. 153, I, da CF/88; art. 119 do CTN — pessoa jurídica de direito público titular da competência para exigir)."],
  ["Contribuinte × responsável (art. 121 do CTN)","<b>Contribuinte</b>: relação <b>pessoal e direta</b> com o fato gerador. <b>Responsável</b>: sem ser contribuinte, obriga-se por <b>expressa disposição de lei</b>."],
  ["Quem são os CONTRIBUINTES do I.I? (art. 104 do R/A)","<b>I)</b> o <b>importador</b> — quem promove a entrada da mercadoria estrangeira; <b>II)</b> o <b>destinatário de remessa postal internacional</b> indicado pelo remetente; <b>III)</b> o <b>adquirente de mercadoria entrepostada</b>."],
  ["Quem são os RESPONSÁVEIS? (art. 105)","O <b>transportador</b>, o <b>depositário</b> e <b>qualquer outra pessoa que a lei designar</b>. Respondem <b>sozinhos</b> no polo passivo — é o caso de extravio e avaria."],
  ["Quem são os RESPONSÁVEIS SOLIDÁRIOS? (art. 106)","<b>I)</b> adquirente/cessionário de mercadoria com isenção ou redução; <b>II)</b> <b>representante no País do transportador estrangeiro</b>; <b>III)</b> adquirente na importação <b>por conta e ordem</b>; <b>IV)</b> <b>encomendante predeterminado</b>; <b>V)</b> expedidor, OTM ou subcontratado do transporte multimodal; <b>VI)</b> beneficiário de regime suspensivo para industrialização-exportação; <b>VII)</b> quem a lei designar."],

  ["O que é mercadoria NÃO IDENTIFICADA e como é tributada?","A <b>extraviada ou consumida</b> que tinha <b>descrição genérica</b> nos documentos. Tributa-se por <b>alíquota única de 80%</b>, abrangendo <b>I.I, IPI, PIS/PASEP-Imp., COFINS-Imp. e AFRMM</b>."],
  ["Como se arbitra a base de cálculo da mercadoria não identificada?","Pela <b>mediana dos valores por quilograma</b> de todas as mercadorias importadas a título definitivo, <b>pela mesma via de transporte</b>, em declarações do <b>semestre anterior</b>, incluídos <b>frete e seguro internacionais</b>. Sem informação de peso, usa-se o <b>peso líquido da unidade de carga</b>."],
  ["O que é o Regime de Tributação SIMPLIFICADA (RTS)? (art. 99)","Permite a <b>classificação genérica</b> de bens de <b>remessa postal internacional</b>, com <b>alíquotas diferenciadas</b> do I.I e <b>isenção de IPI, PIS/PASEP-Imp. e COFINS-Imp.</b>"],
  ["Números do RTS","Valor de até <b>US$ 3.000,00</b> (Portaria MF nº 156/99), destinada a pessoa física ou jurídica; alíquota de I.I de <b>60%</b>, qualquer que seja a classificação fiscal. Isenção até <b>US$ 50,00</b> entre pessoas físicas pelo serviço postal."],
  ["O que é o Regime de Tributação ESPECIAL (RTE)?","Permite o despacho de <b>bens de bagagem</b> com exigência <b>apenas do I.I</b>, à alíquota de <b>50%</b>, sobre o que <b>exceder o limite de isenção</b>."],
  ["Não confunda RTS e RTE","<b>RTS → remessa postal · 60%</b> · classificação genérica. <b>RTE → bagagem · 50%</b> · só o I.I. Trocar os dois é a pegadinha mais cobrada da aula."],
  ["Quais os limites de isenção nas lojas francas?","<b>Fronteira: US$ 300,00</b>. <b>Aeroportos e portos alfandegados: US$ 1.000,00</b> (desde janeiro de 2020). O excedente vai para o <b>RTE</b>."],
  ["O que é o Regime de Tributação UNIFICADA (RTU)? (art. 102-A)","Permite a importação <b>por via terrestre</b> de mercadorias <b>procedentes do Paraguai</b>, com <b>pagamento unificado</b> de <b>I.I, IPI, PIS/PASEP-Imp. e COFINS-Imp.</b>, observado <b>limite máximo de valor por habilitado</b>. Criado pela <b>Lei nº 11.898/2009</b> para a fronteira Foz do Iguaçu / Ciudad del Este."],
  ["Quem pode se habilitar ao RTU e qual a alíquota?","Somente <b>microempresas importadoras varejistas optantes pelo SIMPLES</b>. Alíquota única de <b>25%</b> sobre o preço de aquisição: <b>7,88% I.I · 7,87% IPI · 7,60% COFINS-Imp. · 1,65% PIS/PASEP-Imp.</b>"],
  ["Quais os limites de valor do RTU? (Decreto nº 6.956/2009)","<b>R$ 18.000</b> no 1º e 2º trimestres · <b>R$ 37.000</b> no 3º e 4º trimestres · <b>R$ 110.000</b> por ano-calendário."],
  ["O que é vedado no RTU?","Tudo que <b>não se destine ao consumidor final</b>, além de <b>armas e munições, fogos de artifício, bebidas (inclusive alcoólicas), cigarros, veículos automotores e embarcações (com partes e peças), medicamentos, pneus, bens usados</b> e bens com importação <b>suspensa ou proibida</b>. O habilitado <b>não faz jus a isenção, redução ou benefício</b> algum."],
  ["O RTU pode incluir o ICMS?","<b>Sim</b> — art. 10, § 3º, do Decreto nº 6.956/2009 —, <b>desde que o Estado ou o DF adira ao RTU mediante convênio</b>."],
  ["De onde vem a isenção do I.I? (art. 115 do R/A)","Só de <b>LEI ou ATO INTERNACIONAL</b>. O Regulamento Aduaneiro <b>não concede</b> isenção — apenas <b>compila</b>. A legislação de isenção interpreta-se <b>literalmente</b>."],
  ["Quais as duas condições gerais do art. 118 para a isenção?","Mercadoria <b>sem similar nacional</b> e <b>transportada em navio de bandeira brasileira</b>. Exige-se ainda a <b>quitação de tributos e contribuições federais</b>."],
  ["O reconhecimento da isenção gera direito adquirido?","<b>NÃO</b> — pode ser <b>revogado de ofício</b> se se apurar que o beneficiário não satisfazia ou deixou de satisfazer as condições. A isenção pode ser requerida na própria declaração de importação."]
];

var QS = [
  ["Na importação incidem, entre outros, o Imposto de Importação, o IPI, o PIS/PASEP-Importação, a COFINS-Importação, o ICMS e o AFRMM.","C","ESAF","Ainda há a Taxa de Utilização do SISCOMEX e, conforme o caso, contribuições de intervenção no domínio econômico."],
  ["Sobre as operações de exportação incide somente o imposto de exportação.","C","ESAF","IPI, ICMS e contribuições sociais e de intervenção são imunes nas exportações."],
  ["O Imposto sobre Produtos Industrializados incide sobre mercadorias industrializadas destinadas ao exterior.","E","ATRFB 2012","Há <b>imunidade</b> de IPI nas exportações (art. 153, § 3º, III, da CF/88)."],
  ["Todas as hipóteses de não-incidência sobre exportação previstas na CF/88 são imunidades tributárias.","C","ESAF","Imunidade é não-incidência constitucionalmente qualificada."],
  ["Com o objetivo de fomentar as exportações, a Constituição atribui excepcionalmente aos Estados e ao Distrito Federal competência para exonerar os contribuintes do Imposto de Exportação.","E","ATRFB 2012","O I.E é tributo <b>da União</b>; nenhuma competência foi atribuída a Estados ou DF."],
  ["O imposto de importação não obedece ao princípio da legalidade quanto à alteração de alíquotas.","C","ESAF","Compete à CAMEX alterá-las, por Resolução."],
  ["O IPI é exceção aos princípios da legalidade, da anterioridade e da noventena.","E","FGV","O IPI <b>obedece à noventena</b> — é preciso aguardar 90 dias. É a pegadinha mais frequente do tema."],
  ["O PIS/PASEP-Importação e a COFINS-Importação obedecem ao princípio da legalidade quanto à alteração de alíquotas.","C","ESAF","E também à noventena (art. 195, § 6º, da CF/88), embora não à anterioridade."],
  ["A alteração de alíquotas do imposto de importação gera efeitos imediatos.","C","ESAF","O I.I é exceção à anterioridade e à noventena."],
  ["A tributação sobre o comércio exterior tem finalidade eminentemente arrecadatória.","E","FGV","É <b>extrafiscal</b> — instrumento de regulação econômica."],
  ["Toda mercadoria é um bem, mas nem todo bem é mercadoria.","C","ESAF","Só são mercadorias os bens móveis destinados a operações mercantis. A bagagem é bem, não mercadoria."],
  ["Ao dispor sobre o Imposto de Importação, o art. 153, I, da Constituição Federal reza que compete à União instituir impostos sobre importação de bens estrangeiros.","E","ATRFB 2012","A CF/88 fala em <b>produtos</b> estrangeiros, conceito mais amplo que o de bens."],
  ["Produto nacionalizado é o produto estrangeiro importado com ânimo de definitividade.","C","ESAF","Bem em admissão temporária não se nacionaliza — seu retorno é a reexportação."],
  ["A exportação temporária tem como consequência a desnacionalização do produto.","E","FGV","Não desnacionaliza: a saída já está condicionada ao retorno, chamado de reimportação."],
  ["Produtos nacionais são os fabricados no Brasil ou que sofreram transformação substancial em território nacional.","C","ESAF","A verificação se faz pelas regras de origem."],
  ["O imposto de importação é tributo de caráter eminentemente extrafiscal.","C","ATRFB 2012","Permite ao governo regular a economia pelo controle das importações."],
  ["A alteração das alíquotas do imposto de importação pode ultrapassar livremente os limites tarifários acordados na OMC.","E","ESAF","Os tetos da Lista de Concessões só podem ser ultrapassados mediante renegociação multilateral."],
  ["O MERCOSUL é considerado uma união aduaneira imperfeita porque admite diversas exceções à Tarifa Externa Comum.","C","FGV","Os Estados-membros definem a TEC em conjunto, mas com listas de exceção."],
  ["Em regra, o imposto de importação é objeto de lançamento de ofício.","E","ESAF","É lançamento <b>por homologação</b>: o importador registra a declaração e antecipa o pagamento."],
  ["Se a lei não fixar prazo para a homologação, será ele de cinco anos contados da ocorrência do fato gerador.","C","ESAF","Art. 150, § 4º, do CTN — salvo dolo, fraude ou simulação."],
  ["No lançamento por homologação, o prazo decadencial conta-se do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.","E","FGV","Conta-se <b>da data do fato gerador</b> — é o único caso em que isso ocorre. O art. 752, I, do R/A não se aplica ao I.I."],
  ["A base de cálculo do Imposto de Importação, quando a alíquota for específica, é o valor aduaneiro apurado segundo as normas do artigo VII do GATT 1994.","E","AFRFB 2012","Com alíquota específica a base é a <b>quantidade</b> de mercadoria; o valor aduaneiro é a base na alíquota <b>ad valorem</b>."],
  ["A base de cálculo do imposto de importação é a quantidade de mercadoria expressa na unidade de medida estabelecida, quando a alíquota for específica.","C","Despachante 2012","Art. 75, II, do Regulamento Aduaneiro."],
  ["O Acordo sobre a Implementação do art. VII do GATT possui status de lei ordinária no ordenamento jurídico brasileiro.","C","ESAF","Foi regularmente internalizado."],
  ["A alíquota aplicável é a que estiver em vigor na data da entrada da mercadoria no território nacional.","E","ESAF","É a vigente na data da <b>ocorrência do fato gerador</b> — em regra, o registro da declaração."],
  ["O imposto de importação é pago na data do registro da declaração de importação, podendo o Ministro da Economia fixar outros momentos em casos especiais.","C","ESAF","O débito é feito no ato do registro."],
  ["O depósito para garantia de qualquer natureza será feito no Banco do Brasil.","E","FGV","Na <b>Caixa Econômica Federal</b>, na forma da legislação específica."],
  ["O despacho para internação aplica-se às mercadorias que saem da Zona Franca de Manaus ou de Áreas de Livre Comércio em direção ao restante do território nacional.","C","ESAF","Os outros dois são o despacho para consumo e o despacho para admissão."],
  ["O fato gerador do imposto de importação é a entrada de mercadoria estrangeira no território aduaneiro.","C","ATRFB 2012","Art. 72 do R/A — a entrada é o elemento espacial do fato gerador."],
  ["Segundo o STJ, o fato gerador do imposto de importação apenas se aperfeiçoa com o registro da declaração de importação no regime comum.","C","STJ REsp 362.910/PR","Ocorre com a entrada, aperfeiçoa-se com o registro."],
  ["Para efeito de cálculo, considera-se ocorrido o fato gerador no dia do lançamento do correspondente crédito tributário quando se tratar de bens compreendidos no conceito de bagagem, acompanhada ou desacompanhada.","C","AFRFB 2012","Art. 73, II, b — não há registro de declaração nessas hipóteses."],
  ["Considera-se ocorrido o fato gerador na data do registro da declaração de importação inclusive no caso de despacho para consumo de mercadoria sob regime suspensivo de tributação.","C","ESAF","Parágrafo único do art. 73."],
  ["No caso de mercadoria constante de manifesto cujo extravio tenha sido verificado pela autoridade aduaneira, não há fato gerador do imposto de importação.","E","ESAF","Há fato gerador <b>presumido</b> (art. 72, § 1º), ocorrido no dia do lançamento."],
  ["Considera-se ocorrido o fato gerador na data do registro da declaração de admissão temporária para utilização econômica.","C","ESAF","Art. 73, IV — há suspensão apenas parcial dos tributos."],
  ["No caso de remessa postal internacional submetida ao regime de tributação simplificada, o fato gerador considera-se ocorrido na data do registro da declaração de importação.","E","FGV","No RTS não há registro de declaração — o fato gerador ocorre no <b>lançamento</b>."],
  ["Bagagem desacompanhada é o conjunto de bens que chega ao país em decorrência da viagem do indivíduo, amparado por conhecimento de carga.","C","ESAF","A acompanhada vem no mesmo meio de transporte, sem conhecimento de embarque."],
  ["Estão excluídos do conceito de bagagem os veículos automotores em geral, as motocicletas, as casas rodantes, as aeronaves e as embarcações de todo tipo.","C","ESAF","IN RFB nº 1.059/2010."],
  ["No caso de extravio, o imposto de importação será exigido do importador.","E","ESAF","Será exigido do <b>responsável</b> (transportador ou depositário); o importador faz jus à restituição."],
  ["As diferenças percentuais de mercadoria a granel extraviadas não serão consideradas quando forem inferiores a um por cento.","C","ESAF","Se superiores a 1%, o imposto é exigido sobre a totalidade do extravio."],
  ["A avaria da mercadoria tem como efeito a redução da base de cálculo do imposto de importação, proporcionalmente ao prejuízo.","C","ESAF","O importador é restituído do que pagou a maior e a RFB cobra do responsável."],
  ["A apuração da responsabilidade por avaria ou extravio continua sendo realizada por meio do processo de vistoria aduaneira.","E","FGV","A vistoria aduaneira foi extinta pela Lei nº 12.350/2010; hoje há lançamento de ofício por auto de infração."],
  ["Considera-se abandonada a mercadoria que permanecer em recinto alfandegado sem que o despacho de importação seja iniciado no prazo de noventa dias da sua descarga.","C","ESAF","Art. 642, I, a, do R/A."],
  ["Aplicada a pena de perdimento por abandono, ainda assim poderá o importador iniciar o despacho de importação.","E","ESAF","O art. 643 permite iniciar o despacho <b>antes</b> de aplicada a pena de perdimento."],
  ["Não constitui fato gerador do imposto a entrada no território aduaneiro do pescado capturado fora das águas territoriais do País por empresa nele localizada, observadas as normas da atividade pesqueira.","C","ESAF","Art. 74, I, do R/A."],
  ["Não constitui fato gerador a entrada de mercadoria à qual tenha sido aplicado o regime de exportação temporária, salvo se descumprido o regime.","E","FGV","O art. 74, II, ressalva expressamente: <b>ainda que descumprido o regime</b>."],
  ["Considera-se estrangeira, para fins de incidência do Imposto de Importação, toda mercadoria nacional ou nacionalizada exportada que retorne ao País.","E","AFRFB 2012","O art. 70 traz cinco exceções — consignação não vendida, defeito técnico, mudança de sistemática, guerra ou calamidade e fatores alheios à vontade do exportador."],
  ["A mercadoria enviada em consignação e não vendida no prazo autorizado, ao retornar, não é considerada estrangeira.","C","ESAF","Art. 70, I."],
  ["As máquinas de fabricação nacional adquiridas no mercado interno por empresas nacionais de engenharia e exportadas para obras no exterior são consideradas estrangeiras ao retornar ao País.","C","ESAF","Parágrafo único do art. 70 — a exportação foi definitiva, logo houve desnacionalização."],
  ["O Imposto de Importação incide sobre mercadoria estrangeira que tenha sido objeto de pena de perdimento, exceto na hipótese em que não seja localizada, tenha sido consumida ou revendida.","E","AFRFB 2012","É o contrário: o imposto <b>não incide</b> sobre a mercadoria objeto de perdimento, salvo naquelas hipóteses (art. 71, III)."],
  ["O imposto de importação não incide sobre mercadoria estrangeira em trânsito aduaneiro de passagem, acidentalmente destruída.","C","ATRFB 2012","Art. 71, VII, do R/A."],
  ["Para que não incida o imposto sobre mercadoria destruída sob controle aduaneiro, é necessário que ela tenha se revelado imprestável para o fim a que se destinava.","E","FGV","Basta a destruição sob controle aduaneiro, sem ônus para a Fazenda Nacional e antes do desembaraço."],
  ["Não incide o imposto sobre mercadoria estrangeira devolvida para o exterior antes do registro da declaração de importação.","C","ESAF","Art. 71, IV — o fato gerador não se aperfeiçoou."],
  ["O sujeito ativo do imposto de importação é a Secretaria Especial da Receita Federal do Brasil.","E","FGV","O sujeito ativo é a <b>União</b>; a RFB é apenas o órgão que administra o tributo."],
  ["São contribuintes do imposto de importação o importador, o destinatário de remessa postal internacional indicado pelo respectivo remetente e o adquirente de mercadoria entrepostada.","C","ATRFB 2012","Art. 104 do R/A."],
  ["O transportador e o depositário são contribuintes do imposto de importação.","E","ESAF","São <b>responsáveis</b> (art. 105) — não têm relação pessoal e direta com o fato gerador."],
  ["O representante, no País, do transportador estrangeiro é responsável subsidiário pelo imposto de importação.","E","ATRFB 2012","É responsável <b>solidário</b> (art. 106, II)."],
  ["O encomendante predeterminado que adquire mercadoria de procedência estrangeira de pessoa jurídica importadora é responsável solidário pelo imposto.","C","ESAF","Art. 106, IV, do R/A."],
  ["Mercadoria não identificada é tributada pela alíquota única de oitenta por cento, relativa ao I.I, ao IPI, ao PIS/PASEP-Importação, à COFINS-Importação e ao AFRMM.","C","ESAF","A base é arbitrada pela mediana dos valores por quilograma do semestre anterior, pela mesma via de transporte."],
  ["O Regime de Tributação Especial permite a classificação genérica, para fins de despacho de importação, dos bens por ele abarcados, mediante a aplicação de alíquotas diferenciadas do Imposto de Importação e isenção do IPI, do PIS/PASEP-Importação e da COFINS-Importação.","E","AFRFB 2012","Essa é a definição do regime de tributação <b>SIMPLIFICADA</b>. O especial aplica-se a bagagem, com alíquota de 50% apenas de I.I."],
  ["O Regime de Tributação Simplificada permite o despacho de bens integrantes de bagagem mediante a exigência tão somente do Imposto de Importação, calculado pela alíquota de cinquenta por cento sobre o valor do bem.","E","AFRFB 2012","Inversão de novo: o simplificado é o das remessas postais, com alíquota de 60%."],
  ["Os bens integrantes de remessa postal internacional de valor não superior a cinquenta dólares são desembaraçados com isenção do Imposto de Importação, desde que remetente e destinatário sejam pessoas físicas.","C","ESAF","Exige-se ainda o transporte pelo serviço postal."],
  ["O Regime de Tributação Unificada permite a importação, por via terrestre, de mercadorias procedentes do Paraguai, mediante o pagamento unificado do Imposto de Importação, do IPI, do PIS/PASEP-Importação e da COFINS-Importação.","C","AFRFB 2012","Art. 102-A do R/A, criado pela Lei nº 11.898/2009."],
  ["Não poderá optar pelo RTU a microempresa optante pelo SIMPLES Nacional.","E","ATRFB 2012","Ao contrário: <b>somente</b> microempresas importadoras varejistas optantes pelo SIMPLES podem se habilitar."],
  ["É vedada a inclusão no Regime de Tributação Unificada de quaisquer mercadorias que não sejam destinadas ao consumidor final.","C","AFRFB 2014","Art. 102-A, § 2º — além de armas, fogos, bebidas, cigarros, veículos, medicamentos, pneus e bens usados."],
  ["No RTU, a operação de importação e o despacho aduaneiro poderão ser realizados pelo empresário, pelo sócio da sociedade empresária, por pessoa física nomeada pelo optante ou por despachante aduaneiro.","C","ATRFB 2012","Art. 809, II-A e IV, do R/A."],
  ["Apesar de ser tributo de competência dos Estados e do Distrito Federal, o RTU poderá incluir o ICMS devido pelo optante.","C","AFRFB 2012","Desde que o Estado ou o DF adira ao regime mediante convênio (art. 10, § 3º, do Decreto nº 6.956/2009)."],
  ["O habilitado ao RTU fará jus aos benefícios fiscais de isenção e de redução dos impostos e contribuições incidentes.","E","ESAF","Não fará jus a benefício algum, nem a redução de alíquotas ou de bases de cálculo."],
  ["A isenção ou a redução do imposto de importação somente será reconhecida quando decorrente de lei ou de ato internacional.","C","ESAF","Art. 115 — o Regulamento Aduaneiro apenas compila as isenções."],
  ["O reconhecimento da isenção do imposto de importação gera direito adquirido ao beneficiário.","E","ESAF","Pode ser revogado de ofício se o beneficiário não satisfazia ou deixou de satisfazer as condições."],
  ["Em regra, a isenção ou a redução do imposto somente beneficiará mercadoria sem similar nacional e transportada em navio de bandeira brasileira.","C","ESAF","Art. 118 do R/A."]
];

var EX = {
S1:{t:"sort", instr:"Na importação ou na exportação?",
  buckets:["Incide na importação","Imune na exportação"],
  items:[["Imposto de Importação",0],["AFRMM",0],["Taxa de Utilização do SISCOMEX",0],
         ["IPI",1],["ICMS",1],["Contribuições sociais e CIDE",1]],
  why:"Na exportação só sobra o I.E — o resto é imunidade constitucional."},

S2:{t:"sort", instr:"Cada tributo obedece à NOVENTENA?",
  buckets:["Obedece à noventena","Não obedece"],
  items:[["IPI",0],["PIS/PASEP-Importação",0],["COFINS-Importação",0],
         ["Imposto de Importação",1],["Imposto de Exportação",1]],
  why:"O IPI é a pegadinha: exceção à legalidade e à anterioridade, mas obedece aos 90 dias."},

S3:{t:"match", instr:"Ligue cada conceito à sua definição",
  pairs:[["Nacional","Fabricado no Brasil ou com transformação substancial aqui"],
         ["Nacionalizado","Estrangeiro importado com ânimo de definitividade"],
         ["Desnacionalizado","Nacional exportado com ânimo de definitividade"]],
  why:"O que define é sempre o ânimo de definitividade."},

S4:{t:"mc", instr:"A CF/88 autorizou a União a instituir o I.I e o I.E sobre:",
  options:["Produtos — conceito mais amplo que bens e mercadorias",
           "Mercadorias, apenas",
           "Bens móveis destinados a operações mercantis",
           "Serviços e mercadorias, indistintamente"],
  answer:0,
  why:"O art. 153 fala em produtos; o R/A fala em mercadoria, mas a interpretação sistemática alcança bens."},

S5:{t:"gap", instr:"Complete a modalidade de lançamento do I.I",
  before:"Em regra, o imposto de importação é objeto de lançamento por ",
  after:", cabendo à autoridade aduaneira homologá-lo a posteriori.",
  options:["homologação","ofício","declaração"], answer:0,
  why:"O importador registra a declaração e antecipa o pagamento sem prévio exame da autoridade."},

S6:{t:"mc", instr:"No lançamento por homologação do I.I, o prazo decadencial de 5 anos conta-se:",
  options:["Da data da ocorrência do fato gerador",
           "Do primeiro dia do exercício seguinte àquele em que poderia ter sido lançado",
           "Da data do desembaraço aduaneiro",
           "Da data da notificação do auto de infração"],
  answer:0,
  why:"É o único caso em que a decadência conta da própria data do fato gerador — o art. 752, I, do R/A não se aplica ao I.I."},

S7:{t:"sort", instr:"Qual é a base de cálculo, conforme a alíquota?",
  buckets:["Alíquota ad valorem","Alíquota específica"],
  items:[["Valor aduaneiro (art. VII do GATT 1994)",0],
         ["Quantidade de mercadoria na unidade de medida",1]],
  why:"Art. 75 do Regulamento Aduaneiro — inverter os dois é a questão clássica da ESAF."},

S8:{t:"multi", instr:"Marque o que é correto sobre pagamento e cálculo do I.I",
  options:["É pago na data do registro da declaração de importação",
           "O Ministro da Economia pode fixar outros momentos em casos especiais",
           "O depósito para garantia é feito na Caixa Econômica Federal",
           "A alíquota aplicável é a vigente na data da entrada física da mercadoria"],
  answers:[0,1,2],
  why:"A alíquota é a da data do fato gerador — em regra, o registro da declaração."},

S9:{t:"wordbank", instr:"Monte o fato gerador do I.I (art. 72 do R/A)",
  target:["a","entrada","de","mercadoria","estrangeira","no","território","aduaneiro"],
  extra:["o registro da declaração","o desembaraço","a nacionalização"],
  why:"A entrada é o elemento espacial; o registro é apenas o marco temporal de cálculo."},

S10:{t:"sort", instr:"Quando se considera ocorrido o fato gerador?",
  buckets:["Registro da declaração","Dia do lançamento"],
  items:[["Despacho para consumo",0],["Remessa postal do regime comum",0],
         ["Bagagem acompanhada ou desacompanhada",1],["Extravio verificado pela autoridade",1],
         ["Mercadoria sem DI consumida ou revendida",1]],
  why:"Onde não há registro de declaração, o marco passa a ser o lançamento."},

S11:{t:"mc", instr:"Remessa postal internacional de US$ 2.000, sem bebida nem tabaco. Qual o tratamento?",
  options:["Regime de tributação simplificada, alíquota de 60%, FG no lançamento",
           "Regime de tributação comum, com DUIMP, FG no registro",
           "Regime de tributação especial, alíquota de 50%",
           "Isenção integral, por ser remessa postal"],
  answer:0,
  why:"O RTS vale até US$ 3.000; acima disso, ou com bebida alcoólica e tabaco, vai para o regime comum."},

S12:{t:"multi", instr:"Marque os bens EXCLUÍDOS do conceito de bagagem",
  options:["Veículos automotores em geral","Casas rodantes (motor homes)",
           "Embarcações de todo tipo","Livros, folhetos e periódicos",
           "Bens de uso ou consumo pessoal"],
  answers:[0,1,2],
  why:"Livros e bens de uso pessoal não só são bagagem como são isentos."},

S13:{t:"order", instr:"Ordene os prazos de abandono do art. 642, do menor para o maior",
  items:["45 dias após esgotado o prazo de entreposto aduaneiro",
         "60 dias da notificação do art. 640",
         "90 dias da descarga da mercadoria"],
  why:"45 · 60 · 90 — os três prazos do abandono."},

S14:{t:"gap", instr:"Complete a regra do extravio a granel",
  before:"As diferenças percentuais de mercadoria a granel extraviadas não serão consideradas quando forem inferiores a ",
  after:"; acima disso, o imposto é exigido sobre a integralidade do extravio.",
  options:["1%","5%","10%"], answer:0,
  why:"E quem paga é o responsável — transportador ou depositário —, não o importador."},

S15:{t:"multi", instr:"Marque as exceções do art. 70 — retorno SEM ser considerado estrangeiro",
  options:["Enviada em consignação e não vendida no prazo autorizado",
           "Devolvida por defeito técnico, para reparo ou substituição",
           "Retorno por motivo de guerra ou calamidade pública",
           "Máquina de fabricação nacional exportada por empresa de engenharia para obra no exterior"],
  answers:[0,1,2],
  why:"A máquina da empresa de engenharia É considerada estrangeira no retorno (parágrafo único)."},

S16:{t:"sort", instr:"Incide ou não incide o imposto de importação?",
  buckets:["NÃO incide (art. 71)","INCIDE"],
  items:[["Mercadoria devolvida antes do registro da declaração",0],
         ["Mercadoria destruída sob controle aduaneiro antes do desembaraço",0],
         ["Trânsito de passagem acidentalmente destruído",0],
         ["Mercadoria com perdimento que foi revendida",1],
         ["Retorno de mercadoria exportada em definitivo",1]],
  why:"O perdimento afasta o imposto — salvo se a mercadoria não for localizada, for consumida ou revendida."},

S17:{t:"sort", instr:"Contribuinte, responsável ou responsável solidário?",
  buckets:["Contribuinte","Responsável","Solidário"],
  items:[["Importador",0],["Destinatário de remessa postal",0],["Adquirente de mercadoria entrepostada",0],
         ["Transportador",1],["Depositário",1],
         ["Representante no País do transportador estrangeiro",2],["Encomendante predeterminado",2]],
  why:"Contribuinte tem relação pessoal e direta; responsável responde sozinho; solidário divide o polo passivo."},

S18:{t:"gap", instr:"Complete o sujeito ativo do imposto de importação",
  before:"O sujeito ativo da obrigação tributária relativa ao imposto de importação é ",
  after:", a quem a CF/88 atribuiu a competência no art. 153, inciso I.",
  options:["a União","a Receita Federal do Brasil","o Ministério da Economia"], answer:0,
  why:"Sujeito ativo é a pessoa jurídica de direito público titular da competência (art. 119 do CTN); a RFB apenas administra."},

S19:{t:"match", instr:"Ligue cada regime à sua alíquota e ao seu objeto",
  pairs:[["Tributação simplificada (RTS)","Remessa postal · 60%"],
         ["Tributação especial (RTE)","Bagagem · 50%"],
         ["Tributação unificada (RTU)","Paraguai, via terrestre · 25%"]],
  why:"Trocar RTS e RTE é a inversão mais cobrada da aula."},

S20:{t:"gap", instr:"Complete o limite do Regime de Tributação Simplificada",
  before:"O RTS pode ser utilizado no despacho de bens de remessa postal ou encomenda aérea internacional no valor de até ",
  after:", com alíquota de I.I de 60%, qualquer que seja a classificação fiscal.",
  options:["US$ 3.000,00","US$ 500,00","US$ 50,00"], answer:0,
  why:"Até US$ 50,00 entre pessoas físicas pelo serviço postal há isenção."},

S21:{t:"multi", instr:"Marque o que é VEDADO no Regime de Tributação Unificada",
  options:["Mercadorias não destinadas ao consumidor final","Armas, munições e fogos de artifício",
           "Bebidas alcoólicas, cigarros e medicamentos","Bens novos adquiridos por microempresa do SIMPLES"],
  answers:[0,1,2],
  why:"A microempresa varejista optante pelo SIMPLES é justamente quem pode se habilitar."},

S22:{t:"order", instr:"Ordene os limites de valor do RTU, do menor para o maior",
  items:["R$ 18.000 — 1º e 2º trimestres-calendário",
         "R$ 37.000 — 3º e 4º trimestres-calendário",
         "R$ 110.000 — por ano-calendário"],
  why:"Decreto nº 6.956/2009, art. 3º."},

S23:{t:"mc", instr:"A alíquota única de 80% aplica-se a:",
  options:["Mercadoria não identificada — extraviada ou consumida e com descrição genérica",
           "Bens de bagagem que excedam o limite de isenção",
           "Remessas postais internacionais até US$ 3.000",
           "Mercadorias procedentes do Paraguai no RTU"],
  answer:0,
  why:"Os 80% cobrem I.I, IPI, PIS/PASEP-Importação, COFINS-Importação e AFRMM."},

S24:{t:"multi", instr:"Marque o que é correto sobre a isenção do imposto de importação",
  options:["Só é reconhecida quando decorrente de lei ou de ato internacional",
           "Em regra, exige mercadoria sem similar nacional e transporte em navio de bandeira brasileira",
           "Seu reconhecimento pode ser revogado de ofício",
           "É concedida pelo próprio Regulamento Aduaneiro"],
  answers:[0,1,2],
  why:"O R/A apenas compila isenções previstas em leis esparsas — não as concede."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que incide na importação e o que é imune na exportação",
      '<div class="box"><span class="bl">Importação: chove tributo</span>'+
      '<p><b>I.I</b> · <b>IPI</b> · <b>PIS/PASEP-Importação</b> · <b>COFINS-Importação</b> · <b>ICMS</b> · <b>AFRMM</b>, mais a <b>Taxa de Utilização do SISCOMEX</b> e eventuais <b>CIDEs</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Exportação: só o I.E</span>'+
      '<p>A CF/88 imunizou tudo o mais, para incentivar as vendas ao exterior:</p>'+
      '<p><b>i)</b> IPI (art. 153, § 3º, III) · <b>ii)</b> ICMS (art. 155, § 2º, X, a) · <b>iii)</b> contribuições sociais e CIDE (art. 149, § 2º, I).</p>'+
      '<p class="mn"><em>Imunidade = não-incidência constitucionalmente qualificada.</em></p></div>'+
      '<div class="box trap"><span class="bl">Princípios — a tabela que cai sempre</span>'+
      '<p><b>I.I e I.E:</b> não obedecem à <b>legalidade</b>, à <b>anterioridade</b> nem à <b>noventena</b>. Alíquota alterada pela <b>CAMEX</b>, por Resolução, com <b>efeito imediato</b>.</p>'+
      '<p><b>IPI:</b> exceção à legalidade e à anterioridade, mas <b>OBEDECE à noventena</b> — 90 dias.</p>'+
      '<p><b>PIS/COFINS-Importação:</b> <b>obedecem à legalidade</b>, não obedecem à anterioridade, <b>obedecem à noventena</b>.</p>'+
      '<p class="mn"><em>Tudo isso porque a tributação no comércio exterior é <b>extrafiscal</b>: serve para regular, não para arrecadar.</em></p></div>'),
    sl("Bens, produtos e mercadorias — e a origem",
      '<div class="box"><span class="bl">Três conceitos, um em cima do outro</span>'+
      '<p><b>Bem:</b> coisa com utilidade econômica, avaliável em dinheiro.<br>'+
      '<b>Produto:</b> o <b>mais amplo</b> — tudo que se extrai de outra coisa, inclusive o que não tem valor econômico.<br>'+
      '<b>Mercadoria:</b> bem <b>móvel destinado a operação mercantil</b>.</p>'+
      '<p class="mn"><em>Toda mercadoria é bem; nem todo bem é mercadoria. Bagagem é bem, não mercadoria.</em></p></div>'+
      '<div class="box trap"><span class="bl">A divergência de redação</span>'+
      '<p>A <b>CF/88</b> (art. 153, I e II) autoriza o I.I e o I.E sobre <b>PRODUTOS</b>. O <b>R/A</b> (arts. 69 e 212) fala em <b>MERCADORIA</b>.</p>'+
      '<p>Na prática, o I.I incide sobre <b>bens</b>: há incidência sobre bagagem, aluguel, arrendamento operacional e doação — nenhum deles operação mercantil.</p></div>'+
      '<div class="box"><span class="bl">Nacional, estrangeiro, nacionalizado, desnacionalizado</span>'+
      '<p><b>Nacional:</b> fabricado no Brasil ou com <b>transformação substancial</b> aqui.<br>'+
      '<b>Estrangeiro:</b> originário do exterior, pelas regras de origem.<br>'+
      '<b>Nacionalizado:</b> estrangeiro importado <b>com ânimo de definitividade</b>.<br>'+
      '<b>Desnacionalizado:</b> nacional ou nacionalizado <b>exportado com ânimo de definitividade</b>.</p>'+
      '<p class="mn"><em>Regime temporário não muda nada: admissão temporária não nacionaliza (retorno = <b>reexportação</b>); exportação temporária não desnacionaliza (retorno = <b>reimportação</b>).</em></p></div>')
  ],
  V2:[
    sl("Extrafiscalidade, lançamento e base de cálculo",
      '<div class="box"><span class="bl">Por que o I.I é flexível</span>'+
      '<p>Alíquota <b>alta</b> protege a indústria nacional; alíquota <b>baixa</b> estimula a entrada de bens. Por isso o art. 153, § 1º, da CF/88 permite ao Executivo alterá-la — hoje é a <b>CAMEX</b>, por Resolução.</p>'+
      '<p><b>Limites:</b> os <b>tetos tarifários da OMC</b> (Lista de Concessões), só superáveis por <b>renegociação multilateral</b>, e a <b>TEC</b> do MERCOSUL — que tem <b>listas de exceção</b>, e é por isso que o bloco é uma <b>união aduaneira imperfeita</b>.</p></div>'+
      '<div class="box"><span class="bl">Lançamento por homologação</span>'+
      '<p>O importador registra a <b>DUIMP</b> no Portal Único e os tributos são <b>debitados automaticamente</b>. A RFB homologa <b>depois</b>.</p>'+
      '<p><b>Prazo:</b> <b>5 anos da ocorrência do fato gerador</b> (art. 150, § 4º, do CTN). Findo o prazo: <b>homologação tácita</b> e <b>extinção definitiva</b>, salvo <b>dolo, fraude ou simulação</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Cuidado com o art. 752, I, do R/A</span>'+
      '<p>Ele manda contar 5 anos do <b>primeiro dia do exercício seguinte</b> — e <b>não se aplica ao I.I</b>. No lançamento por homologação, a decadência conta <b>da própria data do fato gerador</b>. É o único caso em que isso ocorre.</p></div>'),
    sl("Base de cálculo, alíquota e pagamento",
      '<div class="box"><span class="bl">Art. 75 — duas situações</span>'+
      '<p><b>Ad valorem →</b> a base é o <b>VALOR ADUANEIRO</b>, apurado pelo <b>art. VII do GATT 1994</b> (acordo internalizado, com status de <b>lei ordinária</b>).<br>'+
      '<b>Específica →</b> a base é a <b>QUANTIDADE</b> na unidade de medida estabelecida.</p>'+
      '<p class="mn"><em>Inverter os dois é a questão mais repetida da ESAF sobre o tema.</em></p></div>'+
      '<div class="box"><span class="bl">Alíquota e câmbio</span>'+
      '<p>Aplica-se a alíquota <b>vigente na data do fato gerador</b>, fixada na <b>TEC</b> — salvo <b>RTS</b> (remessa postal), <b>RTE</b> (bagagem) e <b>RTU</b> (Paraguai).</p>'+
      '<p>Conversão de moeda: <b>taxa vigente na data do fato gerador</b> (art. 97). Pela Decisão CMC nº 13/2007, a taxa é a do <b>fechamento do dia anterior</b> à numeração do despacho — <b>as duas respostas são aceitas</b> em prova.</p></div>'+
      '<div class="box tip"><span class="bl">Pagamento</span>'+
      '<p>Na <b>data do registro da declaração</b>, com débito automático. O <b>Ministro da Economia</b> pode fixar outros momentos em casos especiais. Depósito para garantia: <b>Caixa Econômica Federal</b>.</p>'+
      '<p><b>Três despachos:</b> para <b>consumo</b> (definitivo) · para <b>admissão</b> (regimes especiais) · para <b>internação</b> (saída da ZFM/ALC para o restante do país).</p></div>')
  ],
  V3:[
    sl("Fato gerador: entrada, registro e as exceções",
      '<div class="box"><span class="bl">O fato gerador em si</span>'+
      '<p>É a <b>entrada de mercadoria estrangeira no território aduaneiro</b> (art. 72) — o <b>elemento espacial</b>.</p>'+
      '<p><b>STJ (REsp 362.910/PR):</b> ocorre com a <b>entrada</b>, mas só se <b>aperfeiçoa com o registro</b> da declaração no regime comum.</p></div>'+
      '<div class="box"><span class="bl">Art. 73 — quatro marcos temporais</span>'+
      '<p><b>I — registro da declaração</b>, na mercadoria em <b>despacho para consumo</b> (inclusive saindo de regime suspensivo).</p>'+
      '<p><b>II — dia do LANÇAMENTO</b>, quando <b>não há declaração</b>: <b>a)</b> remessa postal fora do regime comum; <b>b)</b> <b>bagagem</b>; <b>c)</b> <b>extravio</b> verificado; <b>d)</b> mercadoria sem DI <b>consumida, revendida ou não localizada</b>.</p>'+
      '<p><b>III — vencimento do prazo de permanência</b> em recinto alfandegado, no <b>abandono</b>, se o despacho começar antes do perdimento.</p>'+
      '<p><b>IV — registro da declaração de admissão temporária para utilização econômica</b> (suspensão apenas parcial).</p>'+
      '<p class="mn"><em>Regra de ouro: <b>tem declaração → registro; não tem → lançamento</b>.</em></p></div>'),
    sl("Remessa postal, bagagem, extravio e abandono",
      '<div class="box"><span class="bl">Remessa postal</span>'+
      '<p><b>Simplificada (RTS):</b> até <b>US$ 3.000</b>, I.I de <b>60%</b>, sem declaração → FG no <b>lançamento</b>. Isenção até <b>US$ 50</b> entre <b>pessoas físicas</b>, pelo serviço postal.<br>'+
      '<b>Comum:</b> acima de US$ 3.000, ou bebida alcoólica e tabaco → <b>com declaração</b> → FG no <b>registro</b>.</p></div>'+
      '<div class="box"><span class="bl">Bagagem (IN RFB nº 1.059/2010)</span>'+
      '<p><b>Acompanhada:</b> vem com o viajante, sem conhecimento de embarque. <b>Desacompanhada:</b> amparada por conhecimento de carga.</p>'+
      '<p><b>Quatro tratamentos:</b> isenção · <b>RTE</b> · regime comum · perdimento.</p>'+
      '<p><b>Isenção:</b> livros, folhetos e periódicos; bens de uso pessoal; outros bens até <b>US$ 500</b>, qualquer que seja a via. Limites: <b>12 L</b> de bebida · <b>10 maços</b> · <b>25</b> charutos · <b>250 g</b> de fumo.</p>'+
      '<p><b>Fora do conceito de bagagem:</b> veículos, motos, casas rodantes, aeronaves e embarcações de todo tipo.</p></div>'+
      '<div class="box trap"><span class="bl">Extravio × avaria × abandono</span>'+
      '<p><b>Extravio:</b> fato gerador <b>presumido</b> (art. 72, § 1º). Paga o <b>responsável</b> — transportador ou depositário; o <b>importador é restituído</b>. A granel: ignora-se até <b>1%</b>; acima disso, cobra-se <b>tudo</b>.</p>'+
      '<p><b>Avaria:</b> <b>reduz a base de cálculo</b> proporcionalmente ao prejuízo; o importador é restituído e o responsável é cobrado.</p>'+
      '<p class="mn"><em>A <b>vistoria aduaneira</b> foi extinta pela Lei nº 12.350/2010 — hoje há <b>lançamento de ofício por auto de infração</b>.</em></p>'+
      '<p><b>Abandono (art. 642):</b> <b>90 dias</b> da descarga · <b>45 dias</b> após entreposto, recinto de zona secundária ou chegada como bagagem · <b>60 dias</b> da notificação. O art. 643 permite <b>iniciar o despacho antes do perdimento</b>, pagando tributos, juros, multa de mora e despesas.</p></div>')
  ],
  V4:[
    sl("Não-ocorrência, não-incidência e sujeição passiva",
      '<div class="box"><span class="bl">Art. 74 — NÃO OCORRE o fato gerador</span>'+
      '<p><b>I)</b> <b>pescado</b> capturado fora das águas territoriais por empresa aqui localizada;<br>'+
      '<b>II)</b> retorno de mercadoria em <b>exportação temporária</b> — <b>ainda que descumprido o regime</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 70 — retorno de mercadoria exportada</span>'+
      '<p><b>Regra:</b> ela volta como <b>ESTRANGEIRA</b> (desnacionalizou-se) → <b>incide</b> o I.I.</p>'+
      '<p><b>Cinco exceções:</b> <b>I)</b> consignação não vendida no prazo; <b>II)</b> defeito técnico, reparo ou substituição; <b>III)</b> mudança na sistemática de importação do país importador; <b>IV)</b> guerra ou calamidade pública; <b>V)</b> outros fatores <b>alheios à vontade do exportador</b>.</p>'+
      '<p class="mn"><em>Parágrafo único: máquinas nacionais de <b>empresas de engenharia</b> exportadas para obras no exterior <b>SÃO</b> estrangeiras no retorno.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 71 — NÃO INCIDE o imposto</span>'+
      '<p><b>I)</b> erro inequívoco de expedição, redestinada ou devolvida · <b>II)</b> mercadoria de <b>reposição</b> de outra defeituosa · <b>III)</b> objeto de <b>perdimento</b> · <b>IV)</b> devolvida <b>antes do registro</b> · <b>V)</b> embarcações construídas no Brasil que voltam ao registro brasileiro · <b>VI)</b> destruída <b>sob controle aduaneiro</b>, sem ônus e antes do desembaraço · <b>VII)</b> <b>trânsito de passagem</b> acidentalmente destruído.</p>'+
      '<p><b>A ressalva do III:</b> se a mercadoria com perdimento <b>não for localizada, for consumida ou revendida</b>, o imposto <b>INCIDE</b> e o FG é o <b>lançamento</b>.</p></div>'),
    sl("Quem paga: contribuintes, responsáveis e solidários",
      '<div class="box"><span class="bl">Sujeito ativo</span>'+
      '<p>A <b>UNIÃO</b> — art. 153, I, da CF/88. A RFB apenas administra.</p></div>'+
      '<div class="box"><span class="bl">Contribuintes — art. 104</span>'+
      '<p><b>I)</b> o <b>importador</b> (quem promove a entrada — em cujo nome se registra a declaração);<br>'+
      '<b>II)</b> o <b>destinatário de remessa postal internacional</b> indicado pelo remetente;<br>'+
      '<b>III)</b> o <b>adquirente de mercadoria entrepostada</b>.</p></div>'+
      '<div class="box"><span class="bl">Responsáveis — art. 105</span>'+
      '<p>O <b>transportador</b>, o <b>depositário</b> e quem a lei designar. Respondem <b>sozinhos</b> — é o caso do <b>extravio</b> e da <b>avaria</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Responsáveis solidários — art. 106</span>'+
      '<p><b>I)</b> adquirente ou cessionário de mercadoria com <b>isenção ou redução</b>; <b>II)</b> <b>representante no País do transportador estrangeiro</b>; <b>III)</b> adquirente na importação <b>por conta e ordem</b>; <b>IV)</b> <b>encomendante predeterminado</b>; <b>V)</b> expedidor, <b>OTM</b> ou subcontratado do transporte multimodal; <b>VI)</b> beneficiário de regime suspensivo para industrialização-exportação; <b>VII)</b> quem a lei designar.</p>'+
      '<p class="mn"><em>Pegadinha de 2012: o representante do transportador estrangeiro é <b>solidário</b>, não subsidiário.</em></p></div>')
  ],
  V5:[
    sl("Os três regimes de tributação e a mercadoria não identificada",
      '<div class="box trap"><span class="bl">Não identificada — 80%</span>'+
      '<p>É a mercadoria <b>extraviada ou consumida</b> que tinha <b>descrição genérica</b> nos documentos. Alíquota <b>única de 80%</b>, cobrindo <b>I.I, IPI, PIS/PASEP-Imp., COFINS-Imp. e AFRMM</b>.</p>'+
      '<p>Base arbitrada pela <b>mediana dos valores por quilograma</b> de importações definitivas <b>pela mesma via</b>, no <b>semestre anterior</b>, com <b>frete e seguro</b>. Sem peso informado: <b>peso líquido da unidade de carga</b>.</p></div>'+
      '<div class="box"><span class="bl">RTS — simplificada · remessa postal · 60%</span>'+
      '<p>Permite <b>classificação genérica</b> de bens de <b>remessa postal internacional</b>, com alíquota diferenciada de I.I e <b>isenção de IPI, PIS/PASEP-Imp. e COFINS-Imp.</b> Valor de até <b>US$ 3.000</b> (Portaria MF nº 156/99); isenção até <b>US$ 50</b> entre pessoas físicas pelo serviço postal.</p></div>'+
      '<div class="box"><span class="bl">RTE — especial · bagagem · 50%</span>'+
      '<p>Despacho de bens de <b>bagagem</b> com exigência <b>só do I.I</b>, a <b>50%</b>, sobre o que <b>exceder a isenção</b> (US$ 500). Também alcança o excedente das <b>lojas francas</b>: <b>US$ 300</b> na fronteira, <b>US$ 1.000</b> em aeroportos e portos.</p>'+
      '<p class="mn"><em>RTS = postal 60% · RTE = bagagem 50%. A ESAF adora trocar as duas definições.</em></p></div>'),
    sl("RTU e as isenções do imposto de importação",
      '<div class="box"><span class="bl">RTU — art. 102-A · Lei nº 11.898/2009</span>'+
      '<p>Importação <b>por via terrestre</b> de mercadorias <b>procedentes do Paraguai</b> (fronteira Foz do Iguaçu / Ciudad del Este), com <b>pagamento unificado</b> de <b>I.I, IPI, PIS/PASEP-Imp. e COFINS-Imp.</b></p>'+
      '<p><b>Quem se habilita:</b> só <b>microempresas importadoras varejistas optantes pelo SIMPLES</b>.<br>'+
      '<b>Alíquota única de 25%</b> sobre o preço de aquisição = <b>7,88% I.I · 7,87% IPI · 7,60% COFINS-Imp. · 1,65% PIS/PASEP-Imp.</b></p>'+
      '<p><b>Limites:</b> <b>R$ 18.000</b> (1º e 2º trimestres) · <b>R$ 37.000</b> (3º e 4º) · <b>R$ 110.000</b> por ano.</p>'+
      '<p><b>Vedado:</b> o que não se destina ao <b>consumidor final</b>, armas e munições, fogos, bebidas, cigarros, veículos e embarcações (com partes e peças), medicamentos, pneus, bens usados e bens com importação suspensa ou proibida. O habilitado <b>não faz jus a benefício fiscal algum</b>.</p>'+
      '<p class="mn"><em>O <b>ICMS</b> pode entrar no RTU, desde que o Estado ou o DF <b>adira por convênio</b>.</em></p></div>'+
      '<div class="box tip"><span class="bl">Isenções — art. 115 e seguintes</span>'+
      '<p>Só decorrem de <b>LEI ou ATO INTERNACIONAL</b> — o <b>R/A não concede</b>, apenas compila. A legislação de isenção interpreta-se <b>literalmente</b>.</p>'+
      '<p><b>Condições gerais (art. 118):</b> mercadoria <b>sem similar nacional</b> e <b>transportada em navio de bandeira brasileira</b>; exige-se ainda <b>quitação de tributos federais</b>.</p>'+
      '<p>O reconhecimento é feito <b>caso a caso</b> pela autoridade aduaneira, pode ser requerido na própria declaração e <b>NÃO gera direito adquirido</b> — é revogável de ofício.</p>'+
      '<p><b>Beneficiários do art. 136, I:</b> entes federativos e autarquias · partidos políticos e instituições de educação ou assistência social · missões diplomáticas e repartições consulares · organismos internacionais · instituições científicas e tecnológicas, cientistas e pesquisadores.</p></div>')
  ]
};

var TEC = [
  ["Monte seu caderno no TEC — Imposto de Importação: fato gerador e base de cálculo","https://www.tecconcursos.com.br/questoes/filtro","filtro"],
  ["Monte seu caderno no TEC — regimes de tributação (RTS, RTE e RTU) e isenções","https://www.tecconcursos.com.br/questoes/filtro","filtro"]
];
var TECNOTA = "Material montado a partir da Aula 01 do curso de Legislação Aduaneira do Estratégia, com as questões comentadas de ATRFB 2012, AFRFB 2012/2014 e Exame de Despachante Aduaneiro que acompanham o PDF. No TEC, filtre por “Legislação Aduaneira → Imposto de Importação” e marque ESAF (provas antigas da Receita) e FGV (banca atual). ATENÇÃO À DATA: o PDF de origem é de março de 2021. Os VALORES são o que mais envelhece aqui — limite de isenção de bagagem, teto do RTS, limites do RTU e alíquotas das lojas francas já foram alterados mais de uma vez. Confira cada número na Portaria MF nº 156/99, na IN RFB nº 1.059/2010, no Decreto nº 6.956/2009 e no Regulamento Aduaneiro vigentes antes de dar por decorado. A estrutura jurídica — fato gerador, não-incidência, sujeição passiva — é estável.";

var UNITS = [
  {n:1, title:"Tributação sobre o comércio exterior", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Tributos, imunidades, princípios e conceitos", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · tributos e princípios",       xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6","T7","T8","T9"]},
    {id:"K3", type:"drill",  title:"Praticar · bens, produtos e origem",     xp:25, data:["S3","S4","T10","T11","T12","T13","T14"]},
    {id:"K4", type:"flash",  title:"Flashcards · comércio exterior",         xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
  ]},
  {n:2, title:"Lançamento, base de cálculo e pagamento", cvar:"u2", lessons:[
    {id:"K5", type:"teoria", title:"Extrafiscalidade, homologação e valor aduaneiro", xp:10, data:"V2"},
    {id:"K6", type:"drill",  title:"Praticar · extrafiscalidade e lançamento", xp:25, data:["S5","S6","T15","T16","T17","T18","T19","T20"]},
    {id:"K7", type:"drill",  title:"Praticar · base de cálculo e pagamento", xp:25, data:["S7","S8","T21","T22","T23","T24","T25","T26","T27"]},
    {id:"K8", type:"flash",  title:"Flashcards · cálculo do imposto",        xp:15, data:[16,17,18,19,20,21,22,23,24,25,26,27,28,29]}
  ]},
  {n:3, title:"Fato gerador do Imposto de Importação", cvar:"u3", lessons:[
    {id:"K9", type:"teoria", title:"Entrada, registro, lançamento e exceções", xp:10, data:"V3"},
    {id:"K10",type:"drill",  title:"Praticar · marcos temporais",            xp:25, data:["S9","S10","T28","T29","T30","T31","T32","T33"]},
    {id:"K11",type:"drill",  title:"Praticar · remessa postal e bagagem",    xp:25, data:["S11","S12","T34","T35","T36"]},
    {id:"K12",type:"drill",  title:"Praticar · extravio, avaria e abandono", xp:25, data:["S13","S14","T37","T38","T39","T40","T41","T42"]},
    {id:"K13",type:"flash",  title:"Flashcards · fato gerador",              xp:15, data:[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]}
  ]},
  {n:4, title:"Não-incidência e sujeição passiva", cvar:"u4", lessons:[
    {id:"K14",type:"teoria", title:"Arts. 70, 71, 74 e quem paga o imposto", xp:10, data:"V4"},
    {id:"K15",type:"drill",  title:"Praticar · não-ocorrência e não-incidência", xp:25, data:["S15","S16","T43","T44","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K16",type:"drill",  title:"Praticar · contribuintes e responsáveis", xp:25, data:["S17","S18","T52","T53","T54","T55","T56"]},
    {id:"K17",type:"flash",  title:"Flashcards · incidência e sujeitos",     xp:15, data:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]}
  ]},
  {n:5, title:"Regimes de tributação e isenções", cvar:"u5", lessons:[
    {id:"K18",type:"teoria", title:"RTS, RTE, RTU e o regime das isenções",  xp:10, data:"V5"},
    {id:"K19",type:"drill",  title:"Praticar · RTS, RTE e não identificada", xp:25, data:["S19","S20","S23","T57","T58","T59","T60"]},
    {id:"K20",type:"drill",  title:"Praticar · RTU e isenções",              xp:25, data:["S21","S22","S24","T61","T62","T63","T64","T65","T66","T67","T68","T69"]},
    {id:"K21",type:"flash",  title:"Flashcards · regimes e isenções",        xp:15, data:[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K22", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K23", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a lista exata com que o Resumo abre a aula: na importação incidem o <b>I.I</b>, o <b>IPI</b>, o <b>PIS/PASEP-Importação</b>, a <b>COFINS-Importação</b>, o <b>ICMS</b> e o <b>AFRMM</b> (Adicional ao Frete para Renovação da Marinha Mercante).</p><p>O 'entre outros' deixa a assertiva segura: o material lembra ainda a Taxa de Utilização do SISCOMEX e, conforme a operação, CIDEs como a CIDE-Combustíveis.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional e Legislação Específica</i></p>",
1:"<p>Certo. É a frase do Resumo: sobre as operações de exportação <b>incide somente o imposto de exportação (I.E)</b>.</p><p>A CF/88, alinhada à política de incentivo às exportações, criou várias regras de não-incidência na saída: imunidade de <b>IPI</b>, imunidade de <b>ICMS</b> e imunidade das <b>contribuições sociais e CIDEs</b> sobre as receitas de exportação. Sobra apenas o I.E.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional e Legislação Específica</i></p>",
2:"<p>Errado. O IPI <b>não incide</b> sobre produtos industrializados destinados ao exterior: há <b>imunidade de IPI nas exportações</b> (art. 153 da CF/88).</p><p>É a questão ATRFB-2012 comentada no material. Grave o trio de imunidades na exportação: <b>IPI</b>, <b>ICMS</b> e <b>contribuições sociais/CIDE</b> sobre receitas de exportação. Na saída, só o I.E incide.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional e Legislação Específica</i></p>",
3:"<p>Certo. O Resumo destaca: <b>todas</b> as hipóteses de não-incidência sobre exportação previstas na CF/88 são <b>imunidades tributárias</b>.</p><p>O motivo está na definição que o material dá: imunidade é uma <b>hipótese de não-incidência constitucionalmente qualificada</b>. Se a não-incidência vem da própria Constituição (IPI, ICMS, contribuições sobre receitas de exportação), é imunidade.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional e Legislação Específica</i></p>",
4:"<p>Errado. O imposto de exportação é tributo de <b>competência da União</b>; a CF/88 <b>não atribuiu qualquer competência</b> aos Estados e ao DF quanto a esse imposto.</p><p>É a questão ATRFB-2012 comentada no Resumo. O art. 153 da CF/88 dá à União o I.I (importação de produtos estrangeiros) e o I.E (exportação, para o exterior, de produtos nacionais ou nacionalizados). Aos Estados cabe o ICMS, não o I.E.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional e Legislação Específica</i></p>",
5:"<p>Certo. O I.I <b>não obedece ao princípio da legalidade quanto à alteração de alíquotas</b>: não é preciso lei para alterá-las.</p><p>Hoje quem altera a alíquota do I.I é a <b>CAMEX</b>, mediante <b>Resolução</b>, com base no art. 153, § 1º, da CF/88 (atendidas as condições e limites da lei, é facultado ao Poder Executivo alterar as alíquotas). A razão é a flexibilidade que um tributo extrafiscal exige.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional — a) Imposto de Importação</i></p>",
6:"<p>Errado por uma palavra: <b>noventena</b>. O IPI é exceção à legalidade (quanto a alíquotas) e à anterioridade, mas <b>obedece à noventena</b>.</p><p>É o <b>Cuidado!</b> do Resumo: embora não seja necessário esperar o próximo exercício, é preciso aguardar o período mínimo de <b>90 dias</b>. Quem escapa das três (legalidade, anterioridade e noventena) são o <b>I.I</b> e o <b>I.E</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional — c) IPI</i></p>",
7:"<p>Certo. O PIS/PASEP-Importação e a COFINS-Importação <b>obedecem ao princípio da legalidade</b> quanto à alteração de alíquotas.</p><p>O quadro do Resumo completa: elas <b>não obedecem à anterioridade</b>, mas <b>obedecem à noventena</b> (anterioridade nonagesimal), conforme o art. 195, § 6º, da CF/88. Das quatro figuras do quadro (I.I, I.E, IPI, PIS/COFINS-Importação), são as únicas sujeitas à legalidade.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional — d) PIS/PASEP-Importação e COFINS-Importação</i></p>",
8:"<p>Certo. O I.I <b>não obedece à anterioridade nem à noventena</b>; logo, a alteração de alíquotas <b>gera efeitos imediatos</b>.</p><p>O Resumo explica o objetivo do constituinte: conferir <b>maior agilidade</b> às decisões governamentais sobre a regulação do comércio exterior. A nota do material reforça que o I.I não precisa obedecer a nenhum dos dois princípios (art. 150, III, b e c, da CF/88).</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.1. Introdução</i></p>",
9:"<p>Errado. O Resumo diz o oposto: a tributação sobre o comércio exterior <b>não tem finalidade arrecadatória, mas sim extrafiscal</b>.</p><p>O governo a utiliza como forma de <b>regulação econômica</b>, e é por isso que alguns princípios tributários (legalidade, anterioridade e noventena) não se aplicam a esses tributos. Na Aula 00, o material já dizia que a arrecadação no comércio exterior é incidental, de natureza extrafiscal.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.1. Regramento Constitucional e Legislação Específica</i></p>",
10:"<p>Certo. É a frase literal do Resumo: <b>toda mercadoria é um bem, mas nem todo bem é mercadoria</b>.</p><p>Só são mercadorias os <b>bens móveis destinados à realização de operações mercantis</b>. O exemplo do material: a <b>bagagem de viajantes</b> não é mercadoria, mas apenas um bem. E produto é o conceito mais amplo dos três, abrangendo até coisas sem avaliação econômica.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.2. Produtos, Bens e Mercadorias</i></p>",
11:"<p>Errado por uma palavra: o art. 153, I, fala em importação de <b>produtos</b> estrangeiros, e não de bens.</p><p>É a questão ATRFB-2012 do Resumo. A troca é sutil porque, pela interpretação sistemática do material (Liziane Angelotti), o I.I acaba incidindo sobre bens, como a bagagem. Mas a <b>literalidade constitucional</b> é produtos, conceito mais amplo que bem e que mercadoria.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.2. Produtos, Bens e Mercadorias</i></p>",
12:"<p>Certo. É a definição do Resumo: produto nacionalizado é o <b>produto estrangeiro importado com ânimo de definitividade</b>.</p><p>O contraste que a banca explora: o bem admitido em regime especial, como a <b>admissão temporária</b>, <b>não se nacionaliza</b>, pois sua entrada já está condicionada ao retorno ao exterior. Esse retorno chama-se <b>reexportação</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.3. Produtos Estrangeiros, Nacionais, Nacionalizados e Desnacionalizados</i></p>",
13:"<p>Errado. A exportação temporária <b>não</b> tem como consequência a desnacionalização, porque a saída já está condicionada ao <b>retorno ao Brasil</b>.</p><p>Desnacionalizado é o produto nacional ou nacionalizado exportado <b>com ânimo de definitividade</b>. O retorno de uma exportação temporária chama-se <b>reimportação</b>; o de uma admissão temporária, <b>reexportação</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.3. Produtos Estrangeiros, Nacionais, Nacionalizados e Desnacionalizados</i></p>",
14:"<p>Certo. É a definição do Resumo: produtos nacionais são os <b>fabricados no Brasil</b> ou que <b>sofreram transformação substancial</b> em território nacional.</p><p>A nota do material lembra que, para saber se um produto é ou não nacional, observam-se as <b>regras de origem</b>. Em contraste, estrangeiro é o originário do exterior, como o carro fabricado na Alemanha do exemplo.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>1.3. Produtos Estrangeiros, Nacionais, Nacionalizados e Desnacionalizados</i></p>",
15:"<p>Certo. O Resumo abre o estudo do I.I exatamente assim: tributo de <b>caráter eminentemente extrafiscal</b>, que permite ao governo a regulação econômica por meio do controle das importações.</p><p>A lógica do material: <b>aumentar</b> o I.I protege a indústria nacional; <b>reduzir</b> o I.I estimula a entrada de bens estrangeiros. Daí a necessidade de flexibilidade para alterar alíquotas rapidamente.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.1. Introdução</i></p>",
16:"<p>Errado no <b>livremente</b>. A alteração de alíquotas do I.I deve observar os compromissos internacionais do Brasil, <b>sob pena de responsabilidade internacional</b>.</p><p>Há <b>limites tarifários máximos</b> acordados na OMC, que só podem ser ultrapassados mediante <b>renegociação multilateral</b>. A nota do material explica: pelo art. II do GATT, a <b>Lista de Concessões</b> é o teto do I.I que cada membro se comprometeu a observar.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.1. Introdução</i></p>",
17:"<p>Certo. É a nota do Resumo: o MERCOSUL, como união aduaneira, aplica uma <b>Tarifa Externa Comum (TEC)</b> às importações de terceiros países, com alíquotas definidas em conjunto.</p><p>Mas existem <b>diversas exceções à TEC</b> (produtos aos quais a alíquota da TEC não se aplica), o que permite dizer que o bloco é uma <b>união aduaneira imperfeita</b>. Para esses produtos, a alíquota é definida discricionariamente pela CAMEX.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.1. Introdução (nota sobre a TEC)</i></p>",
18:"<p>Errado. Em regra, o I.I é objeto de <b>lançamento por homologação</b>, não de ofício.</p><p>É o importador quem elabora e registra a declaração (DUIMP), <b>antecipando o pagamento sem prévio exame</b> da autoridade; os tributos são debitados automaticamente da sua conta. A autoridade aduaneira homologa depois, de forma <b>expressa ou tácita</b>, e só então o crédito é definitivamente extinto.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.2. Lançamento</i></p>",
19:"<p>Certo. É o art. 150, § 4º, do CTN, citado no Resumo: se a lei não fixar prazo para a homologação, será de <b>5 anos a contar da ocorrência do fato gerador</b>.</p><p>Expirado o prazo sem pronunciamento da Fazenda, considera-se homologado o lançamento e extinto o crédito, <b>salvo dolo, fraude ou simulação</b>. Por isso, em regra, o I.I decai em 5 anos contados do fato gerador.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.2. Lançamento</i></p>",
20:"<p>Errado no marco inicial. No lançamento por homologação, o prazo conta-se <b>da data da ocorrência do fato gerador</b> (art. 150, § 4º, do CTN).</p><p>O primeiro dia do exercício seguinte é a regra do <b>art. 752, I, do R/A</b>, e a nota do Resumo (citando Ricardo Alexandre) pede muito cuidado: ela <b>não pode se aplicar ao I.I</b>, sujeito a homologação. É o único caso em que a decadência corre exatamente da data do fato gerador.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.2. Lançamento (nota 7)</i></p>",
21:"<p>Errado. Inverteu as hipóteses do art. 75 do R/A. Quando a alíquota é <b>específica</b>, a base é a <b>quantidade de mercadoria</b> na unidade de medida estabelecida.</p><p>O valor aduaneiro (art. VII do GATT 1994) é a base quando a alíquota é <b>ad valorem</b>. Exemplo do Resumo: alíquota de US$ 2,00/kg sobre soja; importados 2000 kg, a base de cálculo é exatamente <b>2000 kg</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.3. Base de Cálculo</i></p>",
22:"<p>Certo. É o art. 75, II, do R/A: quando a alíquota for <b>específica</b>, a base de cálculo é a <b>quantidade de mercadoria expressa na unidade de medida estabelecida</b>.</p><p>Exemplo do Resumo: alíquota de <b>US$ 2,00/kg</b> sobre soja; importados <b>2000 kg</b>, essa quantidade é a base de cálculo. Já na alíquota ad valorem, a base é o valor aduaneiro.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.3. Base de Cálculo</i></p>",
23:"<p>Certo. O Resumo afirma que o Acordo sobre a Implementação do art. VII do GATT, por ter sido <b>regularmente internalizado</b> no ordenamento jurídico interno, possui <b>status de lei ordinária</b>.</p><p>É nele que estão as regras para a determinação do <b>valor aduaneiro</b>, base de cálculo do I.I quando a alíquota é ad valorem. A valoração aduaneira é estudada em aula posterior.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.3. Base de Cálculo</i></p>",
24:"<p>Errado. A alíquota aplicável é a vigente na <b>data da ocorrência do fato gerador</b>, que, no despacho para consumo, é a data do <b>registro da declaração de importação</b>, e não a da entrada.</p><p>Exemplo do Resumo: a mercadoria ingressa hoje, mas a DUIMP só é registrada <b>daqui a 40 dias</b>. Aplica-se a alíquota em vigor na data do registro, não a do dia da entrada no país.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.3. Base de Cálculo / questão Despachante 2012</i></p>",
25:"<p>Certo. O I.I é pago na <b>data do registro da declaração de importação</b>; no ato do registro é feito o débito do valor.</p><p>O Resumo acrescenta que o <b>Ministro da Economia</b> (a literalidade do R/A ainda fala em Ministério da Fazenda) poderá, <b>em casos especiais</b>, fixar outros momentos para o pagamento.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.4. Pagamento do Imposto</i></p>",
26:"<p>Errado no banco. O depósito para garantia de qualquer natureza será feito na <b>Caixa Econômica Federal (CEF)</b>, na forma da legislação específica.</p><p>O resto do tópico: a importância a pagar é o resultado da apuração do total do imposto na declaração de importação ou documento de efeito equivalente.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.4. Pagamento do Imposto</i></p>",
27:"<p>Certo. É a nota do Resumo sobre os três tipos de despacho: o <b>despacho para internação</b> aplica-se às mercadorias que saem da <b>Zona Franca de Manaus</b> ou de <b>Áreas de Livre Comércio</b> em direção ao restante do território nacional.</p><p>Os outros dois: <b>despacho para consumo</b> (importação a título definitivo, mercadorias nacionalizadas) e <b>despacho para admissão</b> (ingresso ao amparo de regimes aduaneiros especiais).</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador (nota 11)</i></p>",
28:"<p>Certo. Literalidade do art. 72 do R/A: o fato gerador do I.I é a <b>entrada de mercadoria estrangeira no território aduaneiro</b>.</p><p>O Resumo registra que a doutrina chama essa entrada de <b>elemento espacial (geográfico)</b> do fato gerador. O momento em que ele se considera ocorrido, para cálculo, vem do art. 73: em regra, o registro da declaração de importação.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador</i></p>",
29:"<p>Certo. É o entendimento do STJ citado no Resumo: embora o fato gerador do I.I ocorra com a entrada da mercadoria no território nacional, ele <b>apenas se aperfeiçoa com o registro da DI no regime comum</b> (REsp 362.910/PR).</p><p>Isso casa com o art. 73, I, do R/A: considera-se ocorrido o fato gerador na data do <b>registro da declaração</b> de mercadoria submetida a despacho para consumo.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador</i></p>",
30:"<p>Certo. É o art. 73, II, b, do R/A: para bagagem, <b>acompanhada ou desacompanhada</b>, o fato gerador ocorre no <b>dia do lançamento</b> do crédito tributário.</p><p>A lógica do Resumo: as hipóteses do inciso II são situações em que <b>não se registra declaração de importação</b>. Por isso o marco é o lançamento. Cuidado: bem que não se enquadra como bagagem vai para o regime comum, com fato gerador no registro da DUIMP.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — art. 73, II</i></p>",
31:"<p>Certo. Literalidade do parágrafo único do art. 73 do R/A: o inciso I (data do registro da declaração) aplica-se <b>inclusive</b> ao despacho para consumo de <b>mercadoria sob regime suspensivo de tributação</b>.</p><p>O mesmo parágrafo inclui a mercadoria de <b>remessa postal</b> ou <b>conduzida por viajante</b> quando sujeita ao <b>regime de importação comum</b>. Nesses casos há declaração registrada; logo, vale a regra geral.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — art. 73</i></p>",
32:"<p>Errado. Mesmo no extravio <b>há fato gerador</b>: considera-se ocorrido no <b>dia do lançamento</b> (art. 73, II, c, do R/A).</p><p>O Resumo explica o problema: a mercadoria extraviada pode nem ter entrado no país. O art. 72, § 1º, resolve considerando entrada no território aduaneiro a mercadoria que conste como importada e cujo extravio tenha sido verificado. É o chamado <b>fato gerador presumido</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — extravio</i></p>",
33:"<p>Certo. É o art. 73, IV, do R/A: fato gerador na data do <b>registro da declaração de admissão temporária para utilização econômica</b>.</p><p>O Resumo explica: nesse regime especial, os bens entram a título temporário para emprego em atividade econômica, com <b>suspensão parcial</b> de tributos. Como há <b>recolhimento parcial</b>, há fato gerador, e o marco é o registro da declaração para admissão no regime.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — admissão temporária</i></p>",
34:"<p>Errado. No regime de tributação simplificada <b>não há registro de DUIMP</b>; o fato gerador considera-se ocorrido no <b>dia do lançamento</b> (art. 73, II, a).</p><p>O contraste do Resumo: remessa postal no <b>RTS</b> leva ao dia do lançamento; remessa postal no <b>regime comum</b> (acima de US$ 3.000,00, ou bebida alcoólica e tabacaria) leva ao registro da DUIMP.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — remessa postal</i></p>",
35:"<p>Certo. É a definição do Resumo: bagagem desacompanhada é o conjunto de bens que chega ao país (ou vai para o exterior) em decorrência da viagem do indivíduo, <b>amparado por conhecimento de embarque (conhecimento de carga)</b>.</p><p>O contraste: bagagem <b>acompanhada</b> é a que o viajante traz consigo <b>no mesmo meio de transporte</b>, <b>sem</b> amparo de conhecimento de embarque.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — bagagem</i></p>",
36:"<p>Certo. O Resumo lista os excluídos do conceito de bagagem: <b>veículos automotores em geral</b>, <b>motocicletas</b>, motonetas, bicicletas com motor, motores para embarcação, motos aquáticas e similares, <b>casas rodantes (motor homes)</b>, <b>aeronaves</b> e <b>embarcações de todo tipo</b>.</p><p>O que não se enquadra como bagagem vai para o <b>regime de importação comum</b>, com alíquota da TEC e registro de declaração.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — bagagem</i></p>",
37:"<p>Errado. No extravio, quem paga o I.I é o <b>responsável (transportador ou depositário)</b>, e não o importador.</p><p>O Resumo vai além: como o importador já recolheu o imposto no registro da DUIMP, ele <b>faz jus à restituição</b> dos valores relativos a esse imposto. Grave: extravio ou avaria sob a tutela do transportador ou do depositário, o I.I é deles.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — extravio</i></p>",
38:"<p>Certo. As diferenças percentuais de mercadoria a granel extraviadas <b>não serão consideradas</b> quando forem <b>inferiores a 1%</b>.</p><p>O detalhe que a banca explora, segundo o Resumo: se o extravio for <b>superior a 1%</b>, o I.I será exigido sobre a <b>integralidade</b> das mercadorias extraviadas, e não só sobre o que exceder 1%.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — extravio</i></p>",
39:"<p>Certo. A avaria tem como efeito a <b>redução do montante tributável (base de cálculo)</b> do I.I, <b>proporcionalmente ao prejuízo</b>.</p><p>O desfecho no Resumo: o importador, que recolheu sobre o valor total, tem direito à <b>restituição</b> do que pagou a maior; a Receita cobra do <b>responsável</b> (transportador ou depositário) o imposto relativo ao valor do prejuízo.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — avaria</i></p>",
40:"<p>Errado. A <b>Lei nº 12.350/2010</b> colocou fim à vistoria aduaneira, o que foi confirmado pelo <b>Decreto nº 8.010/2013</b>.</p><p>Hoje, ao verificar avaria ou extravio, a autoridade aduaneira procede ao <b>lançamento de ofício</b>, formalizado por <b>auto de infração</b>. Por isso o fato gerador, nesses casos, considera-se ocorrido no momento do lançamento.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — avaria e extravio</i></p>",
41:"<p>Certo. É o art. 642, I, a, do R/A: abandonada a mercadoria que permanecer em recinto alfandegado sem início do despacho em <b>90 dias da sua descarga</b>.</p><p>Os outros prazos do artigo que caem em prova: <b>90 dias</b> do aviso de chegada de remessa postal no regime comum; <b>45 dias</b> após esgotar o prazo em entreposto aduaneiro ou em recinto de zona secundária e da chegada como bagagem; <b>60 dias</b> da notificação do art. 640.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — mercadoria abandonada (art. 642)</i></p>",
42:"<p>Errado no marco temporal. O art. 643 do R/A permite iniciar o despacho <b>antes de aplicada a pena de perdimento</b>, não depois.</p><p>Iniciando o despacho a tempo, o importador paga os tributos com <b>juros e multa de mora</b> e as despesas de permanência, e o fato gerador ocorre na data do <b>vencimento do prazo de permanência</b> em recinto alfandegado (art. 73, III). Aplicado o perdimento, essa porta se fecha.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.5. Fato Gerador — art. 643</i></p>",
43:"<p>Certo. Literalidade do art. 74, I, do R/A: não constitui fato gerador a entrada do <b>pescado capturado fora das águas territoriais</b> do País, por <b>empresa localizada no seu território</b>, satisfeitas as exigências da atividade pesqueira.</p><p>É uma das <b>duas</b> hipóteses de não-ocorrência do fato gerador do art. 74. A outra é o retorno de mercadoria em <b>exportação temporária</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.6. Não-ocorrência do fato gerador</i></p>",
44:"<p>Errado na ressalva. O art. 74, II, diz exatamente o contrário: não há fato gerador na entrada de mercadoria em exportação temporária, <b>ainda que descumprido o regime</b>.</p><p>O Resumo explica: como a saída não teve caráter de definitividade, a mercadoria <b>não se desnacionalizou</b>. Esse retorno é a <b>reimportação</b>, e na reimportação não há fato gerador do I.I.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.6. Não-ocorrência do fato gerador</i></p>",
45:"<p>Errado no <b>toda</b>. É a questão AFRFB-2012 do Resumo: nem toda mercadoria nacional ou nacionalizada exportada que retorne é estrangeira.</p><p>O art. 70 traz as ressalvas: enviada em <b>consignação</b> e não vendida no prazo; devolvida por <b>defeito técnico</b>, para reparo ou substituição; por <b>modificações na sistemática de importação</b> do país importador; por <b>guerra ou calamidade pública</b>; ou por outros <b>fatores alheios à vontade do exportador</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 70</i></p>",
46:"<p>Certo. É a primeira ressalva do art. 70 do R/A: a mercadoria <b>enviada em consignação e não vendida no prazo autorizado</b>, ao retornar, não é considerada estrangeira.</p><p>O Resumo explica que a exportação em consignação é modalidade especial, regulamentada e administrada pela <b>SECEX</b>, que permite que a mercadoria, se não vendida, regresse ao País. No retorno, é <b>não-estrangeira</b> e não sofre o I.I.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 70</i></p>",
47:"<p>Certo. É o parágrafo único do art. 70 do R/A: equipamentos, máquinas, veículos, aparelhos e instrumentos <b>de fabricação nacional</b>, adquiridos no mercado interno por <b>empresas nacionais de engenharia</b> e exportados para obras no exterior, são <b>estrangeiros</b> ao retornar.</p><p>O Resumo diz que a regra não inova: a exportação foi <b>definitiva</b>, não temporária; a máquina se desnacionalizou e, no retorno, há incidência do I.I.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 70, parágrafo único</i></p>",
48:"<p>Errado. Pelo art. 71, III, do R/A, o I.I <b>não incide</b> sobre mercadoria que tenha sido objeto de pena de perdimento, exceto se não localizada, consumida ou revendida.</p><p>A banca trocou apenas o verbo (incide por não incide) e manteve a exceção. É a questão AFRFB-2012 comentada no Resumo. Se a mercadoria irregular não é encontrada, não há perdimento; há I.I, com fato gerador na data do <b>lançamento</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 71</i></p>",
49:"<p>Certo. Literalidade do art. 71, VII, do R/A: o I.I não incide sobre mercadoria estrangeira em <b>trânsito aduaneiro de passagem, acidentalmente destruída</b>.</p><p>Exemplo do Resumo: mercadoria vem da <b>Inglaterra</b> com destino final no <b>Paraguai</b>, passando pelo Brasil com suspensão de tributos. Se destruída no percurso, a responsabilidade é do <b>transportador</b>; se a destruição for <b>acidental</b>, não há incidência.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 71</i></p>",
50:"<p>Errado. O Resumo destaca que a mercadoria <b>não precisa</b> ter sido avariada nem ter se revelado imprestável.</p><p>Pelo art. 71, VI, basta que seja <b>destruída sob controle aduaneiro</b>, <b>sem ônus para a Fazenda Nacional</b> e <b>antes do desembaraço</b>. A imprestabilidade aparece em outra hipótese, a do inciso II (reposição de mercadoria defeituosa). A autoridade ainda pode indeferir o pedido de destruição.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 71, VI</i></p>",
51:"<p>Certo. Literalidade do art. 71, IV, do R/A: não incide o I.I sobre mercadoria estrangeira <b>devolvida para o exterior antes do registro da declaração de importação</b>.</p><p>A explicação do Resumo: se não houve registro da DI, o fato gerador <b>não se aperfeiçoou</b>. Casa com o entendimento do STJ de que o fato gerador só se aperfeiçoa com o registro da declaração.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.7. Hipóteses de não-incidência — art. 71</i></p>",
52:"<p>Errado. O sujeito ativo do I.I é a <b>União</b>, titular da competência pelo art. 153, I, da CF/88.</p><p>Pelo art. 119 do CTN, citado no Resumo, sujeito ativo é a <b>pessoa jurídica de direito público</b> titular da competência para exigir o cumprimento da obrigação. A RFB é órgão que administra e fiscaliza; não é pessoa jurídica titular do crédito.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.8. Sujeito Ativo</i></p>",
53:"<p>Certo. É o art. 104 do R/A: contribuintes são o <b>importador</b>, o <b>destinatário de remessa postal internacional</b> indicado pelo remetente e o <b>adquirente de mercadoria entrepostada</b>.</p><p>O exemplo do Resumo para o inciso II: se o seu tio que mora no exterior te enviar um presente, <b>você</b> será contribuinte do I.I. Transportador e depositário não entram nesta lista: são responsáveis.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.9. Sujeito Passivo: contribuintes e responsáveis</i></p>",
54:"<p>Errado. Transportador e depositário são <b>responsáveis</b> (art. 105 do R/A), não contribuintes.</p><p>O Resumo explica: se ocorrer <b>extravio ou avaria</b> de mercadoria sob a tutela deles, o I.I lhes será exigido. Contribuintes, com relação pessoal e direta com o fato gerador, são só três: importador, destinatário de remessa postal e adquirente de mercadoria entrepostada.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.9. Sujeito Passivo: contribuintes e responsáveis</i></p>",
55:"<p>Errado por uma palavra: o representante, no País, do transportador estrangeiro é responsável <b>solidário</b>, não subsidiário (art. 106, II, do R/A).</p><p>É a questão ATRFB-2012 do Resumo. Responsável solidário é quem figura <b>em conjunto com outra pessoa</b> no polo passivo. Transportador e depositário, por sua vez, são responsáveis do art. 105.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.9. Sujeito Passivo: contribuintes e responsáveis</i></p>",
56:"<p>Certo. Literalidade do art. 106, IV, do R/A: é responsável solidário o <b>encomendante predeterminado</b> que adquire mercadoria de procedência estrangeira de pessoa jurídica importadora.</p><p>Na mesma lista do art. 106 estão o adquirente na importação <b>por conta e ordem</b>, o representante no País do transportador estrangeiro, o adquirente de mercadoria com isenção ou redução e o operador de transporte multimodal, entre outros.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.9. Sujeito Passivo: contribuintes e responsáveis</i></p>",
57:"<p>Certo. Mercadoria não-identificada (extraviada ou consumida, com descrição genérica nos documentos) sofre a <b>alíquota única de 80%</b> relativa ao I.I, IPI, PIS/PASEP-Importação, COFINS-Importação e AFRMM.</p><p>A base é <b>arbitrada</b> pela <b>mediana dos valores por quilograma</b> das mercadorias importadas a título definitivo, pela mesma via, no <b>semestre anterior</b>, com frete e seguro. Sem o peso, usa-se o peso líquido admitido na unidade de carga.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.10. Tributação de Mercadorias não-identificadas</i></p>",
58:"<p>Errado. A assertiva descreve o <b>Regime de Tributação Simplificada</b> (art. 99 do R/A), que é o que traz classificação genérica e alíquotas diferenciadas, e colou nela o nome de Regime de Tributação Especial.</p><p>O RTE aplica-se à <b>bagagem</b> e exige tão somente o I.I, à alíquota de <b>50%</b>. Não há que se falar em alíquotas diferenciadas, como aponta o comentário do Resumo à questão AFRFB-2012.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.11 e 2.12. RTS e RTE</i></p>",
59:"<p>Errado. Trocou os nomes: a definição dada é a do <b>Regime de Tributação Especial</b> (bagagem, só I.I a <b>50%</b>).</p><p>O <b>RTS</b> aplica-se a <b>remessa postal internacional</b>, até <b>US$ 3.000,00</b>, com I.I a <b>60%</b> e isenção de IPI, PIS/PASEP-Importação e COFINS-Importação. Macete: Simplificada = remessa postal; Especial = bagagem.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.11 e 2.12. RTS e RTE</i></p>",
60:"<p>Certo. O Resumo destaca a regra pela sua importância: remessa postal de valor <b>não superior a US$ 50,00</b> é desembaraçada com <b>isenção do I.I</b>, desde que <b>remetente e destinatário sejam pessoas físicas</b>.</p><p>Na parte do fato gerador, o material acrescenta a condição de a remessa ser transportada pelo <b>serviço postal</b>. Acima disso, no RTS, até US$ 3.000,00, a alíquota é de 60%.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.11. Regime de Tributação Simplificada</i></p>",
61:"<p>Certo. É o art. 102-A do R/A: o RTU permite a importação, <b>por via terrestre</b>, de mercadorias <b>procedentes do Paraguai</b>, com <b>pagamento unificado</b> de I.I, IPI, PIS/PASEP-Importação e COFINS-Importação, observado o limite máximo de valor por habilitado.</p><p>Foi instituído pela <b>Lei nº 11.898/2009</b> para racionalizar o comércio na fronteira <b>Foz do Iguaçu / Ciudad del Este</b>. A alíquota única é de <b>25%</b> sobre o preço de aquisição.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.13. Regime de Tributação Unificada</i></p>",
62:"<p>Errado. É justamente o contrário: <b>somente</b> podem se habilitar ao RTU as <b>microempresas importadoras varejistas optantes pelo SIMPLES</b>.</p><p>É a questão ATRFB-2012 do Resumo. Os limites de valor por habilitado (Decreto nº 6.956/2009): <b>R$ 18.000,00</b> no 1º e 2º trimestres, <b>R$ 37.000,00</b> no 3º e 4º, e <b>R$ 110.000,00</b> por ano-calendário.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.13. Regime de Tributação Unificada</i></p>",
63:"<p>Certo. Literalidade do art. 102-A, § 2º, do R/A: é vedada no RTU a inclusão de <b>quaisquer mercadorias que não sejam destinadas ao consumidor final</b>.</p><p>A mesma vedação alcança: armas e munições; fogos de artifício; <b>bebidas, inclusive alcoólicas</b>; cigarros; veículos automotores e embarcações de todo tipo (inclusive partes e peças); medicamentos; pneus; bens usados e bens com importação suspensa ou proibida.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.13. Regime de Tributação Unificada</i></p>",
64:"<p>Certo. É o art. 809, II-A, combinado com o IV, do R/A: no RTU, operam a importação e o despacho o <b>empresário</b>, o <b>sócio da sociedade empresária</b>, a <b>pessoa física nomeada</b> pelo habilitado ou o <b>despachante aduaneiro</b>.</p><p>O Resumo lembra que o despachante aduaneiro pode representar <b>em qualquer caso</b> (inciso IV); o inciso II-A é o que abre a porta específica para o optante do RTU.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.13. Regime de Tributação Unificada</i></p>",
65:"<p>Certo. Pelo art. 10, § 3º, do Decreto nº 6.956/2009, o RTU <b>poderá incluir o ICMS</b> devido pelo optante.</p><p>A condição, segundo o Resumo: o <b>Estado ou o DF deve aderir ao RTU mediante convênio</b>. Sem adesão, o pagamento unificado abrange só os tributos federais: I.I, IPI, PIS/PASEP-Importação e COFINS-Importação.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.13. Regime de Tributação Unificada</i></p>",
66:"<p>Errado. O habilitado ao RTU <b>não fará jus a qualquer benefício fiscal</b> de isenção ou de redução dos impostos e contribuições incidentes.</p><p>O Resumo completa: também não há direito a <b>redução de alíquotas ou de bases de cálculo</b>. A contrapartida do regime é a própria alíquota única de <b>25%</b> sobre o preço de aquisição (7,88% de I.I, 7,87% de IPI, 7,60% de COFINS e 1,65% de PIS).</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.13. Regime de Tributação Unificada</i></p>",
67:"<p>Certo. Literalidade do art. 115 do R/A: a isenção ou redução do I.I somente será reconhecida quando decorrente de <b>lei ou de ato internacional</b>.</p><p>O Resumo tira a consequência: o R/A <b>não estabelece isenções</b>, apenas compila as previstas em diversas leis. E a legislação que outorga isenção ou redução deve ser interpretada <b>literalmente</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.14.1. Isenções e Reduções — Generalidades</i></p>",
68:"<p>Errado. O Resumo pede atenção: o reconhecimento da isenção <b>não gera direito adquirido</b>.</p><p>Ele pode ser <b>revogado de ofício</b> se se apurar que o beneficiário não satisfazia ou deixou de satisfazer as condições do benefício. O reconhecimento é feito, em cada caso, pela <b>autoridade aduaneira</b>, a partir de requerimento, que pode vir na própria declaração de importação.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.14.1. Isenções e Reduções — Generalidades</i></p>",
69:"<p>Certo. É o art. 118 do R/A: em regra, a isenção ou redução do I.I só beneficiará mercadoria <b>sem similar nacional</b> e <b>transportada em navio de bandeira brasileira</b>.</p><p>O Resumo acrescenta outra condição: a <b>comprovação da quitação de tributos e contribuições federais</b> pelo contribuinte. A existência de similar nacional é apurada pelo <b>exame de similaridade</b>.</p><p class='fb-fonte'>Resumo LAD — Aula 01 · <i>2.14.1. Isenções e Reduções — Generalidades</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Imposto de Importação", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
