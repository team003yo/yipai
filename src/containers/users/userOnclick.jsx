import React from "react";
import ReactDOM from "react-dom";

function BuyerSettings(params) {
    ReactDOM.render(
        <div>
            <div
                className='_buyLogin_flex'
                style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
                <div style={{ margin: "0 2em 0 2em" }}>
                    <div className='_buyLogin_Titlebox'>
                        <div className='_buyLogin_h4'>帳戶設定</div>
                    </div>
                    <div className='_buyLogin_Contentbox'>
                        {/* 表單 */}
                        <form method='post'>
                            <div className="_buyLogin_flex" style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                                <label
                                    className='_buyLogin_h4'
                                    style={{ fontSize: 14 }}
                                >
                                    用戶姓名：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='username'
                                ></input>
                            </div>

                            <br />
                            <button className='_buyLogin_ChangeControlBtn'>
                                更改
                            </button>
                        </form>
                    </div>
                </div>
                <div style={{ margin: "0 2em 0 2em" }}>
                    <div className='_buyLogin_Titlebox'>
                        <div className='_buyLogin_h4'>帳戶設定</div>
                    </div>
                    <div className='_buyLogin_Contentbox'>
                        {/* 表單 */}
                        <form method='post'>
                            <label
                                className='_buyLogin_h4'
                                style={{ fontSize: 14 }}
                            >
                                用戶姓名：
                            </label>
                            <input
                                className='_buyLogin_SettingInput'
                                type='text'
                                name='username'
                            ></input>
                            <br />
                            <button className='_buyLogin_ChangeControlBtn'>
                                更改
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("userDown")
    );
}
function PurchaseHistory(params) {
    ReactDOM.render(<div></div>, document.getElementById("userDown"));
}

export { BuyerSettings, PurchaseHistory };
