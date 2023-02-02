import React from 'react'
import pic5 from "../../assets/pic5.jpg";

function UMayBeLike() {
  return (
    <div className="cart__products">
              <div className="cart__products-img"><img src={pic5} alt="more"/><p>作品名</p></div>
              <div className="cart__products-img"><img src={pic5} alt="more"/><p>作品名</p></div>
              <div className="cart__products-img cart__display-none display-none-s"><img src={pic5} alt="more"/><p>作品名</p></div>
              <div className="cart__products-img cart__display-none display-none-s"><img src={pic5} alt="more"/><p>作品名</p></div>
              <div className="cart__products-img cart__display-none display-none-m"><img src={pic5} alt="more"/><p>作品名</p></div>
            </div>
  )
}

export default UMayBeLike