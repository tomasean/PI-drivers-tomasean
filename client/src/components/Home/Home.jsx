import style from "./Home.module.css";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTeams } from "../../redux/actions.js";

const Home = () => {
  const teams = useSelector ((state) => state.allTeams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.filterGroup}>
        <span>Filtrar por escudería</span><Filter id="team" options={teams} />
        <span>Filtrar por origen</span><Filter id="origin" options={["Api", "Bd", "-"]} />
        <span>Ordenar alfabeticamente</span><Filter id="order" options={["Asc", "Dsc", "Sin filtro"]} />
        <span>Ordenar por fecha de nacimiento</span><Filter id="dob" options={["Asc", "Dsc", "Sin filtro"]} />
      </div>
      <Cards />
    </div>
  );
};
export default Home;