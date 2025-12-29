import React from 'react';
import Banner from './banner/Banner';
import HowWork from './howWork/HowWork';
import Service from './ourService/Service';
import Brands from './brands/Brands';
import Features from './features/Features';
import Priority from './priority/Priority';
import Reviews from './reviews/Reviews';
 
const reviewsPromise = fetch('/reviews.json').then(res => res.json())
 
const Home = () => {
    console.log(reviewsPromise)
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <HowWork></HowWork>
            <Service></Service>
           <div className='border-b-1 py-8 border-dashed border-secondary'>
            <h2 className='text-2xl mb-5 font-bold text-secondary text-center'>We've helped thousands of sales teams</h2>
            <div className='py-5'>
                 <Brands></Brands>
            </div>
           </div>
            <Features></Features>
            <Priority></Priority>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;