const subscribers = require('../controller/subscriberCtrl');
const Subscribers = require('../model/Subscribers');
const router = require('express').Router();

// subscribers route
router.post('/',subscribers)




module.exports = router;