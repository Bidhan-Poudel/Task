import React from 'react'
import { useDataContext } from '../context/DataContext'
import { FaTrash } from 'react-icons/fa'
import { Hero, SectionTitle } from '../components/shared';
import Layout from '../layouts/Layout';
import { toast } from 'react-hot-toast';

export const Cart = () => {
    const { cart, setCart } = useDataContext();

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
        toast.error('Item removed from cart!');
    };

    return (
        <Layout>
            <Hero title={"Cart"} />
            <div className='mt-16'></div>
            <div className="container mx-auto px-12 py-8">
                <SectionTitle title="Cart" />

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-md" />
                                <div className="text-center mt-4">
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                                </div>
                                
                                <button
                                    className="mt-4 flex items-center gap-2 text-red-500 font-semibold hover:text-red-700"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <FaTrash /> Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};
