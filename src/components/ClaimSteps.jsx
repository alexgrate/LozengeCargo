import React from 'react'

const ClaimSteps = () => {
    return (
        <section className="bg-blue-50 flex flex-col items-center justify-center py-10 px-3">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">File a Claim</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Submit a claim for damaged, lost, or delayed packages. Please provide
                detailed information to help us process your claim quickly.
                </p>
            </div>

            <div className='bg-transparent p-6 mb-10 rounded-lg shadow-xl w-full max-w-3xl'>
                <h2 className="text-sm sm:text-lg font-semibold text-blue-950 mb-6 text-left">
                    Claim Process Timeline
                </h2>
                <div className="flex justify-between flex-col sm:flex-row items-center">
                    <div className="text-center">
                        <div className="w-8 h-8 text-xs bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                        1
                        </div>
                        <p className="text-gray-600 text-sm">Submit Form</p>
                    </div>

                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div className="text-center">
                        <div className="w-8 h-8 text-xs bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                        2
                        </div>
                        <p className="text-gray-600 text-sm">Review (5-7 days)</p>
                    </div>

                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div className="text-center">
                        <div className="w-8 h-8 text-xs bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                        3
                        </div>
                        <p className="text-gray-600 text-sm">Investigation</p>
                    </div>

                    <div className="flex-1 h-1 bg-gray-300"></div>
                    <div className="text-center">
                        <div className="w-8 h-8 text-xs bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                        4
                        </div>
                        <p className="text-gray-600 text-sm">Resolution</p>
                    </div>
                </div>
            </div>


            <div className='bg-white rounded-lg shadow-md w-full max-w-3xl p-6'>
                <form action="">
                    <h3 className='text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1'>Claim Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Claim Type *</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none">
                                <option>Select claim type</option>
                                <option value="Damaged">Package Damage</option>
                                <option value="Lost">Lost Package</option>
                                <option value="Delayed">Delayed Delivery</option>
                                <option value="Theft">Package Theft</option>
                                <option value="Loss">Partial Loss</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Tracking Number *</label>
                            <input
                                type="text"
                                placeholder="Enter tracking number"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none "
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Shipment Date *</label>
                        <div className="relative">
                            <input
                                type="date"
                                placeholder="dd/mm/yyyy"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1">Claimant Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                        />
                        </div>
                        <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                        />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1">Shipment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Sender Name</label>
                            <input
                                type="text"
                                placeholder="Name of sender"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Recipient Name</label>
                            <input
                                type="text"
                                placeholder="Name of recipient"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Package Description *</label>
                        <textarea
                            placeholder="Detailed description of package contents..."
                            className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none h-24"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Declared Value ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Actual Value ($) *</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1">Incident Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Incident Date</label>
                            <div className="relative">
                                <input
                                type="date"
                                placeholder="dd/mm/yyyy"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Incident Location</label>
                            <input
                                type="text"
                                placeholder="Where did the incident occur?"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Damage/Loss Description *</label>
                        <textarea
                            placeholder="Detailed description of damage or loss..."
                            className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none h-24"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                    </div>

                    <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Circumstances Description</label>
                        <textarea
                            placeholder="Describe the circumstances that led to the damage/loss..."
                            className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none gray-500 h-24"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1">Witness Information (if applicable)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Witness Name</label>
                            <input
                                type="text"
                                placeholder="Full name of witness"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Witness Contact</label>
                            <input
                                type="text"
                                placeholder="Phone or email"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1">Financial Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Repair Cost ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Replacement Cost ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Additional Expenses ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none"
                            />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-6 border-b-1 border-gray-300 pb-1">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Previous Claims</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none">
                                <option>Have you filed claims before?</option>
                                <option value="No">No previous claims</option>
                                <option value="1">1 previous claim</option>
                                <option value="2-5">2-5 previous claims</option>
                                <option value=">5">More than 5 claims</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Insurance Coverage</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none">
                                <option>Was insurance purchased?</option>
                                <option value="Yes">Yes, insurance was purchased</option>
                                <option value="No">No insurance coverage</option>
                                <option value="Unsure">Unsure</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Additional Information</label>
                        <textarea
                            placeholder="Any additional information that might help with your claim..."
                            className="w-full p-2 border border-gray-300 rounded-md text-black font-normal text-sm focus:border-blue-800 focus:ring-1 focus:ring-black focus:outline-none h-24"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition transform duration-300 hover:bg-blue-700 hover:scale-105 cursor-pointer">
                        Submit Claim
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ClaimSteps