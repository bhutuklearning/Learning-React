import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 10;
  const addValue = () => {
    if(counter<25) {
      counter = counter + 1;
      setCounter(counter);
      // console.log("Clicked", counter);
    }
    else{
      counter = 10;
      setCounter(counter);
    }
   
  }

  const removeValue = () => {
    if(counter>0){
      counter = counter - 1;
      setCounter(counter);
      // console.log("clicked", counter);
    }
    else{
      counter = 0;
      setCounter(counter);
    }
  }

  const resetValue = () => {
    counter = 0;
    setCounter(counter);
  }
  return (
    <>
     <h1>Chai aur React- Learning Amritanshu</h1>
     <h2>Counter Value: {counter} </h2>

     <button onClick={addValue} >Add Value</button>
     <br />
     <button onClick={removeValue}>Reduce Value</button>
     <br />
     <button onClick={resetValue}>Reset to 0</button>
     <p>Footer: {counter} </p>
    </>
  )
}

export default App
