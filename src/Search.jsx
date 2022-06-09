
import React from "react";
import { useState } from "react";
import GuessChecker from "./GuessChecker";
const Search = ({randomString,setLetterGuess,letterGuess}) => {
    // const [letterGuess, setLetterGuess] = useState('')

    // let testArray = [ 'chaneay']
  //so letterGuess is a state, on change when i set it i am changing the state. 
  //i am passing letterguess to gc  and comparing the letter to a random string 
  //if the guessed letter is in the string i am logging it, else alerting that u lost a point 
  //if i clear the input letter guess is empty so the game restarts / or the input changes 
  //fix on change 
  
    
  
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