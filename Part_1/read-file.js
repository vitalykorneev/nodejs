var fs = require('fs');
var content = fs.readFileSync('file.txt');
console.log(content);
console.log('End read file');
