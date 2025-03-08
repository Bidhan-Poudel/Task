import React from 'react'
import { people, platforms } from '../data/data'

export const FeaturedPeople = () => {
  return (
    <section className="container mx-auto px-6 pt-16 grid xs:grid-cols-6  md:grid-cols-2 gap-6 md:px-12">
      {/* People Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">People</h2>
        <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
          {people.map((person) => (
            <div key={person.id} className="flex flex-col items-center bg-gray-200 p-8 rounded-xl">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Platforms Section */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">Platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div key={platform.id} className="flex flex-col items-center bg-gray-200 p-10 rounded-xl">
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-20 h-20 rounded-lg shadow-md"
              />
              {/* <p className="mt-4 text-sm font-medium text-gray-700">{platform.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
