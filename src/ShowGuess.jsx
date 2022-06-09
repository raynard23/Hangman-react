
import { compareDocumentPosition } from "domutils";
import React from "react";
import { useState } from "react";


const ShowGuess = ({ letterGuess, randomString }) => {
    const [hiddenRandomString, setHiddenRandomString] = useState([])
    const maskedWord = randomString.split('').map(letter =>
        hiddenRandomString.includes(letter) ? letter : "_").join(" ");

    randomString.split('').forEach((el, index) => {
        if (el === letterGuess) {
             console.log(hiddenRandomString[index] = el, index)
        }
    })






    let regex = new RegExp(`${letterGuess}`)




    return (
        <span >{maskedWord}</span>
    )
}

export default ShowGuess