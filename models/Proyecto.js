const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },description:{
        type:String,
        required: true,
        trim: true
    }, estado:{
        type: String,
        required: true,
        trim: true
    }, fecha:{
        type: Date,
        default: Date.now
    },asociado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asignado'
    },manager:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager'
    }
})

module.exports = mongoose.model('Proyecto', ProyectoSchema);