const  mongoose  = require('mongoose')

const printOptionsSchema = mongoose.Schema({
    optionID : {
        type: String,
       
    },
    printCat : {
        type: String,
       
    },
    printOptions:{
        type:String
    }

})


module.exports = PrintOptions = mongoose.model('printOptionsSchema' , printOptionsSchema);