import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-10'>
            <img src={logo} alt="" />
            <h2 className='text-gray-400 text-xl'>Journalism Without Fear or Favour</h2>
            <p className='text-lg text-gray-500 font-semibold'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;