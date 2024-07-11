
import './App.css'
import AddTodo from './Comonents/AddTodo'
import Todos from './Comonents/Todos'
function App() {

  return (
    <>
      <h1 className='text-4xl font-bold bold bg-gray-800 text-white p-8 '>REACT REDUX-TOOLKIT</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
