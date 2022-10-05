import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../conponents/Header/Navbar"
import Experience from "../conponents/Experience/Experience"
import Footer from "../conponents/Footer/Footer"

const Main = () => {
    return (
        <div>
            <Header />
            <Experience />
            <Footer />
            <Outlet />
        </div>
    );
};

export default Main;