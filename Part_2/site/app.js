var conf = require('./config');
var path = require('path');
var http = require('http');
// var routes = require('./routes');
var express = require('express');

var app = express();
app.engine('ejs', require('ejs-locals'));
app.set('env', 'development');
app.set('views', path.join(__dirname, conf.get('app-view')));
app.set('view engine', conf.get('app-engine'));
app.use(express.logger(conf.get('log-level')));
//app.use(app.router);
app.use(express.json());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    secret : conf.get('session:secret'),
    key : conf.get('session:key'),
    cookie : conf.get('session:cookie')
}));
app.use(express.static(path.join(__dirname, conf.get('app-static'))));

require('./routes')(app);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if ('development' == app.get('env')) {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        console.log(err.status);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'Ошибка'
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'Ошибка'
    });
});

http.createServer(app).listen(conf.get('port'), function () {
    console.log('Express server listening on port: ' + conf.get('port'));
})