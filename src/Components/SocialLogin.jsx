import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-bold text-lg'>Login with</h2>
            <button className='btn flex items-center gap-2 w-full'>
                <FcGoogle className='text-2xl'></FcGoogle>
                <span className='text-blue-500'>Login with Google</span>
            </button>
            <button className='btn flex items-center gap-2 w-full'>
                <FaGithub className='text-2xl'></FaGithub>
                <span className='text-blue-500'>Login with Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;