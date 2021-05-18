import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'reactstrap';
import { useDispatch } from 'react-redux';
import ReactDOM from "react-dom";

const Cart = (props) => {
  const [allCart, setAllCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cart", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        let cartTotal = 0;
        res.data.map ((item) => {
          console.log(item.price);
          cartTotal+= item.price;
        }
        )
        setTotal(cartTotal);
        setAllCart(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);



  const deleteCart = ( cartId ) => {
    axios.delete('http://localhost:8000/api/cart/' + cartId, {
          withCredentials: true})
      .then((res) => {
        console.log(res.data);

        let filteredCartArray = allCart.filter((oneCart) => {
          return oneCart._id !== cartId;
        });
        setAllCart(filteredCartArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }

// const cartTotal = () => {
//   let totalCart = allCart.map((item) => {
//     return item.price;
//   });
//   setAllCart(totalCart);
// }
// const cartTotal = (allCart) => {
//   return allCart.map((item) => {
//     let totalCart = item.price;
//     setTotal(totalCart);
//   })
// }

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/lights")}>Continue shopping</button>
      </div>
      <Table hover>
              
                <tbody>
      {
      allCart.map((item, index) => (
        <tr key={index}>
          <td>
            <img
              style={{ height: "200px", width: "200px" }}
              src={item.pictureUrl}
              alt="Card image cap"
            />
            </td>
            <td style={{fontSize:"30px", paddingTop: "90px"}}>{item.name}</td>
            <td style={{fontSize:"30px", paddingTop: "90px"}}>${item.price}</td>
            <td>
          <button class="btn btn-sm btn-outline-secondary" style={{marginTop: "70px"}} onClick={() => deleteCart(item._id)}>Remove</button>
          </td>
          </tr>
          ))}
         
      </tbody>
      </Table>
      <p>Total: {total}</p>
      <button class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/lights/cart/checkout")}>Checkout</button>
    </div>
  );
};

export default Cart;
