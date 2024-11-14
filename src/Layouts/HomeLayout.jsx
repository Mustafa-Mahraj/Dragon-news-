import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import RightNav from '../Components/RightNav';
import { Outlet } from 'react-router-dom';

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
            <main className='max-w-screen-xl mx-auto grid md:grid-cols-12 gap-4'>
                <aside className='col-span-3 border-2'>
                    <Categories></Categories>
                </aside>
                <section className='col-span-6 border-2'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 border-2'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;