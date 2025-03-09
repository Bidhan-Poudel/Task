import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from './shared/SectionTitle';
import { OfferCard } from './shared/OfferCard';
import { Navigation, Pagination } from 'swiper/modules';


export const TopOffers = ({ offers, targetRef }) => {
  return (
    <section className="container mx-auto px-12 pt-16" ref={targetRef}>
      <SectionTitle title='Top Offers of the Month' link={"/offers"} />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        // pagination={{ clickable: true }}
        
      >

        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <OfferCard offer={offer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
