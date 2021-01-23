const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

//creo el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

//Habilito express.json
app.use(express.json({extended:true}));

//Rutas
app.use('/api/proyectos', require('./routes/proyecto'));

app.use('/api/managers', require('./routes/manager'));

app.use('/api/asignados', require('./routes/asignado'));

//puerto de la app
const port = process.env.PORT || 4000;


//arrancar la app
app.listen(port, () =>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
});



