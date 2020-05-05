/*JSX - MISTURAR HTML E JAVASCRIPT
React vem com sua própria sintaxe para construir componentes chamados JSX. No JSX você pode misturar HTML e JavaScript. Além disso, as pessoas frequentemente usam estilos inline em seus elementos. É como adicionar CSS na mistura. Pode ser confuso no início, mas parece natural eventualmente. Você pode usar JavaScript para compor e manipular seu DOM, mas ele é inline em seu HTML. Você pode usar funcionalidades JavaScript embutidas como mapa e filtro para exibir múltiplos (filtrados) NodeJSs de DOM. Mas você também pode usar ternários para fazer renderizações condicionais acontecerem. Você pode usar todo o poder do JavaScript no seu HTML.

Na gama de soluções SPA foi uma nova abordagem para definir seus componentes com mistura de HTML e JavaScript. Em soluções antigas de renderização do lado do servidor (por exemplo, JSP) essa abordagem já estava presente.

Em contraste, em Angular você tem uma clara separação de preocupações entre lógica e visão. Existem expressões embutidas como ng-repeat (Angular 1.x) ou ngFor (Angular 2) em seu HTML para realizar a mesma coisa como um mapa JavaScript nativo() em JSX.

React TEM UMA API SIMPLES
React é apenas uma biblioteca de vistas. Resolve um problema e o resolve bem. Assim, vem apenas com um punhado de métodos para aprender e entender.

Um componente React vem com os métodos do ciclo de vida. No React ES6 você pode usar esses métodos para se conectar ao ciclo de vida de um componente. Normalmente você só precisa do método de ciclo de vida render() obrigatório para renderizar seus elementos como uma nova instância do componente. O bloco de renderização é executado uma vez quando seu componente é inicializado e toda vez que seu componente é atualizado. E é isso. Mas você pode optar por mais métodos de ciclo de vida para adicionar comportamento avançado do componente. Por exemplo, você pode usar o construtor() para inicializar um componente de estado e adicionar métodos de classe para manipular o estado. Toda vez que o estado muda, o método do ciclo de vida do render é executado novamente para atualizar sua visualização.

No geral, existem apenas 9 métodos de ciclo de vida para controlar seu componente. Mas na maioria dos casos você precisa apenas da metade deles - mesmo em aplicações React maduras.

Depois disso você só precisa conhecer mais dois métodos de componentes da classe React ES6: setState() e forceUpdate(). Você mal tocará no último que atualiza um componente de forma programática e forçada. Mas setState() é usado para atualizar o estado do seu componente interno que você iniciou no seu método de ciclo de vida do construtor(). Imagine que você tenha uma lista de itens em seu componente. Como próximo passo, você quer ser capaz de adicionar e remover itens da lista. Você pode fazer isso armazenando a lista no seu componente interno state this.state e usando setState() para atualizar a lista.

Você pode ler mais em profundidade sobre a API do componente React na documentação oficial do React. Se você não está familiarizado com APIs em geral, eu posso recomendar a leitura deste artigo.

Depois disso, você conhece todos os métodos de componentes essenciais. Ainda existem mais conceitos no React, como adereços e estado, a propriedade das crianças ou diferentes declarações de componentes. Mas você pode aprender todos eles passo a passo.

Em conclusão o React em si não tem curva de aprendizado íngreme. É apenas a camada de visão com um punhado de métodos para entender. Se você começar a aprender React como primeiro bloco de construção, eu recomendaria aprender apenas React e nenhum outro bloco de construção. O livro O caminho para aprender React segue esse conceito de aprendizado. Ele cobre todos os tópicos mencionados que você teria que aprender para entender o React.

COMPONENTES LEVES => MELHORES PRÁTICAS
Os componentes em React podem ser definidos de duas maneiras: Componentes de classe ES6 e componentes funcionais sem estado. Estes últimos são apenas funções que recebem um elemento de entrada e retorno como saída. Ainda assim, eles são componentes. Eles são componentes sem nenhuma placa de caldeira porque você só tem que definir uma função JavaScript regular. Eu não posso dizer que a Angular tornou tão fácil definir componentes.

É uma boa prática usar componentes funcionais sem estado sempre que você puder. Isso significa que sempre que você não precisar acessar o estado do componente ou os métodos do ciclo de vida. Adota uma boa prática em torno de componentes onde você os mantém leves e pequenos, porém reutilizáveis, compostáveis e funcionais, sem nenhum efeito colateral. Ao ter uma placa de caldeira tão pequena, você é encorajado a seguir estas melhores práticas.

FLUXO DE DADOS UNIDIRECIONAL
Não há ligação de dados bidirecionais no React como no Angular 1.x. No Angular state management em componentes acabou ficando confuso. Era menos previsível e não havia melhores práticas de como lidar com isso. O loop de digestão que atualizou seus componentes no Angular 1.x não foi fácil de domar.

Em React você segue a regra de um fluxo de dados unidirecional. Um componente atualiza o estado do componente interno explicitamente com setState(). Ele tem que ser capturado no objeto state (this.state) de um componente e o componente renderiza novamente com uma versão atualizada do estado. O mesmo se aplica para a entrada (props) de um componente. Quando um input atualizado chega, o componente é atualizado com seu método de ciclo de vida de renderização. Você nunca modificará sua entrada (props) ou seu estado (estado) do componente interno (state) diretamente. Ele sempre tem que seguir o fluxo de dados unidirecional que torna o gerenciamento do estado em React muito mais previsível.

Além disso, você tem controle total sobre seus elementos HTML nativos. Por exemplo, um campo de entrada em HTML tem seu próprio estado. O texto que você digita em um campo de entrada é capturado no atributo de valor. No React você quer ter controle total sobre o estado de um campo de entrada. Assim, uma vez alterado o valor do campo de entrada, você pode usar o elemento callback onChange() para atualizar o valor no estado do componente interno com setState(). Depois disso, você pode usar o valor atualizado no seu campo de entrada. Agora o estado do componente interno é a única fonte de verdade. O campo de entrada não gerencia mais seu próprio estado.

<input
    value={este.estado.valor}
    onChange={(event) => this.setState({ value: event.target.value })}
    type="text" (texto)
/>
O fluxo unidirecional de dados torna o gerenciamento do estado React previsível e de fácil manutenção.

Redux não está estritamente acoplado ao React. Ambos ainda são uma combinação perfeita, pois Redux é apenas um bloco de construção e o ecossistema React engloba blocos de construção.

Redux trouxe uma gestão previsível do estado para as massas. A filosofia do fluxo já estava presente quando Dan Abramov introduziu o Redux em 2015. O Redux é o sucessor das bibliotecas de fluxo e é amplamente utilizado em diferentes cenários. Em React parece mais natural usar o Redux. O React em si abraça o fluxo unidirecional de dados e, portanto, foi a combinação perfeita para o Redux.

Nos dias angulares os desenvolvedores lutavam em uma aplicação de escala madura com gerenciamento do estado. Em algum momento você tinha que implementar sua própria solução de fluxo mesmo antes do fluxo ser uma coisa. Eventualmente todos invejavam o pessoal do React por adotar o padrão flux e por integrá-lo perfeitamente ao seu ecossistema.

Redux criou todo um ecossistema ao seu redor. É um bloco de construção como o React que abraça tal inovação. Especialmente na área de assincronismo, ele suporta diferentes formas. Por exemplo, você pode escolher entre promessas em JavaScript, geradores ou observáveis. É um lugar para experimentar, para encontrar sua maneira de fazer as coisas e para inovar.

Devo dizer que quando vim de Angular para React aprendi muitos conceitos novos sobre a linguagem JavaScript em si. Agora quando volto do Angular, é sempre difícil lembrar a sintaxe, expressões em HTML ou declarações. Eu ficaria perdido sem os meus trechos que eu retornei no tempo de uso do Angular. Na verdade, não sei, mas acho que seria diferente ao contrário, quando eu voltaria de Angular para React. React é muito mais próximo do JavaScript e apenas um bloco de construção. Uma vez que você aprendeu, não há muito o que esquecer.

React é muito mais próximo do JavaScript. Mas não é só React, é o ecossistema que abraça a proximidade com o JavaScript. Por exemplo, o Redux em si, com suas ações e redutores, é o JavaScript simples. Além disso, todo o ecossistema Redux abraça a utilização de funcionalidades JavaScript nativas e futuras, como geradores e observáveis. Não há nada que o cubra em funções não nativas do JavaScript helper a partir de uma perspectiva de biblioteca.

Outro aspecto é o JavaScript ES6. Talvez seja apenas uma coincidência que o React abrace o ES6, pois o ES6 surgiu durante o mesmo tempo. Mas ainda assim o React avança e adota todos os benefícios e melhores práticas do ES6. As pessoas adotam muito bem o ES6. Lembra-se do componente funcional do botão stateless que definimos antes? Ele parece diferente quando você usaria uma função de seta do ES6:

A programação funcional se tece naturalmente em React e seu ecossistema. Talvez seja devido à proximidade com o JavaScript que torna possível a adoção do paradigma. Como desenvolvedor do React você é encorajado a definir funções sem efeitos colaterais - funções puras. Estas funções são compostas de uma forma previsível. Primeiro porque são puras e retornam sempre a mesma saída com a mesma entrada (previsível). Segundo porque você pode usar funções de ordem superior para compô-las umas nas outras (compossíveis).

As mesmas vantagens de previsibilidade e composibilidade se aplicam para os componentes funcionais em React. É por isso que é possível abraçar componentes previsíveis e compostáveis (de ordem mais alta) no React.

De tempos em tempos os paradigmas de programação mudam. A programação funcional não é nova, mas é a primeira vez que ela é verdadeiramente adotada em JavaScript. React é um dos líderes de pensamento entre outras bibliotecas do ecossistema JavaScript no que diz respeito à programação funcional. É uma grande realização pessoal aprender novos princípios, conhecer suas vantagens e desvantagens e usá-los de mãos dadas. React e seu ecossistema dá a você a possibilidade de aprender e aplicar programação funcional.

COMUNIDADE
Eu mentiria se dissesse que a maioria das razões a seguir não se aplica a outras comunidades em torno de diferentes bibliotecas, estruturas ou ecossistemas. Mas ainda assim eu sinto que vale a pena mencionar que a comunidade por trás do ambiente React é ótima.

As pessoas por trás do ecossistema experimentam a cada dia de novo. Volta à constante inovação em torno do React por causa de seus blocos de construção. Novas soluções têm uma chance de prosperar no ecossistema. Os blocos de construção são permutáveis e podem ser adotados pelos desenvolvedores.

As pessoas por trás do React se encorajam mutuamente. Não importa se as pessoas contribuem com uma inovação, uma biblioteca adicional ou artigos escritos. Todos se empenham uns aos outros e o motivam a continuar. Eu vivi o mesmo quando comecei a escrever artigos sobre o React. As pessoas o encorajam.

As pessoas não estão presas no ecossistema. Se houver um problema, haverá uma solução. Alguém vai criar uma biblioteca para resolver o problema ou explicar as melhores práticas para um problema específico em um artigo. As pessoas ajudam umas às outras e pensam no futuro. Como o local permanece inovador, sempre haverá múltiplas e novas soluções para um problema.

Como eu disse, esses meus pensamentos comunitários são pensamentos mais gerais. Eu acho que todas as comunidades em torno de diferentes soluções estão indo muito bem, são inovadoras e se incentivam mutuamente. É isso que faz com que seja ótimo estar envolvido em tal ambiente.

Em conclusão, espero que estas razões o ajudem a ter um melhor entendimento do ecossistema da React. Talvez eles o ajudem a tomar uma decisão pessoal se você quiser entrar no trem da React em 2017. Pessoalmente, isso me ajudou a refletir sobre minha decisão de começar a aprender o React. Além disso, foi uma vantagem que a minha empresa Small Improvements fez este passo também em meados do ano passado. Mas temos muitas sobras angulares e estamos ansiosos para contratar pessoas que conheçam as duas soluções.

#####################################################

COMO APRENDER UM FRAMEWORK?

A comunidade de desenvolvimento JavaScript e web se instalou nos três principais: React, Angular e Vue. São frameworks e bibliotecas com ecossistemas de pleno direito. Por causa disso, eu chamo todos esses frameworks candidatos. Estes três principais são apoiados por grandes empresas e comunidades/indivíduos. Quase parece que o cansaço do JavaScript já se instalou por um pouco. Muitas pessoas acreditam que vai ficar assim até a adoção plena da WebAssembly (WASM). Então aproveite a parada por um momento, mas mantenha os olhos abertos para o WASM porque não estamos muito longe dele.

Há muitas pessoas aprendendo essas três grandes estruturas hoje em dia. Eles não são apenas formados em informática, como era no passado, mas também programadores autodidatas vindos de bootcamps e outras formações. Acho incrível que a barreira de entrada no campo seja tornada muito mais acessível nos últimos anos por todas as oportunidades que as organizações e empresas estão oferecendo no mundo ocidental. Eu estou dizendo mundo ocidental aqui, porque muitas vezes não é óbvio que há menos educação sobre esses temas em outros países. É um enorme privilégio trabalhar neste campo e, portanto, espero que as pessoas o valorizem e façam todo o possível para capacitar outros para este privilégio ao redor do mundo.

O artigo a seguir deve lhe dar orientações sobre como abordar o aprendizado de uma dessas três grandes estruturas. Ele deve ajudá-lo a escapar da paralisia da análise e fazer com que seu modo interno deixe de consumir para produzir. Portanto, fique comigo se você está prestes a aprender um dos três grandes quadros.

É UMA React, ANGULAR OU DE VALOR?
Eu só posso assumir como o ecossistema JavaScript deve se sentir para um iniciante. É o oeste selvagem onde todos pulam no trem mais brilhante. Isso só porque todo mundo consome as últimas notícias do Hacker News, Twitter e Reddit. Mas ninguém está falando do mundo real onde as empresas não estão usando a mais nova tecnologia. São os 90% (apenas jogando fora um número) das empresas que têm que se ater às suas decisões que tomaram há anos. É porque seu principal objetivo é aumentar o valor do negócio e não trocar a pilha de tecnologia subjacente a cada ano. Isso se resume ao valor que você pode oferecer para uma empresa, cliente ou seu próprio produto e não a pilha de tecnologia que você carrega com você.

Não há um dia que passe em que alguém não esteja perguntando sobre qual dessas três principais estruturas aprender e usar. É Angular, Vue ou React? Eu tentei responder algumas dessas perguntas em plataformas como a Quora também, mas não há como acompanhá-la. Eles estão aparecendo o dia todo. É por isso que eu sentei para escrever este post no blog em primeiro lugar. É a minha tentativa de oferecer uma saída para este dilema para as pessoas que não estão seguras sobre aprender React, Vue ou Angular.

No passado, eu escrevi sobre minhas experiências passando de Angular para React, porque sempre achei mais importante dar experiências em primeira mão às pessoas do que um artigo de comparação técnica. É ótimo conhecer as motivações das pessoas no campo usando uma dessas três estruturas e porque elas se mudaram de uma para outra em algum momento. Isso dá às pessoas acesso a experiências do mundo real e não apenas a comparação de aspectos técnicos. Mas no final o artigo acabou ficando em uma pilha com todos os outros artigos de comparação e apenas acrescenta mais peso a ele.

Saindo da Paralisia da Análise
Independentemente da comparação técnica ou da experiência em primeira mão, muitos artigos deixam as pessoas com seu dilema de análise paralisante. Muitos desses artigos não têm impacto imediato porque não fornecem um conselho claro e acionável no final. Eles apenas fornecem mais informações para leitores amigáveis ao consumidor. Ao invés de empurrá-los para o ato de produzir, seus leitores continuam consumindo e vagando de um artigo de comparação para outro. Eles nunca estão começando a aprender a coisa em si. Eles consomem, mas nunca acabam produzindo.

Nota: Eu escrevo sobre eles como se eu me excluísse da lista, mas não é o caso. Eu também tenho a tendência de analisar demais as coisas e acabo eu mesmo nesta situação. O traço de personalidade não é um mau trunfo quando você realmente acaba trabalhando como desenvolvedor, mas para chegar lá, pode ser frustrante.

Afinal, se você quer aprender algo novo, você tem que dar o salto de consumir para produzir. Não importa se você escolhe Vue, Angular ou React, porque todos eles resolvem o mesmo problema. Eles permitem que você construa aplicações web. É isso aí. E acredite ou não, se você dominar uma delas, não é muito difícil pular em outra se você tiver aprendido JavaScript corretamente.

Pense sobre isso: Se você ficar na paralisia da análise, haverá outro framework para aprender no próximo ano. Então é só para sujar as mãos. Produzir. Não consuma.

O JAVASCRIPT É A BASE, NADA MAIS IMPORTA

Afinal, o JavaScript é a base das três principais ou qualquer outra estrutura do JS. Se você já reuniu conhecimento JS suficiente, você não deve se preocupar muito com o framework que você está aprendendo e usando agora. O JavaScript deve lhe dar todas as ferramentas para usar qualquer um desses frameworks. Portanto, seu objetivo final deve ser dominar o JavaScript e não um framework que possa ser relevante por apenas mais um ano para você. Mas o JavaScript será relevante por mais do que os próximos anos.

Você deve dominar os princípios básicos do JavaScript. Se você leva o bottom up (JavaScript -> Framework) ou (Framework -> JavaScript) está de acordo com sua filosofia pessoal de aprendizagem. O que importa é que você entenda o JavaScript para mover-se sem esforço de uma biblioteca para outra. Não é aplicável apenas para React, Vue ou Angular, mas também para bibliotecas como Redux ou MobX. Quando você passa de uma tecnologia para outra, você precisará entender os mecanismos subjacentes. Portanto, reserve um tempo para aprender sobre esses princípios fundamentais:

- As funções são cidadãos de primeira classe em JavaScript
- bind(), apply(), e call()
- Escopos e Fechamentos
- this
- Objetos (ex. Object.keys(myObj).map(key => myMap[key]))
- Arrays (ex. [1, 2].reduce((sum, summand) => summand + summand, 0))
- Herança Protópica -> Classe ES6
- Callbacks e Promessas
- Loop do Evento
- Event bubbling
- Expressões Regulares
- Tratamento de erros (promisse.then(...).catch(...), try { } catch(e) { })
- JavaScript ES6 e mais além
- hoisting, Memotização
- Programação declarativa versus imperativa
- Programação funcional vs programação orientada a objetos

Você não precisa ser um feiticeiro nessas coisas. Eu certamente não sou. Mas você deve pelo menos entender esses princípios para ter uma pista de como o JavaScript funciona e como usá-lo sem depender de frameworks/library pesadas. Por exemplo, as pessoas introduzem bibliotecas utilitárias muito cedo, como a Lodash. Mas a maioria dos casos básicos pode ser feita com vanilla JavaScript. Eu encontrei este artigo que explica muitos dos princípios básicos mencionados acima. Você deve conferir.

https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d

Nem todos estão na posição financeira para aprender qualquer coisa. É um processo demorado. Se você está com restrições financeiras, o conselho mais importante seria ficar de olho no mercado de trabalho. Seu futuro cliente pode não se importar se você construiu sua aplicação brilhante na web em Vue, React, ou Angular, mas o mercado de trabalho mostra tendências claras para onde as empresas estão indo. Fique de olho nele para aprender algo que será relevante depois que você o tiver aprendido. Há muitas pesquisas de desenvolvedores por aí, especialmente no final do ano, e você encontrará mais dessas tendências no Google Trends ou StackOverflow.

DO CONSUMO À PRODUÇÃO: VAMOS AO CÓDIGO!

Acredito firmemente que os alunos devem restringir seu material de aprendizagem para pavimentar sua maneira de aprender algo mais sem esforço. Portanto, não adianta comprar 10 cursos na Udemy. É uma história de consumo interminável e você nunca vai sujar as mãos ao programar-se de verdade. Mais uma vez, há muitas histórias em plataformas onde as pessoas estão falando sobre o mesmo problema: elas assistiram a todos os cursos de vídeo, mas ninguém colou para eles e não sabem como começar a codificar o que assistiram nas últimas 30 horas.

Ao invés disso, se você tem tanto tempo para consumir material de aprendizagem, tente adicionar diversidade nele. Faça um ou no máximo dois cursos de vídeo e complemente-o com um livro, um podcast e um curso prático real com um playground de codificação para estimular todos os sentidos. Foi assim que eu me aproximei para aprender sobre o machine learning recentemente. Se você está codificando um projeto pessoal pelo caminho, você deve ser capaz de manter os desafios pela frente e suas habilidades em equilíbrio. Eventualmente você vai acabar em um estado de fluxo onde se torna um prazer aplicar seus aprendizados em seu projeto.

Se você ler estes últimos parágrafos e sentir que pertence a este grupo de pessoas que consome muito, o passo mais importante para você é começar a produzir. Acredito que você já tenha consumido muito material de aprendizagem até agora, então sente-se e comece a codificar algo com a estrutura escolhida. Se você ficar preso, use seu mecanismo de busca favorito, faça perguntas no StackOverflow ou entre em uma comunidade Slack para obter ajuda de outros. O contrário da maioria dessas plataformas é ótimo para ajudar você mesmo. Ensinar outra pessoa é a melhor maneira de internalizar os aprendizados.

Aprender algo novo nunca é fácil. Enquanto alguém está construindo sem esforço uma coisa em uma vídeo-aula em uma hora sem sair suando frio, você leva anos e muito esforço para implementar a mesma coisa por conta própria. Mas isso é normal. 99% das vídeo-aulas estão preparadas para mostrar a maneira ideal e proteger todo o esforço. É por isso que é um prazer vê-los. Os humanos, por natureza, evitam coisas que são estressantes. No entanto, só se você estiver suando frio e levar muito tempo para implementar a coisa, você está realmente aprendendo o assunto. Portanto, basta sentar e começar a codificar.

Pessoalmente eu nunca aprendi a codificar de verdade com livros. Os livros foram ótimos para eu entender princípios mais amplos. Entretanto, quando decidi escrever livros sobre como aprender a codificar eu mesmo, tentei torná-los acionáveis. Não foi uma decisão consciente em primeiro lugar, mas agora muitas pessoas me encontram dizendo que aprenderam a codificar lendo e fazendo os exercícios. Quando as pessoas sujam as mãos e param de consumir apenas o material de aprendizagem, as coisas que aprendem acabam se solidificando.

ESCOLHA UM PROJETO DE APRENDIZAGEM

Então como você começa a codificar independentemente de Vue, Angular ou React? Escolha um projeto que o motive. Não escolha uma aplicação ToDo. Por exemplo, pegue o seu hobby favorito e construa uma aplicação para ele. Não precisa ser uma aplicação de pleno direito. Se você gosta de matemática, implemente uma calculadora. Comece pequeno.

Neste ponto, se você ainda estiver na paralisia de análise, implemente a mesma calculadora em todos os frameworks. Mantenha o projeto pequeno, para que não demore muito tempo para implementá-lo, a fim de comparar os três maiores. Por exemplo, no caso de uma calculadora apenas implemente a adição, subtração, multiplicação e divisão. No final, basta pegar a estrutura que se sinta mais confortável para você e ir com ela.

Caso contrário, se você não conseguir ter uma idéia de projeto, veja o que outros desenvolvedores estão construindo para aprender React, Angular ou Vue. A maioria deles compartilha seus esforços em uma das chamadas plataformas amigáveis ao consumidor. Deixe-os inspirá-lo, tentar fazer algo similar ou apenas tentar copiá-los. Mas não literalmente seu código fonte.

Se você não tem um hobby (WHAAAAAT?) e ninguém está te inspirando (NO WAY!), uma terceira maneira de se inspirar é levando sua aplicação web favorita lá fora. Você não deve implementar o próximo Facebook, mas que tal um simples clone de Trello? Os conselhos mais importantes são: manter o tamanho do projeto administrável e ter um tópico motivador para guiá-lo através das partes problemáticas do projeto. Você deve ser capaz de completá-lo eventualmente para começar o próximo depois.

Minha história pessoal é semelhante a ela. Há alguns anos atrás, decidi mudar de Angular para React. Era a época em que eu usava SoundCloud diariamente para ouvir meus artistas favoritos (e ainda o faço) e assim eu queria implementar uma aplicação SoundCloud no React para aprender sobre o React. Nessa época, Andrew já tinha implementado o sound-redux onde eu poderia explorar o código fonte para o caso de ter algum problema. Rapidamente, levei três meses para implementar o favesound-redux a partir do zero. Fiz o erro de aprender React com Redux, o que aumentou a curva de aprendizado, mas de alguma forma eu consegui fazer isso. Entretanto, hoje em dia ele é usado por outros para aprender sobre React e Redux como eu usei o projeto do Andrew como inspiração e ajuda para o meu próprio projeto. Tudo isso não significa que você mesmo deva implementar um projeto tão grande. Eu estava numa ótima posição para transferir muito do conhecimento subjacente do JavaScript da Angular para a React. Isso só mostra como um projeto pode se tornar se você escolher um projeto e se limitar a codificá-lo por algum tempo. Afinal, esta história pessoal foi minha introdução para aprender e eventualmente ensinar sobre o React.

O que acontece depois que você construiu seu primeiro projeto? Mostre-o para a comunidade no Reddit, Hacker News, Twitter ou para a sua Comunidade Slack. Mesmo sendo um projeto pequeno, basta compartilhá-lo para obter feedback sobre ele. Você deve se tornar um produtor nessas plataformas, não apenas um consumidor como você costumava ser. Dessa forma, você terá muito feedback que o ajudará a crescer como indivíduo. Leve esse feedback com você, melhore seu projeto e leve outro projeto para aprender mais sobre o uso da sua estrutura. Repita todo esse processo para aprender com cada projeto algo novo sobre codificação geral, JavaScript ou seu framework. Cada projeto vem com seus próprios desafios.

Afinal, resume-se a apenas um simples framework para aprender qualquer framework (ou qualquer outra coisa):

- (1) estreite seu material de aprendizagem e complemente-o com material para todos os seus sentidos
- (2) consumir o material didático e começar a produzir em conjunto
- (3) pegar um projeto que o mantenha motivado
- (4) sair com suor frio e levar horas para mexer no seu projeto
- (5) obter ajuda com seu mecanismo de busca, grupos Slack ou StackOverflow
- (6) terminar seu projeto e colher o feedback de outros
- (7) se ainda preso na paralisia da análise, implementar o mesmo projeto em outra estrutura
- repetir (3) a (6)

Espero que estas linhas lhe tenham encorajado a começar a aprender React, Vue, Angular ou qualquer outra estrutura. Não importa qual você escolhe, mas você tem que dar o salto de consumir para produzir. O que importa é que você comece a codificar agora. No caminho, você deve entender os princípios básicos do JavaScript. Acredito que se você começar a aprender um desses agora, você pode chegar ao mercado de trabalho este ano usando uma dessas soluções. Se você decidir aprender React, dê uma chance ao The Road to learn React como seu material de leitura. É uma abordagem pragmática para aprender React e todos os seus fundamentos. Enquanto lê o livro, você vai implementar sua própria aplicação com muitas características do mundo real. Caso contrário, estou apenas interessado em ouvir seus pensamentos sobre este artigo e se você começou a aprender algum desses frameworks este ano


######################################################

COMO APRENDER REACT EM 2019+

Como aprender React está no topo da agenda de muitos desenvolvedores de JavaScript para este ano. A recente pesquisa State of JS mostrou que muitos desenvolvedores estão satisfeitos com o React para criar aplicações web modernas. Entretanto, devido à sua popularidade e demanda de trabalho, ainda há muitos desenvolvedores JavaScript que querem aprender React. Neste guia, eu quero dar aos iniciantes uma visão abrangente de como abordar o aprendizado React sem se distrair ou se deixar levar por outros tópicos ao longo do caminho.

APRENDER React [LIGEIRO || RÁPIDO || FÁCIL]
Não há como aprender algo da maneira mais fácil. Você tem que ser paciente. Isso também se aplica aos desenvolvedores. Pessoalmente, é por isso que eu gosto de ser um desenvolvedor, porque sempre haverá algo novo para se aprender. Se você ficar curioso, você não ficará desapontado ao se tornar um desenvolvedor. Aprender é sempre um desafio, um desafio para aprimorar suas habilidades, se o desafio e a habilidade em mãos estiverem em equilíbrio. É por isso que é preciso tempo para aprender React também.

Entretanto, React não tem uma curva de aprendizado íngreme quando se segue uma simples regra: Aprender React, apenas React passo a passo, e não te deixes distrair por outra tecnologia nesta jornada. JavaScript e React estão evoluindo constantemente, porque ambos permanecem inovadores e querem permanecer relevantes também no futuro; então aprenda e acompanhe-os primeiro antes de aprender qualquer outra coisa em cima dele. Tenho ouvido histórias de sucesso de desenvolvedores que passaram de não conhecer o React para receber uma oferta de trabalho React em uma empresa de alguns dias a alguns meses. No trabalho, eles tiveram a chance de aprender mais sobre todas as outras tecnologias sofisticadas que vêm junto com o React.

"Eu tinha uma entrevista de emprego chegando onde me pediram para completar um projeto na React. Sentei em um sábado e trabalhei no The Road to Learn React e no domingo completei meu projeto com bastante tempo restante antes da minha entrevista na quarta-feira. Em um fim de semana eu fui de 0% a 80% confortável trabalhando de forma independente no React". (Fonte: https://www.amazon.com/review/R36DSHPGT5V9N7)

Há um par de pilhas de tecnologia que as pessoas querem aprender com React imediatamente. Eu quero pegar alguns deles e dar uma breve explicação porque não é uma boa idéia casá-los com React enquanto aprendem:

Aprender React com TypeScript? De jeito nenhum, aprenda React primeiro antes de converter o JavaScript para uma linguagem datilografada. Não apenas o código JavaScript Vanilla será digitado com TypeScript, mas também seus componentes React e tudo o que vem com eles. Vai se tornar uma bagunça avassaladora quando você não tiver aprendido React a si mesmo do zero. Também 99% dos tutoriais e cursos do React não são escritos em TypeScript, então isso torna as coisas mais complicadas do que fáceis.

Aprenda a React com Redux? Redux é uma popular biblioteca de gerenciamento de estado para JavaScript. Mais uma vez, aprenda React e seu gerenciamento de estados antes de chegar a uma sofisticada biblioteca de gerenciamento de estados externa, que deve ser usada em larga escala e aplicações complexas. React já vem com muitas ferramentas para lidar com o estado em sua aplicação. A grande maioria das aplicações React por aí nem precisa do Redux ou de qualquer outra biblioteca de gerenciamento de estados. Saiba como lidar com o estado no React primeiro antes de lançar outra biblioteca sobre o problema. Redux torna o React mais complicado para iniciantes.

Aprenda React com o Gatsby? Gatsby.js ficou bastante popular nos últimos tempos. É a solução go-to para criar sites estáticos, como sites pessoais, blogs e landing pages. Entretanto, Gatsby vem com seus próprios aprendizados como o GraphQL, seu grande sistema de plugins, e os problemas que vêm com as aplicações React renderizadas do lado do servidor. Portanto, não confunda o Gatsby.js com um aprendizado mais fácil de React. Ele torna mais fácil escrever websites estáticos com React, mas não aprender React em si.

Estas foram apenas algumas coisas que os iniciantes do React tendem a associar com o React quando começam com ele. Definitivamente há mais deles. No entanto, eles não vão facilitar a experiência de aprendizagem. Em contraste, você terá que aprender duas coisas ao invés de uma. Então comece com React primeiro antes de aprender qualquer coisa em cima dele. Aprenda uma coisa de cada vez.

PRÉ-REQUISITOS REACT

Como React é uma biblioteca JS, não há como aprender sem - JavaScript. Você não pode aprender React sem JavaScript ou sem conhecer JavaScript em primeiro lugar. Em comparação com outras soluções front-end, o React faz uso intensivo do JavaScript.

Aprenda React ou JavaScript em primeiro lugar?
Você deve entender pelo menos o básico do JavaScript, muitas vezes chamado de JavaScript ES5, e ter um conhecimento decente sobre HTML e CSS. React também utiliza a sintaxe do JavaScript, muitas vezes referida como JavaScript ES6 e mais além (ES7, ES8, ES9). É por isso que faz sentido ficar confortável com pelo menos JavaScript ES6 para aprender React.

Há muitas pessoas que recomendam aprender o desenvolvimento web e todos os fundamentos JavaScript como pré-requisito antes de aprender React. As habilidades que eles recomendam para adquirir vão muito além do que é necessário para construir aplicações básicas com o React.js. Algumas delas podem ser:

- As funções são cidadãos de primeira classe em JavaScript
- bind(), apply(), e call()
- escopos e fechamentos
- this
- Métodos de Objeto
- Métodos de Array
- Herança Protópica -> Classe ES6
- Callbacks e Promisses
- Loop do Evento
- Evento Bubbling
- Expressões Regulares
- Tratamento de Erros
- JavaScript ES6 e mais além
- Hoisting, Memotização
- Programação declarativa versus imperativa
- Programação funcional vs programação orientada a objetos

Entretanto, acredito que não é verdade ter todo esse conhecimento. Em contraste, pode ser muito desilusório para iniciantes em JavaScript, React e Desenvolvimento Web. Você não quer ficar na terra dos "Escopos e closures" enquanto você pode construir projetos reais que o motivam a continuar. O momento "Aha" de entender Closures virá ao longo do caminho. Pessoalmente eu não sabia da metade das coisas da lista quando comecei a aprender React e ainda tenho que procurar expressões regulares online porque eu realmente não me preocupo em aprendê-las; e eu ainda ajudo empresas com seus projetos de JavaScript.

Acredito que a maior parte do JavaScript pode ser aprendida ao longo do caminho quando se aprende React, porque então você experimenta em contexto enquanto constrói aplicações web. Isso é excitante e é isso que nos impulsiona como seres humanos. Portanto, mantenha-se animado enquanto aprende e não fique muito tempo com os fundamentos onde você não pode ver o propósito sem nunca aplicá-los em um cenário do mundo real. Comece a construir projetos reais. Fique curioso! Avance e retroceda entre JavaScript e React enquanto aprende React.

- Aprender React ou jQuery?

Historicamente jQuery preencheu a lacuna entre o JavaScript vanilla e bibliotecas/frameworks modernas como React, Angular, e Vue. O JavaScript antigo não era tão eficiente no navegador e outros assuntos como é hoje em dia. Por isso havia uma necessidade real de jQuery. Entretanto, o JavaScript moderno é capaz de lidar com todas as coisas em si. Daí a minha recomendação: Não se preocupe com a jQuery.

Se você está trabalhando em uma aplicação maior que utiliza React no seu novo trabalho, é provável que ela seja confrontada com jQuery nas áreas de legado da aplicação. Mas não há problema em não ser proficiente com jQuery então e basta procurar online o que você precisa para fazer o trabalho. Como alternativa, tente migrar o código de jQuery para React em vez disso como uma oportunidade de aprendizado. Foi assim que eu fiz no meu último trabalho, porque me tornei um desenvolvedor de JavaScript nos primeiros dias do Angular, mas nunca tive que aprender jQuery a ponto de ser proficiente com ele. Ao invés disso, eu me concentrei na jornada à frente com Angular, que depois se tornou React.

- Por que eu deveria aprender React?

Por que você quer aprender React em primeiro lugar? Os iniciantes sabem de todas as bibliotecas modernas brilhantes em JavaScript, mas muitas vezes não se perguntam porque precisam delas. Eles podem apenas saber que eles são muito procurados por empresas e empregos. No entanto, às vezes faz sentido recuar na pergunta: Por que preciso disto?

Não se aplica apenas ao React, mas a todas as outras bibliotecas e frameworks que você vai aprender na sua vida como desenvolvedor. Qual o problema que isso resolve para mim? Muitas vezes as pessoas jogam bibliotecas em cima da sua stack de tecnologia sem experimentar o problema em primeiro lugar. É por isso que acredito que é uma ótima experiência de aprendizado implementar a aplicação idêntica com vanilla JavaScript e React. Ele demonstra qual problema a nova biblioteca está resolvendo para você. A mesma técnica pode ser aplicada ao decidir se você quer aprender React ou outra solução, como Vue ou Angular. Construa uma aplicação básica com as soluções de sua escolha e compare a sua experiência de desenvolvimento. Qual das soluções é a mais adequada para você?

- APRENDA O React.JS PASSO A PASSO

Depois que tivermos clareza sobre aprender apenas os pré-requisitos de React e React, vamos ver como aprender React a partir do zero. Acredito firmemente que o melhor começo é passar pela documentação oficial do React. A documentação acompanha as mudanças recentes, não é tendenciosa, ensina tudo do jeito React, e é elaborada pela equipe central do React e pela comunidade React no seu interesse.

- Aprenda com a React Docs

Ser colocado à documentação de uma biblioteca como um iniciante no desenvolvimento web pode ser intimidante. Mas acredito firmemente que é a melhor maneira de aprender algo novo. No seu caminho de carreira para se tornar um desenvolvedor, você vai se acostumar a aprender coisas novas com a documentação da coisa nova, então por que não se acostumar agora? Aprender orientado pela documentação te traz alguns benefícios:

- tutorial para iniciantes
- sem interesse comercial
- forma opinativa de fazer as coisas
- cuidadosamente elaborada pelos principais colaboradores e comunidade
- últimos materiais e atualizações para novas versões
- API de referência

Toda vez que pego uma nova tecnologia, não checo nenhum curso ou livro, vou direto para a documentação da tecnologia e verifico se há um tutorial para iniciantes. Muitas vezes existe um e esse é o meu ponto de entrada em um novo mundo. De lá, sempre posso checar por outro material de aprendizado, mas meu ponto de partida será sempre a documentação oficial da nova coisa que pretendo aprender. Afinal, é por isso que eu escrevo meus tutoriais e livros em estreita relação com a documentação, sempre referindo-a em meus guias. É assim que os iniciantes aprendem a usar a documentação e é isso que os tornará mais eficientes e efetivos no aprendizado de uma nova tecnologia no futuro.

- Aprenda a React com Projetos

Depois de passar pelo tutorial para iniciantes do React a partir da documentação do React e aprender o básico do React do zero, continue aprendendo construindo um projeto você mesmo antes de aprender qualquer outra tecnologia. Nem sempre é simples chegar a idéias de projetos, mas há muita inspiração por aí.

Por exemplo, também há pessoas que querem aprender React construindo jogos. Acho que você vai encontrar muitas implementações do React Tic Tac Toe por aí. Implemente o jogo no React yourself e compare a sua solução com as outras soluções. Você vai aprender com seus erros e aprenderá a avaliar seu código fonte em relação à implementação por outros.

- Aprenda a React Fazendo

Aprender React by doing é uma das recomendações mais comuns que você terá para ouvir de outros desenvolvedores, ela se aplica a quase tudo na vida, porque cada tarefa lhe apresentará um novo desafio para crescer como um desenvolvedor React. Também é muito fácil consumir passivamente cursos de vídeo, livros e tutoriais. Sujar as mãos e implementar algo você mesmo. Fique preso a um problema, fique desesperado, pondere sobre o problema tirando tempo da tela, resolva o problema eventualmente, e colha os frutos dele. Essa é a estrutura básica para aprender qualquer coisa.

- Aprenda a React todos os dias

Confronte-se para se ater à codificação todos os dias. Você pode participar do desafio 100 Dias de Código, escreva sobre ele no Twitter ou em seu site. Faça disso um hábito diário. Somente ao aderir a ele por um tempo, por ter a persistência e por codificar todos os dias, você acabará se tornando um desenvolvedor React. É uma maratona e não um sprint.

- Aprenda React em Público

A melhor maneira de aprender algo novo é aprender em público. Confronte-se com o feedback de outros desenvolvedores da React, mostrando suas conquistas. Se você atingiu um marco com seu projeto React, mostre-o aos outros e peça o feedback deles. Estas são algumas das plataformas mais conhecidas para compartilhar idéias em torno do React:

- Twitter
- Reddit
- Reactiflux
- Spectrum

Você não só receberá o feedback das pessoas lá, mas também mergulhará mais no React, juntando-se às discussões. Faça parte da comunidade. Outra ótima maneira de aprender algo novo você mesmo é explicar isso para outra pessoa. Talvez você esteja um passo à frente de um colega iniciante do React e possa ajudá-lo. Confira o React beginner thread no React Subreddit onde você pode ajudar os outros desenvolvedores do React a resolver seus problemas.

- Aprenda a usar o React

Depois de ter passado pelo tutorial para iniciantes nos documentos do React e começar a implementar um projeto React você mesmo, aprenda a usar o React com todas as suas facetas. O React tem apenas uma área de superfície fina da API, então tente se tornar proficiente com ela.

- Aprenda sobre a sintaxe JSX do React
- Saiba mais sobre Componentes React
- Conheça a Composição do Componente React
- Conheça as React Props
- Saiba mais sobre o React State

Aprender e entender React. No final, não é preciso muito para criar um componente React que retorna JSX, para usar um componente React em outro componente React enquanto os organiza em uma hierarquia de componentes, para passar dados de componente para componente com adereços, e para tornar os componentes interativos com o estado. Essa é a essência do React. Aprenda React em profundidade aplicando suas habilidades aprendidas em seu projeto e não consumindo infinitos conteúdos.

- CONFIGURAÇÃO DO REACT PARA INICIANTES

Como começar com a codificação real de um projeto React? Se você não tem nenhum editor/terminal ou IDE instalado e só quer checar como React se comporta em um ambiente de código, confira o editor de código online chamado CodeSandbox. Brinque com o React e veja se você gosta. Entretanto, se você quiser aprender como desenvolver aplicações React na sua máquina local, confira estes Guias de Configuração para MacOS e Windows para fazer funcionar na sua máquina:

Configure o React no MacOS (https://www.robinwieruch.de/react-js-macos-setup)
Configurar React no Windows (https://www.robinwieruch.de/react-js-windows-setup/)
Ambos os guias vêm com um conjunto mínimo de ferramentas recomendadas para que você comece com o React:

Executar JavaScript com Node e NPM: Enquanto o Node.js torna possível executar JavaScript fora do navegador, o NPM (node package manager) permite que você instale bibliotecas como React no seu projeto. Você precisará de ambas as ferramentas para quase todos os outros projetos JavaScript modernos também.
Desenvolva com Visual Studio Code: Uma popular IDE leve que é a solução go-to para desenvolvedores React. O Visual Studio Code (VS Code) vem com um editor para aprender o desenvolvimento do React e um terminal (linha de comando) para iniciar seu projeto React e instalar bibliotecas para ele.
Aprenda com o create-react-app: A solução go-to do Facebook e da equipe React para que você comece com um projeto inicial React leve e de configuração zero. 99% dos tutoriais do React que existem por aí se acumulam em cima desse projeto inicial para que você possa começar a usar o React. Você pode focar apenas no aprendizado do React enquanto todas as ferramentas ao seu redor são cuidadas através do Create-react-app.
Formatar com Prettier: Formatador de código opinativo que formata automaticamente o seu código no seu ambiente de desenvolvimento. Ele vem com uma configuração e integrações simples para editores populares (VS Code). Enquanto você aprende o desenvolvimento web React, ele lhe mostra como formatar seu código React.

- APRENDER REACT AVANÇADO

Depois de aprender os conceitos básicos do React com componentes React, props/state e a sintaxe JSX do React para retornar HTML válido em JavaScript, você pode mergulhar mais fundo com conceitos e padrões avançados do React. Estes são alguns dos essenciais que não vão desaparecer tão rapidamente:

- Aprenda os Hooks de React
- Aprenda React Components de Ordem Superior
- Aprender React Components Props de Render
- Aprender React Context

Estando equipado com estas técnicas avançadas de React, você deve estar confortável para mergulhar em aplicações de React maiores, onde você encontrará estes conceitos e técnicas com mais frequência. Devido aos Hooks de React, os outros Components de Ordem Superior e Components Props de Render podem ser menos utilizados no futuro, mas você ainda deve vê-los com bastante frequência ao longo do próximo ano.

- APRENDA A React ONLINE

Depois de ter passado pela documentação do React para aprender sobre o básico e alguns conceitos e padrões avançados, e depois de ter começado a construir uma aplicação React você mesmo, definitivamente faça o checkout de outros recursos React online. Note que eu menciono isso muito tarde neste guia, porque muitas vezes os iniciantes do React estão presos em uma história interminável de apenas consumir conteúdo para aprender o React. O que eu quero ressaltar: Comece a produzir desenvolvendo aplicações React você mesmo ou escrevendo sobre seus aprendizados. Aprender fazendo é a chave aqui. Cada problema ao longo do caminho pode ser procurado online. E se você quiser aprender mais sobre o React, confira todos os outros recursos para aprender React online. Minha recomendação é não só consumir um tipo de material de aprendizagem, mas também diversificar seus recursos de aprendizagem:

- Tutoriais de React
- Livros de React
- React Vídeos (YouTube, Twitch, Cursos Online)
- Desenvolvimento Web ou Podcasts de React
- Cursos Interativos

No entanto, nem todo tipo de material de aprendizagem pode lhe servir. O mesmo se aplica aos estilos de ensino das pessoas por trás do material de aprendizagem. Cada um tem uma maneira diferente de produzir conteúdo e de oferecê-lo aos seus alunos, portanto verifique qual estilo de ensino é melhor para você.

"Inicialmente, ao me aproximar da React, eu havia adquirido um curso da Udemy de outro professor. No entanto, eu me perdi muito depois de alguns vídeos. O professor daquela série altamente classificada manteve tudo fácil no início, mas depois o cegou com conceitos e códigos difíceis de entender e falhou em informar bem o que estava acontecendo." (Fonte: https://www.amazon.com/review/RK12HO6J0BY8M)

Se você gosta de ler, confira tutoriais online e livros de React. Imprimir livros é um bom recurso para aprender React offline também. Mesmo que muitas pessoas tenham medo que os livros se desatualizem muito rápido, eu só posso argumentar que a maioria dos livros são auto-publicados e o autor leva apenas 1 dia para ter uma nova versão online (mesmo na Amazon). Acredito que hoje em dia leva mais tempo para atualizar um vídeo do que o conteúdo escrito.

Se você gosta de assistir, confira os cursos online por desenvolvedores individuais no YouTube, Udemy e suas próprias plataformas de cursos. No entanto, mais uma vez não fique preso em assistir apenas o conteúdo. Encontre conteúdo onde você é forçado a aplicar seus aprendizados.

Se você só quer acompanhar as últimas notícias de React, os Podcasts são uma ótima maneira de ficar à frente da curva. Você vai ouvir os desenvolvedores que estão no limite da tecnologia, que sempre liberam algo novo para aprender. Também os Podcasts são uma ótima maneira de continuar aprendendo React enquanto se desloca ou se exercita na academia. Pelo menos é assim que eu faço.

Existem muitos recursos de aprendizado React online gratuitos que têm uma alta qualidade e são acessíveis a todos. Se alguém me perguntar sobre como me tornar um desenvolvedor React, muitas vezes eu os envio imediatamente para o FreeCodeCamp. Independentemente do recurso de aprendizagem que você escolher, tente ser pragmático aplicando as aprendizagens você mesmo. Não apenas consuma passivamente o conteúdo. Seja ativo e desafie-se a aprimorar suas habilidades.

- APRENDA O ROADMAP DO REACT

Depois de ter aprendido apenas React e se sentir confortável com seus detalhes básicos e avançados de implementação, há muitos caminhos de aprendizagem que você pode tomar para avançar suas habilidades de React. O ecossistema React não é opinativo, mas inovador e extenso. Algumas recomendações:

React + React Router: Habilite a Navegação em sua aplicação React com um Roteador
React + Firebase: Conectar React a uma Base de Dados e implementar Autenticação/Autorização do Usuário
React + GraphQL: Conectar React com uma interface GraphQL a uma aplicação backend Node.js
React + Redux: Explore uma gestão de estado previsível e escalável em React com Redux

 Fique curioso, comprometa-se todos os dias sujando suas mãos, seja público sobre isso e corra uma maratona e não um sprint. Desafie-se para aprimorar suas habilidades como desenvolvedor e se tornar um desenvolvedor React este ano!

 ##############################

 POR QUÊ FRAMEWORKS IMPORTAM?

 Há muitas pessoas entrando no campo do desenvolvimento web neste momento. Pode ser uma experiência esmagadora para iniciantes conhecerem todas as ferramentas que são utilizadas no desenvolvimento web moderno. A lacuna histórica entre a execução de HTML no Netscape e hoje aumenta com cada uma dessas novas ferramentas que são colocadas no topo da pilha de tecnologia. Em algum momento, não faz mais sentido para os iniciantes aprenderem jQuery. Os alunos vão pular direto no seu framework favorito após aprenderem o JavaScript puro. O que está faltando para essas pessoas é todo o conhecimento histórico da lacuna entre eles.

Neste artigo, quero focar no salto do JavaScript vanilla para uma biblioteca moderna como a React. Quando as pessoas vão usar tal biblioteca, na maioria das vezes nunca experimentaram a luta do passado que levou a essas soluções. A pergunta a ser feita: Por que acabamos com essas bibliotecas? Eu quero mostrar porque uma biblioteca como a React importa e porque você não quer mais implementar aplicações em JavaScript puro. A história toda pode ser aplicada em analogia a qualquer outra biblioteca/estrutura como Vue, Angular ou Ember.

Eu quero mostrar como uma pequena aplicação pode ser construída em vanilla JavaScript e React. Se você é novo no desenvolvimento web, isso deve lhe dar uma comparação clara do porquê de querer usar uma biblioteca para construir uma aplicação maior em JavaScript. A pequena aplicação a seguir tem o tamanho certo para JavaScript puro, mas mostra claramente as tendências do por que você escolheria uma biblioteca uma vez que você vai escalá-la. Você pode conferir as aplicações finalizadas neste repositório GitHub. Seria ótimo encontrar contribuidores para adicionar implementações para outras bibliotecas/frameworks também.

- RESOLVENDO UM PROBLEMA EM JAVASCRIPT PURO

Vamos construir juntos uma aplicação em Vanilla (baunilha, chamamos de "puro") JavaScript. 
O problema: Pesquise histórias do Hacker News e mostre o resultado em uma lista em seu navegador. O aplicativo só precisa de um campo de entrada para o pedido de busca e uma lista para mostrar o resultado. Se um novo pedido de busca for feito, a lista tem que ser atualizada no navegador.

Em uma pasta de sua escolha, crie um arquivo index.html.
Vamos escrever um par de linhas de HTML neste arquivo. Primeiro, tem que haver um boilerplate HTML para renderizar o conteúdo para o navegador.

<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla JavaScript</title>
  </head>
  <body>
  </body>
  <script src="index.js"></script>
</html>

A parte importante é o arquivo index.js importado. Esse é o arquivo onde o código JavaScript vai parar. Você pode criá-lo ao lado do seu arquivo index.html. Mas antes de começar a escrever JavaScript, vamos adicionar um pouco mais de HTML. A aplicação deve mostrar um campo de input e um botão para solicitar dados com base em uma consulta de pesquisa do campo de entrada.

<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla JavaScript</title>
  </head>
  <body>
    <div id="app">
      <h1>Search Hacker News with vanilla JavaScript</h1>
      <input id="searchInput" />
      <button id="searchButton">Search</button>
    </div>
  </body>
  <script src="index.js"></script>
</html>

Você deve ter notado que ainda não há nenhum container para mostrar o conteúdo solicitado. Em um mundo perfeito, haveria algum tipo de elemento que possui múltiplos elementos para mostrar as histórias solicitadas do Hacker News. Como este conteúdo é desconhecido antes do pedido acontecer, é uma melhor abordagem para renderizá-lo dinamicamente após o pedido ser feito. Você fará isso em JavaScript usando a API DOM para manipulações HTML na próxima parte.

O elemento HTML com a aplicação id pode ser usado para enganchar o JavaScript no DOM mais tarde. Além disso, o elemento de botão pode ser usado para atribuir um ouvinte de eventos de clique. Esse é o lugar perfeito para iniciar o código JavaScript. Vamos começar com o arquivo index.js.
*/

function addButtonEvent() {
  document.getElementById('searchButton')
    .addEventListener('click', function () {
      // (4) remove old list if there is already a list
      // (1) get value from input field
      // (2) search list from API with value
      // (3) append list to DOM
    });
};
addButtonEvent();

/*
Isso é basicamente tudo o que é necessário para a aplicação. Uma vez executado o arquivo index.js, haverá um eventListener adicionado ao elemento de botão com o botão de busca searchButton. Você pode encontrar o elemento de botão no seu arquivo index.html.

A última linha é importante porque alguém tem que chamar a função em primeiro lugar. A função em si é apenas a declaração, mas não a execução da mesma. Todas as implementações a seguir serão apenas mais algumas funções que são executadas quando alguém clica no botão.

Os comentários no código mostram a lógica de negócio que será implementada passo a passo. Vamos tentar manter o código conciso aqui. Você pode extrair a função que é chamada em um evento de clique de botão.

*/

function addButtonEvent() {
  document.getElementById('searchButton')
    .addEventListener('click', onSearch);
};
function onSearch() {
};

/*

Agora vamos implementar a lógica do negócio, uma vez que o botão é clicado. Há três coisas que precisam acontecer. Primeiro, você precisa recuperar o valor do campo de entrada HTML que é usado para a solicitação de busca. Segundo, você tem que fazer a requisição de busca assíncrona. E terceiro, você precisa anexar o resultado da requisição de busca ao DOM.

*/

function addButtonEvent() {
  document.getElementById('searchButton')
    .addEventListener('click', onSearch);
};
function onSearch() {
  doSearch(getValueFromElementById('searchInput'))
    .then(appendList);
};

/*
Existem agora três funções que você irá implementar nas seguintes etapas. Primeiro, vamos recuperar o valor a partir do elemento de entrada com o id searchInput.

*/

function getValueFromElementById(id) {
  return document.getElementById(id).value;
};

/*
Se você digitar algo no campo de entrada HTML renderizado em seu navegador, ele deverá ser pego uma vez que você clique no botão. Agora este valor deve ser usado na função doSearch() que você irá implementar na segunda parte. A função retorna uma Promessa e assim o método then() pode ser usado para anexar o resultado (lista) no terceiro passo.
*/

var BASE_URL = 'https://hn.algolia.com/api/v1/';
function doSearch(query) {
  var url = BASE_URL + 'search?query=' + query + '&hitsPerPage=200';
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      return result.hits;
    });
}

/*
A função utiliza o API nativo fetch que retorna uma promessa. Por uma questão de simplificação, eu mantive fora o tratamento de erros neste cenário que poderia ser implementado em um bloco catch(). A solicitação é feita para a API do Hacker News e o valor do campo de entrada é inserido utilizando a concatenação de strings. Em seguida, a resposta é transformada e somente os hits (lista) são retornados a partir do resultado. O terceiro passo é anexar a lista ao DOM.

*/

