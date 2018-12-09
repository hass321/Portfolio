import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Screens 
import Home from './screens/Home/Home';

// AppRouter
import AppRouter from './AppRouter/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRouter />
      </div>
    );
  }
}

export default App;
