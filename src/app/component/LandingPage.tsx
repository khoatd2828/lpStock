import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-600 min-h-screen text-white">
      <header className="flex justify-between items-center px-6 py-4 bg-blue-900 shadow-md">
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">Service</a>
          <a href="#" className="hover:text-blue-300">About</a>
          <a href="#" className="hover:text-blue-300">Product</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-blue-300 hover:text-white">Sign In</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-16">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold">
            STOCK EXCHANGE <span className="text-blue-300">PLATFORM</span>
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              See More
            </button>
            <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded">
              Register
            </button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="/chart-illustration.png"
            alt="Chart Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </main>

      <footer className="text-center py-4 bg-blue-900 text-blue-200">
        © 2024 Stock Exchange Platform
      </footer>
    </div>
  );
};

export default LandingPage;
