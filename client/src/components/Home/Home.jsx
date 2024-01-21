import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";


const Home = () => {
    const teams=['-','Mercedes','Ferrari']

    return(
    <div className={style.container}>
        <div className={style.filterGroup}>
            <Filter id="team" options={teams}/>
            <Filter id="origin" options={[ "Api","Bd","-"]}/>
            <Filter id="order" options={[ "Asc","Dsc","-"]}/>
            <Filter id="dob" options={[ "Asc","Dsc","-"]}/>
        </div>
        <Cards />
    </div>
    )
}
export default Home;