const accountsRoute = require('./accountsRoute'),
	artworkRoute = require('./artworkRoute'),
	categoryRoute = require('./categoryRoute'),
	orderRoute = require('./orderRoute'),
	transactionRoute = require('./transactionRoute'),
	mylistRoute = require('./mylistsRoute'),
	notifRoute = require('./notifRoute'),
	express = require('express'),
	router = express.Router();
router.use('/', accountsRoute);
router.use('/', artworkRoute);
router.use('/', categoryRoute);
router.use('/', orderRoute);
router.use('/', transactionRoute);
router.use('/', mylistRoute);
router.use('/', notifRoute);
module.exports = router;
