
import React from "react";
import { useState } from "react";


const ShowGuess = ({letterGuess,randomString}) => {
const[hiddenRandomString,setHiddenRandomString] = useState([randomString.replace(/[a-z]/g, ' -')])

let indexOfRandom = randomString.split('').map((el,index) =>{
        if(el === letterGuess ){
        console.log(hiddenRandomString[index]=el)
        }
    } ) 
    

let regex = new RegExp(`${letterGuess}`)



 
 return(
     <span >{hiddenRandomString}</span>
 )
}

export default ShowGuess