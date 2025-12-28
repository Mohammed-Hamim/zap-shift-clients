import React from 'react';
import servicePng from '../../../assets/service.png'

const Service = () => {
    return (
        <div className='bg-secondary rounded-xl p-4 md:p-10'>
            <div className='text-center max-w-[700px] mx-auto mb-10'>
                <h2 className='text-white font-bold text-2xl'>Our Service</h2>
                <p className='text-gray-200 text-sm leading-relaxed'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {/* service 1 */}
                <div className='bg-white hover:bg-primary rounded-xl p-4 text-center space-y-2.5'>
                    <img className='mx-auto' src={servicePng} alt="" />
                    <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                    <p className='text-sm leading-relaxed'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* service 2 */}
                <div className='bg-white hover:bg-primary rounded-xl p-4 text-center space-y-2.5'>
                    <img className='mx-auto' src={servicePng} alt="" />
                    <h2 className='text-xl font-semibold text-secondary'>Nationwide Delivery</h2>
                    <p className='text-sm leading-relaxed'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                {/* service 3 */}
                <div className='bg-white hover:bg-primary rounded-xl p-4 text-center space-y-2.5'>
                    <img className='mx-auto' src={servicePng} alt="" />
                    <h2 className='text-xl font-semibold text-secondary'>Fulfillment Solution</h2>
                    <p className='text-sm leading-relaxed'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                {/* service 4 */}
                <div className='bg-white hover:bg-primary rounded-xl p-4 text-center space-y-2.5'>
                    <img className='mx-auto' src={servicePng} alt="" />
                    <h2 className='text-xl font-semibold text-secondary'>Cash on Home Delivery</h2>
                    <p className='text-sm leading-relaxed'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                {/* service 5 */}
                <div className='bg-white hover:bg-primary rounded-xl p-4 text-center space-y-2.5'>
                    <img className='mx-auto' src={servicePng} alt="" />
                    <h2 className='text-xl font-semibold text-secondary'>Corporate Service / Contract In Logistics</h2>
                    <p className='text-sm leading-relaxed'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                {/* service 6 */}
                <div className='bg-white hover:bg-primary rounded-xl p-4 text-center space-y-2.5'>
                    <img className='mx-auto' src={servicePng} alt="" />
                    <h2 className='text-xl font-semibold text-secondary'>Parcel Return</h2>
                    <p className='text-sm leading-relaxed'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        
        </div>
    );
};

export default Service;