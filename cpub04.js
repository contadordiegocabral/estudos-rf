/* Contabilidade Pública — Módulo 04: Patrimônio público e elementos das demonstrações (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub04 = (function(){
"use strict";

var CARDS = [
  ["O que é patrimônio público?","O conjunto de <b>bens, direitos e obrigações</b> que são de <b>propriedade ou responsabilidade</b> de entidades governamentais — órgãos, autarquias, fundações, estatais."],
  ["Bens e direitos do patrimônio público incluem o quê?","Ativos <b>tangíveis</b> (ex.: estoques) e <b>intangíveis</b> (ex.: direitos autorais)."],
  ["Como o MCASP renomeia receita e despesa?","<b>Receita</b> → <b>Variação Patrimonial Aumentativa (VPA)</b>. <b>Despesa</b> → <b>Variação Patrimonial Diminutiva (VPD)</b>."],
  ["Definição de ativo (item 5.6)","<b>Recurso controlado no presente pela entidade como resultado de evento passado.</b>"],
  ["O que são benefícios econômicos (item 5.10)?","<b>Entradas de caixa</b> ou <b>reduções das saídas de caixa</b>."],
  ["De onde derivam os benefícios econômicos?","<b>(a)</b> da <b>utilização do ativo na produção e na venda de serviços</b>; ou <b>(b)</b> da <b>troca direta do ativo por caixa ou por outros recursos</b>."],
  ["Quando um ativo deve ser reconhecido (MCASP)?","Quando <b>(a)</b> satisfizer a <b>definição de ativo</b>; <b>e</b> <b>(b)</b> puder ser <b>mensurado</b> de maneira que observe as <b>características qualitativas</b>, consideradas as restrições sobre a informação contábil."],
  ["Que depósitos são reconhecidos no ativo?","Os caracterizados como <b>entradas compensatórias no ativo e no passivo financeiro</b>: <b>cauções em dinheiro</b> para garantia de contratos · <b>consignações a pagar</b> · <b>retenção de obrigações de terceiros a recolher</b> · outros depósitos com finalidades especiais."],
  ["O que é desreconhecimento?","O processo de <b>avaliar se ocorreram mudanças</b>, desde a data do relatório anterior, que justifiquem a <b>remoção</b> de elemento previamente reconhecido — e <b>remover</b> o item se tais mudanças ocorrerem."],
  ["Com que frequência a incerteza deve ser avaliada?","Em <b>cada data da demonstração contábil</b>, porque as condições que dão origem à incerteza podem mudar."],
  ["Crédito tributário com expectativa remota de recebimento — o que fazer?","<b>Desreconhecer</b> das demonstrações, por não atender à definição de ativo. Mas os créditos desreconhecidos <b>continuam sob controle contábil em contas apropriadas</b>, assegurando a transparência."],
  ["O que são bens do patrimônio cultural?","Ativos assim chamados por sua <b>significância histórica, cultural ou ambiental</b> — monumentos e prédios históricos, sítios arqueológicos, áreas de conservação, reservas naturais."],
  ["Quatro características dos bens do patrimônio cultural","<b>1)</b> o valor cultural não se reflete totalmente no preço de mercado; <b>2)</b> há <b>proibições ou restrições severas à alienação</b>; <b>3)</b> são geralmente <b>insubstituíveis</b> e podem <b>valorizar mesmo se deteriorando</b>; <b>4)</b> é <b>difícil estimar a vida útil</b>, que pode ser de centenas de anos."],
  ["Bens do patrimônio cultural geram caixa?","<b>Raramente</b> são mantidos para gerar entradas de caixa, e pode haver <b>obstáculos legais ou sociais</b> para usá-los com esse propósito."],
  ["Quando o ativo é circulante (MCASP)?","Quando satisfizer <b>um</b> destes critérios: estar <b>disponível para venda imediata</b>; ser realizado ou mantido para <b>venda ou consumo no ciclo operacional</b>; estar mantido <b>essencialmente para ser negociado</b>; ser realizado <b>até 12 meses</b> após a data das demonstrações; ou ser <b>caixa ou equivalente</b>."],
  ["Qual a ressalva do critério de caixa e equivalentes?","Caixa e equivalente é circulante <b>a menos que</b> sua troca ou uso para pagamento de passivo esteja <b>vedado por pelo menos 12 meses</b> após a data das demonstrações."],
  ["E os demais ativos?","Classificam-se como <b>não circulantes</b>."],
  ["Art. 105, § 1º — ativo financeiro","Compreende os <b>créditos e valores realizáveis independentemente de autorização orçamentária</b> e os <b>valores numerários</b>."],
  ["Art. 105, § 2º — ativo permanente","Compreende os <b>bens, créditos e valores cuja mobilização ou alienação dependa de autorização legislativa</b>."],
  ["Exemplos de ativo financeiro","Empréstimos concedidos a terceiros · créditos de impostos a receber · títulos públicos · dinheiro em caixa · contas bancárias."],
  ["Exemplos de ativo permanente","Imóveis, equipamentos e veículos do governo que não podem ser vendidos sem autorização legislativa · participações acionárias cuja venda exige autorização."],
  ["Definição de passivo (item 5.14)","<b>Obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade.</b>"],
  ["Obrigação que se extingue sem saída de recursos é passivo (item 5.16)?","<b>Não.</b>"],
  ["Item 5.18 — que tipos de obrigação vinculada existem?","<b>Legais</b> (legalmente vinculadas) ou <b>não legalmente vinculadas</b>. Podem originar-se de transações <b>com</b> e <b>sem</b> contraprestação."],
  ["A entidade pode obrigar a si mesma?","<b>Não.</b> A obrigação deve estar <b>relacionada a um terceiro</b> — e a divulgação pública da intenção de se comportar de certo modo <b>não</b> cria passivo."],
  ["É preciso saber quem é o terceiro?","<b>Não.</b> A identificação de terceiros é <b>indicação</b> da existência da obrigação, mas <b>não é essencial</b> saber sua identidade antes da extinção do passivo."],
  ["Exemplo da identidade não essencial","A obrigação de pagar salários existe e deve ser reconhecida ainda que não se saiba exatamente quais servidores receberão."],
  ["Quando um passivo deve ser reconhecido (MCASP)?","Quando <b>(a)</b> satisfizer a <b>definição de passivo</b>; <b>e</b> <b>(b)</b> puder ser <b>mensurado</b> observando as características qualitativas e as restrições."],
  ["Pedido de compra ainda não recebido é passivo?","<b>Não</b>, do ponto de vista patrimonial — o <b>fato gerador não ocorreu</b>."],
  ["Que depósitos são reconhecidos no passivo?","Os mesmos das <b>entradas compensatórias</b>: cauções em dinheiro, consignações a pagar, retenção de obrigações de terceiros a recolher e outros depósitos com finalidades especiais — por serem <b>obrigações para com terceiros</b>."],
  ["Quando o passivo é circulante?","Quando corresponder a valores <b>exigíveis até 12 meses</b> após a data das demonstrações contábeis. Os demais são <b>não circulantes</b>."],
  ["Empréstimo de longo prazo descumprido até a data das demonstrações","O passivo torna-se <b>vencido e pagável à ordem do credor</b> → classifica-se como <b>circulante</b>."],
  ["E se o credor conceder carência?","Se, <b>até a data das demonstrações</b>, o credor concordou em dar <b>período de carência a terminar pelo menos 12 meses depois</b>, o passivo é <b>não circulante</b>."],
  ["Falta previsão orçamentária — registra-se o passivo?","<b>Sim.</b> Ocorrida situação que enseje obrigação de pagar, o passivo <b>deve ser registrado mesmo sem previsão orçamentária</b>, sem prejuízo das responsabilidades pela inobservância da lei."],
  ["Art. 105, § 3º — passivo financeiro","Compreende as <b>dívidas fundadas e outras que independam de autorização orçamentária</b>."],
  ["Art. 105, § 4º — passivo permanente","Compreende as <b>dívidas fundadas e outras que dependam de autorização legislativa para amortização ou resgate</b>."],
  ["Ressalva do MCASP sobre o passivo financeiro","Considera-se passivo financeiro <b>apenas a parcela da dívida fundada que tenha tido execução orçamentária iniciada e esteja pendente de pagamento</b>."],
  ["O que é dívida fundada?","Compromissos de <b>exigibilidade superior a 12 meses</b>, contraídos para atender a <b>desequilíbrio orçamentário</b> ou ao <b>financiamento de obras e serviços públicos</b>. <span class=\"lawref\">Art. 98 da Lei 4.320/64</span>"],
  ["Dívida fundada na LRF","Montante total das obrigações financeiras do ente e da realização de <b>operações de crédito</b> para amortização em <b>prazo superior a 12 meses</b>. <span class=\"lawref\">Art. 29 da LC 101/00</span>"],
  ["A obrigação do art. 58 (empenho) é passivo exigível?","<b>Não.</b> É <b>obrigação financeira</b>, para cálculo do superávit financeiro. O registro da obrigação <b>patrimonial independe</b> da execução orçamentária."]
];

var QS = [
  ["Patrimônio público é o conjunto de bens, direitos e obrigações de propriedade ou responsabilidade de entidades governamentais.","C","FUNDATEC","Conceito de abertura do módulo."],
  ["No MCASP, a receita é denominada variação patrimonial aumentativa e a despesa, variação patrimonial diminutiva.","C","CESPE","VPA e VPD."],
  ["Ativo é um recurso controlado no presente pela entidade como resultado de evento passado.","C","FCC","Item 5.6 da NBC TSP Estrutura Conceitual."],
  ["Os benefícios econômicos correspondem exclusivamente a entradas de caixa.","E","FGV","Também às <b>reduções das saídas de caixa</b> (item 5.10)."],
  ["As entradas de caixa podem derivar da utilização do ativo na produção e na venda de serviços ou da troca direta do ativo por caixa ou outros recursos.","C","VUNESP","As duas alíneas do item 5.10."],
  ["Um ativo deve ser reconhecido quando satisfizer a definição de ativo e puder ser mensurado de maneira que observe as características qualitativas.","C","FUNDATEC","Critérios cumulativos do MCASP."],
  ["Para o reconhecimento do ativo basta que o item satisfaça a definição de ativo.","E","CESPE","É preciso também que possa ser <b>mensurado</b> observando as características qualitativas."],
  ["As cauções em dinheiro para garantia de contratos e as consignações a pagar são reconhecidas no ativo como entradas compensatórias.","C","FCC","E, simultaneamente, no passivo financeiro."],
  ["Desreconhecimento é o processo de avaliar se ocorreram mudanças, desde a data do relatório anterior, que justifiquem a remoção de elemento previamente reconhecido.","C","FGV","Conceito do MCASP."],
  ["A incerteza quanto à existência e à mensuração do ativo deve ser avaliada apenas no momento do reconhecimento inicial.","E","VUNESP","Deve ser avaliada em <b>cada data da demonstração contábil</b>."],
  ["Créditos tributários cuja expectativa de geração de benefícios econômicos seja remota devem ser desreconhecidos das demonstrações contábeis.","C","FUNDATEC","Por não atenderem à definição de ativo."],
  ["Os créditos tributários desreconhecidos deixam de ser objeto de qualquer controle contábil.","E","CESPE","Continuam sob <b>controle contábil em contas apropriadas</b>, para assegurar a transparência."],
  ["Bens do patrimônio cultural são assim chamados em razão de sua significância histórica, cultural ou ambiental.","C","FCC","Monumentos, sítios arqueológicos, áreas de conservação, reservas naturais."],
  ["Os bens do patrimônio cultural são, em regra, mantidos com a finalidade de gerar entradas de caixa.","E","FGV","<b>Raramente</b> — e pode haver obstáculos legais ou sociais para usá-los assim."],
  ["O valor cultural, ambiental, educacional e histórico dos bens do patrimônio cultural provavelmente não é refletido totalmente no valor financeiro baseado no preço de mercado.","C","VUNESP","Primeira característica."],
  ["Os bens do patrimônio cultural podem ter seu valor aumentado ao longo do tempo mesmo que sua condição física se deteriore.","C","FUNDATEC","Terceira característica — são geralmente insubstituíveis."],
  ["A vida útil dos bens do patrimônio cultural é sempre determinável com precisão.","E","CESPE","Pode ser <b>difícil de estimar</b> e, em alguns casos, alcançar centenas de anos."],
  ["O ativo deve ser classificado como circulante quando satisfizer, cumulativamente, todos os critérios previstos no MCASP.","E","FCC","Basta satisfazer <b>um</b> dos critérios."],
  ["É circulante o ativo que se espera realizar até doze meses após a data das demonstrações contábeis.","C","FGV","Um dos cinco critérios."],
  ["Caixa e equivalentes de caixa são sempre classificados no ativo circulante.","E","VUNESP","Salvo se a troca ou uso para pagamento de passivo estiver <b>vedado por pelo menos 12 meses</b>."],
  ["Os ativos que não satisfizerem a nenhum dos critérios de circulante devem ser classificados como não circulantes.","C","FUNDATEC","Regra residual do MCASP."],
  ["O ativo financeiro compreende os créditos e valores realizáveis independentemente de autorização orçamentária e os valores numerários.","C","CESPE","Art. 105, § 1º, da Lei 4.320/64."],
  ["O ativo permanente compreende os bens, créditos e valores cuja mobilização ou alienação dependa de autorização legislativa.","C","FCC","Art. 105, § 2º."],
  ["O critério que separa o ativo financeiro do permanente é o prazo de realização de doze meses.","E","FGV","O critério é a <b>dependência de autorização legislativa</b> para mobilização ou alienação."],
  ["Valores mantidos em contas bancárias da entidade integram o ativo financeiro.","C","VUNESP","São valores numerários."],
  ["Participações acionárias do governo cuja venda exige autorização legislativa integram o ativo permanente.","C","FUNDATEC","Dependem de autorização para alienação."],
  ["Passivo é uma obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade.","C","CESPE","Item 5.14."],
  ["As obrigações vinculadas podem ser legais ou não legalmente vinculadas e originar-se tanto de transações com contraprestação quanto sem contraprestação.","C","FCC","Item 5.18."],
  ["A entidade pode obrigar a si mesma, gerando passivo, quando divulgar publicamente a intenção de se comportar de determinado modo.","E","FGV","O item 5.18 diz o contrário: a obrigação deve estar relacionada a <b>terceiro</b>."],
  ["A obrigação deve estar relacionada a um terceiro para poder gerar um passivo.","C","VUNESP","Item 5.18."],
  ["É essencial conhecer a identidade dos terceiros antes da época da extinção do passivo para que a obrigação presente exista.","E","FUNDATEC","<b>Não é essencial</b> — a identificação é apenas uma indicação."],
  ["A obrigação de pagar salários deve ser reconhecida ainda que a entidade não saiba exatamente quais servidores receberão os valores.","C","CESPE","Aplicação direta do item 5.18."],
  ["As obrigações decorrentes de pedidos de compra de mercadorias ainda não recebidas são reconhecidas como passivo nas demonstrações contábeis.","E","FCC","O <b>fato gerador não ocorreu</b> — não há passivo patrimonial."],
  ["Os depósitos caracterizados como entradas compensatórias são reconhecidos no passivo por se caracterizarem como obrigações para com terceiros.","C","FGV","Cauções, consignações e retenções."],
  ["Os passivos devem ser classificados como circulantes quando corresponderem a valores exigíveis até doze meses após a data das demonstrações contábeis.","C","VUNESP","Regra do MCASP."],
  ["O descumprimento de compromisso de empréstimo de longo prazo até a data das demonstrações contábeis torna o passivo vencido e pagável à ordem do credor, devendo ser classificado como circulante.","C","FUNDATEC","Consequência do vencimento antecipado."],
  ["Concedida pelo credor, até a data das demonstrações contábeis, carência a terminar pelo menos doze meses após essa data, o passivo permanece classificado como circulante.","E","CESPE","Passa a ser <b>não circulante</b>."],
  ["Ocorrida situação que enseje obrigação de pagar, o passivo deve ser registrado apenas se houver a devida previsão orçamentária.","E","FCC","Deve ser registrado <b>mesmo sem previsão orçamentária</b>, sem prejuízo das responsabilidades pela inobservância da lei."],
  ["O passivo financeiro compreende as dívidas fundadas e outras que independam de autorização orçamentária.","C","FGV","Art. 105, § 3º, da Lei 4.320/64."],
  ["O passivo permanente compreende as dívidas fundadas e outras que dependam de autorização legislativa para amortização ou resgate.","C","VUNESP","Art. 105, § 4º."],
  ["Segundo o MCASP, considera-se no conceito de passivo financeiro apenas a parcela da dívida fundada que tenha tido execução orçamentária iniciada e esteja pendente de pagamento.","C","FUNDATEC","Ressalva importante para não confundir as duas colunas."],
  ["A dívida fundada compreende os compromissos de exigibilidade superior a doze meses, contraídos para atender a desequilíbrio orçamentário ou a financiamento de obras e serviços públicos.","C","CESPE","Art. 98 da Lei 4.320/64."],
  ["Na Lei de Responsabilidade Fiscal, a dívida fundada corresponde às obrigações financeiras para amortização em prazo superior a doze meses.","C","FCC","Art. 29 da LC 101/00 — mesmo corte de 12 meses."],
  ["A obrigação a que se refere o art. 58 da Lei 4.320/64 é o passivo exigível da entidade.","E","FGV","É <b>obrigação financeira</b>; a patrimonial exige fato gerador ocorrido."],
  ["O registro da obrigação patrimonial independe da execução orçamentária da despesa.","C","VUNESP","Por isso o passivo pode ou não nascer junto com o empenho."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Patrimônio público e a definição de ativo",
      '<div class="box"><span class="bl">Patrimônio público</span>'+
      '<p>Conjunto de <b>bens, direitos e obrigações</b> de <b>propriedade ou responsabilidade</b> de entidades governamentais. Os bens e direitos incluem ativos <b>tangíveis</b> (estoques) e <b>intangíveis</b> (direitos autorais).</p></div>'+
      '<div class="box tip"><span class="bl">Os seis elementos, com os nomes do MCASP</span>'+
      '<p>Ativo · Passivo · <b>Receita (= VPA)</b> · <b>Despesa (= VPD)</b> · Contribuição dos proprietários · Distribuição aos proprietários.</p></div>'+
      '<div class="box"><span class="bl">Ativo — item 5.6</span>'+
      '<p><b>Recurso controlado no presente pela entidade como resultado de evento passado.</b> Recurso é item com <b>potencial de serviços</b> ou <b>capacidade de gerar benefícios econômicos</b>, e a <b>forma física não é condição necessária</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Item 5.10 — o que são benefícios econômicos</span>'+
      '<p><b>Entradas de caixa</b> <u>ou</u> <b>reduções das saídas de caixa</b> — item que limite o conceito só às entradas é <b>falso</b>.</p>'+
      '<p>Podem derivar: <b>(a)</b> da utilização do ativo na <b>produção e venda de serviços</b>; <b>(b)</b> da <b>troca direta</b> do ativo por caixa ou outros recursos.</p></div>'),
    sl("Reconhecer, desreconhecer e o patrimônio cultural",
      '<div class="box"><span class="bl">Reconhecimento do ativo (MCASP) — dois critérios cumulativos</span>'+
      '<ul><li><b>a)</b> satisfazer a <b>definição</b> de ativo; <b>e</b></li>'+
      '<li><b>b)</b> poder ser <b>mensurado</b> de maneira que observe as <b>características qualitativas</b>, consideradas as restrições.</li></ul></div>'+
      '<div class="box"><span class="bl">Entradas compensatórias</span>'+
      '<p>Reconhecem-se no <b>ativo</b> — e ao mesmo tempo no <b>passivo financeiro</b> — as <b>cauções em dinheiro</b> para garantia de contratos, as <b>consignações a pagar</b>, a <b>retenção de obrigações de terceiros a recolher</b> e outros depósitos com finalidades especiais.</p></div>'+
      '<div class="box trap"><span class="bl">Desreconhecimento</span>'+
      '<p>É <b>avaliar se ocorreram mudanças</b> desde o relatório anterior que justifiquem <b>remover</b> o elemento — e removê-lo. A <b>incerteza</b> deve ser avaliada em <b>cada data</b> de demonstração, não só no reconhecimento inicial.</p>'+
      '<p><b>Exemplo cobrado:</b> créditos tributários com expectativa <b>remota</b> são <b>desreconhecidos</b> — mas <b>continuam em controle contábil</b> em contas apropriadas.</p></div>'+
      '<div class="box"><span class="bl">Bens do patrimônio cultural — as quatro características</span>'+
      '<ul><li>O valor cultural, ambiental, educacional e histórico <b>não se reflete totalmente</b> no preço de mercado.</li>'+
      '<li>Há <b>proibições ou restrições severas</b> à alienação por venda.</li>'+
      '<li>São geralmente <b>insubstituíveis</b> e podem <b>valorizar mesmo se deteriorando</b>.</li>'+
      '<li>É <b>difícil estimar a vida útil</b> — às vezes centenas de anos.</li></ul>'+
      '<p>E <b>raramente</b> são mantidos para gerar caixa.</p></div>')
  ],
  V2:[
    sl("Ativo circulante — basta UM critério",
      '<div class="box"><span class="bl">É circulante o ativo que</span>'+
      '<ul><li><b>a)</b> estiver <b>disponível para venda imediata</b>;</li>'+
      '<li><b>b)</b> se espere realizar, ou se pretenda manter para <b>venda ou consumo no ciclo operacional</b>;</li>'+
      '<li><b>c)</b> estiver mantido <b>essencialmente para ser negociado</b>;</li>'+
      '<li><b>d)</b> se espere realizar <b>até 12 meses</b> após a data das demonstrações; ou</li>'+
      '<li><b>e)</b> for <b>caixa ou equivalente de caixa</b>.</li></ul>'+
      '<p>Os <b>demais</b> são <b>não circulantes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Duas pegadinhas</span>'+
      '<p><b>1.</b> Os critérios são <b>alternativos</b> — basta <b>um</b>. Item que exija todos cumulativamente é falso.</p>'+
      '<p><b>2.</b> Caixa e equivalente é circulante <b>a menos que</b> sua troca ou uso para pagar passivo esteja <b>vedado por pelo menos 12 meses</b>.</p></div>'),
    sl("Ativo financeiro × permanente — art. 105",
      '<div class="box"><span class="bl">§ 1º — Ativo financeiro</span>'+
      '<p>Os <b>créditos e valores realizáveis independentemente de autorização orçamentária</b> e os <b>valores numerários</b>.</p>'+
      '<p><b>Exemplos:</b> empréstimos concedidos, impostos a receber, títulos públicos, caixa, contas bancárias.</p></div>'+
      '<div class="box"><span class="bl">§ 2º — Ativo permanente</span>'+
      '<p>Os <b>bens, créditos e valores cuja mobilização ou alienação dependa de autorização legislativa</b>.</p>'+
      '<p><b>Exemplos:</b> imóveis, equipamentos e veículos do governo; participações acionárias cuja venda exija autorização.</p></div>'+
      '<div class="box trap"><span class="bl">O critério não é prazo</span>'+
      '<p>Circulante × não circulante usa <b>prazo</b> (12 meses). Financeiro × permanente usa <b>dependência de autorização legislativa</b>. São classificações <b>diferentes</b>, no mesmo balanço.</p></div>')
  ],
  V3:[
    sl("Passivo — obrigação com terceiro",
      '<div class="box"><span class="bl">Itens 5.14 e 5.16</span>'+
      '<p><b>Obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos</b> da entidade. A obrigação que possa ser extinta <b>sem saída de recursos não é passivo</b>.</p></div>'+
      '<div class="box"><span class="bl">Item 5.18 — obrigações vinculadas</span>'+
      '<ul><li>Podem ser <b>legais</b> (legalmente vinculadas) ou <b>não legalmente vinculadas</b>.</li>'+
      '<li>Podem originar-se de transações <b>com</b> ou <b>sem</b> contraprestação.</li>'+
      '<li>A obrigação deve estar <b>relacionada a um terceiro</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Duas frases que caem literais</span>'+
      '<p><b>“A entidade não pode obrigar a si mesma”</b>, <b>mesmo</b> quando tenha divulgado publicamente a intenção de se comportar de determinado modo. Anunciar que vai construir um parque não gera passivo; <b>contratar a construtora</b>, sim.</p>'+
      '<p><b>“Não é essencial saber a identidade dos terceiros”</b> antes da extinção do passivo. A obrigação de pagar salários existe mesmo sem a lista nominal.</p></div>'),
    sl("Reconhecimento e classificação do passivo",
      '<div class="box"><span class="bl">Reconhecimento (MCASP)</span>'+
      '<p>Mesmos dois critérios do ativo: <b>satisfazer a definição</b> <b>e</b> <b>poder ser mensurado</b> observando as características qualitativas e as restrições.</p></div>'+
      '<div class="box trap"><span class="bl">Pedido de compra não recebido</span>'+
      '<p>Do ponto de vista <b>patrimonial</b>, <b>não é passivo</b> — o <b>fato gerador não ocorreu</b>.</p></div>'+
      '<div class="box"><span class="bl">Circulante × não circulante</span>'+
      '<p>Circulante = <b>exigível até 12 meses</b> após a data das demonstrações. Os demais, não circulantes.</p>'+
      '<ul><li><b>Quebra de compromisso</b> de empréstimo de longo prazo até a data das demonstrações → o passivo fica <b>vencido e pagável à ordem do credor</b> → <b>circulante</b>.</li>'+
      '<li>Mas, se o credor concedeu <b>carência</b> até a data das demonstrações, a terminar <b>pelo menos 12 meses depois</b> → <b>não circulante</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Sem orçamento, registra assim mesmo</span>'+
      '<p>Ocorrida situação que enseje obrigação de pagar, o passivo <b>deve ser registrado ainda que não haja previsão orçamentária</b> — sem prejuízo das responsabilidades pela inobservância da lei.</p></div>'),
    sl("Passivo financeiro × permanente e a dívida fundada",
      '<div class="box"><span class="bl">Art. 105, §§ 3º e 4º</span>'+
      '<p><b>Passivo financeiro:</b> as <b>dívidas fundadas e outras que independam de autorização orçamentária</b>.</p>'+
      '<p><b>Passivo permanente:</b> as <b>dívidas fundadas e outras que dependam de autorização legislativa para amortização ou resgate</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A ressalva do MCASP</span>'+
      '<p>Considera-se passivo financeiro <b>apenas a parcela da dívida fundada que tenha tido execução orçamentária iniciada e esteja pendente de pagamento</b>. É o que resolve a aparente sobreposição entre os dois parágrafos.</p></div>'+
      '<div class="box"><span class="bl">Dívida fundada — dois dispositivos, o mesmo corte</span>'+
      '<ul><li><b>Art. 98 da Lei 4.320/64:</b> compromissos de <b>exigibilidade superior a 12 meses</b>, contraídos para atender a <b>desequilíbrio orçamentário</b> ou a <b>financiamento de obras e serviços públicos</b>.</li>'+
      '<li><b>Art. 29 da LRF:</b> obrigações financeiras e operações de crédito para amortização em <b>prazo superior a 12 meses</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Ligação com o módulo 03</span>'+
      '<p>A “obrigação” do <b>art. 58</b> (empenho) é <b>financeira</b>, não passivo exigível. O registro da obrigação <b>patrimonial independe</b> da execução orçamentária.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o conceito",
  before:"Patrimônio público é o conjunto de bens, direitos e obrigações de ",
  after:" de entidades governamentais.",
  options:["propriedade ou responsabilidade","propriedade exclusiva","posse direta"], answer:0,
  why:"Inclui bens de terceiros sob responsabilidade do ente."},

S2:{t:"match", instr:"Ligue o elemento ao nome que o MCASP usa",
  pairs:[["Receita","Variação Patrimonial Aumentativa"],["Despesa","Variação Patrimonial Diminutiva"]],
  why:"VPA e VPD."},

S3:{t:"multi", instr:"Marque o que são benefícios econômicos (item 5.10)",
  options:["Entradas de caixa","Reduções das saídas de caixa",
           "Aumentos do patrimônio líquido","Créditos orçamentários disponíveis"],
  answers:[0,1],
  why:"São só os dois — e a redução de saída costuma ser esquecida."},

S4:{t:"multi", instr:"De onde podem derivar as entradas de caixa?",
  options:["Da utilização do ativo na produção e na venda de serviços",
           "Da troca direta do ativo por caixa ou por outros recursos",
           "Da previsão da receita na LOA","Da abertura de crédito adicional"],
  answers:[0,1],
  why:"Alíneas (a) e (b) do item 5.10."},

S5:{t:"multi", instr:"Quando um ativo deve ser reconhecido?",
  options:["Quando satisfizer a definição de ativo",
           "Quando puder ser mensurado observando as características qualitativas",
           "Quando houver dotação orçamentária","Quando estiver registrado no inventário"],
  answers:[0,1],
  why:"Dois critérios <b>cumulativos</b> do MCASP."},

S6:{t:"multi", instr:"Marque os depósitos que são entradas compensatórias",
  options:["Cauções em dinheiro para garantia de contratos","Consignações a pagar",
           "Retenção de obrigações de terceiros a recolher",
           "Outros depósitos com finalidades especiais",
           "Restos a pagar processados","Créditos tributários a receber"],
  answers:[0,1,2,3],
  why:"Entram no <b>ativo</b> e no <b>passivo financeiro</b> ao mesmo tempo."},

S7:{t:"mc", instr:"Crédito tributário com expectativa remota de recebimento deve ser:",
  options:["Desreconhecido, mas mantido sob controle contábil em contas apropriadas",
           "Mantido no ativo com provisão para perda",
           "Desreconhecido e eliminado de qualquer controle",
           "Reclassificado para o ativo permanente"],
  answer:0,
  why:"Não atende à definição de ativo, mas a transparência exige o controle."},

S8:{t:"multi", instr:"Marque as características dos bens do patrimônio cultural",
  options:["O valor cultural não se reflete totalmente no preço de mercado",
           "Pode haver proibições ou restrições severas à alienação por venda",
           "São geralmente insubstituíveis e podem valorizar mesmo se deteriorando",
           "Pode ser difícil estimar sua vida útil",
           "São mantidos com o objetivo de gerar entradas de caixa",
           "Devem ser reavaliados mensalmente"],
  answers:[0,1,2,3],
  why:"<b>Raramente</b> são mantidos para gerar caixa."},

S9:{t:"multi", instr:"É circulante o ativo que (basta um critério):",
  options:["Estiver disponível para venda imediata",
           "For realizado ou mantido para venda ou consumo no ciclo operacional",
           "Estiver mantido essencialmente para ser negociado",
           "For realizado até 12 meses após a data das demonstrações",
           "For caixa ou equivalente de caixa",
           "Depender de autorização legislativa para alienação"],
  answers:[0,1,2,3,4],
  why:"O último critério é o do ativo <b>permanente</b>, outra classificação."},

S10:{t:"gap", instr:"Complete a ressalva do critério de caixa",
  before:"Caixa ou equivalente é circulante, a menos que sua troca ou uso para pagamento de passivo se encontre vedada durante pelo menos ",
  after:" após a data das demonstrações contábeis.",
  options:["doze meses","seis meses","um exercício financeiro"], answer:0,
  why:"Doze meses — o mesmo corte do critério (d)."},

S11:{t:"sort", instr:"Ativo financeiro ou permanente (art. 105)?",
  buckets:["Ativo financeiro","Ativo permanente"],
  items:[["Créditos realizáveis independentemente de autorização orçamentária",0],
         ["Valores numerários",0],["Contas bancárias da entidade",0],["Impostos a receber",0],
         ["Imóvel que só pode ser vendido com autorização legislativa",1],
         ["Participação acionária cuja venda exige autorização",1]],
  why:"O critério é a <b>dependência de autorização legislativa</b>, não o prazo."},

S12:{t:"mc", instr:"O que separa ativo financeiro de ativo permanente?",
  options:["A dependência de autorização legislativa para mobilização ou alienação",
           "O prazo de realização de doze meses",
           "A natureza tangível ou intangível","A origem orçamentária do recurso"],
  answer:0,
  why:"Prazo é o critério de <b>circulante × não circulante</b>."},

S13:{t:"wordbank", instr:"Monte a definição de passivo (item 5.14)",
  target:["obrigação","presente",",","derivada","de","evento","passado"],
  extra:["provável","futura","estimada"],
  why:"…cuja extinção deva resultar na <b>saída de recursos</b> da entidade."},

S14:{t:"sort", instr:"Verdadeiro ou falso sobre o item 5.18?",
  buckets:["Verdadeiro","Falso"],
  items:[["A obrigação deve estar relacionada a um terceiro",0],
         ["As obrigações vinculadas podem ser legais ou não legalmente vinculadas",0],
         ["Não é essencial saber a identidade dos terceiros",0],
         ["A entidade pode obrigar a si mesma ao divulgar sua intenção publicamente",1],
         ["A identificação do terceiro é condição de existência da obrigação",1]],
  why:"Identificação é <b>indicação</b>, não condição."},

S15:{t:"mc", instr:"Pedido de compra de mercadoria ainda não recebida:",
  options:["Não é reconhecido como passivo — o fato gerador não ocorreu",
           "É reconhecido como passivo circulante",
           "É reconhecido como passivo não circulante",
           "É reconhecido como provisão"],
  answer:0,
  why:"Do ponto de vista patrimonial não há obrigação presente."},

S16:{t:"sort", instr:"Empréstimo de longo prazo: circulante ou não circulante?",
  buckets:["Circulante","Não circulante"],
  items:[["Compromisso descumprido até a data das demonstrações",0],
         ["Passivo vencido e pagável à ordem do credor",0],
         ["Credor concedeu carência, até a data das demonstrações, a terminar 18 meses depois",1]],
  why:"A carência precisa ter sido concedida <b>até a data das demonstrações</b> e durar <b>pelo menos 12 meses</b>."},

S17:{t:"mc", instr:"Ocorrida obrigação de pagar sem previsão orçamentária, o passivo:",
  options:["Deve ser registrado, sem prejuízo das responsabilidades pela inobservância da lei",
           "Não deve ser registrado até haver dotação",
           "Deve ser registrado apenas em conta de controle",
           "Deve ser registrado no exercício seguinte"],
  answer:0,
  why:"A contabilidade patrimonial não espera o orçamento."},

S18:{t:"sort", instr:"Passivo financeiro ou permanente (art. 105, §§ 3º e 4º)?",
  buckets:["Passivo financeiro","Passivo permanente"],
  items:[["Dívidas e pagamentos que independam de autorização orçamentária",0],
         ["Parcela da dívida fundada com execução orçamentária iniciada e pendente de pagamento",0],
         ["Dívidas que dependam de autorização legislativa para amortização ou resgate",1]],
  why:"A ressalva do MCASP é o que evita a confusão entre os dois parágrafos."},

S19:{t:"gap", instr:"Complete o art. 98 da Lei 4.320/64",
  before:"A dívida fundada compreende os compromissos de exigibilidade superior a ",
  after:", contraídos para atender a desequilíbrio orçamentário ou a financiamento de obras e serviços públicos.",
  options:["doze meses","vinte e quatro meses","um exercício"], answer:0,
  why:"Mesmo corte do art. 29 da LRF."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 04","https://www.tecconcursos.com.br/s/Q2oqq8","Q2oqq8"],
  ["Caderno FCC — Contabilidade Pública 04","https://www.tecconcursos.com.br/s/Q2oqoe","Q2oqoe"],
  ["Caderno FGV — Contabilidade Pública 04","https://www.tecconcursos.com.br/s/Q2oqp5","Q2oqp5"],
  ["Caderno VUNESP — Contabilidade Pública 04","https://www.tecconcursos.com.br/s/Q2oqpH","Q2oqpH"]
];
var TECNOTA = "O autor sugere <b>20 questões</b> aqui. As classificações do art. 105 — financeiro × permanente — caem muito em prova de Contador, e quase sempre junto com circulante × não circulante, para ver se você confunde os dois critérios.";

var UNITS = [
  {n:1, title:"Patrimônio público e ativo", cvar:"u2", lessons:[
    {id:"P1", type:"teoria", title:"Patrimônio, ativo e benefícios econômicos", xp:10, data:"V1"},
    {id:"P2", type:"drill",  title:"Praticar · patrimônio e definição de ativo", xp:25, data:["S1","S2","S3","S4","T0","T1","T2","T3","T4"]},
    {id:"P3", type:"drill",  title:"Praticar · reconhecer e desreconhecer", xp:25, data:["S5","S6","S7","T5","T6","T7","T8","T9","T10","T11"]},
    {id:"P4", type:"drill",  title:"Praticar · patrimônio cultural",     xp:25, data:["S8","T12","T13","T14","T15","T16"]},
    {id:"P5", type:"flash",  title:"Flashcards · patrimônio e ativo",    xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Classificação do ativo", cvar:"u1", lessons:[
    {id:"P6", type:"teoria", title:"Circulante, não circulante, financeiro e permanente", xp:10, data:"V2"},
    {id:"P7", type:"drill",  title:"Praticar · circulante × não circulante", xp:25, data:["S9","S10","T17","T18","T19","T20"]},
    {id:"P8", type:"drill",  title:"Praticar · financeiro × permanente",  xp:25, data:["S11","S12","T21","T22","T23","T24","T25"]},
    {id:"P9", type:"flash",  title:"Flashcards · classificação do ativo", xp:15, data:[14,15,16,17,18,19,20]}
  ]},
  {n:3, title:"Passivo", cvar:"u3", lessons:[
    {id:"P10",type:"teoria", title:"Definição, terceiros e classificação",xp:10, data:"V3"},
    {id:"P11",type:"drill",  title:"Praticar · definição e terceiros",   xp:25, data:["S13","S14","T26","T27","T28","T29","T30","T31"]},
    {id:"P12",type:"drill",  title:"Praticar · reconhecimento do passivo", xp:25, data:["S15","S17","T32","T33","T37"]},
    {id:"P13",type:"drill",  title:"Praticar · circulante e não circulante", xp:25, data:["S16","T34","T35","T36"]},
    {id:"P14",type:"drill",  title:"Praticar · financeiro, permanente e dívida fundada", xp:25, data:["S18","S19","T38","T39","T40","T41","T42","T43","T44"]},
    {id:"P15",type:"flash",  title:"Flashcards · passivo",               xp:15, data:[21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Prev",type:"review",title:"Revisão geral do módulo",            xp:60, data:null},
    {id:"P16",type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"P17",type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a definição de abertura do Resumo: patrimônio público é o conjunto de <b>bens, direitos e obrigações</b> de <b>propriedade ou responsabilidade</b> de entidades governamentais.</p><p>O material lista quem são essas entidades: órgãos públicos, autarquias, fundações, empresas estatais e outras do setor público. E os bens incluem <b>tangíveis</b> (estoques) e <b>intangíveis</b> (direitos autorais).</p><p class='fb-fonte'>Resumo 04 · <i>Patrimônio público</i></p>",
1:"<p>Certo. Na lista de elementos da NBC TSP – Estrutura Conceitual que o Resumo reproduz, a <b>receita</b> passa a se chamar, no MCASP, <b>Variação Patrimonial Aumentativa</b>, e a <b>despesa</b>, <b>Variação Patrimonial Diminutiva</b>.</p><p>Complete a lista para a prova: ativo, passivo, receita (VPA), despesa (VPD), <b>contribuição dos proprietários</b> e <b>distribuição aos proprietários</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Elementos da NBC TSP — Estrutura Conceitual</i></p>",
2:"<p>Certo — literalidade do item <b>5.6</b> da NBC TSP – Estrutura Conceitual, transcrito no Resumo: ativo é um <b>recurso controlado no presente</b> pela entidade como <b>resultado de evento passado</b>.</p><p>Os dois eixos temporais caem sempre juntos: o <b>controle</b> é atual; o <b>evento</b> que o originou é passado. E o ativo pode ser <b>tangível</b> (terrenos, veículos) ou <b>intangível</b> (patentes, marcas).</p><p class='fb-fonte'>Resumo 04 · <i>Ativo — NBC TSP 5.6</i></p>",
3:"<p>Errado pela palavra <b>exclusivamente</b>. O item <b>5.10</b> diz que os benefícios econômicos correspondem a <b>entradas de caixa OU reduções das saídas de caixa</b>.</p><p>Como o comentário do Resumo traduz: valores em dinheiro que <b>entram</b> nos cofres do governo, ou reduções nos valores que <b>saem</b> desses cofres. Amputar a segunda hipótese derruba a assertiva.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo — NBC TSP 5.10</i></p>",
4:"<p>Certo — são as duas alíneas do item <b>5.10</b>, na ordem do Resumo: (a) da <b>utilização do ativo na produção e na venda de serviços</b>; ou (b) da <b>troca direta do ativo por caixa ou por outros recursos</b>.</p><p>O exemplo do material: se o governo vende ingressos para um evento em um <b>teatro público</b>, as receitas dessas vendas são benefícios econômicos.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo — NBC TSP 5.10 e exemplo do teatro</i></p>",
5:"<p>Certo — são as duas condições cumulativas do MCASP: <b>(a)</b> satisfazer a definição de ativo; <b>e (b)</b> poder ser mensurado de maneira que observe as <b>características qualitativas</b>, levando em consideração as restrições sobre a informação contábil.</p><p>Repare no <b>e</b>: definição sozinha não basta, mensuração sozinha também não.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento e desreconhecimento do ativo</i></p>",
6:"<p>Errado — a assertiva cortou a segunda condição. Pelo MCASP, além de satisfazer a <b>definição de ativo</b>, o item precisa <b>poder ser mensurado</b> observando as características qualitativas e as restrições sobre a informação contábil.</p><p>A banca gosta de transformar requisito <b>cumulativo</b> em requisito único. Aqui são dois, ligados por <b>e</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento do ativo — alíneas a e b</i></p>",
7:"<p>Certo — o Resumo registra que também são reconhecidos no ativo os depósitos caracterizados como <b>entradas compensatórias no ativo e no passivo financeiro</b>.</p><p>Os exemplos do material: <b>cauções em dinheiro para garantia de contratos</b>, <b>consignações a pagar</b>, retenção de obrigações de terceiros a recolher e outros depósitos com finalidades especiais. Eles aparecem nas duas pontas — ativo e passivo.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento do ativo — entradas compensatórias</i></p>",
8:"<p>Certo, na letra do Resumo: <b>desreconhecimento</b> é o processo de avaliar se ocorreram mudanças, <b>desde a data do relatório anterior</b>, que justifiquem a remoção de elemento previamente reconhecido nas demonstrações contábeis — e remover esse item se as mudanças ocorrerem.</p><p>O mesmo conceito reaparece adiante: aplicam-se aos <b>passivos</b> os mesmos critérios de desreconhecimento dos ativos.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento e desreconhecimento do ativo</i></p>",
9:"<p>Errado no momento. O Resumo diz que as condições que dão origem à incerteza <b>podem mudar</b>, e por isso é importante que a incerteza seja avaliada <b>em cada data da demonstração contábil</b> — não apenas no reconhecimento inicial.</p><p>É daí que sai o desreconhecimento: o que era ativo em um exercício pode deixar de ser no seguinte.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento do ativo — incerteza</i></p>",
10:"<p>Certo — é o exemplo do Resumo. O montante dos <b>créditos tributários a receber</b> cuja expectativa de geração de benefícios econômicos seja considerada <b>remota</b> (baixíssima probabilidade) deve ser <b>desreconhecido</b>.</p><p>A razão dada pelo material: por <b>não atenderem à definição de ativo</b>. Sem expectativa de benefício econômico, não há recurso a controlar.</p><p class='fb-fonte'>Resumo 04 · <i>Desreconhecimento — exemplo dos créditos tributários</i></p>",
11:"<p>Errado — a assertiva parou antes da ressalva. O Resumo é expresso: os créditos desreconhecidos <b>continuam sendo objeto de controle contábil em contas apropriadas</b>, assegurando-se a <b>devida transparência</b>.</p><p>Desreconhecer é tirar da posição de ativo nas demonstrações, não apagar o crédito dos controles.</p><p class='fb-fonte'>Resumo 04 · <i>Desreconhecimento — exemplo dos créditos tributários</i></p>",
12:"<p>Certo — definição literal: ativos descritos como <b>bens do patrimônio cultural</b> são assim chamados devido a sua <b>significância histórica, cultural ou ambiental</b>.</p><p>Os exemplos do Resumo: monumentos e prédios históricos, <b>sítios arqueológicos</b>, áreas de conservação e reservas naturais.</p><p class='fb-fonte'>Resumo 04 · <i>Bens do patrimônio cultural</i></p>",
13:"<p>Errado — inverteu a frase do Resumo: esses ativos são <b>raramente mantidos para gerar entradas de caixa</b>, e pode haver <b>obstáculos legais ou sociais</b> para usá-los com tal propósito.</p><p>Some a isso outra característica do material: obrigações legais ou estatutárias podem impor <b>proibições ou restrições severas na alienação por venda</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Bens do patrimônio cultural — características</i></p>",
14:"<p>Certo — é a primeira característica da lista: o valor <b>cultural, ambiental, educacional e histórico</b> desses bens provavelmente <b>não é refletido totalmente</b> no valor financeiro puramente baseado no <b>preço de mercado</b>.</p><p>Faz sentido com o resto do quadro: são bens geralmente <b>insubstituíveis</b>, com venda restrita — o mercado não precifica o que dificilmente será negociado.</p><p class='fb-fonte'>Resumo 04 · <i>Bens do patrimônio cultural — características</i></p>",
15:"<p>Certo, na letra do Resumo: são geralmente <b>insubstituíveis</b> e seus valores <b>podem aumentar ao longo do tempo mesmo se sua condição física se deteriorar</b>.</p><p>É o inverso da lógica de depreciação que o aluno traz da contabilidade societária — e por isso a banca gosta do ponto.</p><p class='fb-fonte'>Resumo 04 · <i>Bens do patrimônio cultural — características</i></p>",
16:"<p>Errado. A característica do Resumo diz o contrário: <b>pode ser difícil estimar sua vida útil</b>, a qual, <b>em alguns casos, pode ser de centenas de anos</b>.</p><p>Nenhuma palavra de precisão no material — ao contrário, é justamente a dificuldade de estimar que caracteriza esses bens.</p><p class='fb-fonte'>Resumo 04 · <i>Bens do patrimônio cultural — características</i></p>",
17:"<p>Errado por uma palavra: <b>cumulativamente</b>. O MCASP manda classificar o ativo como circulante quando satisfizer <b>a um dos</b> critérios listados — basta <b>um</b>.</p><p>Os cinco critérios: disponível para venda imediata; realizável ou mantido para venda/consumo no ciclo operacional; mantido essencialmente para ser negociado; realizável <b>até doze meses</b> após a data das demonstrações; ou caixa e equivalente de caixa.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo circulante e não circulante</i></p>",
18:"<p>Certo — é o critério da alínea <b>d</b> do MCASP: espera-se que o ativo seja realizado <b>até doze meses após a data das demonstrações contábeis</b>.</p><p>Lembre que esse é apenas <b>um</b> dos cinco critérios alternativos. Um ativo pode ser circulante sem passar por ele, por exemplo se estiver disponível para <b>venda imediata</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo circulante e não circulante</i></p>",
19:"<p>Errado pelo <b>sempre</b>. A alínea <b>e</b> traz uma ressalva: caixa ou equivalente de caixa é circulante <b>a menos que</b> sua troca ou uso para pagamento de passivo se encontre <b>vedada durante pelo menos doze meses</b> após a data das demonstrações contábeis.</p><p>Dinheiro bloqueado por mais de doze meses sai do circulante — é a pegadinha embutida no critério.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo circulante e não circulante — alínea e</i></p>",
20:"<p>Certo — é a regra de fechamento do MCASP no Resumo: <b>os demais ativos devem ser classificados como não circulantes</b>.</p><p>A técnica é sempre a mesma: o circulante é definido por lista taxativa de critérios <b>alternativos</b>; o não circulante é residual — é o que sobra.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo circulante e não circulante</i></p>",
21:"<p>Certo — literalidade do art. 105, <b>§1º</b>, da Lei 4.320/64: o Ativo Financeiro compreenderá os <b>créditos e valores realizáveis independentemente de autorização orçamentária</b> e os <b>valores numerários</b>.</p><p>Exemplos do Resumo: empréstimos concedidos a terceiros, impostos a receber, títulos públicos, dinheiro em caixa e valores em contas bancárias.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo financeiro e permanente — art. 105, §1º</i></p>",
22:"<p>Certo — é o art. 105, <b>§2º</b>: o Ativo Permanente compreenderá os <b>bens, créditos e valores cuja mobilização ou alienação dependa de autorização legislativa</b>.</p><p>Exemplos do Resumo: imóveis, equipamentos e veículos do governo que não podem ser vendidos sem autorização legislativa prévia, e participações acionárias cuja venda exige autorização.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo financeiro e permanente — art. 105, §2º</i></p>",
23:"<p>Errado no critério. O que separa o ativo <b>financeiro</b> do <b>permanente</b>, no art. 105 da Lei 4.320/64, é a <b>dependência de autorização</b> — orçamentária/legislativa —, e não o prazo.</p><p>O prazo de <b>doze meses</b> pertence a outra classificação: circulante x não circulante. São dois cortes diferentes sobre o mesmo ativo, e a banca adora sobrepor os dois.</p><p class='fb-fonte'>Resumo 04 · <i>Ativo financeiro e permanente</i></p>",
24:"<p>Certo — está na lista de exemplos de ativo financeiro do Resumo: <b>valores em contas bancárias da entidade</b>.</p><p>Na mesma lista: dinheiro em caixa, títulos públicos, impostos a receber e empréstimos concedidos a terceiros. Todos realizáveis <b>independentemente de autorização orçamentária</b>, como manda o §1º do art. 105.</p><p class='fb-fonte'>Resumo 04 · <i>Explicando melhor o ativo financeiro</i></p>",
25:"<p>Certo — é o terceiro exemplo de ativo permanente do Resumo: <b>participações acionárias do governo em empresas, onde a venda dessas ações requer autorização legislativa</b>.</p><p>O material explica a lógica do permanente: são bens, créditos e valores que <b>não são imediatamente líquidos</b>, pois sua mobilização ou venda depende de autorização legislativa.</p><p class='fb-fonte'>Resumo 04 · <i>Explicando melhor o ativo permanente</i></p>",
26:"<p>Certo — literalidade do item <b>5.14</b> da NBC TSP – Estrutura Conceitual: passivo é uma <b>obrigação presente</b>, derivada de <b>evento passado</b>, cuja extinção deva resultar na <b>saída de recursos</b> da entidade.</p><p>O item <b>5.16</b> completa: a obrigação que pode ser liquidada ou extinta <b>sem</b> saída de recursos <b>não é um passivo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo — NBC TSP 5.14 e 5.16</i></p>",
27:"<p>Certo — é o item <b>5.18</b>: as obrigações vinculadas podem ser <b>legais (legalmente vinculadas) ou não legalmente vinculadas</b>, e podem originar-se tanto de transações <b>com</b> contraprestação quanto <b>sem</b> contraprestação.</p><p>O comentário do Resumo distingue: <b>com contraprestação</b>, a entidade recebe algo em troca de assumir o passivo; <b>sem contraprestação</b>, assume o passivo sem receber nada.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo — NBC TSP 5.18</i></p>",
28:"<p>Errado — o item 5.18 diz exatamente o contrário: a entidade <b>não pode obrigar a si mesma</b>, mesmo quando tenha <b>divulgado publicamente a intenção</b> de se comportar de determinado modo.</p><p>Exemplo do Resumo: prefeitura que anuncia a intenção de construir um parque não registra passivo; só quando <b>contrata a empresa de construção</b> há terceiro envolvido e nasce o passivo.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo — NBC TSP 5.18 e exemplo do parque</i></p>",
29:"<p>Certo, na letra do item <b>5.18</b>: a obrigação deve estar <b>relacionada a um terceiro</b> para poder gerar um passivo.</p><p>É a condição que o Resumo isola como essencial: sem terceiro, não há passivo. Daí a frase seguinte do mesmo item — a entidade não pode obrigar a si mesma.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo — NBC TSP 5.18</i></p>",
30:"<p>Errado — inverteu o final do item 5.18. A identificação de terceiros é uma <b>indicação</b> da existência da obrigação, mas <b>não é essencial saber a identidade dos terceiros</b> antes da época da extinção do passivo para que a obrigação presente exista.</p><p>O exemplo do material é o dos salários: a entidade pode não conhecer os funcionários específicos e ainda assim ter a obrigação.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo — NBC TSP 5.18, identificação de terceiros</i></p>",
31:"<p>Certo — é o exemplo do Resumo. A entidade governamental pode ter obrigação de pagar <b>salários</b> aos seus funcionários sem conhecer as <b>identidades específicas</b> de quem receberá.</p><p>Mesmo assim, <b>a obrigação de pagar os salários está presente</b> e deve ser reconhecida como passivo. Saber quem é o terceiro é indicação, não requisito.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo — exemplo dos salários</i></p>",
32:"<p>Errado — é o quadro <b>ATENÇÃO!</b> do Resumo: as obrigações decorrentes de <b>pedidos de compra de mercadorias ainda não recebidas</b>, do ponto de vista patrimonial, <b>não são reconhecidas como passivos</b> nas demonstrações contábeis.</p><p>A razão vem entre parênteses no material: o <b>fato gerador não ocorreu</b>. Pedido não é recebimento.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento do passivo — ATENÇÃO!</i></p>",
33:"<p>Certo — o Resumo diz que são reconhecidos no passivo, <b>pois se caracterizam como obrigações para com terceiros</b>, os depósitos caracterizados como <b>entradas compensatórias</b> no ativo e no passivo financeiro.</p><p>Os mesmos exemplos do lado do ativo: cauções em dinheiro para garantia de contratos, consignações a pagar, retenção de obrigações de terceiros a recolher.</p><p class='fb-fonte'>Resumo 04 · <i>Reconhecimento do passivo — entradas compensatórias</i></p>",
34:"<p>Certo — regra do MCASP no quadro do Resumo: os passivos devem ser classificados como <b>circulantes</b> quando corresponderem a valores <b>exigíveis até doze meses</b> após a data das demonstrações contábeis.</p><p>E, como no ativo, o resto é residual: <b>os demais passivos</b> devem ser classificados como <b>não circulantes</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo circulante e não circulante</i></p>",
35:"<p>Certo — é a <b>OBSERVAÇÃO 1</b>: quando a entidade não cumprir compromisso de empréstimo de longo prazo até a data das demonstrações contábeis, o passivo se torna <b>vencido e pagável à ordem do credor</b> e deve ser classificado como <b>circulante</b>.</p><p>Leia colada a ela a exceção da carência, que joga o passivo de volta para o não circulante.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo circulante — OBSERVAÇÕES, item 1</i></p>",
36:"<p>Errado na conclusão. Pela <b>OBSERVAÇÃO 1</b>, se o credor concordou, <b>até a data das demonstrações contábeis</b>, em proporcionar período de <b>carência a terminar pelo menos doze meses</b> após essa data, o passivo deve ser classificado como <b>não circulante</b>.</p><p>A carência tempestiva desfaz o efeito do descumprimento. Sem ela, volta a valer a regra do passivo vencido e circulante.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo circulante — OBSERVAÇÕES, item 1</i></p>",
37:"<p>Errado — a <b>OBSERVAÇÃO 2</b> é clara: ocorrida qualquer situação que enseje obrigação de pagar, o passivo <b>deverá ser registrado mesmo que não haja a devida previsão orçamentária</b>.</p><p>O Resumo ressalva apenas que isso é <b>sem prejuízo das responsabilidades e providências</b> a serem tomadas pela inobservância da lei. O registro patrimonial não fica refém do orçamento.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo circulante — OBSERVAÇÕES, item 2</i></p>",
38:"<p>Certo — art. 105, <b>§3º</b>, da Lei 4.320/64: o Passivo Financeiro compreenderá as <b>dívidas fundadas</b> e outros pagamentos que <b>independam de autorização orçamentária</b>.</p><p>Guarde o par do quadro: financeiro = <b>INDEPENDAM</b> de autorização orçamentária; permanente = <b>DEPENDAM</b> de autorização legislativa para amortização ou resgate.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo financeiro e permanente — art. 105, §3º</i></p>",
39:"<p>Certo — é o art. 105, <b>§4º</b>: o Passivo Permanente compreenderá as <b>dívidas fundadas</b> e outras que <b>dependam de autorização legislativa para amortização ou resgate</b>.</p><p>Note que a <b>dívida fundada</b> aparece nos dois parágrafos; o que separa é a dependência ou não de autorização.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo financeiro e permanente — art. 105, §4º</i></p>",
40:"<p>Certo — é a <b>OBS.</b> do quadro: nos termos do MCASP, considera-se no conceito de Passivo Financeiro <b>apenas a parcela da dívida fundada que tenha tido execução orçamentária iniciada e esteja pendente de pagamento</b>.</p><p>Os dois requisitos andam juntos: execução orçamentária <b>iniciada</b> e pagamento <b>pendente</b>. O restante da dívida fundada fica no passivo permanente.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo financeiro e permanente — OBS. do MCASP</i></p>",
41:"<p>Certo — é o conceito do <b>art. 98 da Lei 4.320/64</b> no Resumo: a dívida fundada compreende os compromissos de <b>exigibilidade superior a 12 meses</b>, contraídos para atender a <b>desequilíbrio orçamentário</b> ou a financiamento de <b>obras e serviços públicos</b>.</p><p>O material traz ainda o conceito paralelo do art. 29 da LRF, com o mesmo prazo de 12 meses.</p><p class='fb-fonte'>Resumo 04 · <i>O que é dívida fundada — art. 98 da Lei 4.320/64</i></p>",
42:"<p>Certo — pelo <b>art. 29 da LRF</b>, citado no Resumo, a dívida pública fundada (ou <b>consolidada</b>) é o montante total das obrigações financeiras do ente e da realização de <b>operações de crédito</b> para amortização em <b>prazo superior a 12 meses</b>.</p><p>Guarde os dois nomes: fundada e consolidada são a mesma coisa. E o marco é sempre <b>12 meses</b>.</p><p class='fb-fonte'>Resumo 04 · <i>O que é dívida fundada — art. 29 da LRF</i></p>",
43:"<p>Errado — é o COMENTÁRIO ao art. 58 que fecha o Resumo. Quando o artigo usa a palavra <b>obrigação</b>, ele <b>não</b> se refere à obrigação patrimonial (passivo exigível).</p><p>Refere-se ao <b>comprometimento de recurso financeiro</b> da entidade que empenhou — uma <b>obrigação financeira</b> para fins de cálculo do superávit financeiro. Passivo exigível pressupõe <b>fato gerador já ocorrido</b>, o que o empenho não garante.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo x empenho — COMENTÁRIO ao art. 58</i></p>",
44:"<p>Certo, na letra do COMENTÁRIO: o registro da obrigação patrimonial <b>independe da execução orçamentária (empenho)</b>.</p><p>A consequência que o Resumo extrai: o passivo exigível <b>pode, ou não</b>, ser registrado <b>concomitantemente</b> com o empenho da despesa correspondente, a depender se ocorreu, ou não, o <b>fato gerador</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Passivo x empenho — COMENTÁRIO ao art. 58</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"Patrimônio público e elementos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
