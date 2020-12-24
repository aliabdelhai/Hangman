
import './App.css';
import React, { Component } from 'react';


import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import EndGame from './components/EndGame';

let c =0;
export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "CALM", 
        hint: "Your ideal mood when coding"
      },
      score: 100,
      endGame: false,
      congrats: false
    }
  }
  
  selectLetter = (letter) => {
    let tempLetters = {...this.state.letterStatus}
    let letters = Object.keys(tempLetters)
    for(let l of letters) {
      if(l === letter) {
        tempLetters[l] = true;
      }
    }
    this.setState({
      letterStatus: tempLetters
    })
    let myWord = this.state.solution.word.split('')
    for(let w of myWord){
      if(w === letter){
        c++
      }
    }
    if(c === myWord.length){
      this.setState({
        congrats: true
      })
    }
    if(myWord.includes(letter))
    {
      this.setState({
        score: this.state.score + 5
      })
    }else{
      this.setState({
        score: this.state.score - 20
      })
    }
    if(this.state.score <= 0) {
      this.setState({
        endGame: true
      })
    }

  }


  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  restart = () => {
  }

  
  render() {
    return (
      <div className="app">

          <div className="container">
              {!this.state.endGame && !this.state.congrats ? <Score score={this.state.score}/> : <EndGame word={this.state.solution.word} endGame={this.state.endGame} congrats={this.state.congrats} restart={this.restart}/> }
              {!this.state.endGame && !this.state.congrats ? <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/> : ""}
              {!this.state.endGame && !this.state.congrats ? <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/> : ""}
          </div>


      </div>
    )
  }
}

export default App;
