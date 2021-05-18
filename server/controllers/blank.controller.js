// create: (req, res) => {
//     console.log(req.body);
//     const cart = new Cart(req.body);
//     const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });

//     cart.user_id = decodedJwt.payload._id;

//     Cart.create(cart)
//       .then((newCart) => {
//         console.log("in create");
//         console.log(newCart);

//         User.findByIdAndUpdate(newCart.user, 
//           // this is the data that we want to update
//           {
//             $push: { cart: newCart._id } 
//           }, 
//           {
//             new: true,  // give me the new version...not the original
//             useFindAndModify: false,  // by default mongoose will replace the entire object
//           })
//           .populate("cart", "-_id -__v -createdAt -updatedAt")
//           .populate("light_id", "-_id")
//           .then((updatedUser) => {
//             console.log("in update user cart");
           
//             res.json(updatedUser);
//           })
//           .catch((err) => {
//             console.log("error found in add cart to user");
//             console.log(err);
//             res.status(400).json(err);
//           })
//       })
//       .catch((err) => {
//         console.log("error found in create cart");
//         console.log(err);
//         res.status(400).json(err);
//       })
//   },