function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          NOVA<span>.</span>
        </a>

        <nav className="nav">
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
          <a href="#process">Процесс</a>
          <a href="#portfolio">Работы</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a href="#contact" className="header-button">
          Записаться
        </a>
      </div>
    </header>
  )
}

export default Header