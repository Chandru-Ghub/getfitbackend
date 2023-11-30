const Users = require("../model/Users");

// GET user Details

const getUserById = async (req,res)=>{
    const id = req.params.id

    try{
        const user = await Users.findById(id)
        res.status(200).json(user)

    }catch(err){
        res.status(400).json(err)
    }
}



module.exports = getUserById;