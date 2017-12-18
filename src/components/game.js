import React from 'react';
import {connect} from 'react-redux';
import Form from './form';
import Feedback from './feedback';
import Header from './header';
import {newGame, addGuessToList, setCurrentGuess} from '../actions';

export class Game extends React.Component {
  addGuessToList(num) {
      this.props.dispatch(addGuessToList(num));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addGuessToList(this.props.currentGuess);
  }

  handleNewGameButton() {
    this.props.dispatch(newGame());
  }

  render () {
    return (
      <div>
          <Header />
          <Form onSubmit={e => this.handleSubmit(e)}
                onChange={event => this.props.dispatch(setCurrentGuess(event.target.value))}
                value={this.props.currentGuess}
          />
        <Feedback randomNumber={this.props.randomNumber} guesses={this.props.guesses}/>
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
