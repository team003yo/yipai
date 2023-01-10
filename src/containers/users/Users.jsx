import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { HeatImage } from "./HeatImage";
const Users = () => (
    <div id='users'>
        {/* <HeatImage /> */}
        <h2>您好 May 你現在是藝拍小夥伴啦！</h2>
        <img src={{}} alt="Background" ></img> 
        
    <Link to='/users/login' className="btn btn-info" >買家登入</Link>
    <Link to='/users/login' className="btn btn-primary" >賣家登入</Link>
    </div>
);

export default Users;
