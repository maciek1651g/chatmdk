const makeIdRoom = require('./makeIdRoom')
const getRandomInt = require('./getRandomInt')
const msgGen = require('./messageGenerator')

module.exports = {
    join: (from, io, isRandom,  idRoom="") => {

        if(isRandom)
        {
            if(io.waitingClients.length>0)
            {
                let r = getRandomInt(0, io.waitingClients.length)
                idRoom = io.waitingClients.splice(r, 1)[0]
            }
        }

        const clients = io.sockets.adapter.rooms.get(idRoom);
        const numClients = clients ? clients.size : 0;
        
        if(clients && clients.has(from.id))
        {
            from.send('{"cmd":"join", "status":true}')
            return
        }

        if(!isRandom || (isRandom  && numClients<2))
        {
            if(idroom || idroom=="")
            {
                idRoom = makeIdRoom(10)
            }
            if(!io.chatTexts[idRoom])
            {
                io.chatTexts[idRoom] = []
            }
            if(isRandom && numClients==0)
            {
                io.waitingClients.push(idRoom)
            }


            from.join(idRoom)
            from.send()             //Info dla proszącego
            io.to(idRoom).send();   //Info dla pozostałych
        }
        else
        {
            from.send('{"cmd":"join", "status":false}')
        }
    }
}