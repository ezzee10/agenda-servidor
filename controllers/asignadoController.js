const Asignado = require('../models/Asignado');

exports.obtenerAsignados = async (req, res) => {
    try {
        const asignado = await Asignado.find();
        res.json({ asignado });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAsignado = async (req, res) => {
    try {
        const asignado = await Asignado.findById(req.params.id);
        res.json({ asignado });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearAsignado = async (req, res) => {

    try {
        const asignado = new Asignado(req.body);
        await asignado.save();
        res.json({ asignado });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}