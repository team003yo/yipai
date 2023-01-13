import React from "react";
import { Link } from "react-router-dom";
import "./sellerLogin.css";

const SellLogin = () => (
    <div id='login'>
        {/* 賣家登入 */}
        <div className='_sellerLogin_BG'>
            <div className='_sellerLogin_flex _sellerLogin_sellerbox'>
                <div className='_sellerLogin_sellerIcon'></div>
                <form method='POST' action='' className='_sellerLogin_flex'>
                    <label className='_sellerLogin_h3'>賣家登入</label>
                    <input
                        type='text'
                        className='_sellerLogin_inputBox'
                        name='accountNumber'
                        placeholder=' 帳號'
                    />
                    <input
                        type='password'
                        className='_sellerLogin_inputBox2'
                        name='password'
                        placeholder=' 密碼'
                    />
                    <button type='submit' className='_sellerLogin_btn'>
                        登入
                    </button>
                </form>
                <div style={{ fontColor: "#515151" }}>
                    沒有會員？請
                    <span >
                        <Link to=''>註冊</Link>
                    </span>
                </div>
            </div>
        </div>
        
    </div>
);

export default SellLogin;