function appendList(list) {
  var listNode = document.createElement('div');
  listNode.setAttribute('id', 'list');
  document.getElementById('app').appendChild(listNode);
  // append items to list
};

/*
Primeiro, você cria um novo elemento HTML e segundo você dá ao elemento um atributo de id para verificar. Este id pode ser usado posteriormente para verificar se já existe uma lista no DOM uma vez que uma segunda requisição é feita. Terceiro, você anexa o novo elemento ao seu DOM usando o elemento HTML com a aplicação id que você pode encontrar no arquivo index.html. O que está faltando é anexar a lista de itens.
*/

function appendList(list) {
  var listNode = document.createElement('div');
  listNode.setAttribute('id', 'list');
  document.getElementById('app').appendChild(listNode);
  // append items to list
  list.forEach(function (item) {
    var itemNode = document.createElement('div');
    itemNode.appendChild(document.createTextNode(item.title));
    listNode.appendChild(itemNode);
  });
};

/*
Para cada item da lista, você cria um novo elemento HTML, anexa texto ao elemento e anexa o elemento à lista de elementos HTML. Você pode extrair a função para torná-la concisa novamente. Portanto você tem que usar uma função de ordem superior para passar o elemento da lista para a função.
*/

function appendItem(listNode) {
  return function (item) {
    var itemNode = document.createElement('div');
    itemNode.appendChild(document.createTextNode(item.title));
    listNode.appendChild(itemNode);
  };
};

/*
É isso para a implementação das três etapas. Primeiro, recuperar o valor do campo de entrada; Segundo, realizar uma requisição assíncrona com o valor para recuperar a lista a partir de um resultado da API do Hacker News; E terceiro, anexe a lista e os elementos do item ao seu DOM.
Por último, mas não menos importante, falta uma parte crucial. Você não deve esquecer de remover a lista do DOM ao solicitar uma nova lista da API. Caso contrário, o novo resultado da solicitação de busca será apenas anexado ao seu resultado anterior no DOM. 
*/

function onSearch() {
  removeList();
  doSearch(getValueFromElementById('searchInput'))
    .then(appendList);
};

function removeList() {
  var listNode = document.getElementById('list');
  if (listNode) {
    listNode.parentNode.removeChild(listNode);
  }
}

/*
Você pode ver que foi um trabalho e tanto para resolver o problema definido no artigo. É preciso que haja alguém encarregado do DOM. A atualização do DOM acontece de uma forma muito ingênua aqui, pois ela apenas remove um resultado anterior se já houver um e anexa o novo resultado ao DOM novamente. Tudo funciona muito bem para resolver o problema definido, mas o código fica complexo quando você adiciona funcionalidades ou amplia as funcionalidades do aplicativo.

Se você não tiver o npm instalado, instale-o primeiro via Nodejs. Finalmente, você pode testar seus dois arquivos como aplicação em seu navegador local instalando um servidor HTTP na linha de comando com o npm.
*/

//$ npm install http-server -g


// Em seguida, você pode iniciar o servidor HTTP a partir da linha de comando no diretório onde você criou seus arquivos index.html e index.js:


//$ http-server

// A saída deve te dar uma URL onde você pode encontrar a sua aplicação no browser 

/*

- RESOLVENDO O MESMO PROBLEMA EM REACT

Nesta parte do artigo, você vai resolver o mesmo problema com React. Ele deve lhe dar uma maneira de comparar as duas soluções e talvez convencê-lo porque uma biblioteca como a React é uma ferramenta adequada para resolver tais problemas.

O projeto consistirá novamente em um arquivo index.html e index.js. Nossa implementação começa novamente com o arquivo HTML boilerplate no arquivo index.html. Ele requer as duas bibliotecas React e ReactDOM necessárias. A última é usada para enganchar o React no DOM e a primeira para o próprio React. Além disso, o index.js também está incluído.

<!DOCTYPE html>
<html>
  <head>
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>

Em segundo lugar, adicione Babel para transportar seu código JavaScript para o JavaScript vanilla, pois o seguinte código em seu arquivo index.js utilizará funcionalidades JavaScript não vanilla, como as classes JavaScript ES6. Assim, você tem que adicionar Babel para transportá-lo para o JavaScript puro para que ele funcione em todos os navegadores.


<!DOCTYPE html>
<html>
  <head>
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    *<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
  </head>
  <body>
    *<script type="text/babel" src="index.js"></script>
  </body>
</html>

Terceiro, você tem que definir um elemento com uma identificação. Esse é o lugar crucial onde o React pode se conectar ao DOM. Não há necessidade de definir mais elementos HTML no seu arquivo index.html, porque tudo o resto será definido no seu código React no arquivo index.js.

<body>
  *<div id="app" />
  <script type="text/babel" src="index.js"></script>
</body>

Vamos para a implementação no arquivo index.js. Primeiro, você pode definir o pedido de busca no topo do seu arquivo como você já fez antes em vanilla JavaScript.
*/

