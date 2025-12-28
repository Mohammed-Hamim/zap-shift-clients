import React from 'react';
import Banner from './banner/Banner';
import HowWork from './howWork/HowWork';
import Service from './ourService/Service';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <HowWork></HowWork>
            <Service></Service>
        </div>
    );
};

export default Home;