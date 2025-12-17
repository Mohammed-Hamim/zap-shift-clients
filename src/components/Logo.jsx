import React from 'react';
import logoPng from '../assets/logo.png'

const Logo = () => {
    return (
      
            <div className='flex justify-center items-end'>
                <img src={logoPng} alt="" />
                <p className='-ml-2 text-3xl font-bold'>ZapShift</p>
            </div>
        
    );
};

export default Logo;