// eslint-disable-next-line react/prop-types
function Card({ img, title }) {
  return (
    <li className="card">
        <img src={img} alt="иконка в красном круге" className="card__icon"/>
        <h5 className="card__title">{title}</h5>
        <span className="card__line" />
        <p className="card__text">Рыба текст</p>
    </li>
  )
}

export default Card