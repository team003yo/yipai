import React from "react";
import buyerImg from "./image/buyHead.png";
import BuyBotton from "./BuyBotton";
function HeadImg(user) {
    return (
        <div className="flex">
            <div className='flex-re'>
                <img src={buyerImg} alt='buyHead' className='headImg' />
                <label className='headIcon'>
                    <input type='file' style={{ display: "none" }}></input>
                </label>
            </div>
            <h3>您好{user.name}你現在是藝拍小夥伴啦</h3>
            <div className="flex" style={{flexDirection: "row"}}>

            <BuyBotton text="帳戶設定" />
            <BuyBotton text="帳戶設定" />
            <BuyBotton text="帳戶設定" />
            </div>

        </div>
    );
}

export default HeadImg;
