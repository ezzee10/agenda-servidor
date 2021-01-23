const mongoose = require('mongoose');

const ManagerSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },apellido:{
        type:String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Manager', ManagerSchema);