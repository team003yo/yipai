import React from 'react';
import { Link } from 'react-router-dom';
import UMayBeLike from "../../components/uMaybeLike/UMayBeLike"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FaTruck, FaListAlt } from 'react-icons/fa';
import { Table } from 'react-bootstrap';

import './cartPart2.css';

import ListItemsWithHook from './pages/ShoppingCart/components/ListItemsWithHook'

import { useCart } from './utils/useCart'




const CartPart2 = () => {

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
  } = useCart()
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
            <th colSpan="" className="col text-center"></th>
            <th colSpan={1} className="col text-right">
              收貨人
            </th>
            <th colSpan="" className="col text-center">
              收貨地址確認
            </th>
            <th colSpan="" className="col text-center">
              收貨人電話
            </th>
            {/* <th className="text-center">預覽</th>
              <th className="text-center">名稱</th>
              <th className="text-center">數量</th>
              <th className="text-center">價格</th> */}
          </tr>
        </thead>
        <tbody className="line-height-50 text-right">
          <tr>
            <td colSpan={2} className="">陳浩南</td>
            <td className="text-center ">台北市中山區南京西路14號</td>
            <td className="text-center">0989123456</td>
          </tr>
        </tbody>
      </Table>

      <div className="flex-text margin-top-30">
        <h2>
          <FaListAlt className="iconStyle-title" />
          最後訂單確認
        </h2>
      </div>
      <div className="dis-re">
        <ListItemsWithHook />
        <UMayBeLike />

        <footer class="footer-floor1">
          <div>
            <a href="#news">結帳資訊 : </a>
          </div>
          <div>
            <a href="#contact">優惠券 : {0}</a>
            <a href="#contact">總數 : {cart.totalItems}</a>
            <a href="#contact">運費 : ${0}</a>
          </div>
        </footer>
        <footer class="footer-floor2">
          <a href="#total">購物車總計 : {cart.cartTotal}</a>
          <div>
            <Link to="../cart">
              <button>上一頁</button>
            </Link>
            <Link to="/cart/CartPart3">
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
