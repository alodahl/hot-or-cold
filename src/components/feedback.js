import React from 'react';

export default function Feedback(props) {
  let textColor;
  let winner = "";
  if (props.response === "You got it!") {
    winner = "rainbow";
  } else if (props.response === "HOT") {
    textColor = "Red";
  } else if (props.response === "Warm") {
    textColor = "Orange";
  } else if (props.response === "Cold") {
    textColor = "Teal";
  } else {
    textColor = "DodgerBlue";
  }
  let color = {color: textColor};

  return (
  <div>
    <h2 className={winner} style={color}>{props.response}</h2>
    <p className="user-guesses">Guesses: {props.guesses.join(", ")}</p>
  </div>
  )
}
