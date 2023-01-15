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
                    <div
                        className='_buyLogin_Titlebox _buyLogin_flex'
                        style={{ alignItems: "flex-start" }}
                    >
                        <div
                            className='_buyLogin_h4'
                            style={{ marginLeft: "0" }}
                        >
                            帳戶設定
                        </div>
                    </div>
                    <div className='_buyLogin_Contentbox _buyLogin_flex' style={{alignItems:"unset",justifyContent: "space-between"}}>
                        {/* 左邊表單 */}
                        <form method='post'>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    用戶姓名：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='username'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    帳號：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='account'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    Email：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='email'
                                    name='email'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    Tel：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='tel'
                                    name='tel'
                                ></input>
                            </div>
                            <div
                                className='_buyLogin_flex _buyLogin_p2'
                                style={{
                                    alignItems: "end",
                                    paddingBottom: "2em",
                                }}
                            >
                                <button className='_buyLogin_ChangeControlBtn '>
                                    更改
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/*  */}
                <div style={{ margin: "0 2em 0 2em" }}>
                    <div
                        className='_buyLogin_Titlebox _buyLogin_flex'
                        style={{ alignItems: "flex-start" }}
                    >
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
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    城市：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='city'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    區：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='township'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    路：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='rode'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    路鄰里：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='text'
                                    name='adjacent'
                                ></input>
                            </div>
                            <div className=' _buyLogin_flex_content _buyLogin_p2'>
                                <label
                                    className='_buyLogin_h4'
                                    style={{
                                        fontSize: 14,
                                        marginLeft: "0",
                                    }}
                                >
                                    郵遞區號：
                                </label>
                                <input
                                    className='_buyLogin_SettingInput'
                                    type='number'
                                    name='postalCode'
                                ></input>
                            </div>
                            <div
                                className='_buyLogin_flex _buyLogin_p2'
                                style={{
                                    alignItems: "end",
                                    paddingBottom: "2em",
                                }}
                            >
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
function PurchaseHistory(params) {
    ReactDOM.render(<div></div>, document.getElementById("userDown"));
}

export { BuyerSettings, PurchaseHistory };
