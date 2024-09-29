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
 *       example:
 *         id_cuarto: 1
 *         numero_cuarto: "101"
 *         tipo_cuarto: "Suite"
 *         precio: 150.00
 *         disponible: true
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


module.exports = router;