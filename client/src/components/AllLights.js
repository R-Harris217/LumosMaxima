import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import io from 'socket.io-client';

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
      <h2>All lights</h2>
      <table>
        <thead>
          <th>Light Name</th>
          <th>Actions Available</th>
        </thead>
        <tbody>
          {
            allLights.map((light, index) => (
              <tr key={ index }>
                <td>
                  <Link to={ `/Lights/${light._id}` } >
                    { light.name }
                  </Link>
                </td>
                <td>
                  <button className="editBtn" onClick={ () => navigate(`/Lights/${light._id}/edit`) }>Details</button>
                  {/* <button className="deleteBtn" onClick={ () => deleteLight(light._id) }>Delete light</button> */}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllLights;