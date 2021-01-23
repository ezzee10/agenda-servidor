const express = require('express');
const router = express.Router();
const asignadoController = require('../controllers/asignadoController');

//rutas para asignados


//Obtener todos los asignados
router.get('/', asignadoController.obtenerAsignados);

//Obtener un asignado
router.get('/:id', asignadoController.obtenerAsignado);

router.post('/', asignadoController.crearAsignado);


module.exports = router;