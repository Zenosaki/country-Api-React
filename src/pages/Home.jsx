import Header from '../components/header.jsx';
import '../Sass/Main.scss';
import { useState } from "react"

export default function HomePage(){
  const [darkMode,setDarkMode]=useState(false)

  const toggleDarkMode =()=>{
    setDarkMode(!darkMode);
  }
  return(
    <div className={`HomePage-Container ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className={`Main-Content ${darkMode ? 'Main-DarkMode' : 'M Main-DarkMode-Off'}`}>
      </div>
    </div>
  )
}