import React,{ useState, useEffect } from 'react';
import yipaiLogo from '../../logo1wt.svg';
import './footer.css';
import { BsFacebook,BsInstagram } from 'react-icons/bs'
import { AiFillWechat } from 'react-icons/ai'
import { useLocation } from 'react-router-dom';




const Footer = () => {
  
  let location = useLocation();

  if(location.pathname === '/cart'){
    return<></>
  }
  if(location.pathname === '/cart/CartPart2'){
    return<></>
  }
  if(location.pathname === '/cart/CartPart3'){
    return<></>
  }
  if(location.pathname === '/users/SellLogin'){ return<></> }
  // ;

  return (
    <div className="yipai__footer section__padding">

    <div className="yipai__footer-links">
      <div className="yipai__footer-links_logo">
        <img src={yipaiLogo} alt="yipai_logo" />
        <p>藝拍YiPai 版權所有<br/>YiPai All rights reserved ©</p>
      </div>
      <div className="yipai__footer-links_div">
        <h4>相關連結</h4>
        <p>藝術品</p>
        <p>藝術家</p>
        <p>展覽活動</p>
        <p>展覽空間</p>
      </div>
      <div className="yipai__footer-links_div">
        <h4>最新消息</h4>
        <p>相關新聞 </p>
        <p>佈告欄</p>
      </div>
      <div className="yipai__footer-links_div">
        <h4>聯絡我們</h4>
        <p>Yipai@gmail.com</p>
        <p>0912-123-321</p>
        <p>
          <a href="https://zh-tw.facebook.com/" className="yipai__footer-icons"><BsFacebook className="iconStyle-footer" /></a>
          <a href="https://www.instagram.com/" className="yipai__footer-icons"><BsInstagram className="iconStyle-footer" /></a>
          <a href="https://www.wechat.com/zh_HK/" className="yipai__footer-icons"><AiFillWechat className="iconStyle-footer" /></a>
        </p>
      </div>
    </div>

    <div className="yipai__footer-copyright">
      <p>@2023 YiPai All rights reserved.</p>
    </div>
  </div>

  )
}
 

export default Footer;
