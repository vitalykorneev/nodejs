var socket = require('socket.io');
var express = require('express');
var app = express();
var io = socket.listen(app.listen(8080));
console.log('Server on port 8080');
app.get('/', function (req, res) {
   res.sendfile(__dirname + '/index.html');
});
io.sockets.on('connection', function (client) {
    console.log('Connected');
    client.on('message', function (data) {
        client.emit('hello', { hello : 'Привет ' + data });
        client.broadcast.emit('hello', { hello : 'Привет от ' + data });
        // io.sockets.emit('hello', { hello : 'Привет Всем' })
    });
    client.on('new_message', function (data) {
        client.emit('hello', { hello : 'Привет ' + data });
    });
    client.on('disconnect', function () {
        console.log('test');
        io.sockets.emit('hello', { hello : 'Один из на ссвалил' })
    });
});