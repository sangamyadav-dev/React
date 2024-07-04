import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Home} from './components/Home/Home'


function App() {
  return (
    <>   
      <h1 className= " w-10 h-9 bg-red-800">React Router</h1>
      {Header()}
      {Home()}
      {Footer()}
    </>
  )
}
export default App
