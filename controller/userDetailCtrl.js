const Subscribers = require("../model/Subscribers")
const Users = require("../model/Users")

// GET all subscribers
const getSubscribers = async (req,res)=>{

    // console.log('find');
    try{

        const subscribers = await Subscribers.find()
        res.status(200).json(subscribers)

    }catch(err){
        res.status(400).json(err)
    }
}


// GET all users
const getUser = async (req,res)=>{

    // const {q} = req.query
    // console.log(q)

    // const keys = ['name','lastName','email']
    // const filt=(data)=>{
    //     return data.filter(item => 
    //     keys.some(key => 
    //     item[key].toLowerCase().includes(q.toLowerCase())) )
    // }
    try{

        const ourUser = await Users.find()

        // FILTER using some method

        // res.status(200).json(filt(ourUser))
        res.status(200).json(ourUser)

    }catch(err){
        res.status(400).json(err)
    }
}


// DELETE USER 
const deleteUser = async (req,res)=>{

    const id = req.params.id
    // console.log(id,'>>>');
    try{

        const users = await Users.findByIdAndDelete(id)
        res.status(200).json('User has been deleted!')

    }catch(err){
        res.status(400).json(err)
    }
}

// DELETE SUBSCRIBER 

const deleteSubscriber = async (req,res)=>{

    const id = req.params.id
    // console.log(id,'>>>');
    try{

        const SUBSCRIBER = await Subscribers.findByIdAndDelete(id)
        res.status(200).json('Subscriber has been deleted!')

    }catch(err){
        res.status(400).json(err)
    }
}


// UPDATE USER

const updateUser = async (req,res)=>{

    const id = req.params.id
    const {name,lastName,email} = req.body

    try{

        const updatedUser = await Users.findByIdAndUpdate({_id:id},{
    name,lastName,email})
        res.status(200).json('User Details has been updated')

    }catch(err){
        res.status(400).json(err)
    }
}

module.exports = {getSubscribers,getUser,updateUser,deleteUser,deleteSubscriber}