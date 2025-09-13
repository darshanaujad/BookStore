const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {type:String,required:true},
    userName: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String , required:true},
    profilePic: {type:String,default:''},
    userCart: {type:[String],default:[]},
    userFav: {type:[String],default:[]},
    bio: {type:String,default:''},
    localAddress: {type:String,default:''},
    city: {type:String,default:''},
    state: {type:String,default:''},
    country: {type:String,default:''},
    purchaseBook: {type:[String],default:[]}

});

const User = mongoose.model('User',userSchema);

module.exports = User;