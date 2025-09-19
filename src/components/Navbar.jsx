import { useState }from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { navItems } from '../constants'
import {Menu, X } from "lucide-react"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/10'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-o '>
                        <img className='h-full w-full mr-2' src={logo} alt="logo" />
                    </div>

                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index} className='hover:text-[#dc2626]'>
                                <NavLink to={item.href}>{item.label}</NavLink>
                            </li>
                        )
                    )}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-2 items-center">
                        <NavLink to="/Login" className='py-2 px-3 rounded-md hover:text-[#dc2626]'>
                            Login
                        </NavLink>

                        <NavLink to="/SignUp" className='bg-[#dc2626] hover:bg-[#b82222] text-white py-2 px-3 rounded-md'>
                            Sign Up
                        </NavLink>
                    </div>

                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar} className='cursor-pointer'>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-white w-full p-5 flex flex-col justify-center items-baseline lg:hidden">
                        <ul className='border-t w-full border-gray-300'>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 hover:text-[#dc2626] '>
                                    <NavLink to={item.href}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col space-x-6 border-t pt-4 border-gray-300 w-full">
                            <NavLink to="/Login" className='py-2 hover:text-[#dc2626]'>
                                Login
                            </NavLink>
                            <NavLink href="/SignUp" className='py-3 text-center rounded-md bg-[#dc2626] text-white hover:bg-[#b82222]'>
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar