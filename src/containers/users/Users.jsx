import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

const Users = () => (
    <div id='users'>
        <div className='flex-ab flex-col'>
            <div className='box flex'>
                <div className='buyerIcon'></div>
                <Link to='/users/BuyLogin' className='h3'>
                    買家登入
                </Link>
            </div>
            <div className='box2 flex'>
                <div className='sellerIcon'></div>
                <Link to='/users/SellLogin' className='h3'>
                    賣家登入
                </Link>
            </div>
        </div>
        <div className='BG'></div>
    </div>
);

export default Users;
