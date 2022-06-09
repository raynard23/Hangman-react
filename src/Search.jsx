
import React from "react";
import { useState } from "react";
import GuessChecker from "./GuessChecker";
const Search = ({randomString,setLetterGuess,letterGuess}) => {
 

  
    
  
return (

    <div>
        
        <input 
            type='search'
            className="search-bar "
            onChange={(e) => setLetterGuess(e.target.value)}
            placeholder="press a letter test your skil"

        />
      <GuessChecker letterGuess={letterGuess} randomString={randomString}/>
</div> 
)
}
export default Search