const Cart = require('../models/cart.models');
const jwt = require('jsonwebtoken');

module.exports = {
    getAll: (req, res) => {
        Cart.find({})
          .then((allCart) => {
            console.log("In all cart");
            res.json(allCart);
          })
          .catch((err) => {
            console.log("Error in getAll");
            res.status(400).json(err);
          })
      },
    
      create: (req, res) => {
        console.log(req.body);
        const cart = new Cart(req.body);
        const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    
        cart.user_id = decodedJwt.payload._id;
    
        Cart.create(cart)
          .then((newCart) => {
            console.log("in create");
            console.log(newCart);
            res.json(newCart);
          })
          .catch((err) => {
            console.log("error found in create");
            console.log(err);
            res.status(400).json(err);
          })
      },
      delete: (req, res) => {
        console.log(req.params.id);
    
        Cart.findByIdAndDelete(req.params.id)
          .then((deletedCart) => {
            console.log("in delete cart");
            res.json(deletedcart);
          })
          .catch((err) => {
            console.log("error found in delete");
            res.status(400).json(err);
          })
      },
}