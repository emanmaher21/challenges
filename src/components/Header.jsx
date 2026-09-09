function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div className="logo">ShopMini</div>
      <nav>
        <span>Home</span>
        <span>Products</span>
        <span>Contact</span>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
}

export default Header;