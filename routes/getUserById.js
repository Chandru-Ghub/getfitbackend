const getUserById = require('../controller/userCtrl');
const router = require('express').Router();

// subscribers route
// router.get('/',getUserById)

router.get('/:id',getUserById)

module.exports = router;