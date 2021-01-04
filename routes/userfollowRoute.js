let express = require('express'),
    router = express.Router(),
    UserFollow = require('../schema/userfollow.js')
 



    
router.post('/addFollow', (req, res) => {
    const request = req.body.data;
    const userfollow = new UserFollow({
        followID : request.followID,
        followerID : request.followerID,
        followingID : request.followingID,
    
    })
    userfollow.save().then(result => {
        setTimeout(() => {
        const feedB = UserFollow.find({} , function(err, docs) {
            res.json(docs)
        })
        }, 1200);
    })
.catch(err => {
        console.log(err)
})
})

// router.get('/getFollow/:id', function(req, res) {

// 	const id = req.params.followerID
// 	console.log(id,'sadsa')
// 	const follow = UserFollow.find({ followerID: id }, function(err, docs) {
		
// 		res.json(docs);
// 	});
// });

router.get('/getFollow', (req, res) => {
    const follow = UserFollow.find({} , function(err, docs) {
        res.json(docs)
    })
 
})



router.delete('/deleteFollow/:id/:followid',function (req, res)  {
	
    let id = req.params.id;
    let follow_ID = req.params.followid
	

	UserFollow.deleteOne({ _id: id }, (err, place) => {
		if (err) {
            res.send(err);}
            else{

         
		const follow = UserFollow.find({ followID: follow_ID }, (err, docs) => {
           
			setTimeout(() => {
				res.json(docs);
			}, 1200);
        });
    }
	});
});

// router.delete('/deleteMyLists/:id',function (req, res)  {
// 	console.log(req.params.id,'sadsad')
// 	let id = req.params.id;
// 	let mylists_ID = req.params.mylistsID;

// 	MyLists.deleteOne({ _id: id }, (err, place) => {
// 		if (err) return res.send(err);
// 		const mylists = MyLists.find({ mylistsID: mylists_ID }, (err, docs) => {
// 			setTimeout(() => {
// 				res.json(docs);
// 			}, 1200);
// 		});
// 	});
// });




module.exports = router;