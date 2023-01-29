import React from "react";
import ReactDOM from "react-dom";

import ArtistPage from "./ArtistPage";
import Art from "./Art";
import ArtList from "./ArtList";
import BuyBotton from "./BuyBotton";

import ArtistImg from "./image/ArtistImg.png";
import pesnalImg from "./image/pesnalImg.png";
import artsImg from "./image/artsImg.png";

// 帳號設定選項
function BuyerSettings(params) {
    ReactDOM.render(
        <div>
            <div className='_buyLogin_flex_content_sa '>
                <div className='_buyLogin_mx2'>
                    <div className='_buyLogin_Titlebox _buyLogin_flex'>
                        <div
                            className='_buyLogin_h4'
                            style={{ marginLeft: "0" }}
                        >
                            帳戶設定
                        </div>
                    </div>
                    <div
                        className='_buyLogin_Contentbox _buyLogin_flex'
                        style={{
                            alignItems: "unset",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* 左邊表單 */}
                        <form method='post'>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label className='_buyLogin_h4'>
                                    用戶姓名：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='username'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label className='_buyLogin_h4'>帳號：</label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='account'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label className='_buyLogin_h4'>Email：</label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='email'
                                    name='email'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label className='_buyLogin_h4'>Tel：</label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='tel'
                                    name='tel'
                                ></input>
                            </div>
                            <div className=' _buyLogin_p2 _buyLogin_flex_end'>
                                <button className='_buyLogin_ChangeControlBtn '>
                                    更改
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/*  */}
                <div className='_buyLogin_mx2'>
                    <div className='_buyLogin_Titlebox _buyLogin_flex'>
                        <div
                            className='_buyLogin_h4'
                            style={{ marginLeft: "0" }}
                        >
                            地址設定
                        </div>
                    </div>
                    <div className='_buyLogin_Contentbox'>
                        {/* 右邊表單 */}
                        <form method='post'>
                            <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                <label className='_buyLogin_h4'>城市：</label>
                                <select className='_buyLogin_SettingInput'>
                                    <option disabled>請選擇城市</option>
                                    <option>桃園市</option>
                                    <option>新北市</option>
                                    <option>台北市</option>
                                    <option>基隆市</option>
                                    <option>宜蘭縣</option>
                                    <option>花蓮縣</option>
                                    <option>台東縣</option>
                                    <option>屏東縣</option>
                                    <option>高雄市</option>
                                    <option>台南市</option>
                                    <option>嘉義縣</option>
                                    <option>嘉義市</option>
                                    <option>雲林縣</option>
                                    <option>南投縣</option>
                                    <option>彰化縣</option>
                                    <option>台中市</option>
                                    <option>苗栗縣</option>
                                    <option>新竹縣</option>
                                    <option>新竹市</option>
                                    <option>澎湖縣</option>
                                    <option>金門縣</option>
                                    <option>連江縣</option>
                                </select>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                <label className='_buyLogin_h4'>區：</label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='township'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                <label className='_buyLogin_h4'>路：</label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='rode'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                <label className='_buyLogin_h4'>路鄰里：</label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='adjacent'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p1'>
                                <label className='_buyLogin_h4'>
                                    郵遞區號：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='number'
                                    name='postalCode'
                                ></input>
                            </div>
                            <div className='_buyLogin_flex _buyLogin_p1 _buyLogin_flex_end'>
                                <button className='_buyLogin_ChangeControlBtn '>
                                    更改
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("userDown")
    );
}

// 購買記錄選項
function PurchaseHistory(params) {
    ReactDOM.render(
        <div>
            <div style={{ overflowX: "auto" }}>
                <table className='_buyLogin_table'>
                    <thead className='_buyLogin_tline'>
                        <tr className='_buyLogin_td'>
                            <th>訂單編號</th>
                            <th>金額</th>
                            <th>訂購時間</th>
                            <th>訂購品項</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className='_buyLogin_tr _buyLogin_tline'
                            style={{ borderColor: "#CAB296" }}
                        >
                            <td>1002939311112</td>
                            <td>12,800</td>
                            <td>2022/11/02</td>
                            <td>1</td>
                            <td>
                                <button className='_buyLogin_tableBtn'>
                                    詳細資訊
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>,
        document.getElementById("userDown")
    );
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
            <div
                className='_buyLogin_flex _buyLogin_h30'
            >
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
};
