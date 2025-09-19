import React from 'react'
import { User, Mail, LockKeyhole, EyeClosed, EyeOff, } from 'lucide-react'

const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
        <section className='bg-blue-50 flex items-center justify-center py-12 px-4'>
            <div className='max-w-sm w-full'>
                <div className='shadow-md bg-white rounded-lg mt-8 p-8'>
                    <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 mb-4">
                        <User className='text-white' />
                    </div>
                    <h2 className='mt-6 text-center text-2xl font-bold text-gray-900'>Welcome Back</h2>
                    <p className='mt-1 text-center text-sm text-gray-600'>Sign in to your logistics account</p>
                    <form action="" className='mt-6'>
                        <div>
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
                                    placeholder="Enter your email"
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
                                    placeholder="Enter your password"
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

                        <div className='flex items-center justify-between mt-4'>
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-xs font-normal cursor-pointer text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-xs">
                                <a href="#" className="text-blue-600 hover:text-blue-500 cursor-pointer">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="group relative mt-4 cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                Sign In
                            </button>                        
                        </div>

                        <div className="relative flex items-center justify-center mt-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink-0 px-4 text-xs text-gray-600">Or continue with</span>
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
                        Don't have an account?{' '}
                        <a href="/SignUp" className="font-medium text-xs text-blue-600 hover:text-blue-500">
                            Sign up here
                        </a>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm