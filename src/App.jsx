import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  count(a, b) {
    console.log(a + b);
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title title="Welcome to React" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={() => this.count(1, 2)}>Awesome button</button>
        </p>
      </div>
    );
  }
}

export default App;

export const Title = props => <h1 className="App-title">{props.title}</h1>;
