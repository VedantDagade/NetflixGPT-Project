import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Login Form */}
      <form className="absolute w-3/12 max-w-md p-10 bg-black opacity-80 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-full bg-gray-800 text-white border border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-6 w-full bg-gray-800 text-white border border-gray-600 rounded"
        />

        <button className="w-full bg-red-700 py-4 font-semibold rounded hover:bg-red-800 transition">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
