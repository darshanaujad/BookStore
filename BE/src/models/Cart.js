const mongoose = require('monngoose');

const cartSchema = new mongoose.Schema({

});

const cart = mongoose.model("Cart" , cartSchema);

module.exports = Cart ;
