let express = require('express'),
loki = require('lokijs'),
db = new loki('db.json'),
_ = require('lodash');
db.addCollection('artworks', { indices: [ 'artworkID' ] });
let Artwork = require('../schema/artworks');
let MyLists = require('../schema/mylists');

var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.schema;


router.post('/addMyLists', (req, res) => {
	const request = req.body.data;

	const mylists = new MyLists({
		mylistsID: request.mylistsID,
		accID: request.accID,
		artworkID: request.artworkID,
		artName: request.artName,	
		artStyle: request.artStyle,
		artTheme: request.artTheme,
		artPrice: request.artPrice,
		
		artistID: request.artistID,
		artistName: request.artistName,
		artworkDateCreated: request.artworkDateCreated,
		artType: request.artType,
		artCategory: request.artCategory,
		artworkImg: request.artworkImg,



		
	});
	mylists
		.save()
		.then((result) => {
			setTimeout(() => {
				const mylists =  MyLists.find({ accID: request.accID }, function(err, docs) {
					res.json(docs);
				});
			}, 1200);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/getMyLists/:id', function(req, res) {

	const id = req.params.id
	
	const mylists = MyLists.find({ accID: id }, function(err, docs) {
		
		res.json(docs);
	});
});





router.put('/editNotif/:id', function (req, res) {
	const request = func.removeUndefinedProps((req.body.data));
	let id = req.params.id;
	Notification.findByIdAndUpdate({ _id: id }, request, { useFindAndModify: false }, (err, place) => {
		if (err) return res.send(err);
		const notif = Notification.find({}, (err, docs) => {
			setTimeout(() => {
				res.json(docs);
			}, 1200);
		});
	});
});


router.delete('/deleteMyLists/:id',function (req, res)  {
	console.log(req.params.id,'sadsad')
	let id = req.params.id;
	let mylists_ID = req.params.mylistsID;

	MyLists.deleteOne({ _id: id }, (err, place) => {
		if (err) return res.send(err);
		const mylists = MyLists.find({ mylistsID: mylists_ID }, (err, docs) => {
			setTimeout(() => {
				res.json(docs);
			}, 1200);
		});
	});
});





module.exports = router;
