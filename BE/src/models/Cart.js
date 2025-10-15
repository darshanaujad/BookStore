const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    products: {
        type: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Book',
                required: true
            },
            qauntity: {
                type: Number ,
                required: true 
            }
        }]

    }
});

const cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
