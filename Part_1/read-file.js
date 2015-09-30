var fs = require('fs');
// var content = fs.readFileSync('file.txt');
var content = fs.readFile('file.txt', function(err, file) {
    console.log(decodeURIComponent(file) );
});
console.log('End read file');
