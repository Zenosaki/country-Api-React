import PropTypes from 'prop-types';

export default function Card(props){
  return(
    <div className={`card-Container ${props.class}`} onClick={props.onclick}>
      <div className="logo">
        <img src={props.logo} alt="Logo" />
      </div>
      <div className="Country-Info">
        <h3>{props.Title}</h3>
        <ul>
          <li>Population: <span>{props.Population.toLocaleString()}</span></li>
          <li>Region: <span>{props.Region}</span></li>
          <li>Capital: <span>{props.Capital}</span></li>
        </ul>
      </div>
    </div>
  )
}


Card.propTypes = {
  logo: PropTypes.string,
  Title: PropTypes.string,
  Population: PropTypes.number,
  Region: PropTypes.string,
  Capital: PropTypes.string,
  class: PropTypes.string,
  onclick: PropTypes.func,
};