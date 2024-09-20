import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Profile() {
  const navigate = useNavigate();
  const profile = localStorage.getItem('login');
 
  const [name, setName] = useState(profile ? profile : 'Хозяин')

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
    setName('Хозяин');
  }
  
  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {name}</h1>
      <nav className="profile__nav">
        <button className="profile__button profile__logout" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
        <Link to="/contacts" className="profile__button profile__link">Перейти в контакты</Link>
      </nav>
    </div>
  )
}

export default Profile