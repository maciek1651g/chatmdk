var socket = io({ query: {"idroom": "hksdf74"} });

socket.on('connect', (message) => {
	console.log("Connected")
})

socket.on('disconnect', (reason) => {
	console.log("Disconnected")
	socket.close()
});

socket.on('connect_error', (err) => {
	console.log("Error: "+err.message)
	socket.close()
})

function transmitMessage(message) 
{
	socket.send( message );
}

socket.on('message', data => {
	console.log(data)
})



