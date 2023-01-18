import React from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill, BsCartFill } from "react-icons/bs";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { RiCloseCircleFill } from "react-icons/ri";
import { FaTruck, FaListAlt } from "react-icons/fa";
import { Table } from "react-bootstrap";
import productsId01 from "../../assets/productsId01.png";
import "./cartPart2.css";
import pic5 from "../../assets/pic5.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";

const CartPart2 = () => {
  return (
    <div className="font-family margin-50">
      <Link to="/products" className="keepbuying-button">
        ❮ 繼續購物
      </Link>
      <div className="flex-text margin-top-30">
        <h2>
          <FaTruck className="iconStyle-title" />
          寄貨地址
        </h2>
        <h5 className="">
          <span className="color-gray">1.我的購物車</span> ▶ 2.付款資訊
          <span className="color-gray"> ▶ 3.訂單成立</span>
        </h5>
      </div>
      <hr />
      <Table
          striped
          hover
          className="table-color margin-top-30 tables-text-size"
        >
          <thead>
            <tr>
              <th colSpan={5} className="col text-center">收貨地址確認</th>
              {/* <th className="text-center">預覽</th>
              <th className="text-center">名稱</th>
              <th className="text-center">數量</th>
              <th className="text-center">價格</th> */}
            </tr>
          </thead>
          <tbody className="line-height-50 text-right">
            <tr>
              <td className="text-center">
                <RiCloseCircleFill className="close-icons" />
              </td>
              <td className="table-prodcuts">
                <img src={productsId01} alt="img" />
              </td>
              <td className="text-center ">Mark</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
            </tr>
            <tr>
              <td className="text-center">
                <RiCloseCircleFill className="close-icons" />
              </td>
              <td className="table-prodcuts">
                <img src={productsId01} alt="img" />
              </td>
              <td className="text-center">Jacob</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
            </tr>
            <tr className="text-a">
              <td className="text-center">
                <RiCloseCircleFill className="close-icons" />
              </td>
              <td className="table-prodcuts">
                <img src={productsId01} alt="img" />
              </td>
              <td className="text-center">YOYO</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
            </tr>
            
          </tbody>
            <input className="btn btn-color" type="submit" value="送出資料" />
        </Table>
 

      <div className="flex-text margin-top-30">
        <h2>
          <FaListAlt className="iconStyle-title" />
          最後訂單確認
        </h2>
      </div>
      <div className="dis-re">
        <Table
          striped
          hover
          className="table-color margin-top-30 tables-text-size"
        >
          <thead>
            <tr>
              <th className="col text-center">刪除</th>
              <th className="text-center">預覽</th>
              <th className="text-center">名稱</th>
              <th className="text-center">數量</th>
              <th className="text-center">價格</th>
            </tr>
          </thead>
          <tbody className="line-height-50 text-right">
            <tr>
              <td className="text-center">
                <RiCloseCircleFill className="close-icons" />
              </td>
              <td className="table-prodcuts">
                <img src={productsId01} alt="img" />
              </td>
              <td className="text-center ">Mark</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
            </tr>
            <tr>
              <td className="text-center">
                <RiCloseCircleFill className="close-icons" />
              </td>
              <td className="table-prodcuts">
                <img src={productsId01} alt="img" />
              </td>
              <td className="text-center">Jacob</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
            </tr>
            <tr className="text-a">
              <td className="text-center">
                <RiCloseCircleFill className="close-icons" />
              </td>
              <td className="table-prodcuts">
                <img src={productsId01} alt="img" />
              </td>
              <td className="text-center">YOYO</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
            </tr>
          </tbody>
        </Table>
        <hr />

        <footer class="footer-floor1">
          <div>
            <a href="#news">結帳資訊 : </a>
          </div>
          <div>
            <a href="#contact">優惠券 : {0}</a>
            <a href="#contact">總數 : {2}</a>
            <a href="#contact">運費 : ${0}</a>
          </div>
        </footer>
        <footer class="footer-floor2">
          <a href="#total">購物車總計 : {200}</a>
          <div>
            <Link to="../cart">
              <button>上一頁</button>
            </Link>
            <Link to="next">
              <button>前往結帳頁面</button>
            </Link>
          </div>
        </footer>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default CartPart2;
