import logo from './images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Картинка логотип проекта" />
    </header>
  );
}

export default Header;