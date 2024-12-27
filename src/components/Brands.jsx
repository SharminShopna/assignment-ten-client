import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';
import brand7 from '../assets/brand7.png';
import brand8 from '../assets/brand8.png';
const Brands = () => {
    return (
        <>
          <div className='flex gap-2 items-center my-16'>
            <p className='bg-blue-900 text-xl font-bold text-white px-8 py-6 rounded-lg'>Top Brands</p>
            <Marquee pauseOnHover={true} speed={42}className='space-x-20'>
                <div className='flex gap-16 '>
                     
                     <img src={brand1} alt="" className='h-16' />
                     
                     <img src={brand2} alt="" className='h-16' />

                     <img src={brand3} alt="" className='h-16' />
                     <img src={brand4} alt="" className='h-16' />
                     <img src={brand5} alt="" className='h-16' />
                     <img src={brand6} alt="" className='h-16' />
                     <img src={brand7} alt="" className='h-16' />
                     <img src={brand8} alt="" className='h-16' />
                </div>
            
            </Marquee>
         </div>  
        </>
    );
};

export default Brands;