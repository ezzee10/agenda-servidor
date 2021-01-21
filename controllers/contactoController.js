const Contacto = require('../models/Contacto');

//Crea un nuevo contacto

exports.crearContacto = async (req, res) => {

    try {
        //Creamos el contacto
        const contacto = new Contacto(req.body);
        await contacto.save();
        res.json({ contacto });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtiene todos los contactos
exports.obtenerContactos = async (req, res) => {
    try {
        const contacto = await Contacto.find();
        res.json({ contacto });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar un contacto
exports.actualizarContacto = async (req, res) => {
    try {

    const {nombre, apellido, telefono} = req.body;
    const nuevoContacto = {nombre,apellido,telefono};
    await Contacto.findByIdAndUpdate(req.params.id, nuevoContacto);
    res.json({status: 'Contacto actualizado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Eliminar un contacto por su id
exports.eliminarContacto = async (req, res) => {
    try {

        //eliminar la tarea
        await Contacto.findByIdAndRemove(req.params.id );
        res.json({ msg: 'Contacto eliminada' });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}