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
      //   return currentAllLightValues.filter((oneLight) => {
      //     return oneLight._id !== deletedLightId;
      //   });
        let filteredLightArray = currentAllLightValues.filter((oneLight) => {
          return oneLight._id !== deletedLightId;
        });

        return filteredLightArray;
      });
    })

    return () => socket.disconnect();

  }, []);

  // const getAllLights = () => {
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

  const deleteLight = ( lightId ) => {
    // need to do 2 things
    // 1 - delete from the backend server / mongodb
    axios.delete('http://localhost:8000/api/lights/' + lightId, {
      withCredentials: true
    })
      .then((res) => {
        // successfully deleted!
        // res.data is the object we just deleted from mongoDB
        console.log(res.data);

        // send this conversation / message directly to the server
        socket.emit("deleted_light", lightId);

        // 2 - remove light from the array of light objects AFTER successfully 
        //    removing from the backend server
        let filteredLightArray = allLights.filter((oneLight) => {
          return oneLight._id !== lightId;
        });
        setAllLights(filteredLightArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>All lights</h2>
      {/* <button onClick={ (e) => getAllLights(e) }>Get Lights</button> */}
      {/* <button onClick={ getAllLights } */}
      <Link to="/lights/new">
        <button>Add light</button>
      </Link>
      <table>
        <thead>
          <th>Light Title</th>
          <th>Actions Available</th>
        </thead>
        <tbody>
          {
            allLights.map((light, index) => (
              <tr key={ index }>
                <td>
                  <Link to={ `/Lights/${light._id}` } >
                    { light.title }
                  </Link>
                </td>
                <td>
                  <button className="editBtn" onClick={ () => navigate(`/Lights/${light._id}/edit`) }>Edit light</button>
                  <button className="deleteBtn" onClick={ () => deletelight(light._id) }>Delete light</button>
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