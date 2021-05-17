import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import io from 'socket.io-client';
import '../bootstrap.css'

const AllLights = (props) => {
  const [ allLights, setAllLights ] = useState([]);
  const [ socket ] = useState( () => io(":8000" ) );

  useEffect(() => {
    console.log("Inside of the useEffect for Socket.io-client");

    socket.on("connect", () => {
      console.log('We are connected!');
      console.log(socket.id);
    });

    socket.on("added_light", (data) => {
      console.log("added_light");
      console.log(data);
      console.log(allLights);

      setAllLights( (currentAllLightValues) => [ data, ...currentAllLightValues ] );
    });

    socket.on('light_deleted', (deletedLightId) => {
      setAllLights( (currentAllLightValues) => {
        return currentAllLightValues.filter((oneLight) => {
          return oneLight._id !== deletedLightId;
        });
        let filteredLightArray = currentAllLightValues.filter((oneLight) => {
          return oneLight._id !== deletedLightId;
        });

        return filteredLightArray;
      });
    })

    return () => socket.disconnect();

  }, []);

  // const setAllLights = () => {
  useEffect(() => {
    axios.get('http://localhost:8000/api/lights', {
      withCredentials: true
    })
      .then((res) => {
        console.log(res.data);
        setAllLights(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      })
  }, []);

  
  return (
    <div>
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading" style={{color:"white"}}>Our Lights</h1>
          <p class="lead" style={{color:"white"}}>Illuminate your world with our selection of the best lights on the market.</p>
        </div>
      </section>

      <div class="album py-5">
        <div class="container">
          <div class="row">
          {
            allLights.map((light, index) => (
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <Link to={`/lights/${light._id}`}>
                <img class="card-img-top" style={{height:"350px", width:"448px", objectFit:"cover"}} src={light.pictureUrl} alt="Card image cap" />
                </Link>
                <div class="card-body">
                  <p class="card-text your-div">{light.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" style={{marginLeft:"90px"}} onClick={ () => navigate(`/lights/${light._id}`) }>View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" style={{marginLeft:"10px"}} onClick={ () => navigate("/lights/cart") }>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default AllLights;