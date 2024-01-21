import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return <div className={style.container}>
      <NavLink to='/home'> <button className={style.button}>HOME</button> </NavLink>
      </div>;
  };
  
  export default Landing;