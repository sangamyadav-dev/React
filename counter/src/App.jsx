import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  

  const addValue = () => {
    // console.log("clicked",counter)
    setCounter(counter + 1)
    if (counter === 20) {
      setCounter(20)
    }
  }

  const removeValue = () => {
    console.log("clicked",counter)
    setCounter(counter - 1)
    if (counter === 0) {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>counter Value: {counter}</h2>
      <br />
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App

