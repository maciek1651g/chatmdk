const { exception } = require('console');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000
const msgGen = require('./messageGenerator')
const rm = require('./roomManager')
io.waitingClients = new Set()
io.chatTexts = []

//Routing
app.use(express.static('client'))


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
	console.log('A user connected');
	let idRoom = ''

	if(socket.handshake.query.idroom)
	{
		idRoom = socket.handshake.query.idroom
		//throw new Error("Dodanie użyszkodnika do pokoju(od razu)")
		rm.join(socket,io,false, idRoom)
	}

	socket.on('message', (msg) => 
	{
        console.log(msg);
		let data = ''

		try {
			data = JSON.parse(msg)
		} catch(error) {
			socket.send(msgGen.errorMessage("Nie udało się rozczytać wiadomości."))
		}

		if(data!='')
		{
			let isDataValid = true

			switch(data.cmd)
			{
				case 'join':
					if(typeof(data.israndom)==="boolean")
						rm.join(socket,io,data.israndom, data.idroom?data.idroom:'')
					else
						isDataValid = false
					break
				case 'leave':
					rm.leave(socket,io, data.idroom?data.idroom:'')
					break
				case 'msg':
					if(data.text && data.text!='')
						rm.message(socket,io,data.text, data.idroom?data.idroom:'')
					else
						isDataValid = false
					break
				default:
					isDataValid = false
			}

			if(!isDataValid)
			{
				socket.send(msgGen.errorMessage("Nie rozpoznano polecenia lub podano niepełne/niepoprawne dane."))
			}
		}
    });

	socket.on('disconnecting', function () 
	{
		let rooms = Array.from(socket.rooms)
		for(var i=1;i<rooms.length;i++)
		{
			rm.leave(socket,io,rooms[i])
		}
	});

	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function () 
	{
		console.log('A user disconnected');
	});
 });

 //Run server
 http.listen(port, function() {
	console.log('listening on *:'+port);
 });
