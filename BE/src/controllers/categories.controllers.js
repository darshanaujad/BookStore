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
        const exisitingCategory = await Category.findOne({category_name});

        if(exisitingCategory){
            return res.status(409).json({message:"This category name is already exists"});
        }
        try{
            const result = await cloudinary.uploader.upload(file);
            const url = result.secure_url;
            console.log("Find" + url);

        }catch(err){
            console.log("The error in uploading image");
        }
        
    }catch(err){

    }
}

