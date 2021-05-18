const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required" ],
    },
    price: {
        type: Number,
        required: [ true, "Price required"]
    },
    pictureUrl: {
        type: String,
        required: [ true, "Flashlight picture required"]
    }
    // light_ids: {[
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Light",
    // ]}
}, { timestamps: true})

module.exports = mongoose.model("Cart", CartSchema);