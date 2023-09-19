import React from 'react'
import "./Projects.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


  export default function App() {
    return (
      
      <div className='projects' >
        <h1>Portfolio/Projects</h1>
        <Carousel
          className="crsl"
          autoPlay
          infiniteLoop
          centerMode
          interval={2000}
        >
        <div>
          <img src={img1} alt='img1'/>
        </div>
        <div>
          <img src={img2} alt='img2' />
        </div>
        <div>
          <img src={img3} alt='img3' />
        </div>
        <div>
          <img src={img4} alt='img4' />
        </div>
        </Carousel>
      </div>
    );
  }
