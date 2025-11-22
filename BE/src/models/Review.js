const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviews: 
            {
                userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                comment: String,
                rating: { type: Number, min: 1, max: 5 },
                date: { type: Date, default: Date.now }
            }
        
});


const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;