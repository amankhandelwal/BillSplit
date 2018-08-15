import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header>Bill Split</Header>
        <div className="content">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
