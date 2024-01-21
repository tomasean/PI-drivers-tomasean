require("dotenv").config();  
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, 
} = process.env;

let sequelize 
try{
  sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});
}catch(error) {
  console.error('Error al conectarse a la base de datos', error);
  process.exit(1); 
}
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Driver, Team } = sequelize.models;

Driver.belongsToMany(Team,{through:"TeamDriverTable"});
Team.belongsToMany(Driver,{through:"TeamDriverTable"});

module.exports = {
  ...sequelize.models,
  conn: sequelize,     
};