import React from 'react';

export const Hero = ({ banner, handleScroll, title }) => {
  return (
    <div className="container mx-auto px-6 pt-16 md:px-12 bg-white">
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 md:py-32 rounded-[30px] px-6 sm:px-12 md:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              {title} Ipsum is simply dummy
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Learn business basics from instantly successful dummy text!
            </p>
            <button
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
              onClick={handleScroll}
            >
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={banner}
              alt="Promotional Banner"
              className="w-full h-auto max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
