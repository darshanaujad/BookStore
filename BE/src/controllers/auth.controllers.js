const User =  require('../models/User');

const {generateHashPass , compareHashPass } = require('../lib/bcrypt');
const {generateToken} = require('../lib/jwt');

exports.loginUser = async(req,res) => {
    const {email,password} = req.body;

    console.log('The email is :' + email);
    console.log('The password is :' + password);
}

exports.registerUser = async(req,res) =>{
    const {fullName ,email ,userName, password} = req.body;

    console.log('The fullName is :' + fullName);
    console.log('The email is :' + email);
    console.log('The userName is :' + userName);
    console.log('The password is :' + password);

    if(!fullName || !email || !userName || !password){
        //This statement checks that null or empty values in the body
        return res.status(400).json({message:"Credentials require"});
    }
    const exisitingUser = await User.findOne({email});

    if(exisitingUser){
        return res.status(409).json({message:"this email is already exist"});
    }
    const hashPass = await generateHashPass(password);
    const user = new User({
        fullName,
        email,
        password:hashPass,
        userName
    });

    if(!user){
        return res.status(400).json({message:"User not created"});
    }
    await user.save();
    res.status(200).json({message:"user connected successfully",user});
}