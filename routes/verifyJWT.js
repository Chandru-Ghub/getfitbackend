const verifyJWT = require('../controller/verifyJWTctrl');

const router = require('express').Router();

// verification route
router.post('/',verifyJWT)




module.exports = router;