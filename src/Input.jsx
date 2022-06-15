import React from "react";
import { useState } from "react";


const Input = (localStore) => {
    const [letter , setLetter] = useState('')



 



const letterFinder = (e) =>{
 
     setLetter(e.target.value)   

}

console.log('here',letter)
    return (
   
<div>
<input type="text" onChange={letterFinder}/>
</div>

)
}

export default Input 