import React from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill, BsCartFill } from "react-icons/bs";
import BuyerLogin from "../users/login/Login";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { RiCloseCircleFill } from "react-icons/ri";
import { Table } from "react-bootstrap";
import productsId01 from "../../assets/productsId01.png";
import "./cart.css";
import pic5 from "../../assets/pic5.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from './utils/useCart'

import LinkItems from './pages/ShoppingCart/components/LinkItems'
import ListItemsWithHook from './pages/ShoppingCart/components/ListItemsWithHook'

var buyerId = true;

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [user_order, setUserOrder] = useState([]);

  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart()
   

  useEffect(() => {
    console.log("第二個參數是空陣列");
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProduct() {
      let response = await axios.get("http://localhost:3001/cart");
      setProduct(response.data);
      console.log(response.data);
    }
    getProduct();
    async function getUserOrder() {
      let response = await axios.get("http://localhost:3001/cart");
      setUserOrder(response.data);
      console.log(response.data);
    }
    getUserOrder();
  }, []);

  return (
    
    <div id="login">
      {/* 賣家登入 */}
      {buyerId ? (
        <div className="font-family margin-50">
          <Link to="/products" className="keepbuying-button">
            ❮ 繼續購物
          </Link>
          <div className="flex-text margin-top-30">
      <h2>
      <BsCartFill className="iconStyle-title" />
              我的購物車
            </h2>
            <h5 className="">
              1.我的購物車 ▶
              <span className="color-gray"> 2.付款資訊 ▶ 3.訂單成立</span>
            </h5>
    </div>
          <div className="dis-re">
      {/* 列出cart中清單 */}
      <ListItemsWithHook />
          
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
            <br />

    <footer class="footer-floor1">   
        <div>
                <a href="#news">結帳資訊 : </a>
        </div>    
        <div>
          <a href="#contact">優惠券 : {0}</a>
                <a href="#contact">總數 : {cart.totalItems}</a>
          <a href="#contact">運費 : ${0}</a> 
        </div>    
    </footer>
    <footer class="footer-floor2">
              <a href="#total">購物車總計 : {cart.cartTotal}</a>
              <Link to="/cart/CartPart2">
                <button>前往結帳頁面</button>
              </Link>
    </footer>
    </div>
  </div>
      ) : (
        <BuyerLogin />
      )}
;
    </div>
  );
};

export default Cart;
