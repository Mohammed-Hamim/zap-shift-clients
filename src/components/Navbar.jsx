import React from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Navbar = () => {
    const links = <>
    <li><NavLink>Services</NavLink></li>
    <li><NavLink to='/coverage'>Coverage</NavLink></li>
    <li><NavLink>Pricing</NavLink></li>
    <li><NavLink>About-us</NavLink></li>
    <li><NavLink>Be a rider</NavLink></li>
    </>
    return (
        <div className="navbar container mx-auto rounded-xl bg-base-100 py-4 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-secondary-content font-semibold">
                        {links}
                    </ul>
                </div>
                 <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-2.5 px-1 text-secondary-content font-semibold">
                   {
                    links
                   }
                </ul>
            </div>
            <div className="navbar-end">
                  <Link to='/login'  className='btn btn-outline border-gray-400 rounded-xl mx-2 hidden md:flex'>Sing in</Link>
                  <Link className='btn  border-o bg-primary rounded-xl'>Be a Rider</Link>
                  <span className='p-3 bg-primary-content text-primary rounded-full'>
                    <MdOutlineArrowOutward />
                  </span>
            </div>
        </div>
    );
};

export default Navbar;