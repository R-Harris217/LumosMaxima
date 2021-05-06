import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [confirmReg, setConfirmReg] = useState("");
  const [errs, setErrs] = useState({});

  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address:"",
    city:"",
    state:"",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const register = e => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/user/register",
      user,
      {
        withCredentials: true,
      })
      .then(res => {
        console.log(res.data);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          city: "",
          state: "",
          password: "",
          confirmPassword: "",
        })

        setConfirmReg("Thank you for Registering, you can now log in!");
        setErrs({});
      })
      .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {
        confirmReg ?
          <h4 style={{color: "green"}}>{confirmReg}</h4>
          : null
      }
      <form onSubmit={register}>
        <div>
          <label>First Name</label>
          {
            errs.firstName ?
              <span className="error-text">{ errs.firstName.message }</span>
              : null
          }
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Last Name</label>
          {
            errs.lastName ?
              <span className="error-text">{ errs.lastName.message }</span>
              : null
          }
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          {
            errs.email?
              <span className="error-text">{ errs.email.message }</span>
              : null
          }
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Address</label>
          {
            errs.address?
              <span className="error-text">{ errs.address.message }</span>
              : null
          }
          <input
            type="address"
            name="address"
            value={user.address}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>City</label>
          {
            errs.city?
              <span className="error-text">{ errs.city.message }</span>
              : null
          }
          <input
            type="city"
            name="city"
            value={user.city}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>State</label>
          {
            errs.state?
              <span className="error-text">{ errs.state.message }</span>
              : null
          }
          <input
            type="state"
            name="state"
            value={user.state}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Password</label>
          {
            errs.password ?
              <span className="error-text">{ errs.password.message }</span>
              : null
          }
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Confirm Password</label>
          {
            errs.confirmPassword?
              <span className="error-text">{ errs.confirmPassword.message }</span>
              : null
          }
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={ handleChange }
          />
        </div>
        <div className="center">
          <button
            type="submit"
          >Register Me</button>
        </div>
      </form>
    </div>
  );
};

export default Register;