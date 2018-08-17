import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props);
    if (!props.children) window.location = '/login';
  }

  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

export default App;