var BASE_URL = 'https://hn.algolia.com/api/v1/';
function doSearch(query) {
  var url = BASE_URL + 'search?query=' + query + '&hitsPerPage=200';
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      return result.hits;
    });
}

/*
Como você incluiu Babel em seu arquivo index.html, você pode refatorar o último pedaço de código para JavaScript ES6 usando as arrow function e template literals(`${foo} etc`).
*/

const BASE_URL = 'https://hn.algolia.com/api/v1/';
function doSearch(query) {
  const url = `${BASE_URL}search?query=${query}&hitsPerPage=200`;
  return fetch(url)
    .then(response => response.json())
    .then(result => result.hits);
}

/*
Na próxima parte, vamos enganchar um componente React no seu HTML usando o ReactDOM. O elemento HTML com o aplicativo id é usado para renderizar o seu primeiro componente raíz com o nome App.
*/

class App extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

/*
O componente App usa a sintaxe JSX do React para exibir HTML. No JSX você pode usar o JavaScript também. Vamos estender a saída renderizada para resolver o problema definido neste artigo.
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Search Hacker News with React</h1>
        <form type="submit" onSubmit={}>
          <input type="text" onChange={} />
          <button type="text">Search</button>
        </form>
        {/* show the list of items */}
      </div>
    );
  }
}

/*
O componente renderiza um formulário com um elemento de entrada e um elemento de botão. Além disso, há um espaço reservado para renderizar a lista a partir do pedido de busca no final. Faltam os dois manipuladores para o elemento de entrada e para o envio do formulário. No próximo passo, você pode definir os manipuladores de forma declarativa em seu componente como métodos de classe.
*/

class App extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
  }
  onChange(e) {
  }
  render() {
    return (
      <div>
        <h1>Search Hacker News with React</h1>
        <form type="submit" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} />
          <button type="text">Search</button>
        </form>
        {/* show the list of items */}
      </div>
    );
  }
}

/*
O último código mostra o poder declarativo do React. Você pode implementar o que todo manipulador em seu HTML está fazendo baseado em métodos de classe bem definidos. Estes podem ser usados como callbacks para os seus manipuladores.

Cada manipulador tem acesso ao evento sintético do React. Por exemplo, ele pode ser usado para recuperar o valor do elemento de entrada no manipulador onChange() quando alguém digita no campo. Você fará isto na próxima etapa.

Note que o evento já é usado no método de classe 'onSubmit()' para prevenir o comportamento do navegador nativo. Normalmente o navegador atualizaria a página após um evento de submissão. Mas no React você não quer atualizar a página, você só quer deixar o React lidar com isso.

Vamos entrar com a manipulação do estado em React. Seu componente tem que gerenciar o estado: o valor no campo de entrada e a lista de itens que é recuperada da API eventualmente. Ele precisa saber sobre esses estados para recuperar o valor do campo de entrada para a requisição de busca e para renderizar a lista eventualmente. Assim, você pode definir um estado inicial para o componente em seu construtor.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  ...
}

/*
Agora, você pode atualizar o estado para o valor do campo de entrada usando a gerência estadual local do React. Em um componente React, você tem acesso ao método de classe setState() para atualizar o estado local. Ele usa uma fusão rasa e assim você não precisa se preocupar com o estado da lista quando atualizar o estado de entrada.

*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  ...
  onChange(e) {
    this.setState({ input: e.target.value });
  }
  ...
}

/*
Ao usar this.state em seu componente você pode acessar o estado do componente novamente. Você deve fornecer o estado de entrada atualizado para o seu elemento de entrada. Desta forma, você assume o controle do estado do elemento e o elemento não o faz por si mesmo. Ele se torna o chamado componente controlado, que é a melhor prática em React.
*/

render() {
  return (
    <div>
      <h1>Search Hacker News with React</h1>
      <form type="submit" onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.input} />
        <button type="text">Search</button>
      </form>
      {/* show the list of items */}
    </div>
  );
}

/*
Uma vez que o estado local de um componente é atualizado em React, o método de render() do componente é executado novamente. Assim você tem sempre o estado correto disponível ao renderizar seus elementos. Se você mudar o estado novamente, por exemplo digitando algo no campo de entrada, o método render() será executado novamente para você. Você não tem que se preocupar em criar ou remover elementos DOM quando algo muda.

No próximo passo, você irá chamar a função doSearch() definida para fazer a requisição para a API do Hacker News. Isso deve acontecer no método de classe onSubmit(). Uma vez que uma requisição resolvida com sucesso, você pode definir o novo estado para a propriedade list.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    doSearch(this.state.input)
      .then((hits) => this.setState({ list: hits }));
  }

  render() {
    return (
      <div>
        <h1>Search Hacker News with React</h1>
        <form type="submit" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.input} />
          <button type="text">Search</button>
        </form>
        {/* show the list of items */}
      </div>
    );
  }
}

/*
O estado é atualizado quando o pedido é atendido com sucesso. Uma vez que o estado é atualizado, o método render() é executado novamente e você pode usar a lista no seu estado para renderizar seus elementos usando a funcionalidade de mapa embutida do JavaScript.

continue lendo: como manipular fetch com React (https://www.robinwieruch.de/react-fetching-data)

Esse é o poder do JSX no React, porque você pode usar o JavaScript puro para renderizar múltiplos elementos.
*/

...
render() {
  return (
    <div>
      <h1>Search Hacker News with React</h1>
      <form type="submit" onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.input} />
        <button type="text">Search</button>
      </form>
      {this.state.list.map(item => <div key={item.objectID}>{item.title}</div>)}
    </div>
  );
}

/*
É isso aí. Ambos os métodos de classe atualizam o estado de forma síncrona ou assíncrona. Após o estado atualizado eventualmente, o método render() é executado novamente e exibe todos os elementos HTML usando o estado atual. Não há necessidade de você remover ou anexar elementos DOM de forma imperativa. Você pode definir de forma declarativa o que você quer exibir com seu componente.

Você pode experimentar a aplicação da mesma forma que a aplicação JavaScript vanilla. Na linha de comando navegue em sua pasta e use o http-server para servir a aplicação.

No geral, ambos os cenários que estão usando o vanilla JavaScript e React devem ter mostrado uma grande comparação de código imperativo e declarativo. Na programação imperativa, você descreve com seu código como fazer algo. Foi o que você fez no cenário JavaScript puro. Em contraste, na programação declarativa, você descreve com o seu código o que você quer fazer. Esse é o poder do React e de usar uma biblioteca sobre o JavaScript puro.

A implementação dos dois exemplos é bastante pequena e deve mostrar que o problema pode ser resolvido por ambas as abordagens. Eu diria que a solução JavaScript vanilla é ainda mais adequada para este problema. No entanto, uma vez que você dimensiona sua aplicação, ela se torna mais complexa em JavaScript vanilla para gerenciar o DOM, as manipulações do DOM e o estado da aplicação. Chegaria um ponto no tempo em que você acabaria com o infame código spaghetti como aconteceu com muitas aplicações jQuery no passado. Em React, você mantém seu código declarativo e pode descrever toda uma hierarquia HTML com componentes. Estes componentes gerenciam seu próprio estado, podem ser reutilizados e compostos uns nos outros. Você pode descrever toda uma árvore de componentes com eles. Em React, você mantém sua aplicação legível, manejável e escalável. É bastante simples dividir um componente em múltiplos componentes.
*/

class App extends React.Component {
  ...
  render() {
    return (
      <div>
        <h1>Search Hacker News with React</h1>
        <form type="submit" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.input} />
          <button type="text">Search</button>
        </form>
        {this.state.list.map(item =>
          <Item key={item.objectID} item={item} />
        )}
      </div>
    );
  }
}
const Item = ({ item }) =>
  <div>{item.title}</div>

/*
O último trecho de código mostra como você pode extrair outro componente do componente App. Desta forma, você pode escalar sua hierarquia de componentes e manter a lógica de negócios colocada em componentes. Seria muito mais difícil em vanilla JavaScript manter tal código.
...

Você pode encontrar todas as soluções neste repositório GitHub (https://github.com/rwieruch/why-frameworks-matter). Há também uma solução para JavaScript ES6 que pode ser usada entre as abordagens JavaScript vanilla e React. Seria ótimo encontrar colaboradores para implementar exemplos para as soluções Angular, Ember e outras também. Sinta-se à vontade para contribuir com ele :)

Se você gostou desta viagem do JavaScript puro ao React e decidiu aprender React, confira The Road to learn React como sua próxima viagem para aprender React. Ao longo do caminho, você transitará suavemente do vanilla JavaScript para o JavaScript ES6 e mais além.

No final, lembre-se sempre que há pessoas trabalhando atrás das cortinas para habilitar estas soluções para você. Você pode fazer um grande favor aos colaboradores ao animá-los no Twitter de vez em quando ou ao se envolver com o código aberto. Afinal, ninguém mais quer construir aplicações maiores em vanilla JavaScript. Portanto, valorize sua biblioteca ou framework que você está usando todos os dias :)
*/


//#####################################


/*

- Fundamentos do JavaScript antes de aprender React

Depois de todos os meus ensinamentos sobre React, seja online para um público maior ou on-site para empresas em transição para o desenvolvimento web e React, sempre chego à conclusão de que React é tudo sobre JavaScript. Os recém-chegados ao React mas também eu mesmo o vejo como uma vantagem, pois você carrega seus conhecimentos de JavaScript por um tempo maior em comparação com suas habilidades de React.

Durante meus workshops, a maior parte do material é sobre JavaScript e não sobre React. A maior parte dele se resume a JavaScript ES6 e mais além -- características e sintaxe -- mas também operadores ternários, versões resumidas na linguagem, o objeto, funções embutidas em JavaScript (map, reduce , filter) ou conceitos mais gerais como componibilidade, reusabilidade, imutabilidade, fechamentos, tabelas de verdade ou funções de ordem superior. Estes são os fundamentos, que você não precisa necessariamente dominar antes de começar com React, mas que com certeza surgirão ao aprendê-lo ou praticá-lo.

O passo seguinte é minha tentativa de lhe dar uma lista quase extensa mas concisa sobre todas as diferentes funcionalidades JavaScript que complementam seu conhecimento do React. Se você tiver qualquer outra coisa que não esteja na lista, basta deixar um comentário para este artigo e eu vou mantê-lo atualizado.


- LISTA DE CONTEÚDOS (https://www.robinwieruch.de/javascript-fundamentals-react-requirements)

- Inserindo React depois de aprender JavaScript
- Aulas de React e JavaScript
- Arrow functions em React
- Funções como Componentes em React
- Sintaxe dos Componentes da Classe de React
- Modelos de Literais em React
- Map, Reduce e Filter em React
- var, let, e const in React
- Ternary Operator in React
- Declarações de Importação e Exportação em React
- Bibliotecas em React
- Async/Await in React
- Funções de Ordem Superior em React
- Shorthand notation Object
- Desestruturação em React
- Spread Operator em React

Há mais JavaScript do que React

- ENTRANDO NO REACT DEPOIS DE APRENDER JAVASCRIPT
Quando você entra no mundo do React, muitas vezes você é confrontado com um Componente de Classe React:
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hello React
          </h1>
          <a href="https://reactjs.org">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;

/*
Em um componente de classe React, há muitas coisas para digerir para iniciantes que não são necessariamente React: declarações de classe, métodos de classe e herança, por ser uma classe. Também os comandos de importação JavaScript estão apenas adicionando complexidade quando se aprende React. Mesmo que o foco principal deva ser JSX (a sintaxe do React) -- tudo na declaração de retorno -- no início, muitas vezes todas as coisas ao redor também exigem explicações. Este artigo deve lançar alguma luz em todas as coisas ao redor, a maioria JavaScript, sem se preocupar muito com o React.

- AULAS DE REACT E JAVASCRIPT

Ser confrontado com um componente de classe React, requer o conhecimento prévio sobre classes JavaScript. Supõe-se que esse conhecimento é dado, mas não é, pois as classes JavaScript são bastante novas na linguagem. Anteriormente, havia apenas a cadeia de protótipos do JavaScript que também era usada para herança. As classes JavaScript são construídas sobre a herança prototípica dando a tudo isso uma representação mais simples com açúcar sintáctico.

Para entender as classes JavaScript, você pode levar algum tempo para aprender sobre elas sem React:
*/

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}
var me = new Developer('Robin', 'Wieruch');
console.log(me.getName());

/*
Uma classe descreve uma entidade que é usada como um plano para criar uma instância dessa entidade. Uma vez criada uma instância da classe com o novo comando, o construtor da classe é chamado de instância que instancia a instância da classe. Portanto, uma classe pode ter propriedades que normalmente estão localizadas em seu construtor. Além disso, métodos de classe (ex. getName()) são usados para ler (ou escrever) dados da instância. A instância da classe é representada como o objeto dentro da classe, mas fora da instância é apenas atribuída a uma variável JavaScript.

Normalmente as classes são usadas para herança na programação orientada a objetos. Elas são usadas para o mesmo em JavaScript enquanto a instrução 'extends' pode ser usada para herdar com uma classe de outra classe. A classe mais especializada herda todas as habilidades da classe mais geral com o comando extends, e pode adicionar suas habilidades especializadas a ela:

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}*/
class ReactDeveloper extends Developer {
  getJob() {
    return 'React Developer';
  }
}
var me = new ReactDeveloper('Robin', 'Wieruch');
//console.log(me.getName());
console.log(me.getJob());

/*
Basicamente, é tudo o que é necessário para entender plenamente os componentes da classe React. Uma classe JavaScript é usada para definir um componente React, mas como você pode ver, o componente React é apenas um "componente React" porque ele herda todas as habilidades da classe React Component real que é importada do pacote React:
 */

import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
      </div>
    );
  }
}
export default App;

/*
É por isso que o método render() é obrigatório nos componentes da classe React: O Componente React do pacote React importado instrui você a usá-lo para exibir algo no navegador. Além disso, sem o Componente React, você não poderia usar outros métodos de ciclo de vida. Por exemplo, não haveria um método de ciclo de vida componentDidMount(), porque o componente seria uma instância de uma classe JavaScript puro. E não apenas os métodos de ciclo de vida iriam embora, os métodos da API React como this.setState() para gerenciamento do estado local também não estariam disponíveis.

Entretanto, como você já viu, o uso de uma classe JavaScript é benéfico para estender a classe geral com seu comportamento especializado. Assim, você pode introduzir seus próprios métodos de classe ou propriedades.

*/

import React, { Component } from 'react';
class App extends Component {
  getGreeting() {
    return 'Welcome to React';
  }
  render() {
    return (
      <div>
        <h1>{this.getGreeting()}</h1>
      </div>
    );
  }
}
export default App;

