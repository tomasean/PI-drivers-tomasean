const { DataTypes } = require("sequelize");
//Defino un modelo sequelize llamado team que representa una tabla de equipos en mi base
//la tabla tiene 2 columnas id y nombre
module.exports = (sequelize) => {
    sequelize.define("Team", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
};