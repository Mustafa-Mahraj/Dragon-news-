import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='max-w-screen-xl mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='max-w-screen-xl mx-auto py-8'>
                <Navbar></Navbar>
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;