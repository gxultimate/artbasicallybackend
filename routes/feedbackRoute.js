let express = require('express'),
    router = express.Router(),
    Feedback = require('../schema/feedback.js')
 



    
router.post('/addFeedback', (req, res) => {
    const request = req.body.data;
    const feedback = new Feedback({
        feedbackID : request.feedbackID,
        accID : request.accID,
        orderID : request.orderID,
        artworkID : request.artworkID,
        date : request.date,
        feedbackNote : request.feedbackNote,
        sender : request.sender,
    })
    feedback.save().then(result => {
        setTimeout(() => {
        const feedB = Feedback.find({} , function(err, docs) {
            res.json(docs)
        })
        }, 1200);
    })
.catch(err => {
        console.log(err)
})
})


router.get('/getFeedback', (req, res) => {
    const feedback = Feedback.find({} , function(err, docs) {
        res.json(docs)
    })
 
})


router.post('/editFeedback', function (req, res) {
    const request = req.body.data;
  
    let query = {catID : request.catID}
 
    Feedback.findOneAndUpdate(query , request, function(err, place) {
      if(err){
        return res
        .status(500)
        .send({error: "unsuccessful"})
      }
      const feedback = Feedback.find({} , function(err, docs) {
        res.json(docs)
    })
    })
})

module.exports = router;