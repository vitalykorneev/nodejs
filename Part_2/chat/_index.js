var express = require('express'),
    ejs     = require('ejs'),
    socket  = require('socket.io'),
    app     = express(),
    io      = socket.listen(app.listen(8080));

console.log('Server on port: 8080');
app.set('views', __dirname + '/tpl');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
   res.render('page');
});

io.sockets.on('connection', function (client) {
    console.log('Connected');
    client.emit('message', { message : 'Добро пожаловать в чат!' });

    client.on('send', function (data) {
        client.emit('message', { message : data });
        client.broadcast.emit('message', { message : data });
    });
    
});