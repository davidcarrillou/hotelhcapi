// router/reservacion.router.js
const express = require('express');
const router = express.Router();
const ReservacionController = require('../controlador/reservacion.controler');

/**
 * @swagger
 * components:
 *   schemas:
 *     Reservacion:
 *       type: object
 *       properties:
 *         id_reservacion:
 *           type: integer
 *           description: ID único de la reservación
 *         id_cuarto:
 *           type: integer
 *           description: ID del cuarto reservado
 *         nombre_cliente:
 *           type: string
 *           description: Nombre del cliente
 *         ingreso:
 *           type: string
 *           format: date
 *           description: Fecha de ingreso
 *         salida:
 *           type: string
 *           format: date
 *           description: Fecha de salida
 *       example:  # Ejemplo general
 *         id_reservacion: 1
 *         id_cuarto: 101
 *         nombre_cliente: "Juan Pérez"
 *         ingreso: "2024-09-25"
 *         salida: "2024-09-28"
 */

/**
 * @swagger
 * /reservaciones:
 *   post:
 *     summary: Crear una nueva reservación
 *     tags: [Reservaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservacion'
 *           example:  # Ejemplo de creación
 *             id_cuarto: 1
 *             nombre_cliente: "Juan Perez"
 *             ingreso: "2024-10-01"
 *             salida: "2024-10-05"
 *             email_cliente: "juan.perez@example.com"
 *             telefono_cliente: "555-1234"
 *             cantidad_huespedes: 2
 *             comentarios_especiales: "Cama extra"
 *             codigo_promocional: "DESCUENTO2024"
 *             notas: "Prefiere vista al mar"
 *     responses:
 *       201:
 *         description: Reservación creada con éxito
 *       500:
 *         description: Error al crear la reservación
 */
router.post('/reservaciones', ReservacionController.createReservacion);

/**
 * @swagger
 * /reservaciones:
 *   get:
 *     summary: Obtener todas las reservaciones
 *     tags: [Reservaciones]
 *     responses:
 *       200:
 *         description: Lista de todas las reservaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservacion'
 *       500:
 *         description: Error al obtener las reservaciones
 */
router.get('/reservaciones', ReservacionController.getReservaciones);

/**
 * @swagger
 * /reservaciones/{id}:
 *   get:
 *     summary: Obtener una reservación por su ID
 *     tags: [Reservaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reservación
 *     responses:
 *       200:
 *         description: Detalles de la reservación solicitada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservacion'
 *       404:
 *         description: Reservación no encontrada
 *       500:
 *         description: Error al obtener la reservación
 */
router.get('/reservaciones/:id', ReservacionController.getReservacionById);

/**
 * @swagger
 * /reservaciones/{id}:
 *   put:
 *     summary: Actualizar una reservación
 *     tags: [Reservaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reservación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservacion'
 *           example:
 *             nombre_cliente: "Juan Perez"
 *             ingreso: "2024-10-01"
 *             salida: "2024-10-05"
 *             email_cliente: "juan.perez@example.com"
 *             telefono_cliente: "555-1234"
 *             cantidad_huespedes: 2
 *             comentarios_especiales: "Cama extra"
 *             codigo_promocional: "DESCUENTO2024"
 *             activo: true
 *     responses:
 *       200:
 *         description: Reservación actualizada con éxito
 *       404:
 *         description: Reservación no encontrada
 *       500:
 *         description: Error al actualizar la reservación
 */
router.put('/reservaciones/:id', ReservacionController.updateReservacion);

/**
 * @swagger
 * /reservaciones/{id_reservacion}:
 *   delete:
 *     summary: Eliminar una reservación
 *     tags: [Reservaciones]
 *     parameters:
 *       - in: path
 *         name: id_reservacion
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reservación a eliminar
 *     responses:
 *       200:
 *         description: Reservación eliminada con éxito
 *       404:
 *         description: Reservación no encontrada
 *       500:
 *         description: Error al eliminar la reservación
 */
router.delete('/reservaciones/:id_reservacion', ReservacionController.deleteReservacion);


module.exports = router;
