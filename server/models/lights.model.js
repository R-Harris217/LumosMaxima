const mongoose = require('mongoose');

const LightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required" ],
    },
    lumen: {
        type: Number,
        required: [ true, "Lumens is required" ],
        
    },
    batteryType: {
        type: String,
        required: [ true, "Battery type is required" ],
    },
    waterproofRating: {
        type: String,
        required: [ true, "Rating required"]
    },
    description: {
        type: String,
    },
    pictureUrl: {
        type: String,
        required: [ true, "Flashlight picture required"]
    }
}, { timestamps: true})

module.exports = mongoose.model("Light", LightSchema);