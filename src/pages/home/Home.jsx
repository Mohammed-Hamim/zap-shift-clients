import React from 'react';
import Banner from './banner/Banner';
import HowWork from './howWork/HowWork';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <HowWork></HowWork>
        </div>
    );
};

export default Home;