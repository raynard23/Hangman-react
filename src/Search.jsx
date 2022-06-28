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
  const guessCheck = (e) => {
    e.preventDefault();
    showMaskedWord();
    setCount(count - 1);

    setLetterGuess(" ");
  };
  // console.log(maskedWord.join("") === randomString.guess);
  return (
    <div>
      <input
        type="search"
        className="search-bar "
        onChange={(e) => setLetterGuess(e.target.value)}
        placeholder="press a letter test your skil"
      />
      <button onClick={guessCheck}>Click here </button>
    </div>
  );
};
export default Search;
