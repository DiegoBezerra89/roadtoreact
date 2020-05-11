/*import React from 'react'
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
          Href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react'

function App () {
  //do something in between
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;


//Variáveis definidas no corpo da função serão redefinidas cada vez que esta função for executada, como todas as funções JavaScript:

import React from 'react'

function App () {
  const title = 'React'
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>I'm {title}!</h2>
    </div>
  );
}

export default App;*/

//Como não precisamos de nada dentro do componente App usado para esta variável -- por exemplo, parâmetros provenientes da assinatura da função -- podemos definir a variável fora do componente App também:

/*
import React from 'react'

const title = "React"
function nameOfTech(name) {
  return name
}
function App () {
  return (
    <div>
      <h1>Hello World!</h1>
  <h2>I'm {nameOfTech(title)}</h2>
    </div>
  );
}

export default App;
*/

/*
import React from 'react'

const title = 'React'

function App () {
  return (
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
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
      <h1>{welcome.greeting} {welcome.title}!</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
    </div>
  );
}
//Hello React!
export default App;


import React from 'react'

function getTitle(title) {
  return title
}

function App () {
  return (
    <div>
      <h1>Hello {getTitle('Javascript')}!</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;

- Exercícios:

- Confirme seu código fonte para a última seção.

- Confirme as alterações da última seção.

- Leia mais sobre o JSX do React.

- Defina tipos de dados JavaScript mais primitivos e complexos e renderize-os no JSX.

- Tente renderizar um array JavaScript no JSX. Se for muito complicado, não se preocupe, pois você vai aprender mais sobre isso na próxima seção.

*/
/*
import React from 'react'

const person = {
  name: 'Diego',
  age: '30',
  genre: 'Male',
  job: 'Developer',
}

const family = [
  {
    name: 'Diego',
    age: 30,
    genre: 'male',
  },
  {
    name: 'Renata',
    age: 23,
    genre: 'female',
  },
]

function fullName(person) {
  return `${person.name} is ${person.age} years old, ${person.genre}, and is a ${person.job}.`
}

function App () {
  return (
    <div>
      <h1>Infos:</h1>
      <ul>
        {family.map(name => (
          <li>{name.name} is a {name.genre} with {name.age} years old.</li>
        ))}
      </ul>
      <p>{fullName(person)}</p>
    </div>
  );
}

export default App;
*/


//#########################################################

/*import React from 'react'

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
    points: 8,
    objectID: 1,
  },
];

function App () {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      {list.map(item => {
        return (
          <div key={item.objectID}>
            <ul>
              <li><a href={item.url} target="_blank"><h3>{item.title}</h3></a></li>
              <li>Author: {item.author}</li>
              <li>Comments: {item.num_comments}</li>
              <li>Points: {item.points}</li>
            </ul> 
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
*/

/*
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
    points: 8,
    objectID: 1,
  },
];

function App () {
  return (
    <div>
      <Title content="My Hacker Stories"/>
      <Label index="search" content="Search: "/>
      <Input id="search" type="text" placeholder="Pesquisar" />
      <Hr />
      <List />
    </div>
  )
}

export default App;

function List () {
  return list.map(function(item) {
    return (
      <div key={item.objectID}>
        <ul>
          <ListItem inside={
            <Link link={item.url} content={item.title} 
            />}
          />
          <ListItem text="Author: " inside={item.author} />
          <ListItem text="Comments: " inside={item.num_comments} />
          <ListItem text="Points: " inside={item.points} />
        </ul>
        <Hr />
      </div>
    );
  });
}


- Exercícios

- Confirme seu código fonte para a última seção.

- Confirme as alterações da última seção.

- Desenhe seus componentes -- o componente App e o componente List -- como uma árvore de componentes em uma folha de papel. Estenda esta árvore de componentes com outros componentes possíveis (por exemplo, componente de Busca extraído para o input e label no componente App). Tente descobrir quais outras partes podem ser extraídas como componentes autônomos.
  - App
  --h1 = Title
  --label = Label
  --input = Search
  --hr = Hr

function Title ({content}) {
  return (
    <h1>{content}</h1>
  )
}

function Label (props) {
  return (
    <label htmlFor={props.index}>{props.content}</label>
  )
}

function Input (props) {
  return (
    <input id={props.id} type={props.type} placeholder={props.placeholder}></input>
  )
}

function Hr () {
  return <hr />
}


  -List
  --Unordered List = UnorderedList
  --list item = ListItem
  --hr = Hr

function ListItem (props) {
  return <li>{props.text}{props.inside}</li>
}

function Link (props) {
  return <a href={props.link} target="_blank">{props.content}</a>
}
*/
/*
- Se um componente de Busca for usado no componente App, o componente Busca seria um componente irmão, pai, ou filho para o componente Lista?
 - Filho

- Pergunte-se que problemas podem surgir se continuarmos tratando a variável lista como variável global. Cobriremos como lidar com esses problemas nas próximas seções.
  

*/

/*
class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName =  lastName
  }

  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const diego = new Developer('Diego', 'Bezerra')

console.log(diego.getName()) //Diego Bezerra
*/


//- Exercícios:

