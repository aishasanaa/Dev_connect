import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return;

    axios
      .get(`http://localhost:5000/api/auth/me?email=${email}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  if (!user) {
    return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Welcome, {user.name}</h1>
      
      <div style={cardStyle}>
        <h2>Profile Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio || "Not added yet"}</p>
        <p><strong>Skills:</strong> {user.skills?.join(", ") || "Not added yet"}</p>
        <p><strong>GitHub:</strong> <a href={user.github} target="_blank" rel="noreferrer">{user.github}</a></p>
        <p><strong>Experience:</strong> {user.experience || "Not added"}</p>
        <p><strong>Projects:</strong> {user.projects || "Not added"}</p>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "2rem",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const cardStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "1.5rem",
  borderRadius: "10px",
  backgroundColor: "#f0f0f0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "left",
};

export default Dashboard;
