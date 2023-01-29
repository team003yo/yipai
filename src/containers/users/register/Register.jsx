import React from 'react';
import './register.css';

import { Link } from "react-router-dom";
import HeadImg from "../HeadImg";
import { FaUserCircle } from 'react-icons/fa';
import { height } from '@mui/system';


const Register = () => (
  <>
   <div id='login'>
            <div className='_register_BG'>
                <div className='_register_flex _register_buyerbox'>
                    <div className='_register_registerIcon d-flex'>
                    <FaUserCircle style={{width: "50px" ,height:"50px"}}/>
                    <h2 className='_register_registerIcon＿text'>買家註冊</h2>
                    </div>
                    <form method='POST' action='' className='_register_flex d-inline'>
                        <input
                            type='text'
                            className='_register_inputBox'
                            name='accountNumber'
                            placeholder=' 姓名'
                        />
                        <input
                            type='text'
                            className='_register_inputBox2'
                            name='password'
                            placeholder=' 帳號'
                        />
                        <input
                            type='password'
                            className='_register_inputBox2'
                            name='password'
                            placeholder=' 密碼'
                        />
                        <input
                            type='password'
                            className='_register_inputBox2'
                            name='password'
                            placeholder=' 再輸入一次密碼'
                        />
                        <button type='submit' className='_register_btn'>
                            送出
                        </button>
                    </form>
                </div>
            </div>
    </div>
  </>
);

export default Register;