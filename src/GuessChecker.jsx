import React from "react"
import { useState } from "react"
import Search from "./Search"


const GuessChecker = ({randomString, letterGuess}) => {
    // const [keepWord,setKeepWord] =useState(false)
   const [count,setCount] = useState(3)
  
    const guessCheck = (e) => {
        // if(letterGuess)
        e.preventDefault()
    if(randomString.includes(letterGuess)){
       
       
     }else {
      setCount( count - 1)
        alert(`guess again you have ${count } tries`)
       
        // console.log('letter',count)
        // console.log(randomString)
    } 
    
}
 


 return(
     <div>
         <button onClick={guessCheck}>Click here </button>
         <span>{count} Tries Left</span>

     </div>
 )
}



export default GuessChecker