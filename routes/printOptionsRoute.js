let express = require('express'),
    router = express.Router(),
    PrintOpt = require('../schema/printingOptions.js')
 



    
router.post('/addPrintOpt', (req, res) => {
    const request = req.body.data;
    
    const printOpt = new PrintOpt({
        optionID : request.optionID,
        printCat : request.printCat,
        printOptions : request.printOptions,
      
    })
    printOpt.save().then(result => {
        setTimeout(() => {
        const printOpt = PrintOpt.find({} , function(err, docs) {
            res.json(docs)
           
        })
        }, 1200);
    })
.catch(err => {
        console.log(err)
})
})


router.get('/getPrintOpt', (req, res) => {
    const printopt = PrintOpt.find({} , function(err, docs) {
        res.json(docs)
    })
 
})


router.post('/editPrintOpt', function (req, res) {
    const request = req.body.data;
  
    let query = {optionID : request.optionID}
   
    PrintOpt.findOneAndUpdate(query , request, function(err, place) {
      if(err){
        return res
        .status(500)
        .send({error: "unsuccessful"})
      }
      const printopt = PrintOpt.find({} , function(err, docs) {
        res.json(docs)
    })
    })
})





module.exports = router;