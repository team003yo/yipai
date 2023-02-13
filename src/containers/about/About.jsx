import React from 'react';
import { Carousel } from "react-responsive-carousel";
import banner from './banner.jpg'
import './about.css';

const About = () => (
  <div>
    <Carousel autoPlay showThumbs={false} showStatus={false}>
        <div>
          <img alt="first" src={banner} />
          {/* <p className="legend">畫廊</p> */}
        </div>
      </Carousel>
    <div className="yipai__about section__padding" id="about">
      <div className="yipai__about">
        <h1 className="gradient__text">關於藝拍</h1>
      </div>
      <div className="yipai__about">
        <h1 className="gradient__text">讓您的藝術品發揚光大</h1>
      </div>
      <div className="yipai__about">
        <h4 className="gradient__text">連結各方資源，讓美學無所不在，讓藝術深植人心</h4>
      </div>
      <div className="yipai__about">
        <h6 className="gradient__text">
          我們追隨著藝術的腳步，分享生活中美好的人、事、物，藝拍提供一個可以分享自己藝術品的空間，
          <br />
          甚至讓使用者可以簡單便利的購買到喜歡的藝術品。
          <br />
          藝拍也蒐集了藝術展覽的資訊、藝術展覽空間的資訊，讓藝術深入我們的生活中。
        </h6>
      </div>
    </div>
  </div>
);

export default About;
