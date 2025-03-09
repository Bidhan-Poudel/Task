import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { SectionTitle } from './shared/SectionTitle';
import { UserProfileCard } from './shared';

export const TopMemberLuckyDraw = ({ members, luckyDrawWinners }) => {
  return (
    <section className="container mx-auto px-6 pt-16 my-32 py-16 bg-primary text-white md:px-12" >
      {/* Top Members */}
      <SectionTitle title='Top Members of the Month' link={"/members"} />
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
            <UserProfileCard user={member} />

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
              <UserProfileCard user={winner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
