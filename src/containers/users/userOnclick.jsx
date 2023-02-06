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
// 跨源讀取ＩＤ
// var mamberId;

//  function getMemberId() {
//     let response =  axios.get("http://localhost:3001/api/members", {
//         withCredentials: true,
//     });
//     // console.log(response.data.users_id);
//     mamberId = response.data.users_id;
// }

// 帳號設定選項
function BuyerSettings() {
    const container = document.getElementById("BuyerSettings");
    container.style.display='block';
}

// 購買記錄選項
function PurchaseHistory(params) {
    const container =document.getElementById("PurchaseHistory")
    container.style.display='block';
}

// 我的訂單選項
function MyOrder(params) {
    ReactDOM.render(
        <div>
            <div style={{ overflowX: "auto" }}>
                <table className='_buyLogin_table'>
                    <thead className='_buyLogin_tline'>
                        <tr className='_buyLogin_td'>
                            <th className='_buyLogin_RWDinvisible'>訂單編號</th>
                            <th>出貨狀態</th>
                            <th>金額</th>
                            <th>訂購時間</th>
                            <th className='_buyLogin_RWDinvisible'>訂購品項</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className='_buyLogin_tr _buyLogin_tline'
                            style={{ borderColor: "#CAB296" }}
                        >
                            <td className='_buyLogin_RWDinvisible'>
                                1002939311112
                            </td>
                            <td>未出貨</td>
                            <td>109,800</td>
                            <td>2022/11/02</td>
                            <td className='_buyLogin_RWDinvisible'>3</td>
                            <td>
                                <button className='_buyLogin_tableBtn'>
                                    詳細資訊
                                </button>
                            </td>
                        </tr>
                        <tr
                            className='_buyLogin_tr _buyLogin_tline'
                            style={{ borderColor: "#CAB296" }}
                        >
                            <td className='_buyLogin_RWDinvisible'>
                                100293931223
                            </td>
                            <td>未出貨</td>
                            <td>10,800</td>
                            <td>2022/12/02</td>
                            <td className='_buyLogin_RWDinvisible'>2</td>
                            <td>
                                <button className='_buyLogin_tableBtn'>
                                    詳細資訊
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='_buyLogin_RWDnone'>
                <h4 className='_buyLogin_textCenter'>你可能還會喜歡</h4>
                <div className='_buyLogin_flex_artsRow'>
                    <ArtList
                        btnClass='_buyLogin_RWDinvisible'
                        artsImg={artsImg}
                        artNameClass='_buyLogin_artName_min'
                        artname='海報，放輕鬆'
                        artSizeClass='_buyLogin_artSize_min'
                        artsize='50X40'
                        artPriceClass='_buyLogin_artPrice_min'
                        artprice='20,000'
                    />
                    <ArtList
                        btnClass='_buyLogin_RWDinvisible'
                        artsImg={artsImg}
                        artNameClass='_buyLogin_artName_min'
                        artname='海報，放輕鬆'
                        artSizeClass='_buyLogin_artSize_min'
                        artsize='50X40'
                        artPriceClass='_buyLogin_artPrice_min'
                        artprice='20,000'
                    />
                    {/* 只塞得下兩個 */}
                </div>
            </div>
        </div>,
        document.getElementById("userDown")
    );
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
