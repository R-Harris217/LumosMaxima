const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        const user = new User(req.body);
        console.log(user);
        user.save()
            .then(() => {
                console.log("successfully registered");
                res.json({ message: "Successfully registered!", user: user})
            })
            .catch((err) => {
                console.log("register not successful!");
                res.status(400).json(err);
            });
    },
    login: (req, res) => {
        User.findOne({email: req.body.email})
            .then((userRecord) => {
                if(userRecord === null) {
                    res.status(400).json({ message: "Invalid login Attempt 1" })
                } else {
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((passwordValid) => {
                            if(passwordValid) {
                                console.log("Password is valid");
                                res.cookie("usertoken", jwt.sign({
                                    _id: userRecord._id,
                                    username: userRecord.username
                                }, process.env.JWT_SECRET), {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 900000000)
                                }).json({
                                    message: "Successfully Logged In",
                                    userLoggedIn: {
                                        username: userRecord.username
                                    }
                                })
                            } else {
                                res.status(400).json({ message: "Invalid Login Attempt 2"})
                            }
                        })
                        .catch(err => {
                            res.status(400).json({ message: "Invalid Login Attempt 3"});
                        })
                }
            })
            .catch(err => {
                res.status(400).json({ message: "Invalid Login Attempt 4"})
            })
    },
    logout: (req, res) => {
        console.log("logged out!");
        res.clearCookie("usertoken");
        res.json({ message: "You have successfully logged out!"});
    },
    // accountInfo: (req, res) => {
    //     User.find({})
    //         .then((userRecord) => {
    //             console.log("in accountInfo");
    //             res.json(userRecord);
    //         })
    //         .catch((err) => {
    //             console.log("error found in accountInfo");
    //             res.status(400).json(err);
    //         })
    // },
    accountInfo: (req, res) => {
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    
        user_id = decodedJwt.payload._id;
    
        User.find({})
          .then((userRecord) => {
            console.log("in user record");
            console.log(userRecord);
            res.json(userRecord);
          })
          .catch((err) => {
            console.log("error found in user record");
            console.log(err);
            res.status(400).json(err);
          })
      },
      delete: (req, res) => {
        console.log(req.params.id);
    
        User.findByIdAndDelete(req.params.id)
          .then((deletedUser) => {
            console.log("in delete User");
            res.json(deletedUser);
          })
          .catch((err) => {
            console.log("error found in delete");
            res.status(400).json(err);
          })
      },
      update: (req, res) => {
        console.log(req.params.id);
    
        User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
          runValidators: true,  
        })
          .then((updatedUser) => {
            console.log("in update user");
            // console.log(updatedMovie);
            res.json(updatedUser);
          })
          .catch((err) => {
            console.log("error found in update");
            res.status(400).json(err);
          })
      },
}