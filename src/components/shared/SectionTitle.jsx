import React from 'react'

export const SectionTitle = ({ title }) => {
    return (
        <div className='flex justify-between p-0 mb-16 w-full border-b-2 border-gray-200 '>
            <h2 className='text-2xl font-bold mb-8 text-center'>{title}</h2>
            <div className='w-16 h-1'>View All</div>
        </div>
    )
}
