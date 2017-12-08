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
      latestGuess: " "
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({latestGuess: event.target.value});
        console.log("Latest Guess: " + this.state.latestGuess)
        this.setState({guesses: [...this.state.guesses, this.state.latestGuess]});
    }

  response() {
    const latestGuess = this.state.latestGuess;
    const randomNumber = this.state.randomNumber;
    console.log(randomNumber);
    console.log(latestGuess);
    if (latestGuess === randomNumber) {
      return ("You got it!");
    } else if (latestGuess <= (randomNumber+9) && latestGuess >= (randomNumber-9)) {
      return ("HOT");
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
          <Form onSubmit={this.handleSubmit}/>
          <Feedback response={this.response()} guesses={this.state.guesses}/>
      </div>
      )

  }
}
