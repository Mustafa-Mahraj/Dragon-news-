import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, signOutUser, loading } = useContext(AuthContext);
    console.log(user)

    const handleSignOut = () => {
        signOutUser();
    }

    return (
        <div className='flex justify-between'>
            <div className='text-black'>
                {loading && <span className="loading loading-bars loading-lg"></span>}
                {user && user.email}
            </div>
            <ul className='space-x-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </ul>
            <div className='flex gap-4 items-center'>
                {
                    user? <div className='flex flex-col justify-center items-center'>
                        <img className='w-12 rounded-full border-2' src={user.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div> : <img src={userIcon} alt="" />
                }
                {
                    user ? <button onClick={handleSignOut} className='btn bg-black text-white px-10'>Sign Out</button>
                        :
                        <Link to='/auth/login'>
                            <button className='btn bg-black text-white px-10'>Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;