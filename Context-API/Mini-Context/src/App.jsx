
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      {/* <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login</h2> */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
