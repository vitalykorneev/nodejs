var events = require('events'),
    EventEmitter = events.EventEmitter;

var test = new EventEmitter();
test.on('myEvent', onMyEvent);

function onMyEvent (param) {
    console.log(param);
};

test.emit('myEvent', "Test numer one");
test.emit('myEvent', "Test numer two");