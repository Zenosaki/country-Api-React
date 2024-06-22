import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faRegularMoon } from '@fortawesome/free-regular-svg-icons';

export default function Header(){
  const [darkMode,setDarkMode]=useState(false)

  const toggleDarkMode =()=>{
    setDarkMode(!darkMode);
  }
  return(
    <div className="headerContainer Dark-Mode-On">
      <h1>Where in the world?</h1>
      <div className="Dark-Mode-Button" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ?faSolidMoon: faRegularMoon}/>
        <p>Dark Mode</p>
      </div>
    </div>
  )
}