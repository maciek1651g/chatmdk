const { exception } = require('console');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000
const msgGen = require('./messageGenerator')
const rm = require('./roomManager')
io.waitingClients = []
io.chatTexts = []

//Routing
app.use(express.static('client'))


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
	console.log('A user connected');
	let idroom = ''

	if(socket.handshake.query.idroom)
	{
		idroom = socket.handshake.query.idroom
		//throw new Error("Dodanie użyszkodnika do pokoju(od razu)")
		console.log("Dodanie użyszkodnika do pokoju(od razu)")
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
					break
				case 'msg':
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
