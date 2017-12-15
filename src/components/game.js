import React from 'react';
import Form from './form';
import Feedback from './feedback';
import Header from './header';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const newNum = Math.floor(Math.random()*100) + 1;
    this.state = {
      randomNumber: newNum,
      guesses: [],
      currentGuess: props.value ? props.value : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setRandomNumber(num) {
        this.setState({
          randomNumber: num,
        });
    }

  setGuesses(num) {
      this.setState({
          guesses: [num]
      });
  }

  setCurrentGuess(num) {
      this.setState({
          currentGuess: num
      });
  }

  handleChange(event) {
    this.setState({currentGuess: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({guesses: [...this.state.guesses, this.state.currentGuess]});
    this.setState({currentGuess: ""});
  }

  handleNewGameButton() {
    this.setState({
          randomNumber: Math.floor(Math.random()*100) + 1,
          guesses: [],
          currentGuess: ""
    })
  }

  response() {
    const latestGuess = this.state.guesses[this.state.guesses.length - 1];
    const randomNumber = this.state.randomNumber;

    if (!latestGuess) {
      return ("");
    } else if (Number(latestGuess) === randomNumber) {
      return ("You got it!");
    } else if (latestGuess <= (randomNumber+3) && latestGuess >= (randomNumber-3)) {
      return ("HOT");
    } else if (latestGuess <= (randomNumber+9) && latestGuess >= (randomNumber-9)) {
      return ("Very warm");
    } else if (latestGuess <= (randomNumber+19) && latestGuess >= (randomNumber-19)) {
      return ("Warm");
    } else if (latestGuess <= (randomNumber+29) && latestGuess >= (randomNumber-29)) {
      return ("Cold");
    } else {
      return ("Very Cold");
    }
  }

  render () {
    return (
      <div>
          <Header />
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.currentGuess}/>
          <Feedback response={this.response()} guesses={this.state.guesses}/>
          <button onClick={() => this.handleNewGameButton()}>New Game</button>
      </div>
      )

  }
}
