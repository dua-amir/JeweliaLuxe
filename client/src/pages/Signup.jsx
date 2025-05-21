// src/pages/Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return alert("Fill all fields.");

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert("Signup failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-yellow-800">Sign Up</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-gray-800"
          onChange={(e) => setName(e.target.value)}
        />
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
          className="w-full bg-yellow-800 text-white py-2 rounded-md hover:bg-gray-800"
        >
          Register
        </button>
        <p className="text-sm text-center mt-2 text-yellow-800">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-yellow-800 text-bold font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
