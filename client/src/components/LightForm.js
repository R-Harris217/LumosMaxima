import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const LightForm = (props) => {
  const { light, setLight, errors, submitHandler, buttonLabel } = props;

  const inputChange = (e) => {
    console.log("e.target.name:  " + e.target.name);
    console.log("e.target.value: " + e.target.value);

    let newStateObject = { ...light };
    newStateObject[e.target.name] = e.target.value;
    setLight(newStateObject);
  }
  return (
    <div>
      <h4>Light Form</h4>
        <form onSubmit={ submitHandler }>
          <div>
            <label>Name</label>
            {
              errors.name ?
                <span className="error-text">{errors.name.message}</span>
                : null
            }
            <input
              type="text"
              name="name"
              value={ light.name }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Lumens</label>
            {
              errors.releaseDate ?
                <span className="error-text">{errors.lumen.message}</span>
                : null
            }
            <input
              type="text"
              name="lumen"
              value={ light.lumen }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Battery</label>
            {
              errors.batteryType ?
                <span className="error-text">{errors.batteryType.message}</span>
                : null
            }
            <input
              type="text"
              name="batteryType"
              value={ light.batteryType }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Waterproof Rating</label>
            {
              errors.waterproofRating ?
                <span className="error-text">{errors.waterproofRating.message}</span>
                : null
            }
            <input
              type="text"
              name="waterproofRating"
              value={ light.waterproofRating }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Description</label>
            {
              errors.description?
                <span className="error-text">{errors.description.message}</span>
                : null
            }
            <input
              type="text"
              name="description"
              value={ light.description }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Light Picture Url</label>
            {
              errors.pictureUrl ?
                <span className="error-text">{errors.pictureUrl.message}</span>
                : null
            }
            <input
              type="text"
              name="pictureUrl"
              value={ light.pictureUrl }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <button>{ buttonLabel }</button>
          <button onClick={ () => navigate("/") } className="cancelBtn">Cancel</button>
        </form>
    </div>
  )
}

export default LightForm;