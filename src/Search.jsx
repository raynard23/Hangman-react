
import React from "react";
import { useState } from "react";
const Search = ({randomString}) => {
    const [letterGuess, setLetterGuess] = useState('')

    let testArray = ['lazy', 'chaney', 'chase']
  console.log(randomString)
    const onSubmit = (e,{randomString}) => {
         e.preventDefault()
         
         if (randomString.includes(letterGuess)){
             console.log(randomString)
         }else{
             alert('tryAgain')
         }
       
        
        setLetterGuess('')
    }
  
return (

    <div>
        
        <input 
            type='search'
            className="search-bar "
            onChange={(e) => setLetterGuess(e.target.value)}
            placeholder="press a letter test your skil"

        />
     <button 
     onClick={onSubmit}
     > Click </button>
</div> 
)
}
export default Search