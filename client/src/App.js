import React, { Component } from 'react';
import AppHeadBar from './components/AppHeadbar'
import Resume from './components/Resume'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeadBar/>
        <Resume/>
      </div>
    );
  }
}

export default App;
