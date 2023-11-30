const {getSubscribers,getUser, deleteUser,deleteSubscriber, updateUser} = require('../controller/userDetailCtrl');
const router = require('express').Router();

// GET All subscribers route
router.get('/subscribers',getSubscribers)


// GET All Users route
router.get('/users',getUser)

// DELETE  Users route
router.delete('/deleteUser/:id',deleteUser)

// DELETE Subscriber route
router.delete('/deleteSubscriber/:id',deleteSubscriber)

// UPDATE All Users route
router.put('/updateUsers/:id',updateUser)

module.exports = router;