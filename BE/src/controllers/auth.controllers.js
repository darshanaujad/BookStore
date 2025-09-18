const User = require('../models/User');

const { generateHashPass, compareHashPass } = require('../lib/bcrypt');
const { generateToken } = require('../lib/jwt');

exports.loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        console.log('The email is :' + email);
        console.log('The password is :' + password);

        if (!email || !password) {
            return res.status(400).json({message:"credentials require"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        const validate = await compareHashPass(password , user.password);
        if(!validate){
            return res.status(400).json({message:"wrong password"});
        }
        const token = await generateToken(user._id , process.env.JWT_SECRET ,process.env.JWT_EXPIRES_IN);
        if(!token){
            return res.status(400).json({message:"Error in creating token and error in generating token"});
        }
        res.status(200).json({message:"Login successfull" , user , token });

    } catch (err) {
        console.log("Error in login user", err);
        res.status(500).json({ message: "Internal server error" });
    }

}





exports.registerUser = async (req, res) => {

    try {
        const { fullName, email, userName, password } = req.body;

        console.log('The fullName is :' + fullName);
        console.log('The email is :' + email);
        console.log('The userName is :' + userName);
        console.log('The password is :' + password);

        if (!fullName || !email || !userName || !password) {
            //This statement checks that null or empty values in the body
            return res.status(400).json({ message: "Credentials require" });
        }
        const exisitingUser = await User.findOne({ email });

        if (exisitingUser) {
            return res.status(409).json({ message: "this email is already exist" });
        }
        const hashPass = await generateHashPass(password);
        const user = new User({
            fullName,
            email,
            password: hashPass,
            userName
        });

        if (!user) {
            return res.status(400).json({ message: "User not created" });
        }
        await user.save();
        res.status(200).json({ message: "user connected successfully", user });
    }
    catch (err) {
        console.log("Error in registering user", err);
        res.status(500).json({ message: "Internal server error" });
    }
}