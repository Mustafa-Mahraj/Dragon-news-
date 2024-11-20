import React from 'react';
import Header from './Header';
import RightNav from './RightNav';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data = useLoaderData()
    const news = data.data[0];

    const {image_url, title, details} = news;

    return (
        <div className='max-w-screen-xl mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-4'>
                <section className='col-span-9'>
                    <h2 className='text-2xl font-bold'>Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl mt-2">
                        <figure className="p-5">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to='/' className="btn btn-accent">Back to category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;