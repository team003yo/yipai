import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// https://www.npmjs.com/package/axios
import axios from "axios";
import "./sellerLogin.css";
import SellerHome from "./SellerHome";

const SellLogin = () => {
    // 登入預設
    const [member, setMember] = useState({
        account: "courchia112",
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
                // 跨源存取 cookie
                withCredentials: true,
            }
        );
        console.log(response.data);
        alert("登入成功");
        setTimeout(() => {
            window.location.assign("/users/ArtistLoginTo");
        }, 1000);
    }
    return (
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
                            name='account'
                            placeholder=' 帳號'
                            value={member.account}
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            className='_sellerLogin_inputBox2'
                            name='password'
                            placeholder=' 密碼'
                            value={member.password}
                            onChange={handleChange}
                        />
                        <button type='submit' className='_sellerLogin_btn
                        ' onClick={handleSubmit}>
                            登入
                        </button>
                    </form>
                    <div style={{ fontColor: "#515151" }}>
                        沒有會員？請
                        <span>
                            <Link to='/users/SellRegister'>註冊</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellLogin;
