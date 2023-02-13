import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UMayBeLike from "../../components/uMaybeLike/UMayBeLike"
import BuyerLogin from "../users/login/Login";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useCart } from "./utils/useCart";

import './cartPart3.css';
import axios from 'axios';

const CartPart3 = () => {

  const [login, setLogin] = useState(false);
  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      console.log(response.data[0]);
    }
    getMember2();
  }, []);
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
    <>{login?(<div className="font-family margin-50">
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
  </div>):(<BuyerLogin/>)}</>
    
    
  );
};
export default CartPart3;
