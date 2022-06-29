import React from "react";
import { useState } from "react";
import GuessChecker from "./GuessChecker";
const Search = ({
  setLetterGuess,
  letterGuess,
  showMaskedWord,
  count,
  setCount,
  setResult,
  randomString,
  maskedWord,
}) => {
  // const [letter, setLetter] = useState("");
  const guessCheck = (e) => {
    e.preventDefault();
    //  setLetterGuess(letter);
    showMaskedWord();
    setCount(count - 1);
  };
  // setLetterGuess("r");s
  return (
    <div>
      <input
        type="search"
        className="search-bar "
        onChange={(e) => setLetterGuess(e.target.value.toLowerCase())}
        placeholder="press a letter test your skil"
      />
      <button onClick={guessCheck}>Guess </button>
    </div>
  );
};
export default Search;
