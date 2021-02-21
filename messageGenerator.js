module.exports = {
    errorMessage: (description) => {
        return '{"cmd":"error", '+description+'}'
    },

    joinMessage: (idRoom, status, count=0, texts = []) => {
        let msg = '{"cmd":"join", "idroom":"'+idRoom+'", "status":'+status

        if(status)
        {
            msg = msg + ', "count":'+count+', "texts": ' + JSON.stringify(texts)
        }

        return msg+'}'
    }
}