import Header from '../components/header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../Sass/Main.scss';
import { useState } from "react"
import data from '../data.json';
import Card from "../components/CountryCard.jsx";

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
        <div className="Countries-Cards-Section">
        {data.countries.map((country,index) => (
          <Card class={`${darkMode ? 'Dark-Mode-Cards' : 'Light-Mode-Cards'}`}
           key={index} 
           logo={country.flag}
           Title={country.name} 
           Population={country.population} 
           Region={country.region} 
           Capital={country.capital}
           />
        ))}
        </div>
      </div>
    </div>
  )
}