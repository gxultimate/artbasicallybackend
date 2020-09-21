const mongoose = require('mongoose');

const mylistSchema = mongoose.Schema({
    mylistsID:{
        type:String
    },
	accID: {
		type: String
    },
	artworkID : {
        type: String,
        
    },
    artName : {
        type: String,
        
    },
   
    artStyle : {
        type: Array,
        
    },
    artTheme : {
        type: Array,
        
    },
    artPrice : {
        type: String,
        
    },
    artistID : {
        type : String
    },
    artistName : {
        type : String
    },
    artworkDateCreated : {
        type : String
    },
    artType: {
        type : String
    },
    artCategory : {
        type: Array
    },
    artworkImg :{
        type: String
    },
    
    

});

module.exports = User = mongoose.model('mylistSchema', mylistSchema);