import React from "react";
import BuyBotton from "./BuyBotton";
import buyButton from "./image/buyButton.svg";
import "./login/buyLogin.css";
function ArtList(params) {
    return (
        <div style={{ position: "relative" }}>
            <div className='_buyLogin_artbox'>
                {/* 刪除按鈕 */}
                <button className={params.btnClass} />
                <img
                    src={params.artsImg}
                    alt='藝術品'
                    style={{ display: "flex" }}
                />
                {/* 直的排列文字 */}
                <div
                    className='_buyLogin_flex'
                    style={{ alignItems: "flex-start" }}
                >
                    <h5 className={params.artNameClass}>{params.artname}</h5>
                    <h5 className={params.artSizeClass}>商品尺寸：{params.artsize}</h5>
                    <h5  className={params.artPriceClass}>價格：{params.artprice}</h5>
                </div>
                <BuyBotton
                    text='購買'
                    src={buyButton}
                    alt='ICon'
                    btnStyle={{ display: "flex" }}
                    className='_buyLogin_buyerControlBtnNormal'
                />
            </div>
        </div>
    );
}
export default ArtList;
