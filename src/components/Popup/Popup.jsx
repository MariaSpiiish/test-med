import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Popup = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("login", formData.name);
    localStorage.setItem("password", formData.password);

    setIsOpen(false);
    navigate("/profile");
    setFormData({ name: '', password: '' })
  };

  const close = (e) => {
    e.preventDefault();
    setIsOpen(false);
  }
    
    return (
        <div className={isOpen ? `popup popup_opened` : `popup`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={close}></button>
                <form className="form" onSubmit={handleSubmit}>
               
                  <label htmlFor="name-input" className="form__label">Логин</label>
                  <input 
                      name="name"
                      id="name-input"
                      type="text"
                      required
                      placeholder="Имя"
                      className="form__input form__input_type_text"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                  />
                  <label htmlFor="password-input" className="form__label">Пароль</label>
                  <input 
                      name="password"
                      id="password-input" 
                      type="password" 
                      required
                      minLength="8"
                      maxLength="30"
                      placeholder="Пароль" 
                      className="form__input form__input_type_password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="off"
                  />
                  <button type="submit" className="form__submit-button">Войти</button>
                </form>
            </div>
        </div> 
    )
    
}

export default Popup;