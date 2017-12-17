import React from 'react';
import {connect} from 'react-redux';
import Form from './form';
import Feedback from './feedback';
import Header from './header';

import {setRandomNumber, addGuessToList, clearGuessesList, setCurrentGuess} from '../actions';

export class Game extends React.Component {
  setRandomNumber(num) {
    this.props.dispatch(setRandomNumber(num));
  }

  addGuessToList(num) {
      this.props.dispatch(addGuessToList(num));
  }

  clearGuessesList() {
      this.props.dispatch(clearGuessesList());
  }

  setCurrentGuess(num) {
      this.props.dispatch(setCurrentGuess(num));
  }

  handleChange(event) {
    this.setCurrentGuess(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.addGuessToList(this.props.currentGuess);
    console.log(this.props.currentGuess);
    this.setCurrentGuess("");
  }

  handleNewGameButton() {
    this.setRandomNumber();
    this.clearGuessesList();
    this.setCurrentGuess("")
  }

  response() {
    const latestGuess = this.props.guesses[this.props.guesses.length - 1];
    const randomNumber = this.props.randomNumber;

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
          <Form onSubmit={e => this.handleSubmit(e)} onChange={e => this.handleChange(e)} value={this.props.currentGuess}/>
          <Feedback response={this.response()} guesses={this.props.guesses}/>
          <button onClick={() => this.handleNewGameButton()}>New Game</button>
      </div>
      )

  }
}

const mapStateToProps = state => ({
  randomNumber: state.randomNumber,
  guesses: state.guesses,
  currentGuess: state.currentGuess //this.props.value ? this.props.value : state.currentGuess || ""
});

export default connect(mapStateToProps)(Game);
