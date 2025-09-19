import React from 'react'

const ImpactNumbers = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-red-900 to-red-800 py-12 px-4 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Our Impact in Numbers</h2>
                <p className="text-gray-300 mb-10">Delivering excellence across the globe</p>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                <div className='group transition transform duration-300 hover:scale-105 cursor-pointer'>
                    <p className="text-4xl font-bold text-red-400 mb-2 transition-colors duration-300 group-hover:text-white">50K+</p>
                    <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">Packages Delivered</p>
                </div>
                <div className='group transition transform duration-300 hover:scale-105 cursor-pointer'>
                    <p className="text-4xl font-bold text-red-400 mb-2 transition-colors duration-300 group-hover:text-white">200+</p>
                    <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">Cities Covered</p>
                </div>
                <div className='group transition transform duration-300 hover:scale-105 cursor-pointer'>
                    <p className="text-4xl font-bold text-red-400 mb-2 transition-colors duration-300 group-hover:text-white">99.9%</p>
                    <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">On-Time Delivery</p>
                </div>
                <div className='group transition transform duration-300 hover:scale-105 cursor-pointer'>
                    <p className="text-4xl font-bold text-red-400 mb-2 transition-colors duration-300 group-hover:text-white">24/7</p>
                    <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">Customer Support</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ImpactNumbers