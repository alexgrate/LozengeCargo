import React from 'react'
import { Eye, Goal } from 'lucide-react'

const AboutCompany = () => {
    return (
        <section className='bg-blue-50 py-12 px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    We're revolutionizing the logistics industry with innovative solutions, exceptional service, and a commitment to connecting people and businesses worldwide through reliable shipping.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto '>
                    <div className="bg-white p-6 rounded-xl shadow-md relative text-left">
                        <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                            <Eye className='text-blue-500 w-5 h-5' />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Our Vision</h3>
                        <p className="text-gray-600 text-sm">
                            To be the world's most trusted logistics partner, connecting communities and businesses through innovative, sustainable, and reliable shipping solutions that make distance irrelevant.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md relative text-left">
                        <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center">
                            <Goal className='text-green-500 w-5 h-5' />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Our Mission</h3>
                        <p className="text-gray-600 text-sm">
                            To provide exceptional logistics services that exceed customer expectations through cutting-edge technology, environmental responsibility, and unwavering commitment to quality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany