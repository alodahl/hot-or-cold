import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("New Guess: " + this.state.value);
  };

  render() {
    return (
        <form onSubmit={this.props.onChange}>
          <label htmlFor="guess-input">Guess a number between 1 and 100:</label>
          <input onChange={this.handleChange} value={this.state.value} name="guess-input" placeholder="99"/>
        </form>
    );
  }
}
