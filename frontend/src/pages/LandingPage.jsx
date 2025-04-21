// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="mb-4">Please login or sign up to continue</p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
