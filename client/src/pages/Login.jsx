/*
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Basic Validation
    if (currentState === 'Sign Up' && !formData.name.trim()) {
      alert('Name is required for Sign Up');
      return;
    }
    if (!formData.email.trim() || !formData.password.trim()) {
      alert('Email and Password are required');
      return;
    }

    // Direct API call with full backend URL (updated to match your backend's port)
    const endpoint = currentState === 'Login' 
      ? 'http://localhost:5000/api/login'  // Corrected URL for Login
      : 'http://localhost:5000/api/signup';  // Corrected URL for Sign Up

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert(`${currentState} successful!`);
        // Handle token/session storage here if needed
      } else {
        alert(response.data.message || 'An error occurred');
      }
    } catch (err) {
      alert('Network error. Try again later.');
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-[90%] sm:max-w-md mx-auto mt-20 gap-3"
    >
      
      <div className="flex items-center justify-center mb-3">
        <p className="text-2xl sm:text-3xl">{currentState}</p>
        <hr className="w-12 border-gray-900 ml-2" />
      </div>

      
      {currentState === 'Sign Up' && (
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      )}

   
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
      />

 
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
      />

      <div className="flex justify-between text-sm">
        <p className="text-black cursor-pointer hover:underline">
          Forgot your password?
        </p>
        <p
          className="text-black cursor-pointer hover:underline"
          onClick={() =>
            setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
          }
        >
          {currentState === 'Login' ? 'Create Account' : 'Login'}
        </p>
      </div>

      <button
        type="submit"
        className="w-auto bg-black text-white py-2 px-8 rounded-none hover:bg-gray-800 transition duration-200 mx-auto"
      >
        {currentState}
      </button>
    </form>
  );
};



export default Login;
*/


// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill in all fields.");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/home");
    } catch (err) {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-900">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-800"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-800"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Sign In
        </button>
        <p className="text-sm text-center mt-2">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-gray-800 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