/*
Agora você sabe porque o React usa classes JavaScript para definir os componentes da classe React. Elas são utilizadas quando você precisa acessar a API do React (métodos de ciclo de vida, this.state e this.setState()). A seguir, você verá como os componentes React podem ser definidos de uma maneira diferente sem o uso de uma classe JavaScript.

Afinal, as classes JavaScript dão as boas vindas ao uso de herança no React, o que não é um resultado desejado para o React, pois o React favorece a composição em detrimento da herança. Portanto, a única classe que você deve estender de seus componentes React deve ser o React Component oficial.

- ARROQ FUNCTIONS EM REACT

Ao ensinar alguém sobre React, eu explico as arrow functions JavaScript muito cedo. Elas são uma das adições da linguagem JavaScript no ES6 que impulsionaram o JavaScript para frente na programação funcional.

*/

// JavaScript ES5 function
function getGreeting() {
  return 'Welcome to JavaScript';
}
// JavaScript ES6 arrow function with body
const getGreeting = () => {
  return 'Welcome to JavaScript';
}
// JavaScript ES6 arrow function without body and implicit return
const getGreeting = () =>
  'Welcome to JavaScript';

/*
As arrow functions JavaScript são frequentemente utilizadas em aplicações React para manter o código conciso e legível. Eu as amo, as ensino cedo, mas sempre tento refatorar minhas funções de JavaScript ES5 para funções ES6 ao longo do caminho. Em algum momento, quando as diferenças entre as funções JavaScript ES5 e as funções JavaScript ES6 se tornam claras, eu me atenho à maneira JavaScript ES6 de fazer isso com as arrow functions. Entretanto, eu sempre vejo que muitas sintaxes diferentes podem ser esmagadoras para os iniciantes do React. Então eu tento deixar claras as diferentes características das funções JavaScript antes de ir com tudo usando-as no React. Nas seções seguintes, você verá como as funções de seta JavaScript são comumente usadas no React.

- FUNÇÕES COMO COMPONENTES EM REACT

React utiliza o melhor de diferentes paradigmas de programação. Isso só é possível porque o JavaScript é uma linguagem de programação multifacetada. No lado da programação orientada a objetos, os componentes de classe do React são uma ótima maneira de alavancar as habilidades das classes JavaScript (herança para a API do componente React, métodos de classe e propriedades de classe como this.setState() e this.state). Por outro lado, existem muitos conceitos de programação funcional usados no React (e seu ecossistema) também. Por exemplo, os componentes funcionais do React são outra forma de definir componentes no React. A questão que levou aos componentes de função no React: E se os componentes pudessem ser usados como funções?
*/

function (props) {
  return view;
}

/*
É uma função que recebe uma entrada (por exemplo, props) e retorna os elementos HTML exibidos (view). Sob a capa, a função só precisa usar o mecanismo de render() dos componentes React: 
*/

function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}

/*
Componentes funcionais são a forma preferida de definir componentes em React. Eles têm menos boilerplate, adicionam menos complexidade e são mais simples de manter do que os componentes da classe React. Você pode facilmente migrar seus componentes de classe para componentes de função com React Hooks.

Anteriormente, o artigo mencionava as funções de seta JavaScript e como elas melhoram seu código React. Vamos aplicar este tipo de funções aos seus componentes de função. O componente de saudação anterior tem dois visuais diferentes com JavaScript ES5 e ES6:
*/

// JavaScript ES5 function
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}
// JavaScript ES6 arrow function
const Greeting = (props) => {
  return <h1>{props.greeting}</h1>;
}
// JavaScript ES6 arrow function
// without body and implicit return
const Greeting = (props) =>
  <h1>{props.greeting}</h1>;

/*
As arrow functions JavaScript são uma ótima maneira de manter seus componentes funcionais em React concisamente. Ainda mais quando não há cálculo no meio e assim o corpo da função e a declaração de retorno podem ser deixados de fora.

- SINTAXE DOS COMPONENTES DA CLASSE DE REAÇÃO

A forma de reagir do React evoluiu ao longo do tempo. Em seus estágios iniciais, o método React.createClass() foi a forma padrão de criação de um componente da classe React. Atualmente, ele não é mais utilizado, pois com o surgimento do JavaScript ES6, a sintaxe dos componentes da classe React anteriormente utilizada tornou-se o padrão (somente antes da introdução dos componentes da função React).

Entretanto, o JavaScript está evoluindo constantemente e, portanto, os entusiastas do JavaScript estão sempre buscando novas formas de fazer as coisas. É por isso que você encontrará muitas vezes sintaxes diferentes para os componentes da classe React. Uma maneira de definir um componente de classe React, com estado e métodos de classe, é a seguinte:

*/

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onIncrement() {
    this.setState(state => ({ counter: state.counter + 1 }));
  }
  onDecrement() {
    this.setState(state => ({ counter: state.counter - 1 }));
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={this.onIncrement}
          type="button"
        >
          Increment
        </button>
        <button
          onClick={this.onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

/*
Entretanto, ao implementar lotes de componentes de classe React, a ligação de métodos de classe no construtor -- e ter um construtor em primeiro lugar -- torna-se um tedioso detalhe de implementação. Felizmente, existe uma sintaxe curta para se livrar de ambos:
*/

class Counter extends Component {
  state = {
    counter: 0,
  };
  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }
  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={this.onIncrement}
          type="button"
        >
          Increment
        </button>
        <button
          onClick={this.onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

/*
Ao usar arrow funtions JavaScript, você pode auto-vincular métodos de classe sem ter que ligá-los no construtor. Também é possível deixar o construtor de fora, quando não estiver usando as props, definindo o estado diretamente como uma propriedade de classe.

Nota: Esteja ciente que as propriedades da classe ainda não estão na linguagem JavaScript). Portanto, você pode dizer que esta forma de definir um componente de classe React é muito mais concisa do que a outra versão.

- MODELOS LITERAIS EM REACT

Os templates literais são outra característica específica da linguagem JavaScript que veio com o JavaScript ES6. Vale a pena mencioná-lo em breve, pois quando as pessoas novas em JavaScript e React vêem-nos, também podem gerar confusão. Ao aprender JavaScript, é a seguinte sintaxe que você aprende para concatenar uma string:
*/

function getGreeting(what) {
  return 'Welcome to ' + what;
}
const greeting = getGreeting('JavaScript');
console.log(greeting);
// Welcome to JavaScript

//Os modelos literais podem ser usados para o que é chamado de interpolação de strings:

function getGreeting(what) {
  return `Welcome to ${what}`;
}

/*
Você só tem que usar cráses e a notação ${} para inserir primitivos JavaScript. No entanto, os literais de string não são usados apenas para interpolação de string, mas também para strings multilinhas em JavaScript:
*/

function getGreeting(what) {
  return `
    Welcome
    to
    ${what}
  `;
}

/*
Basicamente, é assim que blocos de texto maiores podem ser formatados em várias linhas. Por exemplo, isso pode ser visto com a recente introdução do GraphQL no JavaScript, pois as consultas ao GraphQL são compostas com literais de template. Também o React Styled Components faz uso de modelos literais.

- MAP, REDUCE E FILTER EM REACT

Qual é a melhor abordagem para ensinar a sintaxe JSX para iniciantes do React? Normalmente eu começo com a definição de uma variável no método render() e uso-a como JavaScript em HTML no bloco de retorno.

*/

import React from 'react';
const App = () => {
  var greeting = 'Welcome to React';
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};
export default App;

/*
Você só precisa usar as chaves {} para obter seu JavaScript em HTML. Partir de renderizar uma string para um objeto complexo não é diferente.
*/

import React from 'react';
const App = () => {
  var user = { name: 'Robin' };
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
export default App;

/*
Normalmente a próxima pergunta então é: Como fazer uma lista de itens? Essa é uma das melhores partes sobre como explicar React, na minha opinião. Não existe uma API específica do React, como um atributo personalizado em uma tag HTML que permite renderizar múltiplos itens no React. Você pode usar JavaScript simples para iterar sobre a lista de itens e retornar HTML para cada item.
*/

import React from 'react';
const App = () => {
  var users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  return (
    <ul>
      {users.map(function (user) {
        return <li>{user.name}</li>;
      })}
    </ul>
  );
};
export default App;
/*
Tendo usado a arrow function JavaScript antes, você pode se livrar do corpo da função e da declaração de retorno que deixa sua saída renderizada muito mais concisa.

*/

import React from 'react';
const App = () => {
  var users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  );
}
export default App;

/*
Em breve, todo desenvolvedor React se acostumará com os métodos embutidos de mapa JavaScript() para arrays. Faz bastante sentido mapear sobre um array e retornar a saída renderizada para cada item. O mesmo pode ser aplicado para casos customizados onde filter() ou reduce() faz mais sentido do que renderizar uma saída para cada item mapeado.
*/

import React from 'react';
const App = () => {
  var users = [
    { name: 'Robin', isDeveloper: true },
    { name: 'Markus', isDeveloper: false },
  ];
  return (
    <ul>
      {users
        .filter(user => user.isDeveloper)
        .map(user => <li>{user.name}</li>)
      }
    </ul>
  );
};
export default App;

//Em geral, é assim que os desenvolvedores React estão se acostumando com essas funções embutidas do JavaScript sem ter que usar uma API específica do React para isso. É apenas JavaScript em HTML.

/*
VAR, LET, E CONST EM REACT
Também as diferentes declarações de variáveis com var, let e const podem ser confusas para iniciantes em React mesmo que não sejam específicas do React. Talvez seja porque o JavaScript ES6 foi introduzido quando o React se tornou popular. Em geral, eu tento introduzir let e const muito cedo em meus workshops. Ele simplesmente começa com a troca de var com const em um componente React:

*/

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  );
};
export default App;

/*
Em seguida, dou as regras de quando usar qual declaração de variável:

(1)não usar mais var, porque let e const são mais específicas
(2)por default use const, pois não pode ser reatribuído ou decretado de novo
(3)usar let ao reatribuir a variável
Enquanto let é normalmente usado em um loop para incrementar o iterador, const é normalmente usado para manter as variáveis JavaScript inalteradas. Embora seja possível alterar as propriedades internas de objetos e matrizes ao usar const, a declaração da variável mostra a intenção de manter a variável inalterada.


- OPERADOR TERNÁRIO EM REACT

Mas não termina com a exibição de strings, objetos e arrays JavaScript em React. Que tal uma declaração de if-else para permitir a renderização condicional? Você não pode usar uma declaração if-else diretamente no JSX, mas você pode retornar antecipadamente a partir da função de renderização. Retornar nulo é válido no React quando não estiver exibindo nada.


*/

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  const showUsers = false;
  if (!showUsers) {
    return null;
  }
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  );
};
export default App;

//Entretanto, se você quiser usar uma declaração if-else dentro do JSX retornado, você pode fazê-lo usando um operador ternário JavaScript:

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  const showUsers = false;
  return (
    <div>
      {showUsers ? (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default App;

//Outra maneira de fazer isso, se você retornar apenas um lado da renderização condicional de qualquer maneira, é usando o && operador:

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  const showUsers = false;
  return (
    <div>
      {showUsers && (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default App;

/*
Não vou entrar em detalhes do porquê disto funcionar, mas se você estiver curioso, pode aprender sobre isto e outras técnicas de renderização condicional por aqui (https://www.robinwieruch.de/conditional-rendering-react/): Todas as renderizações condicionais em React. Afinal, a renderização condicional no React só mostra novamente que a maioria do React é apenas JavaScript no JSX e não qualquer coisa específica do React.

- DECLARAÇÕES DE IMPORTAÇÃO E EXPORTAÇÃO EM REACT

Felizmente, a comunidade JavaScript se estabeleceu em uma forma de importar e exportar funcionalidades de arquivos com JavaScript ES6 com declarações de importação e exportação.

Entretanto, sendo novos no React e no JavaScript ES6, esses comandos de importação e exportação são apenas mais um tópico que requer explicação ao iniciar sua primeira aplicação React. Muito cedo você terá suas primeiras importações para CSS, SVG ou outros arquivos JavaScript. O projeto create-react-app já começa com esses comandos de importação:
*/

import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello React
        </h1>
        <a href="https://reactjs.org">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;

/*
É ótimo para o projeto inicial, pois oferece uma experiência completa de como outros arquivos podem ser importados e (exportados). Também o componente App é importado no arquivo src/index.js. Entretanto, ao fazer seus primeiros passos no React, eu tento evitar essas importações no início. Ao invés disso, eu tento focar nos componentes JSX e React. Somente mais tarde as instruções de importação e exportação são introduzidas ao separar o primeiro componente React ou função JavaScript em outro arquivo.

Então, como funcionam esses comandos de importação e exportação? Digamos que em um arquivo você queira exportar as seguintes variáveis:

*/

const firstname = 'Robin';
const lastname = 'Wieruch';
export { firstname, lastname };

//Então você pode importá-las em outro arquivo com o caminho relativo do primeiro arquivo

import { firstname, lastname } from './file1.js'

console.log(firstname)
//output 'Robin'

/*
Portanto, não se trata necessariamente de importar/exportar componentes ou funções, trata-se de compartilhar tudo o que é atribuível a uma variável (deixando de fora as importações/exportações de CSS ou SVG, mas falando apenas do JS). Você também pode importar todas as variáveis exportadas de outro arquivo como um objeto:
*/

import * as person from 'file1.js'

console.log(person.firstname)
//output 'Robin'

/*
Importações podem ter um pseudônimo. Pode acontecer de você importar funcionalidades de múltiplos arquivos que tenham o mesmo nome de exportação. É por isso que você pode usar um alias:
*/

import { firstname as username } from './file1.js';
console.log(username);
// output: Robin

/*
Todos os casos anteriores são denominados de importação e exportação. Mas também existe a declaração default. Ele pode ser usado para alguns casos de uso:

- para exportar e importar uma única funcionalidade
- para destacar a principal funcionalidade da API exportada de um módulo
- para ter uma funcionalidade de importação de fallback
*/

const robin = {
  firstname: 'Robin',
  lastname: 'Wieruch',
};
export default robin;

/*
Deixe de fora as chaves para a importação para importar a exportação padrão:
*/

import developer from './file1.js';
console.log(developer);
// output: { firstname: 'Robin', lastname: 'Wieruch' }

//Além disso, o nome de importação pode ser diferente do nome padrão exportado. Você também pode utilizá-lo em conjunto com as declarações de exportação e importação nomeadas:

const firstname = 'Robin';
const lastname = 'Wieruch';
const person = {
  firstname,
  lastname,
};
export {
  firstname,
  lastname,
};
export default person;

//E importar o default ou as exportações nomeadas em outro arquivo:

import developer, { firstname, lastname } from 'file1.js'
console.log(developer)
// output: {firstname: 'Robin', lastname: 'Wieruch'}

console.log(firstname, lastname)
// output: Robin Wieruch

//Você também pode dispensar linhas adicionais e exportar as variáveis diretamente para exportações nomeadas:

export const firstname = 'Robin';
export const lastname = 'Wieruch';

/*
Estas são as principais funcionalidades para os módulos ES6. Elas ajudam você a organizar seu código, a manter seu código e a projetar APIs de módulos reutilizáveis. Você também pode exportar e importar funcionalidades para testá-las.

- BIBLIOTECAS EM REACT
React oferece recursos de gerenciamento de estado e efeitos colaterais, mas, além disso, é apenas uma biblioteca de componentes que renderiza HTML para o seu navegador. Tudo o resto pode ser adicionado a partir de APIs (por exemplo, API do navegador, API do DOM), funcionalidades JavaScript (por exemplo, map, filter, reduce) ou bibliotecas externas. Nem sempre é simples escolher a biblioteca certa para complementar sua aplicação React, mas uma vez que você tenha uma boa visão geral das diferentes opções, você pode escolher a que melhor se encaixa na sua stack de tecnologia.

Por exemplo, a busca de dados no React pode ser feita com a API nativa do fetch:
*/

import React, { Component } from 'react';
class App extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    ...
  }
}
export default App;

//Mas cabe a você usar outra biblioteca para ir buscar dados em React. O Axios é uma escolha popular para aplicações React:

import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    axios.get('https://api.mydomain.com')
      .then(response => this.setState({ data: response.data }));
  }
  render() {
    ...
  }
}
export default App;

/*
Logo, assim que você souber sobre o problema que precisa ser resolvido, o extenso e inovador ecossistema da React deve lhe dar muitas opções para resolvê-lo. Novamente não se trata de React, mas de conhecer todas as diferentes bibliotecas JavaScript que podem ser usadas para complementar a sua aplicação.

- ASYNC / AWAIT EM REACT
Em um componente funcional em React, a busca de dados parece ligeiramente diferente com React Hooks:

*/

import React from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.mydomain.com')
        .then(response => setData(response.data));
    };
    fetchData();
  }, []);
  return (
    ...
  );
};
export default App;

