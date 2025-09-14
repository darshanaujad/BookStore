const jwt = require('jsonwebtoken');

exports.generateToken = async (userId , secret , expireIn)=>{
    const token = jwt.sign({userId:userId},secret,{expireIN:expireIn});
    return token;
}