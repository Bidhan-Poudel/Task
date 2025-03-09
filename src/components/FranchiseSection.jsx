import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from './shared/SectionTitle';

export const FranchiseSection = ({franchises}) => {
  return (
    <section className="container mx-auto px-12 pt-16">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Top Franchise of the Month</h2> */}
      <SectionTitle title='Top Franchise of the Month' link={"/franchise"} />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 8 },
        }}

      >

        {franchises.map((franchise) => (
          <SwiperSlide key={franchise.id}>

            <a
              key={franchise.id}
              href={franchise.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-32 h-32 m-auto p-0 border rounded-full shadow-md "
            >
              <img
                src={franchise.img}
                alt={franchise.name}
                className="mx-auto w-32 h-32 object-cover rounded-full hover:shadow-lg transition-transform transform hover:scale-105"
              />
            </a>
            <p className="mt-4 text-lg font-medium text-center">{franchise.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
