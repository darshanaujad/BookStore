require('dotenv').config();
const mongoose = require('mongoose');

const mongo_URI = process.env.mongo_URI;

mongoose.connect(mongo_URI)
    .then(()=>{
        console.log(`Database connected successfully!`);
    }) 
    .catch((err)=>{
        console.log(`Error! ${err}`);
    })


module.exports = mongoose;