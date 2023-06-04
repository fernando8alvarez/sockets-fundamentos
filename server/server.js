const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); //Modulo que trae Node por defecto

//Libreria path: proporciona utilidades para trabajar con rutas de archivos y directorios en un sistema de archivos.
const path = require('path');

const app = express();
let server = http.createServer(app);

//__dirname: representa el directorio actual del archivo
//path.resolve():funcion que se utiliza para resolver rutas relativas y obtener la ruta absoluta
//'../public': ruta relativa a la que queremos accceder al directorio "public" que se encuentra en un nivel arriba al directorio actual.
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//express.static(publicPath): proporciona archivos estaticos desde un directorio especificos
app.use(express.static(publicPath));

//IO: esta es la comunicacion directa del Back-End
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});

