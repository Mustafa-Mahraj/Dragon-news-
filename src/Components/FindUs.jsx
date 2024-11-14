import React from 'react';
import { FaFacebook, FaInstagram  } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-lg'>Find Us</h2>
            <div className="join join-vertical w-full *:bg-base-100 mt-3">
                <button className="btn join-item flex gap-2 items-center justify-start border-2">
                    <FaFacebook className='text-2xl text-blue-600'></FaFacebook>
                    <span>Facebook</span>
                </button>
                <button className="btn join-item flex gap-2 items-center justify-start">
                    <FaTwitter className='text-2xl text-blue-400'></FaTwitter>
                    <span>Twitter</span>
                </button>
                <button className="btn join-item flex gap-2 items-center justify-start">
                    <FaInstagram className='text-2xl text-pink-700'></FaInstagram>
                    <span>Instagram</span>
                </button>
                
            </div>
        </div>
    );
};

export default FindUs;