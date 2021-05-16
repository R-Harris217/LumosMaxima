import React, { useState, Component } from "react";
import axios from "axios";
import { Link,navigate } from '@reach/router';
import {Carousel} from '3d-react-carousal';


const Home = (props) => {
return(
        <div style={{background:"url(https://images.wallpaperscraft.com/image/man_flashlight_beam_201670_1920x1080.jpg)", height:"860px"}}>
                <div class="homebox">
                <h1 style={{color:"white", fontSize:"100px"}}>Lumos Maxima</h1><br/>
                <h3 style={{color:"white", fontSize:"25px", marginBottom:"30px"}}>Home to the best lights in the world</h3>
                </div>
                <div style={{display:"flex", justifyContent:"center", color:"white", fontSize:"20px"}}>
                <div style={{marginRight:"50px"}}>
                    <Link to="/lights">
                    <img src="https://lightsngear.com/wp-content/uploads/2014/05/DSC03472.jpg" class="rounded-circle" style={{height:"300px", width:"300px", border:"white 1px solid"}} alt="Cinque Terre" />
                    </Link>
                    <p>Check out or complete selection of lights</p>
                </div>
                <div style={{display:"inline-block"}}>
                <Link to="/lights/6099db52d414758f846cde52">
                    <img src="https://m4dm4x.com/wp-content/uploads/2019/03/FB_IMG_1553432060723.jpg" class="rounded-circle" style={{height:"300px", width:"300px", border:"white 1px solid"}} alt="Cinque Terre" />
                    </Link>
                    <p>The most powerful flashlight in the world</p>
                </div>
                </div>
                </div>
    )
}

export default Home;