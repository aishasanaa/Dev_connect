import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    skills: "",
    github: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/user/profile", {
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
      const res = await axios.put(
        "http://localhost:5000/api/user/profile",
        profile,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("✅ Profile updated successfully!");
    } catch (err) {
      setMessage("❌ Failed to update profile.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👤 Your Developer Profile</h2>
      <form onSubmit={handleUpdate}>
        {["name", "email", "bio", "skills", "github"].map((field) => (
          <div key={field} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name={field}
              value={profile[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              style={{ width: "100%", padding: "10px", borderRadius: "8px" }}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: "10px", borderRadius: "8px", background: "#007bff", color: "white" }}>
          Update Profile
        </button>
      </form>
      {message && <p style={{ marginTop: "10px", color: message.includes("❌") ? "red" : "green" }}>{message}</p>}
    </div>
  );
}

export default Dashboard;
