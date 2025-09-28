const Category = require('../models/Category');
const cloudinary = require('../config/Cloudinary');

exports.addCategory = async (req, res) => {
    try {
        const { category_name, file, description } = req.body

        console.log('The category_name is :' + category_name);
        console.log('The file is :' + file);
        console.log('The description is :' + description);

        if (!category_name || !file || !description) {
            return res.status(400).json({ message: "credentials requires" });
        }
        const exisitingCategory = await Category.findOne({ category_name });

        if (exisitingCategory) {
            return res.status(409).json({ message: "This category name is already exists" });
        }
        let url = "";
        try {
            const result = await cloudinary.uploader.upload(file);
            url = result.secure_url;
            console.log("Find" + url);

        } catch (err) {
            console.log("The error in uploading image" + err);
        }
        const category = new Category({
            category_name,
            image: url,
            description
        })
        if (!category) {
            return res.status(400).json({ message: "category not added successfully" });
        }
        await category.save()
        res.status(200).json({ message: "category added successfully", category })
    } catch (err) {
        console.log("Error in registering category", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getCategory = async (req, res) =>{
    try{
        const category = await Category.find({});
        if(!category){
            return res.status(404).json({message:"category is not found"});
        }
        
        res.status(200).json({message:"category stored successfully" , category})
    }catch(err){
        console.log("Error in getCategory", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getCategoryById = async (req,res) =>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"Id not found"});
        }
        const category = await Category.findById(id);
        if(!category){
            return res.status(404).json({message:"categoryId not found"});
        }
        res.status(200).json({message:"category fetched" , category});
    }catch(err){
        console.log("Error in getCategoryById", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteCategoryById = async (req,res) =>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"id not found"});
        }
        const category = await Category.findByIdAndDelete(id);
        if(!category){
            return res.status(404).json({message:"categoryId not found"});
        }
        res.status(200).json({message:"Category deleted successfully" , category});

    }catch(err){
        console.log("Error in deleteCategoryById", err);
        res.status(500).json({ message: "Internal server error" });
    }
}