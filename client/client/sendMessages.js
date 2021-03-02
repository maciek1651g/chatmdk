//import {transmitMessage} from './connect.js'

function joinRoom(idRoom, isRandom){
    if(idRoom && typeof(isRandom)==='boolean')
    {
        const msg = '{"cmd":"join", "idroom":"'+idRoom+'", "israndom":'+isRandom+'}'
        transmitMessage(msg)
        return true
    }
    
    return false
}

function leaveRoom(idRoom){
    if(idRoom)
    {
        const msg = '{"cmd":"leave", "idroom":"'+idRoom+'"}'
        transmitMessage(msg)
        return true
    }
    
    return false
}

function sendMessage(idRoom, text){
    if(idRoom && text && text!='')
    {
        const msg = '{"cmd":"msg", "idroom":"'+idRoom+'", "text":"'+text+'"}'
        transmitMessage(msg)

        return true
    }
    
    return false
}

//export {joinRoom, leaveRoom, sendMessage}