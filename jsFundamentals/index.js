import React, { Component, useLayoutEffect } from 'react';
import logo from'./logo.svg';
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

//classes js sem react
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
  getName() {
    return this.firstname + ' ' + this.lastname
  }
}

class ReactDeveloper extends Developer {
  getJob() {
    return 'React Developer'
  }
}

var me = new ReactDeveloper('Diego', 'Bezerra')
console.log(me.getName());
console.log(me.getJob());

//definindo um componente React de maneira correta
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter = 0
    }
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
  }
  onIncrement() {
    this.setState(state => ({ counter: state.counter + 1 })) 
  }
  onDecrement() {
    this.setState(state => ({ counter: state.counter - 1}))
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
          onCLick={this.onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    );
  }
}
//

class Counter extends Component {
  state = {
    counter: 0,
  }
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
        >
          Increment
        </button>
        <button
          onClick={this.onDecrement}
        >
          Decrement
        </button>
      </div>
    );
  }
}
//
import React from 'react';

const App = () => {
  var greeting = 'Welcome to React';
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

export default App;
//
import React from 'react';

const App = () => {
  var user = { name: 'Diego' };
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}
export default App;
//
import React from 'react'

const App = () => {
  var users = [
    {name: 'Diego'},
    {name: 'Renata'}
  ]
  return (
    <ul>
      {users.map(function (user) {
        return <li>{user.name}</li>
      })}
    </ul>
  )
}
export default App
//
import React from 'react';

const App = () => {
  var users = [
    {name: 'Diego'},
    {name: 'Renata'}
  ]
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  )
}
export default App


import React from 'react'

const App = () => {
  var users = [
    {name: 'Diego', isDeveloper: true},
    {name: 'Renata', isDeveloper: false}
  ]
  return (
    <ul>
      {users
        .filter(user => user.isDeveloper)
        .map(user => <li>{user.name}</li>)
      }
    </ul>
  )
}
export default App

import React from 'react'

const App = () => {
  const users = [
    {name:'Diego'},
    {name: 'Renata'}
  ]
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  )
}

export default App

import React from 'react'

const App = () => {
  const users = [
    {name:'Diego'},
    {name: 'Renata'}
  ]
  const showUsers = false
  if(!showUsers) {
    return null
  }
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  )
}
export default App
//

import React from 'react'

const App = () => {
  const users = [
    {name:'Diego'},
    {name: 'Renata'}
  ]
  const showUsers = false
  return(
    <div>
      {showUsers ? (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
export default App

import React from 'react'
const App = () => {
  const users = [
    { name: 'Diego'},
    { name: 'Renata'}
  ]
  const showUsers = false
  return(
    <div>
      {showUsers && (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default App
//

import React from 'react'
import logo from './logo.svg'
import './App.css'
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
  )
}

export default App;

// 


//file1.js
const firstname = 'Diego'
const lastname = 'Martins'
export { firstname, lastname }

import { firstname, lastname } from 'file1.js'

console.log(firtsname)
//output 'Diego'

import * as person from 'file1.js'

console.log(person.firstname, person.lastname)
//output 'Diego Martins'

//
import { firstname as username } from 'file1.js'

console.log(username)
//output: 'Diego'

const diego = {
  name: 'Diego',
  lastname: 'Martins',
}

export default diego
//

import developer from '.file1.js'
console.log(developer)
// neste caso pode-se importar com qualquer nome que vc quiser, pois foi feita uma exportação default

const firstname = 'Diego'
const lastname = 'Martins'
const person = {
  firstname,
  lastname,
}
export {
  firstname,
  lastname,
}
export default person
//

import React from 'react'

const App = () => {
  const users = [{ name: 'Robin'}, { name: 'Markus' }];
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

export default App

// Funçoes de ordem superior
const warrior = {
  hp: 100,
  strength: 20,
  attack: function(target) {
    return target.hp -= this.strength
  }
}

const enemy = {
  hp: 100,
  strength: 12,
  attack: function(target) {
    return target.hp -= this.strength
  }
}


console.log(warrior.attack(enemy))

//

import React, { useState } from 'react'

function doFilter(user) {
  return user.name.includes(query);
}

const App = () => {
  const users = [{name: 'Diego'}, {name: 'Renata'}];
  const [query, setQuery] = useState('')

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
  )
}

export default App

//

import React from 'react'

function doFilter(query) {
  return function(user) {
    return user.name.includes(query);
  };
}

const App = () => {
  const users = [{ name: 'Diego' }, { name: 'Renata' }]
  const [query, setQuery] = React.useState('')
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

//

const doFilter = query => user => 
  user.name.includes(query)

const userService = {
  getUserName: function (user) {
    return user.firstname + ' ' + user.lastname;
  },
};

const userService = {
  getUserName(user) {
    return user.firstname + ' ' + user.lastname;
  },
};

import React from 'react'

const Counter = () => {
  const [count, setCount] = React.setState(0);
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
