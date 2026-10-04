/* LRF — Módulo 02: Planejamento e orçamento (arts. 3º a 10) */
window.MOD = window.MOD || {};
window.MOD.lrf02 = (function(){
"use strict";

var CARDS = [
  ["O que aconteceu com o art. 3º da LRF?","Foi <b>integralmente vetado</b>. Tratava do plano plurianual — por isso a LRF <b>não disciplina o PPA</b>."],
  ["Sobre o que a LDO disporá, além do previsto no art. 165, § 2º, da CF (art. 4º, I)?","<b>a)</b> <b>equilíbrio entre receitas e despesas</b>; <b>b)</b> <b>critérios e forma de limitação de empenho</b>; <b>e)</b> <b>normas relativas ao controle de custos e à avaliação dos resultados</b> dos programas financiados com recursos dos orçamentos; <b>f)</b> demais condições e exigências para <b>transferências de recursos a entidades públicas e privadas</b>."],
  ["O que integra o projeto de LDO (art. 4º, § 1º)?","O <b>Anexo de Metas Fiscais</b>."],
  ["O que estabelece o Anexo de Metas Fiscais?","<b>Metas anuais</b>, em <b>valores correntes e constantes</b>, relativas a <b>receitas, despesas, resultados nominal e primário e montante da dívida pública</b>, para o exercício a que se referirem e <b>para os dois seguintes</b>."],
  ["O Anexo de Metas Fiscais cobre quantos exercícios?","<b>Três</b>: o exercício a que se refere e os <b>dois seguintes</b>."],
  ["Primeiro conteúdo do Anexo de Metas Fiscais (art. 4º, § 2º, I)","<b>Avaliação do cumprimento das metas relativas ao ano anterior.</b>"],
  ["Segundo conteúdo do Anexo de Metas Fiscais (II)","<b>Demonstrativo das metas anuais</b>, instruído com <b>memória e metodologia de cálculo</b>, comparando-as com as fixadas nos <b>três exercícios anteriores</b> e evidenciando a consistência com as premissas e os objetivos da <b>política econômica nacional</b>."],
  ["Terceiro conteúdo do Anexo de Metas Fiscais (III)","<b>Evolução do patrimônio líquido</b>, também nos <b>últimos três exercícios</b>, destacando a <b>origem e a aplicação dos recursos obtidos com a alienação de ativos</b>."],
  ["Quarto conteúdo do Anexo de Metas Fiscais (IV)","<b>Avaliação da situação financeira e atuarial</b>: <b>a)</b> do RGPS, do RPPS e do <b>Fundo de Amparo ao Trabalhador</b>; <b>b)</b> dos demais <b>fundos públicos e programas estatais de natureza atuarial</b>."],
  ["Quinto conteúdo do Anexo de Metas Fiscais (V)","<b>Demonstrativo da estimativa e compensação da renúncia de receita</b> e da <b>margem de expansão das despesas obrigatórias de caráter continuado</b>."],
  ["O que é o Anexo de Riscos Fiscais (art. 4º, § 3º)?","Anexo da LDO em que são <b>avaliados os passivos contingentes e outros riscos capazes de afetar as contas públicas</b>, <b>informando as providências a serem tomadas caso se concretizem</b>."],
  ["Metas × Riscos — não confunda","<b>Anexo de Metas Fiscais</b> → o que se pretende alcançar (receitas, despesas, resultados, dívida). <b>Anexo de Riscos Fiscais</b> → o que pode dar errado (passivos contingentes) e o que se fará."],
  ["O que a mensagem que encaminha o projeto de LDO da União apresenta em anexo (art. 4º, § 4º)?","Os <b>objetivos das políticas monetária, creditícia e cambial</b>, os <b>parâmetros e projeções</b> para seus principais agregados e variáveis e as <b>metas de inflação</b> para o exercício subsequente."],
  ["Como a LOA deve ser elaborada (art. 5º, caput)?","De forma <b>compatível com o plano plurianual, com a LDO e com a própria LRF</b>."],
  ["O que a LOA conterá (art. 5º, I)?","<b>Demonstrativo da compatibilidade</b> da programação dos orçamentos com os <b>objetivos e metas do Anexo de Metas Fiscais</b>."],
  ["Do que a LOA será acompanhada (art. 5º, II)?","Do documento do <b>art. 165, § 6º, da CF</b> (demonstrativo regionalizado do efeito de isenções, anistias, remissões, subsídios e benefícios) e das <b>medidas de compensação</b> a renúncias de receita e ao aumento de despesas obrigatórias de caráter continuado."],
  ["O que é a reserva de contingência na LOA (art. 5º, III)?","Dotação cuja <b>forma de utilização e montante — definido com base na RCL — serão estabelecidos na LDO</b>, destinada ao atendimento de <b>passivos contingentes e outros riscos e eventos fiscais imprevistos</b>."],
  ["A reserva de contingência tem seu montante fixado onde?","O <b>montante é definido com base na RCL</b>, mas <b>quem o estabelece é a LDO</b>. A reserva em si é consignada na <b>LOA</b>."],
  ["O que diz o art. 5º, § 1º?","<b>Todas</b> as despesas relativas à <b>dívida pública, mobiliária ou contratual</b>, e as <b>receitas que as atenderão</b>, constarão da lei orçamentária anual."],
  ["Como aparece o refinanciamento da dívida (art. 5º, § 2º)?","Constará <b>separadamente</b> na LOA e nas leis de créditos adicionais."],
  ["Qual o limite da atualização monetária do principal da dívida mobiliária refinanciada (art. 5º, § 3º)?","<b>Não poderá superar a variação do índice de preços previsto na LDO</b>, ou em legislação específica."],
  ["O que o art. 5º, § 4º, veda?","Consignar na LOA <b>crédito com finalidade imprecisa ou com dotação ilimitada</b>."],
  ["O que o art. 5º, § 5º, veda?","Consignar dotação para <b>investimento com duração superior a um exercício financeiro</b> que <b>não esteja previsto no PPA</b> ou em lei que autorize sua inclusão."],
  ["O que integra as despesas da União por força do art. 5º, § 6º?","As do <b>Banco Central do Brasil</b> relativas a <b>pessoal e encargos sociais</b>, <b>custeio administrativo</b> — inclusive benefícios e assistência aos servidores — e <b>investimentos</b>."],
  ["O que ocorre com o resultado do Banco Central (art. 7º)?","O resultado, apurado <b>após a constituição ou reversão de reservas</b>, constitui <b>receita do Tesouro Nacional</b>, e será transferido <b>até o décimo dia útil subsequente à aprovação dos balanços semestrais</b>."],
  ["E o resultado negativo do Banco Central (art. 7º, § 1º)?","Constituirá <b>obrigação do Tesouro</b> para com o Banco Central e será consignado em <b>dotação específica no orçamento</b>."],
  ["Qual o prazo e o conteúdo do art. 8º?","<b>Até trinta dias após a publicação dos orçamentos</b>, o Poder Executivo estabelecerá a <b>programação financeira</b> e o <b>cronograma de execução mensal de desembolso</b>."],
  ["O que diz o parágrafo único do art. 8º?","Os <b>recursos legalmente vinculados a finalidade específica</b> serão utilizados <b>exclusivamente</b> para atender ao objeto de sua vinculação, <b>ainda que em exercício diverso</b> daquele em que ocorrer o ingresso."],
  ["Quando se promove a limitação de empenho (art. 9º)?","Se verificado, <b>ao final de um bimestre</b>, que a realização da receita poderá <b>não comportar o cumprimento das metas de resultado primário ou nominal</b> do Anexo de Metas Fiscais."],
  ["Quem promove a limitação de empenho e em que prazo?","<b>Os Poderes e o Ministério Público</b>, <b>por ato próprio</b> e nos montantes necessários, <b>nos trinta dias subsequentes</b>, segundo os critérios fixados pela <b>LDO</b>."],
  ["O que se limita, exatamente?","<b>Empenho e movimentação financeira</b> — os dois, conjuntamente."],
  ["Como se recompõem as dotações limitadas (art. 9º, § 1º)?","No caso de <b>restabelecimento da receita prevista, ainda que parcial</b>, a recomposição dar-se-á <b>de forma proporcional às reduções efetivadas</b>."],
  ["O que não pode ser objeto de limitação (art. 9º, § 2º)?","As despesas que constituam <b>obrigações constitucionais e legais do ente</b>, <b>inclusive as destinadas ao pagamento do serviço da dívida</b>, e as <b>ressalvadas pela LDO</b>."],
  ["O que houve com o art. 9º, § 3º, da LRF?","Foi declarado <b>inconstitucional pelo STF</b> (ADI 2.238). Ele autorizava o <b>Executivo a limitar unilateralmente</b> os valores dos demais Poderes e do MP — o que viola a <b>separação de Poderes</b>."],
  ["Qual o calendário das audiências públicas do art. 9º, § 4º?","<b>Até o final dos meses de maio, setembro e fevereiro</b>, o Poder Executivo demonstrará e avaliará o cumprimento das <b>metas fiscais de cada quadrimestre</b>, em <b>audiência pública</b> na comissão do art. 166, § 1º, da CF ou equivalente."],
  ["Por que os meses são maio, setembro e fevereiro?","Porque avaliam os <b>quadrimestres</b> encerrados em abril, agosto e dezembro — sempre no mês seguinte ao fechamento."],
  ["O que determina o art. 10 da LRF?","A execução orçamentária e financeira <b>identificará os beneficiários de pagamento de sentenças judiciais</b>, por sistema de contabilidade e administração financeira, para observância da <b>ordem cronológica do art. 100 da CF</b>."],
  ["A limitação de empenho alcança o Legislativo e o Judiciário?","<b>Sim</b> — cada Poder e o MP promovem a sua <b>por ato próprio</b>. O que o STF afastou foi a limitação <b>imposta pelo Executivo</b> aos demais."]
];

var QS = [
  ["O art. 3º da Lei de Responsabilidade Fiscal, que tratava do plano plurianual, foi integralmente vetado.","C","CESPE","Por isso a LRF não disciplina o PPA."],
  ["A lei de diretrizes orçamentárias disporá sobre o equilíbrio entre receitas e despesas.","C","FCC","Art. 4º, I, a."],
  ["Cabe à lei orçamentária anual estabelecer os critérios e a forma de limitação de empenho.","E","FGV","Cabe à <b>LDO</b> (art. 4º, I, b)."],
  ["A LDO disporá sobre normas relativas ao controle de custos e à avaliação dos resultados dos programas financiados com recursos dos orçamentos.","C","CESPE","Art. 4º, I, e."],
  ["Integrará o projeto de lei de diretrizes orçamentárias o Anexo de Metas Fiscais.","C","VUNESP","Art. 4º, § 1º."],
  ["O Anexo de Metas Fiscais estabelecerá metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública.","C","FCC","Para o exercício a que se referirem e para os dois seguintes."],
  ["As metas do Anexo de Metas Fiscais abrangem o exercício a que se referirem e os três seguintes.","E","CESPE","São o exercício e os <b>dois</b> seguintes — três exercícios ao todo."],
  ["O Anexo de Metas Fiscais conterá a avaliação do cumprimento das metas relativas ao ano anterior.","C","FGV","Art. 4º, § 2º, I."],
  ["O demonstrativo das metas anuais será instruído com memória e metodologia de cálculo, comparando-as com as fixadas nos três exercícios anteriores.","C","FCC","Art. 4º, § 2º, II."],
  ["O Anexo de Metas Fiscais demonstrará a evolução do patrimônio líquido nos últimos cinco exercícios.","E","CESPE","São os <b>últimos três exercícios</b> (art. 4º, § 2º, III)."],
  ["O Anexo de Metas Fiscais destacará a origem e a aplicação dos recursos obtidos com a alienação de ativos.","C","VUNESP","Parte final do art. 4º, § 2º, III."],
  ["O Anexo de Metas Fiscais conterá avaliação da situação financeira e atuarial do regime geral de previdência social, do regime próprio dos servidores e do Fundo de Amparo ao Trabalhador.","C","FCC","Art. 4º, § 2º, IV, a."],
  ["O demonstrativo da estimativa e compensação da renúncia de receita e da margem de expansão das despesas obrigatórias de caráter continuado integra o Anexo de Metas Fiscais.","C","CESPE","Art. 4º, § 2º, V."],
  ["O Anexo de Riscos Fiscais avaliará os passivos contingentes e outros riscos capazes de afetar as contas públicas, informando as providências a serem tomadas caso se concretizem.","C","FGV","Art. 4º, § 3º."],
  ["O Anexo de Riscos Fiscais integra o projeto de lei orçamentária anual.","E","FCC","Integra a <b>LDO</b>, como o Anexo de Metas Fiscais."],
  ["A mensagem que encaminhar o projeto de LDO da União apresentará, em anexo, os objetivos das políticas monetária, creditícia e cambial e as metas de inflação para o exercício subsequente.","C","VUNESP","Art. 4º, § 4º."],
  ["A lei orçamentária anual será elaborada de forma compatível com o plano plurianual, com a lei de diretrizes orçamentárias e com a Lei de Responsabilidade Fiscal.","C","CESPE","Art. 5º, caput."],
  ["A lei orçamentária anual conterá demonstrativo da compatibilidade da programação dos orçamentos com os objetivos e metas do Anexo de Metas Fiscais.","C","FCC","Art. 5º, I."],
  ["A reserva de contingência é consignada na lei orçamentária anual, com forma de utilização e montante estabelecidos na lei de diretrizes orçamentárias.","C","FGV","Art. 5º, III — e o montante é definido com base na receita corrente líquida."],
  ["O montante da reserva de contingência é definido com base na receita corrente líquida.","C","CESPE","Art. 5º, III."],
  ["A reserva de contingência destina-se ao atendimento de passivos contingentes e outros riscos e eventos fiscais imprevistos.","C","VUNESP","Faz a ponte com o Anexo de Riscos Fiscais."],
  ["Apenas as despesas relativas à dívida mobiliária constarão da lei orçamentária anual.","E","FCC","O art. 5º, § 1º, alcança a dívida <b>mobiliária ou contratual</b>, e também as receitas que as atenderão."],
  ["O refinanciamento da dívida pública constará separadamente na lei orçamentária anual e nas de créditos adicionais.","C","CESPE","Art. 5º, § 2º."],
  ["A atualização monetária do principal da dívida mobiliária refinanciada não poderá superar a variação do índice de preços previsto na lei de diretrizes orçamentárias.","C","FGV","Art. 5º, § 3º — ou em legislação específica."],
  ["É vedado consignar na lei orçamentária crédito com finalidade imprecisa ou com dotação ilimitada.","C","FCC","Art. 5º, § 4º — que dialoga com o art. 167, VII, da CF."],
  ["A lei orçamentária anual pode consignar dotação para investimento com duração superior a um exercício financeiro ainda que não previsto no plano plurianual.","E","CESPE","Art. 5º, § 5º: só se estiver previsto no PPA ou em lei que autorize sua inclusão."],
  ["Integrarão as despesas da União, e serão incluídas na lei orçamentária, as do Banco Central do Brasil relativas a pessoal e encargos sociais, custeio administrativo e investimentos.","C","VUNESP","Art. 5º, § 6º."],
  ["O resultado do Banco Central do Brasil, apurado após a constituição ou reversão de reservas, constitui receita do Tesouro Nacional.","C","FCC","Art. 7º, caput — transferido até o décimo dia útil subsequente à aprovação dos balanços semestrais."],
  ["O resultado negativo do Banco Central do Brasil constituirá obrigação do Tesouro e será consignado em dotação específica no orçamento.","C","CESPE","Art. 7º, § 1º."],
  ["A programação financeira e o cronograma de execução mensal de desembolso serão estabelecidos até trinta dias após a publicação dos orçamentos.","C","FGV","Art. 8º — e por ato do Poder Executivo, não pela LOA."],
  ["Os recursos legalmente vinculados a finalidade específica serão utilizados exclusivamente para atender ao objeto de sua vinculação, ainda que em exercício diverso daquele em que ocorrer o ingresso.","C","FCC","Parágrafo único do art. 8º."],
  ["Verificado ao final de um semestre que a realização da receita poderá não comportar o cumprimento das metas de resultado primário ou nominal, promover-se-á a limitação de empenho.","E","CESPE","A verificação é <b>ao final de um bimestre</b> (art. 9º, caput)."],
  ["A limitação de empenho e movimentação financeira será promovida pelos Poderes e pelo Ministério Público, por ato próprio, nos trinta dias subsequentes.","C","VUNESP","Art. 9º, caput, segundo os critérios fixados pela LDO."],
  ["A limitação de empenho compete exclusivamente ao Poder Executivo, que a impõe aos demais Poderes.","E","FCC","Cada Poder e o MP promovem a sua <b>por ato próprio</b>; a imposição pelo Executivo foi declarada inconstitucional na ADI 2.238."],
  ["Restabelecida a receita prevista, ainda que parcialmente, a recomposição das dotações limitadas dar-se-á de forma proporcional às reduções efetivadas.","C","CESPE","Art. 9º, § 1º."],
  ["Não serão objeto de limitação as despesas que constituam obrigações constitucionais e legais do ente, inclusive as destinadas ao pagamento do serviço da dívida.","C","FGV","Art. 9º, § 2º — além das ressalvadas pela LDO."],
  ["As despesas destinadas ao pagamento do serviço da dívida podem ser objeto de limitação de empenho.","E","FCC","São expressamente ressalvadas pelo art. 9º, § 2º."],
  ["O § 3º do art. 9º da LRF, que autorizava o Poder Executivo a limitar valores financeiros dos demais Poderes, foi declarado inconstitucional pelo Supremo Tribunal Federal.","C","CESPE","ADI 2.238 — violação à separação de Poderes."],
  ["Até o final dos meses de maio, setembro e fevereiro, o Poder Executivo demonstrará e avaliará o cumprimento das metas fiscais de cada quadrimestre, em audiência pública.","C","VUNESP","Art. 9º, § 4º — meses seguintes ao fechamento de cada quadrimestre."],
  ["A avaliação do cumprimento das metas fiscais é feita semestralmente, nos meses de julho e janeiro.","E","FCC","É <b>quadrimestral</b>, até o final de maio, setembro e fevereiro."],
  ["A execução orçamentária e financeira identificará os beneficiários de pagamento de sentenças judiciais, para fins de observância da ordem cronológica do art. 100 da Constituição.","C","CESPE","Art. 10 da LRF."],
  ["A limitação de empenho abrange tanto o empenho quanto a movimentação financeira.","C","FGV","O art. 9º trata de “limitação de empenho e movimentação financeira”, conjuntamente."]
];

var FEY = {
  I1:{ask:"Explique a lei de diretrizes orçamentárias na LRF e seus dois anexos.",
    hint:"Diga primeiro sobre o que a LDO dispõe. Depois o Anexo de Metas Fiscais, com os cinco conteúdos, e o Anexo de Riscos Fiscais.",
    ref:"Nos termos do art. 4º da Lei de Responsabilidade Fiscal, a lei de diretrizes orçamentárias, além do previsto no art. 165, § 2º, da Constituição, disporá sobre o equilíbrio entre receitas e despesas, os critérios e a forma de limitação de empenho, as normas relativas ao controle de custos e à avaliação dos resultados dos programas financiados com recursos dos orçamentos e as demais condições e exigências para transferências de recursos a entidades públicas e privadas. Integrará o projeto de lei de diretrizes orçamentárias o Anexo de Metas Fiscais, em que serão estabelecidas metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública, para o exercício a que se referirem e para os dois seguintes. Esse anexo conterá a avaliação do cumprimento das metas do ano anterior; o demonstrativo das metas anuais, instruído com memória e metodologia de cálculo e comparado com as fixadas nos três exercícios anteriores; a evolução do patrimônio líquido, também nos últimos três exercícios, destacando a origem e a aplicação dos recursos obtidos com a alienação de ativos; a avaliação da situação financeira e atuarial dos regimes de previdência, do Fundo de Amparo ao Trabalhador e dos demais fundos públicos e programas estatais de natureza atuarial; e o demonstrativo da estimativa e compensação da renúncia de receita e da margem de expansão das despesas obrigatórias de caráter continuado. A lei de diretrizes conterá ainda o Anexo de Riscos Fiscais, no qual serão avaliados os passivos contingentes e outros riscos capazes de afetar as contas públicas, informando-se as providências a serem tomadas caso se concretizem."},
  I2:{ask:"Explique as exigências que a LRF impõe à lei orçamentária anual.",
    hint:"Compatibilidade, os três incisos do art. 5º e os parágrafos sobre dívida, crédito impreciso e investimento plurianual.",
    ref:"Conforme o art. 5º da Lei de Responsabilidade Fiscal, o projeto de lei orçamentária anual será elaborado de forma compatível com o plano plurianual, com a lei de diretrizes orçamentárias e com a própria lei complementar. Conterá demonstrativo da compatibilidade da programação dos orçamentos com os objetivos e metas do Anexo de Metas Fiscais; será acompanhado do documento a que se refere o art. 165, § 6º, da Constituição, bem como das medidas de compensação a renúncias de receita e ao aumento de despesas obrigatórias de caráter continuado; e conterá reserva de contingência, cuja forma de utilização e montante, definido com base na receita corrente líquida, serão estabelecidos na lei de diretrizes orçamentárias, destinada ao atendimento de passivos contingentes e outros riscos e eventos fiscais imprevistos. Todas as despesas relativas à dívida pública, mobiliária ou contratual, e as receitas que as atenderão constarão da lei orçamentária anual, devendo o refinanciamento da dívida figurar separadamente nela e nas leis de créditos adicionais, e a atualização monetária do principal da dívida mobiliária refinanciada não poderá superar a variação do índice de preços previsto na lei de diretrizes orçamentárias. É vedado, por fim, consignar na lei orçamentária crédito com finalidade imprecisa ou com dotação ilimitada, bem como dotação para investimento com duração superior a um exercício financeiro que não esteja previsto no plano plurianual ou em lei que autorize a sua inclusão."},
  I3:{ask:"Explique a programação financeira do art. 8º e a limitação de empenho do art. 9º.",
    hint:"Prazo e conteúdo do art. 8º e a regra dos recursos vinculados. No art. 9º: gatilho, prazo, quem promove, ressalvas e o que o STF decidiu.",
    ref:"Nos termos do art. 8º da Lei de Responsabilidade Fiscal, até trinta dias após a publicação dos orçamentos, na forma da lei de diretrizes orçamentárias, o Poder Executivo estabelecerá a programação financeira e o cronograma de execução mensal de desembolso — razão pela qual esses instrumentos não constam da própria lei orçamentária. Seu parágrafo único acrescenta que os recursos legalmente vinculados a finalidade específica serão utilizados exclusivamente para atender ao objeto de sua vinculação, ainda que em exercício diverso daquele em que ocorrer o ingresso. Já o art. 9º dispõe que, se verificado ao final de um bimestre que a realização da receita poderá não comportar o cumprimento das metas de resultado primário ou nominal estabelecidas no Anexo de Metas Fiscais, os Poderes e o Ministério Público promoverão, por ato próprio e nos montantes necessários, nos trinta dias subsequentes, limitação de empenho e movimentação financeira, segundo os critérios fixados pela lei de diretrizes orçamentárias. Restabelecida a receita prevista, ainda que parcialmente, a recomposição das dotações cujos empenhos foram limitados dar-se-á de forma proporcional às reduções efetivadas, e não serão objeto de limitação as despesas que constituam obrigações constitucionais e legais do ente, inclusive as destinadas ao pagamento do serviço da dívida, e as ressalvadas pela lei de diretrizes. Registre-se que o § 3º do art. 9º, que autorizava o Poder Executivo a limitar os valores financeiros dos demais Poderes e do Ministério Público em caso de omissão destes, foi declarado inconstitucional pelo Supremo Tribunal Federal na ADI 2.238, por afronta à separação de Poderes."},
  I4:{ask:"Explique o controle do cumprimento das metas fiscais e a regra do art. 10.",
    hint:"O calendário das audiências públicas, por que esses meses, e a razão de ser do art. 10.",
    ref:"O art. 9º, § 4º, da Lei de Responsabilidade Fiscal determina que, até o final dos meses de maio, setembro e fevereiro, o Poder Executivo demonstrará e avaliará o cumprimento das metas fiscais de cada quadrimestre, em audiência pública na comissão mista permanente de que trata o art. 166, § 1º, da Constituição, ou equivalente nas Casas Legislativas estaduais e municipais. Os meses escolhidos correspondem ao mês seguinte ao encerramento de cada quadrimestre — abril, agosto e dezembro —, de modo que a avaliação é quadrimestral, e não semestral. Trata-se de instrumento de transparência e de controle externo concomitante, que permite ao Legislativo acompanhar a execução antes do encerramento do exercício. Complementa esse desenho o art. 10, segundo o qual a execução orçamentária e financeira identificará os beneficiários de pagamento de sentenças judiciais, por meio de sistema de contabilidade e administração financeira, para fins de observância da ordem cronológica determinada no art. 100 da Constituição Federal, assegurando-se a impessoalidade no pagamento de precatórios."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  J1:[
    sl("O art. 3º foi vetado",
      '<div class="box trap"><span class="bl">Detalhe que cai solto</span>'+
      '<p>O <b>art. 3º da LRF</b>, que tratava do <b>plano plurianual</b>, foi <b>integralmente vetado</b>. Por isso a LRF <b>não disciplina o PPA</b> — quem o faz é a Constituição (art. 165, § 1º) e, quanto ao que falta, a Lei nº 4.320/1964 e a própria LDO.</p></div>'+
      '<div class="box tip"><span class="bl">Outros vetos do mesmo bloco</span><p>Também foram vetados o <b>art. 6º</b> e o <b>§ 7º do art. 5º</b>. Quando a questão numerar dispositivos, confira se o artigo realmente existe.</p></div>'),
    sl("Art. 4º — sobre o que a LDO dispõe",
      '<div class="box"><span class="bl">Além do art. 165, § 2º, da CF, a LDO disporá sobre</span>'+
      '<ul><li><b>a)</b> <b>equilíbrio entre receitas e despesas</b>;</li>'+
      '<li><b>b)</b> <b>critérios e forma de limitação de empenho</b>, a ser efetivada nas hipóteses dos arts. 9º e 31, § 1º, II;</li>'+
      '<li><b>e)</b> <b>normas relativas ao controle de custos e à avaliação dos resultados</b> dos programas financiados com recursos dos orçamentos;</li>'+
      '<li><b>f)</b> demais <b>condições e exigências para transferências de recursos a entidades públicas e privadas</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">O erro clássico</span><p>Atribuir à <b>LOA</b> os critérios de limitação de empenho. É a <b>LDO</b> que os fixa — e é o art. 9º que manda aplicá-los.</p></div>'),
    sl("Anexo de Metas Fiscais",
      '<div class="box"><span class="bl">Art. 4º, § 1º e § 2º</span>'+
      '<p>Integra o <b>projeto de LDO</b>. Estabelece <b>metas anuais</b>, em <b>valores correntes e constantes</b>, relativas a <b>receitas, despesas, resultados nominal e primário e montante da dívida pública</b>, para o <b>exercício a que se referirem e para os dois seguintes</b>.</p></div>'+
      '<div class="box"><span class="bl">Os cinco conteúdos do § 2º</span>'+
      '<ul><li><b>I</b> — <b>avaliação do cumprimento das metas</b> do ano anterior;</li>'+
      '<li><b>II</b> — <b>demonstrativo das metas anuais</b>, com <b>memória e metodologia de cálculo</b>, comparadas com as dos <b>três exercícios anteriores</b> e consistentes com a política econômica nacional;</li>'+
      '<li><b>III</b> — <b>evolução do patrimônio líquido</b>, nos <b>últimos três exercícios</b>, destacando <b>origem e aplicação dos recursos da alienação de ativos</b>;</li>'+
      '<li><b>IV</b> — <b>avaliação da situação financeira e atuarial</b> do RGPS, do RPPS e do <b>FAT</b>, e dos demais <b>fundos públicos e programas estatais de natureza atuarial</b>;</li>'+
      '<li><b>V</b> — <b>demonstrativo da estimativa e compensação da renúncia de receita</b> e da <b>margem de expansão das despesas obrigatórias de caráter continuado</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Os números que a banca troca</span><p><b>Metas</b>: exercício + <b>2</b> seguintes. <b>Comparações e patrimônio líquido</b>: <b>3</b> exercícios anteriores.</p></div>'),
    sl("Anexo de Riscos Fiscais",
      '<div class="box"><span class="bl">Art. 4º, § 3º</span><p>A LDO conterá Anexo de Riscos Fiscais, onde serão <b>avaliados os passivos contingentes e outros riscos capazes de afetar as contas públicas</b>, <b>informando as providências a serem tomadas, caso se concretizem</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Metas Fiscais</span><span class="cd">O que se <b>pretende alcançar</b>: receitas, despesas, resultados e dívida.</span></div>'+
      '<div class="chip"><span class="cn">Riscos Fiscais</span><span class="cd">O que pode <b>dar errado</b>: passivos contingentes — e o plano B.</span></div></div>'+
      '<div class="box"><span class="bl">Art. 4º, § 4º — só na União</span><p>A mensagem que encaminhar o projeto de LDO da União apresentará, em anexo, os <b>objetivos das políticas monetária, creditícia e cambial</b>, os <b>parâmetros e projeções</b> de seus agregados e as <b>metas de inflação</b> para o exercício subsequente.</p></div>'+
      '<div class="box trap"><span class="bl">Ponte com a LOA</span><p>O Anexo de Riscos Fiscais é o gêmeo da <b>reserva de contingência</b> do art. 5º, III: um <b>identifica</b> o risco, a outra <b>reserva o dinheiro</b> para ele.</p></div>')
  ],
  J2:[
    sl("Art. 5º — o que a LOA deve conter",
      '<p>O projeto de LOA será elaborado <span class="key">de forma compatível com o PPA, com a LDO e com a própria LRF</span>.</p>'+
      '<div class="box"><span class="bl">Os três incisos</span>'+
      '<ul><li><b>I</b> — <b>demonstrativo da compatibilidade</b> da programação com os objetivos e metas do <b>Anexo de Metas Fiscais</b>;</li>'+
      '<li><b>II</b> — será acompanhado do documento do <b>art. 165, § 6º, da CF</b> (efeito regionalizado de isenções, anistias, remissões, subsídios e benefícios) e das <b>medidas de compensação</b> a renúncias de receita e ao aumento de despesas obrigatórias de caráter continuado;</li>'+
      '<li><b>III</b> — <b>reserva de contingência</b>, cuja <b>forma de utilização e montante</b> — este definido <b>com base na RCL</b> — <b>serão estabelecidos na LDO</b>, destinada a <b>passivos contingentes e outros riscos e eventos fiscais imprevistos</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Quem define o quê na reserva de contingência</span>'+
      '<ul><li><b>Onde ela aparece:</b> na <b>LOA</b>;</li>'+
      '<li><b>Quem fixa forma e montante:</b> a <b>LDO</b>;</li>'+
      '<li><b>Base de cálculo do montante:</b> a <b>RCL</b>.</li></ul></div>'),
    sl("Art. 5º — as vedações e a dívida",
      '<div class="box"><span class="bl">§§ 1º a 3º — dívida</span>'+
      '<ul><li><b>Todas</b> as despesas relativas à dívida pública, <b>mobiliária ou contratual</b>, e as <b>receitas que as atenderão</b>, constarão da LOA;</li>'+
      '<li>O <b>refinanciamento</b> da dívida constará <b>separadamente</b> na LOA e nas de créditos adicionais;</li>'+
      '<li>A <b>atualização monetária do principal</b> da dívida mobiliária refinanciada <b>não poderá superar a variação do índice de preços previsto na LDO</b>, ou em legislação específica.</li></ul></div>'+
      '<div class="box trap"><span class="bl">§ 4º e § 5º — duas vedações</span>'+
      '<ul><li>É vedado consignar na LOA <b>crédito com finalidade imprecisa ou com dotação ilimitada</b>;</li>'+
      '<li>A LOA <b>não consignará dotação para investimento com duração superior a um exercício</b> que <b>não esteja previsto no PPA</b> ou em lei que autorize sua inclusão.</li></ul>'+
      '<p>A primeira é a face legal do <b>art. 167, VII, da CF</b>; a segunda, do <b>art. 167, § 1º</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 6º — Banco Central</span><p>Integrarão as despesas da União, e serão incluídas na LOA, as do <b>Banco Central</b> relativas a <b>pessoal e encargos sociais</b>, <b>custeio administrativo</b> (inclusive benefícios e assistência aos servidores) e <b>investimentos</b>.</p></div>'),
    sl("Art. 7º — o resultado do Banco Central",
      '<div class="box"><span class="bl">Caput</span><p>O resultado do Banco Central, apurado <b>após a constituição ou reversão de reservas</b>, constitui <b>receita do Tesouro Nacional</b>, e será transferido <b>até o décimo dia útil subsequente à aprovação dos balanços semestrais</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 1º</span><p>O <b>resultado negativo</b> constituirá <b>obrigação do Tesouro</b> para com o Banco Central e será consignado em <b>dotação específica no orçamento</b>.</p></div>'+
      '<div class="box"><span class="bl">§§ 2º e 3º</span>'+
      '<ul><li>O <b>impacto e o custo fiscal</b> das operações do Banco Central serão demonstrados <b>trimestralmente</b>, nos termos da LDO da União;</li>'+
      '<li>Os <b>balanços trimestrais</b> conterão <b>notas explicativas</b> sobre os custos da remuneração das disponibilidades do Tesouro, da manutenção das reservas cambiais e a rentabilidade da carteira de títulos, destacando os de emissão da União.</li></ul></div>')
  ],
  J3:[
    sl("Art. 8º — programação financeira",
      '<div class="box"><span class="bl">Caput</span><p><b>Até trinta dias após a publicação dos orçamentos</b>, nos termos da LDO, o <b>Poder Executivo</b> estabelecerá a <b>programação financeira</b> e o <b>cronograma de execução mensal de desembolso</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Não é a LOA que os traz</span><p>Esses dois instrumentos <b>não constam da lei orçamentária</b>: são fixados por <b>ato do Executivo</b>, em até 30 dias. Item que os coloque dentro da LOA é falso.</p></div>'+
      '<div class="box"><span class="bl">Parágrafo único — recursos vinculados</span>'+
      '<p>Os recursos legalmente vinculados a finalidade específica serão utilizados <b>exclusivamente</b> para atender ao objeto de sua vinculação, <b>ainda que em exercício diverso</b> daquele em que ocorrer o ingresso.</p></div>'+
      '<div class="box tip"><span class="bl">Leitura prática</span><p>Sobrou recurso vinculado no fim do ano? Ele <b>não vira recurso livre</b> no exercício seguinte — continua preso à sua finalidade.</p></div>'),
    sl("Art. 9º — limitação de empenho",
      '<div class="box"><span class="bl">O gatilho</span><p>Se verificado, <b>ao final de um bimestre</b>, que a realização da receita poderá <b>não comportar o cumprimento das metas de resultado primário ou nominal</b> do Anexo de Metas Fiscais…</p></div>'+
      '<div class="box"><span class="bl">A providência</span>'+
      '<ul><li><b>Quem:</b> os <b>Poderes</b> e o <b>Ministério Público</b>, <b>por ato próprio</b>;</li>'+
      '<li><b>Quanto:</b> nos <b>montantes necessários</b>;</li>'+
      '<li><b>Quando:</b> nos <b>trinta dias subsequentes</b>;</li>'+
      '<li><b>Como:</b> <b>limitação de empenho e movimentação financeira</b>, segundo os critérios fixados pela <b>LDO</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">§ 1º — recomposição</span><p>Restabelecida a receita prevista, <b>ainda que parcial</b>, a recomposição das dotações limitadas dar-se-á <b>de forma proporcional às reduções efetivadas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">§ 2º — o que não se limita</span>'+
      '<ul><li>Despesas que constituam <b>obrigações constitucionais e legais</b> do ente;</li>'+
      '<li><b>Inclusive</b> as destinadas ao <b>pagamento do serviço da dívida</b>;</li>'+
      '<li>As <b>ressalvadas pela LDO</b>.</li></ul></div>'),
    sl("O § 3º e a ADI 2.238",
      '<div class="box trap"><span class="bl">Dispositivo fora do ordenamento</span>'+
      '<p>O <b>§ 3º do art. 9º</b> autorizava o <b>Poder Executivo</b> a limitar os valores financeiros dos demais Poderes e do MP, caso estes não promovessem a limitação no prazo. O <b>STF declarou o dispositivo inconstitucional</b> na <b>ADI 2.238</b>, por violação à <b>separação de Poderes</b> e à autonomia financeira assegurada pelo art. 168 da CF.</p></div>'+
      '<div class="box tip"><span class="bl">Como isso cai</span><p>A questão descreve o Executivo <b>impondo</b> o corte aos demais Poderes e pede se é válido. <b>Não é.</b> Cada Poder limita por <b>ato próprio</b>.</p></div>'),
    sl("Controle das metas e sentenças judiciais",
      '<div class="box"><span class="bl">Art. 9º, § 4º — audiência pública quadrimestral</span>'+
      '<p><b>Até o final dos meses de maio, setembro e fevereiro</b>, o Poder Executivo demonstrará e avaliará o cumprimento das <b>metas fiscais de cada quadrimestre</b>, em <b>audiência pública</b> na comissão do art. 166, § 1º, da CF ou equivalente nas Casas Legislativas estaduais e municipais.</p></div>'+
      '<div class="box tip"><span class="bl">Por que esses meses</span><p>Os quadrimestres fecham em <b>abril, agosto e dezembro</b> — a avaliação vem sempre no <b>mês seguinte</b>. Logo: <b>maio, setembro e fevereiro</b>. É quadrimestral, não semestral.</p></div>'+
      '<div class="box"><span class="bl">Art. 9º, § 5º — Banco Central</span><p>No prazo de <b>noventa dias após o encerramento de cada semestre</b>, o Banco Central apresentará ao Congresso avaliação do cumprimento dos objetivos e metas das políticas monetária, creditícia e cambial.</p></div>'+
      '<div class="box"><span class="bl">Art. 10 — precatórios</span><p>A execução orçamentária e financeira <b>identificará os beneficiários de pagamento de sentenças judiciais</b>, por sistema de contabilidade e administração financeira, para observância da <b>ordem cronológica do art. 100 da CF</b>.</p></div>')
  ]
};

var EX = {
G1:{t:"mc", instr:"O art. 3º da LRF, que tratava do plano plurianual:",
  options:["Foi integralmente vetado","Foi revogado pela EC 109/2021",
           "Continua em vigor","Foi declarado inconstitucional pelo STF"],
  answer:0,
  why:"Por isso a LRF não disciplina o PPA."},

G2:{t:"multi", instr:"Marque sobre o que a LDO disporá, segundo o art. 4º, I",
  options:["Equilíbrio entre receitas e despesas",
           "Critérios e forma de limitação de empenho",
           "Normas relativas ao controle de custos e à avaliação dos resultados dos programas",
           "Condições e exigências para transferências de recursos a entidades públicas e privadas",
           "Fixação da despesa e previsão da receita do exercício",
           "Abertura de créditos extraordinários"],
  answers:[0,1,2,3],
  why:"Fixar despesa e prever receita é da <b>LOA</b>; crédito extraordinário é outra matéria."},

G3:{t:"gap", instr:"Complete a frase",
  before:"Os critérios e a forma de limitação de empenho serão fixados ", after:".",
  options:["na lei de diretrizes orçamentárias","na lei orçamentária anual","no plano plurianual"],
  answer:0,
  why:"Art. 4º, I, b — e o art. 9º manda aplicá-los."},

G4:{t:"match", instr:"Correlacione o anexo ao seu conteúdo",
  pairs:[["Anexo de Metas Fiscais","Metas de receitas, despesas, resultados e dívida"],
         ["Anexo de Riscos Fiscais","Passivos contingentes e providências se ocorrerem"]]},

G5:{t:"gap", instr:"Complete a frase",
  before:"O Anexo de Metas Fiscais estabelece metas para o exercício a que se referirem e ", after:".",
  options:["para os dois seguintes","para os três seguintes","para o seguinte"],
  answer:0,
  why:"Três exercícios ao todo — art. 4º, § 1º."},

G6:{t:"multi", instr:"Marque o conteúdo do Anexo de Metas Fiscais (art. 4º, § 2º)",
  options:["Avaliação do cumprimento das metas do ano anterior",
           "Demonstrativo das metas anuais com memória e metodologia de cálculo",
           "Evolução do patrimônio líquido nos últimos três exercícios",
           "Avaliação da situação financeira e atuarial dos regimes de previdência e do FAT",
           "Demonstrativo da estimativa e compensação da renúncia de receita",
           "Avaliação dos passivos contingentes",
           "Programação financeira e cronograma de desembolso"],
  answers:[0,1,2,3,4],
  why:"Passivos contingentes são do <b>Anexo de Riscos</b>; programação financeira é do art. 8º."},

G7:{t:"sort", instr:"O prazo de comparação é de dois ou de três exercícios?",
  buckets:["Exercício + 2 seguintes","Três exercícios anteriores"],
  items:[["Metas anuais de receitas, despesas, resultados e dívida",0],
         ["Comparação do demonstrativo de metas",1],
         ["Evolução do patrimônio líquido",1]],
  why:"Olha para a frente: 2. Olha para trás: 3."},

G8:{t:"gap", instr:"Complete a frase",
  before:"O Anexo de Riscos Fiscais avaliará os passivos contingentes e outros riscos capazes de afetar as contas públicas, ",
  after:".",
  options:["informando as providências a serem tomadas, caso se concretizem",
           "vedando a abertura de créditos adicionais",
           "fixando o montante da reserva de contingência"],
  answer:0,
  why:"Art. 4º, § 3º — o anexo identifica o risco e aponta o plano B."},

G9:{t:"mc", instr:"A mensagem que encaminha o projeto de LDO da União apresentará em anexo:",
  options:["Objetivos das políticas monetária, creditícia e cambial e metas de inflação",
           "O demonstrativo da dívida consolidada líquida",
           "O relatório de gestão fiscal do exercício anterior",
           "O plano plurianual revisado"],
  answer:0,
  why:"Art. 4º, § 4º — regra exclusiva da União."},

G10:{t:"multi", instr:"Marque o que a LOA deve conter ou de que deve ser acompanhada (art. 5º)",
  options:["Demonstrativo da compatibilidade com os objetivos e metas do Anexo de Metas Fiscais",
           "Documento do art. 165, § 6º, da CF",
           "Medidas de compensação a renúncias de receita",
           "Reserva de contingência",
           "Anexo de Riscos Fiscais",
           "Critérios de limitação de empenho"],
  answers:[0,1,2,3],
  why:"Os dois últimos pertencem à <b>LDO</b>."},

G11:{t:"sort", instr:"Cada elemento pertence a qual lei?",
  buckets:["LDO","LOA"],
  items:[["Anexo de Metas Fiscais",0],["Anexo de Riscos Fiscais",0],
         ["Critérios de limitação de empenho",0],
         ["Forma de utilização e montante da reserva de contingência",0],
         ["A reserva de contingência propriamente dita",1],
         ["Demonstrativo de compatibilidade com as metas",1],
         ["Despesas com a dívida pública e as receitas que as atenderão",1]],
  why:"A LDO <b>define as regras</b>; a LOA <b>consigna os valores</b>."},

G12:{t:"gap", instr:"Complete a frase",
  before:"O montante da reserva de contingência será definido com base ", after:", e estabelecido na LDO.",
  options:["na receita corrente líquida","na receita total prevista","no superávit financeiro"],
  answer:0,
  why:"Art. 5º, III — mais uma aplicação da RCL como base de cálculo."},

G13:{t:"multi", instr:"Marque o que consta obrigatoriamente da LOA quanto à dívida (art. 5º, §§ 1º a 3º)",
  options:["Todas as despesas relativas à dívida mobiliária",
           "Todas as despesas relativas à dívida contratual",
           "As receitas que atenderão a essas despesas",
           "O refinanciamento da dívida, separadamente",
           "A autorização para operações de crédito por antecipação de receita",
           "O limite de endividamento fixado pelo Senado"],
  answers:[0,1,2,3],
  why:"Os dois últimos não são exigências do art. 5º."},

G14:{t:"mc", instr:"É vedado consignar na lei orçamentária:",
  options:["Crédito com finalidade imprecisa ou com dotação ilimitada",
           "Reserva de contingência","Despesas com a dívida contratual",
           "Dotação para o Banco Central"],
  answer:0,
  why:"Art. 5º, § 4º — face legal do art. 167, VII, da CF."},

G15:{t:"gap", instr:"Complete a frase",
  before:"A LOA não consignará dotação para investimento com duração superior a um exercício financeiro que não esteja previsto ",
  after:" ou em lei que autorize a sua inclusão.",
  options:["no plano plurianual","na LDO","no Anexo de Metas Fiscais"],
  answer:0,
  why:"Art. 5º, § 5º — o espelho do art. 167, § 1º, da CF."},

G16:{t:"mc", instr:"O resultado positivo do Banco Central do Brasil constitui:",
  options:["Receita do Tesouro Nacional","Reserva do próprio Banco Central",
           "Receita extraorçamentária da União","Superávit financeiro da autarquia"],
  answer:0,
  why:"Art. 7º — transferido até o 10º dia útil após a aprovação dos balanços semestrais."},

G17:{t:"mc", instr:"O resultado negativo do Banco Central do Brasil:",
  options:["Constitui obrigação do Tesouro e é consignado em dotação específica",
           "É absorvido pelas reservas do próprio Banco Central",
           "É compensado no exercício seguinte, sem registro orçamentário",
           "Constitui dívida flutuante da União"],
  answer:0,
  why:"Art. 7º, § 1º."},

G18:{t:"gap", instr:"Complete a frase",
  before:"Até ", after:" após a publicação dos orçamentos, o Poder Executivo estabelecerá a programação financeira e o cronograma de execução mensal de desembolso.",
  options:["trinta dias","sessenta dias","quinze dias"], answer:0,
  why:"Art. 8º — e por ato do Executivo, não pela LOA."},

G19:{t:"multi", instr:"Marque o que é correto sobre os recursos legalmente vinculados (art. 8º, parágrafo único)",
  options:["Serão utilizados exclusivamente para atender ao objeto de sua vinculação",
           "A regra vale ainda que em exercício diverso do ingresso",
           "O saldo não aplicado permanece vinculado",
           "Tornam-se recursos livres no exercício seguinte",
           "Podem ser remanejados por decreto do Executivo"],
  answers:[0,1,2],
  why:"A vinculação atravessa o exercício — é justamente o que o parágrafo único diz."},

G20:{t:"gap", instr:"Complete a frase",
  before:"Se verificado, ao final de um ", after:", que a receita poderá não comportar o cumprimento das metas, promover-se-á a limitação de empenho.",
  options:["bimestre","semestre","quadrimestre"], answer:0,
  why:"Art. 9º, caput — o gatilho é <b>bimestral</b>."},

G21:{t:"multi", instr:"Marque o que é correto sobre a limitação de empenho (art. 9º)",
  options:["É promovida pelos Poderes e pelo Ministério Público, por ato próprio",
           "Ocorre nos trinta dias subsequentes",
           "Segue os critérios fixados pela LDO",
           "Alcança empenho e movimentação financeira",
           "É imposta pelo Poder Executivo aos demais Poderes",
           "Alcança as despesas com o serviço da dívida"],
  answers:[0,1,2,3],
  why:"A imposição pelo Executivo caiu na ADI 2.238, e o serviço da dívida é ressalvado pelo § 2º."},

G22:{t:"order", instr:"Ordene a sequência do art. 9º",
  items:["Ao final do bimestre, verifica-se risco às metas de resultado",
         "Cada Poder e o MP promovem, por ato próprio, a limitação",
         "O prazo é de trinta dias subsequentes",
         "Restabelecida a receita, recompõem-se as dotações proporcionalmente"],
  why:"Gatilho → providência → prazo → recomposição."},

G23:{t:"multi", instr:"Marque as despesas que NÃO podem ser objeto de limitação de empenho",
  options:["Obrigações constitucionais do ente","Obrigações legais do ente",
           "Despesas destinadas ao pagamento do serviço da dívida",
           "Despesas ressalvadas pela LDO",
           "Despesas discricionárias de custeio",
           "Investimentos não iniciados"],
  answers:[0,1,2,3],
  why:"Art. 9º, § 2º — as duas últimas são exatamente o alvo preferencial do corte."},

G24:{t:"mc", instr:"O § 3º do art. 9º da LRF, que autorizava o Executivo a limitar valores dos demais Poderes:",
  options:["Foi declarado inconstitucional pelo STF na ADI 2.238",
           "Continua válido, desde que previsto na LDO",
           "Foi revogado pela EC 109/2021",
           "Aplica-se apenas aos Municípios"],
  answer:0,
  why:"Violação à separação de Poderes e à autonomia financeira do art. 168 da CF."},

G25:{t:"gap", instr:"Complete a frase",
  before:"Restabelecida a receita prevista, ainda que parcial, a recomposição das dotações limitadas dar-se-á ",
  after:".",
  options:["de forma proporcional às reduções efetivadas","integralmente e de uma só vez",
           "a critério do ordenador de despesas"],
  answer:0,
  why:"Art. 9º, § 1º."},

G26:{t:"multi", instr:"Marque os meses em que o Executivo avalia o cumprimento das metas fiscais",
  options:["Maio","Setembro","Fevereiro","Janeiro","Julho","Dezembro"],
  answers:[0,1,2],
  why:"Art. 9º, § 4º — mês seguinte ao fechamento de cada quadrimestre."},

G27:{t:"match", instr:"Correlacione o quadrimestre ao mês da audiência pública",
  pairs:[["Janeiro a abril","Até o final de maio"],
         ["Maio a agosto","Até o final de setembro"],
         ["Setembro a dezembro","Até o final de fevereiro"]]},

G28:{t:"mc", instr:"A avaliação do cumprimento das metas fiscais em audiência pública é:",
  options:["Quadrimestral","Semestral","Bimestral","Anual"], answer:0,
  why:"Três audiências por ano — maio, setembro e fevereiro."},

G29:{t:"gap", instr:"Complete a frase",
  before:"A execução orçamentária e financeira identificará os beneficiários de pagamento de sentenças judiciais, para fins de observância da ",
  after:".",
  options:["ordem cronológica determinada no art. 100 da CF","reserva de contingência",
           "programação financeira do art. 8º"],
  answer:0,
  why:"Art. 10 da LRF — impessoalidade no pagamento de precatórios."},

G30:{t:"wordbank", instr:"Monte o gatilho da limitação de empenho (art. 9º)",
  target:["a","realização","da","receita","poderá","não","comportar","o","cumprimento","das","metas"],
  extra:["superávit","excesso","arrecadação"],
  why:"Metas de resultado <b>primário ou nominal</b> do Anexo de Metas Fiscais."},

G31:{t:"sort", instr:"Quem estabelece cada instrumento?",
  buckets:["Poder Executivo, por ato próprio","Cada Poder e o MP, por ato próprio","O Legislativo, por lei"],
  items:[["Programação financeira e cronograma de desembolso",0],
         ["Limitação de empenho e movimentação financeira",1],
         ["Critérios e forma da limitação de empenho",2]],
  why:"O Executivo programa o desembolso; cada Poder corta o seu; a LDO fixa as regras."},

G32:{t:"multi", instr:"Marque o que integra as despesas da União por força do art. 5º, § 6º",
  options:["Despesas do Banco Central com pessoal e encargos sociais",
           "Despesas do Banco Central com custeio administrativo",
           "Benefícios e assistência aos servidores do Banco Central",
           "Investimentos do Banco Central",
           "Operações de mercado aberto do Banco Central",
           "Resultado cambial do Banco Central"],
  answers:[0,1,2,3],
  why:"As operações e o resultado seguem o regime próprio do art. 7º."}
};

for(var i=0;i<QS.length;i++) EX["H"+i]={t:"ce", qi:i};

var KIT = {
  I1:{tema:"LDO, Anexo de Metas e Anexo de Riscos",
    bases:["LC nº 101/2000, art. 4º, caput e §§ 1º a 4º",
           "CF/1988, art. 165, § 2º — conteúdo constitucional da LDO",
           "CF/1988, art. 165, § 9º — lei complementar sobre exercício e elaboração",
           "Manual de Demonstrativos Fiscais — anexos da LDO"],
    ouro:["equilíbrio entre receitas e despesas","critérios e forma de limitação de empenho",
          "controle de custos e avaliação dos resultados","Anexo de Metas Fiscais",
          "valores correntes e constantes","resultados nominal e primário","montante da dívida pública",
          "memória e metodologia de cálculo","evolução do patrimônio líquido",
          "alienação de ativos","situação financeira e atuarial",
          "margem de expansão das despesas obrigatórias de caráter continuado",
          "Anexo de Riscos Fiscais","passivos contingentes"],
    abertura:"Nos termos do art. 4º da Lei de Responsabilidade Fiscal, a lei de diretrizes orçamentárias, além do previsto no art. 165, § 2º, da Constituição, disporá sobre o equilíbrio entre receitas e despesas e sobre os critérios e a forma de limitação de empenho, integrando o seu projeto o Anexo de Metas Fiscais e devendo conter o Anexo de Riscos Fiscais.",
    evite:"Não atribua à LOA os critérios de limitação de empenho nem os anexos de metas e de riscos: os três pertencem à <b>LDO</b>."},
  I2:{tema:"Exigências da LRF sobre a LOA",
    bases:["LC nº 101/2000, art. 5º, caput, incisos I a III e §§ 1º a 6º",
           "CF/1988, art. 165, § 6º — demonstrativo regionalizado de benefícios",
           "CF/1988, art. 167, VII e § 1º — créditos ilimitados e investimentos plurianuais",
           "LC nº 101/2000, art. 4º, § 3º — vínculo com o Anexo de Riscos"],
    ouro:["compatível com o plano plurianual, com a LDO e com esta lei complementar",
          "demonstrativo da compatibilidade","medidas de compensação",
          "reserva de contingência","definido com base na receita corrente líquida",
          "passivos contingentes e outros riscos e eventos fiscais imprevistos",
          "dívida pública, mobiliária ou contratual","refinanciamento separadamente",
          "finalidade imprecisa ou dotação ilimitada","investimento com duração superior a um exercício"],
    abertura:"O art. 5º da Lei de Responsabilidade Fiscal determina que o projeto de lei orçamentária anual seja elaborado de forma compatível com o plano plurianual, com a lei de diretrizes orçamentárias e com a própria lei complementar, contendo demonstrativo da compatibilidade da programação com os objetivos e metas do Anexo de Metas Fiscais e reserva de contingência destinada a passivos contingentes e outros riscos e eventos fiscais imprevistos.",
    evite:"Não diga que a LOA fixa o montante da reserva de contingência: ela a <b>consigna</b>, mas quem fixa forma e montante é a <b>LDO</b>, com base na RCL."},
  I3:{tema:"Programação financeira e limitação de empenho",
    bases:["LC nº 101/2000, art. 8º, caput e parágrafo único",
           "LC nº 101/2000, art. 9º, caput e §§ 1º, 2º, 4º e 5º",
           "STF, ADI 2.238 — inconstitucionalidade do art. 9º, § 3º",
           "CF/1988, art. 168 — autonomia financeira dos Poderes",
           "LC nº 101/2000, art. 31, § 1º, II — limitação por excesso de dívida"],
    ouro:["até trinta dias após a publicação dos orçamentos","programação financeira",
          "cronograma de execução mensal de desembolso","recursos legalmente vinculados",
          "ainda que em exercício diverso","ao final de um bimestre",
          "metas de resultado primário ou nominal","por ato próprio",
          "limitação de empenho e movimentação financeira","proporcional às reduções efetivadas",
          "obrigações constitucionais e legais","serviço da dívida","ressalvadas pela LDO"],
    abertura:"Verificado ao final de um bimestre que a realização da receita poderá não comportar o cumprimento das metas de resultado primário ou nominal estabelecidas no Anexo de Metas Fiscais, os Poderes e o Ministério Público promoverão, por ato próprio e nos montantes necessários, nos trinta dias subsequentes, limitação de empenho e movimentação financeira, segundo os critérios fixados pela lei de diretrizes orçamentárias.",
    evite:"Não sustente que o Poder Executivo pode impor a limitação aos demais Poderes: o § 3º do art. 9º foi <b>declarado inconstitucional na ADI 2.238</b>."},
  I4:{tema:"Controle das metas e pagamento de sentenças",
    bases:["LC nº 101/2000, art. 9º, §§ 4º e 5º",
           "LC nº 101/2000, art. 10 — beneficiários de sentenças judiciais",
           "CF/1988, art. 100 — ordem cronológica dos precatórios",
           "CF/1988, art. 166, § 1º — comissão mista permanente",
           "LC nº 101/2000, arts. 48 e 49 — transparência"],
    ouro:["até o final dos meses de maio, setembro e fevereiro",
          "metas fiscais de cada quadrimestre","audiência pública",
          "comissão mista permanente","noventa dias após o encerramento de cada semestre",
          "identificará os beneficiários de pagamento de sentenças judiciais",
          "ordem cronológica determinada no art. 100 da Constituição"],
    abertura:"Até o final dos meses de maio, setembro e fevereiro, o Poder Executivo demonstrará e avaliará o cumprimento das metas fiscais de cada quadrimestre, em audiência pública na comissão mista permanente de que trata o art. 166, § 1º, da Constituição, ou equivalente nas Casas Legislativas estaduais e municipais.",
    evite:"Não descreva a avaliação como semestral. São <b>três audiências por ano</b>, uma por quadrimestre, sempre no mês seguinte ao seu encerramento."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema com muitos números e prazos — o espelho confere cada um.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre o planejamento e o orçamento na Lei Complementar nº 101/2000, disserte necessariamente sobre:</p>'+
  '<ol><li>o conteúdo da lei de diretrizes orçamentárias e seus dois anexos;</li>'+
  '<li>as exigências impostas à lei orçamentária anual, com destaque para a reserva de contingência;</li>'+
  '<li>a limitação de empenho e movimentação financeira, incluindo o entendimento do Supremo Tribunal Federal sobre o § 3º do art. 9º.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A Lei de Responsabilidade Fiscal ampliou o conteúdo da <b>lei de diretrizes orçamentárias</b>. Além do previsto no art. 165, § 2º, da Constituição, o <b>art. 4º</b> determina que ela disponha sobre o <b>equilíbrio entre receitas e despesas</b>, sobre os <b>critérios e a forma de limitação de empenho</b>, sobre as <b>normas relativas ao controle de custos e à avaliação dos resultados</b> dos programas financiados com recursos dos orçamentos e sobre as demais <b>condições e exigências para transferências de recursos a entidades públicas e privadas</b>. Integra o seu projeto o <b>Anexo de Metas Fiscais</b>, no qual se estabelecem <b>metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública</b>, para o exercício a que se referirem e <b>para os dois seguintes</b>. Esse anexo contém a avaliação do cumprimento das metas do ano anterior; o demonstrativo das metas anuais, instruído com <b>memória e metodologia de cálculo</b> e comparado com as fixadas nos <b>três exercícios anteriores</b>; a <b>evolução do patrimônio líquido</b>, também nos últimos três exercícios, com destaque para a origem e a aplicação dos recursos obtidos com a <b>alienação de ativos</b>; a avaliação da <b>situação financeira e atuarial</b> dos regimes de previdência, do Fundo de Amparo ao Trabalhador e dos demais fundos e programas de natureza atuarial; e o demonstrativo da <b>estimativa e compensação da renúncia de receita</b> e da <b>margem de expansão das despesas obrigatórias de caráter continuado</b>. A LDO conterá, ainda, o <b>Anexo de Riscos Fiscais</b>, em que se avaliam os <b>passivos contingentes</b> e outros riscos capazes de afetar as contas públicas, informando-se as <b>providências a serem tomadas caso se concretizem</b>.</p>'+
  '<p>Quanto à <b>lei orçamentária anual</b>, o <b>art. 5º</b> exige que seja elaborada de forma compatível com o plano plurianual, com a lei de diretrizes e com a própria Lei de Responsabilidade Fiscal, devendo conter <b>demonstrativo da compatibilidade</b> da programação com os objetivos e metas do Anexo de Metas Fiscais e ser acompanhada do documento do art. 165, § 6º, da Constituição e das <b>medidas de compensação</b> a renúncias de receita e ao aumento de despesas obrigatórias de caráter continuado. Conterá, também, <b>reserva de contingência</b>, cuja <b>forma de utilização e montante — definido com base na receita corrente líquida — serão estabelecidos na lei de diretrizes orçamentárias</b>, destinada ao atendimento de <b>passivos contingentes e outros riscos e eventos fiscais imprevistos</b>. Note-se a repartição: a LDO fixa a regra e o valor, a LOA consigna a dotação, e o parâmetro é a RCL. Todas as despesas relativas à <b>dívida pública, mobiliária ou contratual</b>, e as receitas que as atenderão, constarão da LOA, devendo o <b>refinanciamento</b> figurar <b>separadamente</b>; e é vedado consignar <b>crédito com finalidade imprecisa ou dotação ilimitada</b>, bem como dotação para <b>investimento com duração superior a um exercício</b> não previsto no plano plurianual ou em lei que autorize sua inclusão.</p>'+
  '<p>Por fim, o <b>art. 9º</b> disciplina a <b>limitação de empenho e movimentação financeira</b>. Verificado, <b>ao final de um bimestre</b>, que a realização da receita poderá não comportar o cumprimento das <b>metas de resultado primário ou nominal</b>, os <b>Poderes e o Ministério Público</b> promoverão, <b>por ato próprio</b> e nos montantes necessários, <b>nos trinta dias subsequentes</b>, a limitação, segundo os critérios fixados pela LDO. Restabelecida a receita prevista, ainda que parcialmente, a recomposição das dotações dar-se-á <b>de forma proporcional às reduções efetivadas</b>. Não podem ser objeto de limitação as despesas que constituam <b>obrigações constitucionais e legais</b> do ente, <b>inclusive as destinadas ao pagamento do serviço da dívida</b>, e as <b>ressalvadas pela LDO</b>. O <b>§ 3º</b> do artigo, que autorizava o Poder Executivo a limitar unilateralmente os valores financeiros dos demais Poderes e do Ministério Público diante de sua omissão, foi <b>declarado inconstitucional pelo Supremo Tribunal Federal na ADI 2.238</b>, por violar a <b>separação de Poderes</b> e a autonomia financeira assegurada pelo art. 168 da Constituição. O controle do conjunto se completa com a <b>audiência pública quadrimestral</b> do § 4º, realizada até o final dos meses de <b>maio, setembro e fevereiro</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> as quatro alíneas do art. 4º, I, os cinco conteúdos do Anexo de Metas e o objeto do Anexo de Riscos. Acertar “dois seguintes” e “três anteriores” vale ponto.</li>'+
  '<li><b>Item 2:</b> compatibilidade tripla, os três incisos e a repartição LDO fixa / LOA consigna / RCL é a base.</li>'+
  '<li><b>Item 3:</b> bimestre, trinta dias, ato próprio, recomposição proporcional, as três ressalvas e a ADI 2.238 nominalmente.</li>'+
  '<li><b>Fecho:</b> citar a audiência pública quadrimestral mostra que você leu o artigo até o fim.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>No curso do exercício, determinado Estado praticou os seguintes atos:</p>'+
  '<ol><li>incluiu na própria lei orçamentária anual o cronograma de execução mensal de desembolso, dispensando ato posterior do Executivo;</li>'+
  '<li>ao final do segundo bimestre, constatada frustração de receita que compromete a meta de resultado primário, o Governador editou decreto limitando empenhos do Tribunal de Justiça e do Ministério Público, que haviam permanecido inertes;</li>'+
  '<li>no mesmo decreto, incluiu entre as despesas limitadas o pagamento do serviço da dívida;</li>'+
  '<li>consignou na LOA dotação genérica denominada “outras despesas a definir”, sem valor-teto;</li>'+
  '<li>utilizou, em janeiro, saldo de recursos vinculados à saúde ingressados no exercício anterior para custear despesa de publicidade.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada ato com fundamento na Lei Complementar nº 101/2000.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Cronograma dentro da LOA.</b> <b>Irregular.</b> O art. 8º exige que, <b>até trinta dias após a publicação dos orçamentos</b>, o <b>Poder Executivo</b> estabeleça a programação financeira e o cronograma de execução mensal de desembolso — trata-se de <b>ato do Executivo posterior à publicação</b>, e não de conteúdo da lei orçamentária.</p>'+
  '<p><b>2. Limitação imposta aos demais Poderes.</b> <b>Irregular.</b> Nos termos do art. 9º, caput, a limitação é promovida pelos <b>Poderes e pelo Ministério Público, por ato próprio</b>. O <b>§ 3º</b>, que autorizava o Executivo a fazê-lo diante da inércia dos demais, foi <b>declarado inconstitucional pelo STF na ADI 2.238</b>, por afronta à separação de Poderes e à autonomia financeira do art. 168 da Constituição. Cabe ao Executivo, no máximo, comunicar e cobrar — não substituir.</p>'+
  '<p><b>3. Limitação do serviço da dívida.</b> <b>Irregular.</b> O art. 9º, § 2º, exclui expressamente da limitação as despesas que constituam obrigações constitucionais e legais do ente, <b>inclusive as destinadas ao pagamento do serviço da dívida</b>, além das ressalvadas pela LDO.</p>'+
  '<p><b>4. Dotação genérica sem teto.</b> <b>Irregular.</b> O art. 5º, § 4º, veda consignar na lei orçamentária <b>crédito com finalidade imprecisa ou com dotação ilimitada</b> — vedação que reflete o art. 167, VII, da Constituição. A rubrica reúne os dois vícios.</p>'+
  '<p><b>5. Uso de recursos vinculados em outra finalidade.</b> <b>Irregular.</b> O parágrafo único do art. 8º determina que os recursos legalmente vinculados a finalidade específica sejam utilizados <b>exclusivamente</b> para atender ao objeto de sua vinculação, <b>ainda que em exercício diverso daquele em que ocorrer o ingresso</b>. O saldo de recursos da saúde permanece vinculado à saúde no exercício seguinte.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Colocar a programação financeira <b>dentro</b> da LOA — confusão com o art. 165 da CF.</li>'+
  '<li>Validar o <b>2</b> pela literalidade do § 3º, ignorando a ADI 2.238.</li>'+
  '<li>Tratar o serviço da dívida como despesa discricionária no <b>3</b>.</li>'+
  '<li>Supor que o recurso vinculado “perde a amarra” na virada do exercício no <b>5</b>.</li></ul></div>';

var TEC = [["Caderno completo — Conhecimentos Específicos TJPR 2026","https://www.tecconcursos.com.br/questoes/cadernos/103216249","103216249"]];
var TECNOTA = "Use o seu caderno do TJPR e filtre pelo assunto <b>Planejamento e Orçamento Público (arts. 3º a 10 da LRF)</b> — são 38 questões catalogadas.";

var UNITS = [
  {n:1, title:"A LDO e seus anexos", cvar:"u1", lessons:[
    {id:"F1", type:"teoria", title:"LDO, Metas e Riscos Fiscais",      xp:10, data:"J1"},
    {id:"F2", type:"drill",  title:"Praticar · o art. 3º vetado",      xp:20, data:["G1","H0"]},
    {id:"F3", type:"drill",  title:"Praticar · conteúdo da LDO",       xp:25, data:["G2","G3","H1","H2","H3"]},
    {id:"F4", type:"drill",  title:"Praticar · Anexo de Metas Fiscais", xp:25, data:["G5","G6","G7","H4","H5","H6","H7","H8","H9","H10","H11","H12"]},
    {id:"F5", type:"drill",  title:"Praticar · Anexo de Riscos Fiscais", xp:25, data:["G4","G8","G9","H13","H14","H15"]},
    {id:"F6", type:"flash",  title:"Flashcards · LDO e anexos",        xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]},
    {id:"F7", type:"feynman",title:"Explique a LDO e seus anexos",     xp:30, data:"I1"}
  ]},
  {n:2, title:"A LOA e o Banco Central", cvar:"u2", lessons:[
    {id:"F9", type:"teoria", title:"Exigências da LRF sobre a LOA",    xp:10, data:"J2"},
    {id:"F10",type:"drill",  title:"Praticar · conteúdo da LOA",       xp:25, data:["G10","G11","H16","H17"]},
    {id:"F11",type:"drill",  title:"Praticar · reserva de contingência", xp:25, data:["G12","H18","H19","H20"]},
    {id:"F12",type:"drill",  title:"Praticar · dívida na LOA",         xp:25, data:["G13","H21","H22","H23"]},
    {id:"F13",type:"drill",  title:"Praticar · as duas vedações",      xp:25, data:["G14","G15","H24","H25"]},
    {id:"F14",type:"drill",  title:"Praticar · Banco Central",         xp:20, data:["G16","G17","G32","H26","H27","H28"]},
    {id:"F15",type:"flash",  title:"Flashcards · LOA e BACEN",         xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25]},
    {id:"F16",type:"feynman",title:"Explique as exigências sobre a LOA", xp:30, data:"I2"}
  ]},
  {n:3, title:"Execução, limitação e controle", cvar:"u3", lessons:[
    {id:"F18",type:"teoria", title:"Programação e limitação de empenho", xp:10, data:"J3"},
    {id:"F19",type:"drill",  title:"Praticar · programação financeira", xp:25, data:["G18","G19","G31","H29","H30"]},
    {id:"F20",type:"drill",  title:"Praticar · o gatilho do art. 9º",  xp:25, data:["G20","G22","G30","H31","H32","H41"]},
    {id:"F21",type:"drill",  title:"Praticar · quem limita e o que não se limita", xp:25, data:["G21","G23","G25","H33","H34","H35","H36"]},
    {id:"F22",type:"drill",  title:"Praticar · a ADI 2.238",           xp:25, data:["G24","H37"]},
    {id:"F23",type:"drill",  title:"Praticar · audiências e precatórios", xp:25, data:["G26","G27","G28","G29","H38","H39","H40"]},
    {id:"F24",type:"flash",  title:"Flashcards · execução e controle", xp:15, data:[26,27,28,29,30,31,32,33,34,35,36,37]},
    {id:"F25",type:"feynman",title:"Explique a limitação de empenho",  xp:30, data:"I3"},
    {id:"F26",type:"feynman",title:"Explique o controle das metas",    xp:30, data:"I4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"F28",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"F29",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"Frev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"F30",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"F31",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. O art. 3º da LRF, que tratava do projeto de lei do plano plurianual, foi <b>integralmente vetado</b>. Por isso o capítulo do planejamento salta do art. 2º para a LDO no art. 4º.</p><p>Na prática, o PPA continua regido pela Constituição (art. 165). Dentro da LRF, o PPA aparece como parâmetro: a LOA deve ser compatível com ele (art. 5º) e o investimento plurianual precisa estar nele (art. 5º, § 5º).</p><p class='fb-fonte off'>Não consta do resumo de LRF — o material não menciona o veto ao art. 3º; o Resumo passa direto do art. 2º para o art. 4º (LDO).</p>",
1:"<p>Certo. É o primeiro item do esquema do art. 4º: <b>a LDO disporá sobre o equilíbrio entre receitas e despesas</b>.</p><p>Esquema completo do Resumo, A LDO DISPORÁ SOBRE: equilíbrio entre receitas e despesas; critérios e forma de limitação de empenho; normas relativas ao controle de custos; normas relativas à avaliação dos resultados dos programas; condições e exigências para transferências de recursos a entidades públicas e privadas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
2:"<p>Errado. Os critérios e a forma de limitação de empenho são matéria da <b>LDO</b>, e não da LOA (art. 4º, I, <i>b</i>).</p><p>O Resumo amarra isso duas vezes: no esquema do que a LDO disporá e no art. 9º, em que a limitação de empenho é feita <b>segundo os critérios fixados pela lei de diretrizes orçamentárias</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
3:"<p>Certo. Estão no esquema do art. 4º: a LDO disporá sobre <b>normas relativas ao controle de custos</b> e <b>à avaliação dos resultados dos programas</b> financiados com recursos dos orçamentos.</p><p>Os cinco itens do esquema do Resumo: equilíbrio entre receitas e despesas; critérios e forma de limitação de empenho; controle de custos; avaliação dos resultados dos programas; condições e exigências para transferências a entidades públicas e privadas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
4:"<p>Certo. Literalidade do art. 4º, § 1º: <b>integrará o projeto de lei de diretrizes orçamentárias</b> o Anexo de Metas Fiscais.</p><p>As OBSERVAÇÕES do Resumo lembram que a LRF incluiu <b>dois anexos na LDO</b>: o Anexo de Metas Fiscais (AMF, § 1º) e o Anexo de Riscos Fiscais (ARF, § 3º). Nenhum deles fica na LOA.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
5:"<p>Certo. Art. 4º, § 1º: no AMF serão estabelecidas metas anuais, <b>em valores correntes e constantes</b>, relativas a <b>receitas, despesas, resultados nominal e primário e montante da dívida pública</b>.</p><p>No esquema do Resumo, é o item 01 do que o AMF conterá, e vale <b>para o exercício a que se referirem e para os dois seguintes</b>. Guarde os dois tipos de valor: correntes e constantes.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
6:"<p>Errado no número: as metas do AMF abrangem o exercício a que se referirem e os <b>dois</b> seguintes, e não três (art. 4º, § 1º).</p><p>O Resumo traz dois números diferentes no mesmo anexo, e a banca troca um pelo outro: metas para o exercício <b>+ 2 seguintes</b>; comparação com as metas fixadas nos <b>três exercícios anteriores</b> e evolução do patrimônio líquido nos últimos <b>três</b>. Para frente são 2; para trás são 3.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
7:"<p>Certo. É o item 02 do esquema do AMF no Resumo: <b>a avaliação do cumprimento das metas relativas ao ano anterior</b> (art. 4º, § 2º, I).</p><p>O AMF olha para frente (metas do exercício e dos dois seguintes) e também para trás: avaliação das metas do <b>ano anterior</b>, comparação com as metas dos três exercícios anteriores e evolução do patrimônio líquido dos últimos três.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
8:"<p>Certo. É o item 03 do esquema do Resumo: demonstrativo das metas anuais, instruído com <b>memória e metodologia de cálculo</b> que justifiquem os resultados pretendidos, comparando-as com as fixadas nos <b>três exercícios anteriores</b>.</p><p>O mesmo item acrescenta que o demonstrativo evidencia a consistência das metas com as premissas e os objetivos da <b>política econômica nacional</b>. Lembre: comparação com os três anteriores; metas para os dois seguintes.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
9:"<p>Errado no prazo: a evolução do patrimônio líquido é demonstrada nos últimos <b>três</b> exercícios, e não cinco (art. 4º, § 2º, III).</p><p>O item 04 do esquema do Resumo diz: evolução do patrimônio líquido, <b>também nos últimos três exercícios</b>. O também remete ao item anterior, que compara as metas com as dos três exercícios anteriores. A LRF não usa o número cinco no AMF.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
10:"<p>Certo. Item 04 do esquema do AMF: evolução do patrimônio líquido nos últimos três exercícios, <b>destacando a origem e a aplicação dos recursos obtidos com a alienação de ativos</b>.</p><p>Faz ligação com o art. 44, também no Resumo: é vedado aplicar a receita de capital da alienação de bens em despesa corrente, salvo se destinada por lei aos regimes de previdência. O AMF mostra para onde foi esse dinheiro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
11:"<p>Certo. Item 05 do esquema do AMF: avaliação da situação <b>financeira e atuarial</b> dos regimes geral (RGPS) e próprio (RPPS) dos servidores, do <b>FAT</b> e dos demais fundos públicos e programas estatais de natureza atuarial.</p><p>O Resumo lista os três blocos com check: RGPS e RPPS; FAT (Fundo de Amparo ao Trabalhador); demais fundos e programas de natureza atuarial.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
12:"<p>Certo. É o item 06 do esquema do AMF no Resumo: demonstrativo da <b>estimativa e compensação da renúncia de receita</b> e da <b>margem de expansão das despesas obrigatórias de caráter continuado</b>.</p><p>Não confunda com a LOA: o projeto de LOA será acompanhado das <b>medidas de compensação</b> a renúncias de receita e ao aumento de DOCC (art. 5º, II). O AMF traz o demonstrativo; a LOA traz as medidas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
13:"<p>Certo. Literalidade do art. 4º, § 3º: no Anexo de Riscos Fiscais serão avaliados os <b>passivos contingentes e outros riscos</b> capazes de afetar as contas públicas, informando as <b>providências a serem tomadas, caso se concretizem</b>.</p><p>O Resumo explica que passivo contingente é a possibilidade de saída de recursos, geralmente por <b>indenizações judiciais</b>, que pode desequilibrar as contas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
14:"<p>Errado. O Anexo de Riscos Fiscais integra a <b>LDO</b>, e não a LOA (art. 4º, § 3º).</p><p>As OBSERVAÇÕES do Resumo: a LRF incluiu <b>dois anexos na LDO</b>, o AMF e o ARF. O que fica na LOA é a <b>reserva de contingência</b>. Quadro NÃO CONFUNDA: reserva de contingência está na LOA; passivo contingente está na LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
15:"<p>Certo. É o art. 4º, § 4º, no esquema do Resumo: a mensagem que encaminhar o projeto de LDO da União apresentará, em anexo específico, os <b>objetivos das políticas monetária, creditícia e cambial</b>, os parâmetros e projeções para seus principais agregados e variáveis, e as <b>metas de inflação para o exercício subsequente</b>.</p><p>ATENÇÃO do material: esse anexo <b>não acompanha a LDO</b>; acompanha a <b>mensagem</b> que encaminha o projeto de LDO (PLDO).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei de Diretrizes Orçamentárias (LDO)</i></p>",
16:"<p>Certo. Item 01 do esquema do art. 5º no Resumo: o projeto de LOA será elaborado de forma compatível com o <b>PPA</b>, com a <b>LDO</b> e com as normas da <b>LRF</b>.</p><p>São três parâmetros de compatibilidade. A banca costuma retirar um deles ou trocar a LRF pela Lei 4.320/64.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
17:"<p>Certo. Item 02 do esquema do art. 5º: o projeto de LOA conterá, em anexo, <b>demonstrativo da compatibilidade da programação dos orçamentos com os objetivos e metas do Anexo de Metas Fiscais</b>.</p><p>É a ponte entre as duas leis: a LDO fixa as metas no AMF, e a LOA demonstra que a sua programação está compatível com elas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
18:"<p>Certo. É o item 05 do esquema do art. 5º e a primeira OBSERVAÇÃO do Resumo: a reserva de contingência <b>está na LOA</b>, porém a sua <b>forma de utilização e montante</b> estão na <b>LDO</b>.</p><p>Quadro NÃO CONFUNDA do material: <b>reserva de contingência</b>, prevista na LOA; <b>passivo contingente</b>, previsto na LDO (Anexo de Riscos Fiscais).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
19:"<p>Certo. No esquema do Resumo, a reserva de contingência tem forma de utilização e montante <b>definidos com base na RCL</b> (receita corrente líquida) e estabelecidos na LDO.</p><p>Os três checks do item 05: montante com base na RCL; forma de utilização e montante estabelecidos na LDO; destinação a passivos contingentes e outros riscos e eventos fiscais imprevistos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
20:"<p>Certo. A reserva de contingência é <b>destinada ao atendimento de passivos contingentes e outros riscos e eventos fiscais imprevistos</b> (art. 5º, III, <i>b</i>).</p><p>As OBSERVAÇÕES do Resumo completam: ela atende aos passivos contingentes que estão na LDO (art. 4º) e, pelo art. 91 do Decreto-Lei 200/1967, também pode ser usada para a <b>abertura de créditos adicionais</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
21:"<p>Errado. O art. 5º, § 1º, manda que constem da LOA <b>todas</b> as despesas relativas à dívida pública, <b>mobiliária ou contratual</b>, e as receitas que as atenderão.</p><p>A assertiva restringiu a regra à dívida mobiliária. A lei alcança as duas espécies e ainda exige as receitas correspondentes.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
22:"<p>Certo. Literalidade do art. 5º, § 2º: o refinanciamento da dívida pública constará <b>separadamente</b> na lei orçamentária e nas de crédito adicional.</p><p>Comentário do Resumo: refinanciamento é a dívida paga com recursos de novas dívidas, como a pessoa que quita um empréstimo no banco com um novo empréstimo, buscando condições mais vantajosas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
23:"<p>Certo. Literalidade do art. 5º, § 3º: a atualização monetária do principal da dívida mobiliária refinanciada não poderá superar a variação do <b>índice de preços previsto na LDO</b>, ou em legislação específica.</p><p>O Resumo explica: dívida = principal + juros; a atualização do <b>principal</b> fica limitada à <b>inflação</b> prevista na LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
24:"<p>Certo. Literalidade do art. 5º, § 4º: é vedado consignar na lei orçamentária crédito com <b>finalidade imprecisa</b> ou com <b>dotação ilimitada</b>.</p><p>Exemplo do Resumo: em vez de recursos para a saúde (finalidade imprecisa), a lei deve dizer recursos para a <b>construção de novos hospitais</b> e fixar um limite, como <b>R$ 10 milhões</b> para essa construção.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
25:"<p>Errado. O art. 5º, § 5º, proíbe a LOA de consignar dotação para investimento com duração superior a um exercício que <b>não esteja previsto no PPA</b> ou em lei que autorize a sua inclusão.</p><p>ATENÇÃO do Resumo: investimento cuja execução ultrapasse um exercício financeiro <b>precisa estar no PPA</b>. O comentário do material liga isso ao art. 167, § 1º, da CF, que qualifica o descumprimento como <b>crime de responsabilidade</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
26:"<p>Certo. É o art. 5º, § 6º: integram as despesas da União, e entram na LOA, as do Banco Central relativas a <b>pessoal e encargos sociais</b>, <b>custeio administrativo</b> (inclusive benefícios e assistência aos servidores) e <b>investimentos</b>.</p><p>O Resumo lista em quatro checks: pessoal e encargos sociais; custeio administrativo; benefícios e assistência aos servidores; investimentos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
27:"<p>Certo. Art. 7º, <i>caput</i>: o resultado do Banco Central, apurado <b>após a constituição ou reversão de reservas</b>, constitui receita do Tesouro Nacional e será transferido até o <b>décimo dia útil</b> subsequente à aprovação dos <b>balanços semestrais</b>.</p><p>Exemplo do Resumo: o BACEN obtém lucro de <b>R$ 10 milhões</b> no semestre após constituir reservas; esse valor vai ao Tesouro até o 10º dia útil após a aprovação dos balanços semestrais.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
28:"<p>Certo. Literalidade do art. 7º, § 1º: o resultado negativo constituirá <b>obrigação do Tesouro para com o Banco Central</b> e será consignado em <b>dotação específica</b> no orçamento.</p><p>Resultado positivo vira receita do Tesouro; resultado negativo vira obrigação do Tesouro. O Resumo usa um déficit de <b>R$ 1 milhão</b> como exemplo, registrado no orçamento da União como dotação específica.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Lei Orçamentária Anual</i></p>",
29:"<p>Certo. Art. 8º: até <b>trinta dias após a publicação dos orçamentos</b>, o Poder Executivo estabelecerá a programação financeira e o cronograma de execução mensal de desembolso.</p><p>Exemplo do Resumo: o Município publica o orçamento em janeiro; em até 30 dias o prefeito, <b>por Decreto</b>, define quando e onde os recursos serão gastos ao longo do ano (coleta de lixo, pagamento de funcionários, infraestrutura).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Execução Orçamentária e do Cumprimento de Metas</i></p>",
30:"<p>Certo. Literalidade do art. 8º, parágrafo único: os recursos legalmente vinculados a finalidade específica serão utilizados <b>exclusivamente</b> para atender ao objeto de sua vinculação, <b>ainda que em exercício diverso</b> daquele em que ocorrer o ingresso.</p><p>O ponto cobrado é o final: a vinculação acompanha o recurso mesmo que ele sobre para o exercício seguinte.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Execução Orçamentária e do Cumprimento de Metas</i></p>",
31:"<p>Errado no período: a verificação é feita ao final de um <b>bimestre</b>, e não de um semestre (art. 9º).</p><p>Esquema do Resumo: se verificado, <b>ao final de um bimestre</b>, que a receita poderá não comportar as metas de resultado primário ou nominal do AMF, os Poderes e o MP promoverão, por ato próprio, <b>nos 30 dias subsequentes</b>, limitação de empenho e movimentação financeira, segundo os critérios da LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
32:"<p>Certo. Literalidade do art. 9º: os <b>Poderes e o Ministério Público</b> promoverão, <b>por ato próprio</b> e nos montantes necessários, <b>nos trinta dias subsequentes</b>, a limitação de empenho e movimentação financeira.</p><p>O esquema do Resumo destaca cada peça: ao final de um bimestre; Poderes e MP; por ato próprio e nos montantes necessários; nos 30 dias subsequentes; segundo os critérios fixados pela LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
33:"<p>Errado. Pelo art. 9º, a limitação é promovida pelos <b>Poderes e pelo Ministério Público</b>, cada um <b>por ato próprio</b>. O Executivo não a impõe aos demais.</p><p>O esquema do Resumo destaca justamente esse ponto: os Poderes e o MP promoverão, por ato próprio e nos montantes necessários, a limitação de empenho, segundo os critérios da LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
34:"<p>Certo. É o art. 9º, § 1º, trazido nas OBSERVAÇÕES do Resumo: no caso de restabelecimento da receita prevista, <b>ainda que parcial</b>, a recomposição das dotações limitadas dar-se-á de forma <b>proporcional às reduções efetivadas</b>.</p><p>Quem foi mais cortado recebe mais de volta: a recomposição acompanha a proporção do corte.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
35:"<p>Certo. O esquema NÃO SERÃO OBJETO DE LIMITAÇÃO DE EMPENHO (art. 9º, § 2º) traz as <b>obrigações constitucionais e legais do ente</b> e as destinadas ao <b>pagamento do serviço da dívida</b>.</p><p>Lista completa do Resumo: 1) obrigações constitucionais e legais; 2) serviço da dívida; 3) despesas com desenvolvimento científico e tecnológico custeadas por fundo criado para tal finalidade; 4) despesas ressalvadas pela LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
36:"<p>Errado. As despesas destinadas ao <b>pagamento do serviço da dívida</b> estão expressamente fora da limitação de empenho (art. 9º, § 2º).</p><p>É o item 2 do esquema NÃO SERÃO OBJETO DE LIMITAÇÃO DE EMPENHO do Resumo, ao lado das obrigações constitucionais e legais, das despesas com ciência e tecnologia custeadas por fundo próprio e das ressalvadas pela LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
37:"<p>Certo. O art. 9º, § 3º, permitia ao Executivo limitar os valores financeiros dos demais Poderes e do MP quando estes não promovessem a limitação. O STF declarou a regra <b>inconstitucional</b>, por ofensa à separação dos Poderes.</p><p>Isso reforça o <i>caput</i>, que o Resumo destaca: cada Poder e o MP limitam seus empenhos <b>por ato próprio</b>.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o material não menciona o art. 9º, § 3º, nem a decisão do STF (ADI 2.238).</p>",
38:"<p>Certo. É o art. 9º, § 4º, das OBSERVAÇÕES do Resumo: <b>até o final de maio, setembro e fevereiro</b> demonstra-se e avalia-se o cumprimento das metas fiscais <b>de cada quadrimestre</b>, em <b>audiência pública</b> na comissão do art. 166, § 1º, da CF ou equivalente nas Casas estaduais e municipais.</p><p>O Resumo atribui a tarefa ao <b>Ministro ou Secretário de Estado da Fazenda</b>, autoridade do Executivo. Os meses fecham cada quadrimestre mais um mês: jan-abr em maio, mai-ago em setembro, set-dez em fevereiro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
39:"<p>Errado. A avaliação das metas fiscais é <b>quadrimestral</b>, e a audiência pública ocorre até o final de <b>maio, setembro e fevereiro</b> (art. 9º, § 4º).</p><p>A banca confundiu com o prazo do Banco Central, que é semestral: no prazo de <b>90 dias após o encerramento de cada semestre</b>, o BACEN avalia o cumprimento das metas das políticas monetária, creditícia e cambial (art. 9º, § 5º). Ambos estão nas OBSERVAÇÕES do Resumo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
40:"<p>Certo. É o art. 10, na observação 5 do Resumo: a execução orçamentária e financeira identificará os <b>beneficiários de pagamento de sentenças judiciais</b>, para fins de observância da <b>ordem cronológica dos precatórios</b>.</p><p>O material define precatório como a ordem judicial para que o ente público pague determinada quantia. A ordem cronológica é a do art. 100 da Constituição, citada na letra da lei.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
41:"<p>Certo. O art. 9º fala em <b>limitação de empenho e movimentação financeira</b>: as duas coisas juntas.</p><p>No esquema do Resumo o bloco tem o mesmo nome, LIMITAÇÃO DE EMPENHO E MOVIMENTAÇÃO FINANCEIRA. Limita-se o empenho (a despesa a ser comprometida) e a movimentação financeira (os pagamentos), sempre segundo os critérios fixados pela LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limitação de Empenho e Movimentação Financeira</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Planejamento e orçamento", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
