import React from "react";
import Snowfall from 'react-snowfall'
import bag from "../assets/bag.png"
import bottle1 from '../assets/bottle.png';
import cup4 from "../assets/cup4.png";
import bottle2 from "../assets/b2.png";

import crush1 from "../assets/crush1.png";
import crush2 from "../assets/crush2.png";
import crush3 from "../assets/crush3.png";

import bag5 from "../assets/bag5.png";
import bag6 from "../assets/bag6.png";
import cup from "../assets/cup.png";
import fish from "../assets/fish.png";



function Waste(){

    const images=[]

    return(<>
    
    <Snowfall
    // Applied to the canvas element
    style={{ position: 'fixed',
    width: '100vw',
    height: '100vh',}}
    // Controls the number of snowflakes that are created (default 150)
    snowflakeCount={200}
    // Pass in the images to be used
    images={images}
  ></Snowfall>
    
    </>)

}
export default Waste