import React from 'react';
import Banner from './banner/Banner';
import HowWork from './howWork/HowWork';
import Service from './ourService/Service';
import Brands from './brands/Brands';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <HowWork></HowWork>
            <Service></Service>
           <div>
            <h2 className='text-2xl mb-5 font-bold text-secondary text-center'>We've helped thousands of sales teams</h2>
            <div className='py-5'>
                 <Brands></Brands>
            </div>
           </div>
        </div>
    );
};

export default Home;