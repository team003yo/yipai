import React from "react";
import { Link } from "react-router-dom";
import { HeadImg } from "../HeadImg";
import { useState } from "react";
// https://www.npmjs.com/package/axios
import axios from "axios";
import "./buyLogin.css";

const Login = () => {
    // 登入預設
    const [member, setMember] = useState({
        account: "cola0098",
        password: "12345678",
    });

    function handleChange(e) {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios.post(
            "http://localhost:3001/api/auth/login",
            member,
            {
                // 為了跨源存取 cookie
                withCredentials: true,
            }
        );
        console.log(response.data);
    }

    return (
        <div id='login'>
            {/* 判斷是否登入 */}
            {/* {buyerId ? (
                <HeadImg name='May' />
            ) : ( */}
                <div className='_buyLogin_BG'>
                    {/* 未登入頁面 */}
                    <div className='_buyLogin_flex _buyLogin_buyerbox'>
                        <div className='_buyLogin_buyerIcon'></div>
                        <form
                            method='POST'
                            action='http://localhost:3001//api/auth/login'
                            className='_buyLogin_flex'
                        >
                            <label className='_buyLogin_h3'>買家登入</label>
                            <input
                                type='text'
                                className='_buyLogin_inputBox'
                                name='account'
                                placeholder=' 帳號'
                                value={member.account}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                className='_buyLogin_inputBox2'
                                name='password'
                                placeholder=' 密碼'
                                value={member.password}
                                onChange={handleChange}
                            />
                            <button type='submit' className='_buyLogin_btn' onClick={handleSubmit}>
                                登入
                            </button>
                        </form>
                        <div style={{ fontColor: "#515151" }}>
                            沒有會員？請
                            <span>
                                <Link to='/users/Register'>註冊</Link>
                            </span>
                        </div>
                    </div>
                </div>
            {/* )} */}
        </div>
    );
};
export default Login;
