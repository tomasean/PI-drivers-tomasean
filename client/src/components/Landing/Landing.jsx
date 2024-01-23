import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return <div className={style.container}>
      <NavLink to='/home'> <button className={style.button}>H O M E</button> </NavLink>
      </div>;
  };
  
  export default Landing;