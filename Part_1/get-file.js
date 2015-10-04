var fs = require('fs');
var getFile = function (name) {
    return fs.createReadStream(name);
}

module.exports = getFile;