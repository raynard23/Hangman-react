
import React from "react";
import { useState } from "react";
const Search = () => {
    const [letterGuess, setLetterGuess] = useState('')

    console.log('here',letterGuess)

    const onSubmit = (e) => {
        e.preventDefault()
        alert('here')
        letterGuess('')
    }
  
return (

    <div>
        
        <input onSubmit={onSubmit}
            type='search'
            className="search-bar "
            onChange={(e) => setLetterGuess(e.target.value)}
            placeholder="press a letter test your skil"

        />
     
</div> 
)
}
export default Search