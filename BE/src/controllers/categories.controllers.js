const Category = require('../models/Category');
const cloudinary = require('../config/Cloudinary');

exports.addCategory = async (req , res) =>{
    try{
        const {category_name , file , description} = req.body

        console.log('The category_name is :' + category_name);
        console.log('The file is :' + file);
        console.log('The description is :' + description);

        if(!category_name || !file || !description){
            return res.status(400).json({message:"credentials requires"});
        }
        
    }catch(err){

    }
}

