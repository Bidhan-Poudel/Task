import React from 'react'
import { Banner, FeaturedPeople, Footer, FranchiseSection, PatternEvent, ProductShowCase, PromoBanners, TopMemberLuckyDraw, TopOffers } from "../components";

export const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedPeople />
            <TopOffers />
            <ProductShowCase />
            <PromoBanners />
            <PatternEvent />
            <PromoBanners />
            <FranchiseSection />
            <TopMemberLuckyDraw />
            <Footer />
        </div>
    );
};

