import React from "react";
import "./sellregister.css";
import axios from "axios";
import { useState } from "react";

// import { Link } from "react-router-dom";
// import HeadImg from "../HeadImg";
import { FaUserCircle } from "react-icons/fa";
// import { height } from '@mui/system';

const SellRegister = () => {
    const [member, setMember] = useState({
        // 自動填入
        name: "Arar",
        account: "arar00981",
        password: "00000000",
        confirmPassword: "00000000",
    });
    // 輸入的值更動的函式
    function handleChange(e) {
        console.log(e);
        let newMember = { ...member };
        newMember[e.target.name] = e.target.value;
        setMember(newMember);
        setMember({ ...member, [e.target.name]: e.target.value });
    }
    // 上傳圖片用
    // function handleUpload(e) {
    //     // file input 的值並不是存在 value 欄位裡，是在member裡
    //     setMember({ ...member, photo: e.target.files[0] });
    // }
    async function handleSubmit(e) {
        console.log("handleSubmit");
        // 關閉表單的預設行為
        e.preventDefault();

        // 作法2: 有檔案的表單 https://developer.mozilla.org/en-US/docs/Web/API/FormData
        let formData = new FormData();
        formData.append("name", member.name);
        formData.append("account", member.account);
        formData.append("password", member.password);
        formData.append("confirmPassword", member.confirmPassword);
        let response = await axios.post(
            "http://localhost:3001/api/auth/Artregister",
            formData
        );
        console.log(response.data);
    }
    return (
        <>
            <div id='SellRegister'>
                <div className='_SellRegister_BG'>
                    <div className='_SellRegister_flex _SellRegister_buyerbox'>
                        <div className='_SellRegister_SellRegisterIcon d-flex'>
                            <FaUserCircle
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h2 className='_SellRegister_SellRegisterIcon＿text'>
                                賣家註冊
                            </h2>
                        </div>
                        <form
                            method='POST'
                            action='http://localhost:3001/api/auth/Artregister'
                            className='_SellRegister_flex d-inline'
                        >
                            <input
                                type='text'
                                className='_SellRegister_inputBox'
                                name='accountNumber'
                                placeholder=' 姓名'
                                value={member.name}
                                onChange={handleChange}
                            />
                            <input
                                type='text'
                                className='_SellRegister_inputBox2'
                                name='account'
                                placeholder=' 帳號'
                                value={member.account}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                className='_SellRegister_inputBox2'
                                name='password'
                                placeholder=' 密碼'
                                value={member.password}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                className='_SellRegister_inputBox2'
                                name='confirmPassword'
                                placeholder=' 再輸入一次密碼'
                                value={member.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type='submit'
                                className='_SellRegister_btn'
                                onClick={handleSubmit}
                            >
                                送出
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellRegister;
