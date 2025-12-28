import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaTruckDroplet } from 'react-icons/fa6';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const HowWork = () => {
    return (
        <div className='px-10'>
            <h2 className='text-2xl font-bold mb-5'>How it work</h2>
            <div className='  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 '>
                <div className='rounded-xl bg-white p-4 space-y-4'>
                    <FaTruckDroplet size={30}/>
                    <h3 className='text-secondary font-semibold text-xl'>Booking Pick & Drop</h3>
                    <p className='leading-relaxed'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-xl bg-white p-4 space-y-4'>
                  <CiDeliveryTruck size={30}/>
                    <h3 className='text-secondary font-semibold text-xl'>Cash On Delivery</h3>
                    <p className='leading-relaxed'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-xl bg-white p-4 space-y-4'>
                  <TbTruckDelivery size={30}/>
                    <h3 className='text-secondary font-semibold text-xl'>Delivery Hub</h3>
                    <p className='leading-relaxed'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-xl bg-white p-4 space-y-4'>
                  <MdOutlineDeliveryDining  size={30}/>
                    <h3 className='text-secondary font-semibold text-xl'>Booking SME & Corporate</h3>
                    <p className='leading-relaxed'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWork;