var express = require('express');
var request = require('request');
var url = require('url');
// var 
var app = express();
app.listen(8080);
app.set('views', __dirname);
app.set('view engine', 'ejs');
var names = {
    'john' : 'admin',
    'mike' : 'manager',
    'ivan' : 'user'
}

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/test.html');
});
app.get('/user/:name', function (req, res) {
    var name = req.params.name;
    // var neeUrl = 'http://localhost:8081/?name=' + name;
    var opt = {
        protocol : 'http',
        host : 'localhost:8081',
        pathname : '/',
        query : { user : name }
    };
    var needUrl = url.format(opt);
    request(needUrl, function (err, response, body) {
        // console.log(body);
        var arr = JSON.parse(body);
        res.render('user', {
            name : arr[0].name,
            age : arr[0].age
        });
        res.end();
    })
});
