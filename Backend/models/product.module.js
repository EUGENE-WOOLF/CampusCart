const mongoose = require('mongoose');

const PlaceReviewSchema = mongoose.Schema({
    comment: {
        type: String,
        required: [true, "Please enter a product name."]
    }   
}, { timestamps: true });

const Review = mongoose.model("Review", PlaceReviewSchema);

module.exports = Review;
    