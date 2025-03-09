import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await fetch('http://localhost:5000/subscribers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                toast.success('Email submitted successfully!', {
                    duration: 3000,
                    position: 'top-right',
                });
                setEmail(''); // Clear input field after successful submission
            } else {
                throw new Error('Failed to submit email');
            }
        } catch (error) {
            toast.error('Error submitting email.', {
                duration: 3000,
                position: 'top-right',
            });
            console.error('Submission error:', error);
        }
    };

    return (
        <div className="mt-4 md:mt-0">
            <Toaster /> {/* For toast notifications */}
            <form className="flex" onSubmit={handleSubmit} noValidate> {/* noValidate prevents default browser validation */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary transition cursor-pointer"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};
