import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Картинка логотип проекта" />
      <div className="header__container">
        <p className="header__email">user@mail.ru</p>
        <Link to="/" className="header__button" type="button" aria-label="Выйти">Выйти</Link>
      </div>
    </header>
  );
}

export default Header;