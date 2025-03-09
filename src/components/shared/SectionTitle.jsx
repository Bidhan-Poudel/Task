import React from 'react'
import { Link } from 'react-router-dom'

export const SectionTitle = ({ title, link }) => {
    return (
        <div className='flex justify-between p-0 mb-16 w-full border-b-2 border-gray-200 flex-wrap'>
            {link == '/members' || link == '/luckydraw-winners' ? (
                <h2 className='text-2xl font-bold mb-8 w-full md:w-auto'>{title}</h2>
            ) : (
                <h2 className='text-2xl font-bold text-primary mb-8 w-full md:w-auto'>{title}</h2>
            )}

            {link && (
                <div className='w-full md:w-auto text-right'>
                    {link == '/members' || link == '/luckydraw-winners' ? (
                        <></>
                    ) : (
                        <Link to={link} className='w-16 h-1 text-primary'>
                            View All &gt;
                        </Link>
                    )}
                </div>
            )}
        </div>

    )
}
