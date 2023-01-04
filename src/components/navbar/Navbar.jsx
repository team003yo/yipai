import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
// import logo from '../../logo.svg';
import logo1 from '../../logo1.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="yipai__navbar">
      <div className="yipai__navbar-links">
        <div className="yipai__navbar-links_logo">
          {/* <img src={logo} /> */}
          <img src={logo1} />
        </div>
        <div className="yipai__navbar-links_container">
          <p>
            <a href="#home">展覽活動</a>
          </p>
          <p>
            <a href="#wgpt3">展覽空間</a>
          </p>
          <p>
            <a href="#possibility">藝術品</a>
          </p>
          <p>
            <a href="#features">藝術家</a>
          </p>
          <p>
            <a href="#blog">關於我們</a>
          </p>
        </div>
        <div className="yipai__navbar-icon">
          <a href="#">
            <BsFillHeartFill className="iconStyle" />
          </a>
          <a href="#">
            <BsCartFill className="iconStyle" />
          </a>
          <a href="#">
            <FaUser className="iconStyle" />
          </a>
        </div>
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
                <a href="#home">展覽活動</a>
              </p>
              <p>
                <a href="#wgpt3">展覽空間</a>
              </p>
              <p>
                <a href="#possibility">藝術品</a>
              </p>
              <p>
                <a href="#features">藝術家</a>
              </p>
              <p>
                <a href="#blog">關於我們</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
