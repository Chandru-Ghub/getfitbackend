const Users = require('../model/Users');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY

// New Registeration

const signUp = async (req,res)=>{
    const {name,email,lastName,password} = req.body;
    try{


        // check user already exist
        const checkUserName = await Users.findOne({name})
        if(checkUserName) return res.json('name already exist')

        // // check email already exist
        const checkUserEmail = await Users.findOne({email})
        if(checkUserEmail) return res.json('Email already exist')

        // create New user
       
        const hashPassword = await bcrypt.hash(password,10)
        const setUser = new Users({...req.body,password:hashPassword})
        await setUser.save()
        res.status(200).json('Registerd Sucessfully')

    }catch(err){
        console.log(err.response);
        res.status(400).json(err)
    }
}


// Login User

const signIn = async (req,res)=>{

    const {name,password} = req.body;
    const user = await Users.findOne({name})
    try{


        // check user exist
        const user = await Users.findOne({name})
        if(!user) return res.json('user name not found!')

        // // check password
        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword) return res.json('wrong credential!')

        // return user details without password
        if(user && checkPassword){
            const token = jwt.sign({id:user._id,email:user.email,name:user.name},JWT_KEY)
            const {password, ...others} = user._doc
            res.json({'data': others,'token':token,'status':'success'})
        }

    }catch(err){
        console.log(err.response);
        res.status(400).json(err)
    }
}


module.exports = {signIn,signUp}