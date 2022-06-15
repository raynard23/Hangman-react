import React from "react";
import { useState } from "react";
import GuessChecker from "./GuessChecker";
const Search = ({
  randomString,
  setLetterGuess,
  letterGuess,
  showMaskedWord,
  count,
  hiddenRandomString,
  setCount,
}) => {
  const guessCheck = (e) => {
    e.preventDefault();
    showMaskedWord();
    console.log(count);
    setCount(count - 1);
  };

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
