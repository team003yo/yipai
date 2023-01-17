// 連結頁
import React from "react";
function SellerBotton(params) {
  return (
    <div>
      <button className='' onClick={params.onClick}>
        <img src={params.src} alt={params.alt}></img>
        {params.text}
      </button>
    </div>
);
}
export default SellerBotton;