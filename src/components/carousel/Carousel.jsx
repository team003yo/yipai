import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import first from '../../assets/first.png'
import second from '../../assets/second.jpg'


export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false}>
    <div>
      <img alt="first" src={first} />
      {/* <p className="legend">畫廊</p> */}
    </div>

    <div>
      <img alt="first" src={second} />
      {/* <p className="legend">Legend 2</p> */}
    </div>
  </Carousel>
);