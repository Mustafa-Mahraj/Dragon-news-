import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='py-6 bg-[#F3F3F3]'>
            <header className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;