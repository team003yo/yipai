import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

const Users = () => (
    <div id='users'>
        <div className='_users_flex-ab _users_flex-col'>
            <div className='_users_box _users_flex'>
                <div className='_users_buyerIcon'></div>
                <Link to='/users/BuyLogin' className='_users_h3'>
                    買家登入
                </Link>
            </div>
            <div className='_users_box2 _users_flex'>
                <div className='_users_sellerIcon'></div>
                <Link to='/users/SellLogin' className='_users_h3'>
                    賣家登入
                </Link>
            </div>
        </div>
        <div className='_users_BG'></div>
    </div>
);

export default Users;
