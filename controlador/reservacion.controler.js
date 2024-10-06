// controlador/reservacion.controler.js
const Reservacion = require('../modelos/reservacion.model');

// Obtener todas las reservaciones
exports.getReservaciones = async (req, res) => {
    try {
        const reservaciones = await Reservacion.findAll();
        res.status(200).json(reservaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una reservación por ID
exports.getReservacionById = async (req, res) => {
    try {
        const reservacion = await Reservacion.findByPk(req.params.id);
        if (reservacion) {
            res.status(200).json(reservacion);
        } else {
            res.status(404).json({ message: "Reservación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva reservación
exports.createReservacion = async (req, res) => {
    try {
        const nuevaReservacion = await Reservacion.create(req.body);
        res.status(201).json(nuevaReservacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una reservación
exports.updateReservacion = async (req, res) => {
    try {
        const reservacion = await Reservacion.findByPk(req.params.id);
        if (reservacion) {
            await reservacion.update(req.body);
            res.status(200).json(reservacion);
        } else {
            res.status(404).json({ message: "Reservación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una reservación
exports.deleteReservacion = async (req, res) => {
    try {
        const reservacion = await Reservacion.findByPk(req.params.id);
        if (reservacion) {
            await reservacion.destroy();
            res.status(200).json({ message: "Reservación eliminada" });
        } else {
            res.status(404).json({ message: "Reservación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
