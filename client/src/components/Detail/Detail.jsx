import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/drivers/${id}`);
        setDriver(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDriver();
  }, [id]);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <div>
        {error && <div>Error al cargar los datos: {error.message}</div>}
        {isLoading && <div>Cargando...</div>}
        {driver && <DriverDetails driver={driver} />}
      </div>
    </Suspense>
  );
};

export default Detail;