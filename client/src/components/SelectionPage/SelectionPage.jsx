import React, { useState, useRef } from 'react';
import style from './SeleccionPagina.module.css';

const SelectionPage = ({
  quantityPages,
  setCurrentPage,
  currentPage,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageNumbersRef = useRef([]);

  useEffect(() => {
    const botones = [];
    for (let i = currentPage; i < quantityPages; i++) {
      if (i < currentPage + 20 && i < quantityPages - 1) {
        botones.push(
          <button
            key={`button_${i}`}
            className={style.button}
            aria-label={`Ir a página ${i + 1}`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        );
      } else if (i === quantityPages - 1) {
        if (!(quantityPages - 2 < currentPage + 20)) {
          botones.push(
            <span key={`suspensivos_${i}`} className={style.suspensivos}>
              ...
            </span>
          );
        }
        botones.push(
          <button
            key={`button_${i}`}
            className={style.button}
            aria-label={`Ir a página ${i + 1}`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        );
      }
    }
    pageNumbersRef.current = botones;
  }, [currentPage, quantityPages]);

  const handleClick = (event) => {
    const { textContent } = event.target;
    if (textContent === 'Next' && currentPage < quantityPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (textContent === 'Back' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {quantityPages > 0 && (
        <>
          <button className={style.button} aria-label="Ir a la página anterior">Back</button>
          {pageNumbersRef.current}
          <button className={style.button} aria-label="Ir a la página siguiente">Next</button>
        </>
      )}
    </div>
  );
};

export default SelectionPage;