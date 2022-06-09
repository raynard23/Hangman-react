import React from "react";
import { useState } from "react";


const Input = () => {
    const [letter , setLetter] = useState('')
let arr = ['same']


 
console.log('string',arr.toString().includes(letter))


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