import Header from '../components/header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
      <div className={`Main-Content ${darkMode ? 'Main-DarkMode' : ' Main-DarkMode-Off'}`}>
        <nav>

          <div className={`SearchBar ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
          <FontAwesomeIcon className='Search-Icon' icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search for a country...' />
          </div>
          <select className={`${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}  name="Region" id="Reg">
            <option value="" selected>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </nav>
      </div>
    </div>
  )
}