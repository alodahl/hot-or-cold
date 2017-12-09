import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  //   console.log("New Guess: " + event.target.value);
  // };

  render() {
    return (
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="guess-input">Guess a number between 1 and 100:</label>
          <input onChange={this.props.onChange} value={this.props.latestGuess} name="guess-input" placeholder="99"/>
        </form>
    );
  }
}
