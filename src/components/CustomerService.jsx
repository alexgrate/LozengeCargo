import React, { useState } from 'react'
import { Phone, Mail, MessageCircle, MessageSquare} from 'lucide-react'
import { faq } from '../constants'
import FaqItem from '../constants/FaqItem'

const CustomerService = () => {
    const [activeTab, setActiveTab] = useState('contact')


    const renderContactForm = () => (
        <form action="" className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Enter your full name" />
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="your@email.com" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Tracking Number</label>
                    <input type="text" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Enter tracking number if applicable" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Category *</label>
                    <select className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                        <option>Select category</option>
                        <option value="Tracking-issues">Tracking Issues</option>
                        <option value="Delivery-problem">Delivery Problem</option>
                        <option value="Damaged-package">Damaged Package</option>
                        <option value="Billing-questions">Billing Questions</option>
                        <option value="Quote-request">Quote Request</option>
                        <option value="General-inquiry">General Inquiry</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Compliment">Compliment</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Priority *</label>
                    <select className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                        <option>Select priority</option>
                        <option value="General-inquiry">Low - General Inquiry</option>
                        <option value="Standard-issue">Medium - Standard Issue</option>
                        <option value="Urgent-matter">High - Urgent Matter</option>
                        <option value="Emergency">Critical - Emergency</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Subject *</label>
                <input type="text" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Brief description of your inquiry" />
            </div>
            <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
                <textarea className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" rows={4} placeholder="Please provide detailed information about your inquiry..."></textarea>
                <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
            </div>

            <button type="submit" className="w-full lg:w-44 flex items-center justify-center mx-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 transition transform duration-300 hover:scale-105 cursor-pointer">Send Message</button>
        </form>
    )

    const renderFAQ = () => (
        <div className="space-y-6">
            {faq.map((item, index) => (
                <FaqItem key={item.id} item={item} index={index + 1} />
            ))}
        </div>
    )


    return (
        <section className='bg-blue-50 py-16'>
            <div className='max-w-4xl mx-auto px-4'>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Service</h1>
                    <p className="text-sm text-gray-600">We're here to help! Get support, find answers, or contact our team for assistance with your shipping needs.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className='text-blue-600 w-4 h-4' />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Phone Support</h3>
                        <p className="text-blue-600 text-sm">+1 (800) 123-4567</p>
                        <p className="text-gray-600 text-xs mb-3">24/7 Customer Support</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available 24/7</span>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className='text-blue-600 w-4 h-4'/>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Email Support</h3>
                        <p className="text-blue-600 text-sm">support@logistics.com</p>
                        <p className="text-gray-600 text-xs">General inquiries</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Response within 2 hours</span>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className='text-blue-600 w-4 h-4'/>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Live Chat</h3>
                        <p className="text-blue-600 text-sm">Chat with us now</p>
                        <p className="text-gray-600 text-xs mb-3">Instant Support</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available 24/7</span>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageSquare className='text-blue-600 w-4 h-4'/>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">WhatsApp</h3>
                        <p className="text-blue-600 text-sm">+1 (800) 123-4567</p>
                        <p className="text-gray-600 text-xs mb-3">Message us anytime</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Quick responses</span>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-md p-6 borderborder-blue-200'>
                    <div className='flex flex-row items-center mb-6 gap-4 border-b-1 border-gray-300 pb-2.5'>
                        <button onClick={() => setActiveTab('contact')} className={`text-xs font-normal cursor-pointer ${activeTab === 'contact' ? 'text-blue-600': 'text-gray-500 hover:text-gray-800'}`}>Contact Form</button>
                        <button onClick={() => setActiveTab('faq')} className={`text-xs font-normal cursor-pointer ${activeTab === 'faq' ? 'text-blue-600': 'text-gray-500 hover:text-gray-800'}`}>FAQ</button>
                    </div>

                    {activeTab === 'contact' ? renderContactForm() : renderFAQ()}
                </div>
            </div>
        </section>
    )
}

export default CustomerService