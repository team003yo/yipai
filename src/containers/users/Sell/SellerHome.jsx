import React from "react";
import "./sellerhome.css";
import { Link } from "react-router-dom";
import logo1 from '../../../logo1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import SellerButton from './SellerButton'

// Onclick
import { SellerFrontPage } from './SellerOnclick'
import { SellerPage } from './SellerOnclick'
import { SellerUpload } from './SellerOnclick'
import { SellerProduct } from './SellerOnclick'
import { SellerOrder } from './SellerOnclick'

// icon
import buyerImg from './image/buyHead.png'
import sellerHouseIcon from './image/sellerHouseIcon.svg'
import sellerpageIcon from './image/sellerpageIcon.svg'
import sellerupIcon from './image/sellerupIcon.svg'
import sellerlistIcon from './image/sellerlistIcon.svg'
import sellerorderIcon from './image/sellerorderIcon.svg'


function SellerHome() {
  return (
    <>
      <div className="d-flex">
        <div className="sellerhome__main" id="sellerhome__main">
          {/* <div className="sellerhome__main__section__news">
            <h2>最新消息</h2>
            <p>這是第一則重要消息！！看的到代表一切正常不用擔心，看不到代表要去客服反應！</p>
          </div>
          <div className="sellerhome__main__section__todolist">
            <h2>待辦事項</h2>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link><h1>0</h1></Link>
                  <h3>未出貨</h3>
                </li>
                <li>
                  <Link><h1>0</h1></Link>
                  <h3>待處理</h3>
                </li>
                <li>
                  <Link><h1>0</h1></Link>
                  <h3>已處理</h3>
                </li>
                <li>
                  <Link><h1>0</h1></Link>
                  <h3>待取消</h3>
                </li>
                <li>
                  <Link><h1>0</h1></Link>
                  <h3>待退貨</h3>
                </li>
                <li>
                  <Link><h1>0</h1></Link>
                  <h3>已售完</h3>
                </li>
              </ul>
            </div>
          </div>
          <div></div> */}
        </div>
        <div className="sellerhome__sidebar">
          <div className="sellerhome__sidebar__center">
            <Link to="/">
              <img src={logo1} />
            </Link>
            <div className="_sellerhome__pic m-3">
              <img src={buyerImg} alt="sellerHead" className="_sellerhome_headImg" />
              <label className='sellerhome__headIcon'>
                {/* 增加檔案 */}
              <input type="file" style={{ display: "none" }}></input>
              </label>
            </div>
            <ul className="list-unstyled">
              <li>
                <SellerButton
                  text="首頁"
                  src={sellerHouseIcon}
                  onClick={SellerFrontPage}
                />
              </li>
              <li>
                <SellerButton 
                  text="個人頁面"
                  src={sellerpageIcon}
                  onClick={SellerPage}
                />
              </li>
              <li>
                <SellerButton
                  text="上架商品"
                  src={sellerupIcon}
                  onClick={SellerUpload}
                />
              </li>
              <li>
                <SellerButton 
                  text="商品管理"
                  src={sellerlistIcon}
                  onClick={SellerProduct}
                />
              </li>
              <li>
                <SellerButton
                  text="訂單資訊"
                  src={sellerorderIcon}
                  onClick={SellerOrder}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerHome;