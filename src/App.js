
import './App.css';
import React, { Component } from 'react';


import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';


export class App extends Component {

  render() {
    return (
      <div className="app">

          <div className="container">
            <Score />
            <Solution />
            <Letters />
          </div>


      </div>
    )
  }
}

export default App;
