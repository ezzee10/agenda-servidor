const mongoose = require('mongoose');

const ContactoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },apellido:{
        type:String,
        required: true,
        trim: true
    },telefono:{
        type: Number,
        required: true,
        trim: true,
        unique: true
    }
})

module.exports = mongoose.model('Contacto', ContactoSchema);