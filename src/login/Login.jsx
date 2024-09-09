import React from 'react'

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">Remember Me</span>
                        </label>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">Forgot Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-700">Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700">Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}
