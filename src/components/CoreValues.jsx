import React from 'react'
import { values } from '../constants'

const CoreValues = () => {
    return (
        <section className='bg-blue-50 py-16'>
            <div className='max-w-5xl mx-auto px-6 text-center'>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {values.map((value, index) => (
                        <div key={index} className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300'>
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-100 p-2 rounded-full">{value.icon}</div>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 text-xs">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValues