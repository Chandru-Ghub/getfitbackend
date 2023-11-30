const jwt = require('jsonwebtoken');
const Users = require('../model/Users');
const JWT_KEY = process.env.JWT_KEY


const verifyJWT = async (req,res)=>{

    // console.log(req.body.token);
    const token = req.body.token

    try{
        if(token){
                jwt.verify(token,JWT_KEY, async (err,user)=>{
                    if(err){
                        return res.status(403).json('invalid token')
                    }   
                   
                        try{
                            
                        const loginUser  = await Users.findOne({email:user.email})
                        const {password , ...data} = loginUser._doc
                        // console.log(data);
                        res.status(200).json(data)  
                        }
                        catch(err){
                            // console.log(err);
                            res.status(400).json('check your connection')  
                        }
                        
                })
                }
        }

    catch(err){
            // console.log('you are not authenticated');
            res.status(err).json('you are not authenticated')
        }
   
    }



module.exports = verifyJWT;