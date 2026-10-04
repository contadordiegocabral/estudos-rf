/* Contabilidade Geral — Módulo 05: Ativo não circulante (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab05 = (function(){
"use strict";

var CARDS = [
  ["Quais os quatro subgrupos do ativo não circulante?","<b>Realizável a Longo Prazo (RLP)</b> · <b>Investimentos</b> · <b>Imobilizado</b> · <b>Intangível</b> — art. 179, <b>incisos II a VI</b>, da Lei 6.404/76."],
  ["O que compreende o Realizável a Longo Prazo?","Os <b>direitos realizáveis APÓS o término do exercício seguinte</b> — e ainda os direitos derivados de <b>vendas, adiantamentos ou empréstimos</b> a certas pessoas ligadas à companhia."],
  ["A quem se referem os direitos derivados de vendas, adiantamentos ou empréstimos que vão ao RLP?","A <b>sociedades coligadas ou controladas</b>, <b>diretores</b>, <b>acionistas</b> e <b>participantes no lucro da companhia</b>."],
  ["Que condição esses direitos precisam cumprir para ir ao RLP?","Não constituírem <b>negócios usuais na exploração do objeto da companhia</b>. Se forem negócio usual, não vão ao RLP por essa regra."],
  ["Quais operações com coligadas, diretores e acionistas o art. 179 alcança?","<b>Apenas</b> as <b>vendas</b>, os <b>adiantamentos</b> e os <b>empréstimos</b> — é a OBS. do resumo."],
  ["O que compreendem as contas classificadas em INVESTIMENTOS?","As <b>participações permanentes em outras sociedades</b> e os <b>direitos de qualquer natureza</b>, não classificáveis no ativo circulante, que <b>não se destinem à manutenção da atividade</b> da companhia ou da empresa."],
  ["Exemplos de bens que não se destinam à manutenção da atividade da companhia","<b>Obras de arte</b> · <b>imóveis alugados</b> · <b>terrenos não utilizados</b>."],
  ["Onde se classifica o investimento TEMPORÁRIO?","Nunca em “Investimentos”. Vai ao <b>Ativo Circulante</b> (se de curto prazo) ou ao <b>ANC Realizável a Longo Prazo</b>."],
  ["Qual a palavra que separa Investimentos de Imobilizado?","A <b>destinação</b>. Bem corpóreo <b>destinado à manutenção das atividades</b> → <b>Imobilizado</b>. Bem que <b>não se destina</b> a isso → <b>Investimentos</b>."],
  ["O que compõe o ativo IMOBILIZADO?","Os direitos que tenham por objeto <b>bens corpóreos destinados à manutenção das atividades</b> da companhia, ou exercidos com essa finalidade, <b>inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle</b> desses bens (ex.: <b>leasing</b>)."],
  ["Exemplos de ativo imobilizado","<b>Imóveis utilizados pela Cia</b> · <b>veículos</b> · <b>móveis e utensílios</b> · <b>máquinas e equipamentos</b> · <b>terrenos</b> · <b>instalações</b>."],
  ["Quando o bem corpóreo mantido para ALUGUEL a outros é imobilizado?","Quando estiver <b>diretamente ligado à atividade operacional</b> da entidade."],
  ["Empresa de auditoria em prédio próprio aluga as vagas da garagem a seus funcionários. Classificação?","<b>Ativo imobilizado</b> — está ligado à atividade operacional (Exemplo 01 do resumo)."],
  ["Os veículos de uma empresa de locação de veículos são o quê?","<b>Ativo imobilizado</b> (Exemplo 02 do resumo)."],
  ["Terreno alugado a terceiros com o objetivo de obter renda. Classificação?","<b>Propriedade para Investimento</b> — Ativo Não Circulante · <b>Investimentos</b>."],
  ["CPC 27, item 7 — quando o custo do imobilizado é reconhecido como ativo?","Se, <b>e apenas se</b>: (a) for <b>provável</b> que <b>futuros benefícios econômicos</b> associados ao item <b>fluirão para a entidade</b>; e (b) o <b>custo</b> puder ser <b>mensurado confiavelmente</b>."],
  ["CPC 27, item 8 — sobressalentes e peças de reposição são o quê?","<b>Ativo imobilizado</b>, quando a entidade <b>espera usá-los por mais de um período</b>. Vale também para <b>ferramentas</b> e <b>equipamentos de uso interno</b>."],
  ["A ABC comprou computadores para usar três anos e, ao mesmo tempo, peças de reposição para a vida útil deles. Classificação?","<b>Tanto os computadores quanto as peças de reposição</b> são <b>Ativo Imobilizado</b> no Balanço Patrimonial."],
  ["CPC 27 — por qual valor se mensura o imobilizado no reconhecimento?","Pelo seu <b>CUSTO DE AQUISIÇÃO</b>."],
  ["O que SOMA no custo do imobilizado?","<b>Preço de compra</b> + <b>tributos (exceto os recuperáveis)</b> + <b>custos diretamente atribuíveis para colocar o ativo no local e em condições de funcionamento</b> + <b>estimativa dos custos de remoção do item e de restauração do local</b> (ao final da vida útil)."],
  ["O que se DEDUZ do custo do imobilizado?","Os <b>descontos comerciais (incondicionais)</b> e os <b>abatimentos</b>."],
  ["Exemplos de custos DIRETAMENTE ATRIBUÍVEIS ao imobilizado","<b>Benefícios a empregados</b> decorrentes do imobilizado · <b>preparação do local</b> · <b>frete e manuseio</b> (por conta do comprador) · <b>instalação e montagem</b> · <b>testes</b> de funcionamento · <b>honorários profissionais</b>."],
  ["Exemplos de custos que NÃO são atribuíveis ao imobilizado","<b>Abertura de nova instalação</b> · <b>introdução de novo produto ou serviço</b> · <b>propaganda e atividades promocionais</b> · <b>transferência das atividades para novo local</b> ou para <b>nova categoria de clientes</b> · <b>treinamento</b> · <b>custos administrativos e outros indiretos</b>."],
  ["O que compõe o ativo INTANGÍVEL?","Os direitos que tenham por objeto <b>bens incorpóreos destinados à manutenção da companhia</b>, ou exercidos com essa finalidade, <b>inclusive o fundo de comércio adquirido</b>."],
  ["Exemplos de ativo intangível","<b>Marcas</b> · <b>títulos de periódicos</b> · <b>softwares</b> · <b>licenças</b> · <b>franquias</b> · <b>direitos autorais</b> · <b>patentes</b> · <b>direitos de propriedade</b> · <b>receitas</b> · <b>fórmulas</b> · <b>fundo de comércio adquirido</b>."],
  ["O que é fundo de comércio?","Grosso modo, o <b>valor pago a mais</b> por adquirir uma empresa já <b>“estabilizada”</b> no mercado."],
  ["O fundo de comércio abrange que tipos de bens?","<b>Corpóreos</b> (máquinas, instalações) <b>e incorpóreos</b> (clientela, faturamento, marca, banco de dados). O que o caracteriza é a <b>funcionalidade do conjunto</b> dos bens."],
  ["Marcas, títulos de publicações e listas de clientes GERADOS INTERNAMENTE podem ser intangíveis?","<b>NÃO</b> devem ser reconhecidos como ativos intangíveis — <b>CPC 04, item 63</b>."],
  ["Intangível adquirido em COMBINAÇÃO DE NEGÓCIOS — por quanto entra?","Pelo <b>valor justo na data de aquisição</b> — <b>CPC 04, item 35</b>."],
  ["A Cia. Gama adquiriu o controle das Linhas Aéreas Épsilon, titular de direitos de operação em aeroportos. Como a Gama reconhece esses direitos?","Como <b>ativo intangível</b>, mensurado pelo <b>valor justo na data de aquisição</b>."],
  ["Quadro de mensuração do intangível","<b>Gerado internamente → CUSTO</b> (CPC 04, item 66). <b>Adquirido em combinação de negócios → VALOR JUSTO</b> (CPC 04, item 35)."],
  ["Qual o teste do software dentro do hardware?","A entidade avalia <b>qual elemento é mais significativo</b>: se o software é <b>parte integrante</b> do equipamento, é <b>imobilizado</b>; se não é, é <b>intangível</b>."],
  ["Hardware NÃO funciona sem o software × hardware funciona sem ele","<b>Não funciona sem</b> → software é <b>IMOBILIZADO</b> (ex.: sistema operacional Windows). <b>Funciona sem</b> → software é <b>INTANGÍVEL</b> (ex.: pacote Office)."],
  ["Computador de R$ 3.000 com software de segurança embutido de R$ 500, intrinsecamente relacionado a ele, vida de 3 anos, à vista. Contrapartida da saída de caixa?","<b>Aumento de R$ 3.500 no ativo imobilizado</b>. Dizer “R$ 3.500 no intangível” é a <b>pegadinha</b>."],
  ["Ciclo operacional maior que o exercício social — qual a consequência?","A classificação no <b>circulante ou longo prazo</b> terá por base o <b>prazo desse ciclo</b> — art. 179, <b>parágrafo único</b>, da Lei 6.404/76."],
  ["Ciclo operacional de 3 anos — como se classificam os direitos?","<b>AC (curto prazo)</b>: realizáveis em <b>até 3 anos</b>. <b>ANC (longo prazo)</b>: realizáveis <b>após 3 anos</b>."],
  ["O que é ciclo operacional?","O prazo que a empresa leva para <b>comprar matéria-prima, produzir, vender e receber</b>. Na empresa comercial, o prazo médio entre <b>aquisição das mercadorias, venda e recebimento</b> dos clientes. Ex.: <b>35 + 27 = 62 dias</b>."],
  ["O que é ativo qualificável?","Um ativo que, <b>necessariamente</b>, demanda um <b>período de tempo substancial</b> para ficar <b>pronto para seu uso (ou venda)</b> — <b>CPC 20, item 5</b>. Ex.: máquina construída com empréstimo de R$ 100.000 por 4 anos."],
  ["CPC 20, item 8 — o que fazer com os custos de empréstimos?","<b>Capitalizar</b> (como parte do custo do ativo) os <b>diretamente atribuíveis à aquisição, construção ou produção do ativo qualificável</b>; os <b>outros</b> custos de empréstimos são <b>despesa no período em que incorridos</b>. Exemplo: juros de R$ 200/mês → <b>R$ 2.400 ativados</b> na construção e <b>R$ 2.400 como despesa financeira</b> depois."],
  ["Quais elementos do ativo são ajustados a valor presente?","Os decorrentes de <b>operações de LONGO PRAZO</b> — sempre. Os <b>demais</b> (curto prazo), <b>apenas quando houver efeito relevante</b>. Art. 183, <b>inciso VIII</b>, da Lei 6.404/76."]
];

var QS = [
  ["O ativo não circulante compreende o ativo realizável a longo prazo, os investimentos, o imobilizado e o intangível.","C","Lei 6.404, art. 179","Incisos II a VI."],
  ["O ativo não circulante compreende apenas o imobilizado e o intangível.","E","CEBRASPE","São <b>quatro</b> subgrupos: RLP, investimentos, imobilizado e intangível."],
  ["O realizável a longo prazo compreende os direitos realizáveis após o término do exercício seguinte.","C","FCC","Definição."],
  ["O realizável a longo prazo compreende os direitos realizáveis até o término do exercício seguinte.","E","FGV","Errado por uma palavra: <b>após</b> o término do exercício seguinte."],
  ["Classificam-se no realizável a longo prazo os direitos derivados de vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas, diretores, acionistas ou participantes no lucro da companhia, que não constituírem negócios usuais na exploração do objeto da companhia.","C","VUNESP","Literalidade do art. 179, II."],
  ["Os direitos derivados de vendas a sociedades controladas classificam-se no realizável a longo prazo ainda que constituam negócios usuais na exploração do objeto da companhia.","E","CEBRASPE","A regra exige que <b>não</b> constituam negócios usuais."],
  ["Qualquer direito da companhia contra seus diretores e acionistas, de qualquer natureza, classifica-se no realizável a longo prazo.","E","FCC","Só os derivados de <b>vendas, adiantamentos ou empréstimos</b>."],
  ["As contas classificadas em investimentos compreendem as participações permanentes em outras sociedades e os direitos de qualquer natureza, não classificáveis no ativo circulante, que não se destinem à manutenção da atividade da companhia ou da empresa.","C","FGV","Literalidade do art. 179, III."],
  ["Participações de caráter permanente em coligadas e controladas classificam-se no subgrupo investimentos.","C","VUNESP","Exemplos do resumo."],
  ["Obras de arte, imóveis alugados e terrenos não utilizados são exemplos de bens classificados em investimentos.","C","CEBRASPE","Não se destinam à manutenção da atividade."],
  ["O investimento temporário de curto prazo é classificado no subgrupo investimentos do ativo não circulante.","E","FCC","Se temporário, vai ao <b>ativo circulante</b> ou ao <b>ANC realizável a longo prazo</b>."],
  ["Se o investimento for temporário, ele será classificado no ativo circulante, caso seja de curto prazo, ou no ativo não circulante realizável a longo prazo.","C","FGV","Quadro ATENÇÃO do resumo."],
  ["Os direitos classificados em investimentos são aqueles destinados à manutenção da atividade da companhia.","E","VUNESP","É o contrário: <b>não</b> se destinam à manutenção da atividade."],
  ["Um terreno não utilizado pela companhia classifica-se no imobilizado, por se tratar de bem corpóreo.","E","CEBRASPE","Bem corpóreo não basta: sem destinação à atividade, vai a <b>investimentos</b>."],
  ["As contas do imobilizado são compostas pelos direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou exercidos com essa finalidade.","C","Lei 6.404, art. 179","Inciso IV."],
  ["Incluem-se no imobilizado os direitos decorrentes de operações que transfiram à companhia os benefícios, riscos e controle dos bens, como o leasing.","C","FCC","Parte final do inciso IV."],
  ["Os bens classificados no imobilizado caracterizam-se por não possuir existência física.","E","FGV","Imobilizado tem <b>existência física</b>; sem existência física é <b>intangível</b>."],
  ["Imóveis utilizados pela companhia, veículos, móveis e utensílios, máquinas e equipamentos, terrenos e instalações são exemplos de ativo imobilizado.","C","VUNESP","Lista de exemplos do resumo."],
  ["O bem corpóreo mantido para aluguel a outros será considerado ativo imobilizado se estiver diretamente ligado à atividade operacional da entidade.","C","CEBRASPE","Observação do resumo."],
  ["As vagas de garagem que uma empresa de auditoria, estabelecida em prédio próprio, aluga a seus funcionários devem ser classificadas como propriedade para investimento.","E","FCC","São <b>ativo imobilizado</b> — Exemplo 01 do resumo."],
  ["Os veículos das empresas de locação de veículos devem ser classificados como ativo imobilizado.","C","FGV","Exemplo 02 do resumo."],
  ["O terreno alugado a terceiros com o objetivo de obter renda deve ser classificado como propriedade para investimento, no ativo não circulante investimentos.","C","VUNESP","Contraponto dos Exemplos 01 e 02."],
  ["O custo de um item de ativo imobilizado deve ser reconhecido como ativo se for provável que futuros benefícios econômicos associados ao item fluirão para a entidade e se o custo do item puder ser mensurado confiavelmente.","C","CPC 27, item 7","As duas condições, cumulativas."],
  ["Basta que o custo do item possa ser mensurado confiavelmente para que ele seja reconhecido como ativo imobilizado.","E","CEBRASPE","O item 7 exige as <b>duas</b> condições: “se, e apenas se”."],
  ["Sobressalentes, peças de reposição, ferramentas e equipamentos de uso interno são classificados como ativo imobilizado quando a entidade espera usá-los por mais de um período.","C","CPC 27, item 8","Literalidade."],
  ["A sociedade que adquiriu computadores para usar por três anos e, ao mesmo tempo, peças de reposição para a vida útil desses computadores deve classificar apenas os computadores no imobilizado, indo as peças para o estoque.","E","FCC","No exemplo do resumo, <b>tanto os computadores quanto as peças</b> são imobilizado."],
  ["O item do ativo imobilizado classificado para reconhecimento como ativo deve ser mensurado pelo valor justo na data da aquisição.","E","FGV","Mensura-se pelo <b>custo de aquisição</b>."],
  ["Compõem o custo do imobilizado o preço de compra e os tributos, inclusive os recuperáveis.","E","VUNESP","Tributos, <b>exceto os recuperáveis</b>."],
  ["A estimativa dos custos de remoção do item e de restauração do local, ao final da vida útil, integra o custo do ativo imobilizado.","C","CEBRASPE","Consta do esquema do custo."],
  ["Os descontos comerciais incondicionais e os abatimentos são somados ao custo do ativo imobilizado.","E","FCC","São <b>deduzidos</b>."],
  ["Custos de frete e de manuseio por conta do comprador, de instalação e montagem, de testes de funcionamento e honorários profissionais são custos diretamente atribuíveis ao ativo imobilizado.","C","FGV","Lista do resumo."],
  ["Custos de treinamento, de propaganda e de abertura de nova instalação integram o custo do ativo imobilizado.","E","VUNESP","Estão na lista dos custos <b>não</b> atribuíveis."],
  ["As contas classificadas no intangível são compostas pelos direitos que tenham por objeto bens incorpóreos destinados à manutenção da companhia ou exercidos com essa finalidade, inclusive o fundo de comércio adquirido.","C","Lei 6.404, art. 179","Inciso VI."],
  ["Marcas, títulos de periódicos, softwares, licenças, franquias, patentes e fórmulas são exemplos de ativo intangível.","C","CEBRASPE","Lista de exemplos do resumo."],
  ["O fundo de comércio compreende apenas bens incorpóreos, como clientela, faturamento, marca e banco de dados.","E","FCC","Compreende <b>corpóreos e incorpóreos</b>; o que o caracteriza é a <b>funcionalidade do conjunto</b>."],
  ["Marcas, títulos de publicações e listas de clientes gerados internamente pela empresa devem ser reconhecidos como ativos intangíveis.","E","CPC 04, item 63","O item 63 diz exatamente o contrário: <b>não</b> devem."],
  ["Se um ativo intangível for adquirido em uma combinação de negócios, o seu custo deve ser o valor justo na data de aquisição.","C","CPC 04, item 35","Literalidade."],
  ["A Cia. Gama, ao adquirir o controle das Linhas Aéreas Épsilon S.A., titular de direitos de operação em aeroportos, deve reconhecer esses direitos como intangível mensurado pelo custo histórico registrado pela Épsilon.","E","VUNESP","Deve reconhecê-los pelo <b>valor justo na data de aquisição</b>."],
  ["O ativo intangível gerado internamente é mensurado pelo custo.","C","CPC 04, item 66","Quadro de mensuração do resumo."],
  ["Para saber se um ativo que contém elementos intangíveis e tangíveis deve ser tratado como imobilizado ou como intangível, a entidade avalia qual elemento é mais significativo.","C","CEBRASPE","O teste do resumo."],
  ["O software de uma máquina-ferramenta controlada por computador que não funciona sem esse software específico deve ser tratado como ativo intangível.","E","FCC","É <b>parte integrante</b> do equipamento: <b>imobilizado</b>."],
  ["O sistema operacional de um computador deve ser tratado como ativo imobilizado.","C","FGV","O hardware não funciona sem ele."],
  ["Quando o software não é parte integrante do respectivo hardware, como o pacote Office, ele deve ser tratado como ativo intangível.","C","VUNESP","Lado direito do quadro."],
  ["Comprado à vista, por R$ 3.000, um computador no qual estava embutido um software de segurança de R$ 500 intrinsecamente relacionado a ele, ambos com vida estimada em três anos, a contrapartida da diminuição do caixa é um aumento de R$ 3.500 no ativo intangível.","E","CEBRASPE","O gabarito é <b>R$ 3.500 no imobilizado</b>; o intangível é a pegadinha."],
  ["Na companhia em que o ciclo operacional tiver duração maior que o exercício social, a classificação no circulante ou no longo prazo terá por base o prazo desse ciclo.","C","Lei 6.404, art. 179","Parágrafo único."],
  ["Se a empresa possui ciclo operacional de três anos, serão classificados no ativo circulante os direitos realizáveis em até três anos.","C","FCC","Exemplo do resumo."],
  ["A empresa atacadista cujos produtos ficam em média 35 dias em estoque e cujo prazo médio de recebimento é de 27 dias tem ciclo operacional de 62 dias.","C","FGV","35 + 27."],
  ["Ativo qualificável é o ativo que, necessariamente, demanda um período de tempo substancial para ficar pronto para seu uso ou venda.","C","CPC 20, item 5","Definição."],
  ["Os custos de empréstimos diretamente atribuíveis à construção de ativo qualificável devem ser reconhecidos como despesa no período em que são incorridos.","E","CPC 20, item 8","Esses devem ser <b>capitalizados</b>; são os <b>outros</b> custos de empréstimos que vão a despesa."],
  ["No exemplo do empréstimo de R$ 50.000 com juros mensais de R$ 200, os R$ 2.400 de juros do período de construção são ativados no imobilizado e os R$ 2.400 seguintes são despesa financeira.","C","VUNESP","Exemplo do resumo."],
  ["Os elementos do ativo decorrentes de operações de longo prazo serão ajustados a valor presente, sendo os demais ajustados quando houver efeito relevante.","C","Lei 6.404, art. 183","Inciso VIII."],
  ["Os elementos do ativo decorrentes de operações de curto prazo serão sempre ajustados a valor presente.","E","CEBRASPE","Os de curto prazo, <b>apenas quando houver efeito relevante</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Ativo não circulante, realizável a longo prazo e investimentos",
      '<div class="box"><span class="bl">Os quatro subgrupos</span>'+
      '<p>Pelo <b>art. 179, incisos II a VI</b>, da Lei 6.404/76, o <b>ANC</b> compreende:</p>'+
      '<div class="chips"><span class="chip">Realizável a Longo Prazo</span><span class="chip">Investimentos</span><span class="chip">Imobilizado</span><span class="chip">Intangível</span></div></div>'+
      '<div class="box"><span class="bl">Realizável a Longo Prazo (RLP)</span>'+
      '<p><b>Primeira porta:</b> os direitos realizáveis <b>APÓS o término do exercício seguinte</b>.</p>'+
      '<p><b>Segunda porta:</b> os direitos derivados de <b>vendas, adiantamentos ou empréstimos</b> a <b>coligadas ou controladas</b> · <b>diretores</b> · <b>acionistas</b> · <b>participantes no lucro da Cia</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A OBS. que a banca explora no RLP</span>'+
      '<p>Só entram por essa segunda porta as <b>vendas, os adiantamentos e os empréstimos</b> — e <b>apenas</b> quando <b>não constituírem negócios usuais na exploração do objeto da companhia</b>.</p>'+
      '<p>Se for negócio usual da empresa, o direito segue a regra do <b>prazo</b>, não a das pessoas ligadas.</p></div>'+
      '<div class="box"><span class="bl">Investimentos</span>'+
      '<p><b>Participações permanentes em outras sociedades</b> — ex.: <b>coligadas</b> e <b>controladas</b>.</p>'+
      '<p><b>Direitos de qualquer natureza</b> não classificáveis no AC e que <b>não se destinem à manutenção da atividade</b> da companhia — ex.: <b>obras de arte</b>, <b>imóveis alugados</b>, <b>terrenos não utilizados</b>.</p></div>'+
      '<div class="box tip"><span class="bl">ATENÇÃO — o critério da intenção</span>'+
      '<p>Se o investimento for <b>TEMPORÁRIO</b>, ele <b>não</b> vai a “Investimentos”, e sim ao <b>Ativo Circulante</b> (curto prazo) ou ao <b>ANC Realizável a Longo Prazo</b>.</p>'+
      '<p class="mn"><em>permanente → Investimentos · temporário → AC ou RLP</em></p></div>'+
      '<div class="box tip"><span class="bl">A fronteira que decide tudo</span>'+
      '<p>Não pergunte “é físico?”. Pergunte <b>a que se destina</b>: bem corpóreo <b>destinado à manutenção das atividades</b> → <b>Imobilizado</b>; bem corpóreo que <b>não</b> se destina a isso → <b>Investimentos</b>.</p>'+
      '<p>Por isso <b>terreno não utilizado</b> é investimento, e <b>terreno usado pela Cia</b> é imobilizado.</p></div>')
  ],
  V2:[
    sl("Imobilizado e o custo do CPC 27",
      '<div class="box"><span class="bl">Imobilizado</span>'+
      '<p>Direitos que tenham por objeto <b>bens corpóreos destinados à manutenção das atividades</b> da companhia, ou exercidos com essa finalidade, <b>inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle</b> desses bens (ex.: <b>leasing</b>).</p>'+
      '<p>São contas com <b>existência física</b>, <b>utilizadas nas operações</b>: imóveis usados pela Cia · veículos · móveis e utensílios · máquinas e equipamentos · terrenos · instalações.</p></div>'+
      '<div class="box trap"><span class="bl">OBSERVAÇÕES — o bem alugado a outros</span>'+
      '<p>É <b>imobilizado</b> se o aluguel estiver <b>diretamente ligado à atividade operacional</b>.</p>'+
      '<p><b>Exemplo 01:</b> empresa de auditoria em <b>prédio próprio</b> que aluga as <b>vagas da garagem aos funcionários</b> → <b>imobilizado</b>.</p>'+
      '<p><b>Exemplo 02:</b> os <b>veículos de uma locadora de veículos</b> → <b>imobilizado</b>.</p>'+
      '<p><b>Mas:</b> <b>terreno alugado a terceiros com o objetivo de obter renda</b> → <b>Propriedade para Investimento</b> (ANC · Investimentos).</p></div>'+
      '<div class="box"><span class="bl">CPC 27 — reconhecimento</span>'+
      '<p><b>Item 7.</b> O custo é reconhecido como ativo <b>se, e apenas se</b>: (a) for <b>provável</b> que <b>futuros benefícios econômicos</b> fluirão para a entidade; <b>e</b> (b) o custo puder ser <b>mensurado confiavelmente</b>.</p>'+
      '<p><b>Item 8.</b> <b>Sobressalentes, peças de reposição, ferramentas e equipamentos de uso interno</b> são imobilizado quando a entidade espera <b>usá-los por mais de um período</b>.</p>'+
      '<p><b>Exemplo:</b> a ABC comprou <b>computadores</b> para usar <b>três anos</b> e, ao mesmo tempo, <b>peças de reposição</b> para a vida útil deles — <b>os dois</b> são imobilizado.</p></div>'+
      '<div class="box"><span class="bl">Mensuração no reconhecimento — o custo de aquisição</span>'+
      '<p><b>Preço de compra</b> + <b>tributos (exceto os recuperáveis)</b> + <b>custos diretamente atribuíveis</b> para colocar o ativo no local e em condições de funcionamento + <b>estimativa dos custos de remoção do item e de restauração do local</b> (ao final da vida útil).</p>'+
      '<p>Somado tudo, <b>DEDUZEM-SE</b>: <b>descontos comerciais (incondicionais)</b> e <b>abatimentos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Custos DIRETAMENTE ATRIBUÍVEIS</span>'+
      '<ul><li>Benefícios aos empregados decorrentes do imobilizado</li><li>Preparação do local</li><li>Frete e manuseio (por conta do comprador)</li><li>Instalação e montagem</li><li>Testes para verificar se o ativo funciona corretamente</li><li>Honorários profissionais</li></ul></div>'+
      '<div class="box trap"><span class="bl">Custos que NÃO são atribuíveis</span>'+
      '<ul><li>Abertura de nova instalação</li><li>Introdução de novo produto ou serviço</li><li>Propaganda e atividades promocionais</li><li>Transferência das atividades para novo local ou para nova categoria de clientes</li><li>Treinamento</li><li>Custos administrativos e outros custos indiretos</li></ul></div>')
  ],
  V3:[
    sl("Intangível, software no hardware, ciclo operacional e ativo qualificável",
      '<div class="box"><span class="bl">Intangível</span>'+
      '<p>Direitos que tenham por objeto <b>bens incorpóreos destinados à manutenção da companhia</b>, ou exercidos com essa finalidade, <b>inclusive o fundo de comércio adquirido</b>. São contas <b>sem existência física</b>, destinadas às operações.</p>'+
      '<p><b>Exemplos:</b> marcas · títulos de periódicos · softwares · licenças · franquias · direitos autorais · patentes · direitos de propriedade · receitas · fórmulas · fundo de comércio adquirido.</p>'+
      '<p><b>Fundo de comércio:</b> o <b>valor pago a mais</b> por adquirir empresa já “estabilizada”. Abrange bens <b>corpóreos e incorpóreos</b>; o que o caracteriza é a <b>funcionalidade do conjunto</b>.</p></div>'+
      '<div class="box trap"><span class="bl">OBSERVAÇÕES do intangível</span>'+
      '<p><b>Gerados internamente</b> — marcas, títulos de publicações, listas de clientes e itens similares <b>NÃO</b> são reconhecidos como intangíveis (<b>CPC 04, item 63</b>).</p>'+
      '<p><b>Combinação de negócios</b> — o custo é o <b>valor justo na data de aquisição</b> (<b>CPC 04, item 35</b>). Ex.: a <b>Cia. Gama</b> adquiriu o controle das <b>Linhas Aéreas Épsilon</b>, titular de <b>direitos de operação em aeroportos</b> do Sudeste e Centro-Oeste → intangível pelo <b>valor justo</b>.</p>'+
      '<p class="mn"><em>interno → CUSTO (item 66) · combinação de negócios → VALOR JUSTO (item 35)</em></p></div>'+
      '<div class="box trap"><span class="bl">Software dentro do hardware</span>'+
      '<p>A entidade avalia <b>qual elemento é mais significativo</b>.</p>'+
      '<div class="fn3"><span class="fn"><b>Hardware NÃO funciona sem o software</b><br>software = <b>IMOBILIZADO</b><br>ex.: sistema operacional Windows</span><span class="fn"><b>Hardware funciona sem o software</b><br>software = <b>INTANGÍVEL</b><br>ex.: pacote Office</span></div>'+
      '<p><b>Exemplo:</b> computador de <b>R$ 3.000</b> com software de segurança embutido de <b>R$ 500</b>, intrinsecamente relacionado a ele, vida de <b>3 anos</b>, à vista → <b>aumento de R$ 3.500 no ativo IMOBILIZADO</b>. “R$ 3.500 no intangível” é a <b>pegadinha</b>.</p></div>'+
      '<div class="box"><span class="bl">Classificação pelo ciclo operacional</span>'+
      '<p>Se o <b>ciclo operacional</b> tiver duração <b>maior que o exercício social</b>, a classificação em circulante ou longo prazo tem por base o <b>prazo desse ciclo</b> (art. 179, <b>parágrafo único</b>).</p>'+
      '<p><b>Ciclo de 3 anos:</b> AC = realizáveis em <b>até 3 anos</b> · ANC = realizáveis <b>após 3 anos</b>.</p>'+
      '<p><b>Ciclo operacional</b> é o prazo para <b>comprar, produzir, vender e receber</b>. Atacadista com <b>35 dias</b> de estoque e <b>27 dias</b> de recebimento: <b>62 dias</b>.</p></div>'+
      '<div class="box"><span class="bl">Ativo qualificável</span>'+
      '<p>Ativo que, <b>necessariamente</b>, demanda <b>período de tempo substancial</b> para ficar <b>pronto para uso ou venda</b> (<b>CPC 20, item 5</b>). Ex.: máquina construída com empréstimo de <b>R$ 100.000</b> por <b>4 anos</b>.</p>'+
      '<p><b>Item 8:</b> <b>capitalizar</b> os custos de empréstimos <b>diretamente atribuíveis</b> à aquisição, construção ou produção do qualificável; os <b>outros</b> vão a <b>despesa</b> no período em que incorridos.</p>'+
      '<p><b>Exemplo:</b> empréstimo de R$ 50.000 em 02/01/2023, juros de <b>R$ 200/mês</b>, construção de 03/01/2023 a 31/12/2023 → <b>R$ 2.400 ativados</b> no imobilizado; a partir de 01/01/2024, os outros <b>R$ 2.400</b> viram <b>despesa financeira</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Ativos de operações de longo prazo</span>'+
      '<p>Art. 183, <b>VIII</b>: os elementos do ativo decorrentes de <b>operações de longo prazo</b> serão <b>ajustados a valor presente</b>; os <b>demais</b>, <b>apenas quando houver efeito relevante</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o prazo do Realizável a Longo Prazo",
  before:"O RLP compreende os direitos realizáveis ",
  after:" o término do exercício seguinte.",
  options:["após","até","durante"], answer:0,
  why:"A troca de “após” por “até” é a alteração mais comum nessa assertiva."},

S2:{t:"multi", instr:"Marque as pessoas cujos direitos derivados de vendas, adiantamentos ou empréstimos vão ao RLP",
  options:["Sociedades coligadas ou controladas","Diretores","Acionistas",
           "Participantes no lucro da companhia",
           "Fornecedores habituais","Clientes de vendas usuais"],
  answers:[0,1,2,3], answer:[0,1,2,3],
  why:"E só quando esses direitos não constituírem negócios usuais na exploração do objeto da companhia."},

S3:{t:"match", instr:"Ligue cada subgrupo à sua definição",
  pairs:[["Realizável a Longo Prazo","Direitos realizáveis após o término do exercício seguinte"],
         ["Investimentos","Participações permanentes e bens que não se destinam à manutenção da atividade"],
         ["Imobilizado","Bens corpóreos destinados à manutenção das atividades"],
         ["Intangível","Bens incorpóreos destinados à manutenção da companhia"]],
  why:"Art. 179, incisos II a VI, da Lei 6.404/76."},

S4:{t:"mc", instr:"Onde se classifica o investimento TEMPORÁRIO?",
  options:["No ativo circulante, se de curto prazo, ou no ANC realizável a longo prazo",
           "Sempre no subgrupo investimentos do ANC",
           "Sempre no imobilizado, por ser aplicação de recursos",
           "No intangível, por não ter existência física"],
  answer:0,
  why:"O subgrupo Investimentos é para participações PERMANENTES."},

S5:{t:"sort", instr:"Investimentos ou imobilizado?",
  buckets:["Investimentos","Imobilizado"],
  items:[["Obras de arte",0],["Terreno não utilizado pela companhia",0],
         ["Imóvel alugado a terceiros para obter renda",0],
         ["Imóvel utilizado pela companhia",1],["Veículos usados nas operações",1],
         ["Máquinas e equipamentos da produção",1]],
  why:"O critério é a destinação: manutenção das atividades leva ao imobilizado."},

S6:{t:"mc", instr:"Por que um terreno não utilizado pela companhia NÃO é imobilizado, mesmo sendo bem corpóreo?",
  options:["Porque não se destina à manutenção da atividade da companhia",
           "Porque não tem existência física",
           "Porque terrenos nunca compõem o imobilizado",
           "Porque é sempre um investimento temporário"],
  answer:0,
  why:"Bem corpóreo sem destinação à atividade vai a Investimentos."},

S7:{t:"mc", instr:"Por qual valor se mensura o item do imobilizado no reconhecimento?",
  options:["Pelo custo de aquisição","Pelo valor justo na data de aquisição",
           "Pelo valor presente dos benefícios futuros","Pelo valor de reposição"],
  answer:0,
  why:"Valor justo na data de aquisição é a regra do intangível adquirido em combinação de negócios."},

S8:{t:"multi", instr:"Marque os custos DIRETAMENTE ATRIBUÍVEIS ao ativo imobilizado",
  options:["Custos de benefícios aos empregados decorrentes do imobilizado",
           "Custos de preparação do local",
           "Custos de frete e de manuseio por conta do comprador",
           "Custos de instalação e montagem",
           "Custos com testes de funcionamento",
           "Honorários profissionais",
           "Custos de treinamento","Custos com propaganda e atividades promocionais",
           "Custos administrativos e outros custos indiretos"],
  answers:[0,1,2,3,4,5], answer:[0,1,2,3,4,5],
  why:"Os três últimos estão na lista dos custos que NÃO são atribuíveis ao imobilizado."},

S9:{t:"sort", instr:"Imobilizado ou propriedade para investimento?",
  buckets:["Imobilizado","Propriedade para investimento"],
  items:[["Vagas da garagem do prédio próprio alugadas aos funcionários da empresa de auditoria",0],
         ["Veículos de uma empresa de locação de veículos",0],
         ["Terreno alugado a terceiros com o objetivo de obter renda",1]],
  why:"Aluguel ligado à atividade operacional é imobilizado; aluguel só para render é investimento."},

S10:{t:"gap", instr:"Complete a composição do custo do imobilizado",
  before:"Somam-se ao preço de compra os tributos, ",
  after:", os custos diretamente atribuíveis e a estimativa dos custos de remoção e restauração.",
  options:["exceto os recuperáveis","inclusive os recuperáveis","apenas os federais"], answer:0,
  why:"E, do total, deduzem-se os descontos comerciais incondicionais e os abatimentos."},

S11:{t:"wordbank", instr:"Monte a primeira condição do CPC 27, item 7",
  target:["for","provável","que","futuros","benefícios","econômicos","fluirão","para","entidade"],
  extra:["valor","justo","relevante"],
  why:"A segunda condição é que o custo do item possa ser mensurado confiavelmente — as duas são cumulativas."},

S12:{t:"match", instr:"Correlacione a regra ao seu conteúdo",
  pairs:[["CPC 27, item 7","Benefícios futuros prováveis e custo mensurável confiavelmente"],
         ["CPC 27, item 8","Sobressalentes e peças de reposição usados por mais de um período"],
         ["Mensuração no reconhecimento","Custo de aquisição"],
         ["Deduzem-se do custo","Descontos comerciais incondicionais e abatimentos"]],
  why:"O item 7 é o reconhecimento; a mensuração vem depois."},

S13:{t:"sort", instr:"Aplique o teste do software dentro do hardware",
  buckets:["Imobilizado","Intangível"],
  items:[["Software de máquina-ferramenta que não funciona sem ele",0],
         ["Sistema operacional Windows do computador",0],
         ["Pacote Office instalado no computador",1],
         ["Software que não é parte integrante do hardware",1]],
  why:"Avalia-se qual elemento é mais significativo: se o hardware não funciona sem o software, ele é parte integrante."},

S14:{t:"mc", instr:"Computador de R$ 3.000 com software de segurança embutido de R$ 500, intrinsecamente relacionado a ele, vida de três anos, compra à vista. Qual a contrapartida da diminuição do caixa?",
  options:["Aumento de R$ 3.500 no ativo imobilizado","Aumento de R$ 3.500 no ativo intangível",
           "Aumento de R$ 3.000 no imobilizado e de R$ 500 no intangível",
           "Aumento de R$ 3.000 no imobilizado e despesa de R$ 500"],
  answer:0,
  why:"O software está intrinsecamente relacionado ao equipamento: tudo vai ao imobilizado."},

S15:{t:"match", instr:"Ligue cada situação à mensuração do intangível",
  pairs:[["Intangível gerado internamente","Custo (CPC 04, item 66)"],
         ["Intangível adquirido em combinação de negócios","Valor justo na data de aquisição (CPC 04, item 35)"],
         ["Marcas e listas de clientes geradas internamente","Não são reconhecidas como intangível (CPC 04, item 63)"]],
  why:"Foi o caso da Cia. Gama com os direitos de operação em aeroportos da Épsilon: valor justo."},

S16:{t:"multi", instr:"Marque os exemplos de ativo intangível do resumo",
  options:["Marcas","Títulos de periódicos","Softwares","Licenças","Franquias",
           "Patentes","Fórmulas","Fundo de comércio adquirido",
           "Veículos","Instalações","Obras de arte"],
  answers:[0,1,2,3,4,5,6,7], answer:[0,1,2,3,4,5,6,7],
  why:"Veículos e instalações são imobilizado; obras de arte, investimentos."},

S17:{t:"mc", instr:"Atacadista com 35 dias médios de estoque e prazo médio de recebimento de 27 dias. Qual o ciclo operacional?",
  options:["62 dias","35 dias","27 dias","8 dias"],
  answer:0,
  why:"Ciclo operacional é o prazo para comprar, produzir, vender e receber: 35 + 27."},

S18:{t:"wordbank", instr:"Monte a regra do CPC 20, item 8",
  target:["capitalizar","os","custos","de","empréstimos","atribuíveis","ao","ativo","qualificável"],
  extra:["despesa","financeira","irrelevante"],
  why:"Os outros custos de empréstimos são reconhecidos como despesa no período em que são incorridos."},

S19:{t:"gap", instr:"Complete o art. 183, VIII, da Lei 6.404/76",
  before:"Serão sempre ajustados a valor presente os elementos do ativo decorrentes de operações de ",
  after:".",
  options:["longo prazo","curto prazo","qualquer prazo"], answer:0,
  why:"Os de curto prazo só são ajustados quando houver efeito relevante."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 05","https://www.tecconcursos.com.br/s/Q2ZYuV","Q2ZYuV"],
  ["Caderno FCC — Contabilidade Geral 05","https://www.tecconcursos.com.br/s/Q2ZYue","Q2ZYue"],
  ["Caderno FGV — Contabilidade Geral 05","https://www.tecconcursos.com.br/s/Q2BcDU","Q2BcDU"],
  ["Caderno VUNESP — Contabilidade Geral 05","https://www.tecconcursos.com.br/s/Q2ZYui","Q2ZYui"]
];
var TECNOTA = "Módulo de classificação, e é aí que a banca ganha. Quatro fronteiras respondem pela maioria dos erros: permanente × temporário (Investimentos × AC/RLP), destinação à atividade (Imobilizado × Propriedade para Investimento), o teste do software dentro do hardware (não funciona sem ele = imobilizado) e o que entra ou não no custo do imobilizado. Some a isso o ativo qualificável, em que os juros do período de construção são ativados e os posteriores viram despesa financeira.";

var UNITS = [
  {n:1, title:"Ativo não circulante, RLP e investimentos", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Os quatro subgrupos, o RLP e o critério da intenção", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · subgrupos e realizável a longo prazo", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · investimentos e investimento temporário", xp:25, data:["S4","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · a fronteira da destinação",             xp:25, data:["S5","S6","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · ANC, RLP e investimentos",            xp:15, data:[0,1,2,3,4,5,6,7,8]}
  ]},
  {n:2, title:"Imobilizado e o custo do CPC 27", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Bens corpóreos, as observações e a conta do custo", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · conceito e observações do imobilizado", xp:25, data:["S9","T14","T15","T16","T17","T18","T19","T20","T21"]},
    {id:"K8", type:"drill",  title:"Praticar · reconhecimento (CPC 27, itens 7 e 8)",  xp:25, data:["S11","S12","T22","T23","T24","T25"]},
    {id:"K9", type:"drill",  title:"Praticar · o que entra e o que sai do custo",      xp:25, data:["S7","S8","S10","T26","T27","T28","T29","T30","T31"]},
    {id:"K10",type:"flash",  title:"Flashcards · imobilizado e custo",                 xp:15, data:[9,10,11,12,13,14,15,16,17,18,19,20,21,22]}
  ]},
  {n:3, title:"Intangível, ciclo operacional e ativo qualificável", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Intangível, software no hardware e qualificável",  xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · intangível e fundo de comércio",        xp:25, data:["S15","S16","T32","T33","T34","T35","T36","T37","T38"]},
    {id:"K13",type:"drill",  title:"Praticar · software dentro do hardware",           xp:25, data:["S13","S14","T39","T40","T41","T42","T43"]},
    {id:"K14",type:"drill",  title:"Praticar · ciclo operacional, qualificável e AVP", xp:25, data:["S17","S18","S19","T44","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · intangível, ciclo e qualificável",    xp:15, data:[23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 05 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo. É o esquema de abertura do resumo: <b>“nos termos do art. 179 da lei nº 6.404/76, incisos II a VI, o Ativo Não Circulante compreende: (1) ativo realizável a longo prazo (RLP); (2) Investimentos; (3) Imobilizado; e (4) Intangível”</b>.</p><p>Guarde a ordem do esquema — ela é a ordem em que o resumo estuda cada subgrupo.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo Não Circulante</i></p>",
1:"<p>Errado por <b>supressão</b>. O ANC do resumo tem <b>quatro</b> subgrupos, não dois: <b>Realizável a Longo Prazo</b>, <b>Investimentos</b>, <b>Imobilizado</b> e <b>Intangível</b>.</p><p>O esquema do resumo desenha os quatro dentro da chave “NÃO-CIRCULANTE”, com base no art. 179, incisos II a VI.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo Não Circulante</i></p>",
2:"<p>Certo, é a primeira parte da definição do resumo: o RLP <b>“compreende os direitos realizáveis APÓS o término do exercício seguinte”</b>.</p><p>Repare no contraste com o módulo anterior: no <b>circulante</b> estão os realizáveis <b>no curso</b> do exercício seguinte; passado esse marco, o direito cai no <b>RLP</b>.</p><p class='fb-fonte'>Resumo 05 · <i>ANC Realizável a Longo Prazo (RLP)</i></p>",
3:"<p>Errado por <b>uma palavra</b>. O resumo diz <b>“após o término do exercício seguinte”</b>, e a assertiva trocou por <b>“até”</b>, o que descreveria justamente o <b>ativo circulante</b>.</p><p>É a troca mais barata que a banca faz nesse dispositivo: mude a preposição e o subgrupo inteiro muda.</p><p class='fb-fonte'>Resumo 05 · <i>ANC Realizável a Longo Prazo (RLP)</i></p>",
4:"<p>Certo, é a segunda parte da definição, na literalidade do resumo: os direitos derivados de <b>“vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas, diretores, acionistas ou participantes no lucro da companhia, que não constituírem negócios usuais na exploração do objeto da companhia”</b>.</p><p>São <b>quatro</b> grupos de pessoas no esquema: coligadas ou controladas, diretores, acionistas e participantes no lucro da Cia.</p><p class='fb-fonte'>Resumo 05 · <i>ANC Realizável a Longo Prazo (RLP)</i></p>",
5:"<p>Errado — a assertiva <b>inverteu a condição final</b>. O texto do resumo só manda ao RLP esses direitos <b>“que NÃO constituírem negócios usuais na exploração do objeto da companhia”</b>.</p><p>Se a venda à controlada é o negócio usual da empresa, ela não é levada ao RLP por essa regra: aí volta a valer o critério do <b>prazo</b>.</p><p class='fb-fonte'>Resumo 05 · <i>ANC Realizável a Longo Prazo (RLP)</i></p>",
6:"<p>Errado por <b>extensão indevida</b>. O esquema do resumo traz a <b>OBS.</b>: <b>“apenas as vendas, adiantamentos ou empréstimos que não constituírem negócios usuais da companhia”</b>.</p><p>Não é qualquer direito contra diretores e acionistas — são <b>três</b> operações nominadas: <b>vendas</b>, <b>adiantamentos</b> e <b>empréstimos</b>.</p><p class='fb-fonte'>Resumo 05 · <i>ANC Realizável a Longo Prazo (RLP) — OBS.</i></p>",
7:"<p>Certo, é a definição literal do resumo: as contas de Investimentos <b>“compreendem as participações permanentes em outras sociedades e os direitos de qualquer natureza, não classificáveis no ativo circulante, e que não se destinem à manutenção da atividade da companhia ou da empresa”</b>.</p><p>Duas colunas no esquema: <b>participações permanentes</b> (coligadas, controladas) e <b>bens que não se destinam à manutenção da atividade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Investimentos</i></p>",
8:"<p>Certo. São os exemplos que o resumo dá na coluna <b>“participações permanentes em outras sociedades”</b>: <b>coligadas</b> e <b>controladas</b>.</p><p>A palavra que sustenta a classificação é <b>permanentes</b> — é ela que a banca apaga para transformar a assertiva em erro.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Investimentos</i></p>",
9:"<p>Certo. São os três exemplos do resumo na coluna dos <b>“bens que não se destinem à manutenção da atividade da companhia ou da empresa”</b>: <b>obras de arte</b>, <b>imóveis alugados</b> e <b>terrenos não utilizados</b>.</p><p>Nenhum deles serve à operação: por isso saem do imobilizado e entram em Investimentos.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Investimentos</i></p>",
10:"<p>Errado. É exatamente o caso do quadro <b>ATENÇÃO</b> do resumo: <b>“se o investimento for temporário, ele não será classificado no subgrupo ‘Investimentos’”</b>.</p><p>O destino é <b>Ativo Circulante</b> (se de curto prazo) ou <b>ANC Realizável a Longo Prazo</b>. O subgrupo Investimentos é reservado às participações <b>permanentes</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Investimentos — ATENÇÃO</i></p>",
11:"<p>Certo, é o quadro <b>ATENÇÃO</b> do resumo na íntegra: investimento temporário vai ao <b>“Ativo Circulante (se for de curto prazo); ou Ativo Não Circulante Realizável a Longo prazo”</b>.</p><p>O critério aqui é a <b>intenção</b> da entidade, não a natureza do bem: permanente → Investimentos; temporário → AC ou RLP.</p><p class='fb-fonte'>Resumo 05 · <i>Investimentos — ATENÇÃO</i></p>",
12:"<p>Errado — a assertiva <b>inverteu a definição</b>. O resumo exige o oposto: são direitos <b>“que NÃO se destinem à manutenção da atividade da companhia ou da empresa”</b>.</p><p>O que se destina à manutenção das atividades e é corpóreo vai ao <b>imobilizado</b>; incorpóreo, ao <b>intangível</b>.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Investimentos</i></p>",
13:"<p>Errado. Ser <b>bem corpóreo</b> é só metade do conceito de imobilizado: o resumo exige bens corpóreos <b>“destinados à manutenção das atividades da companhia”</b>.</p><p><b>Terreno não utilizado</b> é justamente um dos três exemplos que o resumo põe em <b>Investimentos</b>, ao lado das obras de arte e dos imóveis alugados.</p><p class='fb-fonte'>Resumo 05 · <i>Investimentos × Imobilizado</i></p>",
14:"<p>Certo, é a literalidade do resumo: no imobilizado ficam <b>“os direitos que tenham por objeto bens corpóreos destinados à manutenção das atividades da companhia ou da empresa ou exercidos com essa finalidade”</b>.</p><p>O resumo completa: são as contas do ativo que <b>têm existência física</b> e <b>são utilizadas nas operações</b> da entidade.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Imobilizado</i></p>",
15:"<p>Certo, é a parte final do dispositivo transcrita pelo resumo: <b>“inclusive os decorrentes de operações que transfiram à companhia os benefícios, riscos e controle desses bens (exemplo: leasing)”</b>.</p><p>Guarde a tríade <b>benefícios, riscos e controle</b> — é ela que traz o bem arrendado para o imobilizado, mesmo sem propriedade jurídica.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Imobilizado</i></p>",
16:"<p>Errado — a assertiva trocou o imobilizado pelo <b>intangível</b>. O resumo é expresso: no imobilizado estão as contas que <b>“têm existência física e que são utilizadas nas operações da entidade”</b>.</p><p>O contraste, mais adiante no material: no <b>intangível</b> ficam as contas que <b>“não têm existência física, mas que destinadas às operações da entidade”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Imobilizado × Intangível</i></p>",
17:"<p>Certo. É a lista de exemplos do resumo: <b>“imóveis utilizados pela Cia; Veículos; Móveis e Utensílios; Máquinas e Equipamentos; Terrenos; Instalações”</b>.</p><p>Note o adjetivo em “imóveis <b>utilizados</b> pela Cia”: é a utilização que separa esse imóvel do <b>imóvel alugado</b>, que o resumo classifica em Investimentos.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Imobilizado</i></p>",
18:"<p>Certo, é a primeira linha das <b>OBSERVAÇÕES</b> do resumo: <b>“o bem corpóreo que é mantido para aluguel a outros será considerado ativo imobilizado se estiver diretamente ligado à atividade operacional da entidade”</b>.</p><p>Alugar, por si, não define nada. O que define é o <b>vínculo com a atividade operacional</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Imobilizado — OBSERVAÇÕES</i></p>",
19:"<p>Errado. É o <b>Exemplo 01</b> do resumo e a resposta dele é outra: <b>“uma empresa de auditoria exerce suas atividades em um prédio próprio e aluga as vagas da garagem a seus funcionários. Nesse caso, as vagas da garagem devem ser classificadas como ativo imobilizado”</b>.</p><p>O aluguel é acessório ao prédio usado na operação — está ligado à atividade operacional. Propriedade para investimento seria o caso do <b>terreno alugado a terceiros para obter renda</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Imobilizado — OBSERVAÇÕES, Exemplo 01</i></p>",
20:"<p>Certo, é o <b>Exemplo 02</b> do resumo: <b>“os veículos de empresas de locação de veículos devem ser classificados como ativo imobilizado”</b>.</p><p>Aqui o aluguel <b>é</b> a atividade operacional da entidade, então os bens alugados servem à manutenção dessa atividade.</p><p class='fb-fonte'>Resumo 05 · <i>Imobilizado — OBSERVAÇÕES, Exemplo 02</i></p>",
21:"<p>Certo, e é o contraponto que o resumo faz aos dois exemplos anteriores: <b>“se a empresa possui um terreno que é alugado a terceiros e o objetivo é obter renda, este bem deve ser classificado como Propriedade para Investimento (Ativo Não Circulante - Investimento)”</b>.</p><p>Compare as três situações: <b>garagem alugada aos funcionários</b> e <b>veículos da locadora</b> → imobilizado; <b>terreno alugado só para render</b> → investimento.</p><p class='fb-fonte'>Resumo 05 · <i>Imobilizado — OBSERVAÇÕES</i></p>",
22:"<p>Certo, é o <b>CPC 27, item 7</b>, como o resumo transcreve: o custo é reconhecido como ativo <b>“se, e apenas se: (a) for provável que futuros benefícios econômicos associados ao item fluirão para a entidade; e (b) o custo do item puder ser mensurado confiavelmente”</b>.</p><p>Duas condições ligadas por <b>“e”</b> — precisam ocorrer juntas.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — Ativo Imobilizado, item 7</i></p>",
23:"<p>Errado. O item 7 usa a fórmula <b>“se, e apenas se”</b> e liga as alíneas (a) e (b) pela conjunção <b>“e”</b>: são condições <b>cumulativas</b>.</p><p>Mensurar o custo confiavelmente, sozinho, não reconhece nada: falta a probabilidade de que os <b>futuros benefícios econômicos</b> associados ao item <b>fluirão para a entidade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — Ativo Imobilizado, item 7</i></p>",
24:"<p>Certo, é o <b>CPC 27, item 8</b>, na letra do resumo: <b>“sobressalentes, peças de reposição, ferramentas e equipamentos de uso interno são classificados como ativo imobilizado quando a entidade espera usá-los por mais de um período”</b>.</p><p>A chave é o <b>prazo de uso esperado</b>, não a natureza acessória da peça.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — Ativo Imobilizado, item 8</i></p>",
25:"<p>Errado. No exemplo do resumo, a sociedade <b>ABC</b> comprou computadores para usar por <b>três anos</b> e, ao mesmo tempo, peças de reposição para o período de vida útil deles. A conclusão dele é clara: <b>“tanto os computadores quanto as peças de reposição serão classificados como Ativo Imobilizado no Balanço Patrimonial”</b>.</p><p>As peças não vão ao estoque porque a entidade espera <b>usá-las por mais de um período</b> — é o item 8 aplicado.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27, item 8 — exemplo da ABC</i></p>",
26:"<p>Errado no <b>critério de mensuração</b>. O resumo abre a seção dizendo que o item do imobilizado classificado para reconhecimento como ativo <b>“deve ser mensurado pelo seu custo de aquisição”</b>.</p><p><b>Valor justo na data de aquisição</b> é a regra do <b>intangível adquirido em combinação de negócios</b> (CPC 04, item 35) — a banca troca uma pela outra.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — mensuração no reconhecimento</i></p>",
27:"<p>Errado por <b>uma palavra entre parênteses</b>. No esquema do custo, o resumo escreve <b>“Tributos (exceto os recuperáveis)”</b>.</p><p>Tributo recuperável não é custo porque será compensado depois; só o <b>não recuperável</b> integra o valor do bem.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — mensuração no reconhecimento</i></p>",
28:"<p>Certo. É o quarto item do esquema do custo no resumo: <b>“estimativa dos custos de remoção do item e de restauração do local (ao final da vida útil)”</b>.</p><p>Mesmo sendo gasto futuro, entra <b>hoje</b> no custo do ativo, junto com preço de compra, tributos não recuperáveis e custos diretamente atribuíveis.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — mensuração no reconhecimento</i></p>",
29:"<p>Errado no <b>sinal</b>. O resumo fecha o esquema assim: <b>“tudo isso é somado para depois deduzirmos os: descontos comerciais (incondicionais); e abatimentos”</b>.</p><p>Soma-se o que põe o ativo em condições de funcionamento e <b>subtrai-se</b> o que reduz o preço pago.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 27 — mensuração no reconhecimento</i></p>",
30:"<p>Certo. Todos estão na lista de <b>“exemplos de custos diretamente atribuíveis ao ativo imobilizado”</b> do resumo: <b>frete e manuseio (por conta do comprador)</b>, <b>instalação e montagem</b>, <b>testes para verificar se o ativo está funcionando corretamente</b> e <b>honorários profissionais</b>.</p><p>A lista tem ainda os <b>benefícios aos empregados</b> decorrentes do imobilizado e os <b>custos de preparação do local</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Custos diretamente atribuíveis ao imobilizado</i></p>",
31:"<p>Errado — os três estão na lista oposta. O resumo relaciona entre os <b>custos que NÃO são atribuíveis ao ativo imobilizado</b>: <b>custos de abertura de nova instalação</b>, <b>custos com propaganda e atividades promocionais</b> e <b>custos de treinamento</b>.</p><p>Completam essa lista: introdução de novo produto ou serviço, transferência das atividades para novo local ou nova categoria de clientes e custos administrativos e outros indiretos.</p><p class='fb-fonte'>Resumo 05 · <i>Custos que não são atribuíveis ao imobilizado</i></p>",
32:"<p>Certo, é a literalidade do resumo: no intangível ficam <b>“os direitos que tenham por objeto bens incorpóreos destinados à manutenção da companhia ou exercidos com essa finalidade, inclusive o fundo de comércio adquirido”</b>.</p><p>Note o adjetivo <b>adquirido</b> — o fundo de comércio gerado internamente não entra.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Intangível</i></p>",
33:"<p>Certo. Todos constam da lista de exemplos do resumo: <b>“marcas; títulos de periódicos; Softwares; Licenças; Franquias; Direitos autorais; Patentes; Direitos de Propriedade; Receitas; Fórmulas; Fundo de comércio adquirido”</b>.</p><p>São contas <b>sem existência física</b>, mas destinadas às operações da entidade.</p><p class='fb-fonte'>Resumo 05 · <i>ANC — Intangível</i></p>",
34:"<p>Errado por <b>restrição indevida</b>. O resumo diz que o fundo de comércio <b>“compreende todo o conjunto de bens corpóreos (físicos), como máquinas e instalações, e incorpóreos (clientela, faturamento, marca, banco de dados da empresa)”</b>.</p><p>E arremata com o que realmente importa: <b>“o que caracteriza o fundo de comércio é a funcionalidade do conjunto dos bens”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>O que é fundo de comércio?</i></p>",
35:"<p>Errado — o resumo diz o <b>contrário</b>, na OBSERVAÇÃO 01: <b>“se forem gerados internamente pela empresa, as marcas, os títulos de publicações, as listas de clientes e outros itens similares, NÃO devem ser reconhecidos como ativos intangíveis (CPC 04, item 63)”</b>.</p><p>Marca <b>adquirida</b> entra no intangível; marca <b>criada em casa</b>, não.</p><p class='fb-fonte'>Resumo 05 · <i>Intangível — OBSERVAÇÕES, item 63</i></p>",
36:"<p>Certo, é a OBSERVAÇÃO 02 do resumo: <b>“se um ativo intangível for adquirido em uma combinação de negócios, o seu custo deve ser o valor justo na data de aquisição (CPC 04, item 35)”</b>.</p><p>Contraste com o imobilizado, que é mensurado pelo <b>custo de aquisição</b>. Aqui a palavra-chave é <b>valor justo</b>, e a data é a da <b>aquisição</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Intangível — OBSERVAÇÕES, item 35</i></p>",
37:"<p>Errado no <b>critério</b>. É o exemplo do resumo: a <b>Cia. Gama</b> adquiriu o controle das <b>Linhas Aéreas Épsilon S.A.</b>, titular de direitos de operação em aeroportos das regiões <b>Sudeste e Centro-Oeste</b>, e <b>“deverá reconhecer esses direitos como ativo intangível, mensurado pelo valor justo na data de aquisição”</b>.</p><p>Custo histórico da investida não serve: houve <b>combinação de negócios</b>, então vale o item 35 do CPC 04.</p><p class='fb-fonte'>Resumo 05 · <i>Intangível — exemplo da Cia. Gama</i></p>",
38:"<p>Certo. É a primeira linha do quadro <b>MENSURAÇÃO DE INTANGÍVEL</b> do resumo: <b>“gerado internamente: Custo (CPC 04, item 66)”</b>.</p><p>O quadro tem duas linhas e a banca mistura as duas: <b>gerado internamente → custo</b> · <b>adquirido em combinação de negócios → valor justo</b> (item 35).</p><p class='fb-fonte'>Resumo 05 · <i>Mensuração de intangível</i></p>",
39:"<p>Certo, é a regra de abertura da seção: <b>“para saber se um ativo que contém elementos intangíveis e tangíveis deve ser tratado como ativo imobilizado ou como ativo intangível, a entidade avalia qual elemento é mais significativo”</b>.</p><p>Na prática, o resumo traduz isso em uma pergunta única: o <b>hardware funciona sem o software</b>?</p><p class='fb-fonte'>Resumo 05 · <i>Software dentro do hardware</i></p>",
40:"<p>Errado — é o <b>lado esquerdo</b> do quadro do resumo. O exemplo dele: <b>“um software de uma máquina-ferramenta controlada por computador que não funciona sem esse software específico é parte integrante do referido equipamento, devendo ser tratado como ativo imobilizado”</b>.</p><p>Regra do quadro: <b>hardware NÃO funciona sem o software → software = IMOBILIZADO</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Software dentro do hardware</i></p>",
41:"<p>Certo. O resumo estende a regra da máquina-ferramenta: <b>“o mesmo se aplica ao sistema operacional de um computador”</b>, e o exemplo do quadro é o <b>Windows</b>.</p><p>Sem sistema operacional o computador não funciona — logo o software é <b>parte integrante</b> do hardware e vai ao <b>imobilizado</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Software dentro do hardware</i></p>",
42:"<p>Certo, é o <b>lado direito</b> do quadro: <b>“quando o software não é parte integrante do respectivo hardware, ele deve ser tratado como ativo intangível”</b>, e o exemplo dado é o <b>pacote Office</b>.</p><p>Guarde o par do resumo: <b>Windows → imobilizado</b> · <b>Office → intangível</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Software dentro do hardware</i></p>",
43:"<p>Errado — a assertiva marcou justamente a alternativa que o resumo identifica como <b>pegadinha</b>. No exemplo dele, com computador de <b>R$ 3.000</b> e software de segurança embutido de <b>R$ 500</b> intrinsecamente relacionado a ele, o gabarito é <b>“aumento de R$ 3.500 no ativo imobilizado”</b>.</p><p>O software é parte integrante do equipamento, então os <b>R$ 3.500</b> inteiros vão ao imobilizado — não há parcela em intangível.</p><p class='fb-fonte'>Resumo 05 · <i>Software dentro do hardware — exemplo dos R$ 3.500</i></p>",
44:"<p>Certo, é a literalidade do <b>art. 179, parágrafo único</b>, como o resumo transcreve: <b>“na companhia em que o ciclo operacional da empresa tiver duração maior que o exercício social, a classificação no circulante ou longo prazo terá por base o prazo desse ciclo”</b>.</p><p>A regra só se aplica quando o ciclo é <b>maior</b> que o exercício social; se for menor, o marco continua sendo o exercício.</p><p class='fb-fonte'>Resumo 05 · <i>Classificação de acordo com o ciclo operacional</i></p>",
45:"<p>Certo, é o exemplo do resumo com os mesmos números: <b>“se a empresa possui um ciclo operacional de 3 anos, serão classificadas no ativo circulante (curto prazo) os direitos realizáveis em até 3 anos e serão classificadas no ativo não circulante (longo prazo) os direitos realizáveis após 3 anos”</b>.</p><p>Com ciclo longo, o <b>circulante</b> incha: um direito com vencimento em 30 meses fica no AC.</p><p class='fb-fonte'>Resumo 05 · <i>Ciclo operacional — exemplo dos 3 anos</i></p>",
46:"<p>Certo, é a conta do resumo: <b>“Ciclo Operacional = 35 + 27 → Ciclo Operacional = 62 dias”</b>.</p><p>A definição dele: é o prazo que a empresa leva para <b>comprar matéria-prima, produzir, vender e receber</b>; na empresa comercial, o prazo médio entre <b>aquisição de mercadorias, venda e recebimento</b> dos clientes.</p><p class='fb-fonte'>Resumo 05 · <i>O que é ciclo operacional? — exemplo da atacadista</i></p>",
47:"<p>Certo pela definição do <b>CPC 20, item 5</b>, transcrita no resumo: <b>“ativo qualificável é um ativo que, necessariamente, demanda um período de tempo substancial para ficar pronto para seu uso (ou venda)”</b>.</p><p>O exemplo do material: empréstimo bancário de <b>R$ 100.000</b>, prazo de <b>4 anos</b>, para <b>construir uma máquina</b> de produção — essa máquina é ativo qualificável.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo qualificável</i></p>",
48:"<p>Errado — a assertiva trocou os dois destinos do <b>CPC 20, item 8</b>. O texto do resumo: <b>“a entidade deve capitalizar os custos de empréstimos que são diretamente atribuíveis à aquisição, construção ou produção de ativo qualificável como parte do custo do ativo. A entidade deve reconhecer os OUTROS custos de empréstimos como despesa no período em que são incorridos”</b>.</p><p>Os atribuíveis ao qualificável <b>viram custo do ativo</b>; despesa é o destino dos <b>outros</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo qualificável — CPC 20, item 8</i></p>",
49:"<p>Certo, com os números do exemplo do resumo: empréstimo de <b>R$ 50.000</b> em <b>02/01/2023</b>, juros mensais de <b>R$ 200</b>, construção de <b>03/01/2023</b> a <b>31/12/2023</b>.</p><p>O material conclui: no período de construção <b>“os custos do empréstimo deverão ser ativados, ou seja, a apropriação dos juros nesse período (R$ 2.400) será contabilizada no Ativo Imobilizado (Qualificável)”</b>; e <b>“a partir de 01/01/2024, o restante dos juros (R$ 2.400) será contabilizado como despesa financeira”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo qualificável — exemplo dos juros</i></p>",
50:"<p>Certo, é a literalidade do <b>art. 183, inciso VIII</b>, no resumo: <b>“os elementos do ativo decorrentes de operações de longo prazo serão ajustados a valor presente, sendo os demais ajustados quando houver efeito relevante”</b>.</p><p>O esquema separa: <b>longo prazo → sempre</b> · <b>curto prazo → apenas quando houver efeito relevante</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Elementos do ativo decorrentes de operações de longo prazo</i></p>",
51:"<p>Errado. A assertiva pegou a linha do <b>curto prazo</b> e apagou a condição. O esquema do resumo é claro: os ativos decorrentes de operações de <b>curto prazo</b> são ajustados a valor presente <b>“apenas quando houver efeito relevante”</b>.</p><p>O “sempre” vale para o <b>longo prazo</b> — art. 183, inciso VIII, da Lei 6.404/76.</p><p class='fb-fonte'>Resumo 05 · <i>Elementos do ativo decorrentes de operações de longo prazo</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"Ativo não circulante", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
