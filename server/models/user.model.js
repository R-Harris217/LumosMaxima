const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: [true, "First Name field is required!"]
    },
    lastName: {
        type: String,
        // required: [true, "Last Name field is required!"]
    },
    email: {
        type: String,
        // required: [true, "Email field is required!"]
    },
    address: {
        type: String,
        // required: [true, "Address field is required!"]
    },
    city: {
        type: String,
        // required: [true, "City field is required!"]
    },
    cart: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Light",
        }
    ],
    state: {
        type: String,
        // required: [true, "State is required!"]
    },
    password: {
        type: String,
        // required: [true, "Password field is required!"],
        minLength: [8, "Password must be at least 8 characters!"]
    }
}, { timestamps: true});

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

UserSchema.pre("validate", function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match!");
    }
    next();
});



UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPw) => {
            this.password = hashedPw;
            next();
        })
});

const User = mongoose.model("User", UserSchema);

module.exports = User;