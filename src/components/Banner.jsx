import React from 'react'

export const Banner = () => {
  return (
    <div className='container mx-auto px-12  bg-white '>

      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 md:py-32 rounded-xl ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Lorem Ipsum is simply dummy
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Learn business basics from instantly successful dummy text!
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Placeholder Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src="/banner-placeholder.png"
              alt="Promotional Banner"
              className="max-w-full md:max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section >
    </div>
  );
};

