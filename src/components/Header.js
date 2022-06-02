import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Картинка логотип проекта" />
      <div className="header__container">
        <p className="header__email">{props.email}</p>
        <Link to={props.route} 
          className={`header__button ${props.email ? 'header__button_grey' : ''}`} 
          type="button"
          onClick={props.handleSignOut}
          aria-label="Выйти">{props.buttonText}</Link>
      </div>
    </header>
  );
}

export default Header;