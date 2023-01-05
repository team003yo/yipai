import React from 'react';
import people from '../../assets/people.png';
import ai2 from '../../assets/ai2.jpg';
import './header.css';

const Header = () => (
  <div className="yipai__header section__padding" id="home">
    <div className="yipai__header-image">
      <a href='#'><img src={ai2} /></a>
    </div>
    <div className="yipai__header-content ">
      <h1 className=" yipai__header-text">展覽名稱</h1>
    </div>
  </div>
);

export default Header;
