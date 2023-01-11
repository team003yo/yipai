import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

const Users = () => (
    <div id='users'>
        {/* <h2>您好 May 你現在是藝拍小夥伴啦！</h2> */}
        {/* <img src={{}} alt="Background" ></img>  */}
        <div className='flex-ab flex-col'>
            <div className='box'>
                <div className='buyerIcon'></div>
                <Link to='/users/login' className="">買家登入</Link>
            </div>
            <div className='box2'>
                <div className='sellerIcon'></div>
                <Link to='/users/login'>賣家登入</Link>
            </div>
        </div>
        <div className='BG'></div>
    </div>
);

export default Users;
