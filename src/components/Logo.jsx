import React from 'react';
import logoPng from '../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (

        <Link to="/">
            <div className='flex justify-center items-end'>
                <img src={logoPng} alt="" />
                <p className='-ml-2 text-3xl font-bold'>ZapShift</p>
            </div>
        </Link>

    );
};

export default Logo;