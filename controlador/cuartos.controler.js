const cuarto = require('../modelos/cuarto.model');

exports.getCuartos = async (req, res) => {
    try {
        const cuartos = await cuarto.findAll();
        res.status(200).json(cuartos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};