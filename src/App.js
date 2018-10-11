import React, { Component } from 'react';
import characters from "./components/characters";
import header from "./components/header";
import wrapper from "./components/wrapper";
import navbar from "./components/navbar";
import cards from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    cards,
    clickedCards:[],
    score: 0,
    highscore: 0
  };

  clicked = id => {
    let clickedCards = this.state.clickedCards;
    let score = this.state.score;
    let highscore = this.state.highscore;
    if (clickedCards.index0f(id) === -1) {
      clickedCards.push(id);
      this.setState({ score: this.state.score +1});
      this.state.cards.sort(() => Math.random() - 0.5)
      return;
    }

    else if (this.state.score === 12) {
      alert("You Win!")
      this.setState({ clickedCards: [], score: 0});
      return;
    }

    else {
      this.setState({ score: 0,clickedCards: [], status: "Sorry try again."});
    }

    if (score > highscore) {
      this.setState ({
        highscore: score
      })
    }

    return;
  }
  
  
  render() {
    return (
      <div>
        <navbar score = {this.state.score} highscore = {this.state.highscore} />
        <header />
        <wrapper>
          {this.state.cards.map(character => (
            <characters
            key = {character.id}
            id = {character.id}
            name = {character.name}
            image = {character.image}
            clicked = {this.clicked} />
          ))}
          </wrapper>
      </div>
    );
  }
}

export default App;
