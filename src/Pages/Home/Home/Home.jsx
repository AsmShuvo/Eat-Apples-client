import React from 'react';
import Navbar from '../Navbar/Navbar';
import MiniNav from '../MiniNav/MiniNav';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <MiniNav/>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Home;