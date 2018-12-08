import React, { Component } from 'react';
import './App.css';

// Screens 
import Home from './screens/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

export default App;
