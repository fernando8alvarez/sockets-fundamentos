const { io } = require('../server');

//Funcion nos avisa cuando un usuario se conecta al server
io.on('connection', (client) => {
    console.log('Usuario conectado');


    //Funcion N1: nos avisa cuando un usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Funcion N2: Escuchar el cliente
    client.on('EnviarMensaje', (data, callback) => {
         console.log(data);

         client.broadcast.emit('EnviarMensaje',data)

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     })
        // }
    });

    //Funcion N3: Enviar informacion al cliente
    client.emit('EnviarMensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenido a esta aplicacion'
    });
});