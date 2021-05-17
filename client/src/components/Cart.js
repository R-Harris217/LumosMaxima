import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
// import io from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'reactstrap';
import { useDispatch } from 'react-redux';

const Cart = (props) => {
  const [allCart, setAllCart] = useState([]);
  // const [socket] = useState(() => io(":8000"));

  // useEffect(() => {
  //   console.log("Inside of the useEffect for Socket.io-client");

  //   socket.on("connect", () => {
  //     console.log("We are connected!");
  //     console.log(socket.id);
  //   });

  //   socket.on("added_cart", (data) => {
  //     console.log("added_cart");
  //     console.log(data);
  //     console.log(allCart);

  //     setAllCart((currentAllCartValues) => [data, ...currentAllCartValues]);
  //   });

  //   socket.on("cart_deleted", (deletedCartId) => {
  //     setAllCart((currentAllCartValues) => {
  //       let filteredCartArray = currentAllCartValues.filter((oneCart) => {
  //         return oneCart._id !== deletedCartId;
  //       });

  //       return filteredCartArray;
  //     });
  //   });

  //   return () => socket.disconnect();
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cart", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAllCart(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);

  // const deleteCart = ( cartId ) => {
  //   axios.delete('http://localhost:8000/api/cart/' + cartId, {
  //     withCredentials: true
  //   })
  //     .then((res) => {
  //       console.log(res.data);

  //       socket.emit("deleted_cart", cartId);

  //       let filteredCartArray = allCart.filter((oneCart) => {
  //         return oneCart._id !== cartId;
  //       });
  //       setAllCart(filteredCartArray);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

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

  addCart = () => {
    
  }



  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button onClick={() => navigate("/lights")}>Continue shopping</button>
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
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>
          <button onClick={() => deleteCart(item._id)}>Remove</button>
          </td>
          </tr>
          ))}
         
      </tbody>
      </Table>
      <p></p>
    </div>
  );
};

export default Cart;