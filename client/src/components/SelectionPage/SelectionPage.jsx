// import style from "./SelectionPage.module.css";

// const SelectionPage = ({
//   quantityPages,
//   setCurrentPage,
//   currentPage,
// }) => {
//   const pagesNumbers = [];

//   const handleClick = (event) => {
//     const id = event.target.innerHTML;
//     if (!isNaN(Number(id))) return setCurrentPage(id - 1);
//     if (id === "Next" && currentPage < quantityPages - 1)
//       return setCurrentPage(currentPage + 1);
//     if (id === "Back" && currentPage > 0) {
//       return setCurrentPage(currentPage - 1);
//     }
//   };

//   for (let i = currentPage; i < quantityPages; i++) {
//     if (i < currentPage + 20 && i < quantityPages - 1)
//       pagesNumbers.push(
//         <button
//           onClick={handleClick}
//           className={style.button}
//           key={`button_${i}`}
//         >
//           {i + 1}
//         </button>
//       );
//     if (i === quantityPages - 1) {
//       if (!(quantityPages - 2 < currentPage + 20))
//         pagesNumbers.push(
//           <span className={style.suspensivos} key={i - 1}>
//             ...
//           </span>
//         );
//       pagesNumbers.push(
//         <button onClick={handleClick} className={style.button} key={i}>
//           {i + 1}
//         </button>
//       );
//     }
//   }

//   return (
//     <div>
//       {quantityPages > 0 ? (
//         <>
//           <button onClick={handleClick}>Back</button>
//           {pagesNumbers.map((pagina) => pagina)}
//           <button onClick={handleClick}>Next</button>
//         </>
//       ) : null}
//     </div>
//   );
// };

// export default SelectionPage;

import style from "./SelectionPage.module.css";

const SelectionPage = ({
  quantityPages,
  setCurrentPage,
  currentPage,
}) => {
  const pagesNumbers = [];

  const handleClick = (event) => {
    const id = event.target.innerHTML;
    if (!isNaN(Number(id))) return setCurrentPage(id - 1);
    if (id === "Next" && currentPage < quantityPages - 1)
      return setCurrentPage(currentPage + 1);
    if (id === "Back" && currentPage > 0) {
      return setCurrentPage(currentPage - 1);
    }
  };

  for (let i=0; i < quantityPages; i++) {
    pagesNumbers.push(
      <button onClick={handleClick}
      className={currentPage===i ? style.currentButton : style.button}
      key={`button_${i}`}
      >
      {i + 1}  
      </button>
    );
  }

  // for (let i = currentPage; i < quantityPages; i++) {
  //   if (i < currentPage + 20 && i < quantityPages - 1)
  //     pagesNumbers.push(
  //       <button
  //         onClick={handleClick}
  //         className={style.button}
  //         key={`button_${i}`}
  //       >
  //         {i + 1}
  //       </button>
  //     );
  //   if (i === quantityPages - 1) {
  //     if (!(quantityPages - 2 < currentPage + 20))
  //       pagesNumbers.push(
  //         <span className={style.suspensivos} key={i - 1}>
  //           ...
  //         </span>
  //       );
  //     pagesNumbers.push(
  //       <button onClick={handleClick} className={style.button} key={i}>
  //         {i + 1}
  //       </button>
  //     );
  //   }
  // }

  return (
    // <div>
    //   {quantityPages > 0 ? (
    //     <>
    //       <button onClick={handleClick}>Back</button>
    //       {pagesNumbers.map((pagina) => pagina)}
    //       <button onClick={handleClick}>Next</button>
    //     </>
    //   ) : null}
    // </div>
    <div className={style.SelectionPageContainer}>
      {quantityPages > 0 ?(
        <>
        <button className={style.endButtons} onClick={handleClick}>Back</button>
        {pagesNumbers}
        <button className={style.endButtons} onClick={handleClick}>Next</button>
        </>
      ): null}
    </div>
  );
};

export default SelectionPage;