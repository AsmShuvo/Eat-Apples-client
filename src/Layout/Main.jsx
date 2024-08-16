import React from 'react';
import { Outlet } from 'react-router-dom';
import MiniNav from '../Pages/Home/MiniNav/MiniNav';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <MiniNav />
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;