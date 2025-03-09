import React from 'react'
import Layout from '../layouts/Layout'
import { EventCard, Hero, SectionTitle } from '../components/shared'
import { useDataContext } from '../context/DataContext'

export const Events = () => {
  const { data } = useDataContext();
  const { events, bannerImage } = data;
  return (
    <Layout>
      <Hero title={"events"} banner={bannerImage} />
      <div className=' container my-16 mx-auto w-full px-12 md:px-8 lg:px-16'>
        <SectionTitle title='Products' />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
