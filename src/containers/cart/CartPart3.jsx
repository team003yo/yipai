import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ImRadioUnchecked } from 'react-icons/im';
import { RiCloseCircleFill } from 'react-icons/ri';
import { FaTruck, FaListAlt } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import productsId01 from '../../assets/productsId01.png';
import './cartPart3.css';
import pic5 from '../../assets/pic5.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.jpg';

const CartPart2 = () => {
  return (
    <div className="font-family margin-50">
      <Link to="/products" className="keepbuying-button">
        ❮ 繼續購物
      </Link>
      <br />
      <br />
      <br />
      <div className='cart__h1'>
        <BsFillCheckCircleFill className='cart__iconStyle'/>
      <h1>感謝您的購買 ! 訂單已成立 !</h1>
      </div>
      <br /><br /><br />
      <h4 className="cart__h4">您可能會喜歡 :</h4>

        <div className="cart__products">
          <Carousel
            className="cart__products-carousel"
            autoPlay
            showThumbs={false}
            showStatus={false}
          >
            <Link to="/products/ProductsDetail">
              <div>
                <img alt="first" src={pic5} />
              </div>
            </Link>
            <div>
              <img alt="first" src={pic3} />
              {/* <p className="legend">畫廊</p> */}
            </div>
            <div>
              <img alt="first" src={pic4} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
          </Carousel>
          <Carousel
            className="cart__products-carousel"
            autoPlay
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img alt="first" src={pic5} />
              {/* <p className="legend">畫廊</p> */}
            </div>
            <div>
              <img alt="first" src={pic3} />
              {/* <p className="legend">畫廊</p> */}
            </div>
            <div>
              <img alt="first" src={pic4} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
          </Carousel>
          <Carousel
            autoPlay
            className="cart__display-none cart__products-carousel"
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img alt="first" src={pic5} />
              {/* <p className="legend">畫廊</p> */}
            </div>
            <div>
              <img alt="first" src={pic3} />
              {/* <p className="legend">畫廊</p> */}
            </div>
            <div>
              <img alt="first" src={pic4} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
          </Carousel>
        </div>
        <br />
        <br />
    </div>
  );
};
export default CartPart2;
