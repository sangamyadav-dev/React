import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import { useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
    
  }

  const lightTheme =() =>{
    setThemeMode("light")
  }

  useEffect(() =>{

    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <h1 className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5          font-semibold leading-7 text-white hover:bg-black/80">
        THEME SWITCHER
        </h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
                <ThemeButton/>
            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
