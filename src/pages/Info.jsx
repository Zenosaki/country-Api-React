import data from '../data.json'; 
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import { useState } from 'react';
import '../Sass/Main.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function InfoPage() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const { countryN } = useParams();


  const country = data.countries.find(c => {
    // Normalize both country name and the parameter countryN
    const normalizedCountryName = c.name.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const normalizedCountryN = countryN.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return normalizedCountryName === normalizedCountryN;
  });

  if (!country) {
    return <div>Country not found</div>;
  }

  const renderArrayValues = (array) => {
    return array.join(', ');
  };

  const renderBorderCountries = () => {
    if (!country.borders || country.borders.length === 0) {
      return <span>No bordering countries</span>;
    }

    return country.borders.map((borderCode) => {
      const borderCountry = data.countries.find((c) => c.alpha3Code === borderCode);
      if (borderCountry) {
        return (
          <Link className='BorderCountry-Button' key={borderCountry.alpha3Code} to={`/info/${borderCountry.name}`}>
            <button>{borderCountry.name}</button> 
          </Link>
        );
      } else {
        return <span key={borderCode}>{borderCode}</span>; 
      }
    });
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <main className={`Info-Page-Container ${darkMode ? 'Info-Page-Dark-Mode-On' : 'Info-Page-Dark-Mode-Off'}`}>
        <Link className='Go-Back-Button-Container' to="/home">
          <button className='Go-Back-Button'>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <span>Back</span>
          </button>
        </Link>
        <div className="Main-content">
          <div className="Country-Flag">
            <img src={country.flags.svg} alt={country.name} />
          </div>
          <div className="Country-Informations">
            <h1>{country.name}</h1>
            <div className='Country-Details'>
              <ul>
                <li>Native Name: <span>{country.nativeName}</span></li>
                <li>Population: <span>{country.population.toLocaleString()}</span></li>
                <li>Region: <span>{country.region}</span></li>
                <li>Sub Region: <span>{country.subregion}</span></li>
                <li>Capital: <span>{country.capital}</span></li>
              </ul>
              <ul>
                <li>Top Level Domain: <span>{renderArrayValues(country.topLevelDomain)}</span></li>
                <li>Currencies: <span>{country.currencies.map(curr => curr.name).join(', ')}</span></li>
                <li>Languages: <span>{country.languages.map(lang => lang.name).join(', ')}</span></li>
              </ul>
            </div>
            <div>
              <p>Border Countries: {renderBorderCountries()}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
