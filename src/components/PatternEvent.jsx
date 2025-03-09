import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from './shared/SectionTitle';

export const PatternEvent = ({patterns, events}) => {
  return (
    <section className="container mx-auto px-12 pt-16">
      {/* Patterns Section */}
      <div className="mb-12">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Top Patterns of the Month</h2> */}
        <SectionTitle title='Top Patterns of the Month' link={"/patterns"} />
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 7 },
          }}

        >
          {patterns.map((pattern) => (
            <SwiperSlide key={pattern.id}>
              <div key={pattern.id} className="text-center rounded-full">
                <img
                  src={pattern.img}
                  alt={pattern.name}
                  className="mx-auto w-32 h-32 object-cover rounded-full shadow-md hover:shadow-lg transition"
                />
                <p className="mt-4 text-lg font-medium">{pattern.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {patterns.map((pattern) => (
            <div key={pattern.id} className="text-center">
              <img
                src={pattern.img}
                alt={pattern.name}
                className="mx-auto w-32 h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition"
              />
              <p className="mt-4 text-lg font-medium">{pattern.name}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Events Section */}
      <div>
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Top Events of the Month</h2> */}
        <SectionTitle title='Top Events of the Month'  link={"/events"}/>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}

        >

          {events.map((event) => (
            <SwiperSlide key={event.id}>

              <div
                key={event.id}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-54 object-cover"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-6 w-full">
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <p className="text-lg">{event.discount}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section >
  )
}
