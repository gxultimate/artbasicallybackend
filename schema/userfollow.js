const mongoose = require('mongoose')

const userfollowSchema = mongoose.Schema({

    followID:{
        type:String
    },
    followerID: {
        type: String

    },
    followingID: {
        type: String

    }

})


module.exports = User = mongoose.model('userfollowSchema', userfollowSchema);