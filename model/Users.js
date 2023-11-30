const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        // unique:true
    },
    lastName:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Users',UsersSchema)