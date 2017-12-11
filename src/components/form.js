import React from 'react';

export default class Form extends React.Component {

  render() {
    return (
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="guess-input">Guess a number between 1 and 100:</label>
          <input onChange={this.props.onChange} value={this.props.value} name="guess-input" placeholder="99"/>
        </form>
    );
  }
}
