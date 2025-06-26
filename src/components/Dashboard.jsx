import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    skills: "",
    github: "",
    experience: "",
    projects: ""
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setProfile(res.data))
        .catch((err) => console.error("Error loading profile", err));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:5000/api/auth/profile",
        profile,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("✅ Profile updated successfully!");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      setMessage("❌ Failed to update profile.");
      console.error(err);
    }
  };

  const handleViewJobs = () => {
    navigate("/jobs");
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Profile</h2>
        <form onSubmit={handleUpdate}>
          {["name", "email", "bio", "skills", "github", "experience", "projects"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={profile[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          ))}
          <div className="button-group">
            <button type="submit">Update Profile</button>
            <button type="button" onClick={handleViewJobs} className="view-jobs-btn">
              View Jobs
            </button>
          </div>
        </form>
        {message && (
          <p style={{ color: message.includes("❌") ? "red" : "green" }}>
            {message}
          </p>
        )}
      </div>
    </>
  );
}

export default Dashboard;
