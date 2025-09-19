import React from 'react'

const ShipNowForm = () => {
    return (
        <section className='bg-blue-50 py-12 px-4 '>
            <div className='max-w-2xl mx-auto '>
                <h1 className='text-4xl font-bold text-gray-900 text-center mb-2'>Ship Now</h1>
                <p className='text-gray-600 text-center mb-8'>Complete the form below to schedule your shipment. We'll provide you with an instant quote and arrange pickup.</p>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-1.5'>Sender Information</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className='block text-xs font-medium text-gray-700 mb-1'>Full Name *</label>
                            <input 
                                type="text" 
                                placeholder="Enter sender's full name" 
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm' 
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-xs font-medium text-gray-700 mb-1'>Email Address *</label>
                        <input
                            type="email"
                            placeholder="sender@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Address *</label>
                        <input
                            type="text"
                            placeholder="Street address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm mb-4"
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />

                            <input
                                type="text"
                                placeholder="State/Province"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input
                                type="text"
                                placeholder="Country"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-1.5">Recipient Information</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                            <input
                                type="text"
                                placeholder="Enter recipient's full name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                        type="email"
                        placeholder="recipient@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Address *</label>
                        <input
                            type="text"
                            placeholder="Street address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm mb-4"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />

                            <input
                                type="text"
                                placeholder="State/Province"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        />

                        <input
                            type="text"
                            placeholder="Postal Code"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-1.5">Package Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Package Type *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm">
                                <option>Select package type</option>
                                <option value="Envelope">Envelope</option>
                                <option value="Box">Box</option>
                                <option value="Tube">Tube</option>
                                <option value="Pallet">Pallet</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Weight (kg) *</label>
                            <input
                                type="number"
                                placeholder="0.0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Length (cm) *</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Width (cm) *</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Height (cm) *</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Declared Value ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Package Description *</label>
                        <textarea
                        placeholder="Describe the contents of your package..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        rows={3}
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-1.5">Shipping Options</h2>
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Delivery Speed *</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm">
                            <option>Select delivery speed</option>
                            <option value="Standard">Standard (5-7 business days)</option>
                            <option value="Express">Express (2-3 business days)</option>
                            <option value="Overnight">Overnight (Next business day)</option>
                            <option value="Same-day">Same Day</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-6 mb-4">
                        <label className="flex items-center text-xs">
                        <input type="checkbox" className="mr-2" />
                        Add Insurance Coverage
                        </label>
                        <label className="flex items-center text-xs">
                        <input type="checkbox" className="mr-2" />
                        Require Signature on Delivery
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Special Instructions</label>
                        <textarea
                        placeholder="Any special handling instructions..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        rows={3}
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full lg:w-auto bg-blue-600 text-white font-semibold py-3 px-2 flex justify-center mx-auto rounded-md hover:bg-blue-700">
                        Submit Shipping Request
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ShipNowForm