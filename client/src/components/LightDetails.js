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
    <div style={{background:"url(https://images.wallpaperscraft.com/image/man_starry_sky_light_flashlight_119928_1920x1080.jpg)", height:"865px"}}>
      <div>
      <p>
        { light.name }
      </p>
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
      <div>
        <img src={ light.pictureUrl } alt={ light.name } />
      </div>
    </div>
  )
}

export default LightDetails;