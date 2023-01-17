import React from "react";
import BuyBotton from "./BuyBotton";
import buyButton from "./image/buyButton.svg";
import "./login/buyLogin.css"
function ArtList(params) {
    return(
        <div style={{position: "relative"}}>
<div className='_buyLogin_artbox'>
                    {/* 刪除按鈕 */}
                    <button className="_buyLogin_deleteBtn" />
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
                        <h5 style={{ fontSize: "29px", lineHeight: "121.3%" }}>
                            {params.artname}
                        </h5>
                        <h5 style={{ fontSize: "29px", lineHeight: "121.3%" }}>
                            商品尺寸：{params.artsize}
                        </h5>
                        <h5 style={{ fontSize: "29px", lineHeight: "121.3%" }}>
                            價格：{params.artprice}
                        </h5>
                    </div>
                    <BuyBotton
                        text='購買'
                        src={buyButton}
                        alt='ICon'
                        btnStyle={{ display: "flex" }}
                    />
                </div>
        </div>
        
    );
}
export default ArtList;