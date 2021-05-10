import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Home = (props) => {
    return(
        <div>
            {/* navbar and title here */}
            <h1>Browse our lights</h1>
            <div>
                <p>All flashlights</p>
                <button onClick={ () => navigate('/lights')}>Illuminate</button>
            </div>
            <div>
                <p>Check out our top rated lights</p>
                <button>Check it out</button>
            </div>
            <div>
                <p>The most powerful flashlight in the world</p>
                <button>Maxima</button>
            </div>

        </div>
    )
}

export default Home; 