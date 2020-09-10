const  mongoose  = require('mongoose')
// const ObjectID = mongoose.Schema.ObjectID;
const notifSchema = mongoose.Schema({
    notifID: {
        type: String,
        
    },
    notifSender : {
        type: String,
       
    },
    notifRecipient : {
        type: String,
        
    },
    notifSubject : {
        type: String,
        
    },
    notifMsg : {
        type: String,
       
    },
    notifDT : {
        type: String,
        
    },
    notifStatus : {
        type: String,
        
    }
 
})


module.exports = Notif = mongoose.model('notifSchema' , notifSchema);