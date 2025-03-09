import React, { useRef } from 'react'
import { FeaturedPeople,FranchiseSection, PatternEvent, ProductShowCase, PromoBanners, TopMemberLuckyDraw, TopOffers } from "../components";
import { useDataContext } from '../context/DataContext';
import Layout from '../layouts/Layout';
import { Hero } from '../components/shared';

export const Home = () => {
    const { data } = useDataContext();
    const {people, bannerImage, promotionalBannerImage, platforms, topOffers, productShowcase, patterns, events, franchises, members, luckyDrawWinners}= data;
    const targetRef = useRef(null);
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Layout>
            <Hero banner={bannerImage} handleScroll={handleScroll} title={"home"}/>
            <FeaturedPeople peoples={people} platforms={platforms} />
            <TopOffers offers={topOffers} targetRef={targetRef} />
            <ProductShowCase products={productShowcase} />
            <PromoBanners banners={promotionalBannerImage} />
            <PatternEvent patterns={patterns} events={events} />
            <PromoBanners banners={promotionalBannerImage} />
            <FranchiseSection franchises={franchises} />
            <TopMemberLuckyDraw members={members} luckyDrawWinners={luckyDrawWinners} />
        </Layout>
    );
};

