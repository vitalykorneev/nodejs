var warn = function(msg) {
    console.log('Warning: ', msg);
};

var info = function(msg) {
    console.info('Info: ', msg);
};

exports.warn = warn;
exports.info = info;