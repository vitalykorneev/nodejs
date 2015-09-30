var http = require('http'),
    fs = require('fs'),
    foo = function (req, res) {
    res.writeHead(200);

    var content = fs.readFile('file.txt', function (err, file) {
        res.end( decodeURIComponent(file) );
    })
};

var app = http.createServer(foo);
app.listen(8080);
console.log('Listening on 8080...');