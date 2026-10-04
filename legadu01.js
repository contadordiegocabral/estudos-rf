/* Legislação Aduaneira — Módulo 01: Controles, SISCOMEX, jurisdição e controle de veículos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.legadu01 = (function(){
"use strict";

var CARDS = [
  ["Quais são os três controles do comércio exterior e quem exerce cada um?","<b>Administrativo</b> → <b>SECEX</b> · <b>Aduaneiro</b> → <b>RFB</b> · <b>Cambial</b> → <b>BACEN</b>."],
  ["Quando ocorre o controle administrativo?","Em regra, é <b>PRÉVIO ao embarque</b> da mercadoria. Representa uma <b>autorização governamental</b> para importar ou exportar."],
  ["Como se processa o controle administrativo?","Nas <b>importações</b>, pelas <b>Licenças de Importação (LI)</b>, migrando para o módulo <b>LPCO</b>. Nas <b>exportações</b>, pelo <b>LPCO</b> — os antigos <b>Registros de Exportação (RE)</b> acabaram com o desligamento do NOVOEX, em <b>setembro de 2018</b>."],
  ["Qual o objetivo do controle aduaneiro?","<b>Fiscalizar a entrada, saída e movimentação de bens e veículos</b> no território aduaneiro, tutelando bens como a <b>segurança nacional</b> e a <b>saúde de pessoas e animais</b>."],
  ["O controle aduaneiro é fiscal ou extrafiscal?","<b>Eminentemente EXTRAFISCAL</b> — a arrecadação tributária é objetivo apenas <b>complementar, secundário</b>."],
  ["O controle aduaneiro pode ocorrer depois da entrada da mercadoria?","<b>Sim</b> — é o controle <b>a posteriori</b>, as chamadas operações de <b>zona secundária</b>. Mas o foco continua sendo os <b>desdobramentos da operação transfronteiriça</b>."],
  ["Como se processa o controle aduaneiro?","Nas <b>importações</b>, pela <b>Declaração de Importação (DI)</b>, em substituição pela <b>DUIMP</b>. Nas <b>exportações</b>, pela <b>DU-E</b>, que substituiu os REs e as DEs."],
  ["O que o controle cambial verifica e quem o exerce?","Os <b>pagamentos internacionais</b> e a <b>circulação de divisas</b>. Compete ao <b>BACEN</b>. O documento que formaliza a compra e venda de moeda estrangeira é o <b>contrato de câmbio</b>."],
  ["Conceito de SISCOMEX (art. 2º do Decreto nº 660/92)","O <b>instrumento administrativo</b> que <b>integra as atividades de registro, acompanhamento e controle</b> das operações de comércio exterior, mediante <b>fluxo único, computadorizado, de informações</b>."],
  ["Em que conceito se baseia o Portal Único de Comércio Exterior?","No <b>Guichê Único</b> de comércio exterior, recomendado pela <b>OMA</b> e pelo <b>Banco Mundial</b>."],
  ["Qual acordo internacional impulsionou o Portal Único?","O <b>Acordo de Facilitação de Comércio</b> da <b>OMC</b>, celebrado no final de <b>2013</b>. No Brasil, o comando político veio pelo <b>Decreto nº 8.229/2014</b>."],
  ["Quais os resultados já visíveis do Portal Único?","<b>a)</b> <b>DU-E</b> — obrigatória desde setembro de 2018, substituiu DEs e REs; <b>b)</b> <b>DUIMP</b> — ainda projeto-piloto e facultativa, deverá substituir DIs e LIs; <b>c)</b> <b>anexação eletrônica</b> de documentos digitalizados."],
  ["Quem são os órgãos GESTORES do SISCOMEX?","A <b>SECEX</b> (controle administrativo) e a <b>RFB</b> (controle aduaneiro). O <b>BACEN deixou de ser gestor no início de 2014</b>, embora siga responsável pelo controle cambial."],
  ["Quem são os órgãos ANUENTES?","Os que <b>deliberam sobre as operações na fase do controle administrativo</b>: ANVISA, MAPA, DECEX, MCT, INMETRO, DPF, DFPC, ANP, ANCINE, IBAMA, SUFRAMA, DNPM, ECT, CNEN."],
  ["Quais as três modalidades de habilitação no SISCOMEX (IN RFB nº 1.984/2020)?","<b>Expressa</b>, <b>Limitada</b> e <b>Ilimitada</b>."],
  ["Quem se habilita na modalidade EXPRESSA?","<b>a)</b> pessoa jurídica constituída como <b>S.A. de capital aberto</b>, com ações em bolsa ou balcão, e suas <b>subsidiárias integrais</b>; <b>b)</b> <b>empresa pública ou sociedade de economia mista</b>. São presumidamente idôneas e <b>não se sujeitam a limite</b>."],
  ["Quais os limites da habilitação LIMITADA?","Em cada período de <b>seis meses consecutivos</b>: <b>US$ 50.000</b> se a capacidade financeira estimada for igual ou inferior a esse valor; <b>US$ 150.000</b> se for superior a 50 mil e igual ou inferior a 150 mil."],
  ["Quando cabe a habilitação ILIMITADA?","Quando a capacidade financeira estimada for <b>acima de US$ 150.000</b>. Também <b>não se sujeita a limite</b> de operações."],
  ["Por qual valor se apuram os limites da habilitação?","Pelo <b>VALOR ADUANEIRO</b> das mercadorias."],
  ["Quais operações NÃO se sujeitam aos limites?","<b>Exportação</b>; <b>internação de mercadorias da ZFM</b>; <b>importação por conta e ordem</b> (quanto à <b>pessoa jurídica importadora</b>); <b>importação sem cobertura cambial</b>."],
  ["Quais operações SE SUJEITAM aos limites?","<b>Importação por conta e ordem</b> quanto ao <b>adquirente</b>; e <b>importação por encomenda</b>, tanto quanto à <b>importadora</b> quanto ao <b>encomendante predeterminado</b>."],
  ["O que é o REI e como se dá a inscrição?","<b>Registro de Exportadores e Importadores</b>. A inscrição é <b>AUTOMÁTICA</b>, no ato da <b>primeira operação</b> de exportação ou importação (Portaria SECEX nº 23/2011)."],
  ["Qual a exceção à obrigatoriedade de inscrição no REI?","As <b>exportações via remessa postal</b>, com ou sem expectativa de recebimento, <b>exceto donativos</b>, por pessoa física ou jurídica, <b>até US$ 50.000</b> — salvo produto proibido/suspenso, margem não sacada de câmbio, regimes aduaneiros especiais e atípicos, e operações sujeitas a registro de crédito."],
  ["A inscrição no REI pode ser negada?","<b>NÃO.</b> Pode ser <b>suspensa ou cancelada</b> em caso de punição em <b>decisão administrativa final</b> — mas nunca <b>negada</b>."],

  ["Qual o princípio fundamental do direito aduaneiro?","A <b>universalidade do controle aduaneiro</b>, que alcança <b>todos os bens, veículos e pessoas</b>."],
  ["Qual a exceção à universalidade do controle aduaneiro?","As <b>malas diplomáticas e consulares</b>, protegidas pelas <b>Convenções de Viena de 1961 e 1963</b>."],
  ["Quais os institutos específicos do direito aduaneiro?","As <b>medidas de defesa comercial</b> (direitos <b>antidumping</b> e <b>compensatórios</b>) e os <b>regimes aduaneiros especiais e aplicados em áreas especiais</b>."],
  ["O que diz o art. 98 do CTN, invocado na autonomia do direito aduaneiro?","Os <b>tratados e convenções internacionais revogam ou modificam a legislação tributária interna</b> e <b>serão observados pela que lhes sobrevenha</b> — é a <b>prevalência dos tratados</b>."],
  ["Quem legisla sobre comércio exterior?","<b>Privativamente a UNIÃO</b> — art. 22, VIII, da CF/88. Daí a competência privativa para legislar sobre direito aduaneiro."],
  ["O que é o Regulamento Aduaneiro?","O <b>Decreto nº 6.759/2009</b> — norma <b>INFRALEGAL</b>, <b>secundária</b>, que <b>reproduz e consolida</b> dispositivos de leis esparsas. A legislação aduaneira <b>não se esgota nele</b>."],
  ["O que é jurisdição aduaneira?","O <b>poder da autoridade aduaneira</b> de submeter à sua <b>fiscalização e controle todas as operações de comércio exterior</b>, ainda que <b>após a entrada dos bens no país</b> — reflexo do <b>art. 237 da CF/88</b>."],
  ["Qual a extensão do território aduaneiro?","<b>Todo o território nacional</b> (art. 3º do Decreto nº 6.759/2009). Divide-se em <b>zona primária</b> e <b>zona secundária</b>."],
  ["O que compõe a ZONA PRIMÁRIA?","A <b>área terrestre ou aquática, contínua ou descontínua, nos portos alfandegados</b>; a <b>área terrestre nos aeroportos alfandegados</b>; e a <b>área terrestre dos pontos de fronteira alfandegados</b> — todas <b>demarcadas pela autoridade aduaneira local</b>."],
  ["As Zonas de Processamento de Exportação são zona primária ou secundária?","<b>ZONA PRIMÁRIA</b>, para fins de controle aduaneiro."],
  ["O que é a ZONA SECUNDÁRIA?","O <b>restante do território nacional</b>, <b>inclusive o espaço aéreo e as águas territoriais</b>."],
  ["A jurisdição aduaneira alcança as Áreas de Controle Integrado?","<b>Sim</b> — art. 3º, §5º. São criadas em <b>regiões limítrofes dos países do MERCOSUL</b> com o Brasil, para <b>facilitação de comércio</b>. Representam uma <b>extensão do território aduaneiro</b>."],
  ["Enclave × exclave aduaneiro","<b>Enclave:</b> área em <b>território de outro Estado</b> onde se permite aplicar a <b>legislação nacional</b>. <b>Exclave:</b> área em <b>território nacional</b> onde se permite aplicar a <b>legislação estrangeira</b>."],
  ["O que são zonas de vigilância aduaneira?","Áreas demarcadas por <b>ato do Ministro da Fazenda</b>, na <b>orla marítima</b> ou na <b>faixa de fronteira</b>, em que a permanência ou circulação de <b>mercadorias, veículos, pessoas e animais</b> fica sujeita a <b>exigências fiscais, proibições e restrições</b>."],
  ["O ato que demarca a zona de vigilância aduaneira pode ser como?","<b>Geral</b> (toda a orla ou faixa) ou <b>específico</b> (segmentos); pode <b>estabelecer medidas para determinado local</b>; e pode ter <b>vigência temporária</b>."],
  ["A zona de vigilância aduaneira compreende o quê, na linha de demarcação?","A <b>totalidade do MUNICÍPIO</b> atravessado pela linha, <b>ainda que parte dele fique fora</b> da área demarcada. (Cuidado: não é o Estado.)"],
  ["O que é o alfandegamento?","O <b>ato declaratório</b> da autoridade aduaneira que autoriza que em determinada área ocorram, <b>sob controle aduaneiro</b>, a entrada e saída de <b>mercadorias, pessoas e veículos</b>."],
  ["Onde pode ocorrer a entrada ou saída de mercadorias (art. 8º)?","<b>Somente</b> em <b>portos, aeroportos e pontos de fronteira alfandegados</b>. Exceções: <b>linhas de transmissão ou dutos</b> ligados ao exterior; e <b>outros casos em ato normativo da RFB</b>."],
  ["Quais os quatro requisitos do alfandegamento (art. 13)?","<b>I</b> condições de <b>instalação do órgão de fiscalização</b> e infraestrutura de <b>segurança fiscal</b>; <b>II</b> <b>regularidade fiscal</b> do interessado; <b>III</b> <b>disponibilidade de recursos humanos e materiais</b>; <b>IV</b> o interessado assumir a condição de <b>fiel depositário</b>."],
  ["O que são portos secos (art. 11)?","<b>Recintos alfandegados de USO PÚBLICO</b>, instalados <b>fora da zona primária</b> de portos e aeroportos, onde se executam <b>movimentação, armazenagem e despacho aduaneiro de mercadorias e de bagagem</b>, sob controle aduaneiro."],
  ["Portos secos podem ficar na zona primária?","<b>NÃO</b> — não podem ser instalados na zona primária de portos e aeroportos alfandegados."],
  ["O que pode ser alfandegado em zona primária, além dos recintos comuns?","Recintos destinados à instalação de <b>lojas francas</b> (os “free shops”)."],

  ["O que é a administração aduaneira?","As atividades de <b>fiscalização e controle sobre o comércio exterior</b>, <b>essenciais à defesa dos interesses fazendários nacionais</b>, realizadas em <b>todo o território aduaneiro</b> — art. 237 da CF/88."],
  ["Quem supervisiona e executa a fiscalização dos tributos do comércio exterior?","O <b>Auditor-Fiscal da Receita Federal do Brasil</b>."],
  ["Quem está sujeito à fiscalização aduaneira?","<b>Pessoas físicas e jurídicas</b>, <b>contribuintes ou não</b>, <b>mesmo quando imunes ou isentas</b>."],
  ["Como pode ser a fiscalização aduaneira (art. 16)?","<b>Ininterrupta</b>, <b>em horários determinados</b>, ou <b>eventual</b>, nos portos, aeroportos, pontos de fronteira e recintos alfandegados."],
  ["O que é o princípio da supremacia da autoridade aduaneira (art. 17)?","A autoridade aduaneira tem <b>PRECEDÊNCIA sobre as demais autoridades</b> que atuem em portos, aeroportos, pontos de fronteira e recintos alfandegados — e também nas <b>zonas de vigilância aduaneira</b>."],
  ["O que a precedência da autoridade aduaneira implica?","<b>a)</b> obrigação das demais autoridades de prestar <b>auxílio imediato</b> quando requisitado, disponibilizando pessoas, equipamentos e instalações; <b>b)</b> competência para <b>disciplinar a entrada, permanência, movimentação e saída</b> de pessoas, veículos, unidades de carga e mercadorias."],
  ["Quais as prerrogativas de acesso da autoridade aduaneira?","Exigir <b>mercadorias e quaisquer documentos</b>; acessar <b>depósitos e dependências</b> de empresas fiscalizadas, <b>veículos, cofres e outros móveis</b>, a <b>qualquer hora do dia ou da noite</b> (à noite, se em funcionamento)."],
  ["Por quanto tempo guardar os documentos das operações?","Pelo <b>prazo decadencial</b> da legislação tributária aplicável. A obrigação alcança <b>importador, exportador, adquirente por conta e ordem, despachante, transportador, agente de carga, depositário</b> e demais intervenientes."],
  ["O que diz o art. 195 do CTN?","<b>Não se aplicam</b> disposições legais <b>excludentes ou limitativas do direito de examinar</b> mercadorias, livros, arquivos, documentos, papéis e efeitos comerciais ou fiscais — nem da obrigação de <b>exibi-los</b>."],
  ["A RFB pode requisitar informações protegidas por sigilo bancário?","<b>Sim</b> — por <b>ato próprio, sem ordem judicial</b>. O <b>STF, em 2016</b>, declarou constitucional a <b>LC nº 105/2001</b>."],
  ["Quais as duas condições para quebrar o sigilo bancário (art. 6º da LC 105/2001)?","<b>I —</b> haver <b>processo administrativo instaurado ou procedimento fiscal em curso</b>; <b>II —</b> os exames serem considerados <b>indispensáveis</b> pela autoridade administrativa competente."],
  ["Qual o efeito do termo de início da fiscalização?","Demarca a data a partir da qual fica <b>excluída a denúncia espontânea</b> (art. 138 do CTN). Sempre que possível, o termo é lavrado em <b>um dos livros fiscais</b> exibidos."],
  ["O que é a denúncia espontânea?","Uma <b>“confissão” do sujeito passivo</b> que, <b>antes de qualquer procedimento de fiscalização</b>, recolhe os tributos e juros devidos — <b>excluindo a responsabilidade</b>."],

  ["Onde pode entrar ou sair um veículo procedente do exterior?","<b>Somente</b> em <b>porto, aeroporto ou ponto de fronteira alfandegado</b>. <b>Excecionalmente</b>, o <b>titular da unidade aduaneira jurisdicionante</b> pode autorizar em local <b>não alfandegado</b>, desde que justificado."],
  ["Qual a extensão do controle aduaneiro de veículos?","<b>Desde o ingresso no território aduaneiro até a saída</b>, alcançando também as <b>mercadorias e outros bens a bordo</b>, <b>inclusive a bagagem de viajantes</b>. Pode haver <b>acompanhamento fiscal</b> do veículo."],
  ["O que formaliza o ingresso do veículo no país?","O <b>TERMO DE ENTRADA</b>, emitido pela RFB após as informações do transportador e a efetiva entrada."],
  ["Quando podem ocorrer carga, descarga ou transbordo?","Somente <b>depois de prestadas as informações pelo transportador</b>."],
  ["Quem é o agente de carga?","Qualquer pessoa que, <b>em nome do importador ou do exportador</b>, <b>contrate o transporte</b> de mercadoria, <b>consolide ou desconsolide cargas</b> e preste <b>serviços conexos</b>. Ele e o <b>operador portuário</b> também prestam informações à RFB."],
  ["A autoridade aduaneira pode revistar qualquer veículo?","<b>Sim</b>, inclusive <b>antes da prestação das informações</b> — mas a busca deve ser <b>precedida de comunicação verbal ou escrita ao responsável</b> pelo veículo."],
  ["O que é proibido ao condutor de veículo do exterior (art. 27)?","<b>a)</b> estacionar ou carregar/descarregar, inclusive <b>transbordo</b>, <b>fora de local habilitado</b>; <b>b)</b> <b>trafegar em situação ilegal</b> quanto às normas de transporte internacional; <b>c)</b> <b>desviar da rota</b> estabelecida sem motivo justificado."],
  ["O que é transbordo?","A <b>transferência direta</b> de pessoa ou mercadoria <b>de um veículo para outro</b>."],
  ["O que é o conhecimento de carga?","O documento que <b>materializa o contrato de frete</b> e serve de <b>prova de posse ou de propriedade</b> da mercadoria. É <b>emitido pelo transportador em nome do importador</b>. Há <b>um por contrato de frete</b>."],
  ["O que é o manifesto de carga?","O documento que <b>consolida vários conhecimentos de carga</b>. Há <b>um por trajeto</b>. <b>Não especifica as mercadorias</b> — apenas os <b>volumes</b>."],
  ["O que contém o manifesto de carga (art. 44)?","<b>I</b> identificação e nacionalidade do veículo · <b>II</b> local de embarque e de destino · <b>III</b> número de cada conhecimento · <b>IV</b> quantidade, espécie, marcas, número e peso dos volumes · <b>V</b> natureza das mercadorias · <b>VI</b> consignatário de cada partida · <b>VII</b> data do encerramento · <b>VIII</b> nome e assinatura do responsável pelo veículo."],
  ["O que significa não apresentar o manifesto de carga?","É considerado <b>declaração negativa de carga</b> — a RFB entende que <b>não há carga</b> a receber naquele local."],
  ["Divergência entre manifesto e conhecimento de carga — o que prevalece?","Prevalece o <b>CONHECIMENTO de carga</b>. A <b>correção do manifesto</b> pode ser feita <b>de ofício</b> pela autoridade aduaneira."],
  ["Como se corrige o conhecimento de carga?","Por <b>carta de correção</b> dirigida pelo <b>emitente</b> à autoridade aduaneira do <b>local de descarga</b>, acompanhada do conhecimento e apresentada <b>antes do início do despacho aduaneiro</b>."],
  ["O que é a conferência final de manifesto (art. 658)?","O confronto do <b>manifesto</b> com os <b>registros de descarga ou armazenamento</b>, para constatar <b>extravio ou acréscimo</b> de volume ou de mercadoria. Apurado o extravio ou acréscimo, exigem-se do <b>transportador</b> os tributos e multas."],
  ["Quais os sistemas de controle de carga?","<b>MANTRA</b> para cargas <b>aéreas</b> (Sistema Integrado de Gerência do Manifesto, do Trânsito e do Armazenamento) e <b>SISCOMEX Carga</b> para <b>portos</b>."]
];

var QS = [
  ["No Brasil, o controle administrativo, o aduaneiro e o cambial competem, respectivamente, à SECEX, à RFB e ao BACEN.","C","ESAF","Três controles, três órgãos."],
  ["O controle administrativo é, em regra, posterior ao embarque da mercadoria.","E","FGV","É <b>prévio</b> ao embarque — funciona como autorização para importar ou exportar."],
  ["Nas exportações, o controle administrativo é atualmente processado por meio do módulo LPCO.","C","FGV","Os Registros de Exportação acabaram com o desligamento do NOVOEX, em setembro de 2018."],
  ["O controle aduaneiro é eminentemente fiscal, tendo a arrecadação tributária como objetivo principal.","E","ESAF","É eminentemente <b>extrafiscal</b>; a arrecadação é objetivo secundário."],
  ["O controle aduaneiro também pode ser exercido a posteriori, nas chamadas operações de zona secundária.","C","FGV","Mas o foco permanece nos desdobramentos da operação transfronteiriça."],
  ["Nas importações, o controle aduaneiro é processado por meio da Declaração de Importação, em substituição pela DUIMP.","C","ESAF","A DUIMP deverá substituir a DI e a LI."],
  ["A DU-E substituiu as Declarações de Exportação e os Registros de Exportação.","C","FGV","Obrigatória desde setembro de 2018."],
  ["O contrato de câmbio é o documento que formaliza a compra e venda de moeda estrangeira.","C","ESAF","Instrumento do controle cambial."],
  ["O SISCOMEX é o instrumento administrativo que integra as atividades de registro, acompanhamento e controle das operações de comércio exterior, mediante fluxo único, computadorizado, de informações.","C","FGV","Art. 2º do Decreto nº 660/92, literal."],
  ["O Portal Único de Comércio Exterior baseia-se no conceito de Guichê Único, recomendado pela OMA e pelo Banco Mundial.","C","ESAF","Criado no âmbito do SISCOMEX pelo Decreto nº 8.229/2014."],
  ["O Acordo de Facilitação de Comércio da OMC, de 2013, obriga os membros a criar interface única entre o governo e os operadores de comércio exterior.","C","FGV","Origem internacional do Portal Único."],
  ["A DUIMP já é de utilização obrigatória em todas as importações brasileiras.","E","ESAF","Foi implementada como <b>projeto-piloto</b> e ainda é <b>facultativa</b>."],
  ["Desde o início de 2014, os órgãos gestores do SISCOMEX são a SECEX e a RFB.","C","FGV","O BACEN deixou de ser gestor, embora siga no controle cambial."],
  ["O BACEN continua sendo órgão gestor do SISCOMEX, por ser responsável pelo controle cambial.","E","ESAF","Deixou de ser gestor no início de 2014."],
  ["Os órgãos anuentes deliberam sobre as operações de comércio exterior na fase do controle administrativo.","C","FGV","ANVISA, MAPA, INMETRO, IBAMA, entre outros."],
  ["A IN RFB nº 1.984/2020 prevê três modalidades de habilitação no SISCOMEX: expressa, limitada e ilimitada.","C","ESAF","Modalidades vigentes."],
  ["A habilitação expressa aplica-se à empresa pública e à sociedade de economia mista.","C","FGV","Entidades presumidamente idôneas."],
  ["A habilitação expressa sujeita o importador a limite semestral de operações.","E","ESAF","A expressa e a ilimitada <b>não</b> se sujeitam a limite."],
  ["Na habilitação limitada, os limites são de US$ 50.000 ou US$ 150.000 em cada período de seis meses consecutivos.","C","FGV","Duas faixas conforme a capacidade financeira estimada."],
  ["Para apuração dos limites da habilitação, as importações são consideradas pelo valor da fatura comercial.","E","ESAF","São consideradas pelo <b>valor aduaneiro</b>."],
  ["Não se sujeitam aos limites da habilitação as exportações, a internação de mercadorias da ZFM e a importação sem cobertura cambial.","C","FGV","Rol do §2º do art. 17."],
  ["A importação por encomenda sujeita-se aos limites tanto em relação à importadora quanto ao encomendante predeterminado.","C","ESAF","Ao contrário da conta e ordem quanto à importadora."],
  ["A inscrição no Registro de Exportadores e Importadores é automática, no ato da primeira operação.","C","FGV","Portaria SECEX nº 23/2011."],
  ["A inscrição no REI pode ser negada pela autoridade competente.","E","ESAF","Pode ser <b>suspensa ou cancelada</b> por decisão administrativa final, mas nunca <b>negada</b>."],
  ["São dispensadas de inscrição no REI as exportações via remessa postal até US$ 50.000, exceto donativos.","C","FGV","Com as ressalvas do art. 9º da Portaria SECEX nº 23/2011."],
  ["O princípio da universalidade do controle aduaneiro alcança todos os bens, veículos e pessoas.","C","ESAF","Princípio fundamental do direito aduaneiro."],
  ["As malas diplomáticas e consulares são exceção à universalidade do controle aduaneiro.","C","FGV","Convenções de Viena de 1961 e 1963."],
  ["Os direitos antidumping e os direitos compensatórios são institutos específicos do direito aduaneiro.","C","ESAF","Medidas de defesa comercial."],
  ["Compete concorrentemente à União, aos Estados e ao Distrito Federal legislar sobre comércio exterior.","E","FGV","Compete <b>privativamente à União</b> — art. 22, VIII, da CF/88."],
  ["O Regulamento Aduaneiro, Decreto nº 6.759/2009, é norma primária que esgota a legislação aduaneira brasileira.","E","ESAF","É norma <b>infralegal e secundária</b>, e a legislação <b>não se esgota</b> nele."],
  ["O território aduaneiro compreende todo o território nacional.","C","ESAF","Questão ATRFB/2012 — art. 2º do Regulamento Aduaneiro."],
  ["A zona primária compreende a área terrestre ou aquática, contínua ou descontínua, nos portos alfandegados.","C","FGV","Demarcada pela autoridade aduaneira local."],
  ["Para efeito de controle aduaneiro, as Zonas de Processamento de Exportação constituem zona secundária.","E","ESAF","Questão AFRFB/2012 — são consideradas <b>zona primária</b>."],
  ["A zona secundária compreende o restante do território nacional, inclusive o espaço aéreo e as águas territoriais.","C","FGV","Complemento da zona primária."],
  ["A jurisdição dos serviços aduaneiros estende-se às Áreas de Controle Integrado criadas em regiões limítrofes dos países integrantes do MERCOSUL com o Brasil.","C","ESAF","Questão AFRFB/2012 — art. 3º, §5º."],
  ["Exclave aduaneiro é a área em território nacional na qual é permitida a aplicação da legislação aduaneira estrangeira.","C","FGV","O enclave é o oposto."],
  ["Poderão ser demarcadas, na orla marítima e na faixa de fronteira, zonas de vigilância aduaneira.","C","ESAF","Questão AFRFB/2012 — art. 4º do Regulamento Aduaneiro."],
  ["Compreende-se na zona de vigilância aduaneira a totalidade do Estado atravessado pela linha de demarcação, ainda que parte dele fique fora da área demarcada.","E","ESAF","Questão ATRFB/2012 — é a totalidade do <b>Município</b>."],
  ["O ato que demarca a zona de vigilância aduaneira pode ter vigência temporária.","C","FGV","Art. 4º, §1º, III."],
  ["Com exceção das mercadorias conduzidas por linhas de transmissão ou por dutos ligados ao exterior, somente nos portos, aeroportos e pontos de fronteira alfandegados poderá efetuar-se a entrada ou a saída de mercadorias.","C","ESAF","Questão ATRFB/2012 — art. 8º, com a ressalva dos atos normativos da RFB."],
  ["Entre os requisitos do alfandegamento está o interessado assumir a condição de fiel depositário da mercadoria sob sua guarda.","C","FGV","Art. 13, IV."],
  ["Portos secos são recintos alfandegados de uso público nos quais são executadas operações de movimentação, armazenagem e despacho aduaneiro de mercadorias e de bagagem, sob controle aduaneiro.","C","ESAF","Questão ATRFB/2012 — art. 11."],
  ["Os portos secos não poderão ser instalados na zona primária de portos e aeroportos alfandegados.","C","ESAF","Questão AFRFB/2012 — art. 11, §1º."],
  ["As lojas francas podem ser instaladas em recintos alfandegados de zona primária.","C","FGV","São os free shops."],
  ["Estão sujeitas à fiscalização aduaneira apenas as pessoas jurídicas contribuintes.","E","ESAF","Alcança pessoas físicas e jurídicas, contribuintes ou não, mesmo imunes ou isentas."],
  ["A fiscalização aduaneira poderá ser ininterrupta, em horários determinados, ou eventual, nos portos, aeroportos, pontos de fronteira e recintos alfandegados.","C","ESAF","Questão ATRFB/2012 — art. 16."],
  ["A autoridade aduaneira tem precedência sobre as demais autoridades que exerçam atribuições nas áreas de portos, aeroportos, pontos de fronteira e recintos alfandegados.","C","FGV","Princípio da supremacia da autoridade aduaneira — art. 17."],
  ["A precedência da autoridade aduaneira não se aplica nas zonas de vigilância aduaneira.","E","ESAF","Aplica-se também a elas."],
  ["A autoridade aduaneira pode acessar depósitos, veículos e cofres a qualquer hora do dia ou da noite, se os estabelecimentos estiverem funcionando.","C","FGV","Prerrogativa de fiscalização."],
  ["Segundo o STF, a Receita Federal só pode requisitar informações protegidas por sigilo bancário mediante prévia ordem judicial.","E","FGV","Em 2016 o STF declarou constitucional a LC nº 105/2001, dispensando ordem judicial."],
  ["A requisição de informações bancárias exige processo administrativo instaurado ou procedimento fiscal em curso e que os exames sejam indispensáveis.","C","ESAF","Duas condições do art. 6º da LC nº 105/2001."],
  ["A lavratura do termo de início da fiscalização exclui, em regra, a possibilidade de denúncia espontânea.","C","FGV","Art. 138 do CTN."],
  ["A entrada ou a saída de veículos procedentes do exterior ou a ele destinados não poderá ocorrer em porto, aeroporto ou ponto de fronteira não alfandegado.","E","ESAF","Questão ATRFB/2012 — o titular da unidade aduaneira jurisdicionante pode autorizar, em casos justificados."],
  ["O termo de entrada formaliza o ingresso do veículo no país.","C","FGV","Emitido pela RFB após as informações do transportador."],
  ["O agente de carga e o operador portuário devem prestar informações sobre as operações que executem e as respectivas cargas.","C","ESAF","Questão ATRFB/2012 — art. 31, §2º."],
  ["O conhecimento de carga original, ou documento de efeito equivalente, constitui prova de posse ou de propriedade da mercadoria.","C","ESAF","Questão ATRFB/2012 — art. 554."],
  ["O manifesto de carga especifica as mercadorias importadas, e não apenas os volumes.","E","FGV","Quem especifica as mercadorias é o <b>conhecimento de carga</b>."],
  ["No caso de divergência entre o manifesto de carga e o conhecimento de carga, prevalecerá o conhecimento de carga, podendo a correção do manifesto ser feita de ofício.","C","ESAF","Questão ATRFB/2012 — art. 47."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Os três controles e o SISCOMEX",
      '<div class="box"><span class="bl">Três controles, três órgãos</span>'+
      '<p class="mn"><em>Administrativo → <b>SECEX</b> · Aduaneiro → <b>RFB</b> · Cambial → <b>BACEN</b></em></p>'+
      '<p><b>Administrativo:</b> em regra <b>PRÉVIO ao embarque</b> — é a autorização para importar ou exportar. Importações por <b>LI</b> (migrando para <b>LPCO</b>); exportações por <b>LPCO</b>.</p>'+
      '<p><b>Aduaneiro:</b> fiscaliza <b>entrada, saída e movimentação</b> de bens e veículos. É <b>eminentemente EXTRAFISCAL</b> — arrecadar é objetivo secundário. Pode ser <b>a posteriori</b> (zona secundária). Importações por <b>DI</b> (→ DUIMP); exportações por <b>DU-E</b>.</p>'+
      '<p><b>Cambial:</b> pagamentos internacionais e circulação de divisas; documento é o <b>contrato de câmbio</b>.</p></div>'+
      '<div class="box"><span class="bl">SISCOMEX (Decreto nº 660/92, art. 2º)</span>'+
      '<p>Instrumento administrativo que <b>integra registro, acompanhamento e controle</b> das operações de comércio exterior, mediante <b>fluxo único, computadorizado, de informações</b>.</p>'+
      '<p><b>Gestores:</b> <b>SECEX</b> e <b>RFB</b> — o <b>BACEN deixou de ser gestor em 2014</b>, embora siga no controle cambial.<br>'+
      '<b>Anuentes:</b> deliberam na fase do <b>controle administrativo</b> — ANVISA, MAPA, DECEX, INMETRO, IBAMA, ANP, SUFRAMA e outros.</p></div>'+
      '<div class="box tip"><span class="bl">Portal Único</span>'+
      '<p>Conceito de <b>Guichê Único</b> (OMA e Banco Mundial), impulsionado pelo <b>Acordo de Facilitação de Comércio da OMC (2013)</b> e criado pelo <b>Decreto nº 8.229/2014</b>. Resultados: <b>DU-E</b> (obrigatória desde set/2018), <b>DUIMP</b> (piloto, <b>facultativa</b>) e <b>anexação eletrônica</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Habilitação no SISCOMEX (IN RFB nº 1.984/2020)</span>'+
      '<ul><li><b>Expressa</b> — S.A. de capital aberto e subsidiárias integrais; empresa pública e sociedade de economia mista. <b>Sem limite.</b></li>'+
      '<li><b>Limitada</b> — <b>US$ 50.000</b> ou <b>US$ 150.000</b> por <b>seis meses consecutivos</b>, conforme a capacidade financeira estimada.</li>'+
      '<li><b>Ilimitada</b> — acima de US$ 150.000. <b>Sem limite.</b></li></ul>'+
      '<p>Limites apurados pelo <b>VALOR ADUANEIRO</b>. Fora dos limites: exportação, internação da ZFM, conta e ordem (quanto à importadora) e importação <b>sem cobertura cambial</b>.</p></div>'+
      '<div class="box"><span class="bl">REI</span>'+
      '<p>Inscrição <b>AUTOMÁTICA</b> na <b>primeira operação</b>. Pode ser <b>suspensa ou cancelada</b> por decisão administrativa final — <b>nunca negada</b>. Exceção à obrigatoriedade: <b>remessa postal até US$ 50.000</b>, exceto donativos.</p></div>')
  ],
  V2:[
    sl("Legislação e jurisdição aduaneira",
      '<div class="box"><span class="bl">Autonomia do direito aduaneiro</span>'+
      '<p><b>Princípio fundamental:</b> <b>universalidade do controle aduaneiro</b> — alcança <b>todos os bens, veículos e pessoas</b>. <b>Exceção:</b> <b>malas diplomáticas e consulares</b> (Convenções de Viena de <b>1961 e 1963</b>).</p>'+
      '<p><b>Institutos específicos:</b> medidas de <b>defesa comercial</b> (antidumping e compensatórios) e <b>regimes aduaneiros especiais e em áreas especiais</b>.</p>'+
      '<p><b>Prevalência dos tratados</b> — art. 98 do CTN. E <b>compete PRIVATIVAMENTE à União</b> legislar sobre comércio exterior (art. 22, VIII, da CF).</p></div>'+
      '<div class="box trap"><span class="bl">Regulamento Aduaneiro</span>'+
      '<p><b>Decreto nº 6.759/2009</b> — norma <b>INFRALEGAL</b> e <b>SECUNDÁRIA</b>, que consolida leis esparsas. A legislação aduaneira <b>não se esgota nele</b>.</p></div>'+
      '<div class="box"><span class="bl">Território aduaneiro</span>'+
      '<p>A jurisdição se estende por <b>todo o território aduaneiro</b>, que <b>compreende todo o território nacional</b>. Divide-se em:</p>'+
      '<ul><li><b>ZONA PRIMÁRIA</b> — área terrestre <b>ou aquática</b>, contínua ou descontínua, nos <b>portos</b> alfandegados; área terrestre nos <b>aeroportos</b> alfandegados; área terrestre dos <b>pontos de fronteira</b> alfandegados. As <b>ZPE</b> também contam como zona primária.</li>'+
      '<li><b>ZONA SECUNDÁRIA</b> — o <b>restante do território nacional</b>, inclusive <b>espaço aéreo e águas territoriais</b>.</li></ul>'+
      '<p>A jurisdição alcança ainda as <b>Áreas de Controle Integrado</b> do MERCOSUL — extensão do território aduaneiro. <b>Enclave</b>: nossa lei em território alheio. <b>Exclave</b>: lei alheia em nosso território.</p></div>'+
      '<div class="box trap"><span class="bl">Zonas de vigilância aduaneira (art. 4º)</span>'+
      '<p>Demarcadas por ato do <b>Ministro da Fazenda</b>, na <b>orla marítima</b> ou na <b>faixa de fronteira</b>. O ato pode ser <b>geral ou específico</b> e ter <b>vigência temporária</b>.</p>'+
      '<p>Compreende a <b>totalidade do MUNICÍPIO</b> atravessado pela linha de demarcação — a banca troca por “Estado”.</p></div>'+
      '<div class="box tip"><span class="bl">Alfandegamento</span>'+
      '<p><b>Só</b> em portos, aeroportos e pontos de fronteira alfandegados entram e saem mercadorias (art. 8º). <b>Exceções:</b> <b>linhas de transmissão ou dutos</b>; e outros casos em <b>ato normativo da RFB</b>.</p>'+
      '<p><b>Requisitos (art. 13):</b> instalação do órgão de fiscalização e infraestrutura de segurança fiscal · <b>regularidade fiscal</b> · recursos humanos e materiais · <b>fiel depositário</b>.</p>'+
      '<p><b>Portos secos:</b> recintos de <b>uso público FORA da zona primária</b>. <b>Lojas francas</b>: em zona primária.</p></div>')
  ],
  V3:[
    sl("Administração aduaneira",
      '<div class="box"><span class="bl">O que é</span>'+
      '<p>Fiscalização e controle sobre o comércio exterior, <b>essenciais à defesa dos interesses fazendários nacionais</b> (art. 237 da CF), em <b>todo o território aduaneiro</b>. A fiscalização dos tributos é supervisionada e executada por <b>Auditor-Fiscal da RFB</b>.</p>'+
      '<p>Sujeitam-se <b>pessoas físicas e jurídicas</b>, <b>contribuintes ou não</b>, <b>mesmo imunes ou isentas</b>. A fiscalização pode ser <b>ininterrupta</b>, <b>em horários determinados</b> ou <b>eventual</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Supremacia da autoridade aduaneira (art. 17)</span>'+
      '<p>Tem <b>PRECEDÊNCIA</b> sobre as demais autoridades em portos, aeroportos, pontos de fronteira e recintos alfandegados — e <b>também nas zonas de vigilância aduaneira</b>. Implica:</p>'+
      '<ul><li>dever das demais autoridades de prestar <b>auxílio imediato</b> quando requisitado;</li>'+
      '<li>competência para <b>disciplinar entrada, permanência, movimentação e saída</b> de pessoas, veículos, cargas e mercadorias.</li></ul></div>'+
      '<div class="box"><span class="bl">Prerrogativas</span>'+
      '<p>Exigir mercadorias e <b>quaisquer documentos</b>; acessar depósitos, dependências, <b>veículos e cofres a qualquer hora do dia ou da noite</b>; <b>requisitar força pública</b> (pedido com efeito vinculante); e exigir informações de tabeliães, <b>instituições financeiras</b>, administradoras de bens, corretores, leiloeiros, inventariantes, síndicos e liquidatários — <b>salvo</b> fatos sob <b>segredo profissional</b>.</p>'+
      '<p>Os intervenientes guardam os documentos pelo <b>prazo decadencial</b>. O <b>art. 195 do CTN</b> afasta qualquer norma que limite o direito de examinar livros e documentos.</p></div>'+
      '<div class="box tip"><span class="bl">Sigilo bancário e denúncia espontânea</span>'+
      '<p>O <b>STF, em 2016</b>, validou a <b>LC nº 105/2001</b>: a RFB requisita dados bancários <b>por ato próprio, sem ordem judicial</b>, desde que haja <b>processo administrativo instaurado ou procedimento fiscal em curso</b> e os exames sejam <b>indispensáveis</b>.</p>'+
      '<p>O <b>termo de início da fiscalização</b> marca a data a partir da qual fica <b>excluída a denúncia espontânea</b> (art. 138 do CTN).</p></div>')
  ],
  V4:[
    sl("Controle aduaneiro de veículos e cargas",
      '<div class="box"><span class="bl">Entrada e saída de veículos</span>'+
      '<p><b>Só</b> em porto, aeroporto ou ponto de fronteira <b>alfandegado</b>. <b>Exceção:</b> o <b>titular da unidade aduaneira jurisdicionante</b> pode autorizar local <b>não alfandegado</b>, justificadamente.</p>'+
      '<p>O controle vai <b>do ingresso até a saída</b>, alcançando <b>mercadorias e bens a bordo, inclusive bagagem</b>. O <b>TERMO DE ENTRADA</b> formaliza o ingresso. Carga, descarga e transbordo só <b>depois de prestadas as informações</b> pelo transportador.</p></div>'+
      '<div class="box"><span class="bl">Buscas e proibições (art. 27)</span>'+
      '<p>A autoridade pode revistar <b>qualquer veículo</b>, mesmo <b>antes</b> das informações — mas a busca é <b>precedida de comunicação verbal ou escrita</b> ao responsável.</p>'+
      '<p>É proibido ao condutor: <b>estacionar ou carregar/descarregar fora de local habilitado</b> (inclusive <b>transbordo</b>); <b>trafegar em situação ilegal</b>; e <b>desviar da rota</b> sem motivo justificado.</p></div>'+
      '<div class="box trap"><span class="bl">Conhecimento × manifesto de carga</span>'+
      '<ul><li><b>CONHECIMENTO de carga</b> — materializa o <b>contrato de frete</b>, é <b>prova de posse ou propriedade</b>, emitido pelo <b>transportador em nome do importador</b>. <b>Um por contrato de frete.</b> Especifica <b>as mercadorias</b>.</li>'+
      '<li><b>MANIFESTO de carga</b> — <b>consolida vários conhecimentos</b>. <b>Um por trajeto.</b> Traz apenas os <b>volumes</b>.</li></ul>'+
      '<p><b>Divergência entre os dois → prevalece o CONHECIMENTO</b>, e o manifesto é corrigido <b>de ofício</b>. Já o conhecimento se corrige por <b>carta de correção</b> do emitente, <b>antes do início do despacho</b>.</p>'+
      '<p>Não apresentar manifesto = <b>declaração negativa de carga</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Conferência final de manifesto (art. 658)</span>'+
      '<p>Confronta o <b>manifesto</b> com os <b>registros de descarga ou armazenamento</b> para constatar <b>extravio ou acréscimo</b>. Apurado, exigem-se do <b>TRANSPORTADOR</b> os tributos e multas.</p>'+
      '<p>Sistemas: <b>MANTRA</b> (cargas aéreas) e <b>SISCOMEX Carga</b> (portos).</p></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada controle ao órgão responsável",
  pairs:[["Controle administrativo","SECEX"],["Controle aduaneiro","RFB"],["Controle cambial","BACEN"]],
  why:"Três controles, três órgãos — pergunta de abertura clássica."},

S2:{t:"sort", instr:"Qual documento serve a cada controle?",
  buckets:["Controle administrativo","Controle aduaneiro"],
  items:[["Licença de Importação (LI)",0],["LPCO",0],
         ["Declaração de Importação (DI)",1],["DU-E",1],["DUIMP",1]],
  why:"O administrativo autoriza; o aduaneiro fiscaliza a operação."},

S3:{t:"gap", instr:"Complete a natureza do controle aduaneiro",
  before:"O controle aduaneiro é eminentemente ",
  after:", ou seja, a arrecadação tributária não é o seu principal objetivo.",
  options:["extrafiscal","fiscal","parafiscal"], answer:0,
  why:"A arrecadação é objetivo complementar, secundário."},

S4:{t:"wordbank", instr:"Monte o conceito de SISCOMEX (Decreto nº 660/92)",
  target:["instrumento","administrativo","que","integra","registro","acompanhamento","e","controle","mediante","fluxo","único","computadorizado"],
  extra:["fiscalização prévia","autorização de embarque","contrato de câmbio"],
  why:"Literalidade do art. 2º."},

S5:{t:"sort", instr:"Órgão gestor ou órgão anuente do SISCOMEX?",
  buckets:["Gestor","Anuente"],
  items:[["SECEX",0],["RFB",0],["ANVISA",1],["MAPA",1],["INMETRO",1],["IBAMA",1]],
  why:"O BACEN deixou de ser gestor no início de 2014."},

S6:{t:"multi", instr:"Marque os resultados já implementados do Portal Único",
  options:["Declaração Única de Exportação (DU-E), obrigatória desde setembro de 2018",
           "Declaração Única de Importação (DUIMP), ainda como projeto-piloto",
           "Anexação eletrônica de documentos digitalizados",
           "Extinção do SISCOMEX","Transferência do controle cambial para a SECEX"],
  answers:[0,1,2],
  why:"O Portal Único foi criado dentro do SISCOMEX, não o substituiu."},

S7:{t:"match", instr:"Ligue cada modalidade de habilitação ao seu enquadramento",
  pairs:[["Expressa","S.A. de capital aberto, empresa pública e sociedade de economia mista"],
         ["Limitada","Capacidade financeira até US$ 150.000 em seis meses"],
         ["Ilimitada","Capacidade financeira acima de US$ 150.000 em seis meses"]],
  why:"Expressa e ilimitada não se sujeitam a limite de operações."},

S8:{t:"sort", instr:"A operação se sujeita aos limites da habilitação limitada?",
  buckets:["Sujeita-se","Não se sujeita"],
  items:[["Importação por conta e ordem, quanto ao adquirente",0],
         ["Importação por encomenda, quanto à importadora",0],
         ["Importação por encomenda, quanto ao encomendante",0],
         ["Exportação",1],["Internação de mercadorias da ZFM",1],
         ["Importação por conta e ordem, quanto à importadora",1],
         ["Importação sem cobertura cambial",1]],
  why:"Repare que a conta e ordem muda de lado conforme quem se analisa."},

S9:{t:"mc", instr:"Sobre a inscrição no REI, é correto afirmar que:",
  options:["É automática na primeira operação e não pode ser negada",
           "Depende de requerimento e pode ser negada",
           "É concedida pela SECEX mediante análise de idoneidade",
           "Só alcança importadores, não exportadores"],
  answer:0,
  why:"Pode ser suspensa ou cancelada por decisão administrativa final — nunca negada."},

S10:{t:"gap", instr:"Complete a exceção à universalidade do controle aduaneiro",
  before:"São exceção à universalidade do controle aduaneiro as ",
  after:", protegidas pelas Convenções de Viena de 1961 e 1963.",
  options:["malas diplomáticas e consulares","remessas postais internacionais","bagagens de viajantes"], answer:0,
  why:"O princípio alcança todos os bens, veículos e pessoas — salvo essa hipótese."},

S11:{t:"mc", instr:"O Regulamento Aduaneiro (Decreto nº 6.759/2009) é:",
  options:["Norma infralegal e secundária, que consolida leis esparsas",
           "Norma primária que esgota a legislação aduaneira",
           "Lei complementar de normas gerais aduaneiras",
           "Tratado internacional incorporado ao direito interno"],
  answer:0,
  why:"A legislação aduaneira não se esgota nele."},

S12:{t:"sort", instr:"Zona primária ou zona secundária?",
  buckets:["Zona primária","Zona secundária"],
  items:[["Área terrestre ou aquática nos portos alfandegados",0],
         ["Área terrestre nos aeroportos alfandegados",0],
         ["Pontos de fronteira alfandegados",0],
         ["Zonas de Processamento de Exportação",0],
         ["Restante do território nacional",1],
         ["Espaço aéreo e águas territoriais",1]],
  why:"As ZPE são zona primária para fins de controle aduaneiro — pegadinha clássica."},

S13:{t:"match", instr:"Ligue cada conceito",
  pairs:[["Enclave aduaneiro","Área em território de outro Estado onde se aplica a legislação nacional"],
         ["Exclave aduaneiro","Área em território nacional onde se aplica a legislação estrangeira"],
         ["Área de Controle Integrado","Região limítrofe do MERCOSUL com controle conjunto dos dois países"]],
  why:"As Áreas de Controle Integrado estendem o território aduaneiro."},

S14:{t:"mc", instr:"A zona de vigilância aduaneira compreende a totalidade de qual ente atravessado pela linha de demarcação?",
  options:["Do Município","Do Estado","Da região metropolitana","Do distrito"],
  answer:0,
  why:"Ainda que parte dele fique fora da área demarcada. A banca troca por Estado."},

S15:{t:"multi", instr:"Marque os requisitos do alfandegamento (art. 13)",
  options:["Condições de instalação do órgão de fiscalização e infraestrutura de segurança fiscal",
           "Regularidade fiscal do interessado",
           "Disponibilidade de recursos humanos e materiais",
           "O interessado assumir a condição de fiel depositário da mercadoria",
           "Autorização prévia do Ministério das Relações Exteriores"],
  answers:[0,1,2,3],
  why:"Quatro incisos, todos cumulativos."},

S16:{t:"sort", instr:"Onde fica cada recinto?",
  buckets:["Zona primária","Fora da zona primária"],
  items:[["Lojas francas (free shops)",0],["Portos secos",1]],
  why:"Portos secos são de uso público e não podem ficar na zona primária."},

S17:{t:"multi", instr:"Quem está sujeito à fiscalização aduaneira?",
  options:["Pessoas físicas","Pessoas jurídicas","Não contribuintes",
           "Entidades imunes","Entidades isentas",
           "Apenas os importadores habilitados no SISCOMEX"],
  answers:[0,1,2,3,4],
  why:"O alcance é o mais amplo possível."},

S18:{t:"multi", instr:"A precedência da autoridade aduaneira implica:",
  options:["Obrigação das demais autoridades de prestar auxílio imediato quando requisitado",
           "Competência para disciplinar a entrada, permanência, movimentação e saída de pessoas, veículos e mercadorias",
           "Aplicação também nas zonas de vigilância aduaneira",
           "Subordinação hierárquica das demais autoridades à RFB"],
  answers:[0,1,2],
  why:"Precedência não é subordinação hierárquica."},

S19:{t:"multi", instr:"Requisitos para a RFB requisitar dados protegidos por sigilo bancário",
  options:["Processo administrativo instaurado ou procedimento fiscal em curso",
           "Exames considerados indispensáveis pela autoridade administrativa competente",
           "Prévia autorização judicial",
           "Concordância do correntista"],
  answers:[0,1],
  why:"O STF validou a LC nº 105/2001 em 2016, dispensando ordem judicial."},

S20:{t:"gap", instr:"Complete o efeito do termo de início da fiscalização",
  before:"A lavratura do termo de início da fiscalização demarca a data a partir da qual fica excluída a ",
  after:".",
  options:["denúncia espontânea","decadência do crédito","prescrição intercorrente"], answer:0,
  why:"Art. 138 do CTN."},

S21:{t:"mc", instr:"Pode um veículo procedente do exterior entrar por ponto de fronteira NÃO alfandegado?",
  options:["Sim, se o titular da unidade aduaneira jurisdicionante autorizar, em caso justificado",
           "Nunca, em nenhuma hipótese",
           "Sim, livremente, desde que informe a RFB depois",
           "Somente em caso de guerra ou calamidade"],
  answer:0,
  why:"Questão ATRFB/2012 — a regra é o local alfandegado, com essa exceção."},

S22:{t:"sort", instr:"Conhecimento de carga ou manifesto de carga?",
  buckets:["Conhecimento de carga","Manifesto de carga"],
  items:[["Materializa o contrato de frete",0],
         ["É prova de posse ou de propriedade da mercadoria",0],
         ["Um para cada contrato de frete",0],
         ["Especifica as mercadorias",0],
         ["Consolida vários conhecimentos",1],
         ["Um para cada trajeto",1],
         ["Traz apenas os volumes",1]],
  why:"Na divergência entre os dois, prevalece o conhecimento."},

S23:{t:"mc", instr:"Havendo divergência entre manifesto e conhecimento de carga:",
  options:["Prevalece o conhecimento, podendo o manifesto ser corrigido de ofício",
           "Prevalece o manifesto, por consolidar a operação",
           "Ambos são invalidados e a carga é retida",
           "Prevalece o que tiver data mais recente"],
  answer:0,
  why:"Art. 47 do Regulamento Aduaneiro."},

S24:{t:"mc", instr:"A conferência final de manifesto destina-se a constatar:",
  options:["Extravio ou acréscimo de volume ou de mercadoria",
           "A regularidade fiscal do importador",
           "O valor aduaneiro das mercadorias",
           "A habilitação do transportador no SISCOMEX"],
  answer:0,
  why:"Art. 658 — apurado o extravio, exigem-se do transportador tributos e multas."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Monte seu caderno no TEC — Legislação Aduaneira: comércio exterior e SISCOMEX","https://www.tecconcursos.com.br/questoes/filtro","filtro"],
  ["Monte seu caderno no TEC — jurisdição aduaneira e alfandegamento","https://www.tecconcursos.com.br/questoes/filtro","filtro"]
];
var TECNOTA = "Não há caderno pronto do Radegondes aqui — o material veio do curso de Legislação Aduaneira do Estratégia. No TEC, filtre por “Legislação Aduaneira” e marque as bancas ESAF (provas antigas da Receita) e FGV (última banca). ATENÇÃO À DATA: o PDF de origem é de 2021 e alguns pontos podem ter mudado — confira no Regulamento Aduaneiro atualizado antes de dar por decorado qualquer número ou sigla de sistema.";

var UNITS = [
  {n:1, title:"Os três controles e o SISCOMEX", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Controles, SISCOMEX, Portal Único e habilitação", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · os três controles",        xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6","T7"]},
    {id:"K3", type:"drill",  title:"Praticar · SISCOMEX e Portal Único",  xp:25, data:["S4","S5","S6","T8","T9","T10","T11","T12","T13","T14"]},
    {id:"K4", type:"drill",  title:"Praticar · habilitação e REI",        xp:25, data:["S7","S8","S9","T15","T16","T17","T18","T19","T20","T21","T22","T23","T24"]},
    {id:"K5", type:"flash",  title:"Flashcards · controles e SISCOMEX",   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
  ]},
  {n:2, title:"Legislação e jurisdição aduaneira", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Autonomia, território e alfandegamento", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · autonomia e legislação",   xp:25, data:["S10","S11","T25","T26","T27","T28","T29"]},
    {id:"K8", type:"drill",  title:"Praticar · zona primária e secundária", xp:25, data:["S12","S13","T30","T31","T32","T33","T34","T35"]},
    {id:"K9", type:"drill",  title:"Praticar · vigilância e alfandegamento", xp:25, data:["S14","S15","S16","T36","T37","T38","T39","T40","T41","T42","T43"]},
    {id:"K10",type:"flash",  title:"Flashcards · jurisdição aduaneira",   xp:15, data:[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]}
  ]},
  {n:3, title:"Administração aduaneira", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Supremacia, prerrogativas e sigilo",  xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · alcance da fiscalização",  xp:25, data:["S17","S18","T44","T45","T46","T47","T48"]},
    {id:"K13",type:"drill",  title:"Praticar · sigilo e denúncia espontânea", xp:25, data:["S19","S20","T49","T50","T51"]},
    {id:"K14",type:"flash",  title:"Flashcards · administração aduaneira", xp:15, data:[46,47,48,49,50,51,52,53,54,55,56,57,58]}
  ]},
  {n:4, title:"Controle de veículos e cargas", cvar:"u4", lessons:[
    {id:"K15",type:"teoria", title:"Termo de entrada, conhecimento e manifesto", xp:10, data:"V4"},
    {id:"K16",type:"drill",  title:"Praticar · entrada e saída de veículos", xp:25, data:["S21","T52","T53","T54"]},
    {id:"K17",type:"drill",  title:"Praticar · conhecimento × manifesto", xp:25, data:["S22","S23","T55","T56","T57"]},
    {id:"K18",type:"drill",  title:"Praticar · conferência final",        xp:25, data:["S24"]},
    {id:"K19",type:"flash",  title:"Flashcards · veículos e cargas",      xp:15, data:[59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",             xp:60, data:null},
    {id:"K20", type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"K21", type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do PDF de Legislação Aduaneira (Estratégia, Aula 00, 24/02/2021) ---------- */
