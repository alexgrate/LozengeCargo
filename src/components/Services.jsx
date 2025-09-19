import React from 'react'
import { services } from '../constants'

const Services = () => {
    return (
        <section className='py-16 bg-gray-100'>
            <div className='max-w-6xl mx-auto px-6 text-center'>
                <h2 className='text-3xl font-bold text-gray-900 hover:scale-105 transition-all duration-500'>Our Services</h2>
                <p className='mt-4 text-gray-500'>Comprehensive logistics solutions tailored to meet your shipping needs</p>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {services.map((services, index) => (
                        <div key={index} className='bg-white p-6 rounded-2xl border border-gray-200 text-left group transform transition duration-300 shadow-lg hover:scale-105 hover:shadow-2xl'>
                            <div className='flex justify-center'>
                                <img src={services.image} alt="Service-1" className='w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-110' />
                            </div>
                            <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 mt-4 text-[#dc2626] transition-transform duration-300 group-hover:scale-110'>
                                {services.icon}
                            </div>
                            <h3 className='text-md font-semibold mt-2 transition-colors duration-300 group-hover:text-[#dc2626]'>{services.title}</h3>
                            <p className='text-sm text-gray-600 mt-2'>{services.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services