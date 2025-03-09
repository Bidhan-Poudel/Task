import React from 'react'
import { SectionTitle } from './shared/SectionTitle'

export const FeaturedPeople = ({ peoples, platforms }) => {
  return (
    <section className="container mx-auto px-6 pt-16 grid lg:grid-cols-2 gap-6 md:px-12">
      {/* People Section */}
      <div className="mb-16 lg:mb-0">
        <SectionTitle title='People' />
        <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
          {peoples.map((person) => (
            <div key={person.id} className="flex flex-col items-center bg-gray-200 p-8 rounded-xl">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <p className="mt-4 text-sm font-medium text-gray-700">{person.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platforms Section */}
      <div>
        <SectionTitle title='Platforms' />
        <div>
          {/* Title Skeleton */}

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-200 p-10 rounded-xl animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="w-28 h-28 bg-gray-300 rounded-lg shadow-md"></div>

                {/* Name Skeleton */}
                {/* <div className="mt-4 h-4 w-20 bg-gray-300 rounded-md"></div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
