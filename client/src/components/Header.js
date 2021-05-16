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
      <header className='navbar'>
        <div className='navbar__title navbar__item' onClick={() => navigate('/home')}>LumosMaxima</div>
        <div className='navbar__item' onClick={() => navigate('/home')}>Home</div>
        <div className='navbar__item' onClick={() => navigate('/lights/cart')}>Cart</div>
        <div className='navbar__item' onClick={() => navigate('/lights/account')}>Account</div>
        <div className='navbar__item' onClick={(e) => logout(e) }>Logout</div>
      </header>
    </div>
  )
};

export default Header;