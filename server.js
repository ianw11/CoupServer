/* Requirements from Node */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Route handler for when '/' is requested
app.get('/', function(req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.get('/client.js', function(req, res) {
   res.sendFile(__dirname + '/client.js');
});



io.on('connection', function(socket) {
   console.log("io connection");

   socket.on('connection', function() {
      console.log('socket connection');
   });
});

// Connect server to port 4000
http.listen(4000, function() {
   console.log("Server started -- Listening on *.4000");
});
