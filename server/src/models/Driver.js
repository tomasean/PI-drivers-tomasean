const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    apellido:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    descripcion:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    nacionalidad:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    fechadenacimiento:{
      type: DataTypes.DATE,
      allowNull:false
    }
  });
};