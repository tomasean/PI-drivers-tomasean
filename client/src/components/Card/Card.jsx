import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, teams, image, id }) => {
  return (
    <NavLink to={`/home/detail/${id}`} className={style.cardContainer}>
      <div className={style.name}>{name}</div>
      <div className={style.behind}>
      <img className={style.image} src={image} alt={`Image of ${name}`} />

      <div className={style.teams}>{teams}</div>
      </div>
    </NavLink>
  );
};

export default Card;