var socket = io();

window.onload = function() {
   socket.emit('connection');
}
