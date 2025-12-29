import React from 'react';
import { FaQuoteRight } from 'react-icons/fa6';

const ReviewCard = ({ review }) => {
    const { userName, review: testimonial, user_photoURL, user_email } = review
    return (
        <div className='bg-white rounded-xl p-5'>
            <FaQuoteRight size={30} className='text-primary' />
            <div className='border-b-1 border-secondary border-dashed pb-4'>
                <p> {testimonial}</p>
            </div>
            <div className='mt-5 flex items-center gap-2.5'>
                <img src={user_photoURL} alt=""  className='rounded-full h-[50px]'/>
                <div>
                    <h2>{userName}</h2>
                    <p>{user_email}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;