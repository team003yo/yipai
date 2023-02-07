import React from 'react';
import { Link } from 'react-router-dom';
import UMayBeLike from "../../components/uMaybeLike/UMayBeLike"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useCart } from "./utils/useCart";

import './cartPart3.css';

const CartPart3 = () => {

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
  return (
    <div className="font-family margin-50">
      <Link to="/products" className="keepbuying-button">
        ❮ 繼續購物
      </Link>
      <br />
      <br />
      <br />
      <div className='cart__h1'>
        <BsFillCheckCircleFill className='cart__iconStyle' />
      <h1>感謝您的購買 ! 訂單已成立 !</h1>
      </div>
      <br /><br /><br />
      <h4 className="cart__h4">您可能會喜歡 :</h4>

      <UMayBeLike />
        <br />
        <br />
    </div>
  );
};
export default CartPart3;
