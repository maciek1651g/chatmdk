const makeIdRoom = require('./makeIdRoom')
const getRandomInt = require('./randomInt')
const msgGen = require('./messageGenerator')

//io.of("/").sockets.get(g.players[i])

module.exports = {
    join: (from, io, isRandom,  idRoom="") => {

        if(isRandom)
        {
            if(io.waitingClients.size>0)
            {
                try
                {
                    idRoom = Array.from(io.waitingClients)[getRandomInt(0, io.waitingClients.size)]
                    io.waitingClients.delete(idRoom)
                }
                catch
                {
                    setTimeout(this.join(from,io,isRandom,idRoom), getRandomInt(10,1000))
                }
                
            }
        }

        const clients = io.sockets.adapter.rooms.get(idRoom);
        const numClients = clients ? clients.size : 0;
        
        if(clients && clients.has(from.id))
        {
            from.send(msgGen.updateRoomMessage(idRoom, numClients))
            return
        }

        if(!isRandom || (isRandom  && numClients<2))
        {
            if(idRoom=="")
            {
                idRoom = makeIdRoom(10)
            }
            if(!io.chatTexts[idRoom])
            {
                io.chatTexts[idRoom] = []
            }
            if(isRandom && numClients==0)
            {
                io.waitingClients.add(idRoom)
            }
            

            from.join(idRoom)
            from.send(msgGen.joinMessage(idRoom,true,numClients+1,io.chatTexts[idRoom]))             //Info dla proszącego
            from.to(idRoom).send(msgGen.updateRoomMessage(idRoom,numClients+1));   //Info dla pozostałych

            console.log("User in room: "+idRoom)
        }
        else
        {
            from.send(msgGen.joinMessage(idRoom,status))
        }
    },

    leave:  (from, io, idRoom="") => {
        const clients = io.sockets.adapter.rooms.get(idRoom);

        if(clients && clients.has(from.id))
        {
            from.leave(idRoom)
            const numClients = clients ? clients.size : 0;
            from.send(msgGen.leaveRoomMessage(idRoom,true))

            if(numClients!=0)
            {
                from.to(idRoom).send(msgGen.updateRoomMessage(idRoom,numClients));
            }
            else
            {
                //io.chatTexts[idRoom] = null
                const index = io.chatTexts.indexOf(idRoom);
                if (index > -1) {
                    io.chatTexts.splice(index, 1);
                }

                if(io.waitingClients.has(idRoom))
                {
                    io.waitingClients.delete(idRoom)
                }
            }
        }
        else
        {
            from.send(msgGen.leaveRoomMessage(idRoom,false))
        }
    },

    message: (from, io, text, idRoom="") => {
        const clients = io.sockets.adapter.rooms.get(idRoom);

        if(clients && clients.has(from.id))
        {
           from.to(idRoom).send(msgGen.newMessage(idRoom, text))
        }
        else
        {
            from.send(msgGen.errorMessage("Pokój nie istnieje lub nie należysz do niego!"))
        }
    }
}