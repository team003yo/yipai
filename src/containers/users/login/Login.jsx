import React from "react";
import { Link } from "react-router-dom";
import "./buyLogin.css";

const Login = () => (
    <div id='login'>
        {/* 買家登入 */}
        <div className='BG'>
            <div className='flex buyerbox'>
                <div className='buyerIcon'></div>
                <form method='POST' action='' className='flex'>
                    <label className='h3'>買家登入</label>
                    <input
                        type='text'
                        className='inputBox'
                        name='accountNumber'
                        placeholder=' 帳號'
                    />
                    <input
                        type='password'
                        className='inputBox2'
                        name='password'
                        placeholder=' 密碼'
                    />
                    <button type='submit' className='btn'>
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

export default Login;
