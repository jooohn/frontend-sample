// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fail = () => {
  if (Math.random() > 0.5) {
    throw new Error("test failure 1");
  } else {
    throw new Error("test failure 2");
  }
};

const Button = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >Push me</button>
)

type Props = {
};
class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button onClick={fail}/>
        </p>
      </div>
    );
  }
}

export default App;
