import React from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Header = (props) => {
  const logout = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/user/logout", { 
      }, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/logreg");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Lumos Maxima</h1>
      <div>
        <button onClick={(e) => logout(e) }>Logout</button>
      </div>
    </div>
  )
};

export default Header;