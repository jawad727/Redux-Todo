import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodos from './AddTodos'

class App extends Component {
  render() {
    return (
      <div className="App">
  
      <h2>Your Todo List</h2>
      <AddTodos />

      </div>
    );
  }
}

export default App;
