import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateBet from './pages/CreateBet'
import Login from './pages/Login'
import SiginUp from './pages/Sigin'
import Home from './pages/Home'

import List from './components/List'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'

function App() {
 
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode]) 

  return (
    <>
      <div className="flex justify-center items-center">
        <BrowserRouter>
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
          <Routes>
            <Route path="/" Component={SiginUp}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/createBet" Component={CreateBet}></Route>
            <Route path="/home" Component={Home}>
              <Route path="/home/open" Component={List}></Route>
              <Route path="/home/request" Component={List}></Route>
              <Route path="/home/wins" Component={List}></Route>
              <Route path="/home/lose" Component={List}></Route>
              <Route path="/home/history" Component={List}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
