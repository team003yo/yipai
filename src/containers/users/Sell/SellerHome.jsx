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
      <div className="d-flex" style={{justifyContent: "space-between"}}>
        <div className="sellerhome__main" id="sellerhome__main">
        
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