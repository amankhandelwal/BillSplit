import React, { Component } from 'react';
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
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
