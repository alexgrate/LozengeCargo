import React from 'react'
import { teamMembers } from '../constants'

const TeamSection = () => {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='max-w-5xl mx-auto lg:px-8 px-6'>
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
                            <img src={member.image} alt={member.name} className='w-full h-64 object-cover' />
                            <div className="p-5">
                                <h3 className="text-sm font-semibold">{member.name}</h3>
                                <p className="text-xs font-medium text-blue-600">
                                {member.role}
                                </p>
                                <p className="mt-2 text-gray-600 text-xs">
                                {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TeamSection