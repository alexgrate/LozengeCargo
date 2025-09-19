import React, { useState } from 'react'
import { hardcodedResults, sampleTrackingNumbers } from '../constants'
import { User, Truck, Locate, Phone, MessageCircleDashed, File } from 'lucide-react'

const TrackingPackage = () => {
    const [trackingNumber, setTrackingNumber] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [error, setError] = useState('')

    
    const handleTrack = () => {
        const upperTracking = trackingNumber.toUpperCase().trim();
        setTrackingNumber(upperTracking);
        setError('');
        if (sampleTrackingNumbers.includes(upperTracking)) {
            setShowResults(true);
        } else {
            setShowResults(false);
            setError('Invalid tracking number. Please try one of the sample numbers.');
        }
    };


    return (
        <section  className='bg-blue-50 py-12 px-4'>
            <div className='max-w-3xl mx-auto'>
                {!showResults ? (
                <>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Track Your Shipment</h1>
                    <p className="text-gray-600 text-sm mb-8 text-center">Enter your tracking number to get real-time updates on your package</p>
                    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Number</label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input 
                                type="text"
                                placeholder="Enter your tracking number (e.g., TRK123456789)"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                            onClick={handleTrack}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >Track Package</button>
                        </div>
                        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                    </div>
                </>
                ) : (
                <>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Track Your Shipment</h1>
                    <p className="text-gray-600 text-sm mb-8 text-center">Enter your tracking number to get real-time updates on your package</p>
                    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Number</label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input 
                                type="text"
                                placeholder="Enter your tracking number (e.g., TRK123456789)"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                            onClick={handleTrack}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >Track Package</button>
                        </div>
                        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                    </div>


                    <div className='bg-white p-6 rounded-xl shadow-md mb-6'>
                        
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col items-baseline'>
                                <h1 className='text-xl font-bold text-gray-900 mb-2'>{hardcodedResults.number}</h1>
                                <div className='flex items-center mb-4'>
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-green-600 font-medium">{hardcodedResults.status}</span>
                                </div>
                            </div>
                            
                            <div className="mt-4 text-right">
                                <p className="text-xs text-gray-600">Estimated Delivery</p>
                                <p className="font-medium text-sm">{hardcodedResults.estimatedDelivery}</p>
                            </div>
                        </div>
                        

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border-b-1 pb-4 border-gray-300'>
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <div className="text-blue-500 mb-1 flex justify-center"><Locate /></div>
                                    <p className="text-xs text-gray-600">Current Location</p>
                                    <p className="font-medium text-sm">{hardcodedResults.currentLocation}</p>
                                </div>
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <div className="text-green-500 mb-1 flex justify-center"><User /></div>
                                <p className="text-xs text-gray-600">Recipient</p>
                                <p className="font-medium text-sm">{hardcodedResults.recipient}</p>
                            </div>
                            <div className="text-center p-4 bg-gray-100 rounded-lg">
                                <div className="text-purple-500 mb-1 flex justify-center"><Truck /></div>
                                <p className="text-xs text-gray-600">Service</p>
                                <p className="font-medium text-sm">{hardcodedResults.service}</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                            <div>
                                <p className="text-sm text-gray-600">Origin</p>
                                <p className="font-medium">{hardcodedResults.origin}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Destination</p>
                                <p className="font-medium">{hardcodedResults.destination}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Weight</p>
                                <p className="font-medium">{hardcodedResults.weight}</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipment Timeline</h2>
                        <div className="space-y-4">
                            {hardcodedResults.timeline.map((step, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${index < hardcodedResults.timeline.length - 1 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                                
                                <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row items-start justify-between w-full">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <span className="text-lg mr-2">{step.icon}</span>
                                            <span className="font-medium text-sm text-gray-900">{step.status}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">{step.location}</p>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                    

                                     <div>
                                        <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                                    </div>
                                </div>
                                
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <Phone className='w-4 h-4 mr-2 text-blue-600' />
                            Call Support
                            </button>
                            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <MessageCircleDashed className='w-4 h-4 mr-2 text-blue-600' />
                            Live Chat
                            </button>
                            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <File className='w-4 h-4 mr-2 text-blue-600' />
                            File Claim
                            </button>
                        </div>
                    </div>
                </>
                )}
            </div>
        </section>


    )
}

export default TrackingPackage