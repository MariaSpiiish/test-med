import { Link, useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const logo = new URL(`../../assets/logo.svg`, import.meta.url).href;

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  }

  const handleClick = () => {
    const profile = localStorage.getItem('login');
    if (profile) {
      navigate('/profile');
    } else {
      setIsOpen(true);
    }
  }

  return (
    <header className="header">
        <Link to="/" className="header__link_logo">
            <img src={logo} alt="logo" className="header__logo"/>
        </Link>
        
        <nav className="header__nav-container">
            <Link to="/contacts" className="header__link header__link_contacts">Контакты</Link>
            {
              location.pathname === '/' ? (
                <button className="header__button" onClick={handleClick}>Войти</button>
              ) : (
                <Link to="/" className="header__link header__link_profile" onClick={handleLogout}>Выйти</Link>
              )
            }
            
        </nav>
    </header>
  )
}

export default Header