import React from 'react'

const GetStarted = () => {
    return (
        <section className=" px-6 text-center text-white ">
            <div className='px-6 py-16 max-w-4xl mx-auto rounded-4xl mb-20 bg-gradient-to-r from-blue-500 to-indigo-600' >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to take the next step?
                </h2>
                <p className="text-lg mb-8">
                    Join thousands of satisfied customers who trust us with their shipping needs every day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow cursor-pointer hover:bg-gray-100 hover:scale-x-105 transition">
                        Get Started
                    </button>
                    <button className="border border-white px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-white hover:scale-x-105 hover:text-blue-600 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted