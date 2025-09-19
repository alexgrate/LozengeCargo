import React from 'react';
import logo from "../assets/logo.png"
import { Instagram, Facebook, Twitter, PhoneCall, Mail, LocateIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 lg:px-16 md:px-16 sm:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b-2 pb-6 border-red-200">
                <div>
                    <div className="flex items-center mb-2">
                        <div className="rounded-full flex items-center justify-center mr-2">
                            <img className='h-full w-full object-cover' src={logo} alt="logo" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Your trusted logistics partner for fast, secure, and reliable shipping solutions worldwide.
                    </p>
                    <div className="flex space-x-6 mt-2 pl-2 pt-2">
                        <a href="#" className="text-gray-400 hover:text-red-500"><Instagram className='w-4 h-4' /></a>
                        <a href="#" className="text-gray-400 hover:text-red-500"><Facebook className='w-4 h-4 '/></a>
                        <a href="#" className="text-gray-400 hover:text-red-500"><Twitter className='w-4 h-4' /></a>
                    </div>
                </div>

                <div>
                <h3 className="font-semibold mb-2">Services</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                    <li><NavLink to="/ShipNow" className="hover:text-white text-xs">Ship Now</NavLink></li>
                    <li><NavLink to="/TrackShipment" className="hover:text-white text-xs">Track Package</NavLink></li>
                    <li><NavLink to="/GetQuote" className="hover:text-white text-xs">Get Quote</NavLink></li>
                    <li><NavLink to="/FileClaim" className="hover:text-white text-xs">File a Claim</NavLink></li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                    <li><NavLink to="/Support" className="hover:text-white text-xs">Customer Service</NavLink></li>
                    <li><NavLink to="/About" className="hover:text-white text-xs">About Us</NavLink></li>
                    <li><NavLink to="/PrivacyPolicy" className="hover:text-white text-xs">Privacy Policy</NavLink></li>
                    <li><NavLink to="/Terms&Conditions" className="hover:text-white text-xs">Terms & Conditions</NavLink></li>
                </ul>
                </div>

                <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <ul className="text-gray-400 text-xs space-y-1">
                    <li className="flex items-center gap-2"><PhoneCall className='w-3 h-3 text-[#dc2626]' /> +1 (555) 123-3567</li>
                    <li className="flex items-center gap-2"><Mail className='w-3 h-3 text-[#dc2626]' /> support@logistics.com</li>
                    <li className="flex items-center gap-2"><LocateIcon className='w-3 h-3 text-[#dc2626]' /> 123 Logistics Ave, City, State 12345</li>
                </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-6 flex items-center justify-between text-gray-500 text-sm text-center md:text-left">
                <p className='text-xs'>© 2025 Lozenge Logistics. All rights reserved.</p>
                <p className="text-xs group transition duration-300 hover:text-white">Made by <a href='' className="text-red-500 transition-colors duration-300 group-hover:text-white">Dominion</a></p>
            </div>
        </footer>
    );
};

export default Footer;