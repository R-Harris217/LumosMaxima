import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Home = (props) => {
    return(
        <div>
            {/* navbar and title here */}
            <h1>Burgers</h1>
            <div>
                <p>Try one of our signature burgers.</p>
                <button>See Burgers</button>
            </div>
            <div>
                <p>Create your own burger.</p>
                <button>Get Crafty</button>
            </div>
            <div>
                <p>Feeling lucky? Roll the dice for a random burger.</p>
                <button>Roll The Dice</button>
            </div>

        </div>
    )
}

export default Home; 