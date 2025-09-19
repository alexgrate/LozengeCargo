import React from 'react'
import { features } from '../constants'

const WhyChooseUs = () => {
    return (
        <section className='py-16 bg-white'>
            <div className='max-w-6xl mx-auto px-6 text-center'>
                <h2 className='text-3xl font-bold text-gray-900 hover:scale-105 transition-all duration-500'>Why Choose Our Platform?</h2>

                <div className='mt-2 w-20 h-1 bg-red-500 mx-auto rounded'></div>

                <p className='mt-4 text-gray-500'>Experience seamless logistics with our cutting-edge technology and dedicated support team</p>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {features.map((features, index) => (
                        <div key={index} className="group bg-white rounded-2xl border border-gray-200 p-8 text-left 
                        transform transition duration-300 shadow-lg hover:scale-105 
                        hover:border-red-400 hover:shadow-2xl">
                            <div className={`w-16 h-16 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${features.iconBg} mb-6`}>
                                {features.icon}
                            </div>
                            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#dc2626]">
                                {features.title}
                            </h3>
                            <p className='mt-2 text-gray-600 text-sm'>
                                {features.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs