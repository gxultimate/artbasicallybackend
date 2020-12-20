const mongoose = require('mongoose');


const artshareSchema = mongoose.Schema({

    shareID:{
        type:String
    },
    userID: {
        type: String

    },
    social: {
        type: String

    },
    dateTime:{
        type:String
    }

})


module.exports = artshares = mongoose.model('artshareSchema', artshareSchema);