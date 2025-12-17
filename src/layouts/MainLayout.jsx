import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;