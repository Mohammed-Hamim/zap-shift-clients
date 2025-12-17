import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className='container mx-auto p-4 md:p-10 bg-primary-content rounded-2xl  flex flex-col items-center justify-center space-y-7'>
            {/* log and description */}
            <div className='max-w-[810px]'>
                <Logo></Logo>
                <p className='text-gray-200 mt-4 text-center'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            {/* nav link  */}
            <div className='text-gray-200 flex flex-col md:flex-row justify-center not-only: space-x-5 w-full border-t-1 border-b-1 border-dashed border-[#03464D] py-4'>
                <NavLink>Services</NavLink>
                <NavLink>Coverage</NavLink>
                <NavLink>About-us</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>Blogs</NavLink>
                <NavLink>Contact</NavLink>
            </div>
            {/* social icons */}
            <div className='flex gap-3'>
                <NavLink className="p-2 rounded-full bg-blue-500 text-white"><FaLinkedinIn /></NavLink>
                <NavLink className="p-2 rounded-full bg-gray-300"> <FaXTwitter /> </NavLink>
                <NavLink className="p-2 rounded-full bg-blue-500 text-white"> <FaFacebookF /> </NavLink>

                <NavLink className="p-2 rounded-full bg-red-500 text-white"> <FaYoutube />  </NavLink>




            </div>
        </footer>
    );
};

export default Footer;