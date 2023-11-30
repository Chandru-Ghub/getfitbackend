const Subscribers = require('../model/Subscribers');



const subscribers = async (req,res)=>{


    const email = req.body.sub
    try{

        const setEmail = new Subscribers({email})
        await setEmail.save()
        res.status(200).json('Success')

    }catch(err){
        res.status(400).json(err)
    }
}



module.exports = subscribers;