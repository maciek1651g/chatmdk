module.exports = {
    errorMessage: (description) => {
        return '{"cmd":"error", "description":"'+description+'"}'
    },

    joinMessage: (idRoom, status, count=0, texts = []) => {
        let msg = '{"cmd":"join", "idroom":"'+idRoom+'", "status":'+status

        if(status)
        {
            msg = msg + ', "count":'+count+', "texts": ' + JSON.stringify(texts)
        }

        return msg+'}'
    },

    updateRoomMessage: (idRoom, count) => {
        return '{"cmd":"updateRoom", "idroom":"'+idRoom+'", "count":'+count+'}'
    },

    leaveRoomMessage: (idRoom, status) => {
        return '{"cmd":"leave", "idroom":"'+idRoom+'", "status":'+status+'}'
    },

    newMessage: (idRoom, text) => {
        return '{"cmd":"msg", "idroom":"'+idRoom+'", "text":"'+text+'"}'
    }
}