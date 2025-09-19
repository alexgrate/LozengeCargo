import React from 'react'

const Stats = () => {
    return (
        <section className='bg-blue-50 py-8 px-4'>
            <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-black rounded-xl px-8 py-4 grid grid-cols-2 sm:grid-cols-4 text-white shadow-md">
                <div className="text-center">
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-xs">Years of Excellence</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">50K+</p>
                    <p className="text-xs">Happy Customers</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">2M+</p>
                    <p className="text-xs">Packages Delivered</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">40+</p>
                    <p className="text-xs">Countries Served</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Stats