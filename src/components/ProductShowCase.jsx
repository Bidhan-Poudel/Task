import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionTitle } from './shared/SectionTitle';
import { ProductCard } from './shared';

export const ProductShowCase = ({ products }) => {
  return (
    <section className="container mx-auto px-6 pt-16 md:px-12">
      <SectionTitle title='Top Product of the Month' link={"/products"} />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}

      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>

            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
