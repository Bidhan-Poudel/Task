import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from './shared/SectionTitle';
import { EventCard } from './shared';

export const PatternEvent = ({ patterns, events }) => {
  return (
    <section className="container mx-auto px-6 pt-16 md:px-12">
      {/* Patterns Section */}
      <div className="mb-12">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Top Patterns of the Month</h2> */}
        <SectionTitle title='Top Patterns of the Month' />
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

      </div>
      <div className='py-2'></div>
      {/* Events Section */}
      <div >
        {/* <h2 className="text-3xl font-bold mb-8 text-center">Top Events of the Month</h2> */}
        <SectionTitle title='Top Events of the Month' link={"/events"} />
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
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section >
  )
}
