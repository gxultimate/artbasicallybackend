var express = require('express');
var router = express.Router();
var  Notification = require('../schema/notif');
var mongoose = require('mongoose');
var Schema = mongoose.schema;
var uuidv4 = require('uuid');




router.post('/addNotif', (req, res) => {
	const request = req.body.data;

	const notif = new  Notification({
		notifID: request.notifID,
		notifSender: request.notifSender,
		notifRecipient: request.notifRecipient,
		notifSubject : request.notifSubject ,
		notifMsg: request.notifMsg,
		notifDT: request.notifDT,
		notifStatus: request.notifStatus,
		
	});
	notif
		.save()
		.then((result) => {
			setTimeout(() => {
				const notif =  Notification.find({ notifSender: request.notifSender }, function(err, docs) {
					res.json(docs);
				});
			}, 1200);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/getNotif/:id', async (req, res) => {
    const id = req.params.id;
    await Notification.find({ notifID: id }, (err, docs) => {
        if (docs.length !== 0) {
            res.json(docs);
        } else {
            Notification.find({ notifSender: id }, (err, doc) => {
                if (doc.length !== 0) {
                    res.json(doc);
                } else {
                    Notification.find({ notifRecipient: id }, (err, docs2) => {
                        res.json(docs2);
                    });
                }
            });
        }
    });
});


router.get('/getAllNotif', async (req, res) => {
	await Notification.find({ }, (err, docs) => {
		if (docs.length !== 0) {
			res.json(docs);
		} 
		
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

router.put('/editNotif', (req, res) => {
	const request = req.body.data;
	query = { notifID: request.notifID };
	let status = '';
	if (request.status === 'unread') {
		status += 'read';
	} else {
		status += 'unread';
	}
	Notification.findByIdAndUpdate(
		{ _id: request.id },
		{ notifStatus: request.status },
		{ useFindAndModify: false },
		(err, place) => {
			if (err) return res.send(err);

			setTimeout(() => {
				Notification.find({ notifID: request.notif }, function(err, docs) {
					res.json(docs);
				});
			}, 1200);
		}
	);
})



module.exports = router;
