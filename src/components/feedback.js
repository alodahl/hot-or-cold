import React from 'react';

export default function Feedback(props) {
  let textColor;
  let winner = "";
  let response = "";
  const latestGuess = props.guesses ? props.guesses[props.guesses.length - 1] : "";
  const difference =  Math.abs(latestGuess - props.randomNumber)

  if (!latestGuess) {
    response = "";
  }
  else if (difference===0 ) {
    winner = "rainbow";
    response = "You got it!";
  }
  else if (difference<=3) {
    textColor = "Red";
    response = "HOT";
  }
  else if (difference <=9 ) {
    textColor = "Magenta";
    response = "Very warm";
  }
  else if (difference <=19) {
    textColor = "Orange";
    response = "Warm";
  }
  else if (difference <=29) {
    textColor = "Teal";
    response = "Cold";
  }
  else {
    textColor = "DodgerBlue";
    response = "Very Cold";
  }
  let color = {color: textColor};

  return (
    <div>
      <h2 className={winner} style={color}>{ response }</h2>
      <p className="user-guesses">Guesses: {props.guesses ? props.guesses.join(", ") : ""}</p>
    </div>
  )
}
