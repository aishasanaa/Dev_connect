// src/pages/GetStarted.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
import Navbar from "./Navbar";

const GetStarted = () => {
  return (
    <>
    <Navbar/>
    <div className="get-started-container">
      <h1>Welcome to DevConnect </h1>
      <p>Get started by logging in or creating an account.</p>
      <div className="get-started-buttons">
        <Link to="/login" className="gs-btn">Login</Link>
        <Link to="/register" className="gs-btn">Register</Link>
      </div>
    </div>
    </>
  );
};

export default GetStarted;
