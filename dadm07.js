/* Direito Administrativo — Módulo 07: Entidades paraestatais e Terceiro Setor (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm07 = (function(){
"use strict";

var CARDS = [
  ["Conceito de entidades paraestatais","São as <b>pessoas jurídicas de direito privado</b>, <b>sem fins lucrativos</b>, que atuam <b>ao lado e em colaboração com o Estado</b>. Exercem <b>função típica, embora não exclusiva</b>, do Estado, sujeitando-se ao <b>controle direto ou indireto</b> do Poder Público."],
  ["Os três setores","<b>Primeiro setor</b> → o <b>Estado</b>. <b>Segundo setor</b> → o <b>mercado</b>, isto é, o setor privado empresarial, <b>com fins lucrativos</b>. <b>Terceiro setor</b> → <b>entidades privadas, sem fins lucrativos</b>."],
  ["Natureza jurídica das entidades paraestatais","São <b>pessoas jurídicas de direito privado, sem fins lucrativos</b>. Não são criadas como pessoas de direito público nem convertem sua natureza pelo fato de receberem fomento."],
  ["Que serviços as paraestatais desempenham?","Desempenham <b>serviços NÃO exclusivos do Estado</b>, <b>porém em colaboração com ele</b>."],
  ["Que apoio as paraestatais recebem do Estado?","Recebem <b>algum tipo de incentivo (fomento)</b> do Poder Público. É o fomento, e não a delegação, que marca o vínculo."],
  ["A que controle as paraestatais se sujeitam?","Ao controle da <b>Administração Pública</b> <b>e</b> do <b>Tribunal de Contas</b>."],
  ["Regime jurídico das entidades paraestatais","Regime jurídico de <b>direito privado, parcialmente derrogado pelo direito público</b>."],
  ["As entidades paraestatais integram a Administração Indireta?","<b>Não fazem parte da Administração Indireta.</b> Elas <b>integram o terceiro setor</b>."],
  ["As quatro espécies de entidades paraestatais","<b>SSA</b> (Serviços Sociais Autônomos — sistema “S”) · <b>OS</b> (Organização Social) · <b>OSCIP</b> (Organização da Sociedade Civil de Interesse Público) · <b>Entidades de Apoio</b>."],
  ["Conceito de Serviços Sociais Autônomos (SSA)","São desempenhados por entidades que fornecem <b>atividades de utilidade pública</b>, <b>sem fins lucrativos</b>, que <b>beneficiam determinados grupos sociais ou profissionais</b>, usualmente direcionadas ao <b>aprendizado profissionalizante</b> e à <b>prestação de serviços assistenciais</b>."],
  ["Os exemplos do sistema “S”","<b>SESC</b> — Serviço Social do Comércio · <b>SESI</b> — Serviço Social da Indústria · <b>SENAI</b> — Serviço Nacional de Aprendizagem Industrial · <b>SENAC</b> — Serviço Nacional de Aprendizagem Comercial · <b>SEBRAE</b> — Serviço Brasileiro de Apoio às Micro e Pequenas Empresas."],
  ["Como os SSA se financiam?","Arrecadam <b>contribuições parafiscais</b>."],
  ["A que controle os SSA se sujeitam?","À <b>supervisão ministerial</b> e ao <b>controle do Tribunal de Contas</b>."],
  ["SSA e Lei de Licitações","<b>Não se submetem à Lei de Licitações</b>, apenas aos <b>princípios da Administração Pública</b>. Por isso <b>podem editar regulamentos próprios</b> para seus procedimentos."],

  ["Conceito de Organização Social (OS)","É a <b>qualificação jurídica</b> dada a pessoas jurídicas de direito privado, <b>sem fins lucrativos</b>, mediante vínculo jurídico instituído por meio de <b>Contrato de Gestão</b>."],
  ["A OS presta serviço público delegado?","<b>Não.</b> À semelhança dos serviços sociais autônomos, as OS <b>não prestam serviço público delegado pelo Estado</b>, mas <b>atividade privada de interesse público</b> (serviços não exclusivos do Estado), <b>em seu próprio nome</b>, com <b>incentivo (fomento)</b> do Estado."],
  ["A definição de OS dada pela banca CESPE","<b>Pessoas jurídicas de direito privado, sem fins lucrativos, cujas atividades sejam dirigidas ao ensino, à pesquisa científica, ao desenvolvimento tecnológico, à proteção e preservação do meio ambiente, à cultura e à saúde.</b>"],
  ["Quem qualifica a OS e por qual tipo de ato?","Recebem a denominação como OS por <b>ato discricionário</b> feito por <b>Ministro de Estado</b>."],
  ["A OS tem prazo mínimo de funcionamento?","<b>Não possuem prazo mínimo de funcionamento</b> — diferente da OSCIP, que exige <b>3 anos</b>."],
  ["OS: bens e servidores","<b>Recebem bens e servidores</b> da Administração Pública. É <b>facultada a cessão especial de servidor</b> para as OS, <b>com ônus para a origem</b>."],
  ["OS: recursos excedentes","É <b>vedada a aplicação dos seus recursos excedentes em atividades distintas da própria atividade</b>."],
  ["OS: conselho e remuneração dos conselheiros","É <b>obrigatória a constituição de Conselho de Administração (CA)</b> e é <b>obrigatória a participação de representantes do Poder Público no CA</b>. A <b>remuneração dos conselheiros é vedada</b>."],
  ["Quando a OS pode ser desqualificada?","<b>Poderá ser desqualificada como OS se descumprir o contrato de gestão.</b>"],
  ["Conceito de OSCIP","É a <b>qualificação jurídica</b> dada a pessoas jurídicas de direito privado, <b>sem fins lucrativos</b>, mediante vínculo jurídico instituído por meio de <b>Termo de Parceria</b>."],
  ["A definição de OSCIP dada pela banca CESPE","<b>São organizações sem fins lucrativos, voltadas à resolução de problemas coletivos de interesse social, e podem prestar serviços públicos.</b>"],
  ["Quem qualifica a OSCIP, por qual ato e com que prazo?","Recebem a denominação de OSCIP de <b>forma vinculada</b>, pelo <b>Ministro da Justiça</b>. Devem estar <b>em funcionamento há pelo menos 3 anos</b>."],
  ["OSCIP: conselho, servidores e dirigentes","É <b>obrigatória a constituição de Conselho Fiscal (CF)</b>. É <b>facultativa a participação de servidor público</b> no conselho ou na diretoria. <b>Não há cessão de servidores</b> pela Administração Pública. <b>Permite a remuneração dos dirigentes.</b>"],
  ["A regra do cruzamento OS × OSCIP","<b>OS não pode ser OSCIP, mas OSCIP pode ser OS.</b> Nos conceitos importantes: <b>não há vedação ao enquadramento de OSCIP como OS, mas há vedação ao enquadramento de OS como OSCIP</b>."],

  ["Quem não pode ser OSCIP — primeira metade do art. 2º da Lei 9.790/99","<b>I</b> sociedades comerciais · <b>II</b> sindicatos, associações de classe ou de representação de categoria profissional · <b>III</b> instituições religiosas ou voltadas para a disseminação de credos, cultos, práticas e visões devocionais e confessionais · <b>IV</b> organizações partidárias e assemelhadas, <b>inclusive suas fundações</b> · <b>V</b> entidades de benefício mútuo destinadas a proporcionar bens ou serviços a um <b>círculo restrito</b> de associados ou sócios · <b>VI</b> entidades e empresas que <b>comercializam planos de saúde</b> e assemelhados."],
  ["Quem não pode ser OSCIP — segunda metade do art. 2º da Lei 9.790/99","<b>VII</b> instituições hospitalares privadas <b>não gratuitas</b> e suas mantenedoras · <b>VIII</b> escolas privadas dedicadas ao ensino formal <b>não gratuito</b> e suas mantenedoras · <b>IX</b> as <b>organizações sociais</b> · <b>X</b> as <b>cooperativas</b> · <b>XI</b> as <b>fundações públicas</b> · <b>XII</b> fundações, sociedades civis ou associações de direito privado <b>criadas por órgão público ou por fundações públicas</b> · <b>XIII</b> organizações creditícias vinculadas ao <b>sistema financeiro nacional</b> (art. 192 da CF)."],
  ["A ressalva do parágrafo único do art. 2º da Lei 9.790/99","<b>Não constituem impedimento</b> à qualificação como OSCIP as operações destinadas a <b>microcrédito</b> realizadas com instituições financeiras na forma de <b>recebimento de repasses</b>, <b>venda de operações realizadas</b> ou <b>atuação como mandatárias</b>."],
  ["Conceito de Entidades de Apoio","<b>Pessoas jurídicas de direito privado, sem fins lucrativos</b>, <b>instituídas por servidores públicos, em nome próprio</b>, sob a forma de <b>fundação, associação ou cooperativa</b>, para a prestação, <b>em caráter privado</b>, de <b>serviços sociais não exclusivos do Estado</b>, e que mantêm vínculo jurídico com entidades da administração direta ou indireta, <b>em regra por meio de convênio</b>."],
  ["Qualificação como OS exige licitação?","<b>Não.</b> A qualificação da entidade como OS configura hipótese de <b>simples credenciamento</b>, o qual <b>não exige licitação em razão da ausência de competição</b>."],
  ["OSCIP e política partidária","É <b>vedada</b> às entidades qualificadas como OSCIP a <b>participação em campanhas de interesse político-partidário ou eleitorais</b>, sob quaisquer meios ou formas. E <b>fundação vinculada a partido político</b>, voltada para fomento ao desenvolvimento econômico e social, <b>não poderá ser classificada como OSCIP</b>."],
  ["O que é chamamento público?","É o <b>procedimento destinado a selecionar organização da sociedade civil</b> para firmar parceria por meio de <b>termo de colaboração</b> ou de <b>fomento</b> (ou de <b>parceria</b>), devendo respeitar os princípios da <b>isonomia</b>, da <b>publicidade</b> e da <b>probidade administrativa</b>."],
  ["OSCIP: licitação e imóvel comprado com recursos do Termo de Parceria","As OSCIP que firmam termo de parceria com a União <b>devem contratar mediante processo licitatório</b>; o <b>TCU</b> entende pela <b>desnecessidade de licitação na forma da Lei de Licitações</b>, mas pela <b>obrigatoriedade de procedimento simplificado previsto pela própria entidade privada</b>. Imóvel adquirido com recursos do Termo de Parceria é <b>gravado com cláusula de inalienabilidade</b>."],
  ["O que o estatuto da OSCIP deve conter?","Normas expressas sobre a observância dos princípios da <b>legalidade</b>, da <b>impessoalidade</b>, da <b>moralidade</b>, da <b>publicidade</b>, da <b>economicidade</b> e da <b>eficiência</b>."]
];

var QS = [
  ["As entidades paraestatais são pessoas jurídicas de direito privado, sem fins lucrativos, que atuam ao lado e em colaboração com o Estado.","C","CEBRASPE","Conceito de abertura do resumo."],
  ["As entidades paraestatais exercem função exclusiva do Estado e não se sujeitam a controle do Poder Público.","E","FCC","Exercem função típica, <b>embora não exclusiva</b>, e sujeitam-se ao <b>controle direto ou indireto</b> do Poder Público."],
  ["O terceiro setor é composto por entidades privadas, sem fins lucrativos.","C","FGV","Definição do resumo."],
  ["O primeiro setor é o mercado, com fins lucrativos, e o segundo setor é o Estado.","E","VUNESP","Inverteu: <b>primeiro setor = Estado</b>; <b>segundo setor = mercado</b>."],
  ["As entidades paraestatais desempenham serviços não exclusivos do Estado, porém em colaboração com ele.","C","AOCP","Quadro das entidades paraestatais."],
  ["As entidades paraestatais recebem algum tipo de incentivo (fomento) do Poder Público.","C","IBFC","Quadro das entidades paraestatais."],
  ["As entidades paraestatais sujeitam-se ao controle da Administração Pública, mas não ao do Tribunal de Contas.","E","FUNDATEC","Sujeitam-se ao controle da Administração <b>e do Tribunal de Contas</b>."],
  ["O regime jurídico das entidades paraestatais é de direito privado, parcialmente derrogado pelo direito público.","C","CEBRASPE","Quadro das entidades paraestatais."],
  ["As entidades paraestatais integram a Administração Indireta.","E","FCC","<b>Não fazem parte</b> da Administração Indireta; integram o <b>terceiro setor</b>."],
  ["São espécies de entidades paraestatais os serviços sociais autônomos, as organizações sociais, as OSCIP e as entidades de apoio.","C","FGV","As quatro espécies do resumo."],
  ["Os serviços sociais autônomos fornecem atividades de utilidade pública, sem fins lucrativos, que beneficiam determinados grupos sociais ou profissionais.","C","VUNESP","Conceito de SSA."],
  ["SESC, SESI, SENAI, SENAC e SEBRAE são exemplos de organizações sociais.","E","AOCP","São exemplos de <b>serviços sociais autônomos</b> — o sistema “S”."],
  ["Os serviços sociais autônomos arrecadam contribuições parafiscais.","C","IBFC","Quadro dos SSA."],
  ["Os serviços sociais autônomos submetem-se integralmente à Lei de Licitações.","E","FUNDATEC","<b>Não se submetem</b> à Lei de Licitações, apenas aos <b>princípios</b> da Administração Pública."],
  ["Os serviços sociais autônomos sujeitam-se ao controle do Tribunal de Contas, mas não à supervisão ministerial.","E","CEBRASPE","Sujeitam-se à <b>supervisão ministerial</b> e ao controle do Tribunal de Contas."],
  ["Os serviços sociais autônomos podem editar regulamentos próprios para seus procedimentos.","C","FCC","Consequência de não se submeterem à Lei de Licitações."],
  ["A organização social é a qualificação jurídica dada a pessoa jurídica de direito privado, sem fins lucrativos, mediante vínculo instituído por meio de contrato de gestão.","C","FGV","Conceito de OS."],
  ["As organizações sociais prestam serviço público delegado pelo Estado.","E","VUNESP","<b>Não prestam</b> serviço público delegado: prestam <b>atividade privada de interesse público</b>, em seu próprio nome."],
  ["Organizações sociais são pessoas jurídicas de direito privado, sem fins lucrativos, cujas atividades sejam dirigidas ao ensino, à pesquisa científica, ao desenvolvimento tecnológico, à proteção e preservação do meio ambiente, à cultura e à saúde.","C","CEBRASPE","Definição dada pela própria banca, transcrita no resumo."],
  ["A qualificação como organização social é ato vinculado, praticado pelo Ministro da Justiça.","E","AOCP","É <b>ato discricionário</b> de <b>Ministro de Estado</b>; vinculado e do Ministro da Justiça é a qualificação da <b>OSCIP</b>."],
  ["As organizações sociais não possuem prazo mínimo de funcionamento para obter a qualificação.","C","IBFC","Levar para a prova — OS."],
  ["É vedada a cessão especial de servidor público para as organizações sociais.","E","FUNDATEC","É <b>facultada</b> a cessão especial, <b>com ônus para a origem</b>."],
  ["É facultada a cessão especial de servidor para as organizações sociais, com ônus para a origem.","C","CEBRASPE","Levar para a prova — OS."],
  ["As organizações sociais podem aplicar seus recursos excedentes em atividades distintas da própria atividade.","E","FCC","É <b>vedada</b> a aplicação dos recursos excedentes em atividades distintas."],
  ["É obrigatória a constituição de Conselho de Administração na organização social, bem como a participação de representantes do Poder Público nesse conselho.","C","FGV","Levar para a prova — OS."],
  ["É permitida a remuneração dos conselheiros da organização social.","E","VUNESP","A remuneração dos conselheiros é <b>vedada</b>; a remuneração de <b>dirigentes</b> é permitida na <b>OSCIP</b>."],
  ["A organização social poderá ser desqualificada se descumprir o contrato de gestão.","C","AOCP","Levar para a prova — OS."],
  ["A OSCIP é a qualificação jurídica dada a pessoa jurídica de direito privado, sem fins lucrativos, mediante vínculo instituído por meio de termo de parceria.","C","IBFC","Conceito de OSCIP."],
  ["A qualificação como OSCIP é ato discricionário de Ministro de Estado.","E","FUNDATEC","É <b>vinculada</b> e cabe ao <b>Ministro da Justiça</b>."],
  ["Para ser qualificada como OSCIP, a entidade deve estar em funcionamento há pelo menos cinco anos.","E","CEBRASPE","O prazo é de <b>3 anos</b>."],
  ["Nas OSCIP é obrigatória a constituição de Conselho de Administração.","E","FCC","Na OSCIP é obrigatório o <b>Conselho Fiscal</b>; o Conselho de Administração é da <b>OS</b>."],
  ["É facultativa a participação de servidor público no conselho ou na diretoria da OSCIP, e é permitida a remuneração de seus dirigentes.","C","FGV","Quadro comparativo OS × OSCIP."],
  ["Há cessão de servidores da Administração Pública para as OSCIP, tal como ocorre nas organizações sociais.","E","VUNESP","<b>Não há cessão de servidores</b> pela Administração Pública para as OSCIP."],
  ["A organização social pode ser qualificada como OSCIP, mas a OSCIP não pode ser organização social.","E","AOCP","Inverteu: <b>OS não pode ser OSCIP, mas OSCIP pode ser OS</b>."],
  ["As sociedades comerciais não são passíveis de qualificação como OSCIP.","C","Lei 9.790/99, art. 2º, I","Primeira vedação do artigo."],
  ["Os sindicatos, as associações de classe e as de representação de categoria profissional não são passíveis de qualificação como OSCIP.","C","IBFC","Art. 2º, II, da Lei 9.790/99."],
  ["As instituições religiosas não são passíveis de qualificação como Organizações da Sociedade Civil de Interesse Público.","C","FUNDATEC","Conceito importante 05 do resumo."],
  ["As entidades e empresas que comercializam planos de saúde não são passíveis de qualificação como Organizações da Sociedade Civil de Interesse Público.","C","CEBRASPE","Conceito importante 06 do resumo."],
  ["As cooperativas e as fundações públicas podem ser qualificadas como OSCIP.","E","FCC","Ambas estão vedadas — art. 2º, X e XI, da Lei 9.790/99."],
  ["As instituições hospitalares privadas, gratuitas ou não, não são passíveis de qualificação como OSCIP.","E","FGV","A vedação alcança apenas as <b>não gratuitas</b> e suas mantenedoras."],
  ["As operações destinadas a microcrédito realizadas com instituições financeiras constituem impedimento à qualificação como OSCIP.","E","VUNESP","O parágrafo único é expresso: <b>não constituem impedimento</b>."],
  ["Fundação vinculada a partido político e voltada para fomento ao desenvolvimento econômico e social não poderá ser classificada como OSCIP.","C","AOCP","Conceito importante 04 do resumo."],
  ["É vedada às entidades qualificadas como OSCIP a participação em campanhas de interesse político-partidário ou eleitorais, sob quaisquer meios ou formas.","C","IBFC","Conceito importante 03 do resumo."],
  ["Entidades de apoio são pessoas jurídicas de direito privado, sem fins lucrativos, instituídas por servidores públicos, em nome próprio, sob a forma de fundação, associação ou cooperativa.","C","FUNDATEC","Conceito de entidades de apoio."],
  ["As entidades de apoio mantêm vínculo jurídico com entidades da administração direta ou indireta, em regra por meio de contrato de gestão.","E","CEBRASPE","O vínculo é, <b>em regra, por convênio</b>."],
  ["A qualificação da entidade como organização social configura hipótese de simples credenciamento, o qual não exige licitação em razão da ausência de competição.","C","FCC","Conceito importante 01 do resumo."],
  ["O chamamento público é o procedimento destinado a selecionar organização da sociedade civil para firmar parceria por meio de termo de colaboração ou de fomento, devendo respeitar os princípios da isonomia, da publicidade e da probidade administrativa.","C","FGV","Conceito importante 07 do resumo."],
  ["Caso a OSCIP adquira bem imóvel com recursos provenientes da celebração do termo de parceria, esse imóvel poderá ser livremente alienado.","E","VUNESP","O imóvel é gravado com cláusula de <b>inalienabilidade</b>."],
  ["Os requisitos para que uma organização seja qualificada como OSCIP incluem a exigência de que o seu estatuto contenha normas expressas sobre a observância dos princípios da legalidade, da impessoalidade, da moralidade, da publicidade, da economicidade e da eficiência.","C","AOCP","Conceito importante 09 do resumo."],
  ["Segundo o TCU, as OSCIP que firmem termo de parceria com a União devem licitar na forma da Lei de Licitações.","E","IBFC","O TCU entende pela <b>desnecessidade</b> de licitação na forma da Lei de Licitações, exigindo <b>procedimento simplificado</b> previsto pela própria entidade."],
  ["A presença de servidor na composição do conselho é atributo facultativo da OSCIP, ao contrário do que ocorre na organização social, em que é obrigatória.","C","FUNDATEC","Conceito importante 10 do resumo, com a explicação sobre a transferência de recursos públicos."],
  ["As organizações sociais constam entre as entidades passíveis de qualificação como OSCIP.","E","Lei 9.790/99, art. 2º, IX","O inciso IX veda expressamente a qualificação das organizações sociais como OSCIP."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Terceiro setor, entidades paraestatais e o sistema “S”",
      '<div class="box"><span class="bl">O que são entidades paraestatais</span>'+
      '<p>São as <b>pessoas jurídicas de direito privado</b>, <b>sem fins lucrativos</b>, que atuam <b>ao lado e em colaboração com o Estado</b>. Exercem <b>função típica, embora não exclusiva</b>, do Estado, <b>sujeitando-se ao controle direto ou indireto do Poder Público</b>.</p>'+
      '<p>Guarde o par de adjetivos, porque é dele que a banca vive: função <b>típica</b>, mas <b>não exclusiva</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Os três setores</span>'+
      '<div class="chips"><span class="chip">1º setor — Estado</span><span class="chip">2º setor — mercado (privado empresarial, com fins lucrativos)</span><span class="chip">3º setor — entidades privadas, sem fins lucrativos</span></div>'+
      '<p>As entidades paraestatais <b>integram o terceiro setor</b>. Inverter primeiro e segundo setor é a troca mais barata que existe neste assunto.</p></div>'+
      '<div class="box"><span class="bl">O quadro das entidades paraestatais</span>'+
      '<ul><li>São <b>pessoas jurídicas de direito privado</b>, <b>sem fins lucrativos</b>.</li>'+
      '<li>Desempenham serviços <b>não exclusivos</b> do Estado, <b>porém em colaboração com ele</b>.</li>'+
      '<li>Recebem <b>algum tipo de incentivo (fomento)</b> do Poder Público.</li>'+
      '<li>Sujeitam-se ao controle da <b>Administração Pública</b> <b>e</b> do <b>Tribunal de Contas</b>.</li>'+
      '<li>Regime jurídico de <b>direito privado</b>, <b>parcialmente derrogado pelo direito público</b>.</li>'+
      '<li><b>Não fazem parte da Administração Indireta.</b></li>'+
      '<li><b>Integram o terceiro setor.</b></li>'+
      '<li>Espécies: <b>SSA, OS, OSCIP e Entidades de Apoio</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Serviços Sociais Autônomos (SSA) — o sistema “S”</span>'+
      '<p>São desempenhados por entidades que fornecem <b>atividades de utilidade pública</b>, <b>sem fins lucrativos</b>, que <b>beneficiam determinados grupos sociais ou profissionais</b>, usualmente direcionadas ao <b>aprendizado profissionalizante</b> e à <b>prestação de serviços assistenciais</b>.</p>'+
      '<div class="tree"><div class="leaf"><b>SESC</b> — Serviço Social do Comércio</div>'+
      '<div class="leaf"><b>SESI</b> — Serviço Social da Indústria</div>'+
      '<div class="leaf"><b>SENAI</b> — Serviço Nacional de Aprendizagem Industrial</div>'+
      '<div class="leaf"><b>SENAC</b> — Serviço Nacional de Aprendizagem Comercial</div>'+
      '<div class="leaf"><b>SEBRAE</b> — Serviço Brasileiro de Apoio às Micro e Pequenas Empresas</div></div></div>'+
      '<div class="box trap"><span class="bl">O quadro dos SSA — e onde a banca mexe</span>'+
      '<ul><li><b>Beneficiam determinados grupos sociais ou profissionais</b> (e não a coletividade indistintamente).</li>'+
      '<li><b>Arrecadam contribuições parafiscais.</b></li>'+
      '<li>Sujeitam-se à <b>supervisão ministerial</b> e ao <b>controle do Tribunal de Contas</b> — as duas coisas, não uma só.</li>'+
      '<li><b>NÃO se submetem à Lei de Licitações</b>, apenas aos <b>princípios da Administração Pública</b>.</li>'+
      '<li>Por isso <b>podem editar regulamentos próprios</b> para seus procedimentos.</li></ul>'+
      '<p class="mn"><em>SSA não licita pela Lei de Licitações, mas não está solto: responde aos princípios e ao Tribunal de Contas.</em></p></div>')
  ],
  V2:[
    sl("OS e OSCIP — contrato de gestão, termo de parceria e o quadro comparativo",
      '<div class="box"><span class="bl">Organizações Sociais (OS)</span>'+
      '<p>É a <b>qualificação jurídica</b> dada a pessoas jurídicas de direito privado, <b>sem fins lucrativos</b>, mediante vínculo jurídico instituído por meio de <b>Contrato de Gestão</b>.</p>'+
      '<p>À semelhança dos serviços sociais autônomos, as OS <b>também não prestam serviço público delegado pelo Estado</b>, mas <b>atividade privada de interesse público</b> (serviços não exclusivos do Estado), <b>em seu próprio nome</b>, com <b>incentivo (fomento)</b> do Estado.</p>'+
      '<p><b>Definição dada pela banca CESPE:</b> organizações sociais são pessoas jurídicas de direito privado, sem fins lucrativos, cujas atividades sejam dirigidas ao <b>ensino</b>, à <b>pesquisa científica</b>, ao <b>desenvolvimento tecnológico</b>, à <b>proteção e preservação do meio ambiente</b>, à <b>cultura</b> e à <b>saúde</b>.</p></div>'+
      '<div class="box"><span class="bl">LEVAR PARA A PROVA — organizações sociais</span>'+
      '<ul><li>Celebram <b>Contrato de Gestão</b> com o Poder Público.</li>'+
      '<li>Recebem a denominação como OS por <b>ato discricionário</b> feito por <b>Ministro de Estado</b>.</li>'+
      '<li><b>Não possuem prazo mínimo de funcionamento.</b></li>'+
      '<li><b>Recebem bens e servidores</b> da Administração Pública.</li>'+
      '<li>É <b>facultada a cessão especial de servidor</b> para as OS, <b>com ônus para a origem</b>.</li>'+
      '<li>É <b>vedada a aplicação dos seus recursos excedentes</b> em atividades distintas da própria atividade.</li>'+
      '<li>É <b>obrigatória a constituição de Conselho de Administração (CA)</b>.</li>'+
      '<li>É <b>obrigatória a participação de representantes do Poder Público no CA</b>.</li>'+
      '<li>A <b>remuneração dos conselheiros é vedada</b>.</li>'+
      '<li>Poderá ser <b>desqualificada</b> como OS se <b>descumprir o contrato de gestão</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">OSCIP — Organização da Sociedade Civil de Interesse Público</span>'+
      '<p>É a <b>qualificação jurídica</b> dada a pessoas jurídicas de direito privado, <b>sem fins lucrativos</b>, mediante vínculo jurídico instituído por meio de <b>Termo de Parceria</b>.</p>'+
      '<p><b>Definição dada pela banca CESPE:</b> as OSCIP são organizações <b>sem fins lucrativos</b>, voltadas à <b>resolução de problemas coletivos de interesse social</b>, e <b>podem prestar serviços públicos</b>.</p>'+
      '<ul><li>Celebram <b>Termo de Parceria</b> com o Poder Público.</li>'+
      '<li>Recebem a denominação de OSCIP de <b>forma vinculada</b>, pelo <b>Ministro da Justiça</b>.</li>'+
      '<li>Devem estar em <b>funcionamento há pelo menos 3 anos</b>.</li>'+
      '<li><b>Não há cessão de servidores</b> pela Administração Pública.</li>'+
      '<li>É <b>obrigatória a constituição de Conselho Fiscal (CF)</b>.</li>'+
      '<li>É <b>facultativa a participação de servidor público</b> no conselho ou na diretoria.</li>'+
      '<li><b>Permite a remuneração dos dirigentes.</b></li></ul></div>'+
      '<div class="box tip"><span class="bl">Quadro comparativo OS × OSCIP</span>'+
      '<div class="tree"><div class="leaf"><b>Vínculo:</b> OS → <b>Contrato de Gestão</b> · OSCIP → <b>Termo de Parceria</b>.</div>'+
      '<div class="leaf"><b>Conselho:</b> OS → <b>Conselho de Administração</b> · OSCIP → <b>Conselho Fiscal</b>.</div>'+
      '<div class="leaf"><b>Poder Público no conselho:</b> OS → participação <b>obrigatória</b> · OSCIP → participação de servidor <b>facultativa</b> (no conselho ou na diretoria).</div>'+
      '<div class="leaf"><b>Remuneração:</b> OS → <b>vedada</b> aos conselheiros · OSCIP → <b>permitida</b> aos dirigentes.</div>'+
      '<div class="leaf"><b>Servidores:</b> OS → <b>facultada</b> a cessão especial, com <b>ônus para a origem</b> · OSCIP → <b>não há</b> cessão de servidores.</div>'+
      '<div class="leaf"><b>Qualificação:</b> OS → <b>discricionária</b>, por <b>Ministro de Estado</b> · OSCIP → <b>vinculada</b>, pelo <b>Ministro da Justiça</b>.</div>'+
      '<div class="leaf"><b>Tempo de funcionamento:</b> OS → <b>não há prazo mínimo</b> · OSCIP → <b>3 anos</b>.</div></div></div>'+
      '<div class="box trap"><span class="bl">A frase que resolve meia dúzia de questões</span>'+
      '<p><b>OS não pode ser OSCIP, mas OSCIP pode ser OS.</b> Nos conceitos importantes do resumo a mesma ideia aparece assim: <b>não há vedação ao enquadramento de OSCIP como OS, mas há vedação ao enquadramento de OS como OSCIP</b>.</p>'+
      '<p>A razão está no art. 2º, IX, da Lei 9.790/99: as <b>organizações sociais</b> estão na lista de quem <b>não pode</b> ser qualificado como OSCIP.</p>'+
      '<p class="mn"><em>Contrato de GeStão → OS. Termo de ParCeria → OSCIP.</em></p></div>')
  ],
  V3:[
    sl("Vedações da Lei 9.790/99, entidades de apoio e conceitos importantes",
      '<div class="box"><span class="bl">Lei 9.790/99, art. 2º — quem NÃO pode ser OSCIP (DESPENCA)</span>'+
      '<ul><li><b>I</b> as sociedades comerciais.</li>'+
      '<li><b>II</b> os sindicatos, as associações de classe ou de representação de categoria profissional.</li>'+
      '<li><b>III</b> as instituições religiosas ou voltadas para a disseminação de credos, cultos, práticas e visões devocionais e confessionais.</li>'+
      '<li><b>IV</b> as organizações partidárias e assemelhadas, <b>inclusive suas fundações</b>.</li>'+
      '<li><b>V</b> as entidades de benefício mútuo destinadas a proporcionar bens ou serviços a um <b>círculo restrito</b> de associados ou sócios.</li>'+
      '<li><b>VI</b> as entidades e empresas que <b>comercializam planos de saúde</b> e assemelhados.</li>'+
      '<li><b>VII</b> as instituições hospitalares privadas <b>não gratuitas</b> e suas mantenedoras.</li>'+
      '<li><b>VIII</b> as escolas privadas dedicadas ao ensino formal <b>não gratuito</b> e suas mantenedoras.</li>'+
      '<li><b>IX</b> as <b>organizações sociais</b>.</li>'+
      '<li><b>X</b> as <b>cooperativas</b>.</li>'+
      '<li><b>XI</b> as <b>fundações públicas</b>.</li>'+
      '<li><b>XII</b> as fundações, sociedades civis ou associações de direito privado <b>criadas por órgão público ou por fundações públicas</b>.</li>'+
      '<li><b>XIII</b> as organizações creditícias com qualquer tipo de vinculação com o <b>sistema financeiro nacional</b> a que se refere o art. 192 da Constituição Federal.</li></ul></div>'+
      '<div class="box trap"><span class="bl">O parágrafo único — a exceção que a banca esconde</span>'+
      '<p><b>Não constituem impedimento</b> à qualificação como OSCIP as operações destinadas a <b>microcrédito</b> realizadas com instituições financeiras na forma de <b>recebimento de repasses</b>, <b>venda de operações realizadas</b> ou <b>atuação como mandatárias</b>.</p>'+
      '<p>Repare nos dois adjetivos dos incisos VII e VIII: hospital privado <b>não gratuito</b> e escola privada de ensino formal <b>não gratuito</b>. Tirar o “não gratuito” e vedar todo hospital ou toda escola é erro clássico.</p></div>'+
      '<div class="box"><span class="bl">Entidades de Apoio</span>'+
      '<ul><li>São <b>pessoas jurídicas de direito privado, sem fins lucrativos</b>.</li>'+
      '<li><b>Instituídas por servidores públicos, em nome próprio.</b></li>'+
      '<li>Possuem a forma de <b>fundação, associação ou cooperativa</b>.</li>'+
      '<li>Para a prestação, <b>em caráter privado</b>, de <b>serviços sociais não exclusivos do Estado</b>.</li>'+
      '<li>Mantêm vínculo jurídico com entidades da administração direta ou indireta, <b>em regra por meio de convênio</b>.</li></ul>'+
      '<p>A banca CESPE já cobrou essa definição inteira, palavra por palavra, com gabarito <b>CERTO</b>.</p></div>'+
      '<div class="box tip"><span class="bl">TOME NOTA — conceitos importantes (1 a 6)</span>'+
      '<ul><li>A qualificação como <b>OS</b> configura hipótese de <b>simples credenciamento</b>, que <b>não exige licitação</b> em razão da <b>ausência de competição</b>.</li>'+
      '<li>Não há vedação ao enquadramento de <b>OSCIP como OS</b>, mas há vedação ao enquadramento de <b>OS como OSCIP</b>.</li>'+
      '<li>É <b>vedada</b> à OSCIP a participação em <b>campanhas de interesse político-partidário ou eleitorais</b>, sob quaisquer meios ou formas.</li>'+
      '<li><b>Fundação vinculada a partido político</b>, voltada ao fomento do desenvolvimento econômico e social, <b>não poderá</b> ser classificada como OSCIP.</li>'+
      '<li>As <b>instituições religiosas</b> não são passíveis de qualificação como OSCIP.</li>'+
      '<li>As <b>entidades e empresas que comercializam planos de saúde</b> não são passíveis de qualificação como OSCIP.</li></ul></div>'+
      '<div class="box tip"><span class="bl">TOME NOTA — conceitos importantes (7 a 12)</span>'+
      '<ul><li><b>Chamamento público</b>: procedimento destinado a <b>selecionar organização da sociedade civil</b> para firmar parceria por <b>termo de colaboração</b> ou de <b>fomento</b> (ou de <b>parceria</b>), respeitando os princípios da <b>isonomia</b>, da <b>publicidade</b> e da <b>probidade administrativa</b>.</li>'+
      '<li>Para celebrar <b>termo de parceria</b> e aproveitar o regime da <b>Lei 9.790/99</b>, a entidade privada sem fins lucrativos precisa da <b>qualificação de OSCIP</b>.</li>'+
      '<li>O <b>estatuto</b> da OSCIP deve conter normas expressas sobre a observância dos princípios da <b>legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência</b>.</li>'+
      '<li>A <b>presença de servidor no conselho</b> é <b>facultativa</b> na OSCIP. Explicação do resumo: como a lei prevê expressamente a <b>transferência de recursos públicos à OS</b>, nela a presença de servidores no Conselho é <b>obrigatória</b>; não havendo a mesma previsão para a OSCIP, ali é <b>facultativa</b>.</li>'+
      '<li>OSCIP que firma termo de parceria com a União <b>deve contratar mediante processo licitatório</b>; o <b>TCU</b> entende pela <b>desnecessidade de licitação na forma da Lei de Licitações</b>, mas pela <b>obrigatoriedade de procedimento simplificado</b> previsto pela própria entidade privada.</li>'+
      '<li>Imóvel adquirido pela OSCIP com recursos do <b>Termo de Parceria</b> é <b>gravado com cláusula de inalienabilidade</b>.</li></ul></div>')
  ]
};

var EX = {
S1:{t:"sort", instr:"A qual setor pertence cada um?",
  buckets:["Primeiro setor","Segundo setor","Terceiro setor"],
  items:[["O Estado",0],
         ["O mercado",1],
         ["O setor privado empresarial, com fins lucrativos",1],
         ["Entidades privadas, sem fins lucrativos",2],
         ["As entidades paraestatais",2]],
  why:"Primeiro setor é o Estado; segundo, o mercado; terceiro, as entidades privadas sem fins lucrativos — onde estão as paraestatais."},

S2:{t:"multi", instr:"Marque as características das entidades paraestatais no quadro do resumo",
  options:["São pessoas jurídicas de direito privado, sem fins lucrativos",
           "Desempenham serviços não exclusivos do Estado, em colaboração com ele",
           "Recebem algum tipo de incentivo (fomento) do Poder Público",
           "Sujeitam-se ao controle da Administração Pública e do Tribunal de Contas",
           "Regime jurídico de direito privado, parcialmente derrogado pelo direito público",
           "Integram o terceiro setor",
           "Fazem parte da Administração Indireta",
           "Possuem fins lucrativos e exercem função exclusiva do Estado"],
  answers:[0,1,2,3,4,5],
  why:"As duas últimas são as negações do quadro: elas NÃO fazem parte da Administração Indireta e a função é típica, porém não exclusiva."},

S3:{t:"wordbank", instr:"Monte o conceito de entidades paraestatais",
  target:["São","pessoas","jurídicas","de","direito","privado","sem","fins","lucrativos","que","atuam","ao","lado","e","em","colaboração","com","o","Estado"],
  extra:["público","exclusivas","integrando","Administração"],
  why:"Direito privado, sem fins lucrativos, ao lado e em colaboração com o Estado — nunca dentro da Administração Indireta."},

S4:{t:"gap", instr:"Complete as espécies de entidades paraestatais",
  before:"As quatro espécies são SSA, OS, OSCIP e ",
  after:".",
  options:["Entidades de Apoio","Empresas públicas","Agências executivas"], answer:0,
  why:"Empresas públicas integram a Administração Indireta; as quatro paraestatais são SSA, OS, OSCIP e Entidades de Apoio."},

S5:{t:"mc", instr:"Os serviços sociais autônomos arrecadam:",
  options:["Contribuições parafiscais","Taxas","Preços públicos","Impostos"],
  answer:0,
  why:"É o item do quadro dos SSA: arrecadam contribuições parafiscais."},

S6:{t:"match", instr:"Correlacione cada item do quadro dos Serviços Sociais Autônomos",
  pairs:[["Beneficiários","Determinados grupos sociais ou profissionais"],
         ["Financiamento","Contribuições parafiscais"],
         ["Controle","Supervisão ministerial e Tribunal de Contas"],
         ["Licitação","Não se submetem à Lei de Licitações, apenas aos princípios da Administração"],
         ["Procedimentos","Podem editar regulamentos próprios"]],
  why:"Cinco linhas do quadro dos SSA — e a linha de licitação é a que mais aparece em prova."},

S7:{t:"match", instr:"Correlacione as siglas do sistema “S”",
  pairs:[["SESC","Serviço Social do Comércio"],
         ["SESI","Serviço Social da Indústria"],
         ["SENAI","Serviço Nacional de Aprendizagem Industrial"],
         ["SENAC","Serviço Nacional de Aprendizagem Comercial"],
         ["SEBRAE","Serviço Brasileiro de Apoio às Micro e Pequenas Empresas"]],
  why:"São os cinco exemplos de SSA que o resumo lista."},

S8:{t:"gap", instr:"Complete o vínculo jurídico da organização social",
  before:"A OS celebra com o Poder Público um ",
  after:".",
  options:["Contrato de Gestão","Termo de Parceria","convênio"], answer:0,
  why:"Termo de Parceria é da OSCIP; convênio é o vínculo das entidades de apoio."},

S9:{t:"gap", instr:"Complete o vínculo jurídico da OSCIP",
  before:"A OSCIP celebra com o Poder Público um ",
  after:".",
  options:["Termo de Parceria","Contrato de Gestão","contrato de adesão"], answer:0,
  why:"Contrato de Gestão é da OS. O termo de parceria é o instrumento da Lei 9.790/99."},

S10:{t:"sort", instr:"A característica é da OS ou da OSCIP?",
  buckets:["OS","OSCIP"],
  items:[["Celebra Contrato de Gestão",0],
         ["Celebra Termo de Parceria",1],
         ["Constitui Conselho de Administração",0],
         ["Constitui Conselho Fiscal",1],
         ["É obrigatória a participação do Poder Público no conselho",0],
         ["É facultativa a participação de servidor público no conselho ou na diretoria",1],
         ["É vedada a remuneração dos conselheiros",0],
         ["É permitida a remuneração dos dirigentes",1],
         ["É facultada a cessão especial de servidor, com ônus para a origem",0],
         ["Não há cessão de servidores pela Administração Pública",1],
         ["Qualificação discricionária, por Ministro de Estado",0],
         ["Qualificação vinculada, pelo Ministro da Justiça",1],
         ["Deve estar em funcionamento há pelo menos 3 anos",1],
         ["Não possui prazo mínimo de funcionamento",0]],
  why:"É o quadro comparativo do resumo, linha por linha."},

S11:{t:"mc", instr:"A qualificação de uma entidade como organização social é:",
  options:["Ato discricionário, praticado por Ministro de Estado",
           "Ato vinculado, praticado pelo Ministro da Justiça",
           "Ato vinculado, praticado por Ministro de Estado",
           "Ato discricionário, praticado pelo Ministro da Justiça"],
  answer:0,
  why:"Vinculado e do Ministro da Justiça é a qualificação da OSCIP — a banca troca os dois."},

S12:{t:"multi", instr:"Marque o que consta do LEVAR PARA A PROVA das organizações sociais",
  options:["Recebem bens e servidores da Administração Pública",
           "É vedada a aplicação dos recursos excedentes em atividades distintas da própria atividade",
           "É obrigatória a constituição de Conselho de Administração",
           "Poderá ser desqualificada como OS se descumprir o contrato de gestão",
           "Devem estar em funcionamento há pelo menos 3 anos",
           "É permitida a remuneração dos conselheiros"],
  answers:[0,1,2,3],
  why:"O prazo de 3 anos é da OSCIP; e na OS a remuneração dos conselheiros é vedada."},

S13:{t:"wordbank", instr:"Monte a regra do cruzamento entre as duas qualificações",
  target:["A","OS","não","pode","ser","OSCIP","mas","a","OSCIP","pode","ser","OS"],
  extra:["nem","jamais","tampouco"],
  why:"O art. 2º, IX, da Lei 9.790/99 veda a qualificação das organizações sociais como OSCIP — o caminho inverso é livre."},

S14:{t:"gap", instr:"Complete o prazo de funcionamento exigido da OSCIP",
  before:"Para ser qualificada como OSCIP, a entidade deve estar em funcionamento há pelo menos ",
  after:".",
  options:["3 anos","5 anos","2 anos"], answer:0,
  why:"A OS, ao contrário, não possui prazo mínimo de funcionamento."},

S15:{t:"multi", instr:"Marque quem NÃO é passível de qualificação como OSCIP (art. 2º da Lei 9.790/99)",
  options:["As sociedades comerciais",
           "Os sindicatos e as associações de representação de categoria profissional",
           "As instituições religiosas",
           "As organizações partidárias e assemelhadas, inclusive suas fundações",
           "As cooperativas",
           "As fundações públicas",
           "As organizações sociais",
           "As entidades que realizam operações de microcrédito com instituições financeiras"],
  answers:[0,1,2,3,4,5,6],
  why:"A última é a exceção do parágrafo único: operações de microcrédito NÃO constituem impedimento à qualificação."},

S16:{t:"sort", instr:"A situação é vedação do art. 2º ou não impede a qualificação como OSCIP?",
  buckets:["Vedado pelo art. 2º","Não impede a qualificação"],
  items:[["Escolas privadas dedicadas ao ensino formal não gratuito e suas mantenedoras",0],
         ["Instituições hospitalares privadas não gratuitas e suas mantenedoras",0],
         ["Entidades e empresas que comercializam planos de saúde",0],
         ["Organizações creditícias vinculadas ao sistema financeiro nacional",0],
         ["Entidades de benefício mútuo destinadas a um círculo restrito de associados",0],
         ["Operações de microcrédito realizadas com instituições financeiras",1]],
  why:"Repare no “não gratuito” dos incisos VII e VIII: a vedação não alcança hospitais e escolas gratuitos."},

S17:{t:"wordbank", instr:"Monte o começo do conceito de entidade de apoio",
  target:["Pessoas","jurídicas","de","direito","privado","sem","fins","lucrativos","instituídas","por","servidores","públicos","em","nome","próprio"],
  extra:["pelo","Poder","Público","mediante"],
  why:"Quem institui a entidade de apoio são os próprios servidores públicos, em nome próprio — e a forma é fundação, associação ou cooperativa."},

S18:{t:"mc", instr:"O vínculo das entidades de apoio com entidades da administração direta ou indireta é firmado, em regra, por meio de:",
  options:["Convênio","Contrato de gestão","Termo de parceria","Contrato de adesão"],
  answer:0,
  why:"Contrato de gestão é da OS; termo de parceria é da OSCIP."},

S19:{t:"match", instr:"Correlacione cada conceito importante do resumo",
  pairs:[["Qualificação como OS","Simples credenciamento, que não exige licitação por ausência de competição"],
         ["Chamamento público","Seleciona organização da sociedade civil para termo de colaboração, de fomento ou de parceria"],
         ["Imóvel comprado com recursos do Termo de Parceria","Gravado com cláusula de inalienabilidade"],
         ["OSCIP que firma termo de parceria com a União","Pelo TCU, procedimento simplificado da própria entidade, e não a Lei de Licitações"],
         ["Fundação vinculada a partido político","Não poderá ser classificada como OSCIP"]],
  why:"São cinco dos doze itens do TOME NOTA — a parte do resumo que mais reaparece em prova."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q1XwNe","Q1XwNe"],
  ["Caderno FCC — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q1wy43","Q1wy43"],
  ["Caderno FGV — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q1wy46","Q1wy46"],
  ["Caderno VUNESP — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q1wy4D","Q1wy4D"],
  ["Caderno AOCP — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q23QOg","Q23QOg"],
  ["Caderno IBFC — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q27XPW","Q27XPW"],
  ["Caderno FUNDATEC — Direito Administrativo 07","https://www.tecconcursos.com.br/s/Q27XPX","Q27XPX"]
];
var TECNOTA = "Três fronteiras respondem pela maioria dos erros deste assunto. A primeira é a moldura das paraestatais: são pessoas jurídicas de direito privado, sem fins lucrativos, que exercem função típica mas NÃO exclusiva do Estado, recebem fomento, respondem à Administração e ao Tribunal de Contas, têm regime privado parcialmente derrogado pelo direito público e NÃO fazem parte da Administração Indireta — e, nos serviços sociais autônomos, o ponto de ouro é não se submeterem à Lei de Licitações, apenas aos princípios, podendo editar regulamentos próprios. A segunda é o quadro comparativo OS × OSCIP, que a banca embaralha linha por linha: Contrato de Gestão e Conselho de Administração com participação obrigatória do Poder Público, remuneração de conselheiros vedada, cessão especial de servidor facultada com ônus para a origem, qualificação discricionária por Ministro de Estado e sem prazo mínimo, contra Termo de Parceria, Conselho Fiscal, participação de servidor facultativa, remuneração de dirigentes permitida, sem cessão de servidores, qualificação vinculada pelo Ministro da Justiça e 3 anos de funcionamento; e a frase que fecha tudo, OS não pode ser OSCIP, mas OSCIP pode ser OS. A terceira é a lista de vedações do art. 2º da Lei 9.790/99, que o resumo marca como DESPENCA: cuidado com os adjetivos dos incisos VII e VIII (hospital privado NÃO gratuito, escola de ensino formal NÃO gratuito) e com a exceção do parágrafo único, em que o microcrédito com instituições financeiras não impede a qualificação.";

var UNITS = [
  {n:1, title:"Terceiro setor, paraestatais e SSA", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Do terceiro setor ao sistema “S”",              xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · setores e conceito de paraestatal",  xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · o quadro das paraestatais",          xp:25, data:["S4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · serviços sociais autônomos",         xp:25, data:["S5","S6","S7","T10","T11","T12","T13","T14","T15"]},
    {id:"K5", type:"flash",  title:"Flashcards · paraestatais e sistema “S”",       xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Organizações Sociais e OSCIP", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Contrato de gestão, termo de parceria e o comparativo", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · OS e o contrato de gestão",          xp:25, data:["S8","S9","S10","T16","T17","T18","T19","T20","T21"]},
    {id:"K8", type:"drill",  title:"Praticar · bens, servidores e conselhos da OS", xp:25, data:["S11","S12","T22","T23","T24","T25","T26"]},
    {id:"K9", type:"drill",  title:"Praticar · OSCIP e o termo de parceria",        xp:25, data:["S13","S14","T27","T28","T29","T30","T31","T32","T33"]},
    {id:"K10",type:"flash",  title:"Flashcards · OS e OSCIP",                       xp:15, data:[14,15,16,17,18,19,20,21,22,23,24,25,26,27]}
  ]},
  {n:3, title:"Vedações, entidades de apoio e conceitos importantes", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Art. 2º da Lei 9.790/99, apoio e TOME NOTA",    xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · quem não pode ser OSCIP",            xp:25, data:["S15","S16","T34","T35","T36","T37","T38","T39","T40"]},
    {id:"K13",type:"drill",  title:"Praticar · entidades de apoio",                 xp:25, data:["S17","S18","T41","T42","T43","T44"]},
    {id:"K14",type:"drill",  title:"Praticar · conceitos importantes",              xp:25, data:["S19","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · vedações, apoio e TOME NOTA",      xp:15, data:[28,29,30,31,32,33,34,35,36]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                       xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                          xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                         xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 07 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo, é a frase de abertura do resumo: as entidades paraestatais <b>são as pessoas jurídicas de direito privado, sem fins lucrativos, que atuam ao lado e em colaboração com o Estado</b>.</p><p>O complemento dela é o que a banca costuma mexer: elas <b>exercem função típica, embora não exclusiva, do Estado, se sujeitando ao controle direto ou indireto do Poder Público</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais e Terceiro Setor</i></p>",
1:"<p>Errado em dois pontos. O resumo diz que elas exercem <b>função típica, embora NÃO exclusiva</b>, do Estado — e é justamente porque o serviço não é exclusivo que o particular pode prestá-lo em colaboração.</p><p>E a segunda metade também cai: elas <b>se sujeitam ao controle direto ou indireto do Poder Público</b>, e o quadro do resumo é expresso ao dizer que se sujeitam ao controle da <b>Administração Pública e do Tribunal de Contas</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais e Terceiro Setor</i></p>",
2:"<p>Certo pela literalidade do resumo: <b>terceiro setor => entidades privadas, sem fins lucrativos</b>.</p><p>Complete a escala, porque ela é cobrada nas três posições: <b>primeiro setor</b> é o <b>Estado</b>; <b>segundo setor</b> é o <b>mercado</b>, ou seja, o setor privado empresarial, <b>com fins lucrativos</b>; <b>terceiro setor</b> são as entidades privadas <b>sem</b> fins lucrativos — onde estão as paraestatais.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais e Terceiro Setor</i></p>",
3:"<p>Errado — inverteu os dois primeiros setores. No resumo: <b>primeiro setor => Estado</b> e <b>segundo setor => é o mercado, ou seja, o setor privado empresarial, com fins lucrativos</b>.</p><p>Fixe pela ordem de entrada em cena: o <b>Estado</b> é o primeiro, o <b>mercado</b> é o segundo, e o que sobra — o privado <b>sem</b> fins lucrativos — é o <b>terceiro</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais e Terceiro Setor</i></p>",
4:"<p>Certo, é linha do quadro <b>ENTIDADES PARAESTATAIS</b>: <b>desempenham serviços não exclusivos do Estado, porém em colaboração com ele</b>.</p><p>Essa linha é a chave de várias questões sobre OS e OSCIP: nenhuma delas presta <b>serviço público delegado</b>; prestam <b>atividade privada de interesse público</b>, em seu próprio nome.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais</i></p>",
5:"<p>Certo, é literalmente o que o quadro registra: as entidades paraestatais <b>recebem algum tipo de incentivo (fomento) do Poder Público</b>.</p><p>Guarde a palavra <b>fomento</b>: é ela que define a relação. O Estado não delega o serviço, ele <b>incentiva</b> quem já o presta em colaboração.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais</i></p>",
6:"<p>Errado na segunda metade. O quadro é expresso: elas <b>sujeitam-se ao controle da Administração Pública E do Tribunal de Contas</b>.</p><p>A razão é o dinheiro público do fomento. Nos serviços sociais autônomos o resumo repete a mesma ideia com outras palavras: <b>sujeitam-se à supervisão ministerial e ao controle do Tribunal de Contas</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais</i></p>",
7:"<p>Certo, é a linha do quadro: <b>regime jurídico de direito privado, parcialmente derrogado pelo direito público</b>.</p><p>“Parcialmente derrogado” explica as incoerências aparentes do assunto: a entidade é privada, mas responde ao Tribunal de Contas, observa os princípios da Administração e sofre controle do Poder Público.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais</i></p>",
8:"<p>Errado, e essa é das mais cobradas. O quadro do resumo diz o contrário, em uma linha só: as entidades paraestatais <b>não fazem parte da Administração Indireta</b>.</p><p>Elas <b>integram o terceiro setor</b> — atuam <b>ao lado</b> do Estado, não <b>dentro</b> dele. Autarquias, fundações públicas, empresas públicas e sociedades de economia mista é que compõem a Administração Indireta.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades Paraestatais</i></p>",
9:"<p>Certo, é a lista fechada do resumo: <b>espécies => SSA, OS, OSCIP e Entidades de Apoio</b>.</p><p>Por extenso: <b>Serviços Sociais Autônomos</b> (SSA — sistema “S”), <b>Organização Social</b> (OS), <b>Organização da Sociedade Civil de Interesse Público</b> (OSCIP) e <b>Entidades de Apoio</b>. São quatro, e a banca gosta de inserir uma quinta que não existe.</p><p class='fb-fonte'>Resumo 07 · <i>Espécies de Entidades Paraestatais</i></p>",
10:"<p>Certo, é o conceito do resumo: os SSA <b>são desempenhados por entidades que fornecem atividades de utilidade pública, sem fins lucrativos, que beneficiam determinados grupos sociais ou profissionais</b>.</p><p>O fecho do conceito completa o cenário: essas atividades são <b>usualmente direcionadas ao aprendizado profissionalizante e à prestação de serviços assistenciais</b>. O quadro repete o ponto: <b>beneficiam determinados grupos sociais ou profissionais</b>, e não a coletividade indistintamente.</p><p class='fb-fonte'>Resumo 07 · <i>Serviços Sociais Autônomos (SSA)</i></p>",
11:"<p>Errado na classificação. O resumo apresenta <b>SESC, SESI, SENAI, SENAC e SEBRAE</b> como <b>exemplos de SSA</b>, as entidades do <b>sistema “S”</b> — e não como organizações sociais.</p><p>Por extenso: SESC (Serviço Social do Comércio), SESI (Serviço Social da Indústria), SENAI (Serviço Nacional de Aprendizagem Industrial), SENAC (Serviço Nacional de Aprendizagem Comercial) e SEBRAE (Serviço Brasileiro de Apoio às Micro e Pequenas Empresas). <b>OS</b> é qualificação jurídica concedida por Ministro de Estado mediante <b>contrato de gestão</b> — coisa distinta.</p><p class='fb-fonte'>Resumo 07 · <i>Serviços Sociais Autônomos (SSA)</i></p>",
12:"<p>Certo, é linha do quadro dos SSA: <b>arrecadam contribuições parafiscais</b>.</p><p>É o traço financeiro que distingue o sistema “S” das demais paraestatais: o dinheiro vem de <b>contribuição</b> recolhida das categorias beneficiadas, e é por isso que a entidade responde ao <b>Tribunal de Contas</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Serviços Sociais Autônomos (SSA)</i></p>",
13:"<p>Errado, e essa linha do quadro é ponto de ouro: os SSA <b>não se submetem à Lei de Licitações, apenas aos princípios da Administração Pública</b>.</p><p>A consequência está na linha seguinte: eles <b>podem editar regulamentos próprios para seus procedimentos</b>. Não confunda “não licitar pela lei geral” com “contratar livremente”: os princípios continuam a valer, e o Tribunal de Contas continua a fiscalizar.</p><p class='fb-fonte'>Resumo 07 · <i>Serviços Sociais Autônomos (SSA)</i></p>",
14:"<p>Errado por corte. O quadro dos SSA traz as duas coisas juntas: <b>sujeitam-se à supervisão ministerial E ao controle do Tribunal de Contas</b>.</p><p>A assertiva mantém o Tribunal de Contas e derruba a supervisão ministerial — é a técnica da meia verdade. Confira com o quadro das paraestatais em geral, que também é duplo: controle da <b>Administração Pública</b> e do <b>Tribunal de Contas</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Serviços Sociais Autônomos (SSA)</i></p>",
15:"<p>Certo, é a última linha do quadro dos SSA: <b>podem editar regulamentos próprios para seus procedimentos</b>.</p><p>Ela é o par da linha anterior — <b>não se submetem à Lei de Licitações, apenas aos princípios da Administração Pública</b>. Memorize as duas juntas: sem lei geral de licitação, com regulamento próprio e sob os princípios.</p><p class='fb-fonte'>Resumo 07 · <i>Serviços Sociais Autônomos (SSA)</i></p>",
16:"<p>Certo, é a definição do resumo: a OS é <b>a qualificação jurídica dada a pessoas jurídicas de direito privado, sem fins lucrativos, mediante vínculo jurídico instituído por meio de Contrato de Gestão</b>.</p><p>Repare no vocabulário: OS não é um tipo de entidade que se cria, é uma <b>qualificação</b> que se concede a quem já existe. E o instrumento do vínculo é o <b>Contrato de Gestão</b> — o da OSCIP é o <b>Termo de Parceria</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais (OS)</i></p>",
17:"<p>Errado. O resumo é expresso: <b>à semelhança dos serviços sociais autônomos, as OS também não prestam serviço público delegado pelo Estado, mas sim atividade privada de interesse público (serviços não exclusivos do Estado), em seu próprio nome, com incentivo (fomento) do Estado</b>.</p><p>Três expressões salvam a questão: <b>atividade privada de interesse público</b>, <b>em seu próprio nome</b> e <b>fomento</b>. Delegação de serviço público é outro instituto — concessão e permissão.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais (OS)</i></p>",
18:"<p>Certo. É a <b>definição dada pela banca CESPE</b> que o resumo transcreve com gabarito <b>CERTO</b>: organizações sociais são <b>pessoas jurídicas de direito privado, sem fins lucrativos, cujas atividades sejam dirigidas ao ensino, à pesquisa científica, ao desenvolvimento tecnológico, à proteção e preservação do meio ambiente, à cultura e à saúde</b>.</p><p>Vale decorar a lista de áreas nessa ordem: <b>ensino, pesquisa científica, desenvolvimento tecnológico, meio ambiente, cultura e saúde</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — definição dada pela banca CESPE</i></p>",
19:"<p>Errado nos dois elementos, e essa é a troca preferida da banca. No <b>LEVAR PARA A PROVA</b> da OS: <b>recebem a denominação como OS por ato discricionário feito por Ministro de Estado</b>.</p><p>Quem qualifica de forma <b>vinculada</b>, e pelo <b>Ministro da Justiça</b>, é a <b>OSCIP</b>. Atalho: OS é a <b>discricionária</b> do Ministro de <b>Estado</b>; OSCIP é a <b>vinculada</b> do Ministro da <b>Justiça</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
20:"<p>Certo pela letra do resumo: as OS <b>não possuem prazo mínimo de funcionamento</b>.</p><p>É o contraste direto com a OSCIP, que <b>deve estar em funcionamento há pelo menos 3 anos</b>. Quando a assertiva puser um prazo na OS, ou tirar os 3 anos da OSCIP, o erro está aí.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
21:"<p>Errado por troca de regime. O resumo diz que <b>é facultada a cessão especial de servidor para as OS, com ônus para a origem</b> — facultada, não vedada.</p><p>E completa que as OS <b>recebem bens e servidores da Administração Pública</b>. Quem <b>não</b> tem cessão de servidores é a <b>OSCIP</b>: no quadro comparativo, <b>não há cessão de Servidores pela Adm Pública</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
22:"<p>Certo, é a literalidade do item: <b>é facultada a cessão especial de servidor para as OS, com ônus para a origem</b>.</p><p>“Com ônus para a origem” significa que o órgão cedente continua pagando o servidor. E guarde o par do quadro comparativo: na OS há cessão facultada; na <b>OSCIP não há cessão de servidores</b> pela Administração Pública.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
23:"<p>Errado. O resumo inverte a assertiva: <b>é vedada a aplicação dos seus recursos excedentes em atividades distintas da própria atividade</b>.</p><p>Faz sentido no desenho do terceiro setor: a entidade é <b>sem fins lucrativos</b> e recebe <b>fomento</b> público para uma finalidade determinada — o excedente volta para aquela mesma atividade.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
24:"<p>Certo nas duas partes, e são dois itens distintos do <b>LEVAR PARA A PROVA</b>: <b>é obrigatória a constituição de Conselho de Administração (CA)</b> e <b>é obrigatória a participação de representantes do Poder Público no CA</b>.</p><p>A explicação vem no conceito importante 10 do resumo: como a lei <b>prevê expressamente a possibilidade de transferência de recursos públicos à OS</b>, a presença de servidores públicos em seu Conselho é <b>obrigatória</b>; na OSCIP, sem essa previsão, é <b>facultativa</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
25:"<p>Errado. Na OS, <b>a remuneração dos conselheiros é vedada</b> — está no <b>LEVAR PARA A PROVA</b> e se repete no quadro comparativo.</p><p>A remuneração que o resumo <b>permite</b> é a dos <b>dirigentes da OSCIP</b>. Guarde o par: conselheiro de <b>OS</b> não recebe; dirigente de <b>OSCIP</b> pode receber.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro comparativo OS × OSCIP</i></p>",
26:"<p>Certo pela letra do resumo: a entidade <b>poderá ser desqualificada como OS se descumprir o contrato de gestão</b>.</p><p>É a contrapartida do vínculo: o <b>Contrato de Gestão</b> é o que institui a qualificação, então é o seu descumprimento que a desfaz.</p><p class='fb-fonte'>Resumo 07 · <i>Organizações Sociais — Levar para a prova</i></p>",
27:"<p>Certo, é a definição do resumo: a OSCIP é <b>a qualificação jurídica dada a pessoas jurídicas de direito privado, sem fins lucrativos, mediante vínculo jurídico instituído por meio de Termo de Parceria</b>.</p><p>A banca CESPE já cobrou o conteúdo material dessa qualificação, com gabarito CERTO: <b>as OSCIP são organizações sem fins lucrativos que são voltadas à resolução de problemas coletivos de interesse social e podem prestar serviços públicos</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Organização da Sociedade Civil de Interesse Público (OSCIP)</i></p>",
28:"<p>Errado nos dois elementos. No <b>LEVAR PARA A PROVA</b> da OSCIP: <b>recebem a denominação de OSCIP de forma vinculada pelo Ministro da Justiça</b>.</p><p>Ato <b>discricionário</b> de <b>Ministro de Estado</b> é a qualificação da <b>OS</b>. O contraste importa: preenchidos os requisitos da Lei 9.790/99, a OSCIP <b>tem direito</b> à qualificação; a OS depende de juízo de conveniência.</p><p class='fb-fonte'>Resumo 07 · <i>OSCIP — Levar para a prova</i></p>",
29:"<p>Errado no número. O resumo exige que a entidade <b>esteja em funcionamento há pelo menos 3 anos</b> para ser qualificada como OSCIP.</p><p>E lembre do outro lado do par: as <b>OS não possuem prazo mínimo de funcionamento</b>. Trocar 3 por 5 anos, ou exportar o prazo para a OS, são as duas versões dessa pegadinha.</p><p class='fb-fonte'>Resumo 07 · <i>OSCIP — Levar para a prova</i></p>",
30:"<p>Errado, trocou os conselhos. Na OSCIP <b>é obrigatória a constituição de Conselho Fiscal (CF)</b>; o <b>Conselho de Administração (CA)</b> é da <b>OS</b>.</p><p>O quadro comparativo do resumo coloca as duas linhas frente a frente: OS <b>constitui Conselho de Administração</b>, com participação obrigatória do Poder Público; OSCIP <b>constitui Conselho Fiscal</b>, com participação de servidor apenas <b>facultativa</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro comparativo OS × OSCIP</i></p>",
31:"<p>Certo nas duas partes, ambas do quadro comparativo: na OSCIP <b>é facultativa a participação de servidor público no conselho ou na diretoria</b> e <b>é permitida a remuneração dos dirigentes</b>.</p><p>O contraponto da OS fecha a comparação: lá a participação do Poder Público no CA é <b>obrigatória</b> e a <b>remuneração dos conselheiros é vedada</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro comparativo OS × OSCIP</i></p>",
32:"<p>Errado. O quadro comparativo é direto: na OSCIP <b>não há cessão de Servidores pela Adm Pública</b>.</p><p>A cessão existe na <b>OS</b>, e o resumo a descreve com precisão: as OS <b>recebem bens e servidores da Administração Pública</b>, e <b>é facultada a cessão especial de servidor para as OS, com ônus para a origem</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro comparativo OS × OSCIP</i></p>",
33:"<p>Errado — está invertido. A frase do resumo, que aparece nos dois quadros e ainda nos conceitos importantes, é: <b>OS não pode ser OSCIP, mas OSCIP pode ser OS</b>.</p><p>Nos conceitos importantes ela vem assim: <b>não há vedação ao enquadramento de OSCIP como OS, mas há vedação ao enquadramento de OS como OSCIP</b>. A base normativa é o art. 2º, IX, da Lei 9.790/99, que veda a qualificação das <b>organizações sociais</b> como OSCIP.</p><p class='fb-fonte'>Resumo 07 · <i>OSCIP — Levar para a prova / Conceitos importantes 02</i></p>",
34:"<p>Certo, é o inciso <b>I</b> da lista do art. 2º da Lei 9.790/99 transcrita no resumo, que ele marca com o aviso <b>DESPENCA</b>: <b>não são passíveis de qualificação como OSCIP as sociedades comerciais</b>.</p><p>A lógica atravessa toda a lista: OSCIP é entidade <b>sem fins lucrativos</b>, então quem tem finalidade empresarial está fora de partida.</p><p class='fb-fonte'>Resumo 07 · <i>Lei 9.790/99, art. 2º</i></p>",
35:"<p>Certo pelo inciso <b>II</b>: não são passíveis de qualificação como OSCIP <b>os sindicatos, as associações de classe ou de representação de categoria profissional</b>.</p><p>Repare no fio comum com o inciso <b>V</b>: também estão fora as <b>entidades de benefício mútuo destinadas a proporcionar bens ou serviços a um círculo restrito de associados ou sócios</b>. Interesse <b>de categoria</b> ou <b>de grupo fechado</b> não é interesse público.</p><p class='fb-fonte'>Resumo 07 · <i>Lei 9.790/99, art. 2º</i></p>",
36:"<p>Certo, e o resumo repete isso duas vezes. No inciso <b>III</b> do art. 2º: estão fora <b>as instituições religiosas ou voltadas para a disseminação de credos, cultos, práticas e visões devocionais e confessionais</b>. E no conceito importante 05: <b>as instituições religiosas não são passíveis de qualificação como Organizações da Sociedade Civil de Interesse Público</b>.</p><p>Quando um item aparece na lei e ainda no <b>TOME NOTA</b>, é sinal de que a banca já cobrou — decore.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 05</i></p>",
37:"<p>Certo, também com dupla base no resumo: inciso <b>VI</b> do art. 2º — <b>as entidades e empresas que comercializam planos de saúde e assemelhados</b> — e conceito importante 06, com a mesma redação da assertiva.</p><p>Vizinho de lista e igualmente cobrado: o inciso <b>VII</b> exclui as <b>instituições hospitalares privadas não gratuitas e suas mantenedoras</b>. Note o adjetivo: <b>não gratuitas</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 06</i></p>",
38:"<p>Errado — as duas estão na lista de vedações. Art. 2º da Lei 9.790/99: <b>X - as cooperativas</b> e <b>XI - as fundações públicas</b> não são passíveis de qualificação como OSCIP.</p><p>Cuidado com um detalhe que a banca explora: a <b>cooperativa</b> é vedada como <b>OSCIP</b>, mas é uma das formas admitidas para as <b>entidades de apoio</b> (fundação, associação ou cooperativa). Mesma palavra, institutos diferentes.</p><p class='fb-fonte'>Resumo 07 · <i>Lei 9.790/99, art. 2º</i></p>",
39:"<p>Errado por extensão indevida. O inciso <b>VII</b> veda apenas <b>as instituições hospitalares privadas NÃO GRATUITAS e suas mantenedoras</b>.</p><p>O mesmo adjetivo aparece no inciso <b>VIII</b>, para <b>as escolas privadas dedicadas ao ensino formal não gratuito e suas mantenedoras</b>. Tirar o “não gratuito” e vedar todo hospital ou toda escola privada é o erro clássico dessa lista.</p><p class='fb-fonte'>Resumo 07 · <i>Lei 9.790/99, art. 2º</i></p>",
40:"<p>Errado. O <b>parágrafo único</b> do art. 2º diz exatamente o contrário: <b>não constituem impedimento à qualificação como OSCIP as operações destinadas a microcrédito realizadas com instituições financeiras na forma de recebimento de repasses, venda de operações realizadas ou atuação como mandatárias</b>.</p><p>Não confunda com o inciso <b>XIII</b>, que veda <b>as organizações creditícias que tenham qualquer tipo de vinculação com o sistema financeiro nacional</b> (art. 192 da CF). Vinculação ao sistema financeiro veda; <b>microcrédito</b> nas três formas do parágrafo único, não.</p><p class='fb-fonte'>Resumo 07 · <i>Lei 9.790/99, art. 2º, parágrafo único</i></p>",
41:"<p>Certo, é o conceito importante 04, com esta mesma redação: <b>fundação vinculada a partido político e voltada para fomento ao desenvolvimento econômico e social não poderá ser classificada como OSCIP</b>.</p><p>A base está no inciso <b>IV</b> do art. 2º, que exclui <b>as organizações partidárias e assemelhadas, INCLUSIVE SUAS FUNDAÇÕES</b>. A finalidade nobre da fundação não afasta a vedação — o que importa é o vínculo partidário.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 04</i></p>",
42:"<p>Certo, é a literalidade do conceito importante 03: <b>é vedada às entidades qualificadas como OSCIP a participação em campanhas de interesse político-partidário ou eleitorais, sob quaisquer meios ou formas</b>.</p><p>Encaixa com o item anterior da mesma seção: fundação ligada a partido não pode ser OSCIP, e a OSCIP já qualificada não pode entrar em campanha. A entidade tem de servir ao interesse social, não ao eleitoral.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 03</i></p>",
43:"<p>Certo. É a definição que o resumo reproduz da banca CESPE, com gabarito CERTO: entidades de apoio são <b>pessoas jurídicas de direito privado, sem fins lucrativos, instituídas por servidores públicos, em nome próprio, sob a forma de fundação, associação ou cooperativa</b>.</p><p>O resto da definição também cai: para a prestação, <b>em caráter privado</b>, de <b>serviços sociais não exclusivos do Estado</b>, mantendo vínculo jurídico com entidades da administração direta ou indireta, <b>em regra por meio de convênio</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades de Apoio</i></p>",
44:"<p>Errado no instrumento. O resumo é expresso: as entidades de apoio <b>mantêm vínculo jurídico com entidades da administração direta ou indireta, EM REGRA POR MEIO DE CONVÊNIO</b>.</p><p>Guarde os três instrumentos em fila, porque a banca os embaralha: <b>Contrato de Gestão</b> → OS · <b>Termo de Parceria</b> → OSCIP · <b>convênio</b> → entidades de apoio.</p><p class='fb-fonte'>Resumo 07 · <i>Entidades de Apoio</i></p>",
45:"<p>Certo, é o conceito importante 01, palavra por palavra: <b>a qualificação da entidade como organização social (OS) configura hipótese de simples credenciamento, o qual não exige licitação em razão da ausência de competição</b>.</p><p>A chave é a expressão <b>ausência de competição</b>: não há disputa por um objeto único a ser adjudicado, porque qualquer entidade que preencha os requisitos pode ser credenciada.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 01</i></p>",
46:"<p>Certo, é o conceito importante 07: o <b>chamamento público</b> é <b>o procedimento destinado a selecionar organização da sociedade civil para firmar parceria por meio de termo de colaboração ou de fomento (ou de parceria), devendo respeitar os princípios da isonomia, da publicidade e da probidade administrativa</b>.</p><p>Decore os três princípios na ordem em que o resumo os traz — <b>isonomia, publicidade e probidade administrativa</b> — e os três instrumentos: termo de <b>colaboração</b>, de <b>fomento</b> ou de <b>parceria</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 07</i></p>",
47:"<p>Errado. O conceito importante 12 diz o oposto: <b>caso a OSCIP adquira bem imóvel com recursos provenientes da celebração do Termo de Parceria, este (o imóvel) será gravado com cláusula de inalienabilidade</b>.</p><p>A razão é a origem pública do dinheiro: o bem comprado com recursos do termo de parceria fica preso à finalidade, e não pode ser livremente vendido.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 12</i></p>",
48:"<p>Certo, é a redação do conceito importante 09: o estatuto da OSCIP deve conter <b>normas expressas sobre a observância dos princípios da legalidade, da impessoalidade, da moralidade, da publicidade, da economicidade e da eficiência</b>.</p><p>Note quais princípios entram: são os do <b>caput</b> do art. 37 da Constituição <b>mais a economicidade</b>. A banca gosta de suprimir um deles ou de trocar a economicidade por outro nome.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 09</i></p>",
49:"<p>Errado. O conceito importante 11 registra a afirmação de que as OSCIP com termo de parceria com a União <b>devem contratar mediante processo licitatório</b>, mas explica em seguida: <b>o TCU entende pela desnecessidade de licitação na forma da Lei de Licitações, mas obrigatoriedade de realização de procedimento simplificado (o que não deixa de ser um processo licitatório), previsto pela própria entidade privada</b>.</p><p>Ou seja: há procedimento seletivo, sim, mas <b>não</b> o da Lei de Licitações — é um <b>procedimento simplificado</b> da própria entidade. Compare com os SSA, que também <b>não se submetem à Lei de Licitações</b>, apenas aos princípios.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 11</i></p>",
50:"<p>Certo nas duas metades. Conceito importante 10: <b>os atributos caracterizadores de determinada entidade como OSCIP incluem a presença facultativa de servidor na composição do conselho</b>.</p><p>A explicação do resumo é o que faz a comparação funcionar: <b>como a lei prevê expressamente a possibilidade de transferência de recursos públicos à OS, a presença de servidores públicos em seu Conselho é obrigatória; contudo, como não há essa mesma previsão em relação à OSCIP, a presença de servidores em seu Conselho é facultativa</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Conceitos importantes 10</i></p>",
51:"<p>Errado. O inciso <b>IX</b> do art. 2º da Lei 9.790/99 está na lista de quem <b>NÃO</b> é passível de qualificação como OSCIP, e ele é exatamente <b>as organizações sociais</b>.</p><p>É a base normativa da frase que o resumo repete três vezes: <b>OS não pode ser OSCIP, mas OSCIP pode ser OS</b> — ou, como está nos conceitos importantes, <b>não há vedação ao enquadramento de OSCIP como OS, mas há vedação ao enquadramento de OS como OSCIP</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Lei 9.790/99, art. 2º, IX</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"07", nome:"Entidades paraestatais e Terceiro Setor", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
