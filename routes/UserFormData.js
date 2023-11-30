const getCustomer = require('../controller/userFormDataCtrl');

const router = require('express').Router();
const path = require('path')
const multer = require('multer');
const UserDate = require('../model/UserDate');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images')
    },
    filename: ( req,file,cb)=>{
        cb(null,file.fieldname+'_'+Date.now()+ path.extname(file.originalname))
    }
    
})

const upload = multer({
storage:storage
})


// GET All subscribers route
// router.post('/',getUserFormData)



router.post('/',upload.single('file'),async(req,res)=>{
    
    let pgm = req.body.program.split(',')
    const {program , ...data} = req.body
    if(req.file == undefined) img = ''
    else{ img = req.file.filename}
    const userData = {...data,image:img,program:pgm}
    console.log(userData);
    
    const UserFormDetails = new UserDate(userData) 
    await UserFormDetails.save();
    console.log('success')
    res.status(201).json('success')


    // console.log(req.file.filename);
    // file:req.file.filename
    // const {firstname,lastname,email,gender,technologies,course} = req.body  
    // let tech = technologies.split(',')

})

router.get('/getcustomer/:id',getCustomer)

module.exports = router;