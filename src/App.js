import "./App.css";
import React from "react";
import Search from "./Search";
import { useEffect, useState } from "react";
import GuessLines from "./GuessLines";
import GuessChecker from "./GuessChecker";
import ShowGuess from "./ShowGuess";
import "bulma/css/bulma.min.css";
import { index } from "cheerio/lib/api/traversing";
import Results from "./Results";
// import ShowLetterGuess from './ShowLetterGuess';

function App() {
  // could i set the category as state so when someone clicks the page the data changes in an array?
  let testArray = [
    {
      category: "Football team",
      guess: "raiders",
    },
  ];

  const [count, setCount] = useState(8);
  const [randomString, setRandomstring] = useState(
    testArray[Math.floor(Math.random() * testArray.length)]
  );

  const [letterGuess, setLetterGuess] = useState("");

  const [maskedWord, setMaskedWord] = useState(
    randomString.guess.split("").map((el) => " _")
  );

  let localStore = JSON.parse(localStorage.getItem("letterGuess")) || [];

  const [hiddenRandomString, setHiddenRandomString] = useState([]);

  const showMaskedWord = () => {
    // loop over random word
    // if that ele = letterguess
    // place the letter at the same indxe as masked word

    const newWord = [...maskedWord];

    // spread operator in an array?
    //how does this work, what exactly is happening.

    randomString.guess.split("").forEach((letter, index) => {
      if (letter === letterGuess) {
        newWord[index] = letter;
      }
    });
    // console.log(randomString.guess.split(""));

    setMaskedWord(newWord);
  };

  return (
    <div className="container ">
      <div className="is-primary">
        <h1> Hang Person</h1>
        <h4>Category:{randomString.category} </h4>

        <Search
          randomString={randomString}
          setLetterGuess={setLetterGuess}
          letterGuess={letterGuess}
          showMaskedWord={showMaskedWord}
          setCount={setCount}
          count={count}
        />
        <div className="masked">{maskedWord}</div>
        {/* {<ShowGuess randomString={randomString} letterGuess = {letterGuess} />} */}
        {/* {randomString && <GuessLines randomString = {randomString}/>} */}
        <GuessChecker count={count} />

        {/* {<Results maskedWord={maskedWord} randomString={randomString} />} */}
      </div>
    </div>
  );
}

export default App;
