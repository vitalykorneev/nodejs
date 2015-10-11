var onLoad = function () {
    var socket = io.connect('http://localhost:8080');
    var messages = [];
    var input = document.querySelector('#field');
    var btn   = document.querySelector('#send');
    var content   = document.querySelector('#content');
    
    var submitClick = function () {
        var text = input.value;
        socket.emit('send', text);
        input.value = '';

    };

    btn.onclick = submitClick;
    
    socket.on('message', function (data) {
        messages.push(data.message);
        content.innerHTML = '';
        messages.forEach(function (item) {
            var p = document.createElement('p');
            p.innerHTML = item;
            content.appendChild(p);

        })
    });

};

window.onload = onLoad;