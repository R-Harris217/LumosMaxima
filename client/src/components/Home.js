import React, { useState, Component } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import {Carousel} from '3d-react-carousal';


const Home = (props) => {
return(
        <div style={{background:"url(https://images.wallpaperscraft.com/image/man_flashlight_beam_201670_1920x1080.jpg)", height:"860px"}}>
            {/* <img class="homepic"  src="https://images.fineartamerica.com/images-medium-large-5/1-man-shining-a-flashlight-on-the-milky-yuri-zvezdny.jpg" alt="2" /> */}
                <div class="homebox">
                <h1>Browse our lights</h1>
                <div>
                    <p>All flashlights</p>
                    <button onClick={ () => navigate('/lights')}>Illuminate</button>
                </div>
                {/* <div>
                    <p>Check out our top rated lights</p>
                    <button>Check it out</button>
                </div> */}
                <div>
                    <p>The most powerful flashlight in the world</p>
                    <button onClick={ () => navigate('/lights/6099db52d414758f846cde52')}>Maxima</button>
                </div>
                </div>
        </div>
    )
}

export default Home;