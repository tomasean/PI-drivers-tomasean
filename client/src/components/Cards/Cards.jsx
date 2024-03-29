import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import SelectionPage from "../SelectionPage/SelectionPage.jsx";
import { getDrivers } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const driversBeforeFilter = useSelector((state) => state.drivers);
  const filter = useSelector((state) => state.filter);

  const pageSize = 9;
  const pages = [];

  const driversBeforeOrder = driversBeforeFilter.filter((driver) => {
    if (filter.origin === "Api") {
      if(driver.hasOwnProperty("fromdatabase"))
      return false;
    else return true;
    }
    if (filter.origin === "Bd") {
      if(driver.hasOwnProperty("fromdatabase"))
      return true;
    else return false;
    }
    return true;
  });

  let driversBeforeTeamFilter;
  if (filter.order !== "Sin filtro") {
    if(filter.order === "Asc") driversBeforeTeamFilter = driversBeforeOrder.sort((a,b) => a.name.surname.localeCompare(b.name.surname));
    else {
      driversBeforeTeamFilter = driversBeforeOrder.sort((b,a) => a.name.surname.localeCompare(b.name.surname));
    }
  }
  else {
    if (filter.dob === "Asc") driversBeforeTeamFilter = driversBeforeOrder.sort((a,b) => new Date(a.dob)-new Date(b.dob));
    else {
      driversBeforeTeamFilter = driversBeforeOrder.sort((b,a) => new Date(a.dob)-new Date(b.dob));
    }
  }

  const drivers = driversBeforeTeamFilter.filter((driver) => {
    if (filter.team !== "Todos") return driver.teams?.includes(filter.team);
    else return true;
  });

  if (drivers && drivers.length) {
    for (let i = 0; i < drivers.length; i += pageSize) {
      const page = drivers.slice(i, i + pageSize);
      pages.push(page);
    }
  }

  if (pages.length < currentPage){setCurrentPage(0)};

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const cards = pages[currentPage]?.map((driver) => (
    <Card
      key={driver.id}
      id={driver.id}
      name={driver.name.surname}
      teams={driver.teams}
      image={driver.image.url}
    />
  ));

  return (
    <div>
      <div className={style.cardsContainer}>{cards}</div>
      <SelectionPage
        quantityPages={pages.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Cards;