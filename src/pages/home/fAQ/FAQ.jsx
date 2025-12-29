import React, { use } from 'react';
import FaQitem from './FaQitem';


const fAQPromise = fetch('/fAQ.json').then(res => res.json())

const FAQ = () => {
    const fAqs = use(fAQPromise)
     
    return (
        <div>
            <div className='max-w-[600px] mx-auto text-center space-y-3.5'>
                <h2 className='text-2xl font-bold text-secondary'>Frequently Asked Question (FAQ)</h2>
                <p className='text-sm'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className='space-y-2.5 my-8'>
                 {
                    fAqs.map((fAq, index) => 
                    <FaQitem key={index} fAq={fAq}></FaQitem>
                    )
                 }
            </div>
        </div>
    );
};

export default FAQ;