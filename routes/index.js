const router = require('./accountsRoute');
const accountsRoute = require('./accountsRoute'),
	artshareRoute = require('./artshareRoute'),
	artworkRoute = require('./artworkRoute'),
	categoryRoute = require('./categoryRoute'),
	orderRoute = require('./orderRoute'),
	transactionRoute = require('./transactionRoute'),
	mylistRoute = require('./mylistsRoute'),
	notifRoute = require('./notifRoute'),
	feedbackRoute = require('./feedbackRoute'),
	userfollowRoute = require('./userfollowRoute'),
	printOptionRoute = require('./printOptionsRoute');
(express = require('express')), (router = express.Router());
router.use('/', accountsRoute);
router.use('/', artshareRoute);
router.use('/', artworkRoute);
router.use('/', categoryRoute);
router.use('/', orderRoute);
router.use('/', transactionRoute);
router.use('/', mylistRoute);
router.use('/', notifRoute);
router.use('/', feedbackRoute);
router.use('/', printOptionRoute);
router.use('/', userfollowRoute);
module.exports = router;
