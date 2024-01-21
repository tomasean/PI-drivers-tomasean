import style from "./Card.module.css";

const Card = ({ name, teams, image }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.name}>{name}</div>
      <div className={style.behind}>
      <img className={style.image} src={image} alt={`Image of ${name}`} />

      <div className={style.teams}>{teams}</div>
      </div>
    </div>
  );
};

export default Card;
