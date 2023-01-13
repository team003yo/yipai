import React from "react";
import { Link } from "react-router-dom";
import HeadImg from "../HeadImg";
import "./buyLogin.css";

var buyerId = true;

const Login = () => (
    <div id='login'>
        {/* 判斷是否登入 */}
        {buyerId ? (
            <HeadImg name='May' />
        ) : (
            <div className='_buyLogin_BG'>
                {/* 未登入頁面 */}
                <div className='_buyLogin_flex _buyLogin_buyerbox'>
                    <div className='_buyLogin_buyerIcon'></div>
                    <form method='POST' action='' className='_buyLogin_flex'>
                        <label className='_buyLogin_h3'>買家登入</label>
                        <input
                            type='text'
                            className='_buyLogin_inputBox'
                            name='accountNumber'
                            placeholder=' 帳號'
                        />
                        <input
                            type='password'
                            className='_buyLogin_inputBox2'
                            name='password'
                            placeholder=' 密碼'
                        />
                        <button type='submit' className='_buyLogin_btn'>
                            登入
                        </button>
                    </form>
                    <div style={{ fontColor: "#515151" }}>
                        沒有會員？請
                        <span>
                            <Link to=''>註冊</Link>
                        </span>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default Login;
