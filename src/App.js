
import './App.css';
import React from 'react';
import Search from './Search'
 import { useEffect, useState } from 'react';
import GuessLines from './GuessLines';
import GuessChecker from './GuessChecker';
import ShowGuess from './ShowGuess'


function App() {
  // could i set the category as state so when someone clicks the page the data changes in an array?
  let testArray = [ 'broncos', 'chiefs' , 'raiders', 'chargers']
 
  const [randomString , setRandomstring ] = useState(testArray[Math.floor(Math.random()*testArray.length)])
  const [letterGuess, setLetterGuess] = useState('')
  const [keepWord,setKeepWord] =useState(false)






  return (
  <div>
  <h1> Hang Person</h1>
  <h4>Category: NFL TEAMS </h4>
 
    <Search randomString={randomString} setLetterGuess={setLetterGuess} letterGuess ={letterGuess}/>
     {<ShowGuess randomString={randomString} letterGuess = {letterGuess} />}
    {randomString && <GuessLines randomString = {randomString}/>}
  {/* <GuessChecker randomString={randomString} letterGuess={letterGuess}/>  */}
  </div>



  )
}

export default App;
