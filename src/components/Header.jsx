import '../assets/styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__branding">
          <span className="header__logo">Minha Finança</span>
        </div>

        <nav className="header__nav">
          <Link to="/modulo1" className="header__link">Modulo1</Link>
          <Link to="/modulo2" className="header__link">Modulo2</Link>
          <Link to="/modulo3" className="header__link">Modulo3</Link>
          <Link to="/modulo4" className="header__link">Modulo4</Link>
        </nav>

        <div className="header__menu">
          <button className="header__menu-button" type="button" aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
