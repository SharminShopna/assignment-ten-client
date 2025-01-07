import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

const AboutSection = () => {
  return (
    <>
    <Helmet>
        <title>AboutUs | Sport</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    <div className='w-11/12 mx-auto'>
        <Header></Header>
    <div className="py-32 px-10 mt-24 my-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-8">About Us</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
            <p className="text-xl mb-6">
              We are dedicated to providing high-performance sports equipment that helps athletes unlock their full potential.
              Our mission is to offer products that ensure peak performance, safety, and durability, whether you're training, competing, or just staying active.
            </p>
            <p className="text-xl mb-6">
              Our team works tirelessly to select the best products that meet the needs of all athletes—professional or amateur. With the latest innovations in sports technology, we aim to give our customers the tools to succeed in their sports endeavors.
            </p>
            <p className="text-xl">
              At our core, we value passion, commitment, and a love for sports. We're not just about selling equipment; we are a partner in your journey towards achieving greatness.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4">
            <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-10 rounded-xl shadow-lg text-center text-white">
              <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-lg">
                We are committed to bringing you the most reliable sports gear, ensuring top-notch quality and service for each product you purchase. Your satisfaction and success are our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AboutSection;
