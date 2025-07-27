import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center flex flex-col items-center space-y-2'>
            <Link to='/'><img className='w-80' src={logo} alt="Drogon news" /></Link>     
            <p>Journalism Without Fear or Favour</p>  
            <strong>{moment().format("dddd ,MMMM Do YYYY")}</strong> 
        </div>
    );
};

export default Header;