/*
No trecho de código anterior, usamos a forma mais comum de resolver uma promessa com um bloco then. Falta o bloco catch para manipulação de erros para manter o exemplo simples. Por favor leia um dos tutoriais referenciados para saber mais sobre como buscar dados em React com manipulação de erros.

De qualquer forma, você também pode usar async/await que foi introduzido ao JavaScript não há muito tempo:
*/

import React from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.mydomain.com');
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    ...
  );
};
export default App;

//No final, async/await é apenas mais uma forma de resolver promessas em JavaScript assíncrono.

/*
- FUNÇÕES DE ORDEM SUPERIOR EM REACT

Funções de ordem superior são um grande conceito de programação, especialmente quando se caminha para a programação funcional. Em React, faz total sentido saber sobre este tipo de funções, pois em algum momento você tem que lidar com componentes de ordem superior que podem ser melhor explicados quando se conhece as funções de ordem superior em primeiro lugar.

Funções de ordem superior podem ser mostradas no React logo no início, sem a introdução de componentes de ordem superior. Por exemplo, vamos dizer que uma lista renderizada de usuários pode ser filtrada com base no valor de um campo de entrada.
*/

import React from 'react';
const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  const [query, setQuery] = React.useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <ul>
        {users
          .filter(user => user.name.includes(query))
          .map(user => (
            <li>{user.name}</li>
          ))}
      </ul>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default App;

/*
Nem sempre é desejado extrair funções, pois pode acrescentar complexidade desnecessária, mas, por outro lado, pode ter efeitos de aprendizagem benéficos para o JavaScript. Além disso, ao extrair uma função, você a torna testável isoladamente do componente React. Então vamos mostrá-lo com a função que é fornecida para a função de filter.
*/

import React from 'react';
function doFilter(user) {
  return user.name.includes(query);
}
const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  const [query, setQuery] = React.useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <ul>
        {users.filter(doFilter).map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default App;

/*
A implementação anterior não funciona porque a função doFilter() precisa saber sobre a propriedade da consulta do estado. Então você pode passá-la para a função, envolvendo-a com outra função que leva a uma função de ordem superior.
*/

import React from 'react';
function doFilter(query) {
  return function(user) {
    return user.name.includes(query);
  };
}
const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  const [query, setQuery] = React.useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <ul>
        {users.filter(doFilter(query)).map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default App;

/*
Basicamente, uma função de ordem superior é uma função que retorna uma função. Ao utilizar as arrow functions JavaScript ES6, você pode tornar uma função de ordem superior mais concisa. Além disso, esta versão abreviada torna mais atrativa a composição de funções em funções.
*/

const doFilter = query => user =>
  user.name.includes(query);

/*
Agora, a função doFilter() pode ser exportada do arquivo e testada isoladamente como função pura (ordem superior). Depois de aprender sobre funções de ordem superior, todo o conhecimento fundamental foi estabelecido para aprender mais sobre os componentes de ordem superior do React, se você quiser aprender sobre esta técnica avançada no React: (https://www.robinwieruch.de/react-higher-order-components). Mover funções em torno de sua base de código é uma ótima maneira de aprender sobre os benefícios de ter funções como cidadãos de primeira classe em JavaScript. É poderoso ao mover o seu código em direção à programação funcional.

- ATRIBUIÇÃO DE SHORTHAND OBJECT
Há uma pequena adição na linguagem JavaScript que deixa os iniciantes confusos. No JavaScript ES6, você pode usar uma sintaxe de propriedade curta para inicializar seus objetos de forma mais concisa, como por exemplo, seguir a inicialização do objeto:
*/

const name = 'Robin';
const user = {
  name: name,
};

//Quando o nome da propriedade no seu objeto é o mesmo do seu nome de variável, você pode fazer o seguinte:

const name = 'Robin';
const user = {
  name,
};
console.log(user)
//output: {name: 'Robin'}

//Nomes curtos de métodos também são úteis. No JavaScript ES6, você pode inicializar os métodos em um objeto de forma mais concisa:

// without shorthand method names
var userService = {
  getUserName: function (user) {
    return user.firstname + ' ' + user.lastname;
  },
};
// shorthand method names
const userService = {
  getUserName(user) {
    return user.firstname + ' ' + user.lastname;
  },
};

//Finalmente, você está autorizado a usar nomes de propriedades computadas no JavaScript ES6:

// uso normal de uma propriedade em um objeto
var user = {
  name: 'Robin',
};
// computed key property for dynamic naming
const key = 'name';
const user = {
  [key]: 'Robin',
};

/*
Você é capaz de usar nomes de propriedades computadas para alocar valores por chave em um objeto dinamicamente, uma maneira prática de gerar tabelas de pesquisa (também chamadas de dicionários) em JavaScript.

- DESESTRUTURAÇÃO(destructuring) EM REACT
Outra funcionalidade da linguagem introduzida no JavaScript chama-se desestruturação. É frequentemente o caso de ter de acessar a muitas propriedades de estado ou props no seu componente. Ao invés de atribuí-las a uma variável uma a uma, você pode usar a atribuição de desestruturação em JavaScript.
*/

const state = { counter: 1, list: ['a', 'b'] };
// no object destructuring
const list = state.list;
const counter = state.counter;

// object destructuring
const { list, counter } = state;

/*
Isso é especialmente benéfico para os componentes funcionais do React, porque eles recebem sempre o objeto de props na sua assinatura de função. Muitas vezes você não utilizará as props, mas apenas o seu conteúdo, para que você possa desestruturar o conteúdo na assinatura da função.
*/

// no destructuring
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}
// destructuring
function Greeting({ greeting }) {
  return <h1>{greeting}</h1>;
}

//A desestruturação também funciona para arrays JavaScript:

const list = ['a', 'b'];
// no array destructuring
const itemOne = list[0];
const itemTwo = list[1];
// array destructuring
const [itemOne, itemTwo] = list;

//Como você já viu, o React Hooks está usando a desestruturação do array para acessar a função de estado e de atualização de estado.

import React from 'react';
const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
export default Counter;

//Outra grande característica é a desestruturação do resto. É frequentemente usada para dividir uma parte de um objeto, mas mantendo as propriedades restantes em outro objeto.

const state = { counter: 1, list: ['a', 'b'] };
// rest destructuring
const { list, ...rest } = state;
console.log(rest);
// output: { counter: 1 }
console.log(list);
// output: ['a', 'b']

/*
Depois disso, a lista pode ser usada para ser apresentada, por exemplo, em um componente React, enquanto o estado restante (aqui contador) é usado em outro lugar. É aí que o spread operator JavaScript entra em jogo para encaminhar o objeto restante para o próximo componente. Na próxima seção, você verá este operador em ação.

- SPREAD OPERATOR NO REACT
O operador de propagação vem com três pontos ..., mas não deve ser confundido com o resto do operador. Depende do contexto em que é usado. Utilizado dentro de uma desestruturação (ver acima), é como operador de rest. Usado em outro lugar, é um operador de propagação.
*/

const userCredentials = { firstname: 'Robin' };
const userDetails = { nationality: 'German' };
const user = {
  ...userCredentials,
  ...userDetails,
};
console.log(user);
// output: { firstname: 'Robin', nationality: 'German' }

/*O operador de propagação espalha literalmente todos os pares de valores chave de um objeto. Em React, ele vem a calhar quando as props estão apenas a ser passadas para o próximo componente.*/

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin', nationality: 'German' },
    { name: 'Markus', nationality: 'American' },
  ];
  return (
    <ul>
      {users.map(user => <li>
        <User
          name={user.name}
          nationality={user.nationality}
        />
      </li>)}
    </ul>
  );
};
const User = ({ name, nationality }) =>
  <span>{name} from {nationality}</span>;
export default App;

//Ao invés de passar todas as propriedades de um objeto por propriedade, você pode usar o operador de spread para passar todos os pares de valores chave para o próximo componente.

/*
HÁ MAIS JAVASCRIPT DO QUE REACT
Em conclusão, há muito JavaScript que pode ser aproveitado em React. Enquanto o React tem apenas uma pequena área de superfície API, os desenvolvedores têm que se acostumar a todas as funcionalidades que o JavaScript tem a oferecer. O ditado não é sem nenhuma razão: "ser um desenvolvedor React faz de você um desenvolvedor JavaScript melhor". Vamos recapitular alguns dos aspectos aprendidos do JavaScript no React, refatorando um componente de ordem superior.
*/

function withLoading(Component) {
  return class WithLoading extends React.Component {
    render() {
      const { isLoading, ...rest } = this.props;
 
      if (isLoading) {
        return <p>Loading</p>;
      }
 
      return <Component { ...rest } />;
    }
  }
}

/*
Este componente de ordem superior só é usado para mostrar um indicador de loading condicional quando o isLoading prop é definido como verdadeiro. Caso contrário, ele renderiza o input. Você já pode ver a (rest) desestruturação a partir das props e do operador de spread para o próximo Componente. Este último pode ser visto para o componente renderizado, porque todas as propriedades restantes do objeto das props são passadas para o componente como propriedades do objeto.

O primeiro passo para tornar o componente de maior ordem mais conciso é refatorar o componente de classe do React retornado para um componente de função:
*/

function withLoading(Component) {
  return function ({ isLoading, ...rest }) {
    if (isLoading) {
      return <p>Loading</p>;
    }
 
    return <Component { ...rest } />;
  };
}

/*
Você pode ver que o resto da desestruturação também pode ser usado na assinatura da função. A seguir, usando as arrow functions JavaScript ES6 torna o componente de ordem superior mais conciso novamente:
*/

const withLoading = Component => ({ isLoading, ...rest }) => {
  if (isLoading) {
    return <p>Loading</p>;
  }
 
  return <Component { ...rest } />;
}

/*
E adicionar o operador ternário encurta o corpo da função em uma linha de código. Assim, o corpo da função pode ser deixado de fora e a declaração de retorno pode ser omitida.
*/

const withLoading = Component => ({ isLoading, ...rest }) =>
  isLoading
    ? <p>Loading</p>
    : <Component { ...rest } />

/*
Como você pode ver, o componente de ordem superior utiliza várias técnicas JavaScript e não React: arrow functions, funções de ordem superior, um operador ternário, desestruturação e o operador de propagação. Basicamente, é assim que as funcionalidades do JavaScript podem ser utilizadas em aplicações React.
*/


//##################################################

/*
- Requisitos

Para seguir este livro você precisa estar familiarizado com os conceitos básicos de desenvolvimento web, ou seja, como usar HTML, CSS e JavaScript. Ele também ajuda a entender as APIs, uma vez que elas serão abordadas minuciosamente.

- Editor e Terminal

Eu forneci um guia de configuração(https://www.robinwieruch.de/developer-setup) para que você possa começar com o desenvolvimento web em geral. Para este aprendizado, você precisará de um editor de texto (por exemplo, Sublime Text) e uma ferramenta de linha de comando (por exemplo, iTerm) ou uma IDE (por exemplo, Visual Studio Code). Eu recomendo o Visual Studio Code (também chamado VS Code) para iniciantes, pois é uma solução tudo em um que fornece um editor avançado com uma ferramenta de linha de comando integrada, e porque é uma escolha popular entre desenvolvedores web.

Ao longo deste aprendizado vou utilizar o termo linha de comando, que será utilizado como sinônimo para os termos ferramenta de linha de comando, terminal, e terminal integrado. O mesmo se aplica para os termos editor, editor de texto e IDE, dependendo do que você decidiu usar para sua configuração.

Opcionalmente, eu recomendo gerenciar projetos no GitHub enquanto realizamos os exercícios deste livro, e eu forneci um pequeno guia(https://www.robinwieruch.de/git-essential-commands/) sobre como utilizar estas ferramentas. Github tem excelente controle de versão, assim você pode ver quais mudanças foram feitas se você cometer um erro ou apenas quer uma maneira mais direta de seguir adiante. É também uma ótima maneira de compartilhar seu código mais tarde com outras pessoas.

Se você não quer configurar a combinação editor/terminal ou IDE em sua máquina local, o CodeSandbox, um editor online, também é uma alternativa viável. Enquanto o CodeSandbox é uma ótima ferramenta para compartilhar código online, a configuração de uma máquina local é uma ferramenta melhor para aprender as diferentes maneiras de criar uma aplicação web. Além disso, se você quiser desenvolver aplicações profissionalmente, uma configuração local será necessária.

- NodeJS e NPM

Antes de começarmos, precisaremos ter o NodeJS e o npm instalados. Ambos são usados para gerenciar bibliotecas (pacotes do Node) que você precisará ao longo do caminho. Estes pacotes do Node podem ser bibliotecas ou frameworks inteiros. Instalaremos pacotes de NodeJSs externos via npm (gerenciador de pacotes do Node).

Você pode verificar as versões node e npm na linha de comando usando o comando node --version. Se você não receber a saída no terminal indicando qual versão está instalada, você precisa instalar o NodeJS e o npm:
*/

node --version
*vXX.YY.ZZ

/*
Se você já instalou Node e npm, certifique-se de que sua instalação é a versão mais recente. Se você é novo no npm ou precisa de uma atualização, este curso rápido de NPM que criei o colocará em dia.(https://www.robinwieruch.de/npm-crash-course)
*/

//#######################################

