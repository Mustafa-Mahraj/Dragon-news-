import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div>

            </div>
            <ul className='space-x-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </ul>
            <div className='flex gap-4 items-center'>
                <img src={userIcon} alt="" />
                <Link to='/login'>
                    <button className='btn bg-black text-white px-10'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;