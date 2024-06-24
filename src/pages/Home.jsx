import Header from '../components/header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../Sass/Main.scss';
import { useState } from 'react';
import data from '../data.json';
import Card from '../components/CountryCard.jsx';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchByName, setSearchByName] = useState('');
  const navigate = useNavigate();

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchByName(event.target.value);
  };

  const handleCardClick = (country) => {
    navigate(`/info/${country.name}`);
  };

  const filteredCountries = data.countries.filter((country) => {
    return (
      (selectedRegion ? country.region === selectedRegion : true) &&
      (searchByName ? country.name.toLowerCase().includes(searchByName.toLowerCase()) : true)
    );
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`HomePage-Container ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`Main-Content ${darkMode ? 'Main-DarkMode' : 'Main-DarkMode-Off'}`}>
        <nav>
          <div className={`SearchBar ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
            <FontAwesomeIcon className='Search-Icon' icon={faMagnifyingGlass} />
            <input
              onChange={handleSearchChange}
              type='text'
              placeholder='Search for a country...'
            />
          </div>
          <select
            onChange={handleRegionChange}
            className={`custom-select ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}
            name='Region'
            id='Reg'
            value={selectedRegion}
          >
            <option value=''>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </nav>
        <div className='Countries-Cards-Section'>
          {filteredCountries.map((country, index) => (
            <Card 
              onclick={() => handleCardClick(country)}
              class={`${darkMode ? 'Dark-Mode-Cards' : 'Light-Mode-Cards'}`}
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
  );
}
