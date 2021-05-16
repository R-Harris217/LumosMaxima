const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports = {
  getUser: (req, res) => {
    console.log(req.params);
    User.find(req.params)
        .populate("user_id", "firstname lastname email -_id")
        .then((oneUser) => {
        console.log("in getUser");
        res.json(oneUser);
        })
        .catch((err) => {
        console.log("error found in getUser");
        res.status(400).json(err);
        })
  },
}
