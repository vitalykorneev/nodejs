var http = require('http'),
    server;
server = http.createServer().listen(8080);
server.on('request', function (req, res) {
    res.writeHead(200);
    res.write('Hello');
    res.end('The End');
})
server.on('request', function (req, res) {
    console.log('Request:' + req.method + req.url);
})
server.on('listening', function() {
    console.log('Listening: 8080');
})