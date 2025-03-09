import React from 'react'

export const UserProfileCard = ({ user }) => {
    return (
        <div> <img
            src={user.img}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
        />
            <p className="mt-4 text-lg font-medium">{user.name}</p></div>
    )
}
