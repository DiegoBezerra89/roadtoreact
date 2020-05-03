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