const express =require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.Port || 3300;
app.use(express.static('public'))
// Routes
const subRoute = require('./routes/subscribe')
const auth = require('./routes/auth');
const verifyJWT = require('./routes/verifyJWT')
const getUserById = require('./routes/getUserById')
const userDetails = require('./routes/userDetails')
const userFormData = require('./routes/UserFormData')

// Model Schema
const Users = require('./model/Users');

app.listen(PORT,()=>{
    console.log('server running in port ',PORT);
})


// Middelwares
app.use(express.json())
app.use(cors())
app.use('/auth',auth)
app.use('/sub',subRoute)
app.use('/getUser',verifyJWT)
app.use('/getUserById', getUserById)
app.use('/admin', userDetails)
app.use('/userFormData', userFormData)

// mongoDB coonnection
mongoose.connect(process.env.DB)
.then(res => console.log('DB connected sucessfully'))
.catch(err => console.log(err))