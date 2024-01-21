import React, { useState, useEffect } from "react";
import axios from "axios";

import validation from "./validation";

const Form = () => {
  const [driver, setDriver] = useState({
    id: 3,
    name: "PORTULACA",
    surname: "LACALMO",
    description: "SOyUnaDescripcion",
    image: "defaultuirl",
    nationality: "Basingseano",
    dob: "1998-01-05",
    teams: [],
  });

  const [allTeams, setAllTeams] = useState([]);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3001/drivers", driver);
      window.alert(response.data);
    } catch (err) {
      setError(err.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {isLoading && <div>Enviando...</div>}

      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          name="name"
          value={driver.name}
          onChange={handleChange}
        ></input>
        <p style={{ color: "red" }}>{errors.name}</p>
        <label>Apellido</label>
        <input
          name="surname"
          value={driver.surname}
          onChange={handleChange}
        ></input>
        <p style={{ color: "red" }}>{errors.surname}</p>
        <label>Descripcion</label>
        <input
          name="description"
          value={driver.description}
          onChange={handleChange}
        ></input>

        <label>Imagen url</label>
        <input
          name="image"
          value={driver.image}
          onChange={handleChange}
        ></input>

        <label>Nacionalidad</label>
        <input
          name="nationality"
          value={driver.nationality}
          onChange={handleChange}
        ></input>

        <label>Fecha de nacimiento</label>
        <input
          name="dob"
          value={driver.dob}
          onChange={handleChange}
          placeholder="YYYY-MM-DD"
        ></input>
        <p style={{ color: "red" }}>{errors.dob}</p>

        <label>Escuderias</label>
        <div>
          {driver.teams.map((team) => (
            <span key={`teamCard_${team}`} onClick={handleTeamClick}>
              {team}
            </span>
          ))}
        </div>
        <select
          defaultValue="Seleccione la escuderia que quiere agregar"
          onChange={handleTeamChange}
        >
          <option value="default">
            Seleccione la escuderia que quiere agregar
          </option>

          {allTeams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;