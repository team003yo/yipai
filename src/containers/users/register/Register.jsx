import React from "react";
import "./register.css";
import { useState } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
// import HeadImg from "../HeadImg";
import { FaUserCircle } from "react-icons/fa";
// import { height } from "@mui/system";

const Register = () => {
    const [member, setMember] = useState({
        // 自動填入
        name: "Cola",
        account:"cola00981",
        password: "00000000",
        confirmPassword: "00000000",
    });
    // 輸入的值更動的函式
    function handleChange(e) {
        // console.log(e);
        let newMember = { ...member };
        newMember[e.target.name] = e.target.value;
        setMember(newMember);
        // setMember({ ...member, [e.target.name]: e.target.value });
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
            "http://localhost:3001/api/auth/register",
            formData
        );
        console.log(response.data);
    }
    return (
        <>
            <div id='login'>
                <div className='_register_BG'>
                    <div className='_register_flex _register_buyerbox'>
                        <div className='_register_registerIcon d-flex'>
                            <FaUserCircle
                                style={{ width: "50px", height: "50px" }}
                            />
                            <h2 className='_register_registerIcon＿text'>
                                買家註冊
                            </h2>
                        </div>
                        <form
                            method='POST'
                            // 把表單傳送到
                            action='http://localhost:3001/api/auth/register'
                            className='_register_flex d-inline'
                        >
                            <input
                                type='text'
                                className='_register_inputBox'
                                id='name'
                                name='name'
                                placeholder=' 姓名'
                                value={member.name}
                                onChange={handleChange}
                            />
                            <input
                                type='text'
                                className='_register_inputBox2'
                                id='account'
                                name='account'
                                placeholder=' 帳號'
                                value={member.account}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                className='_register_inputBox2'
                                id='password'
                                name='password'
                                placeholder=' 密碼'
                                value={member.password}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                className='_register_inputBox2'
                                id='confirmPassword'
                                name='confirmPassword'
                                placeholder=' 再輸入一次密碼'
                                value={member.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type='submit'
                                className='_register_btn'
                                onClick={handleSubmit}
                            >
                                註冊
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
