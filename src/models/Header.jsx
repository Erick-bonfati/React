import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__branding">
          <span className="header__logo">Minha Finança</span>
        </div>

        <nav className="header__nav">
          <a className="header__link" href="#">Dashboard</a>
          <a className="header__link" href="#">Transações</a>
          <a className="header__link" href="#">Relatórios</a>
          <a className="header__link" href="#">Configurações</a>
        </nav>

        <div className="header__cta">
          <button className="header__button" type="button">
            Entrar
          </button>
        </div>

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
