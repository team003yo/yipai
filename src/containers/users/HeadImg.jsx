import React from "react";
// import { useState, useEffect } from 'react';
import BuyBotton from "./BuyBotton";
import {
    BuyerSettings,
    MyOrder,
    PurchaseHistory,
    FavoriteArtist,
    FavoriteArts,
} from "./userOnclick";

import buyerImg from "./image/buyHead.png";

function HeadImg(user) {
    return (
        <div className='_buyLogin_flex'>
            <div className='_buyLogin_RWDflexcol _buyLogin_rwd_flex'>
                <div className='_buyLogin_flex-re' style={{ marginTop: "1em" }}>
                    <img
                        src={buyerImg}
                        alt='buyHead'
                        className='_buyLogin_headImg'
                    />
                    <label className='_buyLogin_headIcon'>
                        {/* 增加檔案 */}
                        <input type='file' style={{ display: "none" }}></input>
                    </label>
                </div>
                <h3>
                    您好
                    <span>{user.name}</span>
                    <span>你現在是</span>
                    <span>藝拍小夥伴啦</span>
                </h3>
            </div>

            <div className=' _buyLogin_rwd_flexbtn'>
                {/* 按鈕列 */}
                <BuyBotton
                    text='帳戶設定'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_SettingIcon'
                    onClick={BuyerSettings}
                />
                <BuyBotton
                    text='購買記錄'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_historyIcon'
                    onClick={PurchaseHistory}
                />
                <BuyBotton
                    text='我的訂單'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_orderIcon'
                    onClick={MyOrder}
                />
                <BuyBotton
                    text='我喜愛的藝術家'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_loveartistIcon'
                    onClick={FavoriteArtist}
                />
                <BuyBotton
                    text='我喜愛的藝術品'
                    className='_buyLogin_buyerControlBtn _buyLogin_Icon _buyLogin_loveartIcon'
                    onClick={FavoriteArts}
                />
            </div>
            <div id='userDown'></div>
            <div className="userBtns"></div>
            
        </div>
    );
}

export {HeadImg} ;

