var express = require('express');
var app = express();
app.listen(8080);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/test.html');
})