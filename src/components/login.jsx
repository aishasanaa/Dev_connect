import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  console.log('email',email);
  const [password, setPassword] = useState("");
    console.log('password',password);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
console.log('response',res.data);
       if ( res.data.message === "Login successful") {
          localStorage.setItem("token", res.data.token)
        localStorage.setItem("email", res.data.email);
       localStorage.setItem("name", res.data.name);
        localStorage.setItem("userId", res.data.token);
         alert("Login successful!");
         navigate("/dashboard");
       } else {
         alert("Login failed");
       }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Check credentials.");
    }
  };

  // --- Styling ---
  const wrapperStyle = {
    background: "linear-gradient(to right, #d8b4fe, #f0abfc)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const formContainer = {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyle = {
    marginBottom: "15px",
    padding: "10px",
    width: "250px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  const buttonStyle = {
    background: "#a855f7",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  return (
    <div style={wrapperStyle}>
      <form onSubmit={handleLogin} style={formContainer}>
        <h2 style={titleStyle}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;