/*
- Montagem de um Projeto em React
No Road to React, usaremos o create-react-app para inicializar a sua aplicação. É um kit para iniciantes de configuração zero para o React introduzido pelo Facebook em 2016, que é recomendado para iniciantes por 96% dos usuários do React. No Create-react-app, as ferramentas e configurações evoluem em segundo plano, enquanto o foco continua sendo a implementação do aplicativo.

Após a instalação do Node e npm, use a linha de comando para digitar o seguinte comando em uma pasta dedicada ao seu projeto. Vamos nos referir a este projeto como hacker-stories, mas você pode escolher qualquer nome que quiser:

$ npx create-react-app hacker-stories

Vá ao diretório criado após o processo ser finalizado 

$ cd hacker-stories

Agora podemos abrir a aplicação em um editor ou IDE. Para Visual Studio Code, você pode simplesmente digitar 'code .' na linha de comando. A seguinte estrutura de pastas, ou uma variação da mesma dependendo da versão create-react-app, deve ser apresentada:
*/

hacker-stories/
--node_modules/
--public/
--src/
----App.css
----App.js
----App.test.js
----index.css
----index.js
----logo.svg
--.gitignore
--package-lock.json
--package.json
--README.md

/*
Esta é explicação das pastas e arquivos mais importantes:

- README.md: A extensão .md indica que o arquivo é um arquivo markdown. Markdown é uma linguagem de marcação leve com sintaxe de formatação de texto simples. Muitos projetos de código fonte vêm com um arquivo README.md que dá instruções e informações úteis sobre o projeto. Quando subimos projetos para plataformas como o GitHub, o arquivo README.md normalmente exibe informações sobre o conteúdo contido em seus repositórios. Como você usou create-react-app, seu README.md deve ser o mesmo que o repositório oficial create-react-app do GitHub.

- node_modules/: Esta pasta contém todos os pacotes do Node que foram instalados via npm. Como usamos o create-react-app, alguns módulos do node já estão instalados. Não vamos tocar nesta pasta, já que os pacotes do node são normalmente instalados e desinstalados com npm através da linha de comando.

- package.json: Este arquivo mostra uma lista de dependências de pacotes do node e outras configurações de projeto.

- package-lock.json: Este arquivo indica ao npm como quebrar todas as versões de pacotes do Node. Nós não vamos tocar neste arquivo.

- .gitignore: Este arquivo exibe todos os arquivos e pastas que não devem ser adicionados ao seu repositório git quando o git estiver sendo utilizado, pois tais arquivos e pastas devem estar localizados apenas no seu projeto local. A pasta node_modules/ é um exemplo. É o suficiente para compartilhar o arquivo package.json com outros, assim eles podem instalar dependências no seu fim com npm install sem toda a sua pasta de dependências.

- public/: Esta pasta contém arquivos de desenvolvimento, tais como public/index.html. O arquivo index é exibido no localhost:3000 quando o aplicativo está em desenvolvimento ou em um domínio que está hospedado em outro lugar. A configuração padrão relaciona este index.html com todos os JavaScript do src/.

No início, tudo o que você precisa está localizado na pasta src/. O foco principal está no arquivo src/App.js que é usado para implementar os componentes React. Ele será usado para implementar sua aplicação, mas mais tarde você pode querer dividir seus componentes em vários arquivos, onde cada arquivo mantém um ou mais componentes por conta própria.

Adicionalmente, você encontrará um arquivo src/App.test.js para seus testes, e um arquivo src/index.js como um ponto de entrada para o mundo React. Você conhecerá intimamente os dois arquivos em seções posteriores. Há também um arquivo src/index.css e um arquivo src/App.css para dar estilo à sua aplicação geral e componentes, que vem com o estilo padrão quando você os abre. Você irá modificá-los mais tarde também.

Depois de conhecer a pasta e a estrutura de arquivos do seu projeto React, vamos passar pelos comandos disponíveis para que ele seja iniciado. Todos os comandos específicos do seu projeto podem ser encontrados em seu package.json sob a propriedade scripts. Eles podem parecer similares a estes:
*/

{
  ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ...
}

/*
Estes scripts são executados com o comando npm run <script> em um terminal ou ferramenta de linha de comando integrada à IDE. A execução pode ser omitida para os scripts de início e teste. Os comandos são os seguintes:
*/

//Roda a aplicação em http://localhost:3000
npm start
 
//Roda os testes
npm test
 
//Faz o build da aplicação para prod
npm run build

/*
Outro comando dos scripts npm anteriores chamado eject não deve ser usado para esta experiência de aprendizagem. É uma operação sem volta. Uma vez ejetado, você não pode voltar atrás. Essencialmente este comando só existe para tornar toda a ferramenta de construção e configuração do create-react-app acessível se você não estiver satisfeito com as escolhas ou se você quiser mudar alguma coisa. Mas aqui vamos manter todas as configurações padrão.
*/

//#######################################

/*
- Exercícios:

- Leia um pouco mais através da documentação do create-react-app(https://github.com/facebook/create-react-app) e do guia de iniciação(https://create-react-app.dev/docs/getting-started/).
Leia mais sobre os recursos JavaScript suportados em create-react-app.(https://create-react-app.dev/docs/supported-browsers-features/)

- Leia mais sobre a estrutura de pastas em create-react-app(https://create-react-app.dev/docs/folder-structure/).

- Conheça todas as pastas e arquivos do seu projeto React um a um.

- Leia mais sobre os scripts em create-react-app.(https://create-react-app.dev/docs/available-scripts/)
  - Inicie seu aplicativo React com o npm start na linha de comando e confira no navegador.
    - Saia do comando na linha de comando pressionando Control + C.

- Execute o script de teste do npm.

- Execute o npm run build script e verifique se uma pasta build/ foi adicionada ao seu projeto (você pode removê-la depois). Note que a pasta build pode ser usada mais tarde para implantar sua aplicação.(https://www.robinwieruch.de/deploy-applications-digital-ocean)

- Toda vez que alterarmos algo em nosso código durante a experiência de aprendizado, certifique-se de verificar a saída em seu navegador para obter feedback visual.
*/

/*
- Conheça o Componente React

Nosso primeiro componente React está no arquivo src/App.js, que deve ser parecido com o exemplo abaixo. O arquivo pode diferir um pouco, porque o create-react-app às vezes atualiza a estrutura do componente padrão.
*/

import React from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App

//Este arquivo será nosso foco ao longo deste tutorial, a menos que especificado de outra forma. Vamos começar reduzindo o componente para uma versão mais leve para que você possa começar sem muito código de boilerplate do create-react-app.

import React from 'react'

function App () {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

/*
Primeiro, este componente React, chamado componente App, é apenas uma função JavaScript. É comumente chamado de componente função, pois existem outras variações de componentes React (ver tipos de componentes mais adiante). Segundo, o componente App ainda não recebe nenhum parâmetro em sua assinatura de função (veja as props mais tarde). E terceiro, o componente App retorna código que se assemelha ao HTML que é chamado JSX (veja JSX mais tarde).

O componente de função possui detalhes de implementação como qualquer outra função JavaScript. Você verá isso na prática em ação durante toda a sua jornada React:


*/

import React from 'react'

function App () {
  //faz algo
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

//Variáveis definidas no corpo da função serão redefinidas cada vez que esta função for executada, como todas as funções JavaScript:

import React from 'react'

function App () {
  const title = "React"
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

//Como não precisamos de nada dentro do componente App usado para esta variável -- por exemplo, parâmetros provenientes da assinatura da função -- podemos definir a variável fora do componente App também:

import React from 'react'
const title = "React"

function App () {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

//Vamos utilizar a variável na próxima seção;

/*
- Exercícios:

- Confirme seu código fonte para a última seção.(https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/hs/Meet-the-React-Component)

- Se você não tem certeza de quando usar const, let ou var em JavaScript (ou React) para declarações de variáveis, não deixe de ler mais sobre suas diferenças.
- Leia mais sobre a const.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- Leia mais sobre let.(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- Pense em maneiras de exibir a variável de título no HTML retornado do seu componente App. Na próxima seção, vamos colocar esta variável para usar.
*/

/*
- React JSX

Lembrando que mencionei que a saída retornada do componente App se assemelha ao HTML. Esta saída é chamada JSX, que mistura HTML e JavaScript. Vamos ver como isso funciona para exibir a variável:
*/

import React from 'react'

const title = "React"

function App () {
  return (
    <div>
      <h1>Hello {title}!</h1> {/* Hello React! */}
    </div>
  );
}

export default App;

/*
Inicie sua aplicação com npm start novamente, e procure pela variável renderizada no browser, que deve ser lida: "Olá React".

Vamos focar no HTML, que é expresso quase da mesma forma no JSX. Um input com label pode ser definido da seguinte forma:
*/

import React from 'react'

const title = 'React'

function App () {
  return (
    <div>
      <h1>Hello {title}!</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

/*

Especificamos aqui três atributos HTML: htmlFor, id, e type. Onde id e type devem ser familiares a partir do HTML nativo, htmlFor pode ser novo. O htmlFor reflete o atributo 'for' em HTML. JSX substitui um punhado de atributos HTML internos, mas você pode encontrar todos os atributos HTML suportados na documentação do React, que seguem a convenção de nomenclatura camelCase. Espere encontrar mais atributos específicos do JSX como className e onClick ao invés de class e onclick, conforme você aprender mais sobre o React.

Mais tarde revisaremos o input field HTML para detalhes de implementação; por enquanto, vamos voltar ao JavaScript no JSX. Definimos uma string primitiva para ser exibida no componente App, e o mesmo pode ser feito com um objeto JavaScript:

*/
/*
import React from 'react'

const welcome = {
  greeting: 'Hello',
  title: 'React',
}

function App () {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
    </div>
  );
}

export default App;
*/

//Lembre-se, tudo em JSX entre chaves {} pode ser tratado como expressões javascript

import React from 'react'

function getTitle (title) {
  return title
}

function App () {
  return (
    <div>
      <h1>Hello {getTitle('React')}!</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;

/*
O JSX foi inicialmente inventado para React, mas tornou-se útil para outras bibliotecas e estruturas modernas após ter ganho popularidade. É uma das minhas coisas favoritas sobre o React. Sem nenhuma sintaxe extra de templates (com exceção das chaves), agora podemos usar JavaScript em HTML.


- Exercícios:

- Confirme seu código fonte para a última seção.

- Confirme as alterações da última seção.

- Leia mais sobre o JSX do React.

- Defina tipos de dados JavaScript mais primitivos e complexos e renderize-os no JSX.

- Tente renderizar um array JavaScript no JSX. Se for muito complicado, não se preocupe, pois você vai aprender mais sobre isso na próxima seção.

*/

/*
- Listas em React

Até o momento já renderizamos algumas variáveis primitivas no JSX; em seguida vamos renderizar uma lista de itens. Primeiro vamos experimentar com os dados da amostra, depois vamos aplicar isso para buscar dados de uma API remota. Primeiro, vamos definir o array como uma variável. Como antes, podemos definir uma variável fora ou dentro do componente. O seguinte a define fora:

*/

import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App () {
  return (
    ...
  );
}

export default App;

/*
Eu usei um ... aqui como um espaço reservado, para manter meu código pequeno (sem detalhes de implementação do componente App) e focado nas partes essenciais (a variável de lista fora do componente App). Eu vou usar o ... ao longo do resto desta experiência de aprendizagem como placeholder para blocos de código que eu tenho estabelecido exercícios anteriores. Se você se perder, você pode sempre verificar seu código usando os links CodeSandbox que eu forneço no final da maioria das seções.

Cada item da lista tem um título, uma url, um autor, um identificador (objectID), pontos -- que indicam a popularidade de um item -- e uma contagem de comentários. A seguir, vamos renderizar a lista dentro do nosso JSX dinamicamente:
*/

function App () {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      
      <hr />

      {/*Renderize a lista aqui*/}
    </div>
  );
}

//Você pode usar o método embutido de map JavaScript para arrays para iterar sobre cada item da lista e retornar uma nova versão de cada um:

const numbers = [1, 2, 4 ,5, 9]

const newNumbers = numbers.map(number => {
  return number * 2
})

console.log(newNumbers)
//output: [2, 4, 8, 10, 18]

//Não vamos mapear de um tipo de dados JavaScript para outro no nosso caso. Em vez disso, devolvemos um fragmento JSX que renderiza cada item da lista:
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App () {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      {list.map(item => {
        return <div>{item.title}</div>
      })} 
    </div>
  );
}

/*
Na verdade, um dos meus primeiros momentos "Aha" em React foi usar JavaScript puro para mapear uma lista de objectos JavaScript para elementos HTML sem qualquer outra sintaxe de templates HTML. É apenas JavaScript em HTML.

React irá exibir cada item agora, mas você ainda pode melhorar seu código para que o React lide com listas dinâmicas avançadas de forma mais graciosa. Ao atribuir um atributo key ao elemento de cada item da lista, o React pode identificar itens modificados se a lista mudar (por exemplo, reordenação). Felizmente, os itens da nossa lista vêm com um identificador:
*/

function App () {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      {list.map(item => {
        return (
          <div key={item.objectID}>
            {item.title}
          </div>
        ) 
      })}
    </div>
  );
}

//Evitamos utilizar o índice do item no array para garantir que o atributo chave seja um identificador estável. Se a lista alterar a sua ordem, por exemplo, a React não será capaz de identificar os itens correctamente:

// não faça isso!
{list.map(function(item, index) {
  return (
    <div key={index}>
      ...
    </div>
  );
})}

function App () {
  return (
    <div>
      <h1>My Hacker stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {list.map(item => {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )
      })}
    </div>
  );
}

/*
A função do map está concisamente delineada no seu JSX. Dentro da função de map, temos acesso a cada item e às suas propriedades. A propriedade url de cada item é utilizada como atributo href dinâmico para a etiqueta de âncora. Não só o JavaScript no JSX pode ser utilizado para exibir itens, mas também para atribuir atributos HTML de forma dinâmica.

- Exercícios:

- Confirme o seu código fonte para a última secção.

- Confirme as alterações da última seção.

- Leia mais sobre porque o atributo key do React é necessário (0, 1, 2). Não se preocupe se você ainda não entendeu a implementação, apenas concentre-se no problema que ela causa para as listas dinâmicas.

- Recapitule os métodos de array padrão incorporados -- especialmente map, filter e reduce -- que estão disponíveis em JavaScript nativo.

- O que acontece se o seu retorno for nulo em vez do JSX?

- Amplie a lista com mais alguns itens para tornar o exemplo mais realista.

- Pratique usando diferentes expressões JavaScript no JSX.
*/

//#########################################################

/*

- Conheça outro componente da React

Até agora só temos usado o componente App para criar nossas aplicações. Nós usamos o componente App na última seção para expressar tudo o que é necessário para renderizar nossa lista em JSX, e ele deve escalar de acordo com suas necessidades e eventualmente lidar com tarefas mais complexas. Para ajudar nisso, vamos dividir algumas de suas responsabilidades em um componente de lista:

*/

function List () {
  return list.map(function(item) {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
}

//Opcional: Se este componente parecer estranho, porque a parte mais externa do JSX retornado começa com JavaScript. Poderíamos usá-lo com um elemento HTML envolvente também, mas vamos continuar com a versão anterior.

function List() {
  return (
    <div>
      {list.map(function(item) {
        return (... );
      })}
    </div>
  );
}

//Agora o novo componente Listar pode ser usado no componente App:

function App () {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
      <List />
    </div>
  );
}

