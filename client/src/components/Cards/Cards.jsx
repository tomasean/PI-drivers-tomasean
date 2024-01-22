import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import SelectionPage from "../SelectionPage/SelectionPage.jsx";
import { getDrivers } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const drivers = useSelector((state) => state.drivers);
  const filter = useSelector((state) => state.filter);

  const pageSize = 9;
  const pages = [];

  if (drivers && drivers.length) {
    for (let i = 0; i < drivers.length; i += pageSize) {
    const page = drivers.slice(i, i + pageSize);
    pages.push(page);
  }
  }

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
