import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/authSlice"; // Login action
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser(email, password)); // Dispatch login action
    console.log("Logged in");
  };

  return (
    <div className="bg-purple-50 min-h-screen flex justify-center items-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-500">
          Welcome
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <a
            href="#forgot-password"
            className="text-sm text-purple-500 hover:text-purple-600"
          >
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Log In
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="text-purple-500 hover:text-purple-600 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
