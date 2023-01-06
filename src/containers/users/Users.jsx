import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

import { HeatImage } from "./HeatImage";
import { TitleButtons } from "./TitleButtons";
const Users = () => (
    <div id='users'>
        <HeatImage />
        <h1>您好 May 你現在是藝拍小夥伴啦！</h1>
        <TitleButtons
         icon='?' 
         word='帳務設定' 
         />

        {/* <br />
    <button className='login-button'><Link to='/users/login' >Login</Link></button> */}
    </div>
);

export default Users;
