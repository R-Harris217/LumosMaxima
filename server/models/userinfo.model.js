const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserInfoSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
});

const UserInfo = mongoose.model("Userinfo", UserInfoSchema);

module.exports = UserInfo;