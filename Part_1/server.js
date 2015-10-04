var fs = require('./get-file');
var logs = require('./logs');
var http = require('http');
http.createServer(function (req, res) {
    logs.info('Download start');
    res.writeHead(200);
    var file = fs('file.txt');
    file.pipe(res);
    logs.info('Download finish');

}).listen(8080);