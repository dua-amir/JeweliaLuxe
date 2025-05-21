
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/");
      window.location.reload(); 
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
        <h2 className="text-2xl font-semibold text-center text-yellow-700">Login</h2>
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
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-yellow-800"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-yellow-800 text-white py-2 rounded-md hover:bg-gray-800"
        >
          Sign In
        </button>
        <p className="text-sm text-center mt-2 text-yellow-700">
  Don’t have an account?{" "}
  <Link to="/signup" className="text-yellow-700 text-bold font-medium hover:underline">
    Sign Up
  </Link>
</p>
      </form>
    </div>
  );
};

export default Login;

