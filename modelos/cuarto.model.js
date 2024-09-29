const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Cuarto = sequelize.define('cuarto', {
    id_cuarto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Esto asegura que se auto-incremente
        field: 'id_cuarto' // Mapeo a la columna en la base de datos
    },
    numero_cuarto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_cuarto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'cuartos',
    timestamps: false,
  });


module.exports = Cuarto;
