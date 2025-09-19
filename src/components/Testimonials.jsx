import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
    return (
        <section className='bg-pink-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto text-center'>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
                <p className="text-gray-600 mb-10">Trusted by thousands of businesses worldwide</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-white p-6 rounded-xl shadow-md text-left hover:scale-105 transition duration-300 transform cursor-pointer'>
                        <div className='flex mb-4'>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4 text-sm italic">
                        "Outstanding service! Their tracking system is incredibly accurate and the delivery times are consistently reliable. Highly recommended for any business."
                        </p>
                        <div className="flex items-center">
                            <div className="bg-red-500 text-white rounded-full w-10 h-10 font-bold flex items-center justify-center mr-3">SJ</div>
                            <div>
                                <p className="font-semibold text-sm text-gray-800">Sarah Johnson</p>
                                <p className="text-xs text-red-500">E-commerce Manager</p>
                                <p className="text-xs text-gray-600">TechStyle Inc.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md text-left hover:scale-105 transition duration-300 transform cursor-pointer">
                        <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-yellow-400" />
                        ))}
                        </div>
                        <p className="text-gray-600 mb-4 text-sm italic">
                        "We've been using their services for 2 years now. The customer support is exceptional and they handle our international shipments flawlessly."
                        </p>
                        <div className="flex items-center">
                        <div className="bg-red-500 text-white rounded-full w-10 h-10 font-bold flex items-center justify-center mr-3">MC</div>
                        <div>
                            <p className="font-semibold text-sm text-gray-800">Michael Chen</p>
                            <p className="text-xs text-red-500">Operations Director</p>
                            <p className="text-xs text-gray-600">Global Retail Co.</p>
                        </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md text-left hover:scale-105 transition duration-300 transform cursor-pointer">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4 text-sm italic">
                        "Perfect for our medical equipment shipments. Their secure handling and real-time updates give us complete peace of mind."
                        </p>
                        <div className="flex items-center">
                            <div className="bg-red-500 text-white rounded-full w-10 h-10 font-bold flex items-center justify-center mr-3">ER</div>
                            <div>
                                <p className="font-semibold text-sm text-gray-800">Emma Rodriguez</p>
                                <p className="text-xs text-red-500">Supply Chain Manager</p>
                                <p className="text-xs text-gray-600">MedTech Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials