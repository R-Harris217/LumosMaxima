const mongoose = require('mongoose');

const BurgerSchema = new mongoose.Schema({
    method: {
        type: String,
        required: [ true, "Method is required" ],
        enum: [ 'Delivery', 'Carryout' ]
    },
    size: {
        type: String,
        required: [ true, "Size is required" ],
        enum: [ '1/4 lb', '1/2 lb', '3/4 lb', '1 lb' ]
    },
    bun: {
        type: String,
        required: [ true, "Bun type is required" ],
        enum: [ 'None', 'Plain', 'Sesame Seed', 'Pretzel' ]
    },
    topping: {
        type: String,
        enum: [
            'Ketchup',
            'Mustard',
            'Mayo',
            'BBQ Sauce',
            'Dill Pickle',
            'Tomato',
            'Lettuce',
            'Onion',
            'Bacon'
    ]
    },
    cheese: {
        type: String,
        enum: [
            'Cheddar',
            'Swiss',
            'American',
            'Provolone',
            'Pepperjack'
        ]
    },
}, { timestamps: true})

module.exports = mongoose.model("Burger", BurgerSchema);