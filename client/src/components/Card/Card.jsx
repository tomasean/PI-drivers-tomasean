import style from './Card.module.css'

const Card = ({ name, teams, image }) => {
  return (
    <div className={style.cardContainer}>
      <div>{name}</div>
      <img className={style.image} src={image} alt={`Image of ${name}`} />
      <ul>
        <li>{teams}</li>
      </ul>
    </div>
  );
};

export default Card;