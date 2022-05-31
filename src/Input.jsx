import React from "react";
import { useState } from "react";
// actually do i even need a input, could i just have an alphabet?

const Input = () => {
    const [letter , setLetter] = useState('')
let arr = ['same']


//compare each input letter to the array letter
// seperate each item in the string 
// then compare each of the items to the letter 
// return true or false 
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