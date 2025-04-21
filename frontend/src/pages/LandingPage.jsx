import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-purple-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header/Navigation */}
        <header className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-purple-600 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold">Timely</span>
          </div>

          {/* Navbar for desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={"/login"} className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link
              to={"/signup"}
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full"
            >
              Sign up
            </Link>
          </nav>

          {/* Hamburger menu for mobile */}
          <div
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zM3 10h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1zM3 15h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-start space-y-4 mt-4">
            <Link to={"/login"} className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link
              to={"/signup"}
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full"
            >
              Sign up
            </Link>
          </nav>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center py-16 ml-10 mr-10 mt-20">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Event booking,
              <span className="text-purple-500"> simplified.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Schedule, manage and register for events with a platform that
              works as efficiently as you do.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to={"/login"}>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-4 rounded-full w-full sm:w-auto">
                  Get started
                </button>
              </Link>
              <button className="border border-purple-500 text-purple-500 hover:bg-purple-50 font-medium px-8 py-4 rounded-full w-full sm:w-auto">
                See how it works
              </button>
            </div>
            <p className="text-gray-500 mt-6">
              No credit card required. Free for 30 days.
            </p>
          </div>

          {/* Right Side - Dashboard Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Dashboard Header */}
              <div className="bg-purple-500 rounded-lg p-3 mb-4">
                <div className="flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                  </div>
                  <span className="text-white">Timely Dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-2">
                {/* First row */}
                <div className="flex mb-4 space-x-4">
                  <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                </div>

                {/* Second row */}
                <div className="flex mb-4 space-x-4">
                  <div className="w-1/2">
                    <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                  </div>
                  <div className="w-1/2">
                    <div className="h-24 bg-purple-100 rounded-lg w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                  </div>
                </div>

                {/* Third row */}
                <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
