import { React, useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import axios from "axios";
// import { useParams } from "react-router-dom";
import ArtistPage from "./ArtistPage";
import Art from "./Art";
import ArtList from "./ArtList";
import BuyBotton from "./BuyBotton";

import ArtistImg from "./image/ArtistImg.png";
import pesnalImg from "./image/pesnalImg.png";
import artsImg from "./image/artsImg.png";

// 帳號設定選項
function BuyerSettings() {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='block';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='none';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 購買記錄選項
function PurchaseHistory(params) {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='none';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='block';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 我的訂單選項
function MyOrder(params) {
    const BuyerSettings = document.getElementById("BuyerSettings");
    BuyerSettings.style.display='none';
    const PurchaseHistory =document.getElementById("PurchaseHistory")
    PurchaseHistory.style.display='block';
    const MyOrder =document.getElementById("MyOrder")
    MyOrder.style.display='none';
    const FavoriteArtist =document.getElementById("FavoriteArtist")
    FavoriteArtist.style.display='none';
    const FavoriteArts =document.getElementById("FavoriteArts")
    FavoriteArts.style.display='none';
}

// 我喜愛的藝術家
function FavoriteArtist(params) {
    // let windowSize = false;
    // if (window.innerWidth <= 550) windowSize = true;
    ReactDOM.render(
        <div>
            <BuyBotton
                className='_buyLogin_NewBtn'
                text='由新至舊'
                onClick=''
            />
            {/* 橫的 */}
            <div className='_buyLogin_flex _buyLogin_h30'>
                {/* 一個藝術家 */}
                <div
                    className='_buyLogin_flex _buyLogin_card'
                    style={{ flexDirection: "row", position: "relative" }}
                >
                    <ArtistPage
                        pesnalImg={pesnalImg}
                        artistImg={ArtistImg}
                        artisrName='yannick aaron'
                    />

                    {/* 作品 */}
                    <div
                        className='_buyLogin_RWDinvisible _buyLogin_RWDflexInvisible'
                        style={{ flexDirection: "row", zIndex: 2 }}
                    >
                        <Art
                            img={artsImg}
                            artName='作品名稱可能會很長blablabla'
                            artistName='作者名字也可能會長長長長長長長長'
                            artPrice='$1000000k'
                        />
                        {/* 下一個藝術品 */}
                        <Art
                            img={artsImg}
                            artName='作品名稱可能會很長blablabla'
                            artistName='作者名字也可能會長長長長長長長長'
                            artPrice='$1000000k'
                        />
                    </div>
                </div>

                {/* 一個藝術家 */}
                <div
                    className='_buyLogin_flex _buyLogin_card'
                    style={{ flexDirection: "row", position: "relative" }}
                >
                    <ArtistPage
                        pesnalImg={pesnalImg}
                        artistImg={ArtistImg}
                        artisrName='yannick aaron'
                    />

                    {/* 作品 */}
                    <div
                        className='_buyLogin_RWDinvisible _buyLogin_RWDflexInvisible'
                        style={{ flexDirection: "row", zIndex: 2 }}
                    >
                        <Art
                            img={artsImg}
                            artName='作品名稱可能會很長blablabla'
                            artistName='作者名字也可能會長長長長長長長長'
                            artPrice='$1000000k'
                        />
                        {/* 下一個藝術品 */}
                        <Art
                            img={artsImg}
                            artName='作品名稱可能會很長blablabla'
                            artistName='作者名字也可能會長長長長長長長長'
                            artPrice='$1000000k'
                        />
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("userDown")
    );
}

// 我喜愛的藝術品
function FavoriteArts(params) {
    ReactDOM.render(
        <div>
            <BuyBotton
                className='_buyLogin_NewBtn'
                text='由新至舊'
                onClick=''
            />
            {/* 直的排列作品列 */}
            <div
                className='_buyLogin_flex_art'
                style={{
                    marginTop: "1em",
                    alignItems: "stretch",
                }}
            >
                {/* 橫排的單個作品 */}
                <ArtList
                    btnClass='_buyLogin_deleteBtn'
                    artsImg={artsImg}
                    artNameClass='_buyLogin_artName'
                    artname='海報，放輕鬆'
                    artSizeClass='_buyLogin_artSize'
                    artsize='50X40'
                    artPriceClass='_buyLogin_artPrice'
                    artprice='20,000'
                />
                {/* 下一個作品 */}
                <ArtList
                    btnClass='_buyLogin_deleteBtn'
                    artsImg={artsImg}
                    artNameClass='_buyLogin_artName'
                    artname='海報，放輕鬆'
                    artSizeClass='_buyLogin_artSize'
                    artsize='50X40'
                    artPriceClass='_buyLogin_artPrice'
                    artprice='20,000'
                />
                {/* 下一個作品 */}
                <ArtList
                    btnClass='_buyLogin_deleteBtn'
                    artsImg={artsImg}
                    artNameClass='_buyLogin_artName'
                    artname='海報，放輕鬆'
                    artSizeClass='_buyLogin_artSize'
                    artsize='50X40'
                    artPriceClass='_buyLogin_artPrice'
                    artprice='20,000'
                />
            </div>
        </div>,
        document.getElementById("userDown")
    );
}

export {
    BuyerSettings,
    MyOrder,
    PurchaseHistory,
    FavoriteArtist,
    FavoriteArts,
    // getMemberId,
};
