import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
// import logo from '../../logo.svg';
import logo1 from '../../logo1.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="yipai__navbar">
      <div className="yipai__navbar-links">
        <div className="yipai__navbar-links_logo">
          {/* <img src={logo} /> */}
          <Link to="/">
            <img src={logo1} />
          </Link>
        </div>
        <div className="yipai__navbar-links_container">
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
        <div className="yipai__navbar-icon">
          <Link to="/">
            <BsFillHeartFill className="iconStyle" />
          </Link>
          <Link to="cart">
            <BsCartFill className="iconStyle" />
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
