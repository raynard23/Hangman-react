
import './App.css';
import React from 'react';
import Search from './Search'
 import { useEffect, useState } from 'react';


function App() {
  
  let testArray = ['lazy', 'chaney', 'chase']
  let randomString = testArray[Math.floor(Math.random()*testArray.length)]
  
const RandomWord = ['purple', 'red', 'green', 'seven']


  return (
  <div>
  <h1> Hang Person</h1>
  <Search randomString={randomString}/>
  </div>



  )
}

export default App;
