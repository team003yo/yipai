import React from 'react';
import './sellregister.css';

import { Link } from "react-router-dom";
import HeadImg from "../HeadImg";
import { FaUserCircle } from 'react-icons/fa';
import { height } from '@mui/system';


const SellRegister = () => (
  <>
   <div id='SellRegister'>
            <div className='_SellRegister_BG'>
                <div className='_SellRegister_flex _SellRegister_buyerbox'>
                    <div className='_SellRegister_SellRegisterIcon d-flex'>
                    <FaUserCircle style={{width: "50px" ,height:"50px"}}/>
                    <h2 className='_SellRegister_SellRegisterIcon＿text'>賣家註冊</h2>
                    </div>
                    <form method='POST' action='' className='_SellRegister_flex d-inline'>
                        <input
                            type='text'
                            className='_SellRegister_inputBox'
                            name='accountNumber'
                            placeholder=' 姓名'
                        />
                        <input
                            type='text'
                            className='_SellRegister_inputBox2'
                            name='password'
                            placeholder=' 帳號'
                        />
                        <input
                            type='password'
                            className='_SellRegister_inputBox2'
                            name='password'
                            placeholder=' 密碼'
                        />
                        <input
                            type='password'
                            className='_SellRegister_inputBox2'
                            name='password'
                            placeholder=' 再輸入一次密碼'
                        />
                        <button type='submit' className='_SellRegister_btn'>
                            送出
                        </button>
                    </form>
                </div>
            </div>
    </div>
  </>
);

export default SellRegister;