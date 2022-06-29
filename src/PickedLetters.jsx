import React from "react";
import { useState } from "react";

const PickedLetters = ({ letterGuess }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  if (!guessedLetters.includes(letterGuess)) {
    setGuessedLetters(letterGuess + " " + guessedLetters);
  }

  return <div>{guessedLetters}</div>;
};

export default PickedLetters;
