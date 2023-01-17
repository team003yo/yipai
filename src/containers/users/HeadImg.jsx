import React from "react";
import BuyBotton from "./BuyBotton";
import { BuyerSettings,MyOrder,PurchaseHistory,FavoriteArtist,FavoriteArts} from "./userOnclick";

import buyerImg from "./image/buyHead.png";
import SettingIcon from "./image/settingIcon.svg";
import OrderIcon from "./image/orderIcon.svg";
import HistoryIcon from "./image/historyIcon.svg";
import Loveartist from "./image/loveartistIcon.svg";
import Loveart from "./image/loveartIcon.svg";

function HeadImg(user) {
    return (
        <div className='_buyLogin_flex'>
            <div className='_buyLogin_flex-re' style={{marginTop: "1em"}}>
                <img src={buyerImg} alt='buyHead' className='_buyLogin_headImg' />
                <label className='_buyLogin_headIcon'>
                    {/* 增加檔案 */}
                    <input type='file' style={{ display: "none" }}></input>
                </label>
            </div>
            <h3 style={{margin: "0.5em 0"}}>您好{user.name}你現在是藝拍小夥伴啦</h3>
            <div
                className='_buyLogin_flex'
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    margin: "0.5em",
                }}
            >
            {/* 按鈕列 */}
                <BuyBotton
                    text='帳戶設定'
                    src={SettingIcon}
                    onClick={BuyerSettings}
                />
                <BuyBotton text='購買記錄' src={HistoryIcon} onClick={PurchaseHistory}/>
                <BuyBotton text='我的訂單' src={OrderIcon} onClick={MyOrder}/>
                <BuyBotton text='我喜愛的藝術家' src={Loveartist} onClick={FavoriteArtist}/>
                <BuyBotton text='我喜愛的藝術品' src={Loveart} onClick={FavoriteArts}/>
            </div>
            <div id='userDown'></div>
        </div>
    );
}

export default HeadImg;
