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

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // setRandomNumber(num) {
  //       this.setState({
  //         randomNumber: num,
  //       });
  //   }
  //
  // setGuesses(num) {
  //     this.setState({
  //         guesses: [num]
  //     });
  // }
  //
  // setCurrentGuess(num) {
  //     this.setState({
  //         currentGuess: num
  //     });
  // }

  handleChange(event) {
    // this.setState({currentGuess: event.target.value});
    this.setCurrentGuess(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    // this.setState({guesses: [...this.state.guesses, this.state.currentGuess]});
    // this.setState({currentGuess: ""});
    this.addGuessToList(this.props.currentGuess);
    this.setCurrentGuess("");
  }

  handleNewGameButton() {
    // this.setState({
    //       randomNumber: Math.floor(Math.random()*100) + 1,
    //       guesses: [],
    //       currentGuess: ""
    // })
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
          <Form onSubmit={() => this.handleSubmit()} onChange={(e) => this.handleChange(e)} value={this.props.currentGuess}/>
          <Feedback response={this.response()} guesses={this.props.guesses}/>
          <button onClick={() => this.handleNewGameButton()}>New Game</button>
      </div>
      )

  }
}

const mapStateToProps = state => ({
  randomNumber: state.randomNumber,
  guesses: state.guesses,
  currentGuess: "" //this.props.value ? this.props.value : state.currentGuess || ""
});

export default connect(mapStateToProps)(Game);
