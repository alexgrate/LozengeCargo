import React from 'react'

const Newsletter = () => {
    return (
        <section className="bg-gradient-to-r from-red-700 via-red-900 to-gray-900 py-16 px-4 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-2">Stay Updated with Logistics News</h2>
                <p className="text-gray-300 mb-6">
                    Get the latest updates on shipping trends, new services, and exclusive offers
                </p>
                <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-2 items-center justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full lg:w-64 md:w-64 sm:w-64 px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                    <button className="w-full lg:w-32 md:w-32 sm:w-32 bg-white text-[#dc2626] px-6 py-2 rounded-md transition transform duration-300 hover:scale-105 cursor-pointer">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter