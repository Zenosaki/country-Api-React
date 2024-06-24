import data from '../data.json'; 
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import { useState } from 'react';

export default function InfoPage(){
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const { countryN } = useParams();

  const country = data.countries.find(
    (country) => country.name.toLowerCase() === countryN.toLowerCase()
  );
  return(
    <main className={`Info-Page-Container ${darkMode ? 'Info-Page-Dark-Mode-On' : 'Info-Page-Dark-Mode-Off'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </main>
  )
}