var socket = io({ query: {"idroom": "hksdf74"} });

socket.on('connect', (message) => 
{
	console.log("Connected")

	//wywołanie funkcji odpowiedzialnej za wyświetlenie stanu połączenia
})

socket.on('disconnect', (reason) => 
{
	console.log("Disconnected")
	socket.close()

	//wywołanie funkcji odpowiedzialnej za wyświetlenie stanu połączenia
});

socket.on('connect_error', (err) => 
{
	console.log("Error: "+err.message)
	socket.close()

	//wywołanie funkcji odpowiedzialnej za wyświetlenie błędu
})


socket.on('message', data => 
{
	console.log(data)

	try {
		data = JSON.parse(data)
	} catch(error) {
		//wywołanie funkcji odpowiedzialnej za wyświetlenie błędu
	}

	switch(data.cmd)
	{
		case 'join':
			break
		case 'leave':
			break
		case 'updateRoom':
			break
		case 'msg':
			break
		case 'error':
			break
		default:
	}
})

function transmitMessage(message) 
{
	socket.send( message )	
}


