/* Contabilidade Pública — Módulo 01: Conceitos iniciais e NBC TSP Estrutura Conceitual (Parte 01) */
window.MOD = window.MOD || {};
window.MOD.cpub01 = (function(){
"use strict";

var CARDS = [
  ["O que é a Contabilidade Pública?","Ramo especializado da contabilidade voltado à <b>administração financeira e contábil dos recursos públicos</b> — registro, controle e análise das transações financeiras e patrimoniais das entidades governamentais."],
  ["O que são as NBC TSP?","<b>Normas Brasileiras de Contabilidade Técnica do Setor Público</b>, estabelecidas pelo <b>Conselho Federal de Contabilidade (CFC)</b>, visando à <b>padronização e à transparência</b> da contabilidade no setor público."],
  ["O que a NBC TSP Estrutura Conceitual estabelece?","Os <b>conceitos que devem ser aplicados no desenvolvimento das demais NBCs TSP</b> e na elaboração e divulgação formal dos <b>RCPGs</b>."],
  ["O que são RCPGs?","<b>Relatórios Contábeis de Propósito Geral</b> das entidades do setor público."],
  ["O que os RCPGs abrangem (item 1.6)?","Podem compreender <b>múltiplos relatórios</b>; abrangem as <b>demonstrações contábeis, incluindo notas explicativas</b>; e também informações que <b>aprimoram, complementam e suplementam</b> as demonstrações."],
  ["Informação contábil × estatísticas de finanças públicas (item 20A)","Têm <b>objetivos distintos</b> e podem gerar <b>interpretações diferentes para o mesmo fenômeno</b>, mas deve-se buscar, <b>sempre que possível</b>, o <b>alinhamento</b> entre elas."],
  ["Exemplo da diferença entre contabilidade e estatística fiscal","Gratificações a servidores podem ser <b>despesa</b> na contabilidade pública e, ao mesmo tempo, ficar <b>fora do cálculo do déficit</b> nas estatísticas de finanças públicas."],
  ["De onde vêm muitos passivos do setor público (item 17)?","De <b>transações sem contraprestação</b> — inclusive as de programas de <b>benefícios sociais</b>."],
  ["Que outras origens de passivo o item 17 cita?","O papel governamental de <b>credor em última instância</b> de entidades com problemas financeiros, e obrigações de <b>transferir recursos para afetados por desastres</b>."],
  ["Quem são os usuários primários dos RCPGs (item 2.4)?","Os <b>usuários dos serviços</b> e seus representantes e os <b>provedores de recursos</b> e seus representantes. Os <b>membros do Poder Legislativo</b> são <b>também</b> usuários primários."],
  ["Por que os usuários primários precisam dos RCPGs?","Porque <b>não detêm a prerrogativa de exigir</b> que a entidade divulgue informações que atendam às suas necessidades específicas."],
  ["Exemplos de provedores de recursos","<b>Cidadãos</b> (impostos e taxas) · <b>instituições financeiras</b> (empréstimos e financiamentos) · <b>entidades privadas</b> (doações e repasses)."],
  ["Qual o objetivo da elaboração e divulgação da informação contábil (item 3.1)?","Fornecer informação para fins de <b>prestação de contas</b>, <b>responsabilização (accountability)</b> e <b>tomada de decisão</b>."],
  ["O que são as características qualitativas?","<b>Atributos que tornam a informação útil</b> aos usuários e dão suporte ao cumprimento dos objetivos da informação contábil."],
  ["Quais são as seis características qualitativas (item 3.2)?","<b>Relevância</b> · <b>Representação fidedigna</b> · <b>Compreensibilidade</b> · <b>Tempestividade</b> · <b>Comparabilidade</b> · <b>Verificabilidade</b>."],
  ["Mnemônico das características qualitativas","<b>RE²</b> (<b>RE</b>levância e <b>RE</b>presentação fidedigna) + <b>CO-CO-TE-VE</b> (<b>CO</b>mpreensibilidade, <b>CO</b>mparabilidade, <b>TE</b>mpestividade, <b>VE</b>rificabilidade)."],
  ["A NBC TSP separa características fundamentais e de melhoria?","<b>Não.</b> Essa distinção é só do <b>CPC 00</b>, da contabilidade <b>societária</b>. Na NBC TSP as seis estão <b>no mesmo plano</b>."],
  ["Quando a informação é relevante (item 3.6)?","Quando é <b>capaz de influenciar significativamente</b> o cumprimento dos objetivos da informação contábil — o que ocorre quando tem <b>valor confirmatório, preditivo ou ambos</b>."],
  ["A informação deixa de ser relevante se o usuário a ignora?","<b>Não.</b> Ela pode ser relevante <b>mesmo se alguns usuários decidirem não considerá-la ou já estiverem cientes dela</b>."],
  ["O que é valor confirmatório (item 3.7)?","A informação <b>confirma ou altera expectativas passadas (ou presentes)</b> — por exemplo, sobre o uso eficiente e eficaz dos recursos, a realização dos objetivos de prestação de serviços e o cumprimento da legislação orçamentária."],
  ["O que é valor preditivo (item 3.8)?","A informação <b>voltada para o futuro</b> — objetivos, custos, atividades previstas, montante e fontes de recursos a serem alocados. Informação sobre o <b>passado</b> também pode ter valor preditivo ao ajudar a formar expectativas."],
  ["A relevância alcança informação não financeira?","<b>Sim.</b> Financeira (ex.: despesas com empregados) <b>e</b> não financeira (ex.: quantidade de empregados)."],
  ["O que é representação fidedigna (item 3.10)?","A informação deve <b>corresponder aos fenômenos que se pretende representar</b>. É alcançada quando a representação é <b>completa, neutra e livre de erro material</b>."],
  ["Representação fidedigna — o que significa completa?","A descrição deve incluir a <b>representação numérica</b> junto com outras informações <b>quantitativas, descritivas e explicativas</b>."],
  ["Representação fidedigna — o que significa neutra?","<b>Ausência de viés</b>: a seleção e a apresentação das informações não devem buscar <b>atingir um resultado particular predeterminado</b>."],
  ["Representação fidedigna — o que significa livre de erro material?","<b>Não</b> significa <b>exatidão completa</b> em todos os aspectos — significa que <b>não há erros ou omissões relevantes</b> na descrição do fenômeno."],
  ["Substância ou forma jurídica?","A informação que representa fielmente um fenômeno retrata a <b>substância da transação</b>, a qual <b>pode não corresponder à sua forma jurídica</b>."],
  ["O que é compreensibilidade (item 3.17)?","A qualidade que permite aos usuários <b>compreender o significado</b> da informação — apresentada conforme as necessidades e a base de conhecimento dos usuários e a natureza da informação."],
  ["Como se aprimora a compreensão?","Quando a informação é <b>classificada e apresentada de maneira clara e sucinta</b>. A <b>comparabilidade</b> também pode aprimorá-la."],
  ["Informação complexa pode ser excluída dos RCPGs?","<b>Não.</b> A informação <b>não deve ser excluída</b> só por ser muito complexa ou difícil de compreender sem assistência — espera-se que o usuário tenha <b>conhecimento razoável</b> e possa recorrer a <b>assistente</b>."],
  ["O que é tempestividade (item 3.19)?","Ter a informação <b>disponível antes que perca a capacidade de ser útil</b> para prestação de contas, accountability e tomada de decisão. A ausência de tempestividade <b>torna a informação menos útil</b>."],
  ["O que é comparabilidade (item 3.21)?","A qualidade que permite <b>identificar semelhanças e diferenças entre dois conjuntos de fenômenos</b>. Não é qualidade de <b>item individual</b>, mas da <b>relação entre dois ou mais itens</b>."],
  ["Comparabilidade × consistência (item 3.22)","<b>Consistência</b> é usar os mesmos princípios, políticas e base de elaboração — <b>de período a período na mesma entidade</b> ou <b>num único período entre entidades</b>. A <b>comparabilidade é o objetivo</b>; a consistência <b>auxilia a atingi-lo</b>."],
  ["Comparabilidade × uniformidade (item 3.23)","Para ser comparável, <b>coisas semelhantes devem parecer semelhantes e coisas distintas devem parecer distintas</b>. A ênfase demasiada na uniformidade <b>reduz</b> a comparabilidade."],
  ["O que é verificabilidade (item 3.26)?","A qualidade que <b>assegura aos usuários</b> que a informação <b>representa fielmente</b> os fenômenos que se propõe a representar."],
  ["O que é suportabilidade?","O mesmo atributo, quando aplicado à <b>informação explicativa</b> e à <b>informação prospectiva</b> (quantitativa, financeira e não financeira) divulgada nos RCPGs."],
  ["O teste dos dois observadores","<b>Dois observadores esclarecidos e independentes</b> podem chegar ao <b>consenso geral</b>, mas <b>não necessariamente à concordância completa</b>, de que a informação representa os fenômenos sem erro material ou viés, ou que o reconhecimento, a mensuração ou o método foi aplicado sem erro material ou viés."],
  ["O que é materialidade (item 3.32)?","A informação é material se a sua <b>omissão ou distorção</b> puder influenciar o cumprimento do dever de <b>prestação de contas e accountability</b>, <b>ou</b> as <b>decisões</b> que os usuários tomam com base nos RCPGs daquele exercício."],
  ["De que depende a materialidade?","Tanto da <b>natureza</b> quanto do <b>montante</b> do item, dentro das particularidades de cada entidade."],
  ["Existe um limite quantitativo de materialidade?","<b>Não.</b> Como os RCPGs englobam informação <b>qualitativa e quantitativa</b>, <b>não é possível especificar um limite quantitativo uniforme</b>."],
  ["O que diz a restrição custo-benefício (item 3.35)?","A informação contábil <b>impõe custos</b>, e seus <b>benefícios devem justificá-los</b>. Avaliar isso é, com frequência, <b>questão de julgamento de valor</b>, pois não se identificam todos os custos e benefícios."],
  ["Como as características qualitativas se relacionam (item 3.41)?","Funcionam <b>conjuntamente</b>. Nem a descrição fiel de um fenômeno <b>irrelevante</b>, nem a descrição <b>não fidedigna</b> de um fenômeno relevante produzem informação útil. Para ser relevante, a informação precisa ser <b>tempestiva e compreensível</b>."],
  ["Quais são as três restrições da informação (item 3.3)?","A <b>materialidade</b>, o <b>custo-benefício</b> e o <b>alcance do equilíbrio entre as características qualitativas</b>."],
  ["Restrição ou característica? — o quadro","<b>Características (6):</b> relevância, representação fidedigna, compreensibilidade, tempestividade, comparabilidade, verificabilidade. <b>Restrições (3):</b> materialidade, custo-benefício, equilíbrio."]
];

var QS = [
  ["A contabilidade pública é ramo especializado da contabilidade voltado à administração financeira e contábil dos recursos públicos, seguindo normas específicas como as NBC TSP.","C","FUNDATEC","Conceito inicial do resumo."],
  ["As Normas Brasileiras de Contabilidade Aplicadas ao Setor Público são estabelecidas pelo Conselho Federal de Contabilidade.","C","CESPE","O CFC edita as NBC TSP, visando padronização e transparência."],
  ["A Estrutura Conceitual estabelece os conceitos que devem ser aplicados no desenvolvimento das demais NBCs TSP e na elaboração e divulgação dos Relatórios Contábeis de Propósito Geral.","C","FCC","Item 1 da NBC TSP Estrutura Conceitual."],
  ["A Estrutura Conceitual é uma NBC TSP e, em caso de conflito, prevalece sobre as demais normas do setor público.","E","FGV","A Estrutura Conceitual <b>não</b> se sobrepõe às normas: ela orienta o desenvolvimento delas."],
  ["Os RCPGs podem compreender múltiplos relatórios, cada qual atendendo a certos aspectos dos objetivos e do alcance da divulgação da informação contábil.","C","CESPE","Item 1.6."],
  ["Os RCPGs abrangem as demonstrações contábeis, incluindo as suas notas explicativas.","C","VUNESP","Item 1.6 — as notas integram as demonstrações."],
  ["Os RCPGs restringem-se às demonstrações contábeis, não alcançando informações que as complementem ou suplementem.","E","FUNDATEC","Abrangem também as informações que <b>aprimoram, complementam e suplementam</b> as demonstrações."],
  ["Os objetivos das informações contábeis e das estatísticas de finanças públicas são distintos e podem ocasionar interpretações diferentes para o mesmo fenômeno.","C","FCC","Item 20A — mas deve-se buscar o alinhamento sempre que possível."],
  ["Por terem objetivos distintos, a informação contábil e as estatísticas de finanças públicas não devem ser alinhadas.","E","FGV","O item 20A determina buscar o alinhamento <b>sempre que possível</b>."],
  ["Muitos passivos do setor público são oriundos de transações sem contraprestação, incluindo os relacionados a programas de benefícios sociais.","C","CESPE","Item 17."],
  ["Os passivos do setor público podem ser oriundos do papel governamental de credor em última instância de entidades com problemas financeiros.","C","VUNESP","Item 17 — e também de obrigações com afetados por desastres."],
  ["Para os propósitos da Estrutura Conceitual, são usuários primários dos RCPGs os usuários dos serviços e seus representantes e os provedores de recursos e seus representantes.","C","FUNDATEC","Item 2.4."],
  ["Os membros do Poder Legislativo são usuários secundários dos RCPGs, pois dispõem de meios próprios de obter informação.","E","FCC","O item 2.4 os qualifica como usuários <b>primários</b>, que utilizam os relatórios extensiva e continuamente."],
  ["Os RCPGs são elaborados principalmente para atender a usuários que não detêm a prerrogativa de exigir a divulgação de informações que atendam às suas necessidades específicas.","C","CESPE","É a razão de ser do relatório de propósito <b>geral</b>."],
  ["O objetivo da elaboração e divulgação da informação contábil é fornecer informação para fins de prestação de contas, responsabilização (accountability) e tomada de decisão.","C","FGV","Item 3.1."],
  ["As características qualitativas são atributos que tornam a informação útil aos usuários e dão suporte ao cumprimento dos objetivos da informação contábil.","C","VUNESP","Item 3.1."],
  ["São características qualitativas da informação incluída nos RCPGs a relevância, a representação fidedigna, a compreensibilidade, a tempestividade, a comparabilidade e a verificabilidade.","C","FUNDATEC","Item 3.2 — são seis."],
  ["A NBC TSP Estrutura Conceitual classifica a relevância e a representação fidedigna como características qualitativas fundamentais e as demais como de melhoria.","E","CESPE","Essa distinção é apenas do <b>CPC 00</b>, da contabilidade societária. A NBC TSP <b>não</b> a faz."],
  ["A materialidade é uma das características qualitativas da informação nos RCPGs.","E","FCC","A materialidade é uma das três <b>restrições</b> (item 3.3), não uma característica."],
  ["A informação é relevante quando é capaz de influenciar significativamente o cumprimento dos objetivos da elaboração e divulgação da informação contábil.","C","FGV","Item 3.6 — por ter valor confirmatório, preditivo ou ambos."],
  ["A relevância alcança apenas informações financeiras.","E","VUNESP","Alcança financeiras e <b>não financeiras</b> — por exemplo, a quantidade de empregados."],
  ["A informação deixa de ser relevante se alguns usuários decidirem não considerá-la ou já estiverem cientes dela.","E","CESPE","O item 3.6 diz exatamente o contrário: ela pode ser relevante mesmo assim."],
  ["A informação tem valor confirmatório se confirmar ou alterar expectativas passadas ou presentes.","C","FUNDATEC","Item 3.7."],
  ["A informação voltada para o futuro, como objetivos, custos e atividades previstas de prestação de serviços, tem valor preditivo.","C","FCC","Item 3.8."],
  ["Informação sobre fenômenos que já ocorreram não pode ter valor preditivo.","E","FGV","O item 3.8 admite que ela tenha, ao auxiliar a formar expectativas sobre o futuro."],
  ["A representação fidedigna é alcançada quando a representação do fenômeno é completa, neutra e livre de erro material.","C","CESPE","Item 3.10."],
  ["A informação que representa fielmente um fenômeno retrata a substância da transação, que pode não corresponder à sua forma jurídica.","C","VUNESP","Item 3.10 — primazia da essência sobre a forma."],
  ["Ser livre de erro material significa exatidão completa em todos os aspectos.","E","FUNDATEC","Significa que não há erros ou omissões <b>relevantes</b> na descrição do fenômeno."],
  ["A neutralidade corresponde à ausência de viés, de modo que a seleção e a apresentação das informações não busquem atingir resultado particular predeterminado.","C","FCC","É o segundo requisito da representação fidedigna."],
  ["A descrição completa deve incluir a representação numérica juntamente com outras informações quantitativas, descritivas e explicativas.","C","CESPE","É o primeiro requisito da representação fidedigna."],
  ["A compreensibilidade é a qualidade da informação que permite que os usuários compreendam o seu significado.","C","FGV","Item 3.17."],
  ["A compreensão é aprimorada quando a informação é classificada e apresentada de maneira clara e sucinta.","C","VUNESP","Item 3.17 — e a comparabilidade também pode aprimorá-la."],
  ["A informação deve ser excluída dos RCPGs quando for muito complexa ou difícil de ser compreendida por alguns usuários.","E","FUNDATEC","Item 3.18 — a informação <b>não deve</b> ser excluída por esse motivo."],
  ["Espera-se que os usuários dos RCPGs tenham conhecimento razoável das atividades da entidade e do ambiente em que ela funciona.","C","CESPE","Item 3.18 — e que analisem a informação com a diligência apropriada."],
  ["Tempestividade significa ter informação disponível para os usuários antes que ela perca a sua capacidade de ser útil.","C","FCC","Item 3.19."],
  ["A ausência de tempestividade torna a informação inútil e impede a sua divulgação.","E","FGV","O item 3.19 diz que a torna <b>menos útil</b> — não que a impeça."],
  ["Comparabilidade é a qualidade da informação que possibilita aos usuários identificar semelhanças e diferenças entre dois conjuntos de fenômenos.","C","VUNESP","Item 3.21."],
  ["A comparabilidade é uma qualidade do item individual de informação.","E","FUNDATEC","É a qualidade da <b>relação entre dois ou mais itens</b> de informação."],
  ["A consistência se refere à utilização dos mesmos princípios ou políticas contábeis e da mesma base de elaboração, de período a período dentro da entidade ou de um único período entre duas ou mais entidades.","C","CESPE","Item 3.22."],
  ["A consistência é o objetivo, e a comparabilidade auxilia a atingi-lo.","E","FCC","Está invertido: a <b>comparabilidade é o objetivo</b>; a consistência auxilia a alcançá-lo."],
  ["Para que a informação seja comparável, coisas semelhantes devem parecer semelhantes e coisas distintas devem parecer distintas.","C","FGV","Item 3.23 — comparabilidade não é uniformidade."],
  ["A ênfase demasiada na uniformidade aprimora a comparabilidade da informação.","E","VUNESP","Item 3.23 — ela <b>reduz</b> a comparabilidade ao fazer coisas distintas parecerem semelhantes."],
  ["A verificabilidade é a qualidade que ajuda a assegurar aos usuários que a informação representa fielmente os fenômenos que se propõe a representar.","C","FUNDATEC","Item 3.26."],
  ["A suportabilidade é utilizada para descrever a verificabilidade quando aplicada à informação explicativa e à informação prospectiva divulgada nos RCPGs.","C","CESPE","Item 3.26 — é o mesmo atributo, com outro nome."],
  ["A verificabilidade implica que dois observadores esclarecidos e independentes cheguem necessariamente à concordância completa.","E","FCC","Chegam ao <b>consenso geral</b>, mas <b>não necessariamente à concordância completa</b>."],
  ["A informação é material se a sua omissão ou distorção puder influenciar o cumprimento do dever de prestação de contas e responsabilização, ou as decisões que os usuários tomam com base nos RCPGs.","C","FGV","Item 3.32."],
  ["A materialidade depende exclusivamente do montante do item analisado.","E","VUNESP","Depende <b>tanto da natureza quanto do montante</b>, nas particularidades de cada entidade."],
  ["É possível especificar um limite quantitativo uniforme a partir do qual determinada informação se torna material.","E","FUNDATEC","Item 3.32 — <b>não</b> é possível, porque os RCPGs englobam informação qualitativa e quantitativa."],
  ["A informação contábil impõe custos, e seus benefícios devem justificá-los.","C","CESPE","Item 3.35 — restrição custo-benefício."],
  ["Avaliar se os benefícios da informação justificam seus custos é uma aferição objetiva, pois todos os custos e benefícios são identificáveis.","E","FCC","É, com frequência, <b>questão de julgamento de valor</b>, justamente porque não se identificam todos."],
  ["As características qualitativas funcionam conjuntamente para contribuir com a utilidade da informação.","C","FGV","Item 3.41 — por isso a descrição fiel de fenômeno irrelevante não gera informação útil."],
  ["São restrições inerentes à informação contida nos RCPGs a materialidade, o custo-benefício e o alcance do equilíbrio entre as características qualitativas.","C","FUNDATEC","Item 3.3 — as três restrições."]
];

var FEY = {
  U1:{ask:"Explique o que é a contabilidade pública, o que são os RCPGs e quem são os seus usuários.",
    hint:"NBC TSP e quem as edita; o papel da Estrutura Conceitual; o que os RCPGs abrangem; a relação com as estatísticas fiscais; a origem dos passivos públicos; e os usuários primários.",
    ref:"A contabilidade pública é ramo especializado da contabilidade voltado à administração financeira e contábil dos recursos públicos, abrangendo o registro, o controle e a análise das transações financeiras e patrimoniais das entidades governamentais, e segue normas próprias — as Normas Brasileiras de Contabilidade Aplicadas ao Setor Público, editadas pelo Conselho Federal de Contabilidade com vistas à padronização e à transparência. Entre elas, a NBC TSP Estrutura Conceitual estabelece os conceitos que devem ser aplicados no desenvolvimento das demais normas e na elaboração e divulgação formal dos Relatórios Contábeis de Propósito Geral das entidades do setor público, os RCPGs. Esses relatórios podem compreender múltiplos documentos, cada qual atendendo a certos aspectos dos objetivos e do alcance da divulgação contábil; abrangem as demonstrações contábeis, incluindo suas notas explicativas, e também a apresentação de informações que aprimoram, complementam e suplementam essas demonstrações. A Estrutura Conceitual reconhece ainda que os objetivos das informações contábeis e das estatísticas de finanças públicas são distintos e podem ocasionar interpretações diferentes para o mesmo fenômeno, devendo-se buscar, sempre que possível, o alinhamento entre elas. Quanto aos passivos, registra que muitos são oriundos de transações sem contraprestação, inclusive os relacionados a programas de benefícios sociais, podendo ainda decorrer do papel governamental de credor em última instância de entidades com problemas financeiras e de obrigações de transferência de recursos para afetados por desastres. Por fim, os RCPGs são elaborados principalmente para atender às necessidades de informação dos usuários dos serviços e dos provedores de recursos, quando estes não detêm a prerrogativa de exigir divulgação específica, sendo os membros do Poder Legislativo também usuários primários, que utilizam esses relatórios extensiva e continuamente enquanto representam os interesses daqueles."},
  U2:{ask:"Explique as características qualitativas da relevância e da representação fidedigna.",
    hint:"Liste primeiro as seis características e a advertência sobre o CPC 00; depois relevância com valor confirmatório e preditivo; depois os três requisitos da representação fidedigna e a primazia da substância.",
    ref:"As características qualitativas da informação incluída nos RCPGs são atributos que a tornam útil aos usuários e dão suporte ao cumprimento dos objetivos da informação contábil, que são a prestação de contas, a responsabilização — accountability — e a tomada de decisão. São seis: relevância, representação fidedigna, compreensibilidade, tempestividade, comparabilidade e verificabilidade. Registre-se, desde logo, que a NBC TSP Estrutura Conceitual não distingue entre características qualitativas fundamentais e de melhoria, distinção própria apenas do CPC 00, aplicável à contabilidade societária. A informação é relevante quando é capaz de influenciar significativamente o cumprimento dos objetivos da divulgação contábil, o que ocorre quando tem valor confirmatório, preditivo ou ambos, e essa relevância alcança tanto informações financeiras quanto não financeiras; a informação pode ser relevante mesmo que alguns usuários decidam não considerá-la ou já estejam cientes dela. Tem valor confirmatório a informação que confirma ou altera expectativas passadas ou presentes, por exemplo quanto à extensão em que os gestores cumpriram suas responsabilidades pelo uso eficiente e eficaz dos recursos, à realização dos objetivos de prestação de serviços e ao cumprimento da legislação e dos regulamentos orçamentários. Tem valor preditivo a informação voltada para o futuro, como objetivos, custos e atividades previstas de prestação de serviços e o montante e as fontes de recursos a serem alocados, admitindo-se que também a informação sobre fenômenos já ocorridos tenha valor preditivo ao auxiliar a formar expectativas. Quanto à representação fidedigna, para ser útil a informação deve corresponder à representação dos fenômenos que se pretende representar, o que é alcançado quando essa representação é completa — incluindo a representação numérica junto de informações quantitativas, descritivas e explicativas —, neutra — isto é, sem viés, sem que a seleção e a apresentação busquem atingir resultado particular predeterminado — e livre de erro material, o que não significa exatidão completa em todos os aspectos, mas ausência de erros ou omissões relevantes. Por fim, a informação fidedigna retrata a substância da transação, que pode não corresponder necessariamente à sua forma jurídica."},
  U3:{ask:"Explique a compreensibilidade, a tempestividade, a comparabilidade e a verificabilidade.",
    hint:"Em cada uma, o conceito e a pegadinha: complexidade não exclui; ausência de tempestividade só reduz a utilidade; comparabilidade não é consistência nem uniformidade; verificabilidade é consenso geral, não concordância completa.",
    ref:"A compreensibilidade é a qualidade da informação que permite que os usuários compreendam o seu significado, devendo os RCPGs apresentá-la de maneira que corresponda às necessidades e à base de conhecimento dos usuários e à natureza da informação, em linguagem simples, sendo a compreensão aprimorada quando a informação é classificada e apresentada de maneira clara e sucinta — e a comparabilidade também pode aprimorá-la. Espera-se dos usuários conhecimento razoável das atividades da entidade e do ambiente em que funciona, bem como disposição para analisar a informação com a diligência apropriada; alguns fenômenos são particularmente complexos e alguns usuários podem precisar de assistente, mas a informação não deve ser excluída dos RCPGs somente por ser complexa ou difícil de compreender. A tempestividade significa ter a informação disponível para os usuários antes que ela perca a capacidade de ser útil para prestação de contas, accountability e tomada de decisão, de modo que a sua ausência torna a informação menos útil. A comparabilidade é a qualidade que possibilita identificar semelhanças e diferenças entre dois conjuntos de fenômenos, não sendo qualidade de item individual, mas da relação entre dois ou mais itens de informação; difere da consistência, que é a utilização dos mesmos princípios ou políticas contábeis e da mesma base de elaboração, de período a período dentro da entidade ou de um único período entre duas ou mais entidades — a comparabilidade é o objetivo e a consistência auxilia a atingi-lo. Difere também da uniformidade, pois, para que a informação seja comparável, coisas semelhantes devem parecer semelhantes e coisas distintas devem parecer distintas, de sorte que a ênfase demasiada na uniformidade reduz a comparabilidade. Por fim, a verificabilidade é a qualidade que ajuda a assegurar aos usuários que a informação contida nos RCPGs representa fielmente os fenômenos que se propõe a representar, sendo também chamada de suportabilidade quando aplicada à informação explicativa e à informação prospectiva; ela implica que dois observadores esclarecidos e independentes possam chegar ao consenso geral, mas não necessariamente à concordância completa, de que a informação representa os fenômenos sem erro material ou viés, ou de que o reconhecimento, a mensuração ou o método de representação foi aplicado sem erro material ou viés."},
  U4:{ask:"Explique as três restrições da informação contábil no setor público.",
    hint:"Materialidade com os dois fatores e a ausência de limite quantitativo; custo-benefício como julgamento de valor; e o equilíbrio entre as características.",
    ref:"A NBC TSP Estrutura Conceitual enuncia, no item 3.3, três restrições inerentes à informação contida nos RCPGs: a materialidade, o custo-benefício e o alcance do equilíbrio entre as características qualitativas. A informação é material se a sua omissão ou distorção puder influenciar o cumprimento do dever de prestação de contas e responsabilização, ou as decisões que os usuários tomam com base nos relatórios elaborados para aquele exercício; a materialidade depende tanto da natureza quanto do montante do item analisado, dentro das particularidades de cada entidade, e, como os RCPGs englobam informação qualitativa e quantitativa acerca do cumprimento da prestação de serviços e das expectativas futuras, não é possível especificar um limite quantitativo uniforme a partir do qual a informação se torna material. Quanto ao custo-benefício, a informação contábil impõe custos — de coleta, processamento e divulgação — e seus benefícios devem justificá-los, sendo essa avaliação, com frequência, questão de julgamento de valor, pois não é possível identificar todos os custos e todos os benefícios da informação incluída nos relatórios. Por fim, o equilíbrio entre as características qualitativas decorre de que elas funcionam conjuntamente para contribuir com a utilidade da informação: nem a descrição que represente fielmente um fenômeno irrelevante, nem a descrição que represente de modo não fidedigno um fenômeno relevante resultam em informação útil, e, para ser relevante, a informação precisa ser tempestiva e compreensível. Não se confundam, portanto, as três restrições com as seis características qualitativas — a materialidade, em especial, é restrição, e não característica."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Contabilidade pública, NBC TSP e a Estrutura Conceitual",
      '<div class="box"><span class="bl">O ramo</span><p>A contabilidade pública concentra-se na <b>administração financeira e contábil dos recursos públicos</b>: registro, controle e análise das transações financeiras e patrimoniais de órgãos, autarquias, fundações e estatais.</p></div>'+
      '<div class="box tip"><span class="bl">NBC TSP</span><p><b>Normas Brasileiras de Contabilidade Técnica do Setor Público</b>, editadas pelo <b>Conselho Federal de Contabilidade</b>, para <b>padronizar</b> e dar <b>transparência</b> à contabilidade pública.</p></div>'+
      '<div class="tree">'+
      '<div class="tree-root">NBC TSP — Estrutura Conceitual</div>'+
      '<div class="leaf">Estabelece os conceitos aplicados no <b>desenvolvimento das demais NBCs TSP</b>.</div>'+
      '<div class="leaf">Aplica-se à <b>elaboração e divulgação formal dos RCPGs</b> — Relatórios Contábeis de Propósito Geral.</div>'+
      '<div class="leaf">É <b>guia</b>, não norma que se sobrepõe às outras.</div>'+
      '</div>'+
      '<div class="box"><span class="bl">Item 1.6 — o que os RCPGs abrangem</span>'+
      '<ul><li>Podem compreender <b>múltiplos relatórios</b>, cada um atendendo a certos aspectos dos objetivos e do alcance da divulgação.</li>'+
      '<li>Abrangem as <b>demonstrações contábeis, incluindo notas explicativas</b>.</li>'+
      '<li>Abrangem também informações que <b>aprimoram, complementam e suplementam</b> as demonstrações.</li></ul></div>'),
    sl("Estatísticas fiscais, passivos e usuários",
      '<div class="box trap"><span class="bl">Item 20A — contabilidade × estatísticas de finanças públicas</span>'+
      '<p>Objetivos <b>distintos</b>, podendo gerar <b>interpretações diferentes para o mesmo fenômeno</b> — mas deve-se buscar, <b>sempre que possível</b>, o <b>alinhamento</b>.</p>'+
      '<p><b>Exemplo:</b> gratificações a servidores podem ser <b>despesa</b> na contabilidade e ficar <b>fora</b> do cálculo do déficit nas estatísticas.</p></div>'+
      '<div class="box"><span class="bl">Item 17 — de onde vêm os passivos públicos</span>'+
      '<ul><li><b>Transações sem contraprestação</b> — inclusive programas de <b>benefícios sociais</b> (bolsas, subsídios habitacionais, saúde pública).</li>'+
      '<li>Papel governamental de <b>credor em última instância</b> de entidades em dificuldade.</li>'+
      '<li>Obrigações de <b>transferir recursos a afetados por desastres</b>.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Usuários dos serviços</span><span class="cd">E seus representantes.</span></div>'+
      '<div class="chip"><span class="cn">Provedores de recursos</span><span class="cd">E seus representantes — cidadãos (tributos), instituições financeiras (empréstimos), entidades privadas (doações).</span></div>'+
      '<div class="chip"><span class="cn">Poder Legislativo</span><span class="cd"><b>Também</b> usuário <b>primário</b>, atuando como representante dos interesses dos dois primeiros.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Por que “propósito geral”</span><p>Porque esses usuários <b>não têm a prerrogativa de exigir</b> que a entidade divulgue informações sob medida para eles.</p></div>')
  ],
  V2:[
    sl("As seis características — e a pegadinha do CPC 00",
      '<div class="box"><span class="bl">Item 3.1 — para que servem</span><p>São <b>atributos que tornam a informação útil</b> e dão suporte aos objetivos da informação contábil: <b>prestação de contas</b>, <b>responsabilização (accountability)</b> e <b>tomada de decisão</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Item 3.2 — o mnemônico</span>'+
      '<p class="mn"><em>RE²</em> + <em>CO-CO-TE-VE</em></p>'+
      '<ul><li><b>RE</b>levância</li><li><b>RE</b>presentação fidedigna</li>'+
      '<li><b>CO</b>mpreensibilidade</li><li><b>CO</b>mparabilidade</li>'+
      '<li><b>TE</b>mpestividade</li><li><b>VE</b>rificabilidade</li></ul></div>'+
      '<div class="box trap"><span class="bl">A distinção que NÃO existe aqui</span>'+
      '<p>A <b>NBC TSP não separa</b> características <b>fundamentais</b> de características <b>de melhoria</b>. Quem faz isso é o <b>CPC 00</b>, da contabilidade <b>societária</b>. Item que traga essa divisão no setor público é <b>falso</b>.</p>'+
      '<p>E não confunda: <b>materialidade</b> e <b>custo-benefício</b> são <b>restrições</b> (item 3.3), não características.</p></div>'),
    sl("Relevância — confirmatório e preditivo",
      '<div class="box"><span class="bl">Item 3.6</span><p>A informação é relevante quando <b>capaz de influenciar significativamente</b> o cumprimento dos objetivos da divulgação contábil — o que ocorre quando tem <b>valor confirmatório, preditivo ou ambos</b>.</p>'+
      '<p>Vale para informação <b>financeira</b> (despesas com empregados) <b>e não financeira</b> (quantidade de empregados).</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Valor confirmatório</span><span class="cd"><b>Confirma ou altera expectativas passadas ou presentes</b> — sobre o uso eficiente e eficaz dos recursos, a realização dos objetivos de prestação de serviços e o cumprimento da legislação orçamentária.</span></div>'+
      '<div class="chip"><span class="cn">Valor preditivo</span><span class="cd">Informação <b>voltada para o futuro</b>: objetivos, custos, atividades previstas, montante e fontes de recursos a alocar. O <b>passado</b> também pode ter valor preditivo, ao ajudar a formar expectativas.</span></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">O item que a banca inverte</span><p>A informação <b>pode ser relevante mesmo</b> se alguns usuários <b>decidirem não considerá-la</b> ou <b>já estiverem cientes dela</b>.</p></div>'),
    sl("Representação fidedigna — os três requisitos",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">1</span><span class="nm">Completa</span></div><div class="fn-b"><p>Inclui a <b>representação numérica</b> junto com outras informações <b>quantitativas, descritivas e explicativas</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">2</span><span class="nm">Neutra</span></div><div class="fn-b"><p><b>Ausência de viés</b>: a seleção e a apresentação não podem buscar <b>um resultado particular predeterminado</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">3</span><span class="nm">Livre de erro material</span></div><div class="fn-b"><p><b>Não</b> é exatidão completa em todos os aspectos — é <b>ausência de erros ou omissões relevantes</b>.</p></div></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Substância sobre a forma</span><p>A informação fidedigna retrata a <b>substância da transação</b>, que <b>pode não corresponder à sua forma jurídica</b>.</p>'+
      '<p><b>Exemplo:</b> numa PPP, olha-se a <b>alocação de riscos e benefícios</b> entre público e privado, não só o rótulo jurídico do contrato.</p></div>')
  ],
  V3:[
    sl("Compreensibilidade e tempestividade",
      '<div class="box"><span class="bl">Item 3.17 — compreensibilidade</span><p>Qualidade que permite ao usuário <b>compreender o significado</b> da informação. A apresentação deve corresponder às <b>necessidades e à base de conhecimento</b> dos usuários e à <b>natureza</b> da informação, em <b>linguagem simples</b>.</p>'+
      '<p>A compreensão é aprimorada quando a informação é <b>classificada e apresentada de maneira clara e sucinta</b> — e a <b>comparabilidade</b> também pode aprimorá-la.</p></div>'+
      '<div class="box trap"><span class="bl">Item 3.18 — complexidade não exclui</span>'+
      '<p>Espera-se do usuário <b>conhecimento razoável</b> das atividades da entidade e <b>diligência apropriada</b>. Alguns fenômenos são complexos e o usuário pode precisar de <b>assistente</b> — mas a informação <b>não deve ser excluída</b> dos RCPGs só por ser complexa.</p></div>'+
      '<div class="box"><span class="bl">Item 3.19 — tempestividade</span><p>Ter a informação <b>disponível antes que perca a capacidade de ser útil</b> para prestação de contas, accountability e tomada de decisão. A ausência de tempestividade a torna <b>menos útil</b> — não inútil.</p></div>'),
    sl("Comparabilidade — o trio que a banca embaralha",
      '<div class="box"><span class="bl">Item 3.21 — o conceito</span><p>Qualidade que possibilita <b>identificar semelhanças e diferenças entre dois conjuntos de fenômenos</b>. <b>Não</b> é qualidade de <b>item individual</b>: é a qualidade da <b>relação entre dois ou mais itens</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Comparabilidade</span><span class="cd">É o <b>objetivo</b>. Relação entre <b>dois ou mais itens</b> de informação.</span></div>'+
      '<div class="chip"><span class="cn">Consistência</span><span class="cd">Mesmos <b>princípios, políticas e base de elaboração</b> — de <b>período a período</b> na mesma entidade, ou num <b>único período entre entidades</b>. <b>Auxilia</b> a atingir o objetivo.</span></div>'+
      '<div class="chip"><span class="cn">Uniformidade</span><span class="cd">Não é sinônimo. O <b>excesso</b> de uniformidade <b>reduz</b> a comparabilidade.</span></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">Item 3.23 — a frase que cai literal</span>'+
      '<p>“Para que a informação seja comparável, <b>coisas semelhantes devem parecer semelhantes</b> e <b>coisas distintas devem parecer distintas</b>.”</p>'+
      '<p>A comparabilidade <b>não</b> é aprimorada ao fazer coisas distintas parecerem semelhantes, nem coisas semelhantes parecerem distintas.</p></div>'),
    sl("Verificabilidade e suportabilidade",
      '<div class="box"><span class="bl">Item 3.26</span><p><b>Verificabilidade</b> é a qualidade que ajuda a <b>assegurar aos usuários</b> que a informação dos RCPGs <b>representa fielmente</b> os fenômenos que se propõe a representar — ou seja, que é <b>sustentada por evidências</b> e <b>pode ser comprovada</b>.</p>'+
      '<p><b>Suportabilidade</b> é o mesmo atributo, quando aplicado à <b>informação explicativa</b> e à <b>informação prospectiva</b> (quantitativa, financeira e não financeira).</p></div>'+
      '<div class="box tip"><span class="bl">O teste dos dois observadores</span>'+
      '<p><b>Dois observadores esclarecidos e independentes</b> podem chegar ao <b>consenso geral</b> — mas <b>não necessariamente à concordância completa</b> — de que:</p>'+
      '<ul><li><b>(a)</b> a informação representa os fenômenos sem <b>erro material ou viés</b>; <b>ou</b></li>'+
      '<li><b>(b)</b> o <b>reconhecimento</b>, a <b>mensuração</b> ou o <b>método de representação</b> foi aplicado sem erro material ou viés.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Consenso ≠ concordância completa</span><p>É a troca mais repetida do item 3.26. Item que exija <b>concordância completa</b> é falso.</p></div>')
  ],
  V4:[
    sl("Materialidade",
      '<div class="box"><span class="bl">Item 3.32</span><p>A informação é <b>material</b> se a sua <b>omissão ou distorção</b> puder influenciar:</p>'+
      '<ul><li>o cumprimento do dever de <b>prestação de contas e responsabilização</b>; <b>ou</b></li>'+
      '<li>as <b>decisões</b> que os usuários tomam com base nos RCPGs <b>daquele exercício</b>.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Depende da natureza</span><span class="cd">Ex.: despesa com pessoal.</span></div>'+
      '<div class="chip"><span class="cn">Depende do montante</span><span class="cd">Ex.: valor monetário envolvido.</span></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">Não existe percentual mágico</span><p>Como os RCPGs englobam informação <b>qualitativa e quantitativa</b>, <b>não é possível especificar um limite quantitativo uniforme</b> a partir do qual a informação se torna material.</p></div>'),
    sl("Custo-benefício e o equilíbrio",
      '<div class="box"><span class="bl">Item 3.35 — custo-benefício</span><p>A informação contábil <b>impõe custos</b> — coleta, processamento, divulgação — e seus <b>benefícios devem justificá-los</b>. Avaliar isso é, com frequência, <b>questão de julgamento de valor</b>, pois <b>não é possível identificar todos</b> os custos e benefícios.</p></div>'+
      '<div class="box"><span class="bl">Item 3.41 — o equilíbrio</span><p>As características <b>funcionam conjuntamente</b>. Nem a descrição que represente <b>fielmente um fenômeno irrelevante</b>, nem a que represente <b>de modo não fidedigno um fenômeno relevante</b>, produzem informação útil. Para ser relevante, a informação precisa ser <b>tempestiva e compreensível</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Item 3.3 — o quadro que resolve metade das questões</span>'+
      '<p><b>SEIS características qualitativas:</b> relevância · representação fidedigna · compreensibilidade · tempestividade · comparabilidade · verificabilidade.</p>'+
      '<p><b>TRÊS restrições:</b> <b>materialidade</b> · <b>custo-benefício</b> · <b>alcance do equilíbrio</b> entre as características.</p>'+
      '<p>Chamar materialidade de “característica qualitativa” é o erro mais plantado do módulo.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o conceito",
  before:"As NBC TSP são estabelecidas pelo ",
  after:", visando à padronização e à transparência da contabilidade no setor público.",
  options:["Conselho Federal de Contabilidade","Tribunal de Contas da União","Comitê de Pronunciamentos Contábeis"], answer:0,
  why:"O CFC edita as normas do setor público; o CPC cuida da contabilidade societária."},

S2:{t:"mc", instr:"O que a NBC TSP Estrutura Conceitual estabelece?",
  options:["Os conceitos aplicados no desenvolvimento das demais NBCs TSP e na divulgação dos RCPGs",
           "As alíquotas dos tributos federais","O plano de contas obrigatório da União",
           "Os limites de despesa com pessoal"],
  answer:0,
  why:"Ela é um <b>guia</b> — não se sobrepõe às demais normas."},

S3:{t:"multi", instr:"Marque o que os RCPGs abrangem (item 1.6)",
  options:["Múltiplos relatórios, cada um atendendo a certos aspectos dos objetivos",
           "As demonstrações contábeis","As notas explicativas",
           "Informações que aprimoram, complementam e suplementam as demonstrações",
           "As estatísticas de finanças públicas","O parecer prévio do Tribunal de Contas"],
  answers:[0,1,2,3],
  why:"As estatísticas fiscais têm objetivo <b>distinto</b> (item 20A)."},

S4:{t:"gap", instr:"Complete o item 20A",
  before:"Os objetivos das informações contábeis e das estatísticas de finanças públicas são distintos, mas deve-se buscar, sempre que possível, ",
  after:" entre essas informações.",
  options:["o alinhamento","a identidade","a separação"], answer:0,
  why:"Objetivos distintos não dispensam a busca de alinhamento."},

S5:{t:"multi", instr:"Segundo o item 17, os passivos do setor público podem ser oriundos de:",
  options:["Transações sem contraprestação","Programas de benefícios sociais",
           "Papel governamental de credor em última instância","Obrigações com afetados por desastres",
           "Arrecadação de tributos","Superávit financeiro do exercício anterior"],
  answers:[0,1,2,3],
  why:"Tributos e superávit são <b>recursos</b>, não obrigações."},

S6:{t:"multi", instr:"Quem são os usuários primários dos RCPGs (item 2.4)?",
  options:["Os usuários dos serviços e seus representantes",
           "Os provedores de recursos e seus representantes",
           "Os membros do Poder Legislativo",
           "Os auditores independentes","Os fornecedores da entidade"],
  answers:[0,1,2],
  why:"O Legislativo é <b>também</b> usuário primário, e não secundário."},

S7:{t:"sort", instr:"Provedor de recursos — classifique",
  buckets:["É provedor de recursos","Não é provedor de recursos"],
  items:[["Cidadão que paga impostos e taxas",0],["Instituição financeira que concede empréstimo",0],
         ["Entidade privada que faz doação ao órgão público",0],
         ["Servidor que recebe salário",1],["Fornecedor que entrega mercadoria",1]],
  why:"Provedor é quem <b>financia os gastos</b> do órgão."},

S8:{t:"wordbank", instr:"Monte os três objetivos da informação contábil (item 3.1)",
  target:["prestação","de","contas",",","responsabilização","e","tomada","de","decisão"],
  extra:["fiscalização","auditoria","planejamento"],
  why:"Responsabilização é o <b>accountability</b> do texto original."},

S9:{t:"multi", instr:"Marque as seis características qualitativas do item 3.2",
  options:["Relevância","Representação fidedigna","Compreensibilidade","Tempestividade",
           "Comparabilidade","Verificabilidade","Materialidade","Custo-benefício"],
  answers:[0,1,2,3,4,5],
  why:"Materialidade e custo-benefício são <b>restrições</b> (item 3.3)."},

S10:{t:"mc", instr:"A distinção entre características fundamentais e de melhoria está em:",
  options:["Apenas no CPC 00, da contabilidade societária",
           "Apenas na NBC TSP Estrutura Conceitual",
           "Em ambas, com a mesma redação","Em nenhuma das duas"],
  answer:0,
  why:"A NBC TSP coloca as seis <b>no mesmo plano</b>."},

S11:{t:"sort", instr:"Valor confirmatório ou preditivo?",
  buckets:["Valor confirmatório","Valor preditivo"],
  items:[["Confirma ou altera expectativas passadas ou presentes",0],
         ["Mostra que os gestores usaram os recursos com eficiência",0],
         ["Comprova o cumprimento da legislação orçamentária",0],
         ["Custos e atividades previstas de prestação de serviços",1],
         ["Fontes de recursos a serem alocadas no futuro",1]],
  why:"Confirmatório olha para trás; preditivo, para a frente — e o passado pode servir aos dois."},

S12:{t:"gap", instr:"Complete o item 3.6",
  before:"A informação pode ser relevante mesmo se alguns usuários ",
  after:".",
  options:["decidirem não considerá-la ou já estiverem cientes dela",
           "não tiverem conhecimento técnico para lê-la",
           "não forem usuários primários"], answer:0,
  why:"A relevância é objetiva — não depende de o usuário efetivamente usar a informação."},

S13:{t:"match", instr:"Ligue cada requisito da representação fidedigna ao seu significado",
  pairs:[["Completa","Numérica mais informações quantitativas, descritivas e explicativas"],
         ["Neutra","Ausência de viés, sem buscar resultado predeterminado"],
         ["Livre de erro material","Sem erros ou omissões relevantes — não é exatidão completa"]],
  why:"São os três do item 3.10."},

S14:{t:"mc", instr:"“Livre de erro material” significa:",
  options:["Sem erros ou omissões relevantes na descrição do fenômeno",
           "Exatidão completa em todos os aspectos",
           "Ausência de qualquer estimativa","Auditoria sem ressalvas"],
  answer:0,
  why:"Exatidão completa seria impossível — e a norma diz isso expressamente."},

S15:{t:"gap", instr:"Complete o item 3.10",
  before:"A informação que representa fielmente um fenômeno retrata a ",
  after:", a qual pode não corresponder, necessariamente, à sua forma jurídica.",
  options:["substância da transação","classificação orçamentária","natureza da despesa"], answer:0,
  why:"Primazia da essência sobre a forma."},

S16:{t:"multi", instr:"Sobre a compreensibilidade, marque o correto",
  options:["É a qualidade que permite ao usuário compreender o significado da informação",
           "As explicações devem ser escritas em linguagem simples",
           "A compreensão é aprimorada com informação clara e sucinta",
           "A comparabilidade pode aprimorar a compreensibilidade",
           "A informação muito complexa deve ser excluída dos RCPGs"],
  answers:[0,1,2,3],
  why:"O item 3.18 veda excluir a informação por ser complexa."},

S17:{t:"mc", instr:"A ausência de tempestividade:",
  options:["Torna a informação menos útil","Torna a informação inútil",
           "Impede a divulgação dos RCPGs","Não produz efeito algum"],
  answer:0,
  why:"Item 3.19 — “menos útil”, nem mais nem menos."},

S18:{t:"sort", instr:"Comparabilidade ou consistência?",
  buckets:["Comparabilidade","Consistência"],
  items:[["É o objetivo",0],["Qualidade da relação entre dois ou mais itens",0],
         ["Identificar semelhanças e diferenças entre conjuntos de fenômenos",0],
         ["Auxilia a atingir o objetivo",1],
         ["Mesmos princípios e políticas de período a período",1],
         ["Mesma base de elaboração entre duas ou mais entidades",1]],
  why:"Inverter os dois é o erro mais comum do item 3.22."},

S19:{t:"gap", instr:"Complete o item 3.23",
  before:"Para que a informação seja comparável, coisas semelhantes devem parecer semelhantes e coisas distintas devem ",
  after:".",
  options:["parecer distintas","parecer semelhantes","ser omitidas"], answer:0,
  why:"O excesso de uniformidade <b>reduz</b> a comparabilidade."},

S20:{t:"mc", instr:"A comparabilidade é qualidade de:",
  options:["Da relação entre dois ou mais itens de informação",
           "De cada item individual de informação",
           "Somente das demonstrações consolidadas",
           "Somente das notas explicativas"],
  answer:0,
  why:"Item 3.21 — por isso não se afere item a item."},

S21:{t:"gap", instr:"Complete o teste do item 3.26",
  before:"Dois observadores esclarecidos e independentes podem chegar ao consenso geral, mas não necessariamente ",
  after:".",
  options:["à concordância completa","ao mesmo laudo","à mesma mensuração"], answer:0,
  why:"Consenso geral sim; concordância completa não."},

S22:{t:"mc", instr:"A suportabilidade descreve a verificabilidade quando aplicada a:",
  options:["Informação explicativa e informação prospectiva divulgada nos RCPGs",
           "Apenas ao balanço patrimonial","Apenas às notas explicativas",
           "Apenas à execução orçamentária"],
  answer:0,
  why:"Item 3.26 — é o mesmo atributo, com outro nome."},

S23:{t:"multi", instr:"A informação é material se a sua omissão ou distorção puder influenciar:",
  options:["O cumprimento do dever de prestação de contas e responsabilização",
           "As decisões que os usuários tomam com base nos RCPGs do exercício",
           "O valor de mercado dos títulos públicos",
           "A opinião do auditor sobre o controle interno"],
  answers:[0,1],
  why:"São as duas hipóteses do item 3.32, ligadas por <b>ou</b>."},

S24:{t:"sort", instr:"A materialidade depende de quê?",
  buckets:["Depende","Não depende"],
  items:[["Da natureza do item",0],["Do montante do item",0],
         ["Das particularidades de cada entidade",0],
         ["De um limite quantitativo uniforme previsto na norma",1],
         ["Do percentual fixado pelo Tribunal de Contas",1]],
  why:"Não é possível especificar limite quantitativo uniforme."},

S25:{t:"gap", instr:"Complete o item 3.35",
  before:"A informação contábil impõe custos, e seus benefícios ",
  after:".",
  options:["devem justificá-los","podem ser presumidos","são irrelevantes"], answer:0,
  why:"E a avaliação é, com frequência, <b>julgamento de valor</b>."},

S26:{t:"multi", instr:"Marque as três restrições do item 3.3",
  options:["Materialidade","Custo-benefício","Alcance do equilíbrio entre as características qualitativas",
           "Tempestividade","Verificabilidade","Relevância"],
  answers:[0,1,2],
  why:"As outras três são <b>características</b>."},

S27:{t:"order", instr:"Ordene o raciocínio do equilíbrio (item 3.41)",
  items:["As características funcionam conjuntamente para dar utilidade à informação",
         "Representar fielmente um fenômeno irrelevante não gera informação útil",
         "Representar de modo não fidedigno um fenômeno relevante também não gera",
         "Para ser relevante, a informação precisa ser tempestiva e compreensível"],
  why:"Nenhuma característica se basta sozinha."},

S28:{t:"sort", instr:"Característica qualitativa ou restrição?",
  buckets:["Característica qualitativa","Restrição"],
  items:[["Relevância",0],["Representação fidedigna",0],["Compreensibilidade",0],
         ["Tempestividade",0],["Comparabilidade",0],["Verificabilidade",0],
         ["Materialidade",1],["Custo-benefício",1],["Equilíbrio entre as características",1]],
  why:"Seis e três — o quadro que resolve metade das questões do módulo."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var KIT = {
  U1:{tema:"Contabilidade pública, RCPGs e usuários",
    bases:["NBC TSP Estrutura Conceitual, itens 1, 1.6, 17, 20A e 2.4",
           "Resolução CFC — NBC TSP Estrutura Conceitual",
           "Lei nº 4.320/1964 — normas gerais de direito financeiro",
           "MCASP — Manual de Contabilidade Aplicada ao Setor Público"],
    ouro:["ramo especializado da contabilidade","Normas Brasileiras de Contabilidade Aplicadas ao Setor Público",
          "Conselho Federal de Contabilidade","Relatórios Contábeis de Propósito Geral",
          "múltiplos relatórios","demonstrações contábeis, incluindo as suas notas explicativas",
          "aprimoram, complementam e suplementam","objetivos distintos","buscar o alinhamento",
          "transações sem contraprestação","credor em última instância",
          "usuários dos serviços e provedores de recursos","membros do Poder Legislativo",
          "não detêm a prerrogativa de exigir"],
    abertura:"A NBC TSP Estrutura Conceitual estabelece os conceitos que devem ser aplicados no desenvolvimento das demais Normas Brasileiras de Contabilidade Aplicadas ao Setor Público e na elaboração e divulgação formal dos Relatórios Contábeis de Propósito Geral das entidades do setor público.",
    evite:"Não trate o Poder Legislativo como usuário secundário, nem restrinja os RCPGs às demonstrações contábeis."},
  U2:{tema:"Relevância e representação fidedigna",
    bases:["NBC TSP Estrutura Conceitual, itens 3.1, 3.2, 3.6 a 3.10",
           "CPC 00 (R2) — para o contraste com a contabilidade societária",
           "MCASP — características qualitativas"],
    ouro:["atributos que tornam a informação útil","prestação de contas e responsabilização (accountability)",
          "tomada de decisão","relevância","representação fidedigna","valor confirmatório",
          "valor preditivo","mesmo se alguns usuários decidirem não considerá-la",
          "completa, neutra e livre de erro material","ausência de viés",
          "não significa exatidão completa","substância da transação","forma jurídica"],
    abertura:"As características qualitativas da informação incluída nos RCPGs são a relevância, a representação fidedigna, a compreensibilidade, a tempestividade, a comparabilidade e a verificabilidade, não fazendo a NBC TSP Estrutura Conceitual a distinção entre características fundamentais e de melhoria, própria apenas do CPC 00.",
    evite:"Não importe do CPC 00 a divisão entre características fundamentais e de melhoria, e não reduza a relevância às informações financeiras."},
  U3:{tema:"Compreensibilidade, tempestividade, comparabilidade e verificabilidade",
    bases:["NBC TSP Estrutura Conceitual, itens 3.17 a 3.19, 3.21 a 3.23 e 3.26",
           "MCASP — características qualitativas",
           "NBC TSP 11 — apresentação das demonstrações contábeis"],
    ouro:["permite que os usuários compreendam o seu significado","linguagem simples",
          "classificada e apresentada de maneira clara e sucinta","conhecimento razoável",
          "não deve ser excluída dos RCPGs","antes que ela perca a sua capacidade de ser útil",
          "identificar semelhanças e diferenças entre dois conjuntos de fenômenos",
          "qualidade da relação entre dois ou mais itens","a comparabilidade é o objetivo",
          "a consistência auxilia a atingi-lo","coisas semelhantes devem parecer semelhantes",
          "suportabilidade","consenso geral, mas não necessariamente à concordância completa"],
    abertura:"A comparabilidade é a qualidade da informação que possibilita aos usuários identificar semelhanças e diferenças entre dois conjuntos de fenômenos, não sendo qualidade de item individual, mas da relação entre dois ou mais itens de informação.",
    evite:"Não inverta comparabilidade e consistência, e não exija concordância completa dos dois observadores do item 3.26."},
  U4:{tema:"Materialidade, custo-benefício e equilíbrio",
    bases:["NBC TSP Estrutura Conceitual, itens 3.3, 3.32, 3.35 e 3.41",
           "CPC 00 (R2) — materialidade como aspecto da relevância",
           "NBC TA 320 — materialidade no planejamento da auditoria"],
    ouro:["omissão ou distorção","cumprimento do dever de prestação de contas e responsabilização",
          "depende tanto da natureza quanto do montante","particularidades de cada entidade",
          "não é possível especificar um limite quantitativo uniforme",
          "a informação contábil impõe custos","os benefícios devem justificá-los",
          "questão de julgamento de valor","funcionam, conjuntamente",
          "restrições inerentes à informação","alcance do equilíbrio entre as características qualitativas"],
    abertura:"São restrições inerentes à informação contida nos RCPGs, nos termos do item 3.3 da NBC TSP Estrutura Conceitual, a materialidade, o custo-benefício e o alcance do equilíbrio entre as características qualitativas.",
    evite:"Não classifique a materialidade como característica qualitativa — no setor público ela é <b>restrição</b> — nem invente percentual de materialidade."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema normativo: o espelho procura a literalidade dos itens.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a NBC TSP Estrutura Conceitual, disserte necessariamente sobre:</p>'+
  '<ol><li>o alcance da Estrutura Conceitual, o conteúdo dos RCPGs e os seus usuários primários;</li>'+
  '<li>as características qualitativas da informação contábil no setor público;</li>'+
  '<li>as restrições inerentes à informação contida nos RCPGs.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A <b>NBC TSP Estrutura Conceitual</b> estabelece os conceitos que devem ser aplicados no <b>desenvolvimento das demais NBCs TSP</b>, editadas pelo <b>Conselho Federal de Contabilidade</b>, bem como na <b>elaboração e divulgação formal dos Relatórios Contábeis de Propósito Geral</b> das entidades do setor público — os <b>RCPGs</b>. Estes podem compreender <b>múltiplos relatórios</b>, cada qual atendendo a certos aspectos dos objetivos e do alcance da divulgação contábil, abrangendo as <b>demonstrações contábeis, incluídas as notas explicativas</b>, e também a apresentação de informações que <b>aprimoram, complementam e suplementam</b> essas demonstrações. A norma registra ainda que os objetivos das <b>informações contábeis</b> e das <b>estatísticas de finanças públicas</b> são <b>distintos</b> e podem ocasionar interpretações diferentes para o mesmo fenômeno, devendo-se buscar, <b>sempre que possível</b>, o <b>alinhamento</b> entre elas; e que muitos <b>passivos</b> públicos são oriundos de <b>transações sem contraprestação</b>, inclusive os de programas de benefícios sociais, podendo decorrer também do papel governamental de <b>credor em última instância</b> e de obrigações com <b>afetados por desastres</b>. Quanto aos destinatários, são <b>usuários primários</b> os <b>usuários dos serviços</b> e seus representantes e os <b>provedores de recursos</b> e seus representantes — precisamente porque <b>não detêm a prerrogativa de exigir</b> divulgação sob medida —, sendo os <b>membros do Poder Legislativo</b> <b>também</b> usuários primários.</p>'+
  '<p>As <b>características qualitativas</b> são os <b>atributos que tornam a informação útil</b> e dão suporte aos objetivos da divulgação contábil, que são a <b>prestação de contas</b>, a <b>responsabilização (accountability)</b> e a <b>tomada de decisão</b>. São <b>seis</b>: <b>relevância</b>, <b>representação fidedigna</b>, <b>compreensibilidade</b>, <b>tempestividade</b>, <b>comparabilidade</b> e <b>verificabilidade</b> — advertindo-se que a NBC TSP <b>não distingue</b> características fundamentais de características de melhoria, distinção própria do <b>CPC 00</b>. A informação é <b>relevante</b> quando capaz de <b>influenciar significativamente</b> o cumprimento dos objetivos contábeis, o que ocorre quando tem <b>valor confirmatório</b> — confirma ou altera expectativas passadas ou presentes — <b>preditivo</b> — informação voltada ao futuro — <b>ou ambos</b>, podendo sê-lo ainda que alguns usuários não a considerem. A <b>representação fidedigna</b> é alcançada quando a representação é <b>completa</b>, <b>neutra</b> e <b>livre de erro material</b>, o que não significa exatidão completa, retratando a <b>substância da transação</b>, que pode não corresponder à forma jurídica. A <b>compreensibilidade</b> permite ao usuário apreender o significado da informação, aprimorando-se com apresentação <b>clara e sucinta</b>, sem que a complexidade autorize excluir a informação. A <b>tempestividade</b> é a disponibilidade da informação <b>antes que perca a capacidade de ser útil</b>. A <b>comparabilidade</b> permite <b>identificar semelhanças e diferenças entre dois conjuntos de fenômenos</b>, sendo qualidade da <b>relação entre dois ou mais itens</b>; difere da <b>consistência</b>, que é meio para atingi-la, e da <b>uniformidade</b>, cujo excesso a reduz. A <b>verificabilidade</b> — ou <b>suportabilidade</b>, quando referida à informação explicativa e prospectiva — assegura que a informação representa fielmente os fenômenos, implicando que <b>dois observadores esclarecidos e independentes</b> cheguem ao <b>consenso geral</b>, mas <b>não necessariamente à concordância completa</b>.</p>'+
  '<p>Por fim, o item <b>3.3</b> enuncia <b>três restrições</b> inerentes à informação contida nos RCPGs. A <b>materialidade</b>: a informação é material se a sua <b>omissão ou distorção</b> puder influenciar o cumprimento do dever de prestação de contas e responsabilização <b>ou</b> as decisões tomadas com base nos relatórios do exercício, dependendo <b>tanto da natureza quanto do montante</b> do item e das particularidades da entidade, razão por que <b>não é possível especificar limite quantitativo uniforme</b>. O <b>custo-benefício</b>: a informação contábil <b>impõe custos</b> e seus <b>benefícios devem justificá-los</b>, sendo essa avaliação, com frequência, <b>questão de julgamento de valor</b>. E o <b>alcance do equilíbrio entre as características qualitativas</b>: elas <b>funcionam conjuntamente</b>, de modo que nem a representação fiel de fenômeno irrelevante, nem a representação infiel de fenômeno relevante produzem informação útil, e a informação, para ser relevante, precisa ser <b>tempestiva e compreensível</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> o papel de guia da Estrutura Conceitual, os três componentes dos RCPGs e os três grupos de usuários primários.</li>'+
  '<li><b>Item 2:</b> nomear as <b>seis</b>, advertir sobre o CPC 00, e detalhar confirmatório/preditivo e completa/neutra/livre de erro.</li>'+
  '<li><b>Item 3:</b> as <b>três</b> restrições, com os dois fatores da materialidade e a inexistência de limite quantitativo.</li>'+
  '<li><b>Fecho:</b> citar que comparabilidade difere de consistência e de uniformidade rende ponto em quase todo espelho.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, indicando a característica ou restrição aplicável.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Na elaboração dos RCPGs de um tribunal estadual, o contador tomou as seguintes decisões:</p>'+
  '<ol><li>excluiu das demonstrações a informação sobre um contrato de parceria complexo, por entender que os cidadãos não a compreenderiam;</li>'+
  '<li>registrou uma parceria público-privada apenas pela forma jurídica do contrato, sem considerar a alocação de riscos e benefícios;</li>'+
  '<li>publicou o relatório oito meses após o encerramento do exercício, quando as decisões orçamentárias do período seguinte já haviam sido tomadas;</li>'+
  '<li>mudou o critério de mensuração do imobilizado sem divulgar explicação adicional, alegando que a norma permitia a revisão;</li>'+
  '<li>omitiu uma despesa de pequeno valor, mas de natureza sensível — diárias pagas a dirigentes —, por estar abaixo de 1% da despesa total.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada decisão à luz da NBC TSP Estrutura Conceitual.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Exclusão da informação complexa.</b> <b>Indevida.</b> O item <b>3.18</b> é expresso: a informação <b>não deve ser excluída</b> dos RCPGs <b>somente pelo fato de ser muito complexa</b> ou difícil para alguns usuários compreenderem sem a devida assistência. Espera-se do usuário <b>conhecimento razoável</b> e diligência apropriada, podendo recorrer a assistente. O caminho correto seria apresentar a informação em <b>linguagem simples</b>, de maneira <b>clara e sucinta</b>, aprimorando a <b>compreensibilidade</b> — não suprimi-la.</p>'+
  '<p><b>2. PPP registrada só pela forma jurídica.</b> Viola a <b>representação fidedigna</b> (item <b>3.10</b>): a informação que representa fielmente um fenômeno retrata a <b>substância da transação</b>, a qual <b>pode não corresponder à sua forma jurídica</b>. A alocação de riscos e benefícios entre o setor público e o privado integra a substância e deve ser refletida, sob pena de a representação não ser <b>completa</b>.</p>'+
  '<p><b>3. Publicação oito meses depois.</b> Viola a <b>tempestividade</b> (item <b>3.19</b>): a informação deve estar disponível <b>antes que perca a capacidade de ser útil</b> para prestação de contas, accountability e tomada de decisão. Publicada depois das decisões que deveria informar, tornou-se <b>menos útil</b> — o que não a torna dispensável, mas compromete o objetivo da divulgação.</p>'+
  '<p><b>4. Mudança de critério sem explicação.</b> Compromete a <b>comparabilidade</b> (item <b>3.22</b>). A norma admite que os princípios ou políticas contábeis sejam <b>revisados</b> para melhor representar determinada transação, mas, nesses casos, a <b>inclusão de evidenciação ou explicação adicional pode ser necessária</b> para satisfazer à comparabilidade. Lembre-se de que a comparabilidade é o <b>objetivo</b> e a <b>consistência</b> apenas o meio de atingi-lo.</p>'+
  '<p><b>5. Omissão por estar abaixo de 1%.</b> <b>Indevida.</b> A <b>materialidade</b> (item <b>3.32</b>) depende <b>tanto da natureza quanto do montante</b> do item, dentro das particularidades da entidade, e a norma afirma que <b>não é possível especificar um limite quantitativo uniforme</b> a partir do qual a informação se torne material. Diárias pagas a dirigentes têm <b>natureza sensível</b> e sua omissão pode influenciar o cumprimento do dever de prestação de contas — logo, são <b>materiais</b> ainda que de pequeno valor.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>No <b>1</b>, aceitar a exclusão invocando a compreensibilidade — que é justamente o que a proíbe.</li>'+
  '<li>No <b>3</b>, dizer que a informação intempestiva se torna <b>inútil</b>; a norma diz <b>menos útil</b>.</li>'+
  '<li>No <b>4</b>, tratar consistência como objetivo e comparabilidade como meio.</li>'+
  '<li>No <b>5</b>, fixar um percentual de materialidade — a norma nega expressamente essa possibilidade.</li></ul></div>';

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 01","https://www.tecconcursos.com.br/s/Q2oNGq","Q2oNGq"],
  ["Caderno FCC — Contabilidade Pública 01","https://www.tecconcursos.com.br/s/Q2oNH5","Q2oNH5"],
  ["Caderno FGV — Contabilidade Pública 01","https://www.tecconcursos.com.br/s/Q2oNHE","Q2oNHE"],
  ["Caderno VUNESP — Contabilidade Pública 01","https://www.tecconcursos.com.br/s/Q2oNHQ","Q2oNHQ"]
];
var TECNOTA = "São os quatro cadernos do próprio resumo, um por banca. Para o <b>TJPR</b>, cuja banca é a FUNDATEC, comece pelo da <b>FCC</b> — é o mais próximo em estilo — e depois faça o do CESPE pela literalidade da norma. A sugestão do autor é resolver umas <b>15 questões</b> logo após a teoria.";

var UNITS = [
  {n:1, title:"Conceitos iniciais e RCPGs", cvar:"u2", lessons:[
    {id:"P1", type:"teoria", title:"NBC TSP, Estrutura Conceitual e RCPGs", xp:10, data:"V1"},
    {id:"P2", type:"drill",  title:"Praticar · NBC TSP e Estrutura Conceitual", xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"P3", type:"drill",  title:"Praticar · o conteúdo dos RCPGs",    xp:25, data:["S3","S4","T4","T5","T6","T7","T8"]},
    {id:"P4", type:"drill",  title:"Praticar · passivos e usuários",     xp:25, data:["S5","S6","S7","T9","T10","T11","T12","T13"]},
    {id:"P5", type:"flash",  title:"Flashcards · conceitos iniciais",    xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]},
    {id:"P6", type:"feynman",title:"Explique os RCPGs e seus usuários",  xp:30, data:"U1"}
  ]},
  {n:2, title:"Relevância e representação fidedigna", cvar:"u1", lessons:[
    {id:"P8", type:"teoria", title:"As seis características e as duas primeiras", xp:10, data:"V2"},
    {id:"P9", type:"drill",  title:"Praticar · as seis características", xp:25, data:["S8","S9","S10","T14","T15","T16","T17","T18"]},
    {id:"P10",type:"drill",  title:"Praticar · relevância",              xp:25, data:["S11","S12","T19","T20","T21","T22","T23","T24"]},
    {id:"P11",type:"drill",  title:"Praticar · representação fidedigna", xp:25, data:["S13","S14","S15","T25","T26","T27","T28","T29"]},
    {id:"P12",type:"flash",  title:"Flashcards · relevância e fidedignidade", xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},
    {id:"P13",type:"feynman",title:"Explique relevância e representação fidedigna", xp:30, data:"U2"}
  ]},
  {n:3, title:"As outras quatro características", cvar:"u3", lessons:[
    {id:"P15",type:"teoria", title:"Compreensibilidade a verificabilidade", xp:10, data:"V3"},
    {id:"P16",type:"drill",  title:"Praticar · compreensibilidade",      xp:25, data:["S16","T30","T31","T32","T33"]},
    {id:"P17",type:"drill",  title:"Praticar · tempestividade",          xp:20, data:["S17","T34","T35"]},
    {id:"P18",type:"drill",  title:"Praticar · comparabilidade",         xp:25, data:["S18","S19","S20","T36","T37","T38","T39","T40","T41"]},
    {id:"P19",type:"drill",  title:"Praticar · verificabilidade",        xp:25, data:["S21","S22","T42","T43","T44"]},
    {id:"P20",type:"flash",  title:"Flashcards · as outras quatro",      xp:15, data:[27,28,29,30,31,32,33,34,35,36]},
    {id:"P21",type:"feynman",title:"Explique as outras quatro",          xp:30, data:"U3"}
  ]},
  {n:4, title:"As três restrições", cvar:"u4", lessons:[
    {id:"P23",type:"teoria", title:"Materialidade, custo-benefício e equilíbrio", xp:10, data:"V4"},
    {id:"P24",type:"drill",  title:"Praticar · materialidade",           xp:25, data:["S23","S24","T45","T46","T47"]},
    {id:"P25",type:"drill",  title:"Praticar · custo-benefício e equilíbrio", xp:25, data:["S25","S27","T48","T49","T50"]},
    {id:"P26",type:"drill",  title:"Praticar · característica ou restrição?", xp:25, data:["S26","S28","T51"]},
    {id:"P27",type:"flash",  title:"Flashcards · restrições",            xp:15, data:[37,38,39,40,41,42,43]},
    {id:"P28",type:"feynman",title:"Explique as três restrições",        xp:30, data:"U4"}
  ]},
  {n:5, title:"Aplicação e prova", cvar:"u2", lessons:[
    {id:"P30",type:"leitura",title:"Discursiva resolvida",               xp:25, data:"disc"},
    {id:"P31",type:"leitura",title:"Estudo de caso resolvido",           xp:25, data:"caso"},
    {id:"Prev",type:"review",title:"Revisão geral das unidades",         xp:60, data:null},
    {id:"P32",type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"P33",type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a definição de abertura do Resumo: a contabilidade pública é <b>ramo especializado</b> da contabilidade que se concentra na administração financeira e contábil dos recursos públicos.</p><p>O material detalha o que ela envolve: <b>registro, controle e análise</b> das transações financeiras e patrimoniais das entidades governamentais — órgãos públicos, autarquias, fundações e empresas estatais — seguindo normas específicas, as <b>NBC TSP</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Contabilidade Pública — Conceitos Iniciais</i></p>",
1:"<p>Certo. O Resumo é expresso: as NBC TSP são estabelecidas pelo <b>Conselho Federal de Contabilidade (CFC)</b>.</p><p>Guarde a sigla aberta e a finalidade, que a banca costuma misturar: <b>N</b>ormas <b>B</b>rasileiras de <b>C</b>ontabilidade <b>T</b>écnica do <b>S</b>etor <b>P</b>úblico, e elas visam à <b>padronização e transparência</b> da contabilidade no setor público. Quem edita é o CFC, não a STN nem o TCU.</p><p class='fb-fonte'>Resumo 01 · <i>Contabilidade Pública — Conceitos Iniciais</i></p>",
2:"<p>Certo pela literalidade do item 1 da NBC TSP Estrutura Conceitual transcrita no Resumo: ela estabelece os conceitos que devem ser aplicados <b>no desenvolvimento das demais NBCs TSP</b> do CFC, e tais conceitos são aplicáveis à elaboração e divulgação formal dos <b>RCPGs</b>.</p><p>O comentário do material resume a ideia: a Estrutura Conceitual serve como um <b>guia</b> para que as práticas contábeis do setor público sejam consistentes, transparentes e confiáveis.</p><p class='fb-fonte'>Resumo 01 · <i>NBC TSP — Estrutura Conceitual (item 1)</i></p>",
3:"<p>Errado. A Estrutura Conceitual <b>não é norma</b> e <b>não prevalece</b> sobre as demais: ela é um guia conceitual que orienta o desenvolvimento das NBCs TSP. Havendo conflito, prevalece a norma específica.</p><p>O que o material efetivamente diz é o oposto da assertiva: os conceitos da Estrutura Conceitual <b>devem ser aplicados no desenvolvimento</b> das demais NBCs TSP — quem se curva é a Estrutura, não a norma.</p><p class='fb-fonte off'>Não consta do Resumo 01 — a hierarquia entre a Estrutura Conceitual e as NBCs TSP não é tratada no material, que transcreve apenas o item 1.</p>",
4:"<p>Certo pela letra do item 1.6: os RCPGs <b>podem compreender múltiplos relatórios</b>, cada qual atendendo a certos aspectos dos objetivos e do alcance da elaboração e divulgação da informação contábil.</p><p>O esquema do Resumo divide o item 1.6 em três blocos: múltiplos relatórios; abrangem as demonstrações contábeis (com notas explicativas); e abrangem também informações que <b>aprimoram, complementam e suplementam</b> essas demonstrações.</p><p class='fb-fonte'>Resumo 01 · <i>Relatório Contábil de Propósito Geral (item 1.6)</i></p>",
5:"<p>Certo. Literalidade do item 1.6: os RCPGs abrangem as demonstrações contábeis, <b>incluindo as suas notas explicativas</b>.</p><p>Repare no parêntese da norma que o Resumo mantém: doravante o conjunto é referido apenas como \"demonstrações contábeis\", a menos que especificado em contrário. Ou seja, quando a norma diz demonstrações contábeis, as notas explicativas já estão dentro.</p><p class='fb-fonte'>Resumo 01 · <i>Relatório Contábil de Propósito Geral (item 1.6)</i></p>",
6:"<p>Errado no verbo restritivo. Os RCPGs <b>não se restringem</b> às demonstrações contábeis: o item 1.6 diz que eles abrangem <b>também</b> a apresentação de informações que aprimoram, complementam e suplementam as demonstrações contábeis.</p><p>É o terceiro bloco do esquema do Resumo sobre o item 1.6. Sempre que a assertiva reduzir os RCPGs a um único relatório ou só às demonstrações, está errada — eles <b>podem compreender múltiplos relatórios</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Relatório Contábil de Propósito Geral (item 1.6)</i></p>",
7:"<p>Certo pela letra do item 20A: os objetivos das informações contábeis e das estatísticas de finanças públicas são <b>distintos</b> e podem ocasionar <b>interpretações diferentes para o mesmo fenômeno</b>.</p><p>O exemplo do Resumo fixa a ideia: <b>gratificações e bonificações</b> de servidores podem ser registradas como despesa na contabilidade pública e, ao mesmo tempo, ser excluídas dos cálculos do déficit orçamentário nas estatísticas de finanças públicas.</p><p class='fb-fonte'>Resumo 01 · <i>Relacionamento com as Estatísticas de Finanças Públicas (item 20A)</i></p>",
8:"<p>Errado justamente na parte final do item 20A, que a banca cortou. Objetivos distintos, sim — mas <b>deve-se buscar, sempre que possível, o alinhamento</b> entre essas informações.</p><p>O comentário do material fecha assim: buscar o alinhamento quando possível serve para obter uma imagem mais completa e precisa das finanças públicas. A diferença de objetivos não autoriza o divórcio entre os dois conjuntos de informação.</p><p class='fb-fonte'>Resumo 01 · <i>Relacionamento com as Estatísticas de Finanças Públicas (item 20A)</i></p>",
9:"<p>Certo pela literalidade do item 17: muitos passivos são oriundos de <b>transações sem contraprestação</b>, e isso inclui aqueles relacionados a programas direcionados ao fornecimento de <b>benefícios sociais</b>.</p><p>O comentário do Resumo traduz: a entidade assume o passivo <b>sem receber nada em troca</b>. Os exemplos do material são bolsas de estudo, subsídios habitacionais e programas de saúde pública.</p><p class='fb-fonte'>Resumo 01 · <i>Natureza e Propósito dos Ativos e Passivos (item 17)</i></p>",
10:"<p>Certo. O item 17 lista essa origem expressamente: os passivos também podem ser oriundos do papel governamental de <b>credor em última instância</b> de entidades com problemas financeiros.</p><p>O exemplo do Resumo é o governo que <b>assume a dívida de uma empresa pública à beira da falência</b>, usando recursos públicos para liquidá-la e proteger funcionários e fornecedores. O item 17 acrescenta ainda os passivos de obrigações de transferir recursos para <b>afetados por desastres</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Natureza e Propósito dos Ativos e Passivos (item 17)</i></p>",
11:"<p>Certo pela letra do item 2.4: para os propósitos da Estrutura Conceitual, os usuários primários dos RCPGs são os <b>usuários dos serviços e seus representantes</b> e os <b>provedores de recursos e seus representantes</b>.</p><p>O esquema do Resumo põe três caixas lado a lado como usuários primários: usuários dos serviços, provedores de recursos e os <b>membros do Poder Legislativo</b>. Os exemplos de provedores de recursos no material são cidadãos (impostos e taxas), instituições financeiras (empréstimos) e entidades privadas (doações).</p><p class='fb-fonte'>Resumo 01 · <i>Usuários dos Relatórios Contábeis (item 2.4)</i></p>",
12:"<p>Errado na classificação. O item 2.4 diz que os membros do poder Legislativo são <b>também usuários primários</b> dos RCPGs, e que os utilizam <b>extensiva e continuamente</b>.</p><p>A norma explica o porquê: eles atuam como <b>representantes dos interesses</b> dos usuários de serviços e dos provedores de recursos. É a terceira caixa do esquema de usuários primários do Resumo — troque \"primários\" por \"secundários\" e a assertiva cai.</p><p class='fb-fonte'>Resumo 01 · <i>Usuários dos Relatórios Contábeis (item 2.4)</i></p>",
13:"<p>Certo. É exatamente o recorte do item 2.4: os RCPGs devem ser elaborados e divulgados principalmente para atender às necessidades de informação dos usuários dos serviços e dos provedores de recursos <b>quando estes não detêm a prerrogativa de exigir</b> que a entidade divulgue as informações que atendam às suas necessidades específicas.</p><p>A lógica é essa: quem pode exigir informação sob medida não depende do RCPG. O relatório de propósito geral existe para quem <b>não</b> tem esse poder.</p><p class='fb-fonte'>Resumo 01 · <i>Usuários dos Relatórios Contábeis (item 2.4)</i></p>",
14:"<p>Certo pela letra do item 3.1: o objetivo da elaboração e divulgação da informação contábil é fornecer informação para fins de <b>prestação de contas e responsabilização (accountability)</b> e <b>tomada de decisão</b>.</p><p>O esquema do Resumo desenha as três finalidades em caixas: prestação de contas, responsabilização (accountability) e tomada de decisão. Esse mesmo trio reaparece na relevância (item 3.7) e na tempestividade (item 3.19) — decore-o uma vez e resolva três itens.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas (item 3.1)</i></p>",
15:"<p>Certo. Literalidade do item 3.1: as características qualitativas da informação incluída nos RCPGs são <b>atributos que tornam a informação útil para os usuários</b> e dão <b>suporte ao cumprimento dos objetivos</b> da informação contábil.</p><p>O comentário do material reforça: são as qualidades que fazem a informação ser relevante e confiável, garantindo que ela cumpra seus objetivos de prestação de contas, accountability e tomada de decisão.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas (item 3.1)</i></p>",
16:"<p>Certo — é a lista fechada do item 3.2, com as seis características: relevância, representação fidedigna, compreensibilidade, tempestividade, comparabilidade e verificabilidade.</p><p>Use os mnemônicos do Resumo: <b>RE2</b> para as duas primeiras (<b>RE</b>levância e <b>RE</b>presentação fidedigna) e <b>CO-CO-TE-VE</b> para as outras quatro (<b>CO</b>mpreensibilidade, <b>CO</b>mparabilidade, <b>TE</b>mpestividade, <b>VE</b>rificabilidade).</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas (item 3.2) — mnemônicos RE2 e CO-CO-TE-VE</i></p>",
17:"<p>Errado. É o quadro <b>ATENÇÃO!</b> do Resumo: a NBC TSP Estrutura Conceitual <b>não faz distinção</b> entre características qualitativas fundamentais e de melhoria.</p><p>Quem faz essa separação é o <b>CPC 00</b>, utilizado na contabilidade societária. Na contabilidade pública as seis características do item 3.2 estão no mesmo plano — sem hierarquia entre elas.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas — quadro ATENÇÃO!</i></p>",
18:"<p>Errado. A materialidade <b>não é característica qualitativa</b>: ela é uma <b>restrição</b> inerente à informação contida nos RCPGs.</p><p>O item 3.3, no quadro ATENÇÃO! do Resumo, lista as três restrições: a <b>materialidade</b>, o <b>custo-benefício</b> e o <b>alcance do equilíbrio entre as características qualitativas</b>. As características qualitativas são outras seis, as do item 3.2 (RE2 + CO-CO-TE-VE). Trocar restrição por característica é a pegadinha mais cobrada do resumo.</p><p class='fb-fonte'>Resumo 01 · <i>Equilíbrio entre as Características Qualitativas — ATENÇÃO! (item 3.3)</i></p>",
19:"<p>Certo pela letra do item 3.6: as informações são relevantes caso sejam capazes de <b>influenciar significativamente o cumprimento dos objetivos</b> da elaboração e da divulgação da informação contábil.</p><p>E o item completa dizendo quando elas exercem essa influência: quando têm <b>valor confirmatório, preditivo ou ambos</b>. É o esquema do Resumo — relevância se decompõe nesses dois valores.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância (item 3.6)</i></p>",
20:"<p>Errado por restringir. O item 3.6 fala em <b>informações financeiras e não financeiras</b> — as duas podem ser relevantes.</p><p>O esquema do Resumo traz os exemplos que resolvem a questão: informação financeira é a <b>despesa com empregados</b>; informação não financeira é a <b>quantidade de empregados</b>. Esse par financeiro/não financeiro também aparece no item 3.1 e na compreensibilidade.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância (item 3.6)</i></p>",
21:"<p>Errado — a assertiva inverte a ressalva final do item 3.6. A informação <b>pode ser capaz de influenciar e, desse modo, ser relevante, mesmo se alguns usuários decidirem não considerá-la ou já estiverem cientes dela</b>.</p><p>A relevância é aferida pela <b>capacidade</b> de influenciar, não pelo comportamento concreto de cada usuário. Desinteresse ou conhecimento prévio de parte dos usuários não retira a relevância.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância (item 3.6)</i></p>",
22:"<p>Certo. Literalidade do item 3.7: as informações têm valor confirmatório se <b>confirmarem ou alterarem expectativas passadas (ou presentes)</b>.</p><p>O material lista as questões cujas expectativas podem ser confirmadas: a extensão em que os gestores cumpriram suas responsabilidades pelo <b>uso eficiente e eficaz dos recursos</b>; a <b>realização dos objetivos</b> especificados da prestação de serviços; e o <b>cumprimento da legislação e de regulamentos orçamentários</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância — valor confirmatório (item 3.7)</i></p>",
23:"<p>Certo pelo item 3.8: os RCPGs podem apresentar informação sobre <b>objetivos, custos e atividades previstas</b> de prestação de serviços, além do montante e das fontes de recursos a serem alocadas no futuro — e tal informação <b>voltada para o futuro tem valor preditivo</b>.</p><p>O comentário do Resumo resume: informação com valor preditivo é a que serve para <b>fazer previsões ou estimativas</b> sobre eventos futuros, apoiando a tomada de decisões, o planejamento e a mitigação de riscos.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância — valor preditivo (item 3.8)</i></p>",
24:"<p>Errado. O item 3.8 diz o contrário: a informação sobre fenômenos que <b>existam ou já tenham ocorrido também pode ter valor preditivo</b>, ao auxiliar a formar expectativas sobre o futuro.</p><p>O exemplo da própria norma: a informação que <b>confirma ou refuta expectativas passadas</b> pode reforçar ou alterar expectativas sobre o desempenho e os resultados futuros da prestação de serviços. Ou seja, o mesmo dado pode ter valor confirmatório <b>e</b> preditivo — o item 3.6 admite \"ambos\".</p><p class='fb-fonte'>Resumo 01 · <i>Relevância — valor preditivo (item 3.8)</i></p>",
25:"<p>Certo — é a tríade do item 3.10: a representação fidedigna é alcançada quando a representação do fenômeno é <b>completa, neutra e livre de erro material</b>.</p><p>O esquema do Resumo abre cada uma: <b>completa</b> é a descrição que inclui a representação numérica com outras informações quantitativas, descritivas e explicativas; <b>neutra</b> é a ausência de viés; <b>livre de erro material</b> é não haver erros ou omissões relevantes na descrição do fenômeno.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna (item 3.10)</i></p>",
26:"<p>Certo pela parte final do item 3.10: a informação que representa fielmente um fenômeno <b>retrata a substância da transação</b>, a qual pode não corresponder, necessariamente, à sua <b>forma jurídica</b>.</p><p>O exemplo do Resumo é a <b>parceria público-privada (PPP)</b>: a representação fidedigna considera não só a forma jurídica da parceria, mas a substância — a <b>alocação dos riscos e benefícios</b> entre o setor público e o privado.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna (item 3.10)</i></p>",
27:"<p>Errado — e o Resumo antecipa essa exata troca no esquema da representação fidedigna. Livre de erro material <b>não significa exatidão completa em todos os aspectos</b>.</p><p>O que significa é que <b>não há erros ou omissões que sejam relevantes</b> na descrição do fenômeno. A exigência é de ausência de erro <b>material</b>, não de perfeição — daí o adjetivo estar no nome da qualidade.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna — esquema (item 3.10)</i></p>",
28:"<p>Certo. É a definição de neutralidade no esquema do Resumo: neutra <b>corresponde à ausência de viés</b>, ou seja, a seleção e a apresentação das informações não devem ser feitas com a intenção de se atingir um <b>resultado particular predeterminado</b>.</p><p>Neutralidade é uma das três exigências da representação fidedigna, ao lado de completa e livre de erro material (item 3.10).</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna — esquema (item 3.10)</i></p>",
29:"<p>Certo. É a definição de \"completa\" no esquema do Resumo: a descrição completa deve incluir a <b>representação numérica</b> juntamente com <b>outras informações quantitativas, descritivas e explicativas</b>.</p><p>Repare que completude não se satisfaz com o número sozinho — o valor precisa vir acompanhado da explicação que lhe dá sentido. É o que liga a representação fidedigna às notas explicativas dos RCPGs.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna — esquema (item 3.10)</i></p>",
30:"<p>Certo pela literalidade do item 3.17: a compreensibilidade é a qualidade da informação que <b>permite que os usuários compreendam o seu significado</b>.</p><p>O quadro do Resumo sobre compreensibilidade tem quatro pontos: (1) essa definição; (2) as explicações devem ser escritas em <b>linguagem simples</b>; (3) a compreensão é aprimorada quando a informação é classificada e apresentada de maneira <b>clara e sucinta</b>; e (4) a <b>comparabilidade pode também aprimorar</b> a compreensibilidade.</p><p class='fb-fonte'>Resumo 01 · <i>Compreensibilidade (item 3.17)</i></p>",
31:"<p>Certo — é o ponto 3 do quadro de compreensibilidade do Resumo, tirado do item 3.17: a compreensão é aprimorada quando a informação é <b>classificada e apresentada de maneira clara e sucinta</b>.</p><p>No mesmo item vem a frase que a banca gosta de negar: a <b>comparabilidade pode também aprimorar a compreensibilidade</b>. As características qualitativas se reforçam mutuamente, como diz o item 3.41.</p><p class='fb-fonte'>Resumo 01 · <i>Compreensibilidade (item 3.17)</i></p>",
32:"<p>Errado, e a norma diz o oposto com todas as letras. Pelo item 3.18, a informação <b>não deve ser excluída</b> dos RCPGs somente pelo fato de ser muito complexa ou difícil de compreender sem a devida assistência.</p><p>O comentário do Resumo explica a saída prevista pela norma: alguns usuários podem precisar da <b>ajuda de assistente</b> para auxiliá-los na compreensão. A solução para a complexidade é assistência, nunca omissão da informação.</p><p class='fb-fonte'>Resumo 01 · <i>Compreensibilidade (item 3.18)</i></p>",
33:"<p>Certo pela letra do item 3.18: espera-se que os usuários dos RCPGs tenham <b>conhecimento razoável</b> das atividades da entidade e do ambiente no qual ela funciona.</p><p>O item exige mais deles: serem <b>capazes e preparados</b> para ler os RCPGs e para revisar e analisar a informação apresentada com a <b>diligência apropriada</b>. A compreensibilidade pressupõe um usuário diligente, não um leigo absoluto.</p><p class='fb-fonte'>Resumo 01 · <i>Compreensibilidade (item 3.18)</i></p>",
34:"<p>Certo. Literalidade do item 3.19: tempestividade significa ter informação disponível para os usuários <b>antes que ela perca a sua capacidade de ser útil</b> para fins de prestação de contas e responsabilização (accountability) e tomada de decisão.</p><p>O esquema do Resumo repete aqui o trio de finalidades do item 3.1: prestação de contas, responsabilização (accountability) e tomada de decisão.</p><p class='fb-fonte'>Resumo 01 · <i>Tempestividade (item 3.19)</i></p>",
35:"<p>Errado na intensidade. O item 3.19 diz que a ausência de tempestividade pode tornar a informação <b>menos útil</b> — não inútil, e muito menos impedir a sua divulgação.</p><p>O outro lado do mesmo item: ter a informação disponível <b>mais rapidamente pode aprimorar</b> a sua utilidade como insumo para a avaliação da prestação de contas e para influenciar os processos decisórios. Fique atento aos verbos \"pode\" e ao comparativo \"menos útil\".</p><p class='fb-fonte'>Resumo 01 · <i>Tempestividade (item 3.19)</i></p>",
36:"<p>Certo pela letra do item 3.21: comparabilidade é a qualidade da informação que possibilita aos usuários <b>identificar semelhanças e diferenças entre dois conjuntos de fenômenos</b>.</p><p>O quadro do Resumo alinha as três frases-chave da comparabilidade: essa definição; ela <b>difere da consistência</b>; e ela <b>difere da uniformidade</b>. Praticamente toda questão do assunto sai de uma dessas três.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade (item 3.21)</i></p>",
37:"<p>Errado — é a segunda frase do item 3.21, que a banca inverteu. A comparabilidade <b>não é uma qualidade de item individual</b> de informação, mas a qualidade da <b>relação entre dois ou mais itens</b> de informação.</p><p>O quadro comparativo do Resumo grifa exatamente isso: comparabilidade é relação <b>ENTRE DOIS OU MAIS ITENS</b>. Faz sentido — não se compara nada sozinho.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade (item 3.21)</i></p>",
38:"<p>Certo pelo item 3.22: a consistência se refere à utilização dos <b>mesmos princípios ou políticas contábeis</b> e da <b>mesma base de elaboração</b>, seja de período a período dentro da entidade, seja de um único período entre duas ou mais entidades.</p><p>O quadro do Resumo separa os dois eixos: <b>de período a período dentro da mesma entidade</b>; ou <b>de um único período entre duas ou mais entidades</b>. Consistência é o meio; comparabilidade é o fim.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade × Consistência (item 3.22)</i></p>",
39:"<p>Errado — inverteu meio e fim. Pelo item 3.22, <b>a comparabilidade é o objetivo, enquanto a consistência auxilia a atingi-lo</b>.</p><p>O exemplo do Resumo deixa a ordem clara: o município busca a <b>comparabilidade</b> das informações financeiras entre os anos; para isso precisa de <b>consistência</b> nos critérios de registro e mensuração. A consistência é o instrumento, não a meta.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade × Consistência (item 3.22)</i></p>",
40:"<p>Certo. Literalidade do item 3.23: para que a informação seja comparável, <b>coisas semelhantes devem parecer semelhantes e coisas distintas devem parecer distintas</b>.</p><p>É a frase que o Resumo usa para separar comparabilidade de <b>uniformidade</b>. Comparabilidade não é igualar tudo: é fazer com que a aparência da informação corresponda à realidade dos fenômenos.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade (item 3.23)</i></p>",
41:"<p>Errado no verbo. O item 3.23 diz que a <b>ênfase demasiada na uniformidade pode reduzir a comparabilidade</b>, ao fazer com que coisas distintas pareçam semelhantes.</p><p>E o quadro do Resumo completa nos dois sentidos: a comparabilidade não é aprimorada ao se fazer com que coisas distintas pareçam semelhantes, <b>nem</b> ao fazer com que coisas semelhantes pareçam distintas. Uniformidade excessiva atrapalha.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade (item 3.23)</i></p>",
42:"<p>Certo pela letra do item 3.26: a verificabilidade é a qualidade da informação que <b>ajuda a assegurar aos usuários</b> que a informação contida nos RCPGs <b>representa fielmente</b> os fenômenos econômicos ou de outra natureza que se propõe a representar.</p><p>O comentário do Resumo traduz: a informação dos RCPGs deve ser <b>sustentada por evidências e capaz de ser comprovada</b>. Note o vínculo direto entre verificabilidade e representação fidedigna.</p><p class='fb-fonte'>Resumo 01 · <i>Verificabilidade (item 3.26)</i></p>",
43:"<p>Certo. O item 3.26 registra que a <b>suportabilidade</b> — a qualidade referente àquilo que dá suporte a algo — é algumas vezes utilizada para descrever a verificabilidade quando aplicada à <b>informação explicativa</b> e à <b>informação quantitativa financeira e não financeira prospectiva</b> divulgada nos RCPGs.</p><p>O comentário do Resumo resume: nesse caso a informação deve estar <b>embasada por análises e projeções confiáveis</b> que deem suporte às conclusões apresentadas. Verificabilidade e suportabilidade são a mesma característica, com nomes conforme o tipo de informação.</p><p class='fb-fonte'>Resumo 01 · <i>Verificabilidade (item 3.26)</i></p>",
44:"<p>Errado no grau de acordo exigido. O item 3.26 diz que dois observadores esclarecidos e independentes podem chegar ao <b>consenso geral</b>, mas <b>não necessariamente à concordância completa</b>.</p><p>O comentário do Resumo destaca essa frase em separado, de tão cobrada. O consenso pode recair sobre dois pontos: (a) a informação representa os fenômenos sem erro material ou viés; ou (b) o reconhecimento, a mensuração ou o método de representação foi aplicado sem erro material ou viés.</p><p class='fb-fonte'>Resumo 01 · <i>Verificabilidade (item 3.26)</i></p>",
45:"<p>Certo pela literalidade do item 3.32: a informação é material se a sua <b>omissão ou distorção</b> puder influenciar o cumprimento do dever de prestação de contas e responsabilização (accountability), <b>ou</b> as decisões que os usuários tomam com base nos RCPGs elaborados para aquele exercício.</p><p>O esquema do Resumo grifa o <b>OU</b> entre as duas hipóteses — basta uma delas. O exemplo do material é o município que <b>omite a contabilização de despesas significativas</b>, dando aos usuários visão distorcida da situação financeira do governo local.</p><p class='fb-fonte'>Resumo 01 · <i>Materialidade (item 3.32)</i></p>",
46:"<p>Errado no \"exclusivamente\". Pelo item 3.32, a materialidade depende <b>tanto da natureza quanto do montante</b> do item analisado, dentro das particularidades de cada entidade.</p><p>O quadro <b>ATENÇÃO!</b> do Resumo traz os dois com exemplo: <b>natureza</b> do item (ex.: despesa com pessoal) e <b>montante</b> do item (ex.: valor monetário envolvido). Qualquer assertiva que fique só no valor está errada.</p><p class='fb-fonte'>Resumo 01 · <i>Materialidade — ATENÇÃO! (item 3.32)</i></p>",
47:"<p>Errado. O item 3.32 é categórico: <b>não é possível especificar um limite quantitativo uniforme</b> a partir do qual determinada informação se torna material.</p><p>A razão está no próprio item: os RCPGs englobam informação <b>qualitativa e quantitativa</b> sobre o cumprimento da prestação de serviços e as expectativas futuras. Some-se a isso o que o Resumo diz sobre o conceito ser <b>subjetivo</b>, dependente do julgamento do profissional — daí não caber percentual fixo.</p><p class='fb-fonte'>Resumo 01 · <i>Materialidade (item 3.32)</i></p>",
48:"<p>Certo pela letra do item 3.35: a informação contábil <b>impõe custos, e seus benefícios devem justificá-los</b>.</p><p>O comentário do Resumo exemplifica os custos: gastos com <b>coleta, processamento e divulgação</b> dos dados contábeis. Lembre que o custo-benefício, assim como a materialidade, é <b>restrição</b> (item 3.3), e não característica qualitativa.</p><p class='fb-fonte'>Resumo 01 · <i>Custo-Benefício (item 3.35)</i></p>",
49:"<p>Errado nas duas pontas. O item 3.35 diz que avaliar se os benefícios justificam os custos é, com frequência, uma <b>questão de julgamento de valor</b>, justamente porque <b>não é possível identificar todos os custos e todos os benefícios</b> da informação incluída nos RCPGs.</p><p>O comentário do Resumo reforça o ponto: trata-se de <b>julgamento subjetivo</b>, baseado nas percepções e no juízo do profissional. Aferição objetiva e integral, aqui, não existe.</p><p class='fb-fonte'>Resumo 01 · <i>Custo-Benefício (item 3.35)</i></p>",
50:"<p>Certo pelo item 3.41: as características qualitativas funcionam <b>conjuntamente</b> para contribuir com a utilidade da informação.</p><p>Os exemplos da própria norma mostram a dependência recíproca: nem a descrição que represente fielmente um <b>fenômeno irrelevante</b>, nem a descrição <b>não fidedigna de um fenômeno relevante</b> resultam em informação útil. E, para ser relevante, a informação precisa ser <b>tempestiva e compreensível</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equilíbrio entre as Características Qualitativas (item 3.41)</i></p>",
51:"<p>Certo — é a lista do item 3.3, destacada no quadro ATENÇÃO! do Resumo. As restrições inerentes à informação contida nos RCPGs são a <b>materialidade</b>, o <b>custo-benefício</b> e o <b>alcance do equilíbrio entre as características qualitativas</b>.</p><p>Separe bem os dois grupos: seis <b>características</b> no item 3.2 (RE2 + CO-CO-TE-VE) e três <b>restrições</b> no item 3.3. A banca vive trocando um item de lista.</p><p class='fb-fonte'>Resumo 01 · <i>Equilíbrio entre as Características Qualitativas — ATENÇÃO! (item 3.3)</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Conceitos iniciais e Estrutura Conceitual (1ª parte)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
