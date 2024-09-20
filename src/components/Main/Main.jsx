import { Link, useNavigate } from "react-router-dom"
import Card from '../Card/Card.jsx'

// eslint-disable-next-line react/prop-types
function Main({ setIsOpen }) {
  const navigate = useNavigate();
  const cards = [
    {
      img: new URL(`../../assets/circle1.svg`, import.meta.url).href,
      text: "Онлайн-прием"
    },
    {
      img: new URL(`../../assets/circle2.svg`, import.meta.url).href,
      text: "Экстренный случай"
    },
    {
      img: new URL(`../../assets/circle3.svg`, import.meta.url).href,
      text: "Лечение рака"
    }
  ]

  const handleClick = () => {
    const profile = localStorage.getItem('login');
    if (profile) {
      navigate('/profile');
    } else {
      setIsOpen(true);
    }
  }

  return (
    <main className="main">
        <h1 className="main__title">Место для получения медицинской помощи</h1>
        <nav className="main__nav">
            <button type="button" className="main__button main__popup_button" onClick={handleClick}>Войти</button>
            <Link to="/contacts" className="main__button main__link_button">Контакты</Link>
        </nav>
        
        <ul className="main__cards-container">
          {cards.map((card, i) => (
            <Card key={i} img={card.img} title={card.text} />
          ))}
        </ul>
    </main>
  )
}

export default Main