

/*
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  }
  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
    console.log('clicou')
  }

  render() {
    return (
      <div>
        <Amount 
          amount={this.state.amount}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />

        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
        <Real amount={this.state.amount} />
      </div>
    );
  }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>
const Real = ({ amount }) => <p>Real: {amount * 5.86}</p>

const Amount = ({ amount, onIncrement, onDecrement }) => (
  <div>
    <span>US: Dollar: {amount} </span>
    <button type="button" onClick={onIncrement}>
      +
    </button>
    <button type="button" onClick={onDecrement}>
      -
    </button>
  </div>
);
*/

/*const App = (amount) => (
  <Amount 
    teste1={amount => (
      <div>
        <Euro amount={amount} />
        <Pound amount={amount} />
        <Real amount={amount} />
      </div>
    )}
    teste2={amount => (
      <div>
        <Yene amount={amount} />
      </div>
    )}
  />
);

class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  }
  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  }

  render() {
    return(
      <div>
        <h1>My Currency Converter</h1>
        <span style={{marginRight: '20px'}}>US: Dollar {this.state.amount}</span>
        <button style={{marginRight: '5px'}} type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <hr/>
        {this.props.teste1(this.state.amount)}
        {this.props.teste2(this.state.amount)}
      </div>
    )
  }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>
const Real = ({ amount }) => <p>Real: {amount * 5.86}</p>
const Yene = ({ amount }) => <p>Yene: {amount * 1200}</p>

export default App;
*/

import React, { Component } from 'react';

const App = () => (
  <div>
    <h1>US Dollar to Euro</h1>
    <Amount>
      {amount => <Euro amount={amount} />}
    </Amount> 
    <h1>US Dollar to Pound</h1>
    <Amount>
      {amount => <Pound amount={amount} />}
    </Amount>
    <h1>US Dollar ro Real</h1>
    <Amount>
      {amount => <Real amount={amount} />}
    </Amount>
  </div>
)

class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    }
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  }
  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  }

  render() {
    return (
      <div>
        <button style={{margin: '10px'}}type="button" onClick={this.onDecrement}>
          -
        </button>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <p>US Dollar: {this.state.amount}</p>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({amount}) => <p>Pound: {amount * 0.76}</p>;
const Real = ({amount}) => <p>Real: {amount * 5.86}</p>;

export default App;