import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();


  const getDrivers = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/drivers/${id}`);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const [driver, setDriver] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDrivers(id);
      setDriver(result);
    };
    fetchData();
  }, [id]);

  return (
    <div className={style.container}>
      <div>{id}</div>
      {driver && (<>
      <div>
        <div>Name: {driver.name.forename}</div>
        <div>Surname: {driver.name.surname}</div>
        <div>Nationality: {driver.nationality}</div>
        <div>Description: {driver.description}</div>
        <div>Date: {driver.dob}</div>
        <div>Team: {driver.teams}</div>
        </div>
        <img src={driver.image.url} />
        </>
        )}
    </div>
  );
};

export default Detail;