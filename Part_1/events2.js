var Event = require('events').EventEmitter,
    logger = new Event(),
    users = [], msgs = [];

logger.on('addUser', function (name) {
    console.log('Add new user:' + name);
    users.push(name);
});

logger.on('addMsg', function (msg) {
    console.log('Add new msg:' + msg);
    msgs.push(msg);
});
logger.on('getUsers', function () {
    console.log('-----\nUsers:\n-----');
    console.log(users.join('\n'));
});
logger.on('getMsgs', function () {
    console.log('-----\nMsgs:\n-----');
    console.log(msgs.join('\n'));
});

logger.emit('addUser', 'John');
logger.emit('addMsg', 'Hello from John');


logger.emit('addUser', 'Mike');
logger.emit('addMsg', 'Hello from Mike');
logger.emit('getUsers');
logger.emit('getMsgs');

