var url = require('url'),
    request = require('request'),
    express = require('express'),
    ejs     = require('ejs');

var myIP = '46.72.235.252';

app = express();
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.listen(8080);
console.log('Node server listening on port: 8080');


app.get('/google/feeds/for/:search', function (req, res) {
    var search = req.params.search;
    var options = {
        protocol : 'http',
        host : 'ajax.googleapis.com',
        pathname : '/ajax/services/feed/find',
        query : {
            v : '1.0',
            userip : myIP,
            q : search
        }
    };
    var queryUrl = url.format(options); 
    request(queryUrl, function (err, response, body) {
        var feeds = JSON.parse(body);
        res.render('google-search.ejs', {
            feeds : feeds.responseData,
            keyword: search
        });
        res.end();
    })
});
app.get('/yandex/:cnt/news/for/:search', function (req, res) {
    var search  = req.params.search,
        cnt     = req.params.cnt;
    var options = {
        protocol : 'http',
        host : 'ajax.googleapis.com',
        pathname : '/ajax/services/feed/load',
        query : {
            v : '1.0',
            userip : myIP,
            num : cnt,
            q : 'http://news.yandex.ru/' + search + '.rss'
        }
    };
    var queryUrl = url.format(options); 
    request(queryUrl, function (err, response, body) {
        var feeds = JSON.parse(body);
        res.render('yandex-news.ejs', {
            news: feeds.responseData.feed,
            category: search,
            count: cnt
        });
        res.end();
    })
});