import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BsFillHeartFill, BsCartFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
// import logo from '../../logo.svg';
import logo1 from "../../logo1.svg";
import "./navbar.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useCart } from "../../containers/cart/utils/useCart";

import axios from "axios";
const Navbar = () => {
  // ...
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
  const [UserName, setUserName] = useState({});
  const [login, setLogin] = useState(false);
  const [product, setProduct] = useState([]);
  const [user_order, setUserOrder] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [MerberId,setMemberId]=useState('');

  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setUserName(response.data[0]);
      console.log(response.data[0]);
      setMemberId(response.data[0].users_valid_role)
    }
    getMember2();
  }, []);
  useEffect(() => {
    async function getProduct() {
      let response = await axios.get("http://localhost:3001/cart");
      setProduct(response.data);
      //   console.log(response.data);
    }
    getProduct();
    async function getUserOrder() {
      let response = await axios.get("http://localhost:3001/cart");
      setUserOrder(response.data);
      //   console.log(response.data);
    }
    getUserOrder();
  }, []);

  async function logout() {
    try {
      await axios.get(`http://localhost:3001/api/auth/logout`, {
        withCredentials: true,
      });
      setLogin(false);
      // You can redirect the user to the login page after they log out
    } catch (error) {
      console.error(error);
    }
   
  }

  return (
    <div className="yipai__navbar">
      {/* ... */}
      <div className="yipai__navbar-links">
        <div className="yipai__navbar-links_logo">
          <Link to="/">
            <img src={logo1} alt="logo1" />
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
          {!login ? (
            <p>
              <Link to="users" className="navbar__user-set">
                <FaUser fontSize={22} />
              </Link>
            </p>
          ) : (
            <>
            
                <h6>Hi ! {MerberId==0?<a href="/users/LoginTo"> {UserName.users_name}</a>:<a href="/users/ArtistLoginTo"> {UserName.users_name}</a>}</h6>
                
  

              <p onClick={logout}>
                <Link to="/users">
                  <IoLogOut fontSize={30} />
                </Link>
              </p>
            </>
          )}
          <p>
            <Link to="cart" className="navbar__cart-count">
              <BsCartFill fontSize={22} />
              <p>{cart.totalItems}</p>
            </Link>
          </p>
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
