const cloudinary = require('../config/Cloudinary');

exports.uploadImage = async (file) =>{
    try {
        if(!file){
            console.log("File is not  avaiable");

        }

        const result = await cloudinary.uploader.upload(file);

        if (!result) {
            console.log("Result is not found");
        }

        return result.secure_url;

    } catch (error) {
        console.log("Error in uploading image ", error);
    }
}