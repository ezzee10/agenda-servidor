const Manager = require('../models/Manager');

exports.obtenerManagers = async (req, res) => {
    try {
        const manager = await Manager.find();
        res.json({ manager });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearManager = async (req, res) => {

    try {
        const manager = new Manager(req.body);
        await manager.save();
        res.json({ manager });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}