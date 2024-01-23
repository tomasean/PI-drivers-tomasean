const { Driver } = require("./src/db.js");
const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    //   Driver.create({name: "Carlos",
    //   id: 2000,
    //   apellido: "Rodriguez",
    //   imagen: "hola",
    //   descripcion: "El rayo mcqueen",
    //   nacionalidad: "Argentino",
    //   fechadenacimiento: "1953-11-16"})
    });
  })
  .catch((error) => console.error(error));
