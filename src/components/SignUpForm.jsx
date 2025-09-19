import React, { useState } from 'react'
import { UserPlus, Mail, LockKeyhole, EyeClosed, EyeOff, Phone, BriefcaseBusiness } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const SignUpForm = () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
    

    return (
        <section className='bg-blue-50 flex items-center justify-center py-12 px-4'>
            <div className='max-w-sm w-full'>
                <div className='shadow-md bg-white rounded-lg mt-8 p-8'>
                    <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 mb-4">
                        <UserPlus className='text-white' />
                    </div>
                    <h2 className='mt-6 text-center text-2xl font-bold text-gray-900'>Create Account</h2>
                    <p className='mt-1 text-center text-sm text-gray-600'>Join our logistics platform today</p>
                    <form action="" className='mt-6'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <label htmlFor="firstname" className='block text-xs font-medium text-gray-700 mb-2'>First name</label>
                                <input type="text" placeholder='John' className='text-sm pl-2 block w-full pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                            </div>

                            <div>
                                <label htmlFor="firstname" className='block text-xs font-medium text-gray-700 mb-2'>Last name</label>
                                <input type="text" placeholder='Doe' className='text-sm pl-2 block w-full pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500' />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="email" className='block text-xs font-medium text-gray-700 mb-2'>Email Address</label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className='w-4 h-4 text-gray-500' />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="John@example.com"
                                    className="text-sm pl-10 block w-full pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="tel" className='block text-xs font-medium text-gray-700 mb-2'>Phone Number</label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className='w-4 h-4 text-gray-500' />
                                </div>
                                <input
                                    id="tel"
                                    name="tel"
                                    type="tel"
                                    required
                                    placeholder="+1 (555) 123-4567"
                                    className="text-sm pl-10 block w-full pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="companyName" className='block text-xs font-medium text-gray-700 mb-2'>Company Name (Optional)</label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <BriefcaseBusiness className='w-4 h-4 text-gray-500' />
                                </div>
                                <input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    required
                                    placeholder="Your Company"
                                    className="text-sm pl-10 block w-full pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <LockKeyhole className='w-4 h-4 text-gray-500' />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="Create Password"
                                    className=" text-sm pl-10 block w-full pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="text-gray-500">{showPassword ? <EyeOff className='w-4 h-4' /> : <EyeClosed className='w-4 h-4' />}</span> 
                                </button>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <LockKeyhole className='w-4 h-4 text-gray-500' />
                                </div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    placeholder="Confirm Password"
                                    className=" text-sm pl-10 block w-full pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <span className="text-gray-500">{showConfirmPassword ? <EyeOff className='w-4 h-4' /> : <EyeClosed className='w-4 h-4' />}</span> 
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-xs font-normal cursor-pointer text-gray-900">
                                I agree to the <a href="" className='text-blue-600'>Terms and Conditions</a> and <a href="" className='text-blue-500'>Privacy Policy</a>
                            </label>
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="group relative mt-4 cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                Create Account
                            </button>                        
                        </div>

                        <div className="relative flex items-center justify-center mt-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink-0 px-4 text-xs text-gray-600">Or sign up with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="flex space-x-3 mt-4">
                            <button className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Google</span>
                                <span className="text-red-500">G</span>
                            </button>
                            <button className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Facebook</span>
                                <span className="text-blue-600">f</span>
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-5">
                    <p className="text-xs text-gray-600">
                        Already have an account?{' '}
                        <a href="/Login" className="font-medium text-xs text-blue-600 hover:text-blue-500">
                            Sign in here
                        </a>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpForm