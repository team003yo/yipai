import React from 'react';
import { Link } from 'react-router-dom';
import './users.css';

const Users = () => (
  <div id='users'>
  Users
  <br />
    <button className='login-button'><Link to='/users/login' >Login</Link></button>
  </div>
);

export default Users;
