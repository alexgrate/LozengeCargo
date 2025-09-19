import React from 'react'
import image1 from '../assets/calltoaction1.jpg'
import { NavLink } from 'react-router-dom'

const CallToAction = () => {
    return (
        <div
        className="relative bg-gradient-to-r from-red-600 to-red-900 text-white py-16 px-4 text-center"
        style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-900 to-gray-900 opacity-50"></div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Ready to Ship with Confidence?</h2>
                    <p className="text-gray-200 mb-6">
                    Join thousands of satisfied customers who trust us with their logistics needs.
                    </p>
                    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-2 items-center justify-center">
                        <NavLink to={'/ShipNow'} className="w-full lg:w-64 md:w-64 sm:w-64 bg-white text-[#dc2626] px-6 py-3 rounded-md transition transform duration-300 hover:scale-105 cursor-pointer">
                            Start Shipping Now
                        </NavLink>
                        <NavLink to={'/Support'} className="w-full lg:w-48 md:w-48 sm:w-32 bg-none border border-white text-white px-6 py-3 rounded-md hover:bg-white transition transform duration-300 hover:scale-105 hover:text-[#dc2626] cursor-pointer">
                            Contact Sales
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default CallToAction