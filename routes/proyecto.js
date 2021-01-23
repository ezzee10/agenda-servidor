const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

//rutas para proyectos

//api/proyectos
router.post('/', proyectoController.crearProyecto);

//Obtener todos los proyectos
router.get('/', proyectoController.obtenerProyectos);

//Obtener un solo proyecto
router.get('/:id',proyectoController.obtenerProyecto);

//Obtener proyectos por pagina
router.get('/page/:page',proyectoController.obtenerProyectosPaginado);

//Actualizar un proyecto
router.put('/:id',proyectoController.actualizarProyecto)

//Eliminar un proyecto
router.delete('/:id',proyectoController.eliminarProyecto)

module.exports = router;