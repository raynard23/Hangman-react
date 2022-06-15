import React from "react";
import { useState } from "react";

const ShowGuess = ({ letterGuess, randomString }) => {
  const [hiddenRandomString, setHiddenRandomString] = useState([]);
  // setting this hidden to a state so it changes when the letter changes

  const maskedWord = randomString.guess
    .split("")
    .map((letter) => (hiddenRandomString.includes(letter) ? letter : "_"))
    .join(" ");
  // masked word takes random string splits it to make it an array
  // i am mapping over the new array to check if the hidden has the letter, if not adds the -

  randomString.guess.split("").forEach((el, index) => {
    if (el === letterGuess) {
      console.log((hiddenRandomString[index] = el), index);
      // here i am running a for each on the array of randomg string eles, grabbing the index
      // then
    }
  });

  return <span>{maskedWord}</span>;
};

export default ShowGuess;
