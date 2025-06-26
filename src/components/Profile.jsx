// src/components/Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Profile.css';
import Navbar from "./Navbar";


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching profile", err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <>
    <Navbar />
   <div className="profile-container">
  <div className="profile-header">
    <h2>Your Profile</h2>
  </div>
  <div className="profile-details">
    <div><strong>Name:</strong> {user.name}</div>
    <div><strong>Email:</strong> {user.email}</div>
    <div><strong>Bio:</strong> {user.bio}</div>
    <div><strong>Skills:</strong> {user.skills}</div>
    <div><strong>GitHub:</strong> {user.github}</div>
    <div><strong>Experience:</strong> {user.experience}</div>
    <div><strong>Projects:</strong> {user.projects}</div>
  </div>
   {/* <div className="applied-jobs">
  <h3>Applied Jobs</h3>
  {user.appliedJobs?.length ? (
    user.appliedJobs.map((job, idx) => (
      <div key={idx} className="job-entry">
        <p><strong>{job.title}</strong> at {job.company}</p>
        <p>{job.location} - {job.type}</p>
      </div>
    ))
  ) : (
    <p>No jobs applied yet.</p>
  )}
</div> */}

</div>
</>
  );
};

export default Profile;
