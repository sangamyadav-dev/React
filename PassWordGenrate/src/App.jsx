import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false) 
  const [charAllow, setCharAllow] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()[]{}?~<>.,"
    
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  useEffect(() => { // useEffect hook use first time load page to call useEffect hook
    PasswordGenerator()  
  }, [length, numberAllow, charAllow, PasswordGenerator])

  //useref hook  for click on button and copy password
  const passwordRef = useRef(null) 
  const CopyPasswordToClick = useCallback(() => {
    passwordRef.current?.select(); //use to highlight select password
    // passwordRef.current?.setSelectionRange(0, 20); // use to select password range but we dont use here 
    window.navigator.clipboard.writeText(Password)
  },[Password])


  return (
    <>
      <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 my-28 bg-gray-800'>
        <h1 className='w-full text-4xl font-bold text-center text-white py-4 px-8'>Password Generator</h1>
        <div className='w-full flex  shadow rounded-lg overflow-hidden mb-4'>
          <input
            className='w-full outline-none border-white rounded px-3 py-4 text-black font-bold text-lg'
            type="text"
            value={Password}
            placeholder="Password Generate"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={CopyPasswordToClick}
            className='bg-blue-400 text-gray-800 font-bold outline-none py-0.5 px-4 shrink-0 hover:bg-blue-300'>
            COPY 
          </button>
        </div>
        <div className='flex text-medium font-bold gap-x-9  text-center justify-center'>
          <div className='flex items-center gap-x-2 text-white uppercase'>
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className='cursor-pointer '
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-2 text-white uppercase py-8'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-2 text-white uppercase'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