var COM={
0:"<p>Frase de abertura da aula: as operações de comércio exterior estão submetidas a <b>três espécies de controle</b>, cada um de competência de um órgão diferente — <b>administrativo</b>, <b>aduaneiro</b> e <b>cambial</b>.</p><p>E logo abaixo: os responsáveis são, <b>respectivamente</b>, a <b>SECEX</b>, a <b>RFB</b> e o <b>BACEN</b>.</p><p class='fb-fonte'>Aula 00 · <i>Controles do comércio exterior</i></p>",
1:"<p>O PDF destaca: o controle administrativo, <b>em regra, é prévio ao embarque</b> da mercadoria no exterior ou para o exterior. Ele representa uma <b>autorização governamental</b> para importar ou exportar.</p><p class='fb-fonte'>Aula 00 · <i>1.1 Controle Administrativo</i></p>",
2:"<p>Do texto: nas exportações o controle administrativo se viabiliza pelo módulo <b>LPCO</b> — Licenças, Permissões, Certificados e Outros Documentos.</p><p>E o marco histórico que ele registra: por muito tempo foi feito pelos <b>Registros de Exportação (REs)</b>; com o <b>desligamento do NOVOEX, em setembro de 2018</b>, não há mais registro de REs.</p><p class='fb-fonte'>Aula 00 · <i>1.1 Controle Administrativo</i></p>",
3:"<p>Frase literal da aula: o controle aduaneiro é <b>eminentemente extrafiscal</b>, é dizer, <b>a arrecadação tributária não é o seu principal objetivo</b> — ela é <b>objetivo apenas complementar, secundário</b>.</p><p>O objetivo dele, segundo o PDF, é fiscalizar entrada, saída e movimentação de bens e veículos, tutelando bens como a <b>segurança nacional</b> e a <b>saúde de pessoas e animais</b>.</p><p class='fb-fonte'>Aula 00 · <i>1.2 Controle Aduaneiro</i></p>",
4:"<p>O PDF explica: a RFB atua essencialmente na <b>circulação transfronteiriça</b>, mas o controle <b>também poderá ser exercido a posteriori</b> — as chamadas operações de <b>zona secundária</b>.</p><p>E faz a ressalva que a questão cobra: mesmo a posteriori, o <b>foco serão os desdobramentos da operação de circulação transfronteiriça</b>.</p><p class='fb-fonte'>Aula 00 · <i>1.2 Controle Aduaneiro</i></p>",
5:"<p>Do texto: nas importações o controle aduaneiro é processado por documento eletrônico chamado <b>Declaração de Importação (DI)</b>, e já está em fase de implementação a <b>DUIMP</b>, que <b>irá substituir as DIs e as LIs</b>.</p><p class='fb-fonte'>Aula 00 · <i>1.2 Controle Aduaneiro</i></p>",
6:"<p>Nota de rodapé 2 do PDF: em <b>setembro de 2018</b> passou a ser obrigatória a <b>DU-E</b>, que <b>substituiu a DE (Declaração de Exportação) e o RE (Registro de Exportação)</b>.</p><p>Repare no encaixe: a DE viabilizava o controle <b>aduaneiro</b>; o RE, o <b>administrativo</b>. A DU-E juntou os dois.</p><p class='fb-fonte'>Aula 00 · <i>1.2 / 2.2 Portal Único</i></p>",
7:"<p>Do tópico de controle cambial: <b>chama-se contrato de câmbio o documento que formaliza a compra e venda de moeda estrangeira</b>.</p><p>O PDF acrescenta que o controle cambial compete ao <b>BACEN</b>, “embora, à medida que o tempo passa, ele esteja sendo cada vez mais transferido para a RFB”.</p><p class='fb-fonte'>Aula 00 · <i>1.3 Controle Cambial</i></p>",
8:"<p>O PDF transcreve o <b>art. 2º do Decreto nº 660/92</b>: o SISCOMEX é o <b>instrumento administrativo que integra as atividades de registro, acompanhamento e controle das operações de comércio exterior, mediante fluxo único, computadorizado, de informações</b>.</p><p>É definição literal — decore a frase inteira.</p><p class='fb-fonte'>Aula 00 · <i>2 SISCOMEX</i></p>",
9:"<p>Do texto: o novo sistema baseia-se no conceito de <b>Guichê Único de Comércio Exterior</b>, “modelo utilizado por diversos países e amplamente recomendado por organizações internacionais do porte da <b>Organização Mundial de Aduanas (OMA)</b> e <b>Banco Mundial</b>”.</p><p>E o comando político veio com o <b>Decreto nº 8.229/2014</b>, que criou o Portal Único <b>no âmbito do SISCOMEX</b>.</p><p class='fb-fonte'>Aula 00 · <i>2.2 Criação do Portal Único</i></p>",
10:"<p>Do PDF: no <b>final de 2013</b> os membros da <b>OMC</b> celebraram o <b>Acordo de Facilitação de Comércio</b>, e uma medida importante dele é a <b>obrigação de que os membros criem um sistema que permita interface única entre o governo e os operadores de comércio exterior</b>, no formato de Guichê Único.</p><p class='fb-fonte'>Aula 00 · <i>2.2 Criação do Portal Único</i></p>",
11:"<p>O PDF é explícito: a DUIMP foi implementada <b>ainda como projeto-piloto</b> e <b>é de utilização facultativa</b>; seu registro depende de uma série de condições, entre elas a <b>desnecessidade de licenciamento de importação</b>. “Dentro de algum tempo” ela deverá substituir as DIs e as LIs.</p><p>O que derruba o item é o <b>“em todas”</b>. Aviso de data: este PDF é de <b>fevereiro de 2021</b> e o cronograma da DUIMP avançou desde então — confira o estágio atual antes da prova.</p><p class='fb-fonte'>Aula 00 · <i>2.2 Portal Único — nota de rodapé 1</i></p>",
12:"<p>Do texto: <b>desde o início de 2014</b>, os órgãos gestores do SISCOMEX são a <b>SECEX</b> e a <b>RFB</b> — “a SECEX é responsável pelo controle administrativo e a RFB é responsável pelo controle aduaneiro”.</p><p>Nota 5 do PDF: com o <b>Decreto nº 10.010/2019</b>, a gestão do SISCOMEX está a cargo do <b>Ministério da Economia</b>, do qual fazem parte SECEX e RFB.</p><p class='fb-fonte'>Aula 00 · <i>2.3 A Gestão do SISCOMEX</i></p>",
13:"<p>Frase do PDF, montada exatamente contra esta pegadinha: “<b>Até o início de 2014</b>, o BACEN também era órgão gestor do SISCOMEX, na condição de responsável pelo controle cambial. <b>O BACEN ainda é responsável pelo controle cambial, mas não se pode dizer mais que ele seja um órgão gestor do SISCOMEX.</b>”</p><p class='fb-fonte'>Aula 00 · <i>2.3 A Gestão do SISCOMEX</i></p>",
14:"<p>Do texto: os <b>órgãos anuentes</b> são aqueles que <b>deliberam sobre as operações de comércio (importações e exportações) na fase do controle administrativo</b>.</p><p>A lista que o PDF dá: <b>ANVISA, MAPA, DECEX, MCT, INMETRO, DPF, DFPC, ANP, ANCINE, IBAMA, SUFRAMA, DNPM, ECT, CNEM</b>.</p><p class='fb-fonte'>Aula 00 · <i>2.3 A Gestão do SISCOMEX</i></p>",
15:"<p>Do PDF: o procedimento de habilitação é feito conforme a <b>IN RFB nº 1.984/2020</b>, e segundo ela há <b>3 modalidades</b>: <b>expressa</b>, <b>ilimitada</b> e <b>limitada</b> (art. 16).</p><p>A habilitação é desencadeada <b>junto à RFB</b> e é o <b>primeiro passo</b> para a empresa operar no comércio exterior.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação no SISCOMEX</i></p>",
16:"<p>Art. 16, I, transcrito no PDF — a <b>expressa</b> cabe a: <b>a)</b> pessoa jurídica constituída como <b>sociedade anônima de capital aberto</b>, com ações negociadas em bolsa ou no mercado de balcão, <b>e suas subsidiárias integrais</b>; ou <b>b)</b> <b>empresa pública ou sociedade de economia mista</b>.</p><p>O comentário do professor: é a de <b>menor grau de exigências</b>, aplicável a quem pode ser considerado <b>presumidamente idôneo</b>.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação — art. 16</i></p>",
17:"<p>Duas frases do PDF resolvem: “a habilitação expressa <b>não sujeita o importador a limite de operações</b>”; e a ilimitada é “modalidade que <b>também não sujeita</b> o importador a limite de operações”.</p><p>O <b>art. 17, §4º</b>, fecha: o habilitado na modalidade <b>Expressa ou Ilimitada não está sujeito aos limites</b>.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação — art. 17, §4º</i></p>",
18:"<p><b>Art. 17</b>, transcrito no PDF — em cada período consecutivo de <b>seis meses</b>, o habilitado na <b>limitada</b> pode importar até:</p><ul><li><b>US$ 50.000,00</b>, se a capacidade financeira estimada for <b>igual ou inferior</b> a esse valor;</li><li><b>US$ 150.000,00</b>, se for <b>superior a 50 mil e igual ou inferior a 150 mil</b>.</li></ul><p>São as <b>duas faixas</b> que o professor resume logo abaixo do artigo.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação — art. 17</i></p>",
19:"<p><b>Art. 17, §1º</b>, literal no PDF: “para fins de apuração dos limites estabelecidos neste artigo, as operações de importação serão consideradas pelo <b>valor aduaneiro</b> das mercadorias”.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação — art. 17, §1º</i></p>",
20:"<p><b>Art. 17, §2º</b> — não estão sujeitas aos limites as operações de: <b>I</b> exportação · <b>II</b> internação de mercadorias da <b>ZFM</b> · <b>III</b> importação <b>por conta e ordem de terceiros, em relação à pessoa jurídica importadora</b> · <b>IV</b> importação <b>sem cobertura cambial</b>.</p><p>São <b>quatro</b> incisos; o enunciado cita três deles, todos corretos. Guarde o terceiro, que é o mais esquecido.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação — art. 17, §2º</i></p>",
21:"<p><b>Art. 17, §3º</b>: os limites <b>aplicam-se, inclusive</b>, às operações de <b>I</b> importação por conta e ordem <b>em relação ao adquirente</b>; e <b>II</b> importação <b>por encomenda, tanto em relação à pessoa jurídica importadora quanto ao encomendante predeterminado</b>.</p><p>Leia o §2º e o §3º juntos: na <b>conta e ordem</b>, a importadora está <b>fora</b> do limite e o adquirente <b>dentro</b>; na <b>encomenda</b>, os <b>dois</b> estão dentro.</p><p class='fb-fonte'>Aula 00 · <i>2.4 Habilitação — art. 17, §§2º e 3º</i></p>",
22:"<p>Do PDF: no momento da primeira operação o nome da empresa passa a constar do <b>Registro de Exportadores e Importadores (REI)</b>. Segundo a <b>Portaria SECEX nº 23/2011</b>, a inscrição é <b>automática</b>, realizada <b>no ato da primeira operação</b> de exportação ou importação, em qualquer ponto conectado ao SISCOMEX.</p><p>E o art. 8º, §1º: quem já está inscrito <b>tem a inscrição mantida</b>, sem providência adicional.</p><p class='fb-fonte'>Aula 00 · <i>REI — Portaria SECEX 23/2011</i></p>",
23:"<p>Frase final do tópico, literal: segundo o <b>art. 10</b> da Portaria SECEX nº 23/2011, a inscrição no REI <b>poderá ser suspensa ou cancelada</b> nos casos de punição em <b>decisão administrativa final</b> — e “<b>a inscrição no REI não pode ser negada</b>”.</p><p class='fb-fonte'>Aula 00 · <i>REI — Portaria SECEX 23/2011</i></p>",
24:"<p><b>Art. 9º</b> da Portaria SECEX nº 23/2011, transcrito no PDF: ficam dispensadas da inscrição as exportações <b>via remessa postal</b>, <b>com ou sem expectativa de recebimento</b>, <b>exceto donativos</b>, por pessoa física ou jurídica até o limite de <b>US$ 50.000,00</b> ou o equivalente em outra moeda.</p><p>Nota 6 do PDF: operação <b>com</b> expectativa de recebimento é operação <b>com cobertura cambial</b>; sem expectativa, <b>sem cobertura cambial</b>.</p><p class='fb-fonte'>Aula 00 · <i>REI — art. 9º</i></p>",
25:"<p>Do PDF, ao justificar a autonomia do direito aduaneiro: “um princípio fundamental do direito aduaneiro é o da <b>universalidade do controle aduaneiro</b>, que <b>alcança todos os bens, veículos e pessoas</b>”.</p><p class='fb-fonte'>Aula 00 · <i>Autonomia do Direito Aduaneiro</i></p>",
26:"<p>Nota de rodapé 7, direta ao ponto: “uma <b>exceção à universalidade</b> do controle aduaneiro são as <b>malas diplomáticas e malas consulares</b>, protegidas pela <b>Convenção de Viena de 1961 e 1963</b>”.</p><p class='fb-fonte'>Aula 00 · <i>Autonomia do Direito Aduaneiro — nota 7</i></p>",
27:"<p>Do mesmo trecho: são <b>institutos específicos</b> do direito aduaneiro as <b>medidas de defesa comercial</b> — <b>direitos antidumping</b> e <b>direitos compensatórios</b> —, os <b>regimes aduaneiros especiais</b> e os <b>aplicados em áreas especiais</b>.</p><p>É um dos argumentos que o PDF usa para sustentar a autonomia da disciplina.</p><p class='fb-fonte'>Aula 00 · <i>Autonomia do Direito Aduaneiro</i></p>",
28:"<p>Do texto: segundo o <b>art. 22, inciso VIII, da CF/88</b>, compete <b>privativamente à União</b> legislar sobre <b>comércio exterior</b>. “Em decorrência disso, deve-se admitir que a União tem competência privativa para legislar sobre direito aduaneiro.”</p><p class='fb-fonte'>Aula 00 · <i>Fontes do Direito Aduaneiro</i></p>",
29:"<p>Dois pontos do PDF derrubam o item. O Regulamento Aduaneiro (<b>Decreto nº 6.759/2009</b>) é <b>norma infralegal</b>, “isto é, <b>não se constitui norma primária</b>” — ele <b>reproduz dispositivos de leis esparsas</b>, consolidando-os.</p><p>E: “<b>a legislação aduaneira não se esgota nesse diploma normativo</b>, estando prevista em diversas outras normas infralegais, como as inúmeras <b>instruções normativas da RFB</b>”.</p><p class='fb-fonte'>Aula 00 · <i>Regulamento Aduaneiro</i></p>",
30:"<p><b>Art. 3º</b> do Decreto nº 6.759/2009: a jurisdição dos serviços aduaneiros <b>estende-se por todo o território aduaneiro</b>, que <b>compreende todo o território nacional</b>.</p><p>O PDF tira a conclusão: “<b>não há nenhum local do território nacional que esteja imune à fiscalização aduaneira</b>”. E o território se divide em <b>zona primária</b> e <b>zona secundária</b>, que somadas formam o território nacional.</p><p class='fb-fonte'>Aula 00 · <i>Jurisdição dos Serviços Aduaneiros</i></p>",
31:"<p>A zona primária, no PDF, são <b>os locais por onde entram e saem</b> mercadorias, pessoas e veículos — três áreas <b>demarcadas pela autoridade aduaneira local</b>:</p><ul><li>a área <b>terrestre ou aquática</b>, <b>contínua ou descontínua</b>, nos <b>portos</b> alfandegados;</li><li>a área terrestre, nos <b>aeroportos</b> alfandegados;</li><li>a área terrestre dos <b>pontos de fronteira</b> alfandegados.</li></ul><p class='fb-fonte'>Aula 00 · <i>Zona Primária</i></p>",
32:"<p>Frase do PDF: “<b>também são consideradas como zona primária, para fins de controle aduaneiro, as zonas de processamento de exportações</b>”.</p><p>Ele explica que as ZPE são um regime aduaneiro aplicado em <b>áreas especiais</b>, com benefícios fiscais para promover o desenvolvimento de regiões menos favorecidas.</p><p class='fb-fonte'>Aula 00 · <i>Zona Primária</i></p>",
33:"<p>Literal: “a <b>zona secundária</b>, por sua vez, compreende o <b>restante do território nacional</b>, <b>inclusive o espaço aéreo e as águas territoriais</b>”.</p><p class='fb-fonte'>Aula 00 · <i>Zona Secundária</i></p>",
34:"<p><b>Art. 3º, §5º</b>: a jurisdição dos serviços aduaneiros <b>estende-se ainda às Áreas de Controle Integrado</b> criadas em regiões limítrofes dos países integrantes do <b>MERCOSUL</b> com o Brasil.</p><p>O PDF define: são <b>parte do território do país sede</b>, incluindo as instalações, onde o controle é feito <b>por funcionários dos dois países</b>. Nota 10: a <b>Bolívia</b>, sem ser membro efetivo, também tem uma ACI com o Brasil.</p><p class='fb-fonte'>Aula 00 · <i>Áreas de Controle Integrado</i></p>",
35:"<p>Os dois conceitos, como o PDF os define — ele mesmo diz que são “importantes, mas pouco explorados”:</p><ul><li><b>Enclave aduaneiro</b>: área <b>em território de outro Estado</b> em que se permite a aplicação da legislação <b>nacional</b>.</li><li><b>Exclave aduaneiro</b>: área <b>em território nacional</b> na qual é permitida a aplicação da legislação aduaneira <b>estrangeira</b>.</li></ul><p class='fb-fonte'>Aula 00 · <i>Áreas de Controle Integrado</i></p>",
36:"<p><b>Art. 4º</b> do Regulamento Aduaneiro, transcrito: o <b>Ministro de Estado da Fazenda</b> poderá demarcar, na <b>orla marítima</b> ou na <b>faixa de fronteira</b>, <b>zonas de vigilância aduaneira</b>, nas quais a permanência de mercadorias ou a circulação delas, de veículos, pessoas ou animais ficam sujeitas a <b>exigências fiscais, proibições e restrições</b>.</p><p>Nota 11 do PDF: a norma ainda diz “Ministério da Fazenda”, mas ele foi substituído pelo <b>Ministério da Economia</b>.</p><p class='fb-fonte'>Aula 00 · <i>Zonas de Vigilância Aduaneira — art. 4º</i></p>",
37:"<p><b>Art. 4º, §3º</b>, literal: “compreende-se na zona de vigilância aduaneira a <b>totalidade do MUNICÍPIO</b> atravessado pela linha de demarcação, ainda que parte dele fique fora da área demarcada”.</p><p>A questão trocou <b>Município</b> por <b>Estado</b>. É a troca de uma palavra só.</p><p class='fb-fonte'>Aula 00 · <i>Zonas de Vigilância Aduaneira — art. 4º, §3º</i></p>",
38:"<p><b>Art. 4º, §1º</b> — o ato que demarcar a zona de vigilância poderá: <b>I</b> ser <b>geral</b> quanto à orla ou à faixa de fronteira, ou <b>específico</b> para determinados segmentos; <b>II</b> estabelecer <b>medidas específicas</b> para determinado local; e <b>III</b> <b>ter vigência temporária</b>.</p><p>O §2º acrescenta: na orla, a demarcação leva em conta a existência de <b>portos ou ancoradouros naturais</b> propícios a carga e descarga clandestinas.</p><p class='fb-fonte'>Aula 00 · <i>Zonas de Vigilância Aduaneira — art. 4º, §1º</i></p>",
39:"<p><b>Art. 8º</b> do Regulamento Aduaneiro: <b>somente</b> nos portos, aeroportos e pontos de fronteira <b>alfandegados</b> poderá efetuar-se a entrada ou a saída de mercadorias procedentes do exterior ou a ele destinadas.</p><p>O PDF lista <b>duas exceções</b>: <b>a)</b> mercadorias conduzidas por <b>linhas de transmissão ou por dutos</b> ligados ao exterior; e <b>b)</b> <b>outros casos estabelecidos em ato normativo da RFB</b>.</p><p class='fb-fonte'>Aula 00 · <i>Alfandegamento — art. 8º</i></p>",
40:"<p><b>Art. 13</b>, transcrito no PDF — o alfandegamento só pode ser efetivado: <b>I</b> depois de atendidas as condições de <b>instalação do órgão de fiscalização</b> e de infraestrutura indispensável à segurança fiscal; <b>II</b> se atestada a <b>regularidade fiscal</b> do interessado; <b>III</b> se houver <b>disponibilidade de recursos humanos e materiais</b>; e <b>IV</b> se o interessado <b>assumir a condição de fiel depositário</b> da mercadoria sob sua guarda.</p><p class='fb-fonte'>Aula 00 · <i>Alfandegamento — art. 13</i></p>",
41:"<p><b>Art. 11</b>, na definição que o PDF transcreve: <b>portos secos são recintos alfandegados de uso público nos quais são executadas operações de movimentação, armazenagem e despacho aduaneiro de mercadorias e de bagagem, sob controle aduaneiro</b>.</p><p>Ele acrescenta que são os recintos <b>fora da zona primária</b> de portos e aeroportos, e que podem operar com cargas de <b>importação, exportação ou ambas</b>, conforme as necessidades locais.</p><p class='fb-fonte'>Aula 00 · <i>Recintos Alfandegados — art. 11</i></p>",
42:"<p><b>Art. 11, §1º</b>, literal: <b>os portos secos não poderão ser instalados na zona primária de portos e aeroportos alfandegados</b>.</p><p>Casa com a definição: porto seco é exatamente o recinto que fica <b>fora</b> daquela zona primária.</p><p class='fb-fonte'>Aula 00 · <i>Recintos Alfandegados — art. 11, §1º</i></p>",
43:"<p>Do PDF: “também poderão ser alfandegados, <b>em zona primária</b>, recintos destinados à instalação de <b>lojas francas</b> (os conhecidos <b>free-shops</b>)”.</p><p>Vale o contraste com o item anterior: loja franca <b>pode</b> ficar em zona primária; porto seco, <b>não</b>.</p><p class='fb-fonte'>Aula 00 · <i>Recintos Alfandegados</i></p>",
44:"<p>Frase do PDF: “estão sujeitas à fiscalização <b>tanto pessoas físicas quanto pessoas jurídicas</b>, sejam <b>contribuintes ou não</b>, <b>mesmo quando se tratar de entidades imunes ou isentas</b>”.</p><p>É a universalidade aplicada à fiscalização: não depender de haver tributo a pagar.</p><p class='fb-fonte'>Aula 00 · <i>1.4 Administração Aduaneira</i></p>",
45:"<p>Literal: “a fiscalização aduaneira poderá ser <b>ininterrupta</b>, <b>em horários determinados</b>, ou <b>eventual</b>, nos <b>portos, aeroportos, pontos de fronteira e recintos alfandegados</b>”.</p><p>São três regimes possíveis — não há obrigação de ser ininterrupta.</p><p class='fb-fonte'>Aula 00 · <i>1.4 Administração Aduaneira</i></p>",
46:"<p><b>Art. 17</b> do Regulamento Aduaneiro: a autoridade aduaneira tem <b>precedência</b> sobre as demais autoridades que exerçam atribuições nas áreas de <b>portos, aeroportos, pontos de fronteira e recintos alfandegados</b>, e em outras áreas onde se autorize carga, descarga ou embarque de viajante do exterior. O PDF chama isso de <b>princípio da supremacia da autoridade aduaneira</b>.</p><p>Ela implica <b>a)</b> a obrigação das demais autoridades de <b>prestar auxílio imediato</b> quando requisitado; e <b>b)</b> a competência da autoridade aduaneira para <b>disciplinar entrada, permanência, movimentação e saída</b> de pessoas, veículos e mercadorias.</p><p class='fb-fonte'>Aula 00 · <i>1.4 Administração Aduaneira — art. 17</i></p>",
47:"<p>A frase do PDF já vem com a resposta embutida: “a precedência da autoridade aduaneira, <b>que também se aplica nas zonas de vigilância aduaneira</b>, implica...”.</p><p class='fb-fonte'>Aula 00 · <i>1.4 Administração Aduaneira — art. 17</i></p>",
48:"<p>Prerrogativa descrita no PDF: os Auditores Fiscais da RFB poderão <b>exigir a apresentação de mercadorias e de quaisquer documentos</b> que julguem necessários, e <b>solicitar o acesso aos depósitos e dependências</b> das empresas fiscalizadas, assim como de <b>veículos, cofres e outros móveis</b>, <b>a qualquer hora do dia ou da noite — se à noite os estabelecimentos estiverem funcionando</b>.</p><p class='fb-fonte'>Aula 00 · <i>1.4 Administração Aduaneira</i></p>",
49:"<p>Do PDF: “após muita controvérsia, <b>no início de 2016, o STF decidiu pela constitucionalidade da LC nº 105/2001</b>. Ficou pacificada a possibilidade de que a Receita Federal, <b>por ato próprio e independentemente de ordem judicial</b>, requisite às instituições financeiras informações protegidas por sigilo bancário.”</p><p>O professor sinaliza que espera <b>uma questão sobre isso</b> no próximo concurso da Receita.</p><p class='fb-fonte'>Aula 00 · <i>Sigilo bancário — LC 105/2001</i></p>",
50:"<p><b>Art. 6º da LC nº 105/2001</b>, transcrito no PDF, e as <b>duas condições</b> que o professor destaca: <b>i)</b> deve haver <b>processo administrativo instaurado ou procedimento fiscal em curso</b>; e <b>ii)</b> os exames devem ser considerados <b>indispensáveis</b> pela autoridade administrativa competente.</p><p>Frase dele: “é óbvio que a requisição dessas informações <b>não pode se dar de modo arbitrário</b>”.</p><p class='fb-fonte'>Aula 00 · <i>Sigilo bancário — art. 6º</i></p>",
51:"<p>O PDF cita <b>Hugo de Brito Machado</b>: a lavratura do <b>termo de início da fiscalização</b> demarca a data a partir da qual fica, <b>em regra, excluída a denúncia espontânea</b>, nos termos do <b>art. 138 do CTN</b>.</p><p>Nota 16: a denúncia espontânea é uma “confissão” do sujeito passivo, feita <b>antes de qualquer procedimento ou medida de fiscalização</b>; ela <b>exclui a responsabilidade</b> e <b>só pode ocorrer antes do início do procedimento</b>.</p><p class='fb-fonte'>Aula 00 · <i>Termo de início da fiscalização</i></p>",
52:"<p>Do tópico de controle de veículos: a entrada ou saída só pode ocorrer em local alfandegado — mas, <b>excepcionalmente, desde que justificado, o titular da unidade aduaneira jurisdicionante poderá autorizar</b> a entrada ou saída por porto, aeroporto ou ponto de fronteira <b>não alfandegado</b> (<b>art. 26, §2º, do R/A</b>).</p><p class='fb-fonte'>Aula 00 · <i>2 Controle Aduaneiro de Veículos</i></p>",
53:"<p>Do texto: prestadas as informações pelo transportador e ocorrida efetivamente a entrada do veículo no País, <b>será emitido o termo de entrada pela RFB</b> — “é o <b>termo de entrada</b> que <b>formaliza o ingresso do veículo no país</b>”.</p><p>E a consequência prática: as operações de <b>carga, descarga ou transbordo</b> só podem ser executadas <b>depois</b> de prestadas as informações.</p><p class='fb-fonte'>Aula 00 · <i>2 Controle Aduaneiro de Veículos</i></p>",
54:"<p><b>Art. 31, §2º, do R/A</b>: o <b>agente de carga</b> — “qualquer pessoa que, em nome do importador ou do exportador, <b>contrate o transporte</b> de mercadoria, <b>consolide ou desconsolide cargas</b> e preste serviços conexos” — <b>e o operador portuário</b> também devem prestar as informações sobre as operações que executem e as respectivas cargas.</p><p class='fb-fonte'>Aula 00 · <i>2 Controle Aduaneiro de Veículos — art. 31, §2º</i></p>",
55:"<p><b>Art. 554</b>: o <b>conhecimento de carga original</b>, ou documento de efeito equivalente, <b>constitui prova de posse ou de propriedade da mercadoria</b>.</p><p>O PDF completa a definição: o conhecimento de carga <b>materializa o contrato de frete</b> e é <b>emitido pelo transportador em nome do importador</b>. Para cada contrato de frete, um conhecimento.</p><p class='fb-fonte'>Aula 00 · <i>Manifesto e Conhecimento de Carga — art. 554</i></p>",
56:"<p>Frase do PDF, com o alerta entre parênteses: “<b>o manifesto de carga não especifica as mercadorias</b> importadas/exportadas (isso está no conhecimento de carga!), <b>mas apenas os volumes</b> importados/exportados”.</p><p>A hierarquia dele: o <b>conhecimento</b> traz descrição, propriedade, valor, origem e destino; o <b>manifesto</b> é o documento <b>no qual estão consolidados vários conhecimentos de carga</b>, um por trajeto.</p><p class='fb-fonte'>Aula 00 · <i>Manifesto e Conhecimento de Carga</i></p>",
57:"<p>Do PDF: “em caso de <b>divergência entre o manifesto de carga e o conhecimento de carga, prevalecerá o último</b>. A <b>correção do manifesto</b> poderá, então, ser feita <b>de ofício</b> pela autoridade aduaneira.”</p><p>Ele contrasta com o outro documento: a correção do <b>conhecimento</b> depende de <b>carta de correção</b> do emitente à autoridade aduaneira do local de descarga, apresentada <b>antes do início do despacho</b>.</p><p class='fb-fonte'>Aula 00 · <i>Manifesto e Conhecimento de Carga — art. 48</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Controles, SISCOMEX, jurisdição e controle de veículos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
