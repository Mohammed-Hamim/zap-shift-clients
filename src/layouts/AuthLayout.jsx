import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (

        <div className='flex flex-col md:flex-row bg-white min-h-screen '>
            <div className=' bg-white flex-1 py-10 px-10'>
                <div className='flex'>
                    <Logo></Logo>
                </div>
                <div className='max-w-[384px] py-8 mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center bg-[#FAFDF0]'>
                <img src={authImg} alt="" />
            </div>
        </div>

    );
};

export default AuthLayout;