import React from 'react';
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const { title, details, author, image_url, total_view, rating, _id } = news;
    return (
        <div className="bg-white shadow-lg rounded-lg border-2 p-3">
            <div className="flex items-center mb-4 bg-gray-300 p-2">
                <img
                    src={author.img} // Replace with actual image source
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <h3 className="text-gray-800 font-semibold">{author.name}</h3>
                    <p className="text-gray-500 text-sm">{author.published_date}</p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                    <i className="fas fa-share-alt" />
                </button>
            </div>

            <h2 className="text-lg font-bold text-gray-800 mb-2">
                {title}
            </h2>

            <img
                src={image_url} // Replace with actual image source
                alt="News"
                className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-600 text-sm mb-4">
                {details.slice(0, 200)}...
                <Link to={`/news/${_id}`}><button className="text-blue-500 font-semibold ml-1 hover:underline">Read More</button></Link>
            </p>

            <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
                <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar />
                    <span>{rating.number}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};
export default News;