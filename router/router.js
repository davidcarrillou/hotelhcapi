const express = require('express');
const router = express.Router();
const Cuartos = require('../controlador/cuartos.controler');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cuarto:
 *       type: object
 *       properties:
 *         id_cuarto:
 *           type: integer
 *           description: ID único del cuarto
 *         numero_cuarto:
 *           type: string
 *           description: Número del cuarto
 *         tipo_cuarto:
 *           type: string
 *           description: Tipo del cuarto (ej. individual, suite, etc.)
 *         precio:
 *           type: number
 *           format: double
 *           description: Precio por noche
 *         disponible:
 *           type: boolean
 *           description: Si el cuarto está disponible o no
 *         descripcion:
 *           type: string
 *           description: descripocion del cuarto
 *         cantidad_disponibles:
 *           type: number
 *           description: cantidad de habitaciones
 *         servicios_incluidos:
 *           type: string
 *           description: lista de servicios del cuarto
 *         imagenes: 
 *           type: string
 *           description: ruta de las imagenes
 *         fecha_registro:
 *           type: date
 *           description: fecha de registro
 */

/**
 * @swagger
 * /cuartos:
 *   get:
 *     summary: Obtener todos los cuartos
 *     tags: [Cuartos]
 *     responses:
 *       200:
 *         description: Lista de todos los cuartos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cuarto'
 */
router.get('/cuartos', Cuartos.getCuartos);
router.post('/cuartos', Cuartos.altaCuarto);
router.get('/cuartos/:id', Cuartos.getCuartosById);
router.put('/cuartos/:id', Cuartos.actualizarCuarto);
router.delete('/cuartos/:id', Cuartos.eliminar);


module.exports = router;