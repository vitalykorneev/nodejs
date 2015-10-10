var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var data = '';
    var input = url.parse(req.url);
    if(input.query) {
        var q = input.query.split('=');

        switch(q[1].toLowerCase()) {
            case 'john':
                data = '[{"name":"John Smith", "age":25, "admin":true}]'
                break;
            case 'mike':
                data = '[{"name":"Mike Doe", "age":33, "admin":false}]'
                break;
            default:
                data = '[{"name":"Unknown user", "age":0, "admin":false}]'
                break;
        }
    }
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write(data.toString());
    res.end()
}).listen(8081);