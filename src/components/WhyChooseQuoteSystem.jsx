import React from 'react';
import { Clock, CheckCircle, Headset } from 'lucide-react';

function WhyChooseQuoteSystem() {
    return (
        <section className="bg-gray-50 py-16 px-4 mt-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Our Quote System</h1>
                <p className="text-gray-600 text-lg mb-12">Get accurate, transparent pricing with our advanced quote calculator</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 md:px-14">

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                        <Clock className="w-6 h-6" />
                    </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Instant Estimates</h2>
                    <p className="text-gray-600 text-sm">
                    Get immediate pricing estimates with our advanced calculation engine based on real-time rates.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-center mb-4">
                    <div className="bg-green-100 text-green-600 rounded-full p-3">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Accurate Pricing</h2>
                    <p className="text-gray-600 text-sm">
                    Our quotes are based on actual shipping costs and include all fees for complete transparency.
                    </p>
                </div>

                {/* Card 3: Expert Support */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-center mb-4">
                    <div className="bg-purple-100 text-purple-600 rounded-full p-3">
                        <Headset className="w-6 h-6" />
                    </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h2>
                    <p className="text-gray-600 text-sm">
                    Our logistics experts review every quote to ensure accuracy and provide personalized recommendations.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseQuoteSystem;