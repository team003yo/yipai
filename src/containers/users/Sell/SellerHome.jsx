import React from "react";
import "./sellerhome.css";
import { Link } from "react-router-dom";
import logo1 from '../../../logo1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import SellerButton from './SellerButton'

// Onclick

import { SellerFrontPage,SellerPage,SellerUpload,SellerProduct,SellerOrder } from './SellerOnclick'



// icon
import buyerImg from '../image/buyHead.png'
import sellerHouseIcon from '../image/sellerHouseIcon.svg'
import sellerpageIcon from '../image/sellerpageIcon.svg'
import sellerupIcon from '../image/sellerupIcon.svg'
import sellerlistIcon from '../image/sellerlistIcon.svg'
import sellerorderIcon from '../image/sellerorderIcon.svg'


function SellerHome() {
  return (
    <>
      <div className="d-flex">
        <div className="sellerhome__main" id="sellerhome__main">
        </div>

        {/* 手機板 */}
        <div className="_sellerhome__pic_414 m-3">
              <img src={buyerImg} alt="sellerHead" className="_sellerhome_headImg" />
              <label className='sellerhome__headIcon_414'>
                {/* 增加檔案 */}
              <input type="file" style={{ display: "none" }}></input>
              </label>
        </div>


        <div className="sellerhome__sidebar">
          <div className="sellerhome__sidebar__center">
            <Link to="/">
              <img className="sellerhome__sidebar__center_logo" src={logo1} />
            </Link>
            <div className="_sellerhome__pic_1920 m-3">
              <img src={buyerImg} alt="sellerHead" className="_sellerhome_headImg" />
              <label className='sellerhome__headIcon'>
                {/* 增加檔案 */}
              <input type="file" style={{ display: "none" }}></input>
              </label>
            </div>
            <div>
            <ul className="list-unstyled sellerhome__icon">
              <li className="d-flex">
                <SellerButton
                  className="sellerhome__icon_botton"
                  src={sellerHouseIcon}
                  onClick={SellerFrontPage}
                />
               <p className="sellerhome__icon_text" >首頁</p>
              </li>
              <li className="d-flex">
                <SellerButton 
                  className="sellerhome__icon_botton"
                  src={sellerpageIcon}
                  onClick={SellerPage}
                />
                <p className="sellerhome__icon_text">個人頁面</p>
              </li>
              <li className="d-flex">
                <SellerButton
                  className="sellerhome__icon_botton"
                  src={sellerupIcon}
                  onClick={SellerUpload}
                />
                <p className="sellerhome__icon_text">上架商品</p>
              </li>
              <li className="d-flex">
                <SellerButton 
                  className="sellerhome__icon_botton"
                  src={sellerlistIcon}
                  onClick={SellerProduct}
                />
              <p className="sellerhome__icon_text">商品管理</p>  
              </li>
              <li className="d-flex">
                <SellerButton
                  className="sellerhome__icon_botton"
                  src={sellerorderIcon}
                  onClick={SellerOrder}
                />
                <p className="sellerhome__icon_text">訂單資訊</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerHome;