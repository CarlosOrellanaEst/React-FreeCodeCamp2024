import { useState } from 'react'
import './App.css'

function App() {

  // const [variable, function]
  const [counter, setCounter] = useState(15) // only setCounter can change counter. useState is the default value

 // let counter = 15;
  const addValue = () => {
    // for one single, isolated update of the state
  /*   setCounter(counter+1) */ 

  // for multiple secuencial updates of the State
    setCounter((previous) => previous+1)
    setCounter((previous) => previous+1)
    setCounter((previous) => previous+1)
    setCounter((previous) => previous+1)
  }
  const removeValue = () => {
/* setCounter(counter-1) */
    setCounter((previous) => previous-1)
    setCounter((previous) => previous-1)
    setCounter((previous) => previous-1)
    setCounter((previous) => previous-1)
  }

  return (
    <>
      <h1>React course with Hitesh, FreeCodeCamp {counter} </h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
