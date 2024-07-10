import React from 'react';
// import './App.css';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <p className="text-center">Enter Login details to get access</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="username">
              Username Or Email Address
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Username / Email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm">
              Keep Me Logged In
            </label>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Don’t have an account? <a href="#" className="text-red-600 hover:underline">Sign Up here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
