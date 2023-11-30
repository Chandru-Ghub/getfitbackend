const {signUp,signIn} = require('../controller/authCtrl');

const router = require('express').Router();

// singUp (Register) route
router.post('/register',signUp)

// signIn (Login) route
router.post('/login',signIn)




module.exports = router;