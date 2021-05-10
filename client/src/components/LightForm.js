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
              errors.title ?
                <span className="error-text">{errors.title.message}</span>
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
            <label>Release Date</label>
            {
              errors.releaseDate ?
                <span className="error-text">{errors.releaseDate.message}</span>
                : null
            }
            <input
              type="text"
              name="releaseDate"
              value={ movie.releaseDate !== "" ? (new Date(movie.releaseDate)).toLocaleDateString("en-us") : "" }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Rating</label>
            {
              errors.rating ?
                <span className="error-text">{errors.rating.message}</span>
                : null
            }
            <select
              name="rating"
              value={ movie.rating }
              onChange={ (e) => inputChange(e) }
              >
              <option value=""></option>
              {
                ratings.map((rating, index) => (
                  <option value={ rating} key={ 'rating-' + index }>{ rating }</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Genre</label>
            {
              errors.genre ?
                <span className="error-text">{errors.genre.message}</span>
                : null
            }
            <select
              name="genre"
              value={ movie.genre }
              onChange={ (e) => inputChange(e) }
              >
              <option value=""></option>
              {
                genres.map((genre, index) => (
                  <option value={ genre } key={ 'genre-' + index }>{ genre }</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Duration (minutes)</label>
            {
              errors.watchLength ?
                <span className="error-text">{errors.watchLength.message}</span>
                : null
            }
            <input
              type="number"
              min="80"
              max="200"
              name="watchLength"
              value={ movie.watchLength }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Actors</label>
            {
              errors.actors ?
                <span className="error-text">{errors.actors.message}</span>
                : null
            }
            <input
              type="text"
              name="actors"
              value={ movie.actors }
              onChange={ (e) => inputChange(e) }
              />
          </div>
          <div>
            <label>Cover Art Url</label>
            {
              errors.coverArtUrl ?
                <span className="error-text">{errors.coverArtUrl.message}</span>
                : null
            }
            <input
              type="text"
              name="coverArtUrl"
              value={ movie.coverArtUrl }
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