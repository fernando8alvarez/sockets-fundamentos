const socket = io();//io() es una funcion que aparece gracias a la libreria que acabamos de importar
//Con el socket ahora podemos definir nuestras funciones en el front-end

//Funcion N1: nos permitira mostrar un mensaje cuando tenga una conexion o un canal de comunicacion
//entre el servidor y el cliente
socket.on('connect', function () {
    console.log('conectado al servidor');
});


//Funcion N2: se ejecuta cuando perdemos conexion con el servidor
socket.on('disconnect', function () {
    console.log("perdimos conexion con el servidor");
});

//Funcion N3: envia informacion
socket.emit('EnviarMensaje', {
    usuario: '',
    mensaje: ''
}, function (response) {
    console.log('Respuesta server:', response.resp);
});

//Funcion N4: recibe (escucha) informacion del servidor
socket.on('EnviarMensaje', function (respuesta) {
    console.log(`Informacion del servidor:`, respuesta);
})
