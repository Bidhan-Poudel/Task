import React from 'react'

export const EventCard = ({event}) => {
    return (
        <div
            key={event.id}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
            <img
                src={event.img}
                alt={event.name}
                className="w-full h-54 object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-6 w-full">
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-lg">{event.discount}</p>
            </div>
        </div>
    )
}