//- Familiarize-se com os termos definição de componente, instância de componente, e elemento.
//- definição:
/*
  class Car {
    constructor (name,brand, color, year, price) {
      this.name = name
      this.brand = brand
      this.color = color
      this.year = year
      this.price = price
    }

    getBrand () {
      return this.brand
    }
    getColor () {
      return this.color
    }
    getYear () {
      return this.year
    }
    getPrice () {
      return this.price
    }
    getCar() {
      return `This car is a ${this.brand} ${this.name}, ${this.color}, made on ${this.year}, and costs ${this.price}.`
    }
  }
 
//instância: 
const gol = new Car('Gol', 'Volkswagen', 'blue', 1998, '$8.300,00')

//elemento
console.log(gol)

*/
//- Experimente criando múltiplas instâncias de componentes de um componente List.

/*
import React from 'react'
import './App.css'
import Santos from './santos.png'
import Palmeiras from './palmeiras.png'
import Spfc from './spfc.png'
import Corinthians from './corinthians.png'

function App () {
  return (
    <div>
      <Title content="Times de SP"/>
      <ListaDeTimes />
    </div>
  )
}
export default App;

class Time {
  constructor(nome, fundacao, titulosNacionais, estadio, maiorIdolo, campeaoMundial, mundiais, site, image, id) {
    this.nome = nome
    this.fundacao = fundacao
    this.titulosNacionais = titulosNacionais
    this.estadio = estadio
    this.maiorIdolo = maiorIdolo
    this.campeaoMundial = campeaoMundial
    this.mundiais = mundiais
    this.site = site
    this.image = image
    this.id = id
  }

  temMundial() {
    const mundial = this.campeaoMundial
    return mundial ? `Tem sim, tem logo ${this.mundiais}!` : `Tem não mano, foda.`
  }
}

const palmeiras = new Time('Sociedade Esportiva Palmeiras', '26 de Agosto de 1914', 13, 'Allianz Parque', 'Ademir da Guia', false, 0, 'https://www.palmeiras.com.br', Palmeiras, 1)
const corinthians = new Time('Sport Club Corinthians Paulista', '2 de Setembro de 1910', 10, 'Itaquerão', 'Sócrates', true, 2, 'https://www.corinthians.com.br', Corinthians, 2)
const saoPaulo = new Time('São Paulo Futebol Clube', '25 de Janeiro de 1930', 6, 'Morumbi', 'Rogério Ceni', true, 3, 'https://www.spfc.net',Spfc, 3)
const santos = new Time('Santos Futebol Clube', '14 de Abril de 1912', 10, 'Vila Belmiro', 'Pelé', true, 2, 'https://www.santosfc.com.br',Santos, 4)

const times = [
  palmeiras,
  corinthians,
  saoPaulo,
  santos,
]

function ListaDeTimes () {
  return times.map(function(item) {
    return (
    <div key={item.id}>
      <ul>
        <Image src={item.image}/>
        <ListItem 
          text="Nome: " 
          inside={
            <Link 
              link={item.site}
              content={item.nome}
            />
          }
        />
        <ListItem text="Fundação: " inside={item.fundacao} />
        <ListItem text="Títulos Nacionais: " inside={item.titulosNacionais} />
        <ListItem text="Estádio: " inside={item.estadio} />
        <ListItem text="Maior ídolo: " inside={item.maiorIdolo} />
        <ListItem text="Tem Mundial: " inside={item.temMundial()} />
      </ul>
      <Hr />
    </div> 
  )});
}
*/
/*</div>
function ListItem (props) {
  return <li>{props.text}{props.inside}</li>
}
function Link (props) {
  return <a href={props.link} target="_blank">{props.content}</a>
}


*/
//- Pense em como pode ser possível dar a cada componente da Listar a sua própria lista.


import React, {Component} from 'react'

const App = () => {
  const stories = [
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
      points: 8,
      objectID: 1,
    },
  ];
  
  const handleChange = event => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Title content="My Hacker Stories"/>
      <Label index="search" content="Search: "/>
      <Input id="search" type="text" placeholder="Pesquisar" onChange={handleChange} />
      <Text test="test">
        <div>
          <h1>Teste título</h1>
          <Hr />
        </div>
        <Hr />
      </Text>
      <List list={stories}/>
    </div>
  )
}
export default App;

const Text = ({test, children}) => <p>{test}{children}</p>
const List = props => 
  props.list.map( item =>
  <div key={item.objectID}>
    <ul>
      <ListItem inside={
        <Link link={item.url} content={item.title} 
        />}
      />
      <ListItem text="Author: " inside={item.author} />
      <ListItem text="Comments: " inside={item.num_comments} />
      <ListItem text="Points: " inside={item.points} />
    </ul>
    <Hr />
  </div>
);



const Image = (props) => <img src={props.src}></img>

const Title = (props) => <h1>{props.content}</h1>

const Label = (props) => <label htmlFor={props.index}>{props.content}</label>

const Input = (props) => <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>

const Hr = (props) => <hr />

const ListItem = (props) => <li>{props.text}{props.inside}</li>

const Link = (props) => <a href={props.link} target="_blank">{props.content}</a>

/*
class App extends Component {
  render() {
    const greeting = {
      subject: 'React',
      description: 'Your component library for ...',
      test: 'test string',
    };
 
    return (
      <div>
        <Greeting {...greeting} />
      </div>
    );
  }
}

const Greeting = ({ subject, ...other }) => (
  <div>
    <Title title={`Welcome to ${subject}`} />
    <Description {...other} />
  </div>
);
 
const Title = ({ title }) => <h1>{title}</h1>;

const Description = ({ description, test }) => <p>{description}{test}</p>;
*/
