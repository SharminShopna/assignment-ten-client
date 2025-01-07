import React from 'react';
import off1 from "../assets/off1.png";
import off2 from "../assets/off2.png";
import off3 from "../assets/off3.png";
import off4 from "../assets/off4.png";
import off5 from "../assets/off5.png";
import off6 from "../assets/off6.png";
import off7 from "../assets/off7.png";
import off8 from "../assets/off8.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { MdOutlineDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';
const DiscountEqu = () => {
    const discounts = [
        { title: "50% Off on Footballs", description: "Grab your football now!", price: "150", image: off1 },
        { title: "30% Off on Basketballs", description: "Best deal on basketballs!", price: "500", image: off2 },
        { title: "20% Off on Tennis Rackets", description: "Swing into action!", price: "750", image: off3 },
        { title: "40% Off on Cricket Kits", description: "Score big savings!", price: "120", image: off4 },
        { title: "25% Off on Badminton Gear", description: "Play like a pro!", price: "1600", image: off5 },
        { title: "35% Off on Gym Equipment", description: "Level up your workouts!", price: "5000", image: off6 },
        { title: "15% Off on Sports Shoes", description: "Step up your game!", price: "1340", image: off7 },
        { title: "Buy 1 Get 1 on Baseball Bats", description: "Double the fun!", price: "900", image: off8 },
      ];
    
      return (
        <>
        <Helmet>
        <title>DiscountEqu | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className='w-11/12 mx-auto'>
        <nav className='py-6'>
            <Header></Header>
        </nav>
        <div className=' mt-28'>
            <h2 className='text-5xl text-center text-blue-900 py-12 font-bold'>Discount Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {discounts.map((discount, index) => (
            <div  key={index} className="card card-side bg-base-100 shadow-xl p-4 border rounded-lg flex flex-row">
            <figure>
              <img
                src={discount.image}
                alt="Movie" className='' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{discount.title}</h2>
              <p className='flex gap-2'><MdOutlineDescription size={20} /> {discount.description}</p>
              <p>${discount.price}</p>
              <div className="card-actions justify-start">
                <Link to={'/'} className="btn bg-blue-900 text-white">Go Back</Link>
              </div>
            </div>
          </div>
          ))}
        </div>
        </div>
        </div>
        <Footer></Footer>
        </>
      );
    
};

export default DiscountEqu;
