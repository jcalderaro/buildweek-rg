/* React Parts 

import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Contacts from './components/Smurfs';
import Navbar from './components/SmurfNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={SmurfForm} />
        <Route
          path='/smurfs'
          render={props => <Contacts {...props} />}
        />
      </div>
    );
  }
}

export default App;

*/ 