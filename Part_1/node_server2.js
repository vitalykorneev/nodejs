var http = require('http'),
    server;
server = http.createServer().listen(8080);
server.on('request', function (req, res) {
    if (req.url == '/stop') {
        req.connection.destroy();
        server.close();
    }
    else {
        res.writeHead(200);
        res.write('Hello');
        res.end();
    }
})
server.on('request', function (req, res) {
    console.log('Request:' + req.host + req.method + req.url);
    console.log('Responce:' + res.statusCode);
})
server.on('connection', function() {
    console.log('Connection');
})
server.on('close', function() {
    console.log('The End');
})
server.on('listening', function() {
    console.log('Listening: 8080');
})