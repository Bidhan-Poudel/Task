import React, { useRef } from 'react'
import { Banner, FeaturedPeople, Footer, FranchiseSection, PatternEvent, ProductShowCase, PromoBanners, TopMemberLuckyDraw, TopOffers } from "../components";
import { useDataContext } from '../context/DataContext';

export const Home = () => {
    const { data } = useDataContext();
    const {people, bannerImage, promotionalBannerImage, platforms, topOffers, productShowcase, patterns, events, franchises, members, luckyDrawWinners}= data;
    
    console.log()
    const targetRef = useRef(null);
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Banner bannerImage={bannerImage} handleScroll={handleScroll}/>
            <FeaturedPeople peoples={people} platforms={platforms} />
            <TopOffers offers={topOffers} targetRef={targetRef} />
            <ProductShowCase products={productShowcase} />
            <PromoBanners banners={promotionalBannerImage} />
            <PatternEvent patterns={patterns} events={events} />
            <PromoBanners banners={promotionalBannerImage} />
            <FranchiseSection franchises={franchises} />
            <TopMemberLuckyDraw members={members} luckyDrawWinners={luckyDrawWinners} />
            <Footer />
        </div>
    );
};

