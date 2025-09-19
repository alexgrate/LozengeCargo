import React from 'react'
import { Cuboid, UserCircle, Calculator, Send } from 'lucide-react'

const ShippingQuoteCalculator = () => {
    return (
        <section className='bg-white p-8 rounded-2xl max-w-4xl mx-auto mt-16 '>
            <h1 className='text-3xl font-bold text-gray-900 text-center mb-2'>Shipping Quote Calculator</h1>
            <p className="text-gray-600 text-center mb-8">Fill out the details below to get an instant quote for your shipment</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <div className='flex items-center mb-4'>
                        <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-2">
                            <Cuboid className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Shipment Details</h2>
                    </div>

                    <span className='text-sm'>Service Type</span>
                    <div className='grid grid-cols-2 gap-4 mb-6 mt-2'>
                        <div className='bg-white border border-blue-200 rounded-md p-3 cursor-pointer hover:shadow-md'>
                            <h3 className="text-sm font-medium text-gray-900">Express Delivery</h3>
                            <p className="text-xs text-gray-500">Same-day or next-day delivery</p>
                            <p className="text-xs text-blue-600 mt-1">From $15.99</p>
                        </div>

                        <div className='bg-white border border-blue-200 rounded-md p-3 cursor-pointer hover:shadow-md'>
                            <h3 className="text-sm font-medium text-gray-900">Standard Shipping</h3>
                            <p className="text-xs text-gray-500">3-5 business days</p>
                            <p className="text-xs text-blue-600 mt-1">From $8.99</p>
                        </div>

                        <div className='bg-white border border-blue-200 rounded-md p-3 cursor-pointer hover:shadow-md'>
                            <h3 className="text-sm font-medium text-gray-900">International Shipping</h3>
                            <p className="text-xs text-gray-500">5-15 business days</p>
                            <p className="text-xs text-blue-600 mt-1">From $29.99</p>
                        </div>

                        <div className='bg-white border border-blue-200 rounded-md p-3 cursor-pointer hover:shadow-md'>
                            <h3 className="text-sm font-medium text-gray-900">Freight Services</h3>
                            <p className="text-xs text-gray-500">Heavy cargo solutions</p>
                            <p className="text-xs text-blue-600 mt-1">From $89.99</p>
                        </div>

                        <div className='bg-white border border-blue-200 rounded-md p-3 cursor-pointer hover:shadow-md'>
                            <h3 className="text-sm font-medium text-gray-900">Warehouse Storage</h3>
                            <p className="text-xs text-gray-500">Per sq ft monthly</p>
                            <p className="text-xs text-blue-600 mt-1">From $0.5</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">From ZIP Code</label>
                            <input
                                type="text"
                                placeholder="10001"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                        <label className="block text-sm text-gray-700 mb-1">To ZIP Code</label>
                        <input
                            type="text"
                            placeholder="90210"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>
                    </div>
                    

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Package Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
                        <option>Package</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Weight (lbs)</label>
                            <input
                                type="number"
                                placeholder="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Length (in)</label>
                            <input
                                type="number"
                                placeholder="12"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Width (in)</label>
                            <input
                                type="number"
                                placeholder="8"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Height (in)</label>
                            <input
                                type="number"
                                placeholder="6"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Declared Value ($)</label>
                            <input
                                type="number"
                                placeholder="100"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Pickup Date</label>
                            <input
                                type="date"
                                placeholder="dd/mm/yyyy"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className='mt-8'>
                        <label className="block text-sm text-gray-700 mb-2">Delivery Options</label>
                        <div className="space-y-2">
                        <label className="flex items-center bg-blue-100 text-blue-700 border border-blue-500 px-4 py-2 rounded-md cursor-pointer">
                            <input type="radio" name="delivery" className="mr-2" checked />
                            Standard Delivery
                        </label>
                        <label className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-md cursor-pointer">
                            <input type="radio" className="mr-2" />
                            Signature Required
                        </label>
                        <label className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-md cursor-pointer">
                            <input type="radio" className="mr-2" />
                            White Glove Service
                        </label>
                        <label className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-md cursor-pointer">
                            <input type="radio" className="mr-2" />
                            Scheduled Appointment
                        </label>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="flex items-center mb-4">
                        <div className="bg-green-100 text-green-600 rounded-full p-2 mr-2">
                            <UserCircle className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Email</label>
                        <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
                        <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-1">Company (Optional)</label>
                        <input
                        type="text"
                        placeholder="ABC Company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full bg-blue-100 text-blue-700 px-4 py-3 rounded-md font-medium transition transform duration-300 hover:bg-blue-200 hover:scale-105 mb-3 cursor-pointer flex items-center justify-center gap-2">
                        <Calculator className='w-4 h-4' />
                        Calculate Estimate
                    </button>
                    <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md font-medium transition transform duration-300 hover:bg-indigo-700 hover:scale-105 cursor-pointer flex items-center justify-center gap-2">
                        <Send className='w-4 h-4' />
                        Get Official Quote
                    </button>


                </div>
            </div>
            

            
        </section>
    )
}

export default ShippingQuoteCalculator