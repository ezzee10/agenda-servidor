const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');

//crear un contacto
//api/contactos
router.post('/', contactoController.crearContacto);

//Obtener todos los contactos
router.get('/', contactoController.obtenerContactos)

//Actualizar un contacto
router.put('/:id',contactoController.actualizarContacto)

//Eliminar un contacto
router.delete('/:id',contactoController.eliminarContacto)

module.exports = router;