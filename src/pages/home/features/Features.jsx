import React from 'react';
import liveTracking from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'

const Features = () => {
    return (
        <div>
            <div className='space-y-3.5'>
                <div className='bg-white rounded-xl p-5 flex flex-col md:flex-row gap-10 justify-between '>
                    <img src={liveTracking} alt="" />
                    <div className='border-0 md:border-l-1 border-secondary p-8 border-dashed  '>
                        <h3 className='text-2xl font-bold text-secondary'>Live Parcel Tracking</h3>
                        <p>
                            Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                        </p>

                    </div>
                </div>
                 <div className='bg-white rounded-xl p-5 flex flex-col md:flex-row gap-10 justify-between '>
                    <img src={safeDelivery} alt="" />
                    <div className='border-0 md:border-l-1 border-secondary p-8 border-dashed  '>
                        <h3 className='text-2xl font-bold text-secondary'>24/7 Call Center Support</h3>
                        <p>
                            Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                        </p>

                    </div>
                </div>
                 <div className='bg-white rounded-xl p-5 flex flex-col md:flex-row gap-10 justify-between '>
                    <img src={safeDelivery} alt="" />
                    <div className='border-0 md:border-l-1 border-secondary p-8 border-dashed  '>
                        <h3 className='text-2xl font-bold text-secondary'>100% Safe Delivery</h3>
                        <p>
                            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;