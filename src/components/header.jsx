import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faRegularMoon } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

export default function Header({ darkMode, toggleDarkMode }){
  return(
    <div className={`headerContainer ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
      <h1>Where in the world?</h1>
      <div className="Dark-Mode-Button" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ?faSolidMoon: faRegularMoon}/>
        <p>Dark Mode</p>
      </div>
    </div>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};