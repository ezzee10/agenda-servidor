const Proyecto = require('../models/Proyecto');

//Crea un nuevo Proyecto

exports.crearProyecto = async (req, res) => {

    try {
        //Creamos el Proyecto
        const proyecto = new Proyecto(req.body);
        await proyecto.save();
        res.json({ proyecto });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtiene todos los Proyectos
exports.obtenerProyectos = async (req, res) => {
    try {
        const proyecto = await Proyecto.find();
        res.json({ proyecto });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtener proyectos paginado

exports.obtenerProyectosPaginado = async (req, res) => {

    let perPage = 6;
    let page = req.params.page || 1;
    let salt = parseInt((perPage * page) - perPage);

    try {
        const proyectos = await Proyecto.find().limit(perPage).skip(salt).sort({ $natural: -1 });
        const total_proyectos = await Proyecto.find().count();
        res.json({ proyectos, current: page, pages: Math.ceil(total_proyectos / perPage) });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener los proyectos');
    }
}

//Obtiene proyecto por ID
exports.obtenerProyecto = async (req, res) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id);
        res.json({ proyecto });

    } catch (error) {
        console.log(error);
        res.status(500).send('El proyecto no se encuentra');
    }
}

//Actualizar un Proyecto
exports.actualizarProyecto = async (req, res) => {
    try {

    const {nombre, descripcion, manager, asociado, estado} = req.body;
    const nuevoProyecto = {nombre,descripcion, manager, asociado, estado};
    await Proyecto.findByIdAndUpdate(req.params.id, nuevoProyecto);
    res.json({status: 'Proyecto actualizado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Eliminar un Proyecto por su id
exports.eliminarProyecto = async (req, res) => {
    try {

        //eliminar la tarea
        await Proyecto.findByIdAndRemove(req.params.id );
        res.json({ msg: 'Proyecto eliminado' });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}