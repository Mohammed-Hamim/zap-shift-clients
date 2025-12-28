import React from 'react';
import bgImage from '../../../assets/be-a-merchant-bg.png'
import locationMerchant from '../../../assets/location-merchant.png'

const Priority = () => {
    return (
        <div
            className="bg-secondary rounded-2xl">
            <div className=" flex flex-col md:flex-row justify-between items-center p-16"
                style={{
                    background: `url(${bgImage})   no-repeat`
                }}
            >
                <div className='flex-1 space-y-8'>
                    <h2 className='text-white font-bold text-3xl'> Merchant and Customer Satisfaction is Our First Priority</h2>
                    <p className='text-gray-200 text-sm'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <button className='btn border-0 rounded-2xl bg-primary'>Become a Merchant</button>
                        <button className='btn btn-outline border-primary rounded-2xl text-primary'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className='flex-1 -ml-10'>
                    <img src={locationMerchant} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Priority;