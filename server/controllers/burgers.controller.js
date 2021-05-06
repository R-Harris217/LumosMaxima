const Burger = require('../models/burgers.model');
const jwt = require('jsonwebtoken');

module.exports = {
    getAll: (req, res) => {
        Burger.find({})
          .then((allBurgers) => {
            console.log("In All Burgers");
            res.json(allBurgers);
          })
          .catch((err) => {
            console.log("Error in getAll");
            res.status(400).json(err);
          })
      },
    
      create: (req, res) => {
        console.log(req.body);
        const burger = new Burger(req.body);
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    
        burger.user_id = decodedJwt.payload._id;
    
        Burger.create(burger)
          .then((newBurger) => {
            console.log("in create");
            console.log(newBurger);
            res.json(newBurger);
          })
          .catch((err) => {
            console.log("error found in create");
            console.log(err);
            res.status(400).json(err);
          })
      },
    
      getOne: (req, res) => {
        console.log(req.params.id);
    
        Burger.findById(req.params.id)
          .populate("user_id", "username email -_id")
          .populate("comments", "comment commentDate -_id")
          .then((oneBurger) => {
            console.log("in getOne");
            res.json(oneBurger);
          })
          .catch((err) => {
            console.log("error found in getOne");
            res.status(400).json(err);
          })
      },
    
      update: (req, res) => {
        console.log(req.params.id);
    
        Burger.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
          runValidators: true, 
        })
          .then((updatedBurger) => {
            console.log("in update burger");
            res.json(updatedBurger);
          })
          .catch((err) => {
            console.log("error found in update");
            res.status(400).json(err);
          })
      },
    
      delete: (req, res) => {
        console.log(req.params.id);
    
        Burger.findByIdAndDelete(req.params.id)
          .then((deletedBurger) => {
            console.log("in delete burger");
            res.json(deletedBurger);
          })
          .catch((err) => {
            console.log("error found in delete");
            res.status(400).json(err);
          })
      },
}