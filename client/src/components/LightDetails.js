import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const LightDetails = (props) => {
  const [ light, setLight ] = useState({});

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

  return (
    <div>
      <h2>
        { light.name }
      </h2>
      <div>
        <img src={ light.pictureUrl } alt={ light.name } />
      </div>
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
      <button className="editBtn" onClick={ () => navigate("/lights") }>Return to All Lights</button>
      <button className="editBtn" onClick={ () => navigate("/lights") }>Add To Cart</button>
    </div>
  )
}

export default LightDetails;