const User =  require('../models/User');

const {generateHashPass , compareHashPass } = require('../lib/bcrypt');
const {generateToken} = require('../lib/jwt');

exports.loginUser = async(req,res) => {
    const {email,password} = req.body;

    console.log('The email is :' + email);
    console.log('The password is :' + password);
}