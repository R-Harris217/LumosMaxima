import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import io from "socket.io-client";

const LightDetails = (props) => {
  const [ light, setLight ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ newCart, setNewCart ] = useState({
    name: "",
    price: "",
    pictureUrl: "",
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/lights/' + props.light_id, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res.data);
        setLight(res.data);
      })
      .catch((err) => {
        navigate("/");
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/cart', newCart, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      })
  }
  const inputChange = (e) => {
    console.log("e.target.name:  " + e.target.name);
    console.log("e.target.value: " + e.target.value);

    let newStateObject = { ...newCart }
    newStateObject[e.target.name] = e.target.value;
    setNewCart(newStateObject);
  }

  return (
    <div class="lightbox" style={{height:"865px"}}>
      <div class="lightdetails">
      <h1>
        { light.name }
      </h1>
      <p>
        Lumens: { light.lumen }
      </p>
      <p>
        Battery: { light.batteryType }
      </p>
      <p>
        Waterproof Rating: { light.waterproofRating }
      </p>
      <p>
        Price: $ { light.price }
      </p>
      <p>
        Description: { light.description }
      </p>
      <button class="btn btn-sm btn-outline-secondary" style={{marginLeft:"0px"}} onClick={ () => navigate("/lights") }>Return to All Lights</button>
      <button class="btn btn-sm btn-outline-secondary" style={{marginLeft:"10px"}} type="submit" form="form1" value="Submit">Add To Cart</button>
      </div>
      <div class="lightdetailspic">
        <img class="lightdetailspic img-fluid" src={ light.pictureUrl } alt={ light.name } />
      </div>
      <form id="form1" onSubmit={ submitHandler }>
          <div>
            <input
              type="text"
              name="name"
              value={ newCart.name }
              defaultValue={light.name}
              onChange={ (e) => inputChange(e) }
              />
            <input
            style={{border:"none"}}
              type="number"
              name="price"
              value={ newCart.price }
              defaultValue={light.price}
              onChange={ (e) => inputChange(e) }
              />
            <input
              type="text"
              name="pictureUrl"
              value={ newCart.pictureUrl }
              defaultValue={light.pictureUrl}
              onChange={ (e) => inputChange(e) }
              />
          </div>
        </form>
    </div>
  )
}

export default LightDetails;