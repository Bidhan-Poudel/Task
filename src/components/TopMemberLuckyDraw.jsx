import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { SectionTitle } from './shared/SectionTitle';

export const TopMemberLuckyDraw = ({ members, luckyDrawWinners }) => {
  return (
    <section className="container mx-auto px-12 my-32 py-16  bg-primary text-white" >
      {/* Top Members */}
      <SectionTitle title='Top Members of the Month' link={"/members"}/>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[FreeMode, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 8 },
        }}
      >
        {members.map((member) => (
          <SwiperSlide key={member.id} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
            />
            <p className="mt-4 text-lg font-medium">{member.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lucky Draw Winners */}
      <div className='pt-16'>

        <SectionTitle title='Top Lucky Draw Winners' link={"/luckydraw-winners"} />
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          freeMode={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 8 },
          }}
        >
          {luckyDrawWinners.map((winner) => (
            <SwiperSlide key={winner.id} className="text-center">
              <img
                src={winner.img}
                alt={winner.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
              />
              <p className="mt-4 text-lg font-medium">{winner.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
