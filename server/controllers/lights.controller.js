const Light = require('../models/lights.model');
const jwt = require('jsonwebtoken');

module.exports = {
    getAll: (req, res) => {
        Light.find({})
          .then((allLights) => {
            console.log("In All lights");
            res.json(allLights);
          })
          .catch((err) => {
            console.log("Error in getAll");
            res.status(400).json(err);
          })
      },
    
      create: (req, res) => {
        console.log(req.body);
        const light = new Light(req.body);
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    
        light.user_id = decodedJwt.payload._id;
    
        Light.create(light)
          .then((newLight) => {
            console.log("in create");
            console.log(newLight);
            res.json(newLight);
          })
          .catch((err) => {
            console.log("error found in create");
            console.log(err);
            res.status(400).json(err);
          })
      },
    
      getOne: (req, res) => {
        console.log(req.params.id);
    
        Light.findById(req.params.id)
          .populate("user_id", "username email -_id")
          .populate("comments", "comment commentDate -_id")
          .then((oneLight) => {
            console.log("in getOne");
            res.json(oneLight);
          })
          .catch((err) => {
            console.log("error found in getOne");
            res.status(400).json(err);
          })
      },
    
      update: (req, res) => {
        console.log(req.params.id);
    
        Light.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
          runValidators: true, 
        })
          .then((updatedLight) => {
            console.log("in update Light");
            res.json(updatedLight);
          })
          .catch((err) => {
            console.log("error found in update");
            res.status(400).json(err);
          })
      },
    
      delete: (req, res) => {
        console.log(req.params.id);
    
        Light.findByIdAndDelete(req.params.id)
          .then((deletedLight) => {
            console.log("in delete Light");
            res.json(deletedLight);
          })
          .catch((err) => {
            console.log("error found in delete");
            res.status(400).json(err);
          })
      },
}