import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-10 bg-gray-200 rounded-lg p-2'>
            <div className='bg-red-400 text-white p-2 rounded-lg'>
                <p>Latest News</p>
            </div>
            <Marquee pauseOnHover={true} className='text-blue-500 space-x-10'>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus modi quibusdam vel quidem</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus modi quibusdam vel quidem</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus modi quibusdam vel quidem</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;