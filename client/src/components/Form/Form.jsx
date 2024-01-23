import { useEffect, useState } from "react";
import axios from "axios";

import validation from "./validation";
import style from "./Form.module.css"
const Form = () => {
  const [driver, setDriver] = useState({
    name: "test",
    surname: "test",
    description: "soy la descripcion",
    image: "defaultuirl",
    nationality: "Minecraft",
    dob: "1997-12-07",
    teams: [],
  });

  const [allTeams, setAllTeams] = useState([]);

  const [errors, setErrors] = useState({});
  const [buttonClickable, setButtonClickable]=useState(true);

  const handleChange = (event) => {
    setDriver({ ...driver, [event.target.name]: event.target.value });
    const erroresQueHay = validation({ ...driver, [event.target.name]: event.target.value })
    setErrors(erroresQueHay);
    if (Object.keys(erroresQueHay).length === 0){
      setButtonClickable(false);
    } else setButtonClickable(true);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(driver);

    axios
      .post("http://localhost:3001/drivers", driver)
      .then(({ data }) => {
        window.alert(data);
      })
      .catch((err) => {
        window.alert(err.response.data.error);
      });
  };

  const handleTeamChange = (event) => {
    if (!driver.teams.find((team) => team === event.target.value))
      setDriver({ ...driver, teams: [...driver.teams, event.target.value] });
    else {
      window.alert("Esa escuderia ya fue cargada");
    }
  };

  const handleTeamClick = (event) =>
    setDriver({
      ...driver,
      teams: driver.teams.filter((team) => team !== event.target.innerHTML),
    });

  useEffect(() => {
    axios.get("http://localhost:3001/teams").then(({ data }) => {
      setAllTeams(data);
    });
  }, []);
  return (
    <div className={style.container}>
    <form className={style.formBox} onSubmit={handleSubmit}>
      <div className={style.formTable}>
        <div>
          <label>Nombre</label>
          <input
            name="name"
            value={driver.name}
            onChange={handleChange}
          ></input>
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <div>
          <label>Apellido</label>
          <input
            name="surname"
            value={driver.surname}
            onChange={handleChange}
          ></input>
          <p style={{ color: "red" }}>{errors.surname}</p>
        </div>

        <div>
          <label>Descripcion</label>
          <input
            name="description"
            value={driver.description}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label>Imagen url</label>
          <input
            name="image"
            value={driver.image}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label>Nacionalidad</label>
          <input
            name="nationality"
            value={driver.nationality}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label>Fecha de nacimiento</label>
          <input
            name="dob"
            value={driver.dob}
            onChange={handleChange}
            placeholder="YYYY-MM-DD"
          ></input>
          <p style={{ color: "red" }}>{errors.dob}</p>
        </div>
      </div>

      <div className={style.formTable}>
        <div>
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
        </div>

        <div>
          <button
            className={
              buttonClickable
                ? style.buttonHidden
                : style.buttonNormal
            }
            disabled={buttonClickable}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
);
};

export default Form;