import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { toast } from 'react-hot-toast';

export const OfferCard = ({ offer }) => {

    const { cart, setCart } = useDataContext();

    const addToCart = () => {
        const isInCart = cart.some(item => item.id === offer.id);

        if (isInCart) {
            setCart((prevCart) => prevCart.filter(item => item.id !== offer.id));
            toast(`${offer.name} removed from cart!`, {
                icon: '❌',
                style: {
                    background: '#f44336',
                    color: '#fff',
                },
            });
        } else {
            setCart((prevCart) => [...prevCart, offer]);
            toast.success(`${offer.name} added to cart!`);
        }
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
            <Link to="#" className='h-40 overflow-hidden'>
                <img
                    className="rounded-t-lg w-full h-40 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                    src={offer.image}
                    alt="product image"
                />
            </Link>
            <div className="px-5 py-5">
                <a href="#">
                    <h5 className="text-md font-semibold tracking-tight text-gray-900 pb-4 border-b-2 border-gray-200">
                        {offer.name}
                    </h5>
                    <p className="text-sm text-gray-500 mt-2">{offer.description}</p>
                </a>
                <div className="flex items-center justify-between mt-5">
                    <span className="text-lg font-bold text-primary">${offer.price}</span>
                    <div className="flex items-center">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-green-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-sm">5.0</span>
                    </div>
                </div>
                <button
                    className="w-full bg-primary text-white font-semibold mt-4 py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                    onClick={addToCart}
                >
                    {cart.some(item => item.id === offer.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};
