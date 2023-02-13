import { Carousel } from "react-responsive-carousel";
import React from "react";
import art1 from "../../assets/art1.png";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import Kreis from "../../assets/Kreis.png";
import HugoRaffray from "../../assets/HugoRaffray.png";
import ZhuChenWei from "../../assets/ZhuChenWei.png";
import "./productsblog.css";
import { Link } from "react-router-dom";

const Productsblog = () => (
  <div className="product_body">
    <div className="flex-col">
      <div className="bigimg">
        <Carousel
          autoPlay
          showThumbs={false}
          showStatus={false}
          width={400}
          showArrows={false}
        >
          <Link to="/products/189">
            <div className="productsblog__carousel-img">
              <img alt="" src={pic2} />
            </div>
          </Link>
          <Link to="/products/190">

          <div className="productsblog__carousel-img">
            <img alt="" src={pic3} />
            {/* <p className="legend">畫廊</p> */}
          </div>
          </Link>

          <Link to="/products/196">
          <div className="productsblog__carousel-img">
            <img alt="" src={pic4} />
            {/* <p className="legend">Legend 2</p> */}
          </div></Link>
        </Carousel>
        <div className=" yipai__title-text">
          <p>佐久間 友香(Yuka SAKUMA) 的作品</p>
          <p></p>
        </div>
      </div>

      <div className="yipai__title-text">
        <div id="productsblog" className="products_grid">
          <div className="yipai__productsbox">
            <Link to="/products/397">
              <img src={Kreis} alt="Kreis" />
            </Link>
          </div>
          <div className="yipai__productsbox-text">
            <p>Kreis</p>
            <p>Emanuela Assenza</p>
          </div>

          <div className="yipai__productsbox">
            <Link to="/products/93">
              <img src={HugoRaffray} alt="HugoRaffray" />
            </Link>
          </div>
          <div className="yipai__productsbox-text">
            <p>Hugo Raffray</p>
            <p>Color line</p>
          </div>

          <div className="yipai__productsbox">
            <Link to="/products/224">
              <img src={ZhuChenWei} alt="ZhuChenWei" />
            </Link>
          </div>
          <div className="yipai__productsbox-text">
            <p>Zhu Chen Wei</p>
            <p>Alien dog and me</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Productsblog;
