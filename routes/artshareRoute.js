let express = require('express'),
    router = express.Router(),
    ArtShare = require('../schema/artshares.js')
 



    
router.post('/addartShare', (req, res) => {
    const request = req.body.data;
    const artshare = new ArtShare({
        shareID : request.shareID,
        userID : request.userID,
        social : request.social,
        dateTime : request.dateTime,
    
    })
    artshare.save().then(result => {
        setTimeout(() => {
        const aShare = ArtShare.find({} , function(err, docs) {
            res.json(docs)
        })
        }, 1200);
    })
.catch(err => {
        console.log(err)
})
})






router.get('/getartShare', (req, res) => {
    const artshares = ArtShare.find({} , function(err, docs) {
        res.json(docs)
    })
 
})



// router.delete('/deleteFollow/:id/:followid',function (req, res)  {
	
//     let id = req.params.id;
//     let follow_ID = req.params.followid
// 	console.log(req.params,'sadsad')

// 	UserFollow.deleteOne({ _id: id }, (err, place) => {
// 		if (err) {
//             res.send(err);}
//             else{

         
// 		const follow = UserFollow.find({ followID: follow_ID }, (err, docs) => {
//             console.log(docs,'docs')
// 			setTimeout(() => {
// 				res.json(docs);
// 			}, 1200);
//         });
//     }
// 	});
// });




module.exports = router;