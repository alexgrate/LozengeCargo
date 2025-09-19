import React from 'react';
import { Calculator, Package, Globe2 } from 'lucide-react';

function QuoteBanner() {
    return (
        <section className='relative bg-gradient-to-b from-blue-800 to-blue-900 py-8 px-4 lg:px-16 md:px-16 sm:px-16 text-white overflow-hidden'>
            <div className="absolute top-0 left-0 opacity-20">
                <Globe2 className="w-64 h-64 md:w-96 md:h-96" />
            </div>

            <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Get Your Quote</h1>
                <p className="text-blue-200 text-sm md:text-lg">
                Get instant pricing for your shipping needs with our advanced quote calculator
                </p>
            </div>

            <div className="relative z-10 flex justify-center items-end mt-6 space-x-4">
                <Package className="w-10 h-10 md:w-14 md:h-14 text-blue-300" />
                <Calculator className="w-14 h-14 md:w-22 md:h-22 text-white" />
                <Package className="w-8 h-8 md:w-12 md:h-12 text-blue-300 transform rotate-12" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
        </section>
    );
}

export default QuoteBanner;