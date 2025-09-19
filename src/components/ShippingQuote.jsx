import React from 'react'
import { Tag, Clock, ShieldCheck } from 'lucide-react'

const ShippingQuote = () => {
    return (
        <section className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-col gap-1 md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 hover:scale-105 transition duration-300 px-4'>
                        <h2 className='text-3xl font-bold text-gray-900 mb-4'>Get Your Shipping Quote</h2>
                        <p className="text-gray-600 mb-6">
                            Tell us about your shipping needs and we'll provide you with a competitive quote within 24 hours.
                        </p>
                        <ul className='space-y-4'>
                            <li className='flex items-start group transition duration-300 cursor-pointer'>
                                <div className='flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 transition-colors duration-300 group-hover:bg-[#dc2626]'>
                                    <Tag className='text-[#dc2626] w-4 h-4 transition-colors duration-300 group-hover:text-white' />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-lg transition-colors duration-300 group-hover:text-[#dc2626]">Competitive Pricing</p>
                                    <p className="text-sm text-gray-600">Best rates in the market</p>
                                </div>
                            </li>

                            <li className='flex items-start group transition duration-300 cursor-pointer'>
                                <div className='flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3  transition-colors duration-300 group-hover:bg-[#dc2626]'>
                                    <Clock className='text-[#dc2626] w-4 h-4 transition-colors duration-300 group-hover:text-white' />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-lg transition-colors duration-300 group-hover:text-[#dc2626]">Quick Response</p>
                                    <p className="text-sm text-gray-600">24-hour quote turnaround</p>
                                </div>
                            </li>

                            <li className='flex items-start group transition duration-300 cursor-pointer'>
                                <div className='flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3  transition-colors duration-300 group-hover:bg-[#dc2626]'>
                                    <ShieldCheck className='text-[#dc2626] w-4 h-4 transition-colors duration-300 group-hover:text-white' />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-lg transition-colors duration-300 group-hover:text-[#dc2626]">Secure Shipping</p>
                                    <p className="text-sm text-gray-600">Full insurance coverage</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition duration-300">
                        <input
                        type="text"
                        placeholder="Tracking Number"
                        className="w-full lg:w-48 md:w-48 px-4 py-2 border text-sm bg-white border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button className="w-full bg-[#dc2626] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#b82222] hover:scale-105 cursor-pointer">
                        Track Package
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShippingQuote