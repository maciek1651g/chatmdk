let getURLParam = require('./getURLParam')
let io = require('socket.io-client')
let mS = require('./messagesService')
var socket = io({ query: {"idroom": getURLParam("idroom")} });

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
			mS.joinMessage(data)
			break
		case 'leave':
			mS.leaveMessage(data)
			break
		case 'updateRoom':
			mS.updateMessage(data)
			break
		case 'msg':
			mS.msgMessage(data)
			break
		case 'error':
			mS.errorMessage(data)
			break
		default:
			//Info że nie rozpoznano kodu wiadomości
	}
})

function transmitMessage(message) 
{
	socket.send( message )	
}

module.exports = transmitMessage
