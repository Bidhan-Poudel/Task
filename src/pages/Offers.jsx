import React from 'react'
import { useDataContext } from '../context/DataContext'
import { Hero, OfferCard, SectionTitle } from '../components/shared';
import Layout from '../layouts/Layout';

export const Offer = () => {
  const {data}= useDataContext();
  const {topOffers}=data;
  return (
    <Layout>
      <Hero title={"offers"}/>
      <div className=' container mx-auto px-6 my-16 md:px-12'>
        <SectionTitle title='Offers' />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topOffers.map((topOffer) => (
            <OfferCard key={topOffer.id} offer={topOffer} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
