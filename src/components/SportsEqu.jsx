import React from 'react';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";


const SportsEqu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 100, 
      once: true, 
    });
  }, []);
    return (
        <>
           <div
           className="hero min-h-[600px] my-12 rounded-xl" data-aos="zoom-in"
           style={{
             backgroundImage: "url(https://i.ibb.co.com/NLgkhn7/IMG-4151.jpg)",
            }}>
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Gear Up for Your Game!</h1>
                 <p className="mb-5">
                 Discover a wide range of premium sports equipment designed to enhance your performance. From basketballs to tennis rackets, we have got everything you need to excel in your favorite sport. Shop now and experience unbeatable quality!
                  </p>
                    <Link to={'/discount'} className="btn bg-blue-900 text-white px-12" data-tooltip-id="my-tooltip"
                data-tooltip-content="Click and buy discount items">Shop Now</Link>
                  </div>
                 </div>
                 </div>
                 <Tooltip id="my-tooltip" /> 
        </>
    );
};

export default SportsEqu;