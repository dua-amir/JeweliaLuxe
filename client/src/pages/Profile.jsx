import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setName(res.data.name);
        setEmail(res.data.email);
      } catch {
        alert("Failed to load profile.");
      }
    };
    fetchProfile();
  }, [token]);

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:5000/api/profile",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem("username", name);
      alert("Name updated!");
    } catch {
      alert("Failed to update.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>
      <form onSubmit={updateProfile} className="space-y-4">
        <input className="w-full border p-2 rounded" value={email} disabled />
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Update Name
        </button>
      </form>
    </div>
  );
};

export default Profile;
