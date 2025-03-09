import React from 'react';
import { Link } from 'react-router-dom';

export const PromoBanners = ({ banners }) => {
  return (
    <section className="container mx-auto px-6 pt-16 md:px-12">
      <Link to="/offers">
        <div className="bg-gradient-to-r from-primary to-blue-900 text-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between hover:transition-transform transform hover:scale-102 cursor-pointer">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Best Deal Online on Smart Wearables
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl">UP TO 50% OFF</p>
            </div>
            <img
              src={banners}
              alt="Smart Wearable"
              className="h-48 object-cover rounded-lg mt-6 md:mt-0 md:w-1/2 w-full h-full" // w-full for small screens
            />
          </div>
        </div>
      </Link>
    </section>
  );
};
