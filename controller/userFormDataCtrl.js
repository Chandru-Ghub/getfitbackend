// const Subscribers = require("../model/Subscribers")
// const Users = require("../model/Users")

const UserDate = require("../model/UserDate")


const getCustomer = async (req,res)=>{

    const email = req.params.id    

    // console.log(req.file.fileName);
    try{

        const customer = await UserDate.findOne({email})
        res.status(200).json(customer)

    }catch(err){
        res.status(400).json(err)
    }
}

module.exports = getCustomer