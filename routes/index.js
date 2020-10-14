const accountsRoute = require('./accountsRoute'),
	artworkRoute = require('./artworkRoute'),
	categoryRoute = require('./categoryRoute'),
	orderRoute = require('./orderRoute'),
	transactionRoute = require('./transactionRoute'),
	mylistRoute = require('./mylistsRoute'),
	notifRoute = require('./notifRoute'),
	feedbackRoute = require('./feedbackRoute'),
	express = require('express'),
	router = express.Router();
router.use('/', accountsRoute);
router.use('/', artworkRoute);
router.use('/', categoryRoute);
router.use('/', orderRoute);
router.use('/', transactionRoute);
router.use('/', mylistRoute);
router.use('/', notifRoute);
router.use('/', feedbackRoute);
module.exports = router;
