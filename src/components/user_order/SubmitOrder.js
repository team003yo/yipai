import React, { useState } from "react";
import { useCart } from "../../containers/cart/utils/useCart";

const SubmitOrderButton = () => {
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
  }  = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitOrder = () => {
    const userName = "John Doe";
    const productId = 1;
    const orderDate = new Date().toISOString().slice(0, 19).replace("T", " ");

    const data = { userName, productId, orderDate };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/submitOrder");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
        setSubmitted(true);
        
      }
    };
  };

  return submitted ? (
    <p>訂單已送出</p>
  ) : (
    <button onClick={handleSubmitOrder}>送出訂單</button>
  );
};

export default SubmitOrderButton;
