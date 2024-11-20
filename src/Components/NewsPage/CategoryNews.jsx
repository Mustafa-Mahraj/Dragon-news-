import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from './News';

const CategoryNews = () => {

    const { data } = useLoaderData();

    return (
        <div className='border-2 rounded-lg'>
            <div className='p-2'>
                <h2 className='text-lg font-bold mb-1'>Dragon News Home</h2>
                <p className='text-sm text-gray-500 mb-5'>{data.length} news found in this category</p>
            </div>
            <div>
                {
                    data.map(news => <News key={news._id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;