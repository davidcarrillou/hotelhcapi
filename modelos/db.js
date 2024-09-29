// models/db.js
const { Sequelize } = require('sequelize');
const { logger } = require('sequelize/lib/utils/logger');
require('dotenv').config(); // Cargar variables del archivo .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    host: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, // Dialecto (mysql)
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;
