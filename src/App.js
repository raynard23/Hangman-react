import "./App.css";
import React from "react";
import Search from "./Search";
import { useEffect, useState } from "react";
// import GuessLines from "./GuessLines";
import GuessChecker from "./GuessChecker";
import ShowGuess from "./ShowGuess";
import "bulma/css/bulma.min.css";
import { index } from "cheerio/lib/api/traversing";
import Results from "./Results";
import LocalStorage from "./LocalStorage";

function App() {
  // could i set the category as state so when someone clicks the page the data changes in an array?
  let testArray = [
    {
      category: "Football team",
      guess: "raiders",
    },
  ];
  const [result, setResult] = useState();
  const [count, setCount] = useState(8);

  const [randomString, setRandomstring] = useState(
    testArray[Math.floor(Math.random() * testArray.length)]
  );
  const [letterGuess, setLetterGuess] = useState("");
  const [maskedWord, setMaskedWord] = useState(
    randomString.guess.split("").map((el) => " _")
  );
  const isWinner = maskedWord.join("") === randomString.guess;
  const isLoser = count === 0 && !isWinner;
  let localStore = JSON.parse(localStorage.getItem("letterGuess")) || [];
  const [hiddenRandomString, setHiddenRandomString] = useState([]);

  const showMaskedWord = () => {
    const newWord = [...maskedWord];
    randomString.guess.split("").forEach((letter, index) => {
      if (letter === letterGuess) {
        newWord[index] = letter;
      }
      console.log(letterGuess);
    });
    setMaskedWord(newWord);
  };
  console.log(letterGuess);
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
          localStore={localStore}
          setResult={setResult}
          maskedWord={maskedWord}
        />
        <div className="masked">{maskedWord}</div>
        {/* {<ShowGuess randomString={randomString} letterGuess = {letterGuess} />} */}
        {/* {randomString && <GuessLines randomString = {randomString}/>} */}
        <GuessChecker count={count} />
        <LocalStorage letterGuess={letterGuess} localStore={localStore} />
        {(isWinner || isLoser) && <Results isWinner={isWinner} />}
      </div>
    </div>
  );
}

export default App;
