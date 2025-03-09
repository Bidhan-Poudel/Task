import React from 'react'
import { useDataContext } from '../context/DataContext'

export const Cart = () => {
    const { cart } = useDataContext();

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id} className='flex justify-between items-center border-b-2 border-gray-200 p-4'>
                    <img src={item.image} alt={item.name} className='w-20 h-20 object-cover' />
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-bold'>{item.name}</h3>
                        <p className='text-sm'>Price: {item.price}</p>
                        <p className='text-sm'>Quantity: {item.quantity}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
