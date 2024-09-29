// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../router/router');
const reservacionRoutes = require('../router/reservaciones.router');
const sequelize = require('../modelos/db');
const Cuarto = require('../modelos/cuarto.model');
const Reservacion = require('../modelos/reservacion.model');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
// Configuración de CORS para permitir todas las conexiones
app.use(cors({
    origin: '*', // Permite solicitudes desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Configurar Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Hotel Reservations API',
            version: '1.0.0',
            description: 'API para gestionar las reservaciones del hotel HC'
        },
        servers: [
            {
                url: `https://hotelhcapi.onrender.com/:${process.env.PORT || 3001}/api`
            }
        ]
    },
    apis: ['./app.js','./router/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', routes);
app.use('/api', reservacionRoutes);


module.exports = app;