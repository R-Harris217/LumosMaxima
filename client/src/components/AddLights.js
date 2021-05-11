import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import LightForm from './LightForm';
import io from 'socket.io-client';

const AddLights = (props) => {
  const [ socket ] = useState( () => io(":8000") );
  const [ errors, setErrors ] = useState({});
  const [ newLight, setNewLight ] = useState({
    name: "",
    lumen: "",
    batteryType: "",
    waterproofRating: "",
    description: "",
    pictureUrl: "",
  })

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/lights', newLight, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res.data);

        socket.emit("added_new_light", res.data);

        socket.disconnect();

        navigate('/lights');
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      })
  }


  return (
    <div>
      <h2>New Light</h2>
      <LightForm
        light={ newLight } 
        setLight={ setNewLight }
        errors={ errors }
        submitHandler={ submitHandler }
        buttonLabel={ "Add Light" }
        />
    </div>
  )
}

export default AddLights;