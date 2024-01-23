// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// import style from "./Detail.module.css";

// const Detail = () => {
//   const { id } = useParams();

//   const getDriver = async (id) => {
//     try {
//       const { data } = await axios.get(`http://localhost:3001/drivers/${id}`);
//       return data;
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const [driver, setDriver] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getDriver(id);
//       setDriver(result);
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <div className={style.container}>
//       <div className={style.card}>
//         <div className={style.id}>#{id}</div>
//         {driver && (
//           <div className={style.inside}>
//             <div className={style.imgContainer}><img className={style.img} src={driver.image.url} /></div>
//             <div className={style.data}>
//               <div className={style.dataBox}>
//                 <div className={style.dataBox_first}>Nombre:</div>
//                 <div className={style.dataBox_second}>
//                   {driver.name.forename}
//                 </div>
//               </div>
//               <div className={style.dataBox}>
//                 <div className={style.dataBox_first}>Apellido:</div>
//                 <div className={style.dataBox_second}>
//                   {driver.name.surname}
//                 </div>
//               </div>
//               <div className={style.dataBox}>
//                 <div className={style.dataBox_first}>Nacionalidad:</div>
//                 <div className={style.dataBox_second}>{driver.nationality}</div>
//               </div>
//               <div className={style.dataBox}>
//                 <div className={style.dataBox_first}>Descripción:</div>{" "}
//                 <div className={style.dataBox_second}>{driver.description}</div>
//               </div>
//               <div className={style.dataBox}>
//                 <div className={style.dataBox_first}>Nacimiento:</div>{" "}
//                 <div className={style.dataBox_second}>{driver.dob}</div>
//               </div>
//               <div className={style.dataBox}>
//                 <div className={style.dataBox_first}>Escuderías:</div>
//                 <div className={style.dataBox_second}> {driver.teams}</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Detail;

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const getDriver = async (id) => {
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
      const result = await getDriver(id);
      setDriver(result);
    };

    fetchData();
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.id}>#{id}</div>
        {driver && (
          <div className={style.inside}>
            <div className={style.imgContainer}>
              <img className={style.img} src={driver.image.url} alt={`${driver.name.forename} ${driver.name.surname}`} />
            </div>
            <div className={style.data}>
              <DataBox label="Nombre" value={driver.name.forename} />
              <DataBox label="Apellido" value={driver.name.surname} />
              <DataBox label="Nacionalidad" value={driver.nationality} />
              <DataBox label="Descripción" value={driver.description} />
              <DataBox label="Nacimiento" value={driver.dob} />
              <DataBox label="Escuderías" value={driver.teams} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DataBox = ({ label, value }) => (
  <div className={style.dataBox}>
    <div className={style.dataBox_first}>{label}:</div>
    <div className={style.dataBox_second}>{value}</div>
  </div>
);

export default Detail;