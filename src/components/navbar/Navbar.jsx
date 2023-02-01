import React, { useState,useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
// import logo from '../../logo.svg';
import logo1 from '../../logo1.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from "../../containers/cart/utils/useCart";


import axios from "axios";





const Navbar = () => {
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
  } = useCart();

  const [count, setCount] = useState(0);
  // const addCount=()=>setCount(cart.totalItems);
  // count = cart.totalItems

  const [toggleMenu, setToggleMenu] = useState(false);

  const [product, setProduct] = useState([]);
  const [user_order, setUserOrder] = useState([]);

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
    <div className="yipai__navbar">
      <div className="yipai__navbar-links">
        <div className="yipai__navbar-links_logo">
          <Link to="/">
            <img src={logo1} />
          </Link>
        </div>
        <div className="yipai__navbar-links_container">
          <p>
            <Link to="news">展覽活動</Link>
          </p>
          <p>
            <Link to="space">展覽空間</Link>
          </p>
          <p>
            <Link to="products">藝術品</Link>
          </p>
          <p>
            <Link to="artist">藝術家</Link>
          </p>
          <p>
            <Link to="about">關於我們</Link>
          </p>
        </div>
        <div className="yipai__navbar-icon">
          <Link className='navbar__cart-count' to="cart">
            <BsCartFill className="iconStyle" />
            <p>{cart.totalItems}</p>
          </Link>  
          <Link to="users">
            <FaUser className="iconStyle" />
          </Link>
        </div>
        <div className="yipai__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="yipai__navbar-menu_container scale-up-center">
            <div className="yipai__navbar-menu_container-links">
              <p>
                <Link to="/">展覽活動</Link>
              </p>
              <p>
                <Link to="space">展覽空間</Link>
              </p>
              <p>
                <Link to="products">藝術品</Link>
              </p>
              <p>
                <Link to="artist">藝術家</Link>
              </p>
              <p>
                <Link to="about">關於我們</Link>
              </p>
            </div>
          </div>
        )}
      </div>  
      </div>

      
    </div>
  );
};

export default Navbar;
