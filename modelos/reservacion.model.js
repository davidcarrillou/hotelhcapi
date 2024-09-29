// models/Reservation.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Cuarto = require('./cuarto.model');

const Reservacion = sequelize.define('reservacion', {
    id_reservacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_reservacion'
    },
    id_cuarto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cuartos',
            key: 'id_cuarto'
        }
    },
    nombre_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingreso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    salida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notas: {
        type: DataTypes.TEXT
    },
    cantidad_huespedes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentarios_especiales: {
        type: DataTypes.TEXT
    },
    codigo_promocional: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reservaciones',
    timestamps: false,
});

Reservacion.belongsTo(Cuarto, { foreignKey: 'id_cuarto' });

module.exports = Reservacion;