import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import io from "socket.io-client";
import "../bootstrap.css";
import OrderHistory from "./OrderHistory";

const Account = (props) => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
    },
  );
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        navigate("/");
        console.log(err);
      });
  }, []);

  //   const handleChange = (e) => {
  //     setUserInfo({
  //       ...userInfo,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const inputChange = (e) => {
    let newStateObject = { ...user };
    newStateObject[e.target.name] = e.target.value;
    setUser(newStateObject);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/user/" + user._id, user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      {/* {userInfo.map((user, index) => (
        <div key={index}> */}
          <div class="top-content">
            <div class="inner-bg" style={{backgroundImage:"url(https://images.wallpaperscraft.com/image/man_flashlight_night_198036_1920x1080.jpg)", backgroundSize:"cover"}}>
              <div class="container">
                <div class="row">
                  <div class="col-sm-5">
                    
                    <div class="form-box">
                      <div class="form-top">
                        <div class="form-top-left">
                          <h3>Account Information</h3>
                          <p>View and edit account information below:</p>
                        </div>
                        <div class="form-top-right">
                          <i class="fa fa-pencil"></i>
                        </div>
                      </div>
                      <div class="form-bottom">
                        <form
                          role="form"
                          action=""
                          method="post"
                          class="registration-form"
                          onSubmit={submitHandler}
                        >
                          <div class="form-group">
                            <label class="sr-only" for="form-first-name" style={{color:"white"}}>
                              First name
                            </label>
                            <input
                              type="text"
                              placeholder="{user.firstName}"
                              class="form-first-name form-control"
                              id="form-first-name"
                              name="firstName"
                              value={user.firstName}
                              onChange={(e) => inputChange(e)}
                            />
                          </div>
                          <div class="form-group">
                            <label class="sr-only" for="form-last-name" style={{color:"white"}}>
                              Last name
                            </label>
                            <input
                              type="text"
                              placeholder="{user.lastName}"
                              class="form-last-name form-control"
                              id="form-last-name"
                              name="lastName"
                              value={user.lastName}
                              onChange={(e) => inputChange(e)}
                            />
                          </div>
                          <div class="form-group">
                            <label class="sr-only" for="form-email" style={{color:"white"}}>
                              Email
                            </label>
                            <input
                              type="text"
                              placeholder="{user.email}"
                              class="form-email form-control"
                              id="form-email"
                              name="email"
                              value={user.email}
                              onChange={(e) => inputChange(e)}
                            />
                          </div>
                          <div class="form-group">
                            <label class="sr-only" for="form-email" style={{color:"white"}}>
                              Address
                            </label>
                            <input
                              type="text"
                              placeholder={user.address}
                              class="form-email form-control"
                              id="form-email"
                              name="address"
                              value={user.address}
                              onChange={(e) => inputChange(e)}
                            />
                          </div>
                          <div class="form-group">
                            <label class="sr-only" for="form-email" style={{color:"white"}}>
                              City
                            </label>
                            <input
                              type="text"
                              placeholder={user.city}
                              class="form-email form-control"
                              id="form-email"
                              name="city"
                              value={user.city}
                              onChange={(e) => inputChange(e)}
                            />
                          </div>
                          <div class="form-group">
                            <label class="sr-only" for="form-email" style={{color:"white"}}>
                              State
                            </label>
                            <input
                              type="text"
                              placeholder={user.state}
                              class="form-email form-control"
                              id="form-email"
                              name="state"
                              value={user.state}
                              onChange={(e) => inputChange(e)}
                            />
                            <button type="submit" class="btn" style={{color:"white"}}>
                              Update Account
                            </button>
                          </div>
                        </form>
                      </div>
                      
                      <button style={{background:"none", border:"none", marginLeft:"600px"}} onClick={ () => navigate("/addlights") }>AddLights</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
    </div>
  );
};
export default Account;
