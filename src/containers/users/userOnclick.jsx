import React from "react";
import ReactDOM from "react-dom";
import ChangeBotton from "./ChangeBotton";

function BuyerSettings(params) {
    ReactDOM.render(
        <div>
            <div className='_buyLogin_flex'>
                <div className='_buyLogin_Titlebox'>
                    <div className="_buyLogin_h4">帳戶設定</div>
                </div>
                <div className='_buyLogin_Contentbox'>內容</div>
                <ChangeBotton text="更改" />
            </div>
        </div>,
        document.getElementById("userDown")
    );
}
function PurchaseHistory(params) {
    ReactDOM.render(<div></div>, document.getElementById("userDown"));
}

export { BuyerSettings, PurchaseHistory };
