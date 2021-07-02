import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "../registration.css";

const OrderHistory = () => {
  
  return (
    <div>
      <div class="form-box">
        <div class="form-top">
          <div class="form-top-left">
            <h3>Order History</h3>
            <p>See your order history here:</p>
          </div>
          <div class="form-top-right">
            <i class="fa fa-lock"></i>
          </div>
        </div>
        <div class="form-bottom">
          <form
            role="form"
            action=""
            method="post"
            class="login-form"

          >
            <div class="form-group">
              <label class="sr-only" for="form-username">
                Email
              </label>
              <input
                type="input"
                placeholder="Email..."
                class="form-username form-control"
                id="form-username"
                name="email"

              />
            </div>
            <div class="form-group">
              <label class="sr-only" for="form-password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password..."
                class="form-password form-control"
                id="form-password"
                name="password"

              />
            </div>
            <button type="submit" class="btn">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
