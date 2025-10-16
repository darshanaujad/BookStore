const { response } = require('express');
const cart = require('../models/Cart');


exports.getCart = async (req, res) => {
    try {
        const userId = req.user.userId;
        if(!userId){
            return res.status(400).json({message:"UserId not found"});
        }
        const cart = await Cart.findOne();

        if(!cart){
            return res.status(404).json({message:"Cart not found"});
        }
        res.status(200).json({message:"cart fetch successfully" , cart});
    } catch (error) {
       console.log("Error in getCart", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
exports.addToCart = async (req, res) => {

}
exports.removeItems = async (req, res) => {

}
exports.removeProduct = async (req, res) => {

}