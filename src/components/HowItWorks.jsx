import React from 'react'
import { BookDownIcon, Truck, LocateIcon, CheckCheck } from 'lucide-react'

const HowItWorks = () => {
    return (
        <section className='py-16 bg-white'>
            <div className='max-w-6xl mx-auto px-6 text-center'>
                <h2 className='text-3xl font-bold text-gray-900 hover:scale-105 transition-all duration-500'>How It Works</h2>
                <p className='mt-4 text-gray-500'>Simple steps to get your packages delivered safely and on time</p>

                <div className="relative flex flex-col items-center py-8 bg-white mt-20">
                    <div className="absolute top-0 bottom-0 w-1 bg-[#dc2626] hidden lg:flex md:flex"></div>

                    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center gap-4 w-full mb-16">
                        <div className="flex-1 flex justify-end lg:pr-8 md:pr-8 ">
                            <div className="bg-white p-6 rounded-xl shadow-md max-w-sm text-left group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex items-center mb-2 gap-4">
                                    <div className='text-[#dc2626] font-bold text-3xl'>01</div>
                                    <div className="bg-pink-100 text-[#dc2626] font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg transition-colors duration-300 group-hover:bg-[#dc2626] group-hover:text-white"><BookDownIcon /></div>
                                </div>
                                <h3 className="font-semibold text-gray-800 text-xl mb-1 transition-colors duration-300 group-hover:text-[#dc2626]">Book Your Shipment</h3>
                                <p className="text-gray-600 text-sm">
                                Enter package details, pickup and delivery addresses through our easy-to-use platform.
                                </p>
                            </div>
                        </div>

                        <div className="flex-none z-10">
                            <div className="bg-[#dc2626] text-white rounded-full w-15 h-15 flex items-center justify-center text-lg font-bold shadow-md transition-transform duration-300 hover:scale-110">1</div>
                        </div>

                        <div className="flex-1"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center gap-4 w-full">
                        <div className="flex-1"></div>

                        <div className="flex-none lg:order-1 md:order-1 order-2 z-10">
                            <div className="bg-[#dc2626] text-white rounded-full w-15 h-15 flex items-center justify-center text-lg font-bold shadow-md transition-transform duration-300 hover:scale-110">2</div>
                        </div>

                        <div className="flex-1 flex lg:order-2 md:order-2 order-1 justify-start lg:pl-8">
                            <div className="bg-white rounded-xl shadow-md max-w-sm p-6 group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex items-center mb-2">
                                    <div className="text-[#dc2626] font-bold text-3xl">02</div>
                                    <div className="ml-2 bg-pink-100 text-[#dc2626] rounded-full w-12 h-12 flex items-center justify-center text-lg transition-colors duration-300 group-hover:bg-[#dc2626] group-hover:text-white"><Truck /></div>
                                </div>
                                <h3 className="font-semibold text-gray-800 text-xl text-right mb-1 transition-colors duration-300 group-hover:text-[#dc2626]">We Pick Up</h3>
                                <p className="text-gray-600 text-sm text-right">
                                    Our professional team collects your package from your location at the scheduled time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4 w-full mt-16">
                        <div className='flex-1 flex justify-end lg:pr-8 md:pr-8'>
                            <div className='bg-white p-6 rounded-xl shadow-md max-w-sm text-left group transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
                                <div className='flex items-center mb-2 gap-4'>
                                    <div className='text-[#dc2626] font-bold text-3xl'>03</div>
                                    <div className='bg-pink-100 text-[#dc2626] font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg transition-colors duration-300 group-hover:bg-[#dc2626] group-hover:text-white'><LocateIcon /></div>
                                </div>
                                <h3 className='font-semibold text-gray-800 text-xl mb-1 transition-colors duration-300 group-hover:text-[#dc2626]'>Track in Real-time</h3>
                                <p className='text-gray-600 text-sm'>
                                    Monitor your shipment progress with live GPS tracking and status updates.
                                </p>
                            </div>
                        </div>    

                        <div className='flex-none z-10'>
                            <div className='bg-[#dc2626] text-white rounded-full h-15 w-15 flex items-center justify-center text-lg font-bold shadow-md transition-transform duration-300 hover:scale-110'>3</div>
                        </div>

                        <div className='flex-1'></div>
                    </div>

                    <div className='flex flex-col lg:flex-row md:flex-row items-center gap-4 w-full mt-16'>
                        <div className='flex-1'></div>

                        <div className='flex-none lg:order-1 md:order-1 order-2 z-10'>
                            <div className='bg-[#dc2626] text-white rounded-full w-15 h-15 flex items-center justify-center text-lg font-bold shadow-md transition-transform duration-300 hover:scale-110'>4</div>
                        </div>

                        <div className='flex-1 flex lg:order-2 md:order-2 order-1 justify-start lg:pl-8'>
                            <div className='bg-white rounded-xl shadow-md max-w-sm p-6 group transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
                                <div className='flex items-center mb-2'>
                                    <div className='text-[#dc2626] font-bold text-3xl'>04</div>
                                    <div className='ml-2 bg-pink-100 text-[#dc2626] rounded-full w-12 h-12 flex items-center justify-center text-lg transition-colors duration-300 group-hover:bg-[#dc2626] group-hover:text-white'><CheckCheck /></div>
                                </div>
                                <h3 className='font-semibold text-gray-800 text-xl text-right mb-1 transition-colors duration-300 group-hover:text-[#dc2626]'>Safe Delivery</h3>
                                <p className='text-gray-600 text-sm text-right'>
                                    Your package is delivered safely to the destination with confirmation receipt.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    )
}

export default HowItWorks