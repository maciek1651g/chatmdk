const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000

//Routing
app.use(express.static('client'))


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
	console.log('A user connected');

	socket.on('message', (msg) => {

        console.log(msg);
    });

	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function () 
	{
		console.log('A user disconnected');
	});
 });

 //Run server
 http.listen(port, function() {
	console.log('listening on *:3000');
 });
