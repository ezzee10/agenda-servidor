const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

//rutas para managers


//Obtener todos los managers
router.get('/', managerController.obtenerManagers);


router.post('/', managerController.crearManager);


module.exports = router;