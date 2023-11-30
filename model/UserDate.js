const mongoose = require('mongoose');
const UserForm = new mongoose.Schema({

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
    dateOfBirth:{
        type:Date,
        required:true,
    },
    bmi:{
        type:Number,
        default:false
    },
    image:{
        type:String,
        default:false
    },
    gender:{
        type:String,
        default:false
    },
    plan:{
        type:String,
        default:false
    },
    program:{
        type:Array,
        default:false
    },
},{
    timestamps:true
})

module.exports = mongoose.model('UsersData',UserForm)