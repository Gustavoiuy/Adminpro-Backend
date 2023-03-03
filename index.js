require('dotenv').config();
const express = require ('express');

const  cors= require('cors');
const {dbConection}= require ('./database/config');

//Crear el servidor de express 
const app = express ();

//configurar cors
app.use(cors());

// base de datos 
dbConection();


app.get('/', (req,res)=>{
     res.json({
        ok: true,
        msg: 'Hola Mundo'
     });
});


app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);

});
