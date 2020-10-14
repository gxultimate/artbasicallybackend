const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({

    feedbackID:{
        type:String
    },
    accID: {
        type: String

    },
    orderID: {
        type: String

    },
    artworkID:{
        type:String
    },
    date: {
        type: String

    },
    feedbackNote: {
        type: String
    }
})


module.exports = User = mongoose.model('feedbackSchema', feedbackSchema);